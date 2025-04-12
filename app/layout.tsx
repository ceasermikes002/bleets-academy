import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google"; 
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

import "./globals.css";

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
  title: "Bleets Academy - Master Web Development",
  description: "Join Bleets Academy to master HTML, CSS & JavaScript. Build real-world projects with expert mentorship. Start your web development journey today!",
  keywords: ["web development", "coding bootcamp", "learn to code", "HTML", "CSS", "JavaScript", "web design"],
  authors: [{ name: "Bleets Academy" }],
  openGraph: {
    title: "Bleets Academy - Master Web Development",
    description: "Join Bleets Academy to master HTML, CSS & JavaScript. Build real-world projects with expert mentorship.",
    type: "website",
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
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  );
}
