"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useScheduleStore } from "@/store/useScheduleStore"

export default function DurationSelector() {
  const { duration, setDuration } = useScheduleStore()

  const durationOptions = [
    { value: 30, label: "30 minutes", description: "Quick focused sessions" },
    { value: 45, label: "45 minutes", description: "Standard learning sessions" },
    { value: 60, label: "60 minutes", description: "Comprehensive sessions" },
    { value: 90, label: "90 minutes", description: "Extended deep-dive sessions" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-orbitron mb-4">Select Session Duration</h2>
      <p className="text-white/70 mb-6">How long would you like each tutoring session to be?</p>

      <RadioGroup
        value={duration?.toString()}
        onValueChange={(value) => setDuration(Number.parseInt(value))}
        className="space-y-4"
      >
        {durationOptions.map((option) => (
          <div
            key={option.value}
            className={`p-4 rounded-lg border ${
              duration === option.value ? "border-purple-500 bg-purple-900/20" : "border-gray-700 bg-gray-900/50"
            } cursor-pointer hover:border-purple-500/70 transition-all duration-200`}
            onClick={() => setDuration(option.value)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setDuration(option.value);
              }
            }}
          >
            <div className="flex items-start">
              <RadioGroupItem value={option.value.toString()} id={option.value.toString()} className="mt-1" />
              <div className="ml-3">
                <Label htmlFor={option.value.toString()} className="text-base font-medium cursor-pointer">
                  {option.label}
                </Label>
                <p className="text-white/60 text-sm">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
