"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  logo?: React.ReactNode;
  brandName: string;
  socialLinks?: {
    icon: React.ReactNode;
    href: string;
    label: string;
  }[];
  mainLinks?: {
    href: string;
    label: string;
  }[];
  legalLinks?: {
    href: string;
    label: string;
  }[];
  copyright?: {
    text: string;
    license?: string;
  };
  className?: string;
}

export function Footer({
  logo,
  brandName,
  socialLinks = [],
  mainLinks = [],
  legalLinks = [],
  copyright,
  className,
}: FooterProps) {
  return (
    <footer className={cn("py-6 px-4 md:px-6", className)}>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center">
          {/* Brand and social links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {logo}
              <span className="font-bold text-lg">{brandName}</span>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <Link href={link.href}>
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Legal links */}
          <div className="flex gap-6">
            {legalLinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright - centered */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">{copyright?.text}</p>
          {copyright?.license && (
            <p className="text-xs text-muted-foreground mt-1">
              {copyright.license}
            </p>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex flex-col items-center gap-4">
          {/* Logo and brand name */}
          <div className="flex items-center gap-2">
            {logo}
            <span className="font-bold text-lg">{brandName}</span>
          </div>
          
          {/* Social links */}
          <div className="flex gap-2">
            {socialLinks.map((link, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <Link href={link.href}>
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
          
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">{copyright?.text}</p>
            {copyright?.license && (
              <p className="text-xs text-muted-foreground mt-1">
                {copyright.license}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}