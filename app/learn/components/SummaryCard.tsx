"use client"

import { useScheduleStore } from "@/store/useScheduleStore"



export default function SummaryCard() {
  const { topic, frequency, duration } = useScheduleStore() 
  const { resetForm } = useScheduleStore()

  // Calculate estimated price based on selections
  const calculatePrice = () => {
    const basePrice = 50 // Base price per session
    const frequencyMultiplier = frequency || 1
    const durationMultiplier = (duration || 60) / 60

    return basePrice * frequencyMultiplier * durationMultiplier
  }

  const monthlyPrice = calculatePrice() * 4 // Assuming 4 weeks per month

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-orbitron mb-4">Review Your Learning Plan</h2>
      <p className="text-white/70 mb-6">Please review your selections before confirming.</p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <h3 className="font-medium mb-2">Selected Topic</h3>
          <p className="text-white/90 text-lg">{topic}</p>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <h3 className="font-medium mb-2">Session Frequency</h3>
          <p className="text-white/90 text-lg">
            {frequency} {frequency === 1 ? "time" : "times"} per week
          </p>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <h3 className="font-medium mb-2">Session Duration</h3>
          <p className="text-white/90 text-lg">{duration} minutes per session</p>
        </div>

        <div className="p-4 rounded-lg border border-purple-500 bg-purple-900/20">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Estimated Monthly Cost:</h3>
            <div className="text-xl font-bold">${monthlyPrice.toFixed(2)}</div>
          </div>
          <p className="text-white/60 text-sm mt-2">
            This includes {frequency * 4} sessions per month at {duration} minutes each.
          </p>
        </div>
      </div>

      <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700 mt-6">
        <p className="text-sm text-white/70">
          By clicking &quot;Confirm & Get Matched&quot;, you&apos;ll be matched with tutors who specialize in {topic} and are available
          for your selected schedule. You can always adjust your plan later.
        </p>
      </div>
    </div>
  )
}
