import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// Initialize Gemini with production configuration
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.2, 
  apiKey: process.env.GOOGLE_API_KEY, 
});

const DOCTORS_DB = {
  dr_pranjal: {
    id: "dr_pranjal",
    name: "Dr. Pranjal",
    specialty: "General Dentist",
    image_url: "/drpic.jpg",
    short_bio: "Friendly general dentist focused on patient comfort, preventive care, and painless treatments.",
  }
};

const AgentState = Annotation.Root({
  user_message: Annotation<string>(),
  chat_history: Annotation<string[]>(),
  intent: Annotation<string>(),
  selected_doctor_id: Annotation<string>(),
  doctor_data: Annotation<any>(),
  final_response: Annotation<any>(),
});

// --- NODES ---

async function intentClassifierNode(state: typeof AgentState.State) {
  const msg = state.user_message.trim();
  const history = (state.chat_history || []).slice(-5).join("\n");

  // 1. Rule-based Triggers
  if (msg === "INIT_CHAT") return { intent: "welcome" };
  
  // Maps specific booking action to the form node
  if (msg.includes("ACTION_NAVIGATE_BOOKING")) return { intent: "booking_form_request" };
  
  // NEW: Catch form submission
  if (msg.includes("ACTION_SUBMIT_BOOKING")) return { intent: "booking_submission" };

  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").slice(2).join("_");
    return { intent: "doctor_details", selected_doctor_id: docId };
  }

  // 2. LLM Classification
  const systemPrompt = `
    You are the receptionist AI for Smile Science Dentistry. 
    Classify the user's intent into exactly one of these categories:
    [find_doctor, services_list, emergency, booking_form_request, general_chat]

    Context:
    ${history}

    Definitions:
    - 'find_doctor': User asks to see a doctor, dentist, surgeon, or asks "who is available?".
    - 'services_list': User EXPLICITLY asks for a list of services.
    - 'emergency': User mentions pain, blood, accident, broken tooth, swelling, or urgency.
    - 'booking_form_request': User explicitly says they want to book, schedule, or make an appointment.
    - 'general_chat': User asks SPECIFIC questions about treatments, payments, location, etc.

    Input: "${msg}"
    
    Return ONLY the category word.
  `;

  try {
    const response = await llm.invoke(systemPrompt);
    const intent = response.content.toString().trim().toLowerCase();
    
    const validIntents = ["find_doctor", "services_list", "emergency", "booking_form_request", "general_chat"];
    return { intent: validIntents.includes(intent) ? intent : "general_chat" };
  } catch (e) {
    console.error("Classifier Error:", e);
    return { intent: "general_chat" };
  }
}

async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = (state.chat_history || []).join("\n");

  const prompt = `
You are the AI Assistant for Smile Science Dentistry.
Persona: Warm, empathetic, and professional.

Goal: Make the user feel understood and guide them to book an appointment.

Strict Rules:
- Location: 4th Floor, 224, 3rd Cross Road, Neeladri Nagar, Electronic City Phase 1, Bangalore.
- Contact: 080-48903967.
- Formatting: Do NOT use markdown bold syntax. Use plain text.
- If they want to book, ask them to click the "Book Appointment" button.

Context:
${history}

User: "${msg}"

Response Guidelines:
1. Empathize first.
2. Answer the question.
3. Call to Action: "Shall we book a visit with Dr. Pranjal?"
`;

  const response = await llm.invoke(prompt);

  return {
    final_response: {
      type: "text",
      text: response.content.toString().replace(/\*\*/g, ""),
    },
  };
}

// --- STANDARD NODES ---

function welcomeMessageNode() {
  return {
    final_response: {
      type: "welcome_card",
      text: "Namaste! 🙏 Welcome to Smile Science Dentistry.\nI'm here to ensure your smile stays healthy. How can I help you today?",
      buttons: [
        { label: "Book Appointment", payload: "ACTION_NAVIGATE_BOOKING" },
        { label: "Meet Dr. Pranjal", payload: "Who is the doctor?" },
        { label: "Our Treatments", payload: "What treatments do you do?" },
        { label: "Emergency", payload: "I have an emergency" },
      ],
    },
  };
}

