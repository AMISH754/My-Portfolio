"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words[wordIndex].slice(0, latest)
  );

  useEffect(() => {
    // Type out the current word, wait, delete it, and move to next
    const textLength = words[wordIndex].length;
    const controls = animate(count, textLength, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        // Hold the text for 2 seconds
        setTimeout(() => {
          const deleteControls = animate(count, 0, {
            type: "tween",
            duration: 1.0,
            ease: "easeInOut",
            onComplete: () => {
              // Switch to next word
              setWordIndex((prev) => (prev + 1) % words.length);
            },
          });
          return () => deleteControls.stop();
        }, 2000);
      },
    });

    return () => controls.stop();
  }, [wordIndex, count, words]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-1 w-[3px] h-8 bg-secondary"
      />
    </div>
  );
}
