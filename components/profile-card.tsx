"use client"

import { useState, useEffect } from "react"

interface ProfileProps {
  mediaUrl: string;
  name: string;
  bio?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function ProfileCard({ mediaUrl, name, bio, buttonText, buttonLink }: ProfileProps) {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false)
  const isVideo = mediaUrl.endsWith(".mp4")

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-[280px] w-[220px] overflow-hidden rounded-xl bg-black/80 text-white shadow-lg">
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          {bio && <p className="text-white/70 text-xs truncate">{bio}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[280px] w-[220px] overflow-hidden rounded-xl bg-black/80 text-white shadow-lg">
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={mediaUrl}
            className="h-full w-full object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setImageError(true)}
          />
        ) : (
          <img
            src={imageError ? "/placeholder.svg?height=400&width=300" : mediaUrl}
            alt={name}
            className="h-full w-full object-cover opacity-80"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        {bio && <p className="text-white/70 text-xs truncate mt-0.5">{bio}</p>}
      </div>
    </div>
  )
}