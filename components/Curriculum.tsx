import { motion } from 'framer-motion'
import React from 'react'
import { AnimatedText } from './ui/animated-text'

import { curriculumSections } from "../data/curriculumData";

const Curriculum = () => {
  return (
    <div>
          <section id="curriculum" className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/20 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          <AnimatedText text="What You'll Learn" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {curriculumSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`bg-gradient-to-r ${section.gradient} p-8 rounded-xl border ${section.border}`}
            >
              <h3 className={`text-2xl font-bold mb-4 text-${section.color}`}>{section.title}</h3>
              <ul className="space-y-3 text-cyan-100">
                {section.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-center gap-2">
                    <span className={`text-${section.color}`}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Curriculum