import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

const schibstedSans = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amish Kumar Dubey — Portfolio & Specimen",
  description: "Electronics and Communication Engineering at BIT Mesra (CGPA 8.67, 750+ Problems Solved). Full-stack software engineering and competitive programming.",
  keywords: "Amish Kumar Dubey, BIT Mesra, ECE, Full Stack Developer, Competitive Programming, Next.js, Type Specimen",
  authors: [{ name: "Amish Kumar Dubey" }],
  openGraph: {
    title: "Amish Kumar Dubey — Portfolio & Specimen",
    description: "Electronics & Communication Engineering at BIT Mesra (CGPA 8.67). Full-Stack Developer & Competitive Programmer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibstedSans.variable} ${plexMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#151514] font-sans antialiased selection:bg-[#151514] selection:text-[#FAFAF8]">
        <Navbar />
        <CommandPalette />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
