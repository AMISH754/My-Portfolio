import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amish Kumar Dubey | Portfolio - ECE BIT Mesra, Full Stack Developer & CP",
  description: "Official portfolio of Amish Kumar Dubey, an Electronics and Communication Engineering student at BIT Mesra, B.Tech CGPA 8.61. Full Stack Developer and Competitive Programmer.",
  keywords: "Amish Kumar Dubey, BIT Mesra, ECE, Full Stack Developer, Competitive Programmer, Codeforces, LeetCode, React, Next.js, Portfolio",
  authors: [{ name: "Amish Kumar Dubey" }],
  openGraph: {
    title: "Amish Kumar Dubey | Portfolio",
    description: "ECE student at BIT Mesra, Full Stack Developer & Competitive Programmer.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      data-theme="dark"
    >
      <body className="min-h-screen flex flex-col bg-navy-900 text-slate-100 antialiased overflow-x-hidden">
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
