"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useScheduleStore } from "@/store/useScheduleStore"

export default function TopicSelector() {
  const { topic, setTopic } = useScheduleStore()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    {
      name: "Web Development",
      topics: ["JavaScript", "React", "Next.js", "TypeScript", "HTML/CSS", "Vue.js", "Angular"],
    },
    {
      name: "Backend Development",
      topics: ["Node.js", "Python", "Java", "Go", "Ruby", "PHP", "C#"],
    },
    {
      name: "Mobile Development",
      topics: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
    },
    {
      name: "Data Science",
      topics: ["Python", "R", "Machine Learning", "Data Analysis", "SQL", "Tableau", "Power BI"],
    },
  ]

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleTopicSelect = (selectedTopic: string) => {
    setTopic(selectedTopic)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-orbitron mb-4">Select Your Learning Topic</h2>
      <p className="text-white/70 mb-6">Choose a programming language or framework you want to learn.</p>

      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategorySelect(category.name)}
              className="cursor-pointer"
            >
              <Card className="bg-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                  <p className="text-white/60 text-sm">{category.topics.slice(0, 3).join(", ")} and more...</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">{selectedCategory}</h3>
            <button onClick={() => setSelectedCategory(null)} className="text-sm text-purple-400 hover:text-purple-300">
              Back to categories
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories
              .find((c) => c.name === selectedCategory)
              ?.topics.map((topicName) => (
                <motion.div
                  key={topicName}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTopicSelect(topicName)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    topic === topicName
                      ? "border-purple-500 bg-purple-900/20"
                      : "border-gray-700 bg-gray-900/50 hover:border-gray-500"
                  }`}
                >
                  <p className="text-center">{topicName}</p>
                </motion.div>
              ))}
          </div>
        </>
      )}

      {topic && !selectedCategory && (
        <div className="mt-4 p-3 rounded-lg bg-purple-900/20 border border-purple-500/50">
          <p className="text-sm">
            Selected topic: <span className="font-medium text-white">{topic}</span>
          </p>
        </div>
      )}
    </div>
  )
}
