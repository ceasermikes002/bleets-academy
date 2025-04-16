import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
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
              Custom Web Dev Lessons Just for You
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-cyan-200 max-w-3xl mx-auto">
              Master web development on your terms. Choose the <span className="text-purple-300 font-semibold">exact</span> topics you want to learn, set your schedule, and work 1-on-1 with expert mentors.
            </p>
            <p className="text-md md:text-lg mb-8 text-cyan-100">
              No rigid schedules. No group classes. Just personalized lessons, with real-time guidance at your convenience.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="https://forms.gle/3qC23DijtD33P3bb8"
                className="group relative px-8 py-4 bg-cyan-500 rounded-lg overflow-hidden hover:bg-cyan-400 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative font-bold">Book Your First Class →</span>
              </Link>
              <Link
                href="https://wa.me/2348170985530"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-cyan-500 rounded-lg hover:bg-cyan-900/30 transition-colors"
              >
                Chat with a Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero
