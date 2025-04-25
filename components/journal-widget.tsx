"use client"

import { Folder } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface JournalNote {
  title: string
  subtitle?: string
  id: string
}

// Sample journal entries with first sentences of daily journal entries
const SAMPLE_JOURNAL_ENTRIES: JournalNote[] = [
  {
    title: "3/31/25",
    subtitle:
      "Woke up kinda groggy today but managed to get a lot done. Started with a morning run which helped clear my head. Then spent most of the day working on that project I've been putting off for weeks.",
    id: "entry-1",
  },
  {
    title: "3/30/25",
    subtitle:
      "Had an awful day at school, some kids were being really mean during lunch. The teacher didn't even notice what was happening. I just tried to ignore them and focus on my work.",
    id: "entry-2",
  },
  {
    title: "3/29/25",
    subtitle:
      "What a fantastic day. I went on a hike with Sarah and we saw the most beautiful sunset from the top of the mountain. We stayed up there for almost an hour just taking it all in.",
    id: "entry-3",
  },
  {
    title: "3/28/25",
    subtitle:
      "Feeling a bit under the weather. My throat is sore and I have a slight fever. Decided to stay in bed most of the day and binge-watched that new show everyone's been talking about.",
    id: "entry-4",
  },
  {
    title: "3/27/25",
    subtitle:
      "Started reading that new book everyone's been recommending. Only a few chapters in but I'm already hooked. The main character reminds me so much of my cousin Alex.",
    id: "entry-5",
  },
  {
    title: "3/26/25",
    subtitle:
      "Met up with Sarah for coffee. We talked about her new job and my upcoming trip. It's been too long since we caught up properly. Need to do this more often.",
    id: "entry-6",
  },
  {
    title: "3/25/25",
    subtitle:
      "Finally finished that project I've been working on for months. The client seemed really happy with the results. Celebrated with a nice dinner and a glass of wine.",
    id: "entry-7",
  },
  {
    title: "3/24/25",
    subtitle:
      "Tried that new restaurant downtown. The food was amazing but a bit pricey. The atmosphere was perfect though - dim lighting, great music, and excellent service.",
    id: "entry-8",
  },
  {
    title: "3/23/25",
    subtitle:
      "Spent the whole day cleaning the apartment and it feels so good to have everything organized again. Found some old photos I thought I'd lost forever.",
    id: "entry-9",
  },
  {
    title: "3/22/25",
    subtitle:
      "Couldn't sleep last night. Kept thinking about that conversation with mom. I should call her tomorrow and clear things up. No point in letting this drag on any longer.",
    id: "entry-10",
  },
]

interface JournalWidgetProps {
  folderName?: string;
  notes?: JournalNote[];
  className?: string;
  defaultSize?: number;
}

export function JournalWidget({ 
  folderName = "Journal", 
  notes = SAMPLE_JOURNAL_ENTRIES, 
  className = "",
  defaultSize = 180
}: JournalWidgetProps) {
  const [mounted, setMounted] = useState(false)
  const [allNotes, setAllNotes] = useState<JournalNote[]>([])
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  // Clear all timeouts
  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout))
    timeoutRefs.current = []
  }

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true)

    // Create a continuous array of notes by duplicating them
    // This ensures we have enough content for the continuous scroll
    const duplicatedNotes = [...notes, ...notes, ...notes].map((note, index) => ({
      ...note,
      id: `${note.id || "note"}-${index}`,
    }))

    setAllNotes(duplicatedNotes)

    return () => clearAllTimeouts()
  }, [notes])
  
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

  // Calculate the height of a single note (in pixels)
  const noteHeight = 45 // Fixed height for notes

  // Static version for SSR
  if (!mounted) {
    return (
      <div className={`w-full aspect-square ${className}`}>
        <div className="bg-[#F8DC3D] p-3 pb-2 flex items-center gap-2">
          <Folder className="w-5 h-5 text-white" />
          <div className="text-white font-semibold text-base">{folderName}</div>
        </div>

        {/* Dotted line separator with 3px spacing from header */}
        <div className="h-[1px] mt-[3px] border-b border-dotted border-[#444444]"></div>

        <div className="bg-[#1C1C1E] flex-1 py-[3%] px-[5%] flex flex-col h-[calc(100%-45px)]">
          {notes.slice(0, 4).map((note, index) => (
            <div key={index} className={index < 3 ? "mb-1 pb-1 border-b border-[#444444]" : "mb-1"}>
              <div className="text-white font-medium text-sm">{note.title}</div>
              {note.subtitle && (
                <div className="text-gray-400 truncate whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                  {note.subtitle}
                </div>
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
        className="rounded-lg overflow-hidden shadow-md"
      >
        <div className="bg-[#F8DC3D] p-3 pb-2 flex items-center gap-2 relative z-20">
          <Folder className="w-5 h-5 text-white" />
          <div className="text-white font-semibold text-base">{folderName}</div>
        </div>

        {/* Dotted line separator with 3px spacing from header */}
        <div className="h-[1px] mt-[3px] border-b border-dotted border-[#444444] relative z-20"></div>

        <div className="bg-[#1C1C1E] flex-1 py-[3%] px-[5%] overflow-hidden h-[calc(100%-45px)] relative">
          {/* Only show the scrolling list, no expanded view */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ 
              y: -noteHeight * notes.length 
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="will-change-transform relative z-10"
          >
            {allNotes.map((note, index) => (
              <div
                key={note.id}
                className={`py-1 ${index < allNotes.length - 1 ? "border-b border-[#444444]" : ""}`}
              >
                <div className="text-white font-medium text-sm">{note.title}</div>
                {note.subtitle && (
                  <div className="text-gray-400 truncate whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                    {note.subtitle}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}