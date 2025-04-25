"use client";

import { useInView } from "react-intersection-observer";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function BentoGridSection() {
  return (
    <section id="features" className="py-20 relative">
      {/* Top gradient - from black to transparent */}
      <div className="absolute top-0 left-0 right-0 h-40 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground">
            Discover what makes our AI companions unique and how they can interact with you.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <BentoGrid />
        </div>
      </div>
      
     
    </section>
  );
}