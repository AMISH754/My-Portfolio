"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [flowerOffset, setFlowerOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setFlowerOffset(-st * 0.18);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pseudo-random spark generator seed
  const sparks = Array.from({ length: 34 }).map((_, k) => {
    const rnd = (i: number) => {
      const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453;
      return x - Math.floor(x);
    };
    const a = rnd(k + 3000) * Math.PI * 2;
    const r = 6 + rnd(k + 3500) * 44;
    const sz = 6 + Math.floor(rnd(k + 4000) * 5);
    const left = (50 + r * Math.cos(a)).toFixed(2);
    const top = (50 + r * Math.sin(a)).toFixed(2);
    const dur = (2.4 + rnd(k + 4500) * 3).toFixed(1);
    const delay = (rnd(k + 5000) * 5).toFixed(1);

    return {
      left: `${left}%`,
      top: `${top}%`,
      width: `${sz}px`,
      height: `${sz}px`,
      margin: `${-sz / 2}px 0 0 ${-sz / 2}px`,
      background:
        "radial-gradient(circle, rgba(243,232,255,1) 0%, rgba(216,180,254,.55) 35%, rgba(216,180,254,0) 70%)",
      animationDuration: `${dur}s`,
      animationDelay: `-${delay}s`,
    };
  });

  const embers = Array.from({ length: 28 }).map((_, j) => {
    const rnd = (i: number) => {
      const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453;
      return x - Math.floor(x);
    };
    const x = 50 + (rnd(j + 6000) - 0.5) * 76;
    const y = 52 + rnd(j + 6500) * 34;
    const s2 = 5 + Math.floor(rnd(j + 7000) * 5);
    const dur = (5 + rnd(j + 7500) * 5).toFixed(1);
    const delay = (rnd(j + 8000) * 9).toFixed(1);

    return {
      left: `${x.toFixed(2)}%`,
      top: `${y.toFixed(2)}%`,
      width: `${s2}px`,
      height: `${s2}px`,
      margin: `${-s2 / 2}px 0 0 ${-s2 / 2}px`,
      background:
        "radial-gradient(circle, rgba(216,180,254,1) 0%, rgba(168,102,252,.5) 35%, rgba(168,102,252,0) 70%)",
      animationDuration: `${dur}s`,
      animationDelay: `-${delay}s`,
    };
  });

  return (
    <section id="top">
      {/* Animated Flower SVG Backdrop */}
      <div
        className="flower"
        aria-hidden="true"
        style={{ transform: `translate(-50%, calc(-50% + ${flowerOffset}px))` }}
      >
        <div className="shade"></div>
        <div className="breathe">
          <svg aria-hidden="true" viewBox="-250 -250 500 500">
            <g className="ringspin">
              <g transform="rotate(-3.6)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "0.00s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "0.45s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "0.15s" }}
                ></path>
              </g>
              <g transform="rotate(43.8)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "0.90s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "1.35s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "1.05s" }}
                ></path>
              </g>
              <g transform="rotate(91.2)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "1.80s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "2.25s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "1.95s" }}
                ></path>
              </g>
              <g transform="rotate(138.6)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "2.70s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "3.15s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "2.85s" }}
                ></path>
              </g>
              <g transform="rotate(177.6)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "3.60s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "4.05s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "3.75s" }}
                ></path>
              </g>
              <g transform="rotate(225.0)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "4.50s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "4.95s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "4.65s" }}
                ></path>
              </g>
              <g transform="rotate(272.4)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "5.40s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "5.85s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "5.55s" }}
                ></path>
              </g>
              <g transform="rotate(311.4)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#4c1d95"
                  strokeWidth="12"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "6.30s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#5b21b6"
                  strokeWidth="12"
                  d="M0,0 C52.0,-48.0 70.0,-130.0 6,-190.0"
                  style={{ animationDelay: "6.75s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#e9d5ff"
                  strokeOpacity=".85"
                  strokeWidth="2"
                  d="M0,0 C-80.0,-30.0 -90.0,-130.0 6,-190.0"
                  style={{ animationDelay: "6.45s" }}
                ></path>
              </g>
            </g>
            <g className="ringspin r">
              <g transform="rotate(23.7)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "7.20s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "7.55s" }}
                ></path>
              </g>
              <g transform="rotate(71.1)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "7.90s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "8.25s" }}
                ></path>
              </g>
              <g transform="rotate(110.1)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "8.60s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "8.95s" }}
                ></path>
              </g>
              <g transform="rotate(157.5)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "9.30s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "9.65s" }}
                ></path>
              </g>
              <g transform="rotate(204.9)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "10.00s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "10.35s" }}
                ></path>
              </g>
              <g transform="rotate(243.9)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "10.70s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "11.05s" }}
                ></path>
              </g>
              <g transform="rotate(291.3)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "11.40s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "11.75s" }}
                ></path>
              </g>
              <g transform="rotate(338.7)">
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#7c3aed"
                  strokeWidth="10"
                  d="M0,0 C-64.0,-24.0 -72.0,-104.0 6,-152.0"
                  style={{ animationDelay: "12.10s" }}
                ></path>
                <path
                  className="strip"
                  pathLength="1"
                  stroke="#a855f7"
                  strokeWidth="10"
                  d="M0,0 C41.6,-38.4 56.0,-104.0 6,-152.0"
                  style={{ animationDelay: "12.45s" }}
                ></path>
              </g>
            </g>
            <circle
              className="strip"
              pathLength="1"
              r="15"
              stroke="#ff4f8b"
              strokeWidth="4"
              style={{ animationDelay: "19.10s" }}
            ></circle>
            <circle r="9" className="strip dot" style={{ animationDelay: "19.50s" }}></circle>
          </svg>

          {/* Sparks & Embers Container */}
          <div id="sparks">
            {sparks.map((spark, idx) => (
              <i key={`tw-${idx}`} className="spark tw" style={spark} />
            ))}
            {embers.map((ember, idx) => (
              <i key={`em-${idx}`} className="spark em" style={ember} />
            ))}
          </div>
        </div>
      </div>

      <main className="hero-main">
        <div className="hero-text">
          <div className="hello">Hi, I'm Amish Kumar Dubey.</div>
          <h1>
            <span>Full-stack</span>
            <span>developer</span>
            <span className="sub">&amp; competitive programmer</span>
          </h1>
          <p>
            I build scalable web applications from database architecture to smooth UIs, and solve algorithm challenges in contests for fun. ECE student at BIT Mesra (CGPA 8.67).
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">
              View Projects
              <ArrowRight className="w-5 h-5 ml-1 inline-block" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <div className="scroll-cue" aria-hidden="true">
        <span>SCROLL</span>
        <i></i>
      </div>
    </section>
  );
}
