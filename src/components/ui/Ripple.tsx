"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface RippleProps {
  className?: string;
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export function Ripple({
  className,
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10",
        className
      )}
    >
      {Array.from({ length: numCircles }).map((_, i) => {
        const size = mainCircleSize + i * 80;
        const delay = `${i * 0.4}s`;
        const opacity = mainCircleOpacity - i * 0.03;

        return (
          <div
            key={i}
            className="absolute rounded-full border border-slate-700/20 bg-slate-800/[0.01] shadow-inner animate-ripple"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.max(0, opacity),
              animationDelay: delay,
            }}
          />
        );
      })}

      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0.9) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: scale(1.6) translate(0, 0);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
