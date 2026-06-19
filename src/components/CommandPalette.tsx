"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, Download, Sparkles, Mail, FileText, ArrowRight, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";

interface CommandItem {
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Define available actions
  const commands: CommandItem[] = [
    // Navigation
    {
      title: "Scroll to Home",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#home"),
    },
    {
      title: "Scroll to About",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#about"),
    },
    {
      title: "Scroll to Skills & Tech",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#skills"),
    },
    {
      title: "Scroll to CP Profiles",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#cp"),
    },
    {
      title: "Scroll to ECE Diagnostic Lab",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#ece-lab"),
    },
    {
      title: "Scroll to Featured Projects",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#projects"),
    },
    {
      title: "Scroll to Education Timeline",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#education"),
    },
    {
      title: "Scroll to Get In Touch",
      category: "Navigation",
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection("#contact"),
    },
    // Interactive actions
    {
      title: "Trigger Confetti Celebration",
      category: "Actions",
      icon: <Sparkles className="h-4 w-4 text-amber-400" />,
      action: () => triggerCelebration(),
      shortcut: "C",
    },
    {
      title: "View Resume PDF",
      category: "Downloads",
      icon: <FileText className="h-4 w-4 text-cyan-400" />,
      action: () => window.open("/resume.pdf", "_blank"),
      shortcut: "R",
    },
  ];

  // Open/close listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Listen for custom trigger events (for clicking the search badge in Navbar)
  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-command-palette", handleToggle);
    return () => window.removeEventListener("toggle-command-palette", handleToggle);
  }, []);

  // Focus input when menu opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter commands by search term
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Scroll active item into view
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        const parent = scrollRef.current;
        const activeTop = activeEl.offsetTop;
        const activeHeight = activeEl.offsetHeight;
        const parentHeight = parent.offsetHeight;

        if (activeTop < parent.scrollTop) {
          parent.scrollTop = activeTop;
        } else if (activeTop + activeHeight > parent.scrollTop + parentHeight) {
          parent.scrollTop = activeTop + activeHeight - parentHeight;
        }
      }
    }
  }, [selectedIndex]);

  // Handle keyboard interaction inside list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerCelebration = () => {
    setIsOpen(false);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#216955", "#387766", "#b3e5d1", "#ffffff"],
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Command Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg bg-navy-800/90 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 glass-panel flex flex-col max-h-[450px]"
          >
            {/* Search Input bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-700/50">
              <Search className="h-4.5 w-4.5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleListKeyDown}
                placeholder="Search commands, navigate sections..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-0 focus:border-none border-none p-0"
              />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 font-bold tracking-widest shrink-0">
                ESC
              </span>
            </div>

            {/* List entries */}
            <div
              ref={scrollRef}
              className="flex-grow overflow-y-auto py-2 divide-y divide-transparent px-2"
            >
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={cmd.title}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-primary text-white"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-1.5 rounded-lg shrink-0 ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-slate-950 border border-slate-800 text-slate-400"
                          }`}
                        >
                          {cmd.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold font-mono tracking-wide">
                            {cmd.title}
                          </div>
                          <div
                            className={`text-[9px] uppercase tracking-wider mt-0.5 font-bold ${
                              isSelected ? "text-slate-200" : "text-slate-500"
                            }`}
                          >
                            {cmd.category}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cmd.shortcut && (
                          <span
                            className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase shrink-0 ${
                              isSelected
                                ? "bg-white/20 border-white/20 text-white"
                                : "bg-slate-900 border-slate-800 text-slate-500"
                            }`}
                          >
                            {cmd.shortcut}
                          </span>
                        )}
                        {isSelected && (
                          <CornerDownLeft className="h-3 w-3 text-white opacity-70 shrink-0" />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-xs font-mono text-slate-500">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Helper footer */}
            <div className="border-t border-slate-700/50 bg-slate-950/40 px-4 py-2.5 flex items-center justify-between text-[9px] text-slate-500 font-mono select-none">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded">↑↓</span> Move
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded">Enter</span> Select
                </span>
              </div>
              <div>
                <span>Press <span className="font-bold">⌘K</span> or <span className="font-bold">Ctrl+K</span> to toggle</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
