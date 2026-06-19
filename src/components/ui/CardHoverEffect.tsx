"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    tags?: string[];
    link?: string;
  }[];
  className?: string;
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <HoverEffectGrid className={className}>
      {items.map((item, idx) => (
        <HoverEffectCard
          key={item.title}
          idx={idx}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          link={item.link}
        >
          <div>
            {item.icon && (
              <div className="p-3 bg-slate-900 w-fit rounded-xl text-primary mb-4 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
            )}
            <h3 className="text-lg font-bold text-white tracking-wide mb-2">
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </HoverEffectCard>
      ))}
    </HoverEffectGrid>
  );
}

export function HoverEffectGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function HoverEffectCard({
  idx,
  hoveredIndex,
  setHoveredIndex,
  children,
  className,
  link,
  onClick,
}: {
  idx: number;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
  children: React.ReactNode;
  className?: string;
  link?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const CardContent = (
    <div className={cn("relative z-10 h-full bg-navy-800 border border-slate-800 hover:border-primary/50 rounded-2xl shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group-hover:translate-y-[-4px]", className)}>
      {children}
    </div>
  );

  return (
    <div
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-primary/[0.12] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.1 },
            }}
          />
        )}
      </AnimatePresence>
      {link ? (
        <a href={link} className="block h-full w-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </div>
  );
}
