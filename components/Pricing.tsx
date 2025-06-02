"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const priceData = [
    {
      name: "Basic",
      description: "Perfect for beginners looking to start their journey",
      monthlyPrice: 99,
      annualPrice: 948,
      popular: false,
      accentColor: "blue",
      secondaryColor: "purple",
      features: [
        { text: "4 one-on-one sessions per month", included: true },
        { text: "Basic curriculum access", included: true },
        { text: "Email support", included: true },
        { text: "Community access", included: false },
        { text: "Project reviews", included: false },
        { text: "Career coaching", included: false },
      ],
    },
    {
      name: "Standard",
      description: "Our most popular plan for serious learners",
      monthlyPrice: 199,
      annualPrice: 1908,
      popular: true,
      accentColor: "purple",
      secondaryColor: "pink",
      features: [
        { text: "8 one-on-one sessions per month", included: true },
        { text: "Full curriculum access", included: true },
        { text: "Priority email support", included: true },
        { text: "Community access", included: true },
        { text: "Project reviews", included: true },
        { text: "Career coaching", included: false },
      ],
    },
    {
      name: "Premium",
      description: "Comprehensive training for career advancement",
      monthlyPrice: 299,
      annualPrice: 2868,
      popular: false,
      accentColor: "pink",
      secondaryColor: "purple",
      features: [
        { text: "12 one-on-one sessions per month", included: true },
        { text: "Full curriculum access", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Community access", included: true },
        { text: "Unlimited project reviews", included: true },
        { text: "Career coaching & job placement", included: true },
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-orbitron mb-4"
          >
            Choose Your <span className="gradient-text">Learning Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto mb-8"
          >
            Flexible pricing options to fit your learning goals and budget. All plans include access to our
            cyberpunk-themed learning environment.
          </motion.p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium transition-colors duration-200 ${!isAnnual ? "text-white" : "text-white/60"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="relative h-6 w-11 rounded-full transition-colors duration-200
                data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600
                data-[state=unchecked]:bg-white/10
                border border-white/20
                [&>span]:bg-white [&>span]:h-4 [&>span]:w-4 [&>span]:translate-x-0.5
                data-[state=checked]:[&>span]:translate-x-5
                [&>span]:transition-transform [&>span]:duration-200
                hover:border-purple-500/50"
            />
            <span
              className={`text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${isAnnual ? "text-white" : "text-white/60"}`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Fixed layout container */}
        <div className="max-w-5xl mx-auto">
          {/* Popular badge positioned absolutely above the grid */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {priceData.map((plan, index) => (
                <div key={`badge-${index}`} className="relative">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-4 py-1.5 rounded-full bg-purple-900/80 border-2 border-purple-500/70 text-purple-300 text-xs font-bold shadow-lg shadow-purple-900/30 neon-purple-glow whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cards grid with equal heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceData.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cyberpunk-card p-6 relative group transition-all duration-300 flex flex-col h-full ${
                  plan.accentColor === "blue"
                    ? "hover:border-blue-400/70"
                    : plan.accentColor === "purple"
                      ? "hover:border-purple-400/70"
                      : "hover:border-pink-400/70"
                }`}
              >
                {/* Header section with fixed height */}
                <div className="mb-6 min-h-[60px] flex flex-col justify-start">
                  <h3 className="text-xl font-bold mb-2 font-orbitron">{plan.name}</h3>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                {/* Pricing section with fixed height */}
                <div className="mb-6 min-h-[80px] flex flex-col justify-start">
                  <motion.div
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-end gap-1"
                  >
                    <span className="text-3xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className="text-white/60 text-sm mb-1">/{isAnnual ? "year" : "month"}</span>
                  </motion.div>
                  {isAnnual && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-400 text-sm mt-1"
                    >
                      ${plan.monthlyPrice * 12 - plan.annualPrice} savings
                    </motion.p>
                  )}
                </div>

                {/* Features section - flexible height */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div
                          className={`mt-0.5 p-1 rounded-full flex-shrink-0 ${
                            feature.included ? "bg-green-900/30 border-green-500/30" : "bg-red-900/30 border-red-500/30"
                          } border`}
                        >
                          {feature.included ? (
                            <Check className="h-3 w-3 text-green-400" />
                          ) : (
                            <X className="h-3 w-3 text-red-400" />
                          )}
                        </div>
                        <span className={feature.included ? "text-white/90" : "text-white/50"}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button section - fixed at bottom */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.accentColor === "blue"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : plan.accentColor === "purple"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    } text-white border-none`}
                  >
                    <Link href="/learn">Choose {plan.name}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
