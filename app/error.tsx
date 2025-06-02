"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -inset-20 bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-red-900/30 border border-red-500/30">
              <AlertTriangle className="h-12 w-12 text-red-400" />
            </div>
          </div>

          <h2 className="text-3xl font-bold font-orbitron mb-4">Something Went Wrong</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            We&apos;ve encountered an unexpected error. Our team has been notified and is working on a fix.
          </p>

          <Button
            onClick={reset}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
