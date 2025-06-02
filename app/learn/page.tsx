"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import TopicSelector from "./components/TopicSelector"
import DurationSelector from "./components/DurationSelector"
import SummaryCard from "./components/SummaryCard"
import { useRouter } from "next/navigation"
import { useScheduleStore } from "@/store/useScheduleStore"
import FrequencyPicker from "./components/FrequecyPicker"

export default function LearnPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()
  const { topic, frequency, duration } = useScheduleStore()

  const steps = [
    { id: "topic", title: "Select Topic", component: <TopicSelector /> },
    { id: "frequency", title: "Choose Frequency", component: <FrequencyPicker /> },
    { id: "duration", title: "Select Duration", component: <DurationSelector /> },
    { id: "summary", title: "Review & Confirm", component: <SummaryCard /> },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form and redirect to dashboard
      router.push("/dashboard")
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isNextDisabled = () => {
    if (currentStep === 0 && !topic) return true
    if (currentStep === 1 && !frequency) return true
    if (currentStep === 2 && !duration) return true
    return false
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron mb-8 text-center">
            Find Your <span className="gradient-text">Perfect Tutor</span>
          </h1>

          {/* Progress steps */}
          <div className="mb-8 relative z-20">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      index < currentStep
                        ? "bg-purple-600 border-purple-400 text-white"
                        : index === currentStep
                          ? "border-purple-500 text-white"
                          : "border-gray-700 text-gray-500 bg-gray-900"
                    }`}
                  >
                    {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                  <span
                    className={`text-xs mt-2 hidden md:block ${index <= currentStep ? "text-white" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form steps */}
          <div className="relative z-20">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {steps[currentStep].component}
            </motion.div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={nextStep}
                disabled={isNextDisabled()}
                className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none ${
                  isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {currentStep < steps.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Confirm & Get Matched
                    <Check className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
