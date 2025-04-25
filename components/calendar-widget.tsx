"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarEvent {
  title: string;
  time: string;
  color: string;
  id: string;
}

function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface CalendarWidgetProps {
  className?: string;
  defaultSize?: number;
}

export function CalendarWidget({ className = "", defaultSize = 180 }: CalendarWidgetProps) {
  const [date, setDate] = useState(new Date());
  const [visibleEvents, setVisibleEvents] = useState<CalendarEvent[]>([]);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const eventIndexRef = useRef(0);

  const allCalendarEvents: CalendarEvent[] = [
    { title: "Project Review", time: "2-3:30PM", color: "#FF9F0A", id: "event-1" },
    { title: "Coffee with Alex", time: "11-11:30AM", color: "#BF5AF2", id: "event-2" },
    { title: "Team Meeting", time: "9-9:45AM", color: "#32D74B", id: "event-3" },
    { title: "Microbiology", time: "10-10:30AM", color: "#FF375F", id: "event-4" },
    { title: "French History", time: "1-1:30PM", color: "#007FFF", id: "event-5" },
    { title: "Gym Session", time: "5-6:30PM", color: "#FF2D55", id: "event-6" },
  ];

  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const getNextEvent = (): CalendarEvent => {
    const event = allCalendarEvents[eventIndexRef.current];
    eventIndexRef.current = (eventIndexRef.current + 1) % allCalendarEvents.length;
    return { ...event, id: `${event.id}-${Date.now()}` };
  };

  // Initialize with the first two events and update the date every minute
  useEffect(() => {
    setVisibleEvents([
      { ...allCalendarEvents[0], id: `${allCalendarEvents[0].id}-${Date.now()}` },
      { ...allCalendarEvents[1], id: `${allCalendarEvents[1].id}-${Date.now()}` },
    ]);
    
    const dateTimer = setInterval(() => setDate(new Date()), 60000);
    
    return () => {
      clearInterval(dateTimer);
      clearTimeouts();
    };
  }, []);

  // Update scale factor based on container size
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateScale = () => {
      if (containerRef.current) {
        // Use minimum of width/height to ensure perfect square scaling
        const containerSize = Math.min(
          containerRef.current.offsetWidth,
          containerRef.current.offsetHeight
        );
        
        // Calculate scale based on the container size
        const newScale = containerSize / defaultSize;
        
        setScale(newScale);
      }
    };
    
    // Initial calculation
    updateScale();
    
    // Add resize observer to recalculate on container size changes
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [defaultSize]);

  // Function to animate the next event cycle
  const animateNextEvent = () => {
    // Remove the first event and add a new one at the bottom
    setVisibleEvents((prev) => [...prev.slice(1), getNextEvent()]);

    // Schedule the next animation cycle
    timeoutRef.current = setTimeout(animateNextEvent, 8000);
  };

  useEffect(() => {
    if (visibleEvents.length === 2) {
      // Start the animation cycle after initial delay
      timeoutRef.current = setTimeout(animateNextEvent, 3000);
    }
    return () => clearTimeouts();
  }, [visibleEvents]);

  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const calendarDay = days[date.getDay()];
  const calendarDate = date.getDate();

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-square ${className}`}
    >
      {/* Scaling container that maintains the widget's original appearance */}
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
        className="bg-[#1c1c1e] rounded-lg overflow-hidden border border-neutral-700/50 shadow-md flex flex-col p-3"
      >
        {/* Header section with day and date */}
        <div className="mb-1">
          <div className="text-[#FF3B30] text-[11px] font-medium leading-tight mb-0.5">
            {calendarDay}
          </div>
          <div className="text-white text-[40px] font-bold leading-none">
            {calendarDate}
          </div>
        </div>
        
        {/* Events container */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div layout className="h-full flex flex-col justify-end space-y-2">
            <AnimatePresence mode="popLayout">
              {visibleEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.5,
                  }}
                  className="flex items-start rounded-lg overflow-hidden"
                  style={{ 
                    backgroundColor: hexToRGBA(event.color, 0.2),
                    padding: "6px 10px",
                    height: "auto", 
                    maxHeight: "38px",
                    minHeight: "38px"
                  }}
                >
                  <div 
                    className="w-1 self-stretch rounded-sm mr-2" 
                    style={{ backgroundColor: event.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-[12px] font-medium leading-tight mb-0.5 truncate">
                      {event.title}
                    </div>
                    <div className="text-white/60 text-[8px] leading-tight">
                      {event.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}