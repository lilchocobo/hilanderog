"use client";

import { Twitter, Instagram, Github, Linkedin } from "lucide-react";
import { Footer } from "@/components/ui/footer";

export default function FooterSection() {
  // Define the footer props
  const footerProps = {
    logo: <span className="text-2xl">👋</span>,
    brandName: "hi.xyz",
    socialLinks: [
      {
        icon: <Twitter size={16} />,
        href: "https://twitter.com",
        label: "Twitter"
      }
    ],
    mainLinks: [],
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" }
    ],
    copyright: {
      text: "© 2025 hi.xyz. All rights reserved.",
      license: "AI companions with humanity in mind."
    }
  };

  return (
    <div className="relative">
      {/* Gradient background overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: `linear-gradient(to top, 
            rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.5) 10%, 
            rgba(0,0,0,0.5) 90%, 
            rgba(0,0,0,0) 100%)`
        }}
      />
      
      {/* Footer content with higher z-index */}
      <div className="container mx-auto relative z-10">
        <Footer {...footerProps} className="py-6" />
      </div>
    </div>
  );
}