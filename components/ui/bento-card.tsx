"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  index?: number;
  glowColor?: string;
  children?: ReactNode;
}

export const BentoCard = ({
  title,
  description,
  icon,
  className,
  index = 0,
  glowColor = "rgba(147, 51, 234, 0.3)", // Default purple glow with lower opacity
  children,
}: BentoCardProps) => {
  return (
    <div className="h-full">
      <Card
        className={cn(
          "relative overflow-hidden rounded-2xl border-0 p-6",
          "bg-white/5 backdrop-blur-md border border-white/10",
          "ring-1 ring-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]",
          "flex flex-col h-full",
          className
        )}
      >
        {/* Fake glow halo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-2xl opacity-25 pointer-events-none"></div>

        {/* Centered lighting effect - modified to be more subtle */}
        <div
          className="absolute inset-0 rounded-2xl z-0 opacity-50"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, ${glowColor}, transparent 85%)`,
          }}
        ></div>

        {/* Top-left corner white highlight - fixed with larger gradient and smoother transition */}
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 rounded-2xl z-0 opacity-25 pointer-events-none overflow-hidden"
          style={{
            background: `radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 50%)`,
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full">
          {icon && (
            <div className="flex items-center justify-center mb-6 text-white/80">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                {icon}
              </div>
            </div>
          )}

          <div className="text-center flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-white/90 tracking-wide">{title}</h3>
            {description && (
              <p className="text-sm text-white/60 leading-relaxed">{description}</p>
            )}
          </div>

          {children}
        </div>
      </Card>
    </div>
  );
};