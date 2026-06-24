import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/ui/components/Navbar";
import CorporateFooter from "@/ui/components/CorporateFooter";
import CustomCursor from "@/ui/components/CustomCursor";
import ScrollToTopOnRouteChange from "@/ui/components/ScrollToTopOnRouteChange";

export const metadata: Metadata = {
  title: "Areeb & Areel Corporation",
  description: "Architects of Progression",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a] text-white">
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnRouteChange />
        <CustomCursor />
        <Navbar />
        {children}
        <CorporateFooter />
      </body>
    </html>
  );
}
