import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";


const llm = new ChatOpenAI({
  model: "gpt-5-nano",
  temperature: 1, 
  openAIApiKey: process.env.OPENAI_API_KEY,
});


const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small", 
  openAIApiKey: process.env.OPENAI_API_KEY,
});

let vectorStore: PineconeStore | null = null;


async function initializePinecone() {
  if (!vectorStore) {
    try {
      const pinecone = new PineconeClient({
        apiKey: process.env.PINECONE_API_KEY!,
      });
      const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
      vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex,
        namespace: "smile-science-info", 
      });
      console.log(" Pinecone connected");
    } catch (error) {
      console.error("Pinecone initialization failed:", error);
    }
  }
  return vectorStore;
}

const DOCTORS_DB = {
  dr_pranjal: {
    id: "dr_pranjal",
    name: "Dr. Pranjal Sinha",
    specialty: "Chief Dentist",
    image_url: "/img.png",
    short_bio: "Friendly general dentist focused on patient comfort, preventive care, and painless treatments.",
  }
};

const AgentState = Annotation.Root({
  user_message: Annotation<string>(),
  chat_history: Annotation<Array<{ role: string; content: string }>>({
    reducer: (existing, update) => existing.concat(update),
    default: () => [],
  }),
  intent: Annotation<string>(),
  selected_doctor_id: Annotation<string>(),
  context_from_pinecone: Annotation<string>(),
  user_name: Annotation<string>(),
  final_response: Annotation<any>(),
});


function extractUserName(msg: string, history: Array<{ role: string; content: string }>): string {
  const patterns = [
    /my name (?:is )?([a-zA-Z]{2,15})/i,
    /i(?:'m| am) ([a-zA-Z]{2,15})/i,
    /call me ([a-zA-Z]{2,15})/i,
    /this is ([a-zA-Z]{2,15})/i,
  ];

  for (const pattern of patterns) {
    const match = msg.match(pattern);
    if (match && match[1]) {
      const name = match[1];
      const commonWords = ['going', 'feeling', 'doing', 'here', 'there', 'what', 'when', 'where'];
      if (!commonWords.includes(name.toLowerCase())) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }
    }
  }

  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].role === "user") {
      for (const pattern of patterns) {
        const match = history[i].content.match(pattern);
        if (match && match[1]) {
          return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
        }
      }
    }
  }

  return "";
}

async function intentClassifierNode(state: typeof AgentState.State) {
  const msg = state.user_message.trim();

  if (msg === "INIT_CHAT") return { intent: "welcome" };
  if (msg.includes("ACTION_NAVIGATE_BOOKING")) return { intent: "booking_form_request" };
  if (msg.includes("ACTION_SUBMIT_BOOKING")) return { intent: "booking_submission" };
  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").slice(2).join("_");
    return { intent: "doctor_details", selected_doctor_id: docId };
  }

  const recentHistory = state.chat_history
    .slice(-6)
    .map(m => `${m.role}: ${m.content}`)
    .join("\n");

  const classifierPrompt = `
You are classifying user intent for Smile Science Dentistry.

Recent conversation:
${recentHistory}

Current user message: "${msg}"

Classify into ONE category:
- 'find_doctor': Wants to know about doctor/dentist
- 'services_list': Explicitly asks for services list/menu
- 'emergency': Mentions pain, urgent, broken tooth, swelling, bleeding
- 'booking_form_request': Wants to book/schedule appointment
- 'general_chat': Everything else (questions, greetings, casual talk)

Return ONLY the category word.
`;

  try {
    const response = await llm.invoke(classifierPrompt);
    const intent = response.content.toString().trim().toLowerCase();
    const validIntents = ["find_doctor", "services_list", "emergency", "booking_form_request", "general_chat"];
    return { intent: validIntents.includes(intent) ? intent : "general_chat" };
  } catch (e) {
    console.error("⚠️ Intent Classifier Error:", e);
    return { intent: "general_chat" };
  }
}


async function ragRetrieverNode(state: typeof AgentState.State) {
  try {
    const store = await initializePinecone();
    if (!store) {
      console.log(" Pinecone not available");
      return { context_from_pinecone: "" };
    }

    const query = state.user_message;
    const results = await store.similaritySearch(query, 3);
    
    if (results.length === 0) {
      return { context_from_pinecone: "" };
    }

    const context = results
      .map(doc => doc.pageContent.trim())
      .join("\n\n---\n\n");

    return { context_from_pinecone: context };
  } catch (error) {
    console.error("Pinecone Retrieval Error:", error);
    return { context_from_pinecone: "" };
  }
}


