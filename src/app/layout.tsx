import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    default: "Next Tattoo | Studio de Tatouage Paris & Les Ulis",
    template: "%s | Next Tattoo"
  },
  description: "Studio de tatouage d'élite à Paris et Les Ulis. Spécialistes en réalisme, calligraphie, tribal et cover-up. Formation tatoueur disponible. Hygiène irréprochable.",
  keywords: ["tatouage paris", "tatoueur les ulis", "studio tatouage", "formation tatoueur", "tattoo réalisme", "cover up tattoo", "tatouage tribal", "tatouage calligraphie"],
  authors: [{ name: "Next Tattoo" }],
  creator: "Next Tattoo",
  publisher: "Next Tattoo",
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
    title: "Next Tattoo | L'Art du Tatouage à Paris",
    description: "Découvrez l'excellence du tatouage chez Next Tattoo. Nos artistes réalisent vos projets uniques : réalisme, tribal, calligraphie. Réservez votre séance.",
    siteName: "Next Tattoo",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Next Tattoo Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Tattoo | Studio de Tatouage Paris",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Next Tattoo",
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
    "url": "https://nexttattoo.fr"
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
