"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Add smooth scrolling behavior to all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      // Only process anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Get the target element
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Smooth scroll to the target
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });

          // Close mobile menu after clicking a link
          setIsMenuOpen(false);
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  // Handle clicks outside the navbar when menu is open
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          ref={navbarRef}
          className="glassmorphism rounded-full overflow-hidden"
          animate={{
            height: isMenuOpen ? "60vh" : "auto"
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1],
            height: { type: "spring", stiffness: 300, damping: 30 }
          }}
        >
          {/* Header with logo and toggle button - always visible */}
          <div className="py-3 px-5 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">👋</span>
              <span className="text-xl font-bold">hi</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <Button size="sm" className="bg-[#1888FE] hover:bg-gray-500 rounded-full px-5 group transition-all duration-300 ease-in-out w-[80px] hover:w-[120px]">
                <span className="group-hover:hidden whitespace-nowrap">Sign Up</span>
                <span className="hidden group-hover:inline whitespace-nowrap">Coming Soon</span>
              </Button>
            </nav>
            
            {/* Mobile Navigation Toggle and Sign Up */}
            <div className="md:hidden flex items-center">
              <AnimatePresence>
                {!isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button size="sm" className="mr-4 bg-[#1888FE] hover:bg-gray-500 rounded-full px-5 group">
                      <span className="group-hover:hidden">Sign Up</span>
                      <span className="hidden group-hover:inline">Coming Soon</span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 p-0"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from bubbling up
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Items - only visible when menu is open */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center h-[calc(60vh-70px)] pb-6">
                  <div className="space-y-8 flex flex-col items-center">
                    <motion.a
                      href="#hero"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </motion.a>
                    
                    <motion.a
                      href="#features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </motion.a>
                    
                    <motion.a
                      href="#faq"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </motion.a>

                    {/* Sign Up button in the dropdown menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-[#1888FE] hover:bg-gray-500 rounded-full px-8 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="group-hover:hidden">Sign Up</span>
                        <span className="hidden group-hover:inline">Coming Soon</span>
                      </Button>
                    </motion.div>

                    {/* Additional mobile-only content */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="pt-6 w-full flex justify-center"
                    >
                      <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}