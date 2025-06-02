"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      title: "Select Your Topic",
      description: "Choose from a variety of programming languages and frameworks that you want to learn.",
    },
    {
      title: "Set Your Schedule",
      description: "Select how often you want to meet with your tutor and for how long.",
    },
    {
      title: "Get Matched",
      description: "Our system will match you with the perfect tutor based on your needs and their expertise.",
    },
    {
      title: "Start Learning",
      description: "Join your first session and begin your personalized learning journey.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-vt323 mb-6">
              How <span className="gradient-text">TutorBreez</span> Works
            </h2>
            <p className="text-white/70 mb-8">
              Our platform makes it easy to find the perfect tutor and start learning right away. Follow these simple
              steps to begin your journey.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 p-1 rounded-full bg-purple-900/30 border border-purple-500/30">
                    <Check className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
            >
              <Link href="/learn">
                Find Your Tutor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-purple-500/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
              <div className="p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold font-vt323">Popular Topics</h3>
                  <div className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs">
                    In-Demand
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      category: "Web Development",
                      topics: ["JavaScript", "React", "Next.js", "TypeScript"],
                    },
                    {
                      category: "Backend Development",
                      topics: ["Node.js", "Python", "Java", "Go"],
                    },
                    {
                      category: "Mobile Development",
                      topics: ["React Native", "Flutter", "Swift", "Kotlin"],
                    },
                  ].map((category, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{category.category}</h4>
                      </div>
                      <ul className="space-y-2 pl-4 border-l border-purple-500/30">
                        {category.topics.map((topic, i) => (
                          <li key={i} className="text-white/70 text-sm relative">
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
