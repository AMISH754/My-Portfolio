"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface CometCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
  cometColor1?: string;
  cometColor2?: string;
}

export function CometCard({
  children,
  className,
  containerClassName,
  duration = 5,
  cometColor1 = "#216955", // Emerald
  cometColor2 = "#b3e5d1", // Mint
}: CometCardProps) {
  // Creating a unique ID for the gradient definition to prevent conflicts in grid rendering
  const gradientId = React.useId().replace(/:/g, "");

  return (
    <div
      className={cn(
        "relative p-[1.5px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl",
        containerClassName
      )}
    >
      {/* The Comet Border Vector */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="14" // Card border-radius minus offset
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.5"
          className="animate-comet"
          style={{
            strokeDasharray: "120 280",
            animation: `comet-run ${duration}s linear infinite`,
          }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor={cometColor1} />
            <stop offset="70%" stopColor={cometColor2} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner Card Wrapper */}
      <div className={cn("relative z-10 bg-navy-800 rounded-2xl h-full w-full overflow-hidden", className)}>
        {children}
      </div>

      <style>{`
        @keyframes comet-run {
          0% {
            stroke-dashoffset: 400;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
