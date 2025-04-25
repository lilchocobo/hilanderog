"use client"
import { Marquee } from "@/components/magicui/marquee"
import { ProfileCard } from "@/components/profile-card"
import profilesData from "@/data/profiles.json"
import { MultiLanguageHi } from "@/components/MultiLanguageHi"
import { MagneticButton } from "@/components/MagneticButton"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Filter out any profiles with customComponent
const profiles = profilesData.filter((profile) => !("customComponent" in profile))

// Split profiles into rows
const firstRow = profiles.slice(0, 10)
const secondRow = profiles.slice(10, 20)
const thirdRow = profiles.slice(20)

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToNextSection = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Use a client-side only scroll handler
  const handleScrollClick = () => {
    if (typeof window !== "undefined") {
      scrollToNextSection();
    }
  }

  return (
    <div id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Dark purple gradient overlay - 20% opacity */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.13), rgba(0, 0, 0, 0.2))",
        }}
      />

      {/* Inverted radial gradient overlay - transparent in center, opaque at edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent, rgba(0, 0, 0, 0.35) 85%)",
        }}
      />

      {/* Rotated marquee container with increased scale */}
      <div
        className="relative w-full pointer-events-none"
        style={{
          transform: "rotate(-15deg) scale(1.35)",
          transformOrigin: "center",
        }}
      >
        {/* First row - left to right */}
        {isMounted && (
          <>
            <Marquee className="py-0 [--duration:90s] pointer-events-none">
              {firstRow.map((profile, index) => (
                <ProfileCard key={`${profile.name}-${index}`} {...profile} />
              ))}
            </Marquee>

            {/* Second row - right to left (reverse) */}
            <Marquee reverse className="py-0 [--duration:80s] pointer-events-none">
              {secondRow.map((profile, index) => (
                <ProfileCard key={`${profile.name}-${index}`} {...profile} />
              ))}
            </Marquee>

            {/* Third row - left to right */}
            <Marquee className="py-0 [--duration:100s] pointer-events-none">
              {thirdRow.map((profile, index) => (
                <ProfileCard key={`${profile.name}-${index}`} {...profile} />
              ))}
            </Marquee>
          </>
        )}

        {/* Gradient masks for edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
      </div>

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <h1 className="text-6xl font-bold tracking-tight">
          Say <MultiLanguageHi />
        </h1>
        <p className="mt-4 text-xl text-white/80 mb-8">To all your new friends</p>
        {isMounted && (
          <MagneticButton>
            <button className="bg-indigo-500 hover:bg-gray-500 transition-colors px-10 text-lg text-white py-4 rounded-full group">
              <span className="group-hover:hidden">Start Now</span>
              <span className="hidden group-hover:inline">Coming Soon</span>
            </button>
          </MagneticButton>
        )}
      </div>

      {/* Down arrow caret */}
      {isMounted && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
          onClick={handleScrollClick}
        >
          <ChevronDown size={36} className="text-white/80 hover:text-white transition-colors" />
        </motion.div>
      )}

      {/* Bottom gradient - from transparent to black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
        }}
      />
    </div>
  )
}