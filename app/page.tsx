"use client";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Curriculum from '@/components/Curriculum';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Cyberpunk Theme */}
      <Hero />
      {/* Features Section */}
      <Features />

      {/* Curriculum Section */}
      <Curriculum />

      {/* Pricing Section */}
      <Pricing />

      {/* Final CTA */}
      <CTA />
    </main>
  );
}
