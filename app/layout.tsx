import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bleets Academy – Personalized Web Development Training",
  description:
    "Learn to code with personalized 1-on-1 web development lessons. Master HTML, CSS, JavaScript, and fullstack skills with expert mentorship. No rigid schedules — just real results.",
  keywords: [
    "Bleets Academy",
    "learn web development",
    "personalized coding lessons",
    "1-on-1 coding tutor",
    "frontend development course",
    "HTML CSS JavaScript training",
    "web developer bootcamp",
    "fullstack development",
    "online coding mentorship",
    "custom coding curriculum"
  ],
  authors: [{ name: "Bleets Academy" }],
  openGraph: {
    title: "Bleets Academy – Personalized Web Development Training",
    description:
      "Join Bleets Academy for 1-on-1 coding lessons tailored to your goals. Master HTML, CSS, JavaScript, and more at your pace.",
    type: "website",
    url: "https://bleets-academy.vercel.app/",
    images: [
      {
        url: "https://bleets-academy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bleets Academy – Learn to Code 1-on-1",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        <GoogleAnalytics measurementId="G-QL8SHBE220" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
