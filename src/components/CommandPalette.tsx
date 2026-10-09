"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, CornerDownLeft, X } from "lucide-react";

interface CommandItem {
  title: string;
  category: string;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const commands: CommandItem[] = [
    {
      title: "Navigate: Hero Section",
      category: "Section 00",
      action: () => scrollToSection("#top"),
    },
    {
      title: "Navigate: Biography & Specifications",
      category: "Section 01",
      action: () => scrollToSection("#about"),
    },
    {
      title: "Navigate: Technical Stack",
      category: "Section 02",
      action: () => scrollToSection("#stack"),
    },
    {
      title: "Navigate: Projects (NexJyoti, Heart Talk, VortexCast)",
      category: "Section 03",
      action: () => scrollToSection("#projects"),
    },
    {
      title: "Navigate: Coding & Leadership Achievements",
      category: "Section 04",
      action: () => scrollToSection("#contests"),
    },
    {
      title: "Navigate: Experience & Academic Record",
      category: "Section 05",
      action: () => scrollToSection("#journey"),
    },
    {
      title: "Navigate: Direct Contact (Formspree)",
      category: "Section 06",
      action: () => scrollToSection("#contact"),
    },
    {
      title: "External: Live Demo — NexJyoti Foundation (nexjyoti.org)",
      category: "Live Product",
      action: () => window.open("https://nexjyoti.org/", "_blank"),
      shortcut: "NEX",
    },
    {
      title: "External: Live Demo — Heart Talk Real-Time Chat App",
      category: "Live Product",
      action: () => window.open("https://chat-app-59c85.web.app/", "_blank"),
      shortcut: "CHAT",
    },
    {
      title: "External: Live Demo — VortexCast Weather Dashboard",
      category: "Live Product",
      action: () => window.open("https://weather-app-opal-eight-42.vercel.app/", "_blank"),
      shortcut: "WX",
    },
    {
      title: "Profile: LeetCode (@AMISH_KUMAR_DUBEY)",
      category: "Coding Profile",
      action: () => window.open("https://leetcode.com/u/AMISH_KUMAR_DUBEY/", "_blank"),
      shortcut: "LC",
    },
    {
      title: "Profile: Codeforces (@amish_kr_dubey)",
      category: "Coding Profile",
      action: () => window.open("https://codeforces.com/profile/amish_kr_dubey", "_blank"),
      shortcut: "CF",
    },
    {
      title: "Profile: LinkedIn (@amish-kumar-dubey)",
      category: "Professional Profile",
      action: () => window.open("https://www.linkedin.com/in/amish-kumar-dubey/", "_blank"),
      shortcut: "IN",
    },
    {
      title: "Profile: GitHub (@AMISH754)",
      category: "Code Repositories",
      action: () => window.open("https://github.com/AMISH754", "_blank"),
      shortcut: "GH",
    },
  ];

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

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-command-palette", handleToggle);
    return () => window.removeEventListener("toggle-command-palette", handleToggle);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        setSearch("");
        setSelectedIndex(0);
      }, 50);
    }
  }, [isOpen]);

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#080808] border border-[#e0115f]/40 rounded-xl flex flex-col max-h-[460px] overflow-hidden shadow-2xl">
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Search className="w-4 h-4 text-[#f2477f] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleListKeyDown}
            placeholder="Search commands, projects, live links..."
            className="w-full bg-transparent text-white placeholder-[#8f8f9c] font-sans text-sm focus:outline-none border-none p-0"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#8f8f9c] hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command entries */}
        <div
          ref={scrollRef}
          className="flex-grow overflow-y-auto divide-y divide-white/5"
        >
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.title}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#140409] text-white border-l-2 border-[#e0115f]"
                      : "text-[#c9c9d1] hover:bg-white/5"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-medium">
                      {cmd.title}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        isSelected ? "text-[#f2477f]" : "text-[#8f8f9c]"
                      }`}
                    >
                      {cmd.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 border rounded ${
                          isSelected
                            ? "border-[#e0115f] text-[#f2477f] bg-[#140409]"
                            : "border-white/10 text-[#8f8f9c] bg-white/5"
                        }`}
                      >
                        {cmd.shortcut}
                      </span>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#f2477f]" />
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center font-mono text-xs text-[#8f8f9c]">
              No index entries found.
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="border-t border-white/10 bg-white/5 px-4 py-2 flex items-center justify-between font-mono text-[10px] text-[#8f8f9c]">
          <div className="flex items-center gap-2">
            <span>[↑↓] SELECT</span>
            <span>·</span>
            <span>[ENTER] EXECUTE</span>
          </div>
          <span>[ESC] CLOSE</span>
        </div>
      </div>
    </div>
  );
}
