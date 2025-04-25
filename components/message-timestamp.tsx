"use client"

import { useState, useEffect } from "react"

interface MessageTimestampProps {
  time?: string
  showCurrentTime?: boolean
  className?: string
}

export function MessageTimestamp({ time, showCurrentTime = false, className = "" }: MessageTimestampProps) {
  const [currentTimeText, setCurrentTimeText] = useState<string>("")
  const [currentTimeValue, setCurrentTimeValue] = useState<string>("")

  useEffect(() => {
    // Function to format the current time
    const formatCurrentTime = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? "PM" : "AM"

      // Convert to 12-hour format
      hours = hours % 12
      hours = hours ? hours : 12 // the hour '0' should be '12'

      // Format minutes with leading zero if needed
      const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

      // Return text and time parts separately
      return {
        text: "Today",
        time: `${hours}:${minutesFormatted} ${ampm}`,
      }
    }

    // Set time once on mount
    if (showCurrentTime) {
      const { text, time } = formatCurrentTime()
      setCurrentTimeText(text)
      setCurrentTimeValue(time)
    } else if (time) {
      // Split static time string into text and time parts if possible
      const match = time.match(/^([^0-9]+)(.+)$/)
      if (match) {
        setCurrentTimeText(match[1].trim())
        setCurrentTimeValue(match[2].trim())
      } else {
        // If no clear separation, use the whole string as time value
        setCurrentTimeValue(time)
      }
    }
  }, [showCurrentTime, time]) // Only run on mount and when props change

  return (
    <div className={`text-center text-gray-400 text-xs mb-2 ${className}`}>
      {currentTimeText && <span className="font-bold">{currentTimeText}</span>}
      {currentTimeText && currentTimeValue && " "}
      {currentTimeValue && <span>{currentTimeValue}</span>}
    </div>
  )
}

