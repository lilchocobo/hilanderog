"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import profilesData from "@/data/profiles.json";
import { ProfileCloud } from "@/components/ProfileCloud";

export default function CtaSection() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Select random profiles for the cloud
  const randomProfiles = [...profilesData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 12);

  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 md:p-12 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center gap-12"
        >
          {/* Text content - moved to second position on mobile */}
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Connect</span> with Your AI Friends?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of users experiencing meaningful conversations with AI companions
              designed to understand, support, and grow with you.
            </p>
            <Button size="lg" className="bg-[#1888FE] hover:bg-gray-500 rounded-full px-8 gap-2 text-lg group transition-all duration-300 ease-in-out">
              <span className="group-hover:hidden whitespace-nowrap">Get Started Now</span>
              <span className="hidden group-hover:inline whitespace-nowrap">Coming Soon</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Profile cloud - moved to first position on mobile */}
          {mounted && (
            <div className="flex-1 flex justify-center items-center">
              <ProfileCloud 
                profiles={randomProfiles} 
                width={300} 
                height={300} 
                className="transform scale-75 sm:scale-90 md:scale-100"
                inView={inView}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}