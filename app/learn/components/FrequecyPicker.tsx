"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useScheduleStore } from "@/store/useScheduleStore"

export default function FrequencyPicker() {
  const { frequency, setFrequency } = useScheduleStore()

  const frequencyOptions = [
    { value: 1, label: "Once a week", description: "Perfect for casual learning" },
    { value: 2, label: "Twice a week", description: "Balanced learning pace" },
    { value: 3, label: "Three times a week", description: "Accelerated learning" },
    { value: 4, label: "Four times a week", description: "Intensive learning" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-orbitron mb-4">Choose Session Frequency</h2>
      <p className="text-white/70 mb-6">How often would you like to meet with your tutor?</p>

      <RadioGroup
        value={frequency?.toString()}
        onValueChange={(value) => setFrequency(Number.parseInt(value))}
        className="space-y-4"
      >
        {frequencyOptions.map((option) => (
          <div
            key={option.value}
            className={`p-4 rounded-lg border ${
              frequency === option.value ? "border-purple-500 bg-purple-900/20" : "border-gray-700 bg-gray-900/50"
            } cursor-pointer hover:border-purple-500/70 transition-all duration-200`}
            onClick={() => setFrequency(option.value)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setFrequency(option.value);
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
