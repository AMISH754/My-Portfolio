"use client";

import React, { useRef, useEffect, useState } from "react";
import { Sliders } from "lucide-react";

type WaveType = "sine" | "square" | "triangle" | "sawtooth" | "superposition";

export default function ECESimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveType, setWaveType] = useState<WaveType>("sine");
  const [frequency, setFrequency] = useState<number>(3);
  const [amplitude, setAmplitude] = useState<number>(45);
  const [phase, setPhase] = useState<number>(0);
  const [noise, setNoise] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const [freq2, setFreq2] = useState<number>(6);
  const [amp2, setAmp2] = useState<number>(20);

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
        canvas.height = 300;
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

      // Draw Hairline Grid
      ctx.strokeStyle = "#E5E5E0";
      ctx.lineWidth = 1;
      const gridSize = 30;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Main Axes
      ctx.strokeStyle = "#A3A29D";
      ctx.lineWidth = 1;

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

      // Draw Signal Waveform (Precision Ink Line)
      ctx.beginPath();
      ctx.strokeStyle = "#151514";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const points: [number, number][] = [];
      const t = timeRef.current;

      for (let x = 0; x < width; x++) {
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
            const angle2 = (x / width) * Math.PI * 2 * freq2 + phase + t;
            yVal = Math.sin(angle) * amplitude + Math.sin(angle2) * amp2;
            break;
        }

        if (noise > 0) {
          yVal += (Math.random() - 0.5) * noise * 1.5;
        }

        const screenY = centerY - yVal;
        points.push([x, screenY]);
      }

      if (points.length > 0) {
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.stroke();
      }

      // On-screen metadata telemetry
      ctx.fillStyle = "#6B6A66";
      ctx.font = "10px monospace";
      ctx.fillText("CHANNEL 01 · 1.00 V/DIV", 14, 20);
      ctx.fillText(`TRIGGER · ${waveType.toUpperCase()}`, 14, 34);

      if (isPlaying) {
        timeRef.current += 0.04;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [waveType, frequency, amplitude, phase, noise, isPlaying, freq2, amp2]);

  const peakToPeak = waveType === "superposition"
    ? ((amplitude + amp2) * 2).toFixed(1)
    : (amplitude * 2).toFixed(1);

  const getVrms = () => {
    if (waveType === "sine") return (amplitude / Math.SQRT2).toFixed(1);
    if (waveType === "square") return amplitude.toFixed(1);
    if (waveType === "triangle") return (amplitude / Math.sqrt(3)).toFixed(1);
    if (waveType === "sawtooth") return (amplitude / Math.sqrt(3)).toFixed(1);
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
    <section id="ece-lab" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">04</span>
          <h2 className="text-[#151514]">Signal Processing Lab</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          ELECTRONICS & COMMUNICATION EXPERIMENTAL RIG
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Oscilloscope Viewport */}
        <div className="lg:col-span-7 border border-[#DAD9D4] rounded-[2px] bg-[#FAFAF8] overflow-hidden flex flex-col">
          {/* Top Scope Toolbar */}
          <div className="bg-[#F1F1EE] px-5 py-3 hairline-b flex justify-between items-center">
            <div className="font-mono text-xs text-[#151514] font-medium uppercase tracking-wider">
              SPECIMEN OSCILLOSCOPE RIG · BIT ECE
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1 text-[11px] font-mono border border-[#DAD9D4] bg-[#FAFAF8] text-[#151514] hover:bg-[#DAD9D4] transition-colors rounded-[2px] cursor-pointer"
            >
              {isPlaying ? "HALT" : "RUN"}
            </button>
          </div>

          {/* Screen Area */}
          <div className="p-4 bg-[#FAFAF8] relative">
            <canvas ref={canvasRef} className="w-full block" />
          </div>

          {/* Numeric Readouts */}
          <div className="grid grid-cols-4 divide-x divide-[#DAD9D4] hairline-t bg-[#F1F1EE] text-center font-mono py-3">
            <div className="px-2">
              <div className="text-[10px] text-[#6B6A66] uppercase">Vpp</div>
              <div className="text-xs font-medium text-[#151514] mt-0.5">{peakToPeak}V</div>
            </div>
            <div className="px-2">
              <div className="text-[10px] text-[#6B6A66] uppercase">Vrms</div>
              <div className="text-xs font-medium text-[#151514] mt-0.5">{getVrms()}V</div>
            </div>
            <div className="px-2">
              <div className="text-[10px] text-[#6B6A66] uppercase">Period</div>
              <div className="text-xs font-medium text-[#151514] mt-0.5">{period}s</div>
            </div>
            <div className="px-2">
              <div className="text-[10px] text-[#6B6A66] uppercase">Frequency</div>
              <div className="text-xs font-medium text-[#151514] mt-0.5">{frequency}Hz</div>
            </div>
          </div>
        </div>

        {/* Signal Controls */}
        <div className="lg:col-span-5 border border-[#DAD9D4] rounded-[2px] p-6 bg-[#FAFAF8]">
          <div className="flex items-center justify-between hairline-b pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#151514]" />
              <h3 className="font-sans text-sm font-medium text-[#151514]">
                Parameter Adjustments
              </h3>
            </div>
            <span className="meta-label">CH-01</span>
          </div>

          {/* Waveform Selector */}
          <div className="mb-6">
            <label className="meta-label block mb-2 text-[#6B6A66]">
              Function Generator Source
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["sine", "square", "triangle", "sawtooth", "superposition"] as WaveType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setWaveType(type)}
                  className={`py-2 px-2 text-xs font-mono rounded-[2px] border capitalize transition-colors cursor-pointer text-center ${
                    type === "superposition" ? "col-span-2" : ""
                  } ${
                    waveType === type
                      ? "bg-[#151514] text-[#FAFAF8] border-[#151514]"
                      : "bg-[#F1F1EE] text-[#6B6A66] border-[#DAD9D4] hover:border-[#151514]"
                  }`}
                >
                  {type === "superposition" ? "Superposition (CH1+CH2)" : type}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-[#6B6A66]">Frequency (f)</span>
                <span className="text-[#151514] font-medium">{frequency} Hz</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#DAD9D4] rounded-none appearance-none cursor-pointer accent-[#151514]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-[#6B6A66]">Amplitude (A)</span>
                <span className="text-[#151514] font-medium">{amplitude} mV</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={amplitude}
                onChange={(e) => setAmplitude(parseInt(e.target.value))}
                className="w-full h-1 bg-[#DAD9D4] rounded-none appearance-none cursor-pointer accent-[#151514]"
              />
            </div>

            {waveType === "superposition" && (
              <div className="pt-3 hairline-t space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-[#6B6A66]">Channel 2 Freq (f2)</span>
                    <span className="text-[#151514] font-medium">{freq2} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={freq2}
                    onChange={(e) => setFreq2(parseFloat(e.target.value))}
                    className="w-full h-1 bg-[#DAD9D4] rounded-none appearance-none cursor-pointer accent-[#151514]"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-[#6B6A66]">Channel 2 Amp (A2)</span>
                    <span className="text-[#151514] font-medium">{amp2} mV</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={amp2}
                    onChange={(e) => setAmp2(parseInt(e.target.value))}
                    className="w-full h-1 bg-[#DAD9D4] rounded-none appearance-none cursor-pointer accent-[#151514]"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-[#6B6A66]">Thermal Noise (η)</span>
                <span className="text-[#151514] font-medium">{noise} mV</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={noise}
                onChange={(e) => setNoise(parseInt(e.target.value))}
                className="w-full h-1 bg-[#DAD9D4] rounded-none appearance-none cursor-pointer accent-[#151514]"
              />
            </div>
          </div>

          {/* Math Formula Output */}
          <div className="mt-6 pt-4 hairline-t">
            <div className="meta-label mb-1 text-[#6B6A66]">Governing Equation</div>
            <div className="font-mono text-xs text-[#151514] bg-[#F1F1EE] p-3 rounded-[2px] border border-[#DAD9D4] break-all">
              {mathFormula()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
