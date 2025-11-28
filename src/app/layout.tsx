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
  metadataBase: new URL('https://next-tattoo.com'),
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
    url: "https://next-tattoo.com",
    title: "Next Tattoo | L'Art du Tatouage à Paris",
    description: "Découvrez l'excellence du tatouage chez Next Tattoo. Nos artistes réalisent vos projets uniques : réalisme, tribal, calligraphie. Réservez votre séance.",
    siteName: "Next Tattoo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next Tattoo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Tattoo | Studio de Tatouage Paris",
    description: "Studio de tatouage d'élite. Réalisme, couleurs, cover-up. Formation disponible.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://next-tattoo.com",
  },
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
    "image": "https://next-tattoo.com/og-image.jpg",
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
    "telephone": "+33123456789",
    "url": "https://next-tattoo.com"
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
