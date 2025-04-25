"use client"

import { Brain } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Reminder {
  text: string
  id: string
}

interface RemindersWidgetProps {
  count?: number
  reminders?: Reminder[]
  className?: string
  defaultSize?: number
}

export function RemindersWidget({ 
  count = 8, 
  reminders = [], 
  className = "",
  defaultSize = 180
}: RemindersWidgetProps) {
  // Core state
  const [mounted, setMounted] = useState(false)
  const [visibleMemories, setVisibleMemories] = useState<Reminder[]>([])
  
  // Animation states 
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null)
  
  // Scaling state
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Refs for animation control
  const nextMemoryIndexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const regularAnimationActiveRef = useRef(false)

  // Create a large continuous list of memories that loops
  const allMemories: Reminder[] = [
    { text: "James loves beef jerky", id: "memory-1" },
    { text: "James has 3 cats", id: "memory-2" },
    { text: "James wants to learn how to ski", id: "memory-3" },
    { text: "Sarah enjoys painting landscapes", id: "memory-4" },
    { text: "Sarah speaks fluent Spanish", id: "memory-5" },
    { text: "Sarah's favorite color is teal", id: "memory-6" },
    { text: "Alex is allergic to peanuts", id: "memory-7" },
    { text: "Alex plays the guitar", id: "memory-8" },
    { text: "Alex visited Japan last summer", id: "memory-9" },
    { text: "Emma runs marathons", id: "memory-10" },
    { text: "Emma collects vintage cameras", id: "memory-11" },
    { text: "Emma speaks three languages", id: "memory-12" },
    { text: "Michael loves spicy food", id: "memory-13" },
    { text: "Michael has a fear of heights", id: "memory-14" },
    { text: "Michael writes poetry", id: "memory-15" },
    { text: "Olivia is a chess champion", id: "memory-16" },
    { text: "Olivia has a pet turtle", id: "memory-17" },
    { text: "Olivia can solve a Rubik's cube", id: "memory-18" },
    { text: "David is a vegetarian", id: "memory-19" },
    { text: "David plays the saxophone", id: "memory-20" },
  ]

  // Clear timeouts helper
  const clearAllTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Function to get the next memory from the continuous list
  const getNextMemory = (): Reminder => {
    const memory = allMemories[nextMemoryIndexRef.current]
    nextMemoryIndexRef.current = (nextMemoryIndexRef.current + 1) % allMemories.length
    return { ...memory, id: `${memory.id}-${Date.now()}` } // Ensure unique ID for animations
  }

  // Initialize visible memories
  const initializeMemories = () => {
    const initialVisible: Reminder[] = []
    for (let i = 0; i < count; i++) {
      initialVisible.push(getNextMemory())
    }
    setVisibleMemories(initialVisible)
  }

  // Regular "fly off one at a time" animation
  const animateTopMemoryExit = () => {
    if (animatingIndex !== null) return

    regularAnimationActiveRef.current = true
    setAnimatingIndex(0)
    clearAllTimeouts()

    timeoutRef.current = setTimeout(() => {
      // Remove the top memory and add the next one at the bottom
      setVisibleMemories((prev) => {
        const newMemories = [...prev.slice(1)]
        if (newMemories.length < count) {
          newMemories.push(getNextMemory())
        }
        return newMemories
      })

      setAnimatingIndex(null)
      clearAllTimeouts()
      timeoutRef.current = setTimeout(() => {
        animateTopMemoryExit()
      }, 2000)
    }, 500)
  }

  const startRegularAnimationCycle = () => {
    if (regularAnimationActiveRef.current) return
    clearAllTimeouts()
    timeoutRef.current = setTimeout(() => {
      animateTopMemoryExit()
    }, 1000)
  }

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true)
    initializeMemories()
    const initialDelay = setTimeout(() => {
      startRegularAnimationCycle()
    }, 3000)
    return () => {
      clearAllTimeouts()
      clearTimeout(initialDelay)
    }
  }, [])

  // Function to recalculate scale based on container dimensions
  const updateScale = () => {
    if (!containerRef.current) return;
    
    // Use the minimum of width/height to ensure perfect square scaling
    const containerSize = Math.min(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    
    // Calculate scale based on the container size
    const newScale = containerSize / defaultSize;
    
    // Set the new scale value
    setScale(newScale);
  };
  
  // Update scale factor based on container size
  useEffect(() => {
    if (!mounted) return;
    
    // Initial calculation after a brief delay to ensure DOM is ready
    const initialTimer = setTimeout(() => {
      updateScale();
    }, 50);
    
    // Create and attach the resize observer
    const resizeObserver = new ResizeObserver(() => {
      // Add a small delay to ensure accurate measurements
      setTimeout(updateScale, 10);
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Set up a window resize handler as backup
    const handleResize = () => {
      setTimeout(updateScale, 10);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      clearTimeout(initialTimer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted, defaultSize]);

  // Static version for SSR
  if (!mounted) {
    return (
      <div className={`bg-[#1c1c1e] rounded-lg overflow-hidden border border-neutral-700/50 shadow-md flex flex-col p-2 w-full aspect-square ${className}`}>
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-[#0A84FF] font-medium" style={{ fontSize: "var(--cell-font-size)" }}>
              Memories
            </div>
          </div>
          <button className="p-0.5 rounded-full bg-[#0A84FF] text-white">
            <Brain className="w-5 h-5" />
          </button>
        </div>
        <div className="border-b border-neutral-700/50 mt-1.5 mb-1"></div>
        <div className="flex-1 overflow-hidden pt-0.5">
          {reminders.length > 0 ? reminders.slice(0, count).map((reminder, index) => (
            <div key={index}>
              <div className="text-[#e1e1e1] text-[12px] leading-tight py-1 break-words" >
                {reminder.text}
              </div>
              {index < Math.min(reminders.length, count) - 1 && (
                <div className="border-b border-neutral-700/30"></div>
              )}
            </div>
          )) : allMemories.slice(0, count).map((memory, index) => (
            <div key={index}>
              <div className="text-[#e1e1e1] text-[12px] leading-tight py-1 break-words" >
                {memory.text}
              </div>
              {index < count - 1 && (
                <div className="border-b border-neutral-700/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-square ${className}`}
    >
      {/* Use fixed-size inner container with scaling */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${defaultSize}px`,
          height: `${defaultSize}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center',
        }}
        className="bg-[#1c1c1e] rounded-lg overflow-hidden border border-neutral-700/50 shadow-md flex flex-col p-2"
      >
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-[#0A84FF] font-medium" style={{ fontSize: "var(--cell-font-size)" }}>
              Memories
            </div>
          </div>
          <button className="p-0.5 rounded-full bg-[#0A84FF] text-white">
            <Brain className="w-5 h-5" />
          </button>
        </div>

        <div className="border-b border-neutral-700/50 mt-1.5 mb-1"></div>

        <div className="flex-1 overflow-hidden pt-0.5 relative">
          <motion.div layout>
            {visibleMemories.map((memory, index) => (
              <motion.div
                key={memory.id}
                layout
                initial={index === visibleMemories.length - 1 ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
                animate={{
                  x: animatingIndex !== null && index === animatingIndex ? 100 : 0,
                  opacity: animatingIndex !== null && index === animatingIndex ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                  duration: 0.5,
                }}
                className="relative"
              >
                <div className="text-[#e1e1e1] leading-tight py-1 break-words text-[12px]" >
                  {memory.text}
                </div>
                {index < visibleMemories.length - 1 && (
                  <motion.div layout className="border-b border-neutral-700/30"></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}