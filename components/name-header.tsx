"use client"

import { motion } from "framer-motion"
import { useTypingEffect } from "../hooks/useTypingEffect"
import { useState, useEffect } from "react"

export default function NameHeader() {
  const { displayedText, isComplete } = useTypingEffect("Zooey Lee", 150)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowCursor(false)
      }, 2000) // Hide cursor 2 seconds after typing is complete

      return () => clearTimeout(timer)
    }
  }, [isComplete])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          <span>{displayedText}</span>
          {showCursor && (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          )}
        </h1>
      </div>
    </motion.header>
  )
}

