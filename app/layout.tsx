import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/ui/components/Navbar";
import CorporateFooter from "@/ui/components/CorporateFooter";
import CustomCursor from "@/ui/components/CustomCursor";
import ScrollToTopOnRouteChange from "@/ui/components/ScrollToTopOnRouteChange";

export const metadata: Metadata = {
  // metadataBase is required for resolving relative image URLs in OpenGraph
  metadataBase: new URL("https://www.areebareel.pk"), 
  title: {
    default: "Areeb & Areel Corp | Building The Benchmark",
    template: "%s | Areeb & Areel Corp",
  },
  description:
    "Areeb & Areel Corporation: Pioneers in ultra-luxury real estate, energy transit, and corporate consulting in Lahore and Dubai.",
  keywords: [
    "Areeb Areel Corp",
    "Sentosa Square Lahore",
    "Luxury Real Estate Pakistan",
    "Developments",
  ],
  // THIS REPLACES THE DEFAULT VERCEL LOGO
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Areeb & Areel Corporation",
    description: "Pioneers in ultra-luxury real estate and energy transit.",
    url: "https://www.areebareel.pk",
    siteName: "Areeb & Areel Corp",
    images: [
      {
        url: "./images/AREEB AREEL LOGO BADGE.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extracted JSON-LD for cleaner JSX
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Areeb & Areel Corporation",
    alternateName: "Areeb Areel Corp",
    url: "https://www.areebareel.pk",
    logo: "https://www.areebareel.pk/images/AREEB AREEL LOGO BADGE.png",
    image: "https://www.areebareel.pk/images/AREEB AREEL LOGO BADGE.png",
    telephone: "+923003003003",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13-KM Multan Rd, N-5 Amarkot, Thokar Niaz Baig",
      addressLocality: "Lahore",
      postalCode: "54000",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.linkedin.com/company/areeb-areel-corporation/",
      "https://www.facebook.com/areebareelcorp/",
      "https://www.instagram.com/areebareelfillingstation",
      "https://www.youtube.com/@AreebAreelFillingStation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate Divisions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultra-Luxury Real Estate Development", areaServed: "Lahore, Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architecture, Interior Design & Turnkey Construction", areaServed: "Lahore, Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energy Transit Infrastructure & Filling Stations", areaServed: "Lahore, Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Executive Consulting", areaServed: "Lahore, Pakistan; Dubai, UAE" } },
      ],
    },
  };

  return (
    <html lang="en" className="bg-[#0a0a0a] text-white">
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnRouteChange />
        <CustomCursor />
        <Navbar />
        {children}
        <CorporateFooter />

        {/* The script MUST be inside the body tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}