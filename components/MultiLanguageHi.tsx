"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { text: "Hi", lang: "English" },
  { text: "你好", lang: "Chinese" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Ciao", lang: "Italian" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Привет", lang: "Russian" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hallo", lang: "German" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "Salut", lang: "Romanian" },
  { text: "Hej", lang: "Swedish" },
];

export function MultiLanguageHi() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Only run animations after component is mounted on the client
  useEffect(() => {
    setMounted(true);
    
    // Start the animation cycle
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % languages.length);
          setIsChanging(false);
        }, 500); // Time for fade out before changing text
      }, 3000); // Change every 3 seconds
    };

    startAnimation();

    // Clean up the interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Return static content for the initial server render
  if (!mounted) {
    return <span>Hi</span>;
  }

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            type: "tween", 
            duration: 0.5, 
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          {languages[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}