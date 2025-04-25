"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BentoBoxContent } from "@/components/ui/bento-box-content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type GridProps = {
  onAnimationComplete: () => void;
};

export function BentoGrid() {
  // Track whether the entrance animation has completed.
  const [hasAnimated, setHasAnimated] = useState(false);
  // Attach the ref to a static container.
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Track window width and cell size for mobile/tablet.
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [cellSize, setCellSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);

      if (currentWidth < 768) {
        // Mobile: 2 columns.
        const containerWidth = Math.min(currentWidth - 32, 600); // subtract padding, set max width.
        const baseSize = Math.floor(containerWidth / 2) - 8; // 2 columns with gap.
        setCellSize(baseSize);
      } else if (currentWidth < 981) {
        // Tablet: 5 columns grid.
        const containerWidth = currentWidth - 32; // nearly full width.
        const baseSize = Math.floor(containerWidth / 4) - 8; // 5 columns with gap.
        setCellSize(baseSize);
      }
      // For desktop, cellSize is not used.
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Card styles and data remain unchanged.
  const cardStyles = [
    { gradient: "from-purple-500/20 to-fuchsia-500/20", glowColor: "rgba(147, 51, 234, 0.5)" },
    { gradient: "from-blue-500/20 to-cyan-500/20", glowColor: "rgba(59, 130, 246, 0.5)" },
    { gradient: "from-rose-500/20 to-pink-500/20", glowColor: "rgba(236, 72, 153, 0.5)" },
    { gradient: "from-amber-500/20 to-yellow-500/20", glowColor: "rgba(245, 158, 11, 0.5)" },
    { gradient: "from-emerald-500/20 to-green-500/20", glowColor: "rgba(16, 185, 129, 0.5)" },
    { gradient: "from-indigo-500/20 to-blue-600/20", glowColor: "rgba(99, 102, 241, 0.5)" },
    { gradient: "from-orange-500/20 to-red-500/20", glowColor: "rgba(249, 115, 22, 0.5)" },
    { gradient: "from-violet-500/20 to-purple-500/20", glowColor: "rgba(139, 92, 246, 0.5)" },
    { gradient: "from-teal-500/20 to-emerald-500/20", glowColor: "rgba(20, 184, 166, 0.5)" },
    { gradient: "from-red-500/20 to-rose-500/20", glowColor: "rgba(239, 68, 68, 0.5)" },
  ];

  const bentoBoxData = [
    { id: 0, title: "Calendar", description: "Keep track of your upcoming events and appointments" },
    { id: 1, title: "Voice Messages", description: "Your AI companion can send voice messages to you" },
    { id: 2, title: "Current Events", description: "Your AI companion knows what's happening in the world" },
    { id: 3, title: "Photos", description: "Your AI companion can send you incredibly realistic photos" },
    { id: 4, title: "Journal", description: "Your AI companion keeps a daily journal, so you can know what's going on in their life" },
    { id: 5, title: "Share Music", description: "Exchange music recommendations with your AI" },
    { id: 6, title: "Adaptive", description: "Your AI companion can always adapt to your preferences" },
    { id: 7, title: "Always Available", description: "Your AI friends are there whenever you need them" },
    { id: 8, title: "Memory", description: "Your AI learns about you over time" },
    { id: 9, title: "Emotional Support", description: "Get advice and empathy when you need it most" },
  ];

  // Animation variants.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
  };

  // Add a type annotation for the index parameter.
  const getCardStyle = (index: number) => ({
    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
    boxShadow: `0 0 20px ${cardStyles[index % cardStyles.length].glowColor}`,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease-in-out",
    height: "100%",
    width: "100%",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  });

  // Always start hidden if the grid hasn't animated yet.
  const gridInitial = hasAnimated ? "visible" : "hidden";
  const gridAnimate = (inView || hasAnimated) ? "visible" : "hidden";

  // DesktopGrid component with proper type annotations.
  const DesktopGrid: React.FC<GridProps> = ({ onAnimationComplete }) => (
    <motion.div
      variants={containerVariants}
      initial={gridInitial}
      animate={gridAnimate}
      onAnimationComplete={onAnimationComplete}
      className="grid grid-cols-5 grid-rows-4 gap-4 max-w-6xl mx-auto"
      style={{
        gridTemplateRows: "repeat(4, minmax(auto, min(17.5vw, 180px)))",
        gridTemplateColumns: "repeat(5, minmax(auto, min(17.5vw, 180px)))",
      }}
    >
      {/* 1. Calendar Widget */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-1 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[0].gradient)} style={getCardStyle(0)}>
          <BentoBoxContent id={0} title={bentoBoxData[0].title} description={bentoBoxData[0].description} />
        </div>
      </motion.div>

      {/* 2. Voice Memo */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-1 col-span-2 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[1].gradient)} style={getCardStyle(1)}>
          <BentoBoxContent id={1} title={bentoBoxData[1].title} description={bentoBoxData[1].description} />
        </div>
      </motion.div>

      {/* 3. Top Image (2x2) */}
      <motion.div variants={itemVariants} className="col-start-4 row-start-1 col-span-2 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[2].gradient)} style={getCardStyle(2)}>
          <BentoBoxContent id={3} title={bentoBoxData[3].title} description={bentoBoxData[3].description} />
        </div>
      </motion.div>

      {/* 4. Message Bubble (middle-left, wide) */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-2 col-span-3 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[3].gradient)} style={getCardStyle(3)}>
          <BentoBoxContent id={2} title={bentoBoxData[2].title} description={bentoBoxData[2].description} />
        </div>
      </motion.div>

      {/* 5. Bottom Image/Video (bottom-left) */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-3 col-span-2 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[4].gradient)} style={getCardStyle(4)}>
          <BentoBoxContent id={6} title={bentoBoxData[6].title} description={bentoBoxData[6].description} />
        </div>
      </motion.div>

      {/* 6. Reply Message (bottom-center-right) */}
      <motion.div variants={itemVariants} className="col-start-3 row-start-3 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[5].gradient)} style={getCardStyle(5)}>
          <BentoBoxContent id={4} title={bentoBoxData[4].title} description={bentoBoxData[4].description} />
        </div>
      </motion.div>

      {/* 7. Long Message (orange, middle-bottom-center) */}
      <motion.div variants={itemVariants} className="col-start-4 row-start-3 col-span-1 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[6].gradient)} style={getCardStyle(6)}>
          <BentoBoxContent id={5} title={bentoBoxData[5].title} description={bentoBoxData[5].description} />
        </div>
      </motion.div>

      {/* 8. Bottom Message (blue, far right) */}
      <motion.div variants={itemVariants} className="col-start-3 row-start-4 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[7].gradient)} style={getCardStyle(7)}>
          <BentoBoxContent id={7} title={bentoBoxData[7].title} description={bentoBoxData[7].description} />
        </div>
      </motion.div>

      {/* 9. Reminders Widget (bottom-right) */}
      <motion.div variants={itemVariants} className="col-start-5 row-start-4 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[8].gradient)} style={getCardStyle(8)}>
          <BentoBoxContent id={8} title={bentoBoxData[8].title} description={bentoBoxData[8].description} />
        </div>
      </motion.div>

      {/* 10. New Box (3rd row, 5th column) */}
      <motion.div variants={itemVariants} className="col-start-5 row-start-3 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[9].gradient)} style={getCardStyle(9)}>
          <BentoBoxContent id={9} title={bentoBoxData[9].title} description={bentoBoxData[9].description} />
        </div>
      </motion.div>
    </motion.div>
  );

  const MobileGrid: React.FC<GridProps> = ({ onAnimationComplete }) => (
    <motion.div
      variants={containerVariants}
      initial={gridInitial}
      animate={gridAnimate}
      onAnimationComplete={onAnimationComplete}
      className="grid grid-cols-2 gap-4 max-w-xl mx-auto px-2"
      style={{
        gridTemplateColumns: `repeat(2, ${cellSize}px)`,
        gridAutoRows: `${cellSize}px`,
      }}
    >
      {/* 1. Calendar Widget */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-1 col-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[0].gradient)} style={getCardStyle(0)}>
          <BentoBoxContent id={0} title={bentoBoxData[0].title} description={bentoBoxData[0].description} />
        </div>
      </motion.div>
      {/* 8. Bottom Message (blue, moved to top right) */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-1 col-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[7].gradient)} style={getCardStyle(7)}>
          <BentoBoxContent id={7} title={bentoBoxData[7].title} description={bentoBoxData[7].description} />
        </div>
      </motion.div>
      {/* 3. Top Image (2x2) */}
      <motion.div
        variants={itemVariants}
        className="col-start-1 row-start-2 col-span-1 rounded-xl overflow-hidden"
        style={{ gridRow: "span 2" }}
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[2].gradient)} style={getCardStyle(2)}>
          <BentoBoxContent id={3} title={bentoBoxData[3].title} description={bentoBoxData[3].description} />
        </div>
      </motion.div>
      {/* 6. Journal (bottom-center-right) */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-2 col-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[5].gradient)} style={getCardStyle(5)}>
          <BentoBoxContent id={4} title={bentoBoxData[4].title} description={bentoBoxData[4].description} />
        </div>
      </motion.div>
      {/* 10. New Box */}
      <motion.div
        variants={itemVariants}
        className="col-start-2 row-span-2 row-start-3 col-span-1 rounded-xl overflow-hidden"
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[9].gradient)} style={getCardStyle(9)}>
          <BentoBoxContent id={9} title={bentoBoxData[9].title} description={bentoBoxData[9].description} />
        </div>
      </motion.div>
      {/* 4. Message Bubble (wide) */}
      <motion.div
        variants={itemVariants}
        className="col-start-1 row-start-4 col-span-2 rounded-xl overflow-hidden"
        style={{ gridRow: "span 1" }}
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[3].gradient)} style={getCardStyle(3)}>
          <BentoBoxContent id={2} title={bentoBoxData[2].title} description={bentoBoxData[2].description} />
        </div>
      </motion.div>
      {/* 2. Voice Memo */}
      <motion.div
        variants={itemVariants}
        className="col-start-1 row-start-5 col-span-2 rounded-xl overflow-hidden"
        style={{ gridRow: "span 1" }}
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[1].gradient)} style={getCardStyle(1)}>
          <BentoBoxContent id={1} title={bentoBoxData[1].title} description={bentoBoxData[1].description} />
        </div>
      </motion.div>
      {/* 5. Bottom Image/Video */}
      <motion.div
        variants={itemVariants}
        className="col-start-1 row-start-6 col-span-1 rounded-xl overflow-hidden"
        style={{ gridRow: "span 2" }}
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[4].gradient)} style={getCardStyle(4)}>
          <BentoBoxContent id={6} title={bentoBoxData[6].title} description={bentoBoxData[6].description} />
        </div>
      </motion.div>
      {/* 7. Long Message (orange) */}
      <motion.div
        variants={itemVariants}
        className="col-start-2 row-start-6 col-span-1 rounded-xl overflow-hidden"
        style={{ gridRow: "span 2" }}
      >
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[6].gradient)} style={getCardStyle(6)}>
          <BentoBoxContent id={5} title={bentoBoxData[5].title} description={bentoBoxData[5].description} />
        </div>
      </motion.div>
      {/* 9. Reminders Widget */}
      <motion.div variants={itemVariants} className="col-span-1 col-start-1 row-start-4 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[8].gradient)} style={getCardStyle(8)}>
          <BentoBoxContent id={8} title={bentoBoxData[8].title} description={bentoBoxData[8].description} />
        </div>
      </motion.div>
    </motion.div>
  );

  const TabletGrid: React.FC<GridProps> = ({ onAnimationComplete }) => (
    <motion.div
      variants={containerVariants}
      initial={gridInitial}
      animate={gridAnimate}
      onAnimationComplete={onAnimationComplete}
      className="grid grid-cols-4 gap-4 mx-auto"
      style={{
        width: `calc(4 * ${cellSize}px + 3rem)`,
        gridTemplateColumns: `repeat(4, ${cellSize}px)`,
        gridTemplateRows: `repeat(4, ${cellSize}px)`,
      }}
    >
      {/* 1. Calendar Widget */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-1 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[0].gradient)} style={getCardStyle(0)}>
          <BentoBoxContent id={0} title={bentoBoxData[0].title} description={bentoBoxData[0].description} />
        </div>
      </motion.div>
      {/* 2. Voice Memo */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-1 col-span-2 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[1].gradient)} style={getCardStyle(1)}>
          <BentoBoxContent id={1} title={bentoBoxData[1].title} description={bentoBoxData[1].description} />
        </div>
      </motion.div>
      {/* 3. Top Image (2x2) */}
      <motion.div variants={itemVariants} className="col-start-4 row-start-1 col-span-1 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[2].gradient)} style={getCardStyle(2)}>
          <BentoBoxContent id={3} title={bentoBoxData[3].title} description={bentoBoxData[3].description} />
        </div>
      </motion.div>
      {/* 4. Message Bubble (middle-left, wide) */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-2 col-span-3 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[3].gradient)} style={getCardStyle(3)}>
          <BentoBoxContent id={2} title={bentoBoxData[2].title} description={bentoBoxData[2].description} />
        </div>
      </motion.div>
      {/* 5. Bottom Image/Video */}
      <motion.div variants={itemVariants} className="col-start-1 row-start-3 col-span-1 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[4].gradient)} style={getCardStyle(4)}>
          <BentoBoxContent id={6} title={bentoBoxData[6].title} description={bentoBoxData[6].description} />
        </div>
      </motion.div>
      {/* 6. Reply Message */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-3 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[5].gradient)} style={getCardStyle(5)}>
          <BentoBoxContent id={4} title={bentoBoxData[4].title} description={bentoBoxData[4].description} />
        </div>
      </motion.div>
      {/* 7. Long Message (orange) */}
      <motion.div variants={itemVariants} className="col-start-3 row-start-3 col-span-1 row-span-2 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[6].gradient)} style={getCardStyle(6)}>
          <BentoBoxContent id={5} title={bentoBoxData[5].title} description={bentoBoxData[5].description} />
        </div>
      </motion.div>
      {/* 8. Bottom Message */}
      <motion.div variants={itemVariants} className="col-start-2 row-start-4 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[7].gradient)} style={getCardStyle(7)}>
          <BentoBoxContent id={7} title={bentoBoxData[7].title} description={bentoBoxData[7].description} />
        </div>
      </motion.div>
      {/* 9. Reminders Widget */}
      <motion.div variants={itemVariants} className="col-start-4 row-start-4 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[8].gradient)} style={getCardStyle(8)}>
          <BentoBoxContent id={8} title={bentoBoxData[8].title} description={bentoBoxData[8].description} />
        </div>
      </motion.div>
      {/* 10. New Box */}
      <motion.div variants={itemVariants} className="col-start-4 row-start-3 col-span-1 row-span-1 rounded-xl overflow-hidden">
        <div className={cn("glassmorphism h-full w-full bg-gradient-to-br", cardStyles[9].gradient)} style={getCardStyle(9)}>
          <BentoBoxContent id={9} title={bentoBoxData[9].title} description={bentoBoxData[9].description} />
        </div>
      </motion.div>
    </motion.div>
  );

  // When the grid animation completes, mark that it has run.
  const handleAnimationComplete = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    // Attach the ref to a static container so that grid layout changes (via window resize) don't re-trigger the inView hook.
    <div ref={ref}>
      {windowWidth < 768 ? (
        <MobileGrid onAnimationComplete={handleAnimationComplete} />
      ) : windowWidth < 981 ? (
        <TabletGrid onAnimationComplete={handleAnimationComplete} />
      ) : (
        <DesktopGrid onAnimationComplete={handleAnimationComplete} />
      )}
    </div>
  );
}