async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = state.chat_history || [];
  const pineconeContext = state.context_from_pinecone || "";
  
  const detectedName = extractUserName(msg, history);
  const userName = state.user_name || detectedName;

  const formattedHistory = history
    .slice(-8)
    .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  const prompt = `
You are the friendly AI receptionist for Smile Science Dentistry in Bangalore.

Role:
- Be the first point of contact for patients.
- Answer questions, clarify doubts, and gently guide users toward booking a visit when appropriate.

Personality:
- Warm, empathetic, reassuring, and professional.
- Talk like a real human, not a robot.
- Use simple, clear language and avoid medical jargon unless the user seems comfortable with it.

Memory & Personalization:
- Remember details from the conversation (name, concerns, preferences).
- If the user has shared their name before, reuse it naturally.
- Never invent personal details that the user has not given.

${userName ? `Important: The user's name is ${userName}. Use it naturally in your reply.\n` : ""}

Knowledge Base:
${pineconeContext ? `Use the following clinic knowledge base to answer accurately. If relevant, quote or paraphrase it in a natural way:\n${pineconeContext}\n` : `If clinic-specific information is needed and not provided, answer generally and suggest contacting the clinic for exact details.\n`}

Basic Clinic Info (always trust this if there is a conflict):
- Doctor: Dr. Pranjal Sinha – Chief Dentist, specializing in patient comfort, preventive care, and painless treatments.
- Location: 5th Floor, 224, 3rd Cross Road, Neeladri Nagar, Electronic City Phase 1, Bangalore.
- Hours: Monday–Saturday, 12 PM–8 PM (Closed Sundays).
- Contact: +916206700442.

Conversation so far:
${formattedHistory}

Current user message:
"${msg}"

Rules:
1. Always stay kind, calm, and reassuring, especially if the user is in pain or anxious.
2. Use the knowledge base and clinic info for all factual answers about services, hours, pricing style, and policies.
3. If you don't know something (like exact prices), say so honestly and suggest calling or WhatsApping the clinic.
4. Match the user's language and tone:
   - If they use Hindi or Hinglish, reply in friendly Hinglish.
   - If they use English, reply in natural Indian English.
   - If they use Hindi, reply in natural Hindi.
5. Keep responses short and focused: usually 2–3 sentences. Only go longer if the user clearly asks for detail.
6. Do NOT use bold formatting (no **text**), markdown, or bullet points in your actual reply. Just plain text.
7. End most replies with a gentle call-to-action like:
   - "Shall we book a visit?"
   - "Would you like to fix an appointment for this?"
   - "If you want, I can help you plan a visit."
8. For location queries, include: We are located at: 4th Floor, 224, 3rd Cross Road, Neeladri Nagar, Electronic City Phase 1, Bangalore.
9. Never give emergency medical advice beyond suggesting urgent in-person visit or calling the clinic.

