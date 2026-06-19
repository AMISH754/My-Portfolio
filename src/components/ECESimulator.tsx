"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Sliders, Radio, HelpCircle, Eye } from "lucide-react";

type WaveType = "sine" | "square" | "triangle" | "sawtooth" | "superposition";

export default function ECESimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveType, setWaveType] = useState<WaveType>("sine");
  const [frequency, setFrequency] = useState<number>(4);
  const [amplitude, setAmplitude] = useState<number>(40);
  const [phase, setPhase] = useState<number>(0);
  const [noise, setNoise] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Secondary wave parameters for superposition
  const [freq2, setFreq2] = useState<number>(8);
  const [amp2, setAmp2] = useState<number>(20);

  // Time tracker for animation
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = 320;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // 1. Draw Oscilloscope Grid Lines (Standard ECE CRT screen style)
      ctx.strokeStyle = "rgba(33, 105, 85, 0.15)";
      ctx.lineWidth = 1;
      const gridSize = 40;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Main Axes
      ctx.strokeStyle = "rgba(179, 229, 209, 0.3)";
      ctx.lineWidth = 1.5;

      // X-Axis
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Y-Axis
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Small ticks on center axes
      ctx.strokeStyle = "rgba(179, 229, 209, 0.4)";
      ctx.lineWidth = 1;
      
      // X ticks
      for (let x = 0; x < width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, centerY - 4);
        ctx.lineTo(x, centerY + 4);
        ctx.stroke();
      }

      // Y ticks
      for (let y = 0; y < height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(width / 2 - 4, y);
        ctx.lineTo(width / 2 + 4, y);
        ctx.stroke();
      }

      // 2. Compute and Draw Waveform
      ctx.beginPath();
      ctx.strokeStyle = "#b3e5d1";
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(179, 229, 209, 0.8)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const points: [number, number][] = [];
      const t = timeRef.current;

      for (let x = 0; x < width; x++) {
        // Map x to angle space
        const angle = (x / width) * Math.PI * 2 * frequency + phase + t;
        let yVal = 0;

        switch (waveType) {
          case "sine":
            yVal = Math.sin(angle) * amplitude;
            break;
          case "square":
            yVal = Math.sign(Math.sin(angle)) * amplitude;
            break;
          case "triangle":
            yVal = (Math.abs((angle % (Math.PI * 2)) - Math.PI) / Math.PI - 0.5) * 2 * amplitude;
            break;
          case "sawtooth":
            yVal = (((angle / Math.PI) % 2) - 1) * amplitude;
            break;
          case "superposition":
            // Composite signal: Signal 1 + Signal 2
            const angle2 = (x / width) * Math.PI * 2 * freq2 + phase + t;
            yVal = Math.sin(angle) * amplitude + Math.sin(angle2) * amp2;
            break;
        }

        // Add gaussian noise simulation
        if (noise > 0) {
          yVal += (Math.random() - 0.5) * noise * 1.5;
        }

        const screenY = centerY - yVal;
        points.push([x, screenY]);
      }

      // Render the points to canvas path
      if (points.length > 0) {
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.stroke();
      }

      // Reset shadows so they don't leak
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      // 3. Draw trigger indicator overlay
      ctx.fillStyle = "#216955";
      ctx.font = "bold 10px monospace";
      ctx.fillText("CH1: AC COUPLED", 15, 25);
      ctx.fillStyle = "#b3e5d1";
      ctx.fillText(`TRIG: AUTO [${waveType.toUpperCase()}]`, 15, 40);

      // Increment time for motion simulation
      if (isPlaying) {
        timeRef.current += 0.05;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [waveType, frequency, amplitude, phase, noise, isPlaying, freq2, amp2]);

  // Compute standard ECE Diagnostics
  const peakToPeak = waveType === "superposition" 
    ? ((amplitude + amp2) * 2).toFixed(1)
    : (amplitude * 2).toFixed(1);

  const getVrms = () => {
    if (waveType === "sine") return (amplitude / Math.SQRT2).toFixed(1);
    if (waveType === "square") return amplitude.toFixed(1);
    if (waveType === "triangle") return (amplitude / Math.sqrt(3)).toFixed(1);
    if (waveType === "sawtooth") return (amplitude / Math.sqrt(3)).toFixed(1);
    // Rough calculation for superposition superposition
    return Math.sqrt(Math.pow(amplitude / Math.SQRT2, 2) + Math.pow(amp2 / Math.SQRT2, 2)).toFixed(1);
  };

  const period = (1 / frequency).toFixed(3);
  const mathFormula = () => {
    if (waveType === "sine") return `v(t) = ${amplitude} · sin(${frequency}ωt + ${phase.toFixed(1)})`;
    if (waveType === "square") return `v(t) = ${amplitude} · sgn(sin(${frequency}ωt))`;
    if (waveType === "triangle") return `v(t) = tri(${frequency}ωt)`;
    if (waveType === "sawtooth") return `v(t) = sawtooth(${frequency}ωt)`;
    return `v(t) = ${amplitude}·sin(${frequency}ωt) + ${amp2}·sin(${freq2}ωt)`;
  };

  return (
    <section id="ece-lab" className="py-24 px-6 relative bg-transparent border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            ECE Diagnostic <span className="text-secondary">Lab</span> Sandbox
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            An interactive signal processing workspace. Tweak waveforms, adjust signal vectors, and visualize Fourier frequencies.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Oscilloscope Visual Display Screen */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-black/90 border-2 border-slate-800/80 rounded-3xl p-4 relative shadow-2xl overflow-hidden group">
            {/* Screen Bezel / Glow effect */}
            <div className="absolute inset-0 border border-green-500/10 pointer-events-none rounded-3xl z-20 group-hover:border-green-500/20 transition-colors" />
            
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-secondary animate-pulse" />
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase font-mono">
                  Agilent Tech - DSO-X 2026A
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1 text-[10px] font-bold rounded bg-slate-900 border border-slate-800 hover:border-primary/50 text-slate-300 hover:text-white transition-colors cursor-pointer font-mono"
                >
                  {isPlaying ? "📴 RUN/STOP" : "📶 SINGLE"}
                </button>
                <span className={`h-2.5 w-2.5 rounded-full ${isPlaying ? "bg-green-500 animate-ping" : "bg-red-500"}`} />
              </div>
            </div>

            {/* Actual Canvas */}
            <div className="flex-grow bg-slate-950/60 rounded-2xl relative overflow-hidden border border-slate-900">
              <canvas ref={canvasRef} className="block w-full" />
            </div>

            {/* Diagnostic Parameters Row */}
            <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-900 font-mono text-[10px] text-slate-400 text-center">
              <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                <div className="text-slate-500 uppercase font-semibold">Vpp (Peak-Peak)</div>
                <div className="text-white font-bold text-xs mt-0.5">{peakToPeak}V</div>
              </div>
              <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                <div className="text-slate-500 uppercase font-semibold">Vrms (Root-Mean)</div>
                <div className="text-white font-bold text-xs mt-0.5">{getVrms()}V</div>
              </div>
              <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                <div className="text-slate-500 uppercase font-semibold">Period (T)</div>
                <div className="text-white font-bold text-xs mt-0.5">{period}s</div>
              </div>
              <div className="bg-slate-950/50 p-2 rounded-xl border border-slate-900">
                <div className="text-slate-500 uppercase font-semibold">Frequency (f)</div>
                <div className="text-white font-bold text-xs mt-0.5">{frequency}Hz</div>
              </div>
            </div>
          </div>

          {/* Settings Control Board */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-navy-800 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sliders className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-white tracking-wide font-mono">
                  Signal Control Panel
                </h3>
              </div>

              {/* Wave Selection Options */}
              <div className="space-y-3 mb-6">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Select Signal Source
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["sine", "square", "triangle"] as WaveType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWaveType(type)}
                      className={`py-2 px-3 text-xs font-bold font-mono rounded-xl border capitalize transition-all cursor-pointer ${
                        waveType === type
                          ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                  {(["sawtooth", "superposition"] as WaveType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWaveType(type)}
                      className={`py-2 px-3 text-xs font-bold font-mono rounded-xl border capitalize transition-all cursor-pointer ${
                        type === "superposition" ? "col-span-2" : ""
                      } ${
                        waveType === type
                          ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {type === "superposition" ? "Superposition (CH1 + CH2)" : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls sliders */}
              <div className="space-y-5">
                {/* Frequency slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 font-mono">Channel 1 Frequency (f1)</span>
                    <span className="text-primary font-bold font-mono">{frequency} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.5"
                    value={frequency}
                    onChange={(e) => setFrequency(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Amplitude slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 font-mono">Channel 1 Amplitude (A1)</span>
                    <span className="text-primary font-bold font-mono">{amplitude} mV</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={amplitude}
                    onChange={(e) => setAmplitude(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Conditional Superposition Parameters */}
                {waveType === "superposition" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-5 border-t border-slate-800/80 pt-4"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-300 font-mono">Channel 2 Frequency (f2)</span>
                        <span className="text-secondary font-bold font-mono">{freq2} Hz</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.5"
                        value={freq2}
                        onChange={(e) => setFreq2(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-300 font-mono">Channel 2 Amplitude (A2)</span>
                        <span className="text-secondary font-bold font-mono">{amp2} mV</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        value={amp2}
                        onChange={(e) => setAmp2(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Phase Offset slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 font-mono">Signal Phase Shift (φ)</span>
                    <span className="text-primary font-bold font-mono">{(phase / Math.PI).toFixed(2)}π rad</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={Math.PI * 2}
                    step="0.1"
                    value={phase}
                    onChange={(e) => setPhase(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Distortion Noise Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 font-mono">Thermal Channel Noise (η)</span>
                    <span className="text-primary font-bold font-mono">{noise} mV</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={noise}
                    onChange={(e) => setNoise(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Formula Math block */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-4 text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold block mb-1">
                  Active Wave Equation
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-secondary truncate block">
                  {mathFormula()}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
