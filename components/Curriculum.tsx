"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { curriculumData } from "@/data/curriculumData"

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-black relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6">
              Comprehensive <span className="gradient-text">Curriculum</span>
            </h2>
            <p className="text-white/70 mb-8">
              Our curriculum is designed to take you from beginner to professional with a focus on practical, real-world
              skills. Each module builds upon the previous one, creating a solid foundation for your web development
              career.
            </p>

            <div className="space-y-4 mb-8">
              {curriculumData.tracks.map((item: { title: string; features: string[] }, index: number) => (
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
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <ul className="text-white/60 text-sm space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
              View Full Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h3 className="text-xl font-bold font-orbitron">Sample Frontend Learning Path</h3>
                  <div className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs">
                    Personalized
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      level: "Beginner",
                      weeks: "Weeks 1-4",
                      topics: ["HTML/CSS Fundamentals", "JavaScript Basics", "Responsive Design", "Version Control"],
                    },
                    {
                      level: "Intermediate",
                      weeks: "Weeks 5-8",
                      topics: ["React Fundamentals", "State Management", "API Integration", "CSS Frameworks"],
                    },
                    {
                      level: "Advanced",
                      weeks: "Weeks 9-12",
                      topics: ["Next.js", "TypeScript", "Testing", "Deployment Strategies"],
                    },
                  ].map((path, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{path.level}</h4>
                        <span className="text-xs text-white/60">{path.weeks}</span>
                      </div>
                      <ul className="space-y-2 pl-4 border-l border-purple-500/30">
                        {path.topics.map((topic, i) => (
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


