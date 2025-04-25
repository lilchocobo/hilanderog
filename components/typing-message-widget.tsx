"use client"

import { useState, useEffect, useRef } from "react"
import { MessageBubble } from "./message-bubble"
import { MessageTimestamp } from "./message-timestamp"

interface TypingMessageWidgetProps {
  initialMessage: string
  hoverMessage: string
  timestamp?: string
  showCurrentTime?: boolean
  sender?: "me" | "other"
}

export function TypingMessageWidget({
  initialMessage = "You up?",
  hoverMessage = "Your friend can agentically reach out to you, based on your schedule",
  timestamp,
  showCurrentTime = false,
  sender = "other",
}: TypingMessageWidgetProps) {
  const [displayedText, setDisplayedText] = useState(initialMessage)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCursor, setShowCursor] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMouseOverRef = useRef(false)

  // Clear all timeouts to avoid memory leaks and race conditions
  const clearAllTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (cursorIntervalRef.current) {
      clearInterval(cursorIntervalRef.current)
    }
  }

  // Cursor blinking effect when typing
  useEffect(() => {
    if (isAnimating) {
      setShowCursor(true)
      cursorIntervalRef.current = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
    } else {
      setShowCursor(false)
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current)
      }
    }

    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current)
      }
    }
  }, [isAnimating])

  // Backspace animation
  const backspaceText = (text: string, onComplete: (emptyText: string) => void) => {
    if (text.length <= 0) {
      onComplete("")
      return
    }

    timeoutRef.current = setTimeout(() => {
      const newText = text.slice(0, -1)
      setDisplayedText(newText)
      backspaceText(newText, onComplete)
    }, 30)
  }

  // Typing animation
  const typeText = (targetText: string, currentPosition = 0) => {
    if (currentPosition >= targetText.length) {
      setIsAnimating(false)
      return
    }

    timeoutRef.current = setTimeout(() => {
      const newText = targetText.slice(0, currentPosition + 1)
      setDisplayedText(newText)
      typeText(targetText, currentPosition + 1)
    }, 50)
  }

  // Start animation sequence based on hover state
  const startAnimation = (targetMessage: string) => {
    setIsAnimating(true)
    clearAllTimeouts()

    // First backspace existing text, then type new text
    backspaceText(displayedText, () => {
      typeText(targetMessage)
    })
  }

  // Handle mouse enter
  const handleMouseEnter = () => {
    isMouseOverRef.current = true
    setIsHovered(true)
    startAnimation(hoverMessage)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    isMouseOverRef.current = false
    setIsHovered(false)
    startAnimation(initialMessage)
  }

  // Clean up on unmount
  useEffect(() => {
    return () => clearAllTimeouts()
  }, [])

  // Create the message text with cursor if needed
  const messageText = showCursor ? `${displayedText}|` : displayedText

  // Directly render the bubble with minimal container structure
  return (
    <div
      className=" h-full px-1 w-full flex flex-col "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(timestamp || showCurrentTime) && <MessageTimestamp time={timestamp} showCurrentTime={showCurrentTime} />}

      {/* Render the message bubble directly with explicit props */}
          <MessageBubble
            message={messageText}
            sender={sender}
            isFirstMessage={true}
            isLastInSeries={true}
            isNextInSeries={false}
          />


    </div>
  )
}

