"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      {/* Background orbs */}
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
          filter: "blur(100px)",
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0) 70%)",
          top: "-200px",
          left: "-200px",
        }}
      />
      
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2.5,
        }}
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
          filter: "blur(100px)",
          background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.3), rgba(249, 115, 22, 0) 70%)",
          bottom: "-200px",
          right: "-200px",
        }}
      />
      
      <motion.div
        className="orb orb-3"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          delay: 7.5,
        }}
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
          filter: "blur(100px)",
          background: "radial-gradient(circle at center, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Additional gradient for hero section */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(24, 136, 254, 0.4), transparent 70%)",
        }}
      />
      
      {/* Very subtle noise overlay for texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.01] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}