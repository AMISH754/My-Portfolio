import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amish Kumar Dubey · Full-stack developer & competitive programmer",
  description: "Portfolio of Amish Kumar Dubey, a full-stack developer and competitive programmer at BIT Mesra.",
  keywords: "Amish Kumar Dubey, Full Stack Developer, Competitive Programmer, BIT Mesra, React, Next.js, C++, Codeforces, LeetCode",
  authors: [{ name: "Amish Kumar Dubey" }],
  openGraph: {
    title: "Amish Kumar Dubey · Full-stack developer & competitive programmer",
    description: "Portfolio of Amish Kumar Dubey, full-stack software developer and competitive programmer.",
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth js`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-black text-[#f3f3f6] font-sans antialiased selection:bg-[#e0115f] selection:text-white"
      >
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

