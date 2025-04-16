import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { Logo } from './ui/logo'

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer