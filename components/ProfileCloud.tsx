"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Profile {
  mediaUrl: string;
  name: string;
}

interface ProfileCloudProps {
  profiles: Profile[];
  width?: number;
  height?: number;
  className?: string;
  inView?: boolean;
}

export function ProfileCloud({ profiles, width = 400, height = 400, className = "", inView = false }: ProfileCloudProps) {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  // Separate profiles into outer and inner circles
  const outerCircleCount = Math.min(8, Math.ceil(profiles.length * 0.6));
  const innerCircleCount = Math.min(4, profiles.length - outerCircleCount);
  
  const outerCircleProfiles = profiles.slice(0, outerCircleCount);
  const innerCircleProfiles = profiles.slice(outerCircleCount, outerCircleCount + innerCircleCount);

  useEffect(() => {
    setMounted(true);
    
    // Start the animation with setInterval for consistent timing
    const rotationSpeed = 0.01; // Speed of rotation
    const intervalId = setInterval(() => {
      setRotation(prev => prev + rotationSpeed);
    }, 16); // ~60fps
    
    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Calculate position on the circle based on index and current rotation
  const getOuterCirclePosition = (index: number, totalItems: number) => {
    const angle = (index * 2 * Math.PI) / totalItems + rotation;
    const radius = Math.min(width, height) / 2 - 20; // Maintain outer circle radius
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return { x, y };
  };

  // Calculate inner circle position with reversed rotation
  const getInnerCirclePosition = (index: number, totalItems: number) => {
    // Inner circle rotates counter-clockwise (negative rotation)
    const angle = (index * 2 * Math.PI) / totalItems - (rotation * 0.7);
    const radius = Math.min(width, height) / 6; // Decreased inner circle radius
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return { x, y };
  };

  // Render placeholder if not mounted
  if (!mounted) {
    return (
      <div 
        className={`relative ${className}`} 
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">👋</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
      }}
    >
      {/* Static hand in center - no circle */}
      <div 
        className="absolute flex items-center justify-center"
        style={{ 
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100
        }}
      >
        <span className="text-2xl">👋</span>
      </div>
      
      {/* Outer circle profiles */}
      {outerCircleProfiles.map((profile, index) => {
        // Determine if it's a video
        const isVideo = profile.mediaUrl.endsWith('.mp4');
        const { x, y } = getOuterCirclePosition(index, outerCircleProfiles.length);
        
        return (
          <motion.div
            key={`outer-${profile.name}-${index}`}
            className="absolute rounded-full overflow-hidden border-4 border-white/10 shadow-lg cursor-pointer"
            style={{ 
              width: '100px',
              height: '100px',
              left: '50%',
              top: '50%',
              marginLeft: '-50px',
              marginTop: '-50px',
              zIndex: 10,
              x,
              y
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { 
              opacity: 1,
              scale: 1,
            } : { opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 150,
              duration: 0.5,
              delay: index * 0.05
            }}
          >
            {isVideo ? (
              <video
                src={profile.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={profile.mediaUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Subtle gradient overlay without name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        );
      })}
      
      {/* Inner circle profiles */}
      {innerCircleProfiles.map((profile, index) => {
        const { x, y } = getInnerCirclePosition(index, innerCircleProfiles.length);
        
        // Determine if it's a video
        const isVideo = profile.mediaUrl.endsWith('.mp4');
        
        return (
          <motion.div
            key={`inner-${profile.name}-${index}`}
            className="absolute rounded-full overflow-hidden border-4 border-white/10 shadow-lg cursor-pointer"
            style={{ 
              width: '70px', // Slightly smaller size for inner circle
              height: '70px',
              left: '50%',
              top: '50%',
              marginLeft: '-35px',
              marginTop: '-35px',
              zIndex: 5,
              x,
              y
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { 
              opacity: 1,
              scale: 1,
            } : { opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 150,
              duration: 0.5,
              delay: (index + outerCircleProfiles.length) * 0.05
            }}
          >
            {isVideo ? (
              <video
                src={profile.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={profile.mediaUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Subtle gradient overlay without name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        );
      })}
    </div>
  );
}