import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-8">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
            >
              <Link href="/learn">Find Your Perfect Tutor</Link>
            </Button>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  )
}
