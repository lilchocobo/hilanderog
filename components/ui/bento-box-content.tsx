"use client";

import React, { useState } from "react";
import { MessageBubble } from "@/components/message-bubble";
import { RemindersWidget } from "@/components/reminders-widget";
import { CalendarWidget } from "@/components/calendar-widget";
import { VoiceMemo } from "@/components/voice-memo";
import { JournalWidget } from "@/components/journal-widget";
import { MessageTimestamp } from "@/components/message-timestamp";
import { CyclingMessage } from "@/components/cycling-message";
import { TypingMessageWidget } from "@/components/typing-message-widget";

interface BentoBoxContentProps {
  id: number;
  title?: string;
  description?: string;
}

export function BentoBoxContent({ id, title, description }: BentoBoxContentProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Only create the overlay container if title or description is provided
  const withHoverOverlay = (content: React.ReactNode) => {
    if (!title && !description) {
      return content;
    }
    
    return (
      <div 
        className="relative h-full w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Original content */}
        <div className="relative h-full w-full z-10">
          {content}
        </div>
        
        {/* Blurred background with gradient mask - only on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
            style={{
              backdropFilter: `blur(8px)`,
              WebkitBackdropFilter: `blur(8px)`,
              background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.1) 100%)",
              maskImage: "linear-gradient(to bottom, transparent 30%, black 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 30%, black 70%)",
            }}
          />
        )}
        
        {/* Text container - always visible but only showing on hover 
             Using separate z-index (30) higher than the blur layer (20) */}
        <div 
          className={`absolute inset-0 z-30 flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {title && (
            <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-white/90 text-sm">{description}</p>
          )}
        </div>
      </div>
    );
  };

  switch (id) {
    case 0:
      // Calendar Widget
      return (
        <div className="h-full w-full">
          {withHoverOverlay(<CalendarWidget />)}
        </div>
      );
    
    case 1:
      // Voice Memo
      return withHoverOverlay(
        <div className="h-full w-full flex flex-col justify-center p-4 gap-3">
          <MessageBubble 
            sender="me" 
            message="How's your day going?"
            isFirstMessage
          />
          <VoiceMemo className="w-full right-4" />
        </div>
      );
    
    case 2:
      // Initial message bubble
      return withHoverOverlay(
        <div className="rounded-xl p-4 h-full flex flex-col justify-center items-start">
          <MessageBubble 
            sender="me" 
            message="watcha up to"
            isFirstMessage
            isLastInSeries={true} 
            isNextInSeries={false} 
          />
          <MessageBubble 
            sender="other" 
            message="im just cozied up in bed, just finished severance"
            isLastInSeries={false} 
            isNextInSeries={true} 
          />
          <MessageBubble 
            sender="other" 
            message="did you hear that it got renewed for S3?"
            isLastInSeries={true} 
            isNextInSeries={false} 
          />
          <MessageBubble 
            sender="me" 
            message="oh really? awesome, such a great show i cant wait"
            tapbacks={[{ type: "heart", isFromMe: false }]}
            isLastInSeries={true} 
            isNextInSeries={false} 
          />
        </div>
      );
    
    case 3:
      // Top Image (2x2)
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          {withHoverOverlay(
            <img 
              src="https://imsgeliza.b-cdn.net/images/1736666497427.png" 
              alt="Anna" 
              className="h-full w-full object-cover"
            />
          )}
        </div>
      );
    
    case 9:
      // Reply Message (blue bubble)
      return withHoverOverlay(
        <div className="rounded-xl h-full flex justify-center">
          <div className="h-full w-full flex flex-col justify-center">
            <CyclingMessage
              messages={[
                "hey, I had a tough day, could you give me some advice?",
                "dude craziest thing happened at work today",
                "you mean so much to me ❤️",
              ]}
              hoverMessage="Trusted mentor, friend, or something more, YOU define the relationship!"
              interval={3000}
            />
          </div>
        </div>
      );
    
    case 5:
      // Music sharing conversation
      return withHoverOverlay(
        <div className="rounded-xl h-full w-full overflow-hidden">
          <div className="h-full w-full overflow-y-auto flex flex-col pb-1 pt-2 px-3">
            <MessageBubble
              sender="other"
              linkPreview={{
                url: "https://open.spotify.com/track/darude-sandstorm",
                title: "Sandstorm",
                domain: "open.spotify.com",
                image: "https://i.scdn.co/image/ab67616d0000b273f9ef39657ba18c612641ee6d",
              }}
              isLastInSeries={false}
              isNextInSeries={true}
            />
            <MessageBubble 
              message="think you'd like this one" 
              sender="other" 
              isLastInSeries={true} 
              isNextInSeries={false} 
            />
            <MessageBubble 
              message="Banger" 
              sender="me" 
              isLastInSeries={true} 
              isNextInSeries={false} 
            />
          </div>
        </div>
      );
    
    case 6:
      // Bottom Image/Video (bottom-left)
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          {withHoverOverlay(
            <video 
              src="https://imsgeliza.b-cdn.net/video/faithsmile.mp4" 
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
      );
    
    case 7:
      // Bottom Message (blue, far right)
      return withHoverOverlay(
        <div className="rounded-xl p-2 h-full flex flex-col justify-center">
          <div className="h-full w-full flex flex-col items-center">
            <TypingMessageWidget
              initialMessage="You up?"
              hoverMessage="Your friend can reach out to you based on your schedule"
              sender="other"
              showCurrentTime={true}
            />
          </div>
        </div>
      );
    
    case 8:
      // Reminders Widget (bottom-right)
      return (
        <div className="h-full w-full">
          {withHoverOverlay(<RemindersWidget
            reminders={[
              { text: "Michael loves spicy food", id: "memory-1" },
              { text: "Michael has a fear of heights", id: "memory-2" },
              { text: "Michael writes poetry", id: "memory-3" },
            ]}
          />)}
        </div>
      );
    
    case 4:
      // Journal Widget
      return (
        <div className="h-full w-full">
          {withHoverOverlay(<JournalWidget folderName="Journal" />)}
        </div>
      );
    
    default:
      return <div className="rounded-xl p-4 h-full"></div>;
  }
}