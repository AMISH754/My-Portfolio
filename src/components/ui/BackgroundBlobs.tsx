"use client";

import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Top Left Blob - Emerald */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] animate-blob" />

      {/* Top Right Blob - Pine */}
      <div className="absolute top-10 right-10 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-secondary/10 blur-[80px] md:blur-[120px] animate-blob animation-delay-2000" />

      {/* Bottom Center Blob - Mint glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent-foreground/5 blur-[80px] md:blur-[140px] animate-blob animation-delay-4000" />

      {/* Extra background overlay to keep readability high */}
      <div className="absolute inset-0 bg-navy-900/30" />
    </div>
  );
}
