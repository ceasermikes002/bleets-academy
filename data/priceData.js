export const pricingData = [
  {
    title: "Basic Track",
    name: "Basic Track",
    monthlyPrice: 99,
    annualPrice: 948, // 20% discount from monthly
    accentColor: "blue",
    secondaryColor: "purple",
    popular: false,
    features: [
      { text: "1 session per week", included: true },
      { text: "Basic topic selection", included: true },
      { text: "Entry-level tutors", included: true },
      { text: "Progress tracking", included: true },
      { text: "Email support", included: true },
      { text: "Accountability partner", included: false },
      { text: "Certificate of completion", included: false }
    ],
    description: "Perfect for beginners starting their tech journey"
  },
  {
    title: "Professional Track",
    name: "Professional Track",
    monthlyPrice: 199,
    annualPrice: 1908, // 20% discount from monthly
    accentColor: "purple",
    secondaryColor: "pink",
    popular: true,
    features: [
      { text: "2-3 sessions per week", included: true },
      { text: "Advanced topics available", included: true },
      { text: "Senior-level tutors", included: true },
      { text: "Progress tracking", included: true },
      { text: "Priority support", included: true },
      { text: "Accountability partner option", included: true },
      { text: "Certificate of completion", included: true }
    ],
    description: "Ideal for serious learners and career transitions"
  },
  {
    title: "Enterprise",
    name: "Enterprise",
    monthlyPrice: 299,
    annualPrice: 2868, // 20% discount from monthly
    accentColor: "pink",
    secondaryColor: "purple",
    popular: false,
    features: [
      { text: "Flexible session frequency", included: true },
      { text: "Team training options", included: true },
      { text: "Expert-level tutors", included: true },
      { text: "Custom curriculum", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Corporate billing", included: true },
      { text: "White-label certificates", included: true }
    ],
    description: "Tailored for teams and organizations"
  }
]


