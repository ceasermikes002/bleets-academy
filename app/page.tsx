"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Logo } from "@/components/ui/logo";
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  const { trackRegisterClick } = useAnalytics();

  return (
    <main suppressHydrationWarning className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-cyan-200 hover:text-cyan-400 transition-colors">Features</Link>
            <Link href="#curriculum" className="text-cyan-200 hover:text-cyan-400 transition-colors">Curriculum</Link>
            <Link href="#pricing" className="text-cyan-200 hover:text-cyan-400 transition-colors">Pricing</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-6 py-2 rounded-full font-bold hover:from-cyan-300 hover:to-purple-400 transition-all duration-200"
              onClick={() => trackRegisterClick('header')}
            >
              Register Now
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Cyberpunk Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-20 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Level Up Your Web Dev Skills
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-200">
              Master HTML, CSS & JavaScript. Build real-world projects. Start with no prior experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-200"
                onClick={() => trackRegisterClick('hero_section')}
              >
                Register Now
              </motion.button>
              <a
                href="https://wa.me/2348170985530"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-cyan-500 rounded-lg hover:bg-cyan-900/30 transition-colors"
              >
                Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated particles or grid effect would go here */}
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          <AnimatedText text="Why Choose Bleets Academy?" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Zero to Hero',
              desc: 'Start from scratch, end as a master',
              icon: '🚀'
            },
            {
              title: 'Live Classes',
              desc: 'Real-time mentorship for the most convenient learning',
              icon: '🎯'
            },
            {
              title: 'Future-Proof Skills',
              desc: 'Learn the tech stack that is always in demand',
              icon: '🔮'
            },
            {
              title: 'Build Your Portfolio',
              desc: 'Create stunning projects for your portfolio',
              icon: '⚡'
            },
            {
              title: 'Digital Identity',
              desc: 'Craft your presence on GitHub & LinkedIn',
              icon: '🌐'
            },
            {
              title: 'Certified Developer',
              desc: 'Graduate with proof of your abilities',
              icon: '🏆'
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-xl p-6 hover:from-purple-800/50 hover:to-cyan-800/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">{feature.title}</h3>
              <p className="text-cyan-100/80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/20 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          <AnimatedText text="What You'll Learn" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Frontend Fundamentals</h3>
            <ul className="space-y-3 text-cyan-100">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                Modern HTML5 & Semantic Web
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                CSS Layout & Animations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                Mobile-First Design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                Website Deployment
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-8 rounded-xl border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Full Stack Development</h3>
            <ul className="space-y-3 text-cyan-100">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span>
                JavaScript & ES6+
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span>
                Dynamic Web Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span>
                API Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span>
                Git & Development Workflow
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          <AnimatedText text="Choose Your Learning Path" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Bleets Starter',
              duration: '2 Weeks - 3 Classes/Week',
              price: '₦5,000',
              features: ['HTML & CSS Fundamentals', 'Responsive Design Basics', 'Build Your First Website'],
              highlight: false
            },
            {
              title: 'Bleets Pro',
              duration: '3 Weeks - 3 Classes/Week',
              price: '₦8,000',
              features: ['Advanced CSS Techniques', 'Modern Design Principles', 'Two Professional Projects'],
              highlight: true
            },
            {
              title: 'Bleets Full Stack',
              duration: '4 Weeks - 3 Classes/Week',
              price: '₦12,000',
              features: ['JavaScript Mastery', 'Interactive Web Apps', 'Three Dynamic Projects'],
              highlight: true
            },
            {
              title: 'Bleets Complete',
              duration: '6 Weeks - 3 Classes/Week',
              price: '₦15,000',
              features: ['Full Stack Development', 'Advanced Projects', 'Career Preparation'],
              highlight: false
            }
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${plan.highlight
                  ? 'bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-cyan-500/50'
                  : 'bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-500/20'
                } rounded-xl p-8 border hover:border-cyan-500/50 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-300">{plan.title}</h3>
              <p className="text-cyan-200 mb-2">{plan.duration}</p>
              <p className="text-3xl font-bold mb-6 text-purple-400">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-cyan-100">
                    <span className="text-cyan-400">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-6 text-cyan-400">Career Boosters</h4>
          <div className="inline-block bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-cyan-500/20">
            <p className="text-cyan-200 mb-3">🎓 Course Certificate – ₦2,000 | 🧠 GitHub Mentorship – ₦5,000</p>
            <p className="text-cyan-200">💼 LinkedIn Profile Setup – ₦1,500 | 🌐 Portfolio Development – ₦2,500</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Join Bleets Academy This Easter
          </h2>
          <p className="text-xl mb-8 text-cyan-200">Limited Slots Available - Secure Your Spot Today!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-200"
            onClick={() => trackRegisterClick('hero_section')}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50 border-t border-cyan-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <p className="text-cyan-400 mb-4"> 2025 Bleets Academy. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/ceasermikes002" className="text-cyan-300 hover:text-cyan-400 transition-colors">
              <IconBrandGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/chimaobiemeka" className="text-cyan-300 hover:text-cyan-400 transition-colors">
              <IconBrandLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
