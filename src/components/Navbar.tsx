"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "CP", href: "#cp" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-0 md:py-3 px-0 md:px-8"
            : "py-0 md:py-5 px-0 md:px-8"
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between transition-all duration-300 w-full rounded-none px-6 py-4 backdrop-blur-md md:max-w-7xl md:rounded-full ${
            scrolled
              ? "bg-navy-900/95 border-b border-slate-800/80 shadow-md md:glass-panel md:bg-navy-800/80 md:shadow-lg md:px-6 md:py-3 md:border-none"
              : "bg-navy-900/90 border-b border-slate-800/40 md:bg-transparent md:px-4 md:py-2 md:border-none"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group font-semibold text-xl tracking-tight text-white">
            <Code2 className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span>
              Amish<span className="text-secondary font-bold">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
              className="mr-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 hover:border-primary/50 text-slate-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer font-mono text-[10px] font-bold"
              title="Open Command Search"
            >
              <Search className="h-3.5 w-3.5 text-primary animate-pulse" />
              <span>⌘K</span>
            </button>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full bg-primary hover:bg-primary/95 text-white shadow-md shadow-primary/20 hover:scale-[1.05] hover:shadow-primary/30 transition-all uppercase tracking-wider cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer/Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 mx-4 p-6 rounded-2xl bg-navy-900/98 shadow-2xl md:hidden flex flex-col gap-4 border border-slate-800/80 backdrop-blur-xl"
          >
            {navItems.map((item, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navItems.length * 0.05 }}
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new Event("toggle-command-palette"));
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold w-full text-center mt-2 transition-all cursor-pointer"
            >
              <Search className="h-4 w-4 text-primary" />
              Search Commands (⌘K)
            </motion.button>
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (navItems.length + 1) * 0.05 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold w-full text-center mt-2 shadow-lg shadow-primary/20 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