Your task:
- Think step by step about what the user really wants.
- Use the conversation history and knowledge base.
- Then write ONE helpful, natural reply message to the user (no labels, no prefixes, just the reply text).
`;

  const response = await llm.invoke(prompt);
  const responseText = response.content.toString().replace(/\*\*/g, "");

  return {
    user_name: userName,
    chat_history: [
      { role: "user", content: msg },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
    },
  };
}

function welcomeMessageNode() {
  const welcomeText = "Namaste! 🙏 Welcome to Smile Science Dentistry.\nI'm here to ensure your smile stays healthy. How can I help you today?";
  
  return {
    chat_history: [{ role: "assistant", content: welcomeText }],
    final_response: {
      type: "welcome_card",
      text: welcomeText,
      buttons: [
        { label: "Book Appointment", payload: "ACTION_NAVIGATE_BOOKING" },
        { label: "Meet Dr. Pranjal Sinha", payload: "Who is the doctor?" },
        { label: "Our Treatments", payload: "What treatments do you do?" },
        { label: "Emergency", payload: "I have an emergency" },
      ],
    },
  };
}

function retrieveDoctorProfileNode(state: typeof AgentState.State) {
  const doc = DOCTORS_DB.dr_pranjal;
  const responseText = `👨‍⚕️ Meet Our Specialist at Smile Science Dentistry`;

  return {
    selected_doctor_id: doc.id,
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "card",
      text: `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}`,
      image: doc.image_url,
      buttons: [
        { label: "Book Visit", payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  const doc = DOCTORS_DB.dr_pranjal;
  const responseText = `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}\n\nAvailability: Mon-Sat (12 PM - 8 PM)`;

  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "card",
      text: responseText,
      buttons: [
        { label: `Book with ${doc.name}`, payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function bookingFormNode() {
  const responseText = "Great! Let me help you book an appointment with Dr. Pranjal. Please provide:";
  
  return {
    final_response: {
      type: "booking_form",
      text: responseText,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Enter your full name",
          required: true
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "080-XXXXX-XXXXX",
          required: true,
          pattern: "[0-9]{10}"
        }
      ],
      submitButton: "Book Appointment"
    },
  };
}

async function bookingConfirmationNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  let responseText = "Thank you! We have received your request.";
  let name = "";
  let phone = "";
  
  try {
    const parts = msg.split("_");
    const nameIndex = parts.indexOf("NAME");
    const phoneIndex = parts.indexOf("PHONE");
    
    if (nameIndex > -1 && phoneIndex > -1) {
      name = parts.slice(nameIndex + 1, phoneIndex).join(" ");
      phone = parts.slice(phoneIndex + 1).join(" ");
      
     
      const bookingResponse = await fetch(process.env.NEXT_PUBLIC_APP_URL + '/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName: name,
          phoneNumber: phone,
          bookingTimestamp: new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          bookingSource: "Chatbot",
          appointmentStatus: "Pending Call"
        }),
      });
      
      const result = await bookingResponse.json();
      
      if (result.result === 'success') {
        responseText = `Thanks ${name}! ✅\n\nWe have received your booking request.\n\nOur team will call you at ${phone} shortly to confirm your appointment with Dr. Pranjal Sinha.\n\n📞 Expect a call within 2 hours during clinic hours (Mon-Sat, 12 PM - 8 PM).`;
      } else {
        responseText = `Thanks ${name}! We have your details.\n\nPlease call us at +916206700442 to confirm your appointment.`;
      }
    }
  } catch (e) {
    console.error("Chatbot booking error:", e);
    responseText = "Thank you for your interest! Please call us at +916206700442 to book your appointment.";
  }

  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
      buttons: [{ label: "Start New Chat", payload: "INIT_CHAT" }]
    }
  };
}

function serviceInfoNode(state: typeof AgentState.State) {
  const responseText = "We specialize in:\n\n✨ Cosmetic: Smile Makeovers\n🦷 Restorative: Painless Root Canals & Implants\n⚙️ Ortho: Braces & Aligners\n🛡️ General: Laser Dentistry & Kids Care\n\nDr. Pranjal ensures every procedure is gentle.";
  
  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
      buttons: [{ label: "Book Checkup", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function emergencyNode(state: typeof AgentState.State) {
  const responseText = "🚨 We are here for you.\n\nIf you are in pain, please visit us in Neeladri Nagar immediately or call us.\n\nContact: 080-48903967";
  
  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
      buttons: [
        { label: "Call Now", payload: "tel:+916206700442" },
        { label: "Book Urgent Slot", payload: "ACTION_NAVIGATE_BOOKING" }
      ],
    },
  };
}

const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("retriever", ragRetrieverNode) 
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("booking_form", bookingFormNode)
  .addNode("booking_confirm", bookingConfirmationNode)
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    booking_form_request: "booking_form",
    booking_submission: "booking_confirm",
    services_list: "services",
    emergency: "emergency",
    general_chat: "retriever", 
  };
  return intentMap[state.intent || "general_chat"] || "retriever";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);
workflow.addEdge("retriever", "general"); 

["welcome", "find_doctor", "doctor_details", "booking_form", "booking_confirm", "services", "emergency", "general"].forEach((node: any) => {
  workflow.addEdge(node, END);
});

const appGraph = workflow.compile();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history, question } = body;

    const userMessage = message || question;
    
    let chatHistory: Array<{ role: string; content: string }> = [];
    if (Array.isArray(history)) {
      chatHistory = history.map((msg, idx) => ({
        role: idx % 2 === 0 ? "user" : "assistant",
        content: typeof msg === "string" ? msg : msg.content || "",
      }));
    }

    const result = await appGraph.invoke({
      user_message: String(userMessage),
      chat_history: chatHistory,
      user_name: "",
    });

    return NextResponse.json(result.final_response);
  } catch (error) {
    console.error(" Chat Error:", error);
    return NextResponse.json(
      {
        type: "text",
        text: "I'm having trouble connecting. Please call us at 080-48903967 for assistance.",
      },
      { status: 500 }
    );
  }
}
