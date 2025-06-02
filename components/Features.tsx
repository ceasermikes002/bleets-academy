"use client"

import { motion } from "framer-motion"
import { Code, Users, Calendar, Layers, Cpu, Rocket, Zap, Globe, Shield, ArrowRight, Sparkles } from "lucide-react"

export default function Features() {
  const featuresData = [
    {
      icon: "code",
      title: "Personalized Learning",
      description: "Custom learning paths tailored to your skill level, goals, and preferred learning style.",
      highlight: "AI-Powered",
      stats: "95% Success Rate",
    },
    {
      icon: "users",
      title: "1-on-1 Tutoring",
      description: "Direct access to experienced developers who provide guidance, feedback, and support.",
      highlight: "Expert Mentors",
      stats: "500+ Tutors",
    },
    {
      icon: "calendar",
      title: "Flexible Scheduling",
      description: "Book sessions at times that work for you, with options for different time zones.",
      highlight: "24/7 Available",
      stats: "Global Coverage",
    },
    {
      icon: "layers",
      title: "Project-Based Learning",
      description: "Build real-world projects that you can add to your portfolio while learning.",
      highlight: "Portfolio Ready",
      stats: "1000+ Projects",
    },
    {
      icon: "cpu",
      title: "Cutting-Edge Tech Stack",
      description: "Learn the latest technologies including Next.js, React, TypeScript, and more.",
      highlight: "Latest Tech",
      stats: "50+ Technologies",
    },
    {
      icon: "rocket",
      title: "Career Advancement",
      description: "Get help with job applications, interview prep, and portfolio development.",
      highlight: "Job Ready",
      stats: "85% Hire Rate",
    },
    {
      icon: "zap",
      title: "Rapid Skill Development",
      description: "Accelerate your learning with focused, hands-on training and immediate feedback.",
      highlight: "Fast Track",
      stats: "3x Faster",
    },
    {
      icon: "globe",
      title: "Global Community",
      description: "Connect with fellow students and tutors from around the world.",
      highlight: "Worldwide",
      stats: "50+ Countries",
    },
    {
      icon: "shield",
      title: "Secure Video Sessions",
      description: "End-to-end encrypted video conferencing for secure and private tutoring sessions.",
      highlight: "Enterprise Grade",
      stats: "Bank-Level Security",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Enhanced background grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>

      {/* Floating elements with improved animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 leading-tight">
            <span className="gradient-text">Revolutionary</span> Learning
            <br />
            <span className="text-white/90">Experience</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover a new dimension of coding education with our advanced platform that combines AI-powered
            personalization, expert mentorship, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr"
        >
          {featuresData.map((feature, index) => {
            const isLarge = index === 0 || index === 4 || index === 8
            const isMedium = index === 1 || index === 3 || index === 6

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    isLarge
                      ? "md:col-span-6 lg:col-span-6"
                      : isMedium
                        ? "md:col-span-3 lg:col-span-4"
                        : "md:col-span-3 lg:col-span-4"
                  }
                  ${index === 8 ? "md:col-span-6 lg:col-span-12" : ""}
                `}
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl"></div>

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-2xl bg-black/40 backdrop-blur-xl"></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                        {getFeatureIcon(feature.icon)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-2">
                        {feature.highlight}
                      </div>
                      <div className="text-xs text-white/50 font-mono">{feature.stats}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 font-orbitron text-white group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                  </div>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Sparkle effect on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group cursor-pointer">
            <span className="text-white font-medium">Explore All Features</span>
            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getFeatureIcon(iconName: string) {
  const iconProps = { className: "h-7 w-7 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" }

  switch (iconName) {
    case "code":
      return <Code {...iconProps} />
    case "users":
      return <Users {...iconProps} />
    case "calendar":
      return <Calendar {...iconProps} />
    case "layers":
      return <Layers {...iconProps} />
    case "cpu":
      return <Cpu {...iconProps} />
    case "rocket":
      return <Rocket {...iconProps} />
    case "zap":
      return <Zap {...iconProps} />
    case "globe":
      return <Globe {...iconProps} />
    case "shield":
      return <Shield {...iconProps} />
    default:
      return <Code {...iconProps} />
  }
}
