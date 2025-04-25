"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
}: MarqueeProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Clone each child multiple times to ensure continuous loop
      for (let i = 0; i < 2; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }
    }
  }, []);

  // Simple initial render for SSR
  if (!mounted) {
    return (
      <div className={cn("relative overflow-hidden w-full", className)}>
        <div className="flex w-max min-w-full flex-nowrap gap-4 py-4">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-4 py-4",
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        )}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};