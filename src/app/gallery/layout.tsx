import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Smile Transformations | Smile Science Dentistry',
  description: 'Browse our gallery of real smile transformations from Electronic City. See before and after results of cosmetic dentistry, dental implants, orthodontics, and more.',
  keywords: ['dental gallery', 'smile transformations', 'before after dental', 'cosmetic dentistry results', 'dental implants gallery', 'Electronic City dentist', 'Bangalore dental clinic'],
  openGraph: {
    title: 'Gallery - Smile Transformations | Smile Science Dentistry',
    description: 'Browse our gallery of real smile transformations from Electronic City. See before and after results of our dental treatments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smile Science Dentistry Gallery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Smile Transformations | Smile Science Dentistry',
    description: 'Browse our gallery of real smile transformations from Electronic City.',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: '/gallery'
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
