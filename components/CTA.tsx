import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div>
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 opacity-50" />
        <div className="relative z-10">
          <p className="text-xl md:text-2xl mb-6 text-cyan-200 font-medium">
            Ready to level up your dev skills? 
          </p>
          <p className="text-cyan-100 mb-8">
            Enroll today and enjoy hands-on, personalized lessons—plus free career boosters.
          </p>
          <Link
            href="https://forms.gle/3qC23DijtD33P3bb8"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
          >
            Start Learning
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CTA