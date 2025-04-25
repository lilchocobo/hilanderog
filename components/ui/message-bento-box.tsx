"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { VoiceMemo } from '@/components/voice-memo';
import { MessageBubble } from '@/components/message-bubble';
import { CalendarWidget } from '@/components/calendar-widget';
import { RemindersWidget } from '@/components/reminders-widget';
import Image from 'next/image';

interface MessageBentoBoxProps {
  audioSrc?: string;
  leftEmoji?: string;
  messageBubbleText?: string;
  replyText?: string;
  imageUrl?: string;
  bottomMessageText?: string;
  className?: string;
  bottomImageUrl?: string;
  bottomMessage1?: string;
  bottomMessage2?: string;
}

export function MessageBentoBox({
  audioSrc = "/sample-audio.mp3",
  leftEmoji = "😊",
  messageBubbleText = "Hey! How's it going? 😊",
  replyText = "I'm good! Let's talk!",
  imageUrl = "https://imsgeliza.b-cdn.net/images/1736666497427.png",
  bottomMessageText = "I love this picture! What do you think?",
  className,
  bottomImageUrl = "https://imsgeliza.b-cdn.net/video/faithsmile.mp4",
  bottomMessage1 = "Did you see the sunset yesterday? It was amazing!",
  bottomMessage2 = "Let's meet up this weekend for coffee. What do you think?"
}: MessageBentoBoxProps) {
  // Reference for the grid
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Reminders data
  const reminders = [
    { text: "James loves beef jerky", id: "memory-1" },
    { text: "James has 3 cats", id: "memory-2" },
    { text: "James wants to learn how to ski", id: "memory-3" },
    { text: "Sarah enjoys painting landscapes", id: "memory-4" },
    { text: "Sarah speaks fluent Spanish", id: "memory-5" },
    { text: "Sarah's favorite color is teal", id: "memory-6" },
    { text: "Alex is allergic to peanuts", id: "memory-7" },
    { text: "Alex plays the guitar", id: "memory-8" }
  ];

  // Gradient and glow styles
  const gradients = {
    purple: "from-purple-500/20 to-fuchsia-500/20",
    blue: "from-blue-500/20 to-cyan-500/20",
    pink: "from-rose-500/20 to-pink-500/20",
    amber: "from-amber-500/20 to-yellow-500/20",
    green: "from-emerald-500/20 to-green-500/20",
    indigo: "from-blue-500/20 to-indigo-500/20",
    orange: "from-orange-500/20 to-red-500/20"
  };

  const glowColors = {
    purple: "rgba(147, 51, 234, 0.5)",  // Purple glow
    blue: "rgba(59, 130, 246, 0.5)",    // Blue glow
    pink: "rgba(236, 72, 153, 0.5)",    // Pink glow
    amber: "rgba(245, 158, 11, 0.5)",   // Amber glow
    green: "rgba(16, 185, 129, 0.5)",   // Green glow
    indigo: "rgba(99, 102, 241, 0.5)",  // Indigo glow
    orange: "rgba(249, 115, 22, 0.5)"   // Orange glow
  };

  // Effect to check window width and set isMobile state
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    checkSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  
  // Common card styling with gradient and glow effect
  const cardStyle = (gradient: string, glowColor: string) => {
    return {
      background: `linear-gradient(to bottom right, ${gradient})`,
      boxShadow: `0 0 20px 0 ${glowColor}`,
      borderRadius: '0.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1
    } as React.CSSProperties;
  };
  
  // Check if the URL is a video
  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
  };
  
  return (
    <div className={cn("w-full h-full rounded-lg overflow-visible p-3", className)}>
      <div 
        ref={gridRef}
        className={cn(
          "grid gap-2",
          isMobile 
            ? "grid-cols-4 grid-rows-6 min-h-[500px]" 
            : "grid-cols-5 grid-rows-4 h-[80vh]"
        )}
        style={{ 
          gridTemplateRows: `repeat(${isMobile ? 6 : 4}, 20vh)`,
          width: '100%'
        }}
      >
        {/* Box 0 - Calendar Widget in top left */}
        <div 
          className={cn(
            "rounded-lg overflow-hidden h-full",
            isMobile 
              ? "col-start-1 row-start-1 col-span-1 row-span-1" 
              : "col-start-1 row-start-1 col-span-1 row-span-1"
          )}
          style={cardStyle('rgba(147, 51, 234, 0.2), rgba(240, 171, 252, 0.2)', glowColors.purple)}
        >
          <CalendarWidget />
        </div>
        
        {/* Box 1 - Voice Memo - 2 cols wide */}
        <div 
          className={cn(
            "rounded-lg p-3 flex items-center justify-center h-full overflow-hidden",
            isMobile
              ? "col-start-2 row-start-1 col-span-3 row-span-1"
              : "col-start-2 row-start-1 col-span-2 row-span-1"
          )}
          style={cardStyle('rgba(59, 130, 246, 0.2), rgba(45, 212, 191, 0.2)', glowColors.blue)}
        >
          <VoiceMemo audioSrc={audioSrc} className="w-full max-w-[280px]" />
        </div>
        
        {/* Box 2 - Image 2x2 */}
        <div 
          className={cn(
            "rounded-lg overflow-hidden relative",
            isMobile
              ? "col-start-1 row-start-2 col-span-2 row-span-2"
              : "col-start-4 row-start-1 col-span-2 row-span-2"
          )}
          style={cardStyle('rgba(236, 72, 153, 0.2), rgba(244, 114, 182, 0.2)', glowColors.pink)}
        >
          <img 
            src={imageUrl}
            alt="Image in bento grid"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        {/* Box 4 - Message Bubble - 3 cols wide */}
        <div 
          className={cn(
            "rounded-lg p-3 h-full overflow-hidden flex items-center",
            isMobile
              ? "col-start-3 row-start-2 col-span-2 row-span-1"
              : "col-start-1 row-start-2 col-span-3 row-span-1"
          )}
          style={cardStyle('rgba(16, 185, 129, 0.2), rgba(110, 231, 183, 0.2)', glowColors.green)}
        >
          <div className="w-full">
            <MessageBubble
              message={messageBubbleText}
              sender="other"
              isLastInSeries={true}
            />
          </div>
        </div>
        
        {/* Box 7 - Bottom Image/Video 2x2 */}
        <div 
          className={cn(
            "rounded-lg overflow-hidden relative",
            isMobile
              ? "col-start-3 row-start-4 col-span-2 row-span-2"
              : "col-start-1 row-start-3 col-span-2 row-span-2"
          )}
          style={cardStyle('rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.2)', glowColors.purple)}
        >
          {isVideo(bottomImageUrl) ? (
            <video
              src={bottomImageUrl}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img 
              src={bottomImageUrl}
              alt="Second image in bento grid"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        {/* Box 5 - Reply Message Bubble */}
        <div 
          className={cn(
            "rounded-lg p-3 h-full overflow-hidden flex items-center",
            isMobile
              ? "col-start-1 row-start-4 col-span-2 row-span-1"
              : "col-start-4 row-start-3 col-span-1 row-span-1"
          )}
          style={cardStyle('rgba(99, 102, 241, 0.2), rgba(129, 140, 248, 0.2)', glowColors.indigo)}
        >
          <div className="w-full">
            <MessageBubble
              message={replyText}
              sender="me"
              isLastInSeries={true}
            />
          </div>
        </div>
        
        {/* Box 6 - Spanish Learning Message - MADE 2 ROWS TALL */}
        <div 
          className={cn(
            "rounded-lg p-3 h-full overflow-hidden flex items-center",
            isMobile
              ? "col-start-1 row-start-5 col-span-2 row-span-1"
              : "col-start-3 row-start-3 col-span-1 row-span-2"
          )}
          style={cardStyle('rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2)', glowColors.orange)}
        >
          <div className="w-full">
            <MessageBubble
              message={bottomMessage1}
              sender="other"
              isLastInSeries={true}
            />
          </div>
        </div>
        
        {/* Box 8 - Bottom Message */}
        <div 
          className={cn(
            "rounded-lg p-3 h-full overflow-hidden flex items-center",
            isMobile
              ? "col-start-1 row-start-6 col-span-3 row-span-1"
              : "col-start-4 row-start-4 col-span-1 row-span-1"
          )}
          style={cardStyle('rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.2)', glowColors.blue)}
        >
          <div className="w-full">
            <MessageBubble
              message={bottomMessage2}
              sender="other"
              isLastInSeries={true}
            />
          </div>
        </div>
        
        {/* Box 9 - Reminders Widget - MOVED TO BOTTOM RIGHT */}
        <div 
          className={cn(
            "rounded-lg overflow-hidden h-full",
            isMobile
              ? "col-start-4 row-start-6 col-span-1 row-span-1"
              : "col-start-5 row-start-4 col-span-1 row-span-1"
          )}
          style={cardStyle('rgba(236, 72, 153, 0.2), rgba(251, 113, 133, 0.2)', glowColors.pink)}
        >
          <RemindersWidget reminders={reminders} count={3} />
        </div>
      </div>
    </div>
  );
}