function retrieveDoctorProfileNode() {
  const doc = DOCTORS_DB["dr_pranjal"];
  return {
    doctor_data: doc,
    selected_doctor_id: doc.id,
    final_response: {
      type: "card",
      text: `Our lead specialist is ${doc.name}.\n${doc.short_bio}`,
      image: doc.image_url,
      buttons: [
        { label: "View Details", payload: `ACTION_DETAILS_${doc.id}` },
        { label: "Book Visit", payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  const docId = state.selected_doctor_id || "dr_pranjal";
  const doc = DOCTORS_DB[docId as keyof typeof DOCTORS_DB] || DOCTORS_DB["dr_pranjal"];
  return {
    final_response: {
      type: "card",
      text: `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}\n\nAvailability: Mon-Sat (12 PM - 8 PM)`,
      buttons: [{ label: "Book with Dr. Pranjal", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

// UPDATED: Now returns the form type instead of redirect text
function bookingFormNode() {
  return {
    final_response: { 
      type: "booking_form", 
      text: "To book your appointment with Dr. Pranjal, please enter your details below:",
      // No buttons needed, form handles submit
    },
  };
}

// NEW: Handles the form submission
function bookingConfirmationNode(state: typeof AgentState.State) {
  // Extract Name/Phone from payload: ACTION_SUBMIT_BOOKING_NAME_John_PHONE_123
  // Simple extraction logic
  const msg = state.user_message;
  let responseText = "Thank you! We have received your request.";
  
  try {
     const parts = msg.split("_");
     const nameIndex = parts.indexOf("NAME");
     const phoneIndex = parts.indexOf("PHONE");
     
     if (nameIndex > -1 && phoneIndex > -1) {
         const name = parts.slice(nameIndex + 1, phoneIndex).join(" ");
         const phone = parts.slice(phoneIndex + 1).join(" ");
         responseText = `Thanks ${name}! We have received your request for ${phone}.\n\nOur clinic staff will call you shortly to confirm the exact time slot with Dr. Pranjal.`;
     }
  } catch (e) {
      console.error("Parsing error", e);
  }

  return {
    final_response: {
      type: "text",
      text: responseText,
      buttons: [{ label: "Start New Chat", payload: "INIT_CHAT" }]
    }
  };
}

function serviceInfoNode() {
  return {
    final_response: {
      type: "text",
      text: "We specialize in:\n\n✨ Cosmetic: Smile Makeovers\n🦷 Restorative: Painless Root Canals & Implants\n⚙️ Ortho: Braces & Aligners\n🛡️ General: Laser Dentistry & Kids Care",
      buttons: [{ label: "Book Checkup", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function emergencyNode() {
  return {
    final_response: {
      type: "text",
      text: "🚨 We are here for you.\n\nIf you are in pain, please visit our clinic in Neeladri Nagar immediately or call us.",
      buttons: [
        { label: "Call Now", payload: "tel:08048903967" },
        { label: "Book Urgent Slot", payload: "ACTION_NAVIGATE_BOOKING" }
      ],
    },
  };
}

// --- WORKFLOW CONSTRUCTION ---

const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("booking_form", bookingFormNode)       // Show form
  .addNode("booking_confirm", bookingConfirmationNode) // Handle submit
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    booking_form_request: "booking_form", // Map intent to form node
    booking_submission: "booking_confirm", // Map intent to confirm node
    services_list: "services",
    emergency: "emergency",
    general_chat: "general",
  };
  return intentMap[state.intent || "general_chat"] || "general";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);

// All nodes terminate at END
["welcome", "find_doctor", "doctor_details", "booking_form", "booking_confirm", "services", "emergency", "general"].forEach((node:any) => {
  workflow.addEdge(node, END);
});

const appGraph = workflow.compile();

// --- API HANDLER ---
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

    const result = await appGraph.invoke({
      user_message: message,
      chat_history: history || [],
    });

    return NextResponse.json(result.final_response);

  } catch (error) {
    console.error("Chat Graph Error:", error);
    return NextResponse.json(
      { 
        type: "text", 
        text: "I'm having trouble connecting to the server. Please call us directly at 080-48903967 for assistance." 
      },
      { status: 500 }
    );
  }
}