import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-orbitron text-2xl font-bold gradient-text">TUTOR</span>
              <span className="text-white/80 font-light">Breez</span>
            </Link>
            <p className="text-white/60 text-sm">
              Personalized programming tutoring with expert mentors in a cyberpunk-themed virtual environment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "How It Works", "Pricing", "Find a Tutor", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Documentation", "Community", "Support", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-white/60">info@tutorbreez.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-white/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-white/60">
                  123 Cyber Street, Digital City
                  <br />
                  Metaverse, MV 10101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} TutorBreez. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
