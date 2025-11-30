import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nexttattoo.fr'),
  title: {
    default: "Next Tattoo Logistic | Studio de Tatouage Paris & Les Ulis",
    template: "%s | Next Tattoo Logistic"
  },
  description: "Next Tattoo Logistic : Studio de tatouage d'élite à Paris et Les Ulis. Spécialistes en réalisme, calligraphie, tribal et cover-up. Formation tatoueur disponible.",
  keywords: ["tatouage paris", "tatoueur les ulis", "next tattoo logistic", "studio tatouage", "formation tatoueur", "tattoo réalisme", "cover up tattoo"],
  authors: [{ name: "Next Tattoo Logistic" }],
  creator: "Next Tattoo Logistic",
  publisher: "Next Tattoo Logistic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nexttattoo.fr",
    title: "Next Tattoo Logistic | L'Art du Tatouage à Paris",
    description: "Découvrez l'excellence du tatouage chez Next Tattoo Logistic. Nos artistes réalisent vos projets uniques : réalisme, tribal, calligraphie. Réservez votre séance.",
    siteName: "Next Tattoo Logistic",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Next Tattoo Logistic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Tattoo Logistic | Studio de Tatouage Paris",
    description: "Studio de tatouage d'élite. Réalisme, couleurs, cover-up. Formation disponible.",
    images: ["/logo-new.png"],
  },
  icons: {
    icon: "/logo-new.png",
    apple: "/logo-new.png",
  },
  alternates: {
    canonical: "https://nexttattoo.fr",
  },
  manifest: "/manifest.json",
  verification: {
    google: "J99wtVzukiqmbuk8V_teMS5Qp34oUihcNfMCaczAxMI",
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Next Tattoo Logistic",
    "image": "https://nexttattoo.fr/og-image.jpg",
    "description": "Studio de tatouage professionnel offrant des créations uniques et personnalisées.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "telephone": "+33624358280",
    "url": "https://nexttattoo.fr",
    "sameAs": [
      "https://www.facebook.com/NextTattooLogistique",
      "https://www.instagram.com/next.tattoo__logistic",
      "https://www.tiktok.com/@next_tattoo_logistic",
      "https://www.planity.com/next-tatoo-logistique-75011-paris"
    ]
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen bg-[#0a0a0a] pt-24">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
