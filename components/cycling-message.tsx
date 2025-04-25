"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageBubble } from "./message-bubble"

interface CyclingMessageProps {
  messages: string[]
  hoverMessage?: string
  interval?: number
}

export function CyclingMessage({ 
  messages, 
  hoverMessage = "This appears when you hover! 👀", 
  interval = 3000 
}: CyclingMessageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const cycleRef = useRef<() => void>()

  // Define the cycle function that we can reference later
  useEffect(() => {
    // The cycle function that advances to the next message
    const cycle = () => {
      if (isHovered) return // Don't cycle if hovered
      
      setIsAnimating(true)
      
      // After animation out completes, change the message
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setIsAnimating(false)
        
        // Schedule the next cycle
        timeoutRef.current = setTimeout(cycle, interval)
      }, 500) // Animation duration
    }
    
    // Store reference to the cycle function
    cycleRef.current = cycle
    
    // Start the cycle if not already started and not hovered
    if (!isHovered && !timeoutRef.current) {
      timeoutRef.current = setTimeout(cycle, interval)
    }
    
    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [messages, interval, isHovered])

  // Handle hover state changes
  const handleMouseEnter = () => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    setIsHovered(true)
    setIsAnimating(true)
    
    // After animation out completes, show hover message
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }
  
  const handleMouseLeave = () => {
    setIsAnimating(true)
    
    // After animation out completes, restart the cycle
    setTimeout(() => {
      setIsHovered(false)
      setIsAnimating(false)
      
      // Restart the cycle
      if (cycleRef.current) {
        timeoutRef.current = setTimeout(cycleRef.current, interval)
      }
    }, 500)
  }

  return (
    <div className="flex flex-col pr-4 pt-2 h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <AnimatePresence mode="wait">
        {!isAnimating && (
          <motion.div
            key={isHovered ? "hover" : currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-end"
          >

            <MessageBubble 
              message={isHovered ? hoverMessage : messages[currentIndex]} 
              sender="me" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}