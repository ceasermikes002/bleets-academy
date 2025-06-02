/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRegistrationStore } from "@/store/registrationStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Check, User, Mail, Package, Layers, Code } from "lucide-react"

const steps = [
  { id: "personal", title: "Personal Information", icon: User },
  { id: "package", title: "Package Selection", icon: Package },
  { id: "options", title: "Additional Options", icon: Layers },
  { id: "experience", title: "Experience Level", icon: Code },
  { id: "summary", title: "Summary", icon: Check },
]

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const { formData, setFormField, addOption, removeOption } = useRegistrationStore()

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section id="register" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-vt323 mb-4"
          >
            <span className="gradient-text">Register</span> Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Begin your journey to becoming a web development expert. Fill out the form below to get started.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress steps */}
          <div className="mb-8">
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
                    {index < currentStep ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
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
          <div className="cyberpunk-card p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-vt323 mb-4">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormField("firstName", e.target.value)}
                          className="bg-gray-900 border-gray-700 focus:border-purple-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormField("lastName", e.target.value)}
                          className="bg-gray-900 border-gray-700 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormField("email", e.target.value)}
                          className="bg-gray-900 border-gray-700 focus:border-purple-500 pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormField("phone", e.target.value)}
                        className="bg-gray-900 border-gray-700 focus:border-purple-500"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-vt323 mb-4">Package Selection</h3>
                    <RadioGroup
                      value={formData.package}
                      onValueChange={(value) => setFormField("package", value)}
                      className="space-y-4"
                    >
                      {[
                        { id: "basic", name: "Basic", price: "$99/month", description: "4 sessions per month" },
                        { id: "standard", name: "Standard", price: "$199/month", description: "8 sessions per month" },
                        { id: "premium", name: "Premium", price: "$299/month", description: "12 sessions per month" },
                      ].map((pkg) => (
                        <div
                          key={pkg.id}
                          className={`p-4 rounded-lg border ${
                            formData.package === pkg.id
                              ? "border-purple-500 bg-purple-900/20"
                              : "border-gray-700 bg-gray-900/50"
                          } cursor-pointer hover:border-purple-500/70 transition-all duration-200`}
                          onClick={() => setFormField("package", pkg.id)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setFormField("package", pkg.id);
                            }
                          }}
                        >
                          <div className="flex items-start">
                            <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                            <div className="ml-3">
                              <Label htmlFor={pkg.id} className="text-base font-medium cursor-pointer">
                                {pkg.name} - {pkg.price}
                              </Label>
                              <p className="text-white/60 text-sm">{pkg.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-vt323 mb-4">Additional Options</h3>
                    <div className="space-y-4">
                      {[
                        {
                          id: "codeReviews",
                          label: "Code Reviews",
                          description: "Get detailed feedback on your code",
                          price: "+$49/month",
                        },
                        {
                          id: "projectMentoring",
                          label: "Project Mentoring",
                          description: "Guidance on your personal projects",
                          price: "+$79/month",
                        },
                        {
                          id: "careerCoaching",
                          label: "Career Coaching",
                          description: "Resume review and interview prep",
                          price: "+$59/month",
                        },
                        {
                          id: "communityAccess",
                          label: "Community Access",
                          description: "Join our exclusive developer community",
                          price: "+$29/month",
                        },
                      ].map((option) => (
                        <div
                          key={option.id}
                          className="flex items-start space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-900/50 cursor-pointer hover:border-purple-500/70 transition-all duration-200"
                          onClick={() => {
                            const isChecked = !formData.options.includes(option.id);
                            if (isChecked) {
                              addOption(option.id);
                            } else {
                              removeOption(option.id);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              const isChecked = !formData.options.includes(option.id);
                              if (isChecked) {
                                addOption(option.id);
                              } else {
                                removeOption(option.id);
                              }
                            }
                          }}
                        >
                          <Checkbox
                            id={option.id}
                            checked={formData.options.includes(option.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                addOption(option.id);
                              } else {
                                removeOption(option.id);
                              }
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <Label htmlFor={option.id} className="text-base font-medium cursor-pointer">
                                {option.label}
                              </Label>
                              <span className="text-purple-400 text-sm">{option.price}</span>
                            </div>
                            <p className="text-white/60 text-sm">{option.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-vt323 mb-4">Experience Level</h3>

                    <RadioGroup
                      value={formData.experienceLevel}
                      onValueChange={(value) => setFormField("experienceLevel", value)}
                      className="space-y-4"
                    >
                      {[
                        {
                          id: "beginner",
                          name: "Beginner",
                          description: "Little to no experience with web development",
                        },
                        {
                          id: "intermediate",
                          name: "Intermediate",
                          description: "Some experience, familiar with basics",
                        },
                        { id: "advanced", name: "Advanced", description: "Experienced developer looking to level up" },
                      ].map((level) => (
                        <div
                          key={level.id}
                          className={`p-4 rounded-lg border ${
                            formData.experienceLevel === level.id
                              ? "border-purple-500 bg-purple-900/20"
                              : "border-gray-700 bg-gray-900/50"
                          } cursor-pointer hover:border-purple-500/70 transition-all duration-200`}
                          onClick={() => setFormField("experienceLevel", level.id)}
                        >
                          <div className="flex items-start">
                            <RadioGroupItem value={level.id} id={level.id} className="mt-1" />
                            <div className="ml-3">
                              <Label htmlFor={level.id} className="text-base font-medium cursor-pointer">
                                {level.name}
                              </Label>
                              <p className="text-white/60 text-sm">{level.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="goals">Your Learning Goals (optional)</Label>
                      <textarea
                        id="goals"
                        rows={4}
                        value={formData.goals}
                        onChange={(e) => setFormField("goals", e.target.value)}
                        className="w-full rounded-md bg-gray-900 border-gray-700 focus:border-purple-500 p-3 text-white"
                        placeholder="What do you hope to achieve with our training?"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-vt323 mb-4">Registration Summary</h3>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                        <h4 className="font-medium mb-2">Personal Information</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-white/60">Name:</div>
                          <div>
                            {formData.firstName} {formData.lastName}
                          </div>
                          <div className="text-white/60">Email:</div>
                          <div>{formData.email}</div>
                          {formData.phone && (
                            <>
                              <div className="text-white/60">Phone:</div>
                              <div>{formData.phone}</div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                        <h4 className="font-medium mb-2">Selected Package</h4>
                        <div className="text-sm">
                          {formData.package === "basic" && "Basic - $99/month (4 sessions)"}
                          {formData.package === "standard" && "Standard - $199/month (8 sessions)"}
                          {formData.package === "premium" && "Premium - $299/month (12 sessions)"}
                        </div>
                      </div>

                      {formData.options.length > 0 && (
                        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                          <h4 className="font-medium mb-2">Additional Options</h4>
                          <ul className="space-y-1 text-sm">
                            {formData.options.includes("codeReviews") && <li>Code Reviews (+$49/month)</li>}
                            {formData.options.includes("projectMentoring") && <li>Project Mentoring (+$79/month)</li>}
                            {formData.options.includes("careerCoaching") && <li>Career Coaching (+$59/month)</li>}
                            {formData.options.includes("communityAccess") && <li>Community Access (+$29/month)</li>}
                          </ul>
                        </div>
                      )}

                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
                        <h4 className="font-medium mb-2">Experience Level</h4>
                        <div className="text-sm">
                          {formData.experienceLevel === "beginner" && "Beginner"}
                          {formData.experienceLevel === "intermediate" && "Intermediate"}
                          {formData.experienceLevel === "advanced" && "Advanced"}
                        </div>

                        {formData.goals && (
                          <div className="mt-2">
                            <h5 className="text-sm font-medium text-white/60">Learning Goals:</h5>
                            <p className="text-sm mt-1">{formData.goals}</p>
                          </div>
                        )}
                      </div>

                      <div className="p-4 rounded-lg border border-purple-500 bg-purple-900/20">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Total Monthly Cost:</h4>
                          <div className="text-xl font-bold">${calculateTotalCost(formData)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

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

              {currentStep < steps.length - 1 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => alert("Registration submitted successfully!")}
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white border-none"
                >
                  Complete Registration
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function calculateTotalCost(formData: any) {
  let baseCost = 0

  // Package cost
  if (formData.package === "basic") baseCost += 99
  if (formData.package === "standard") baseCost += 199
  if (formData.package === "premium") baseCost += 299

  // Additional options
  if (formData.options.includes("codeReviews")) baseCost += 49
  if (formData.options.includes("projectMentoring")) baseCost += 79
  if (formData.options.includes("careerCoaching")) baseCost += 59
  if (formData.options.includes("communityAccess")) baseCost += 29

  return baseCost
}



