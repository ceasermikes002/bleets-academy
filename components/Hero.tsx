"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid parameters
    const gridSize = 40
    const gridSpacing = 40
    const gridPoints: { x: number; y: number; vx: number; vy: number }[] = []

    // Initialize grid points
    for (let x = 0; x < canvas.width + gridSpacing; x += gridSpacing) {
      for (let y = 0; y < canvas.height + gridSpacing; y += gridSpacing) {
        gridPoints.push({
          x,
          y,
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw grid points
      for (const point of gridPoints) {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Draw point
        ctx.fillStyle = "rgba(102, 0, 255, 0.3)"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw grid lines
      ctx.strokeStyle = "rgba(102, 0, 255, 0.1)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < gridPoints.length; i++) {
        for (let j = i + 1; j < gridPoints.length; j++) {
          const dx = gridPoints[i].x - gridPoints[j].x
          const dy = gridPoints[i].y - gridPoints[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize) {
            ctx.globalAlpha = 1 - distance / gridSize
            ctx.beginPath()
            ctx.moveTo(gridPoints[i].x, gridPoints[i].y)
            ctx.lineTo(gridPoints[j].x, gridPoints[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>

      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300"
          >
            <span className="text-sm font-medium flex items-center justify-center gap-2">
              <Zap size={14} className="text-purple-300" />
              The Future of Online Tutoring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-vt323 mb-6 leading-tight"
          >
            <span className="block">Master Programming</span>
            <span className="gradient-text">One-on-One with Experts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Personalized tutoring sessions tailored to your skill level and goals. Learn modern programming languages
            with expert tutors in a cyberpunk-inspired virtual environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {isAuthenticated ? (
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
              >
                <Link href="/learn">
                  Find Your Perfect Tutor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
                >
                  <Link href="/sign-up">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-white hover:bg-purple-950/30"
                >
                  <Link href="/sign-in">
                    <Code className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center bg-gray-900 text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-white/70 text-sm">
              Join <span className="text-purple-400 font-semibold">250+</span> students already enrolled
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
