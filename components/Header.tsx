import Link from 'next/link'
import React from 'react'
import { Logo } from './ui/logo'
import EasterBanner from './EasterBanner'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Easter Banner */}
      <div className="z-50 relative">
        <EasterBanner />
      </div>

      {/* Header */}
      <header className="z-40 relative bg-black/80 backdrop-blur-sm border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-cyan-200 hover:text-cyan-400 transition-colors">Features</Link>
            <Link href="#curriculum" className="text-cyan-200 hover:text-cyan-400 transition-colors">Curriculum</Link>
            <Link href="#pricing" className="text-cyan-200 hover:text-cyan-400 transition-colors">Pricing</Link>
            <Link
              href="https://forms.gle/3qC23DijtD33P3bb8"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
            >
              Register Now
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
