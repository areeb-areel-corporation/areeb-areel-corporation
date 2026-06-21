import type { Metadata } from "next";
import { Inter } from "next/font/google";import "./globals.css";
import Navbar from "./ui/components/Navbar";
import CorporateFooter from "./ui/components/CorporateFooter";
import { ComingSoonProvider } from "./ui/context/ComingSoonContext";
import CustomCursor from "./ui/components/CustomCursor";
import ScrollToTopOnRouteChange from "./ui/components/ScrollToTopOnRouteChange";

const inter = Inter({ subsets: ["latin"] });

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
    <html
      lang="en"
     className={`${inter.className} bg-[#0a0a0a] text-white`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnRouteChange />

        <CustomCursor />
        <ComingSoonProvider>
          <Navbar/>
          {children}
          <CorporateFooter/>
        </ComingSoonProvider>
      </body>
    </html>
  );
}
