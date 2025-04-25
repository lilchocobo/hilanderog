"use client"

import { useState, useRef, useEffect } from "react"

interface VoiceMemoProps {
  className?: string;
  audioSrc?: string;
}

export function VoiceMemo({ className, audioSrc = "/sample-audio.mp3" }: VoiceMemoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const animationRef = useRef<number>()

  const containerHeight = 49
  const maxBarHeight = Math.floor(containerHeight * 0.8)

  // Generate waveform bars once
  const waveformBars = Array.from({ length: 85 }, () => Math.floor(Math.random() * (maxBarHeight - 8)) + 8)

  useEffect(() => {
    audioRef.current = new Audio(audioSrc)

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audioRef.current.addEventListener("ended", handleEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener("ended", handleEnded)
      }
      cancelAnimationFrame(animationRef.current!)
    }
  }, [audioSrc])

  const togglePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      cancelAnimationFrame(animationRef.current!)
    } else {
      audioRef.current.play()
      animationRef.current = requestAnimationFrame(updateProgress)
    }

    setIsPlaying(!isPlaying)
  }

  const updateProgress = () => {
    if (!audioRef.current) return
    setCurrentTime(audioRef.current.currentTime)
    animationRef.current = requestAnimationFrame(updateProgress)
  }

  const formatTime = (time: number) =>
    `${Math.floor(time / 60)
      .toString()
      .padStart(2, "0")}:${Math.floor(time % 60)
      .toString()
      .padStart(2, "0")}`

  return (
    <div className={`relative w-full ${className}`} style={{ height: `${containerHeight}px` }}>
      <svg
        className="absolute left-2 top-0 h-full z-10"
        width="28"
        height="59"
        viewBox="242.017 87.595 27.928 58.827"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "auto", transform: "scale(-1,-1)" }}
      >
        <path
          d="M 242.017 146.422 C 252.871 146.422 261.67 137.624 261.67 126.77 L 261.67 107.248 C 261.67 105.967 261.547 104.714 261.313 103.501 C 261.347 103.542 261.38 103.585 261.411 103.628 C 261.153 94.319 268.135 89.664 269.945 88.888 C 263.373 87.693 257.933 89.842 254.541 92.102 C 251.14 89.287 246.776 87.595 242.017 87.595 L 242.017 146.422 Z"
          style={{ fill: "#3b3b3d" }}
        />
      </svg>

      <div className="flex items-center h-full pl-7 pr-2.5 bg-[#3b3b3d] rounded-r-2xl ml-[28px] w-[calc(100%-28px)]">
        <button
          onClick={togglePlayPause}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1283ff] flex items-center justify-center -ml-7 relative z-20"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="2" x2="3" y2="8" stroke="#3b3b3d" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="7" y1="2" x2="7" y2="8" stroke="#3b3b3d" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1.5L8.5 5L2 8.5V1.5Z"
                fill="#3b3b3d"
                stroke="none"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div className="flex-grow mx-2 flex items-center" style={{ height: `${containerHeight - 8}px` }}>
          <div className="w-full flex items-center justify-between">
            {waveformBars.map((height, index) => (
              <div
                key={index}
                style={{
                  height: `${height}px`,
                  width: "1px",
                  backgroundColor: "#5d5d5f",
                  borderRadius: "9999px",
                  opacity:
                    isPlaying && index / waveformBars.length < currentTime / (audioRef.current?.duration || 6)
                      ? 0.5
                      : 1,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 text-[11px] text-[#8e8e93] font-medium min-w-[40px] text-right">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  )
}