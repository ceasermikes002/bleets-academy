import type React from "react"
import type { Metadata } from "next"
import { VT323 } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Providers } from "@/components/Providers"

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "TutorBreez | Personalized Online Tutoring Platform",
  description:
    "Connect with expert tutors for personalized online learning. Master programming, web development, and more with TutorBreez.",
  openGraph: {
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vt323.variable} antialiased`} suppressHydrationWarning>
        <Providers>
          <div className="relative">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}



