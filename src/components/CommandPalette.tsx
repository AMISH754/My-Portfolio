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
      title: "Navigate: Home Specimen",
      category: "Section 00",
      action: () => scrollToSection("#home"),
    },
    {
      title: "Navigate: Biography & Specifications",
      category: "Section 01",
      action: () => scrollToSection("#about"),
    },
    {
      title: "Navigate: Technical Index",
      category: "Section 02",
      action: () => scrollToSection("#skills"),
    },
    {
      title: "Navigate: Algorithmic Benchmarks",
      category: "Section 03",
      action: () => scrollToSection("#cp"),
    },
    {
      title: "Navigate: Signal Processing Lab",
      category: "Section 04",
      action: () => scrollToSection("#ece-lab"),
    },
    {
      title: "Navigate: Selected Works",
      category: "Section 05",
      action: () => scrollToSection("#projects"),
    },
    {
      title: "Navigate: Recognitions & Leadership",
      category: "Section 06",
      action: () => scrollToSection("#achievements"),
    },
    {
      title: "Navigate: Academic Record",
      category: "Section 07",
      action: () => scrollToSection("#education"),
    },
    {
      title: "Navigate: Direct Inquiries",
      category: "Section 08",
      action: () => scrollToSection("#contact"),
    },
    {
      title: "Document: Download Curriculum Vitae (PDF)",
      category: "External File",
      action: () => window.open("/resume.pdf", "_blank"),
      shortcut: "CV",
    },
    {
      title: "External: Codeforces Profile (@amish_kr_dubey)",
      category: "Profile",
      action: () => window.open("https://codeforces.com/profile/amish_kr_dubey", "_blank"),
      shortcut: "CF",
    },
    {
      title: "External: GitHub Profile (@AMISH754)",
      category: "Profile",
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

  const filteredCommands = commands.filter((cmd) =>
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-[#151514]/60">
      <div className="w-full max-w-lg bg-[#FAFAF8] border border-[#151514] rounded-[2px] shadow-none flex flex-col max-h-[460px] overflow-hidden">
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 hairline-b bg-[#F1F1EE]">
          <Search className="w-4 h-4 text-[#6B6A66] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleListKeyDown}
            placeholder="Search index commands, sections, files..."
            className="w-full bg-transparent text-[#151514] placeholder-[#A3A29D] font-sans text-sm focus:outline-none border-none p-0"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#6B6A66] hover:text-[#151514] p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command entries */}
        <div
          ref={scrollRef}
          className="flex-grow overflow-y-auto divide-y divide-[#DAD9D4]"
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
                    isSelected ? "bg-[#151514] text-[#FAFAF8]" : "text-[#151514] hover:bg-[#F1F1EE]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-medium">
                      {cmd.title}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        isSelected ? "text-[#A3A29D]" : "text-[#6B6A66]"
                      }`}
                    >
                      {cmd.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 border rounded-[2px] ${
                          isSelected
                            ? "border-[#6B6A66] text-[#FAFAF8]"
                            : "border-[#DAD9D4] text-[#6B6A66] bg-[#F1F1EE]"
                        }`}
                      >
                        {cmd.shortcut}
                      </span>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#FAFAF8] opacity-80" />
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center font-mono text-xs text-[#6B6A66]">
              No index entries found.
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="hairline-t bg-[#F1F1EE] px-4 py-2 flex items-center justify-between font-mono text-[10px] text-[#6B6A66]">
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
