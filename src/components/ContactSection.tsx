"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Globe,
  Terminal,
  Mail,
  Code2,
  Trophy,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";

// ── Input sanitizer: strips HTML tags and trims whitespace ──────────────────
const sanitize = (str: string) =>
  str.replace(/<[^>]*>/g, "").replace(/[<>'"]/g, "").trim().slice(0, 2000);

// ── Rate limiter: max 3 submissions per 10 minutes (stored in sessionStorage) ─
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(): { allowed: boolean; remaining: number } {
  try {
    const raw = sessionStorage.getItem("cf_rl");
    const data: number[] = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    const recent = data.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_LIMIT) {
      return { allowed: false, remaining: 0 };
    }
    recent.push(now);
    sessionStorage.setItem("cf_rl", JSON.stringify(recent));
    return { allowed: true, remaining: RATE_LIMIT - recent.length };
  } catch {
    return { allowed: true, remaining: RATE_LIMIT };
  }
}

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // ── Honeypot: bots fill this hidden field, humans don't ──────────────────
  const honeypotRef = useRef<HTMLInputElement>(null);

  // ── Time-based check: bots submit in <2s, humans take longer ─────────────
  const formLoadTime = useRef<number>(Date.now());

  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("amishkumardubey@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const formspreeUrl =
    process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xzdqnbel";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check — if filled, silently reject (bot detected)
    if (honeypotRef.current?.value) {
      setStatus("success"); // fake success so bots don't retry
      return;
    }

    // 2. Time check — reject if submitted in under 2 seconds
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < 2000) {
      setErrorMessage("Submission too fast. Please try again.");
      setStatus("error");
      return;
    }

    // 3. Basic validation
    if (!formState.name || !formState.email || !formState.message) return;

    // 4. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    // 5. Rate limit check
    const { allowed } = checkRateLimit();
    if (!allowed) {
      setErrorMessage(
        "Too many messages sent. Please wait 10 minutes before trying again."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // 6. Sanitize inputs before sending
    const cleanName = sanitize(formState.name);
    const cleanEmail = sanitize(formState.email);
    const cleanMessage = sanitize(formState.message);

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          _subject: `New Portfolio Inquiry from ${cleanName}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.7 },
          colors: ["#e0115f", "#f2477f", "#ffffff"],
        });
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to transmit message. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and retry.");
      setStatus("error");
    }
  };

  // Generate animated dot background (7 rows, 64 columns)
  const waveRows = 7;
  const waveCols = 64;
  const amp = ["wS", "wM", "wL", "wL", "wL", "wM", "wS"];

  const dots = [];
  for (let r = 0; r < waveRows; r++) {
    for (let c = 0; c < waveCols; c++) {
      const isHot = r >= 2 && r <= 4;
      const size = isHot ? 5 : 4;
      const left = ((c / (waveCols - 1)) * 98 + 1).toFixed(2);
      const top = 8 + r * 30;
      const delay = -(c * 0.085 + r * 0.14).toFixed(2);

      dots.push(
        <i
          key={`dot-${r}-${c}`}
          className={`wd ${amp[r]}`}
          style={{
            left: `${left}%`,
            top: `${top}px`,
            width: `${size}px`,
            height: `${size}px`,
            background: isHot ? "#e0115f" : "rgba(255,255,255,.85)",
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
  }

  return (
    <section id="contact" className="relative">
      {/* Animated Dot Waves Background (Subtle background layer) */}
      <div className="waves" id="waves" aria-hidden="true">
        {dots}
      </div>

      <div className="contact-grid">
        {/* Left Column: Heading, Info, Email & Socials */}
        <div className="c-left rv-l">
          <div className="label">06 / contact</div>
          <h2 className="h2">Let&apos;s connect</h2>
          <p>
            Open for software engineering roles, full-stack development, and
            open-source collaboration. Feel free to reach out directly via email
            or connect on social platforms.
          </p>

          {/* Interactive Email Bar with Click-to-Copy */}
          <div className="flex items-center gap-2 p-3 my-1 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#e0115f]/40 transition-colors max-w-[420px]">
            <a
              href="mailto:amishkumardubey@gmail.com"
              className="flex items-center gap-2.5 font-mono text-sm text-[#e6e6ea] hover:text-[#f2477f] transition-colors flex-1 truncate"
            >
              <Mail className="w-4 h-4 text-[#e0115f] flex-shrink-0" />
              <span className="truncate">amishkumardubey@gmail.com</span>
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#c9c9d1] hover:text-white transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="socials mt-2">
            <a
              className="social"
              href="https://github.com/AMISH754"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Terminal className="w-4 h-4 mr-2 inline-block" />
              GitHub
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/amish-kumar-dubey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-4 h-4 mr-2 inline-block" />
              LinkedIn
            </a>
            <a
              className="social"
              href="https://codeforces.com/profile/amish_kr_dubey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 className="w-4 h-4 mr-2 inline-block" />
              Codeforces
            </a>
            <a
              className="social"
              href="https://leetcode.com/u/AMISH_KUMAR_DUBEY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trophy className="w-4 h-4 mr-2 inline-block" />
              LeetCode
            </a>
          </div>
        </div>

        {/* Right Column: Protected Contact Form */}
        <form className="contact-form rv-r" onSubmit={handleSubmit} noValidate>
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-sm font-semibold tracking-wide text-white">
              Send a Message
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </div>

          {/* ── Honeypot: invisible trap for automated spam bots ── */}
          <input
            ref={honeypotRef}
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />

          <label>
            Name
            <input
              className="field"
              type="text"
              name="name"
              id="contact-name"
              placeholder="Your name"
              required
              maxLength={100}
              autoComplete="name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
          </label>

          <label>
            Email
            <input
              className="field"
              type="email"
              name="email"
              id="contact-email"
              placeholder="you@example.com"
              required
              maxLength={254}
              autoComplete="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </label>

          <label>
            Message
            <textarea
              className="field"
              name="message"
              id="contact-message"
              rows={4}
              placeholder="Tell me about your project, idea, or role..."
              required
              maxLength={2000}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
            <span className="text-[10px] font-mono text-[#8f8f9c] mt-0.5 block text-right">
              {formState.message.length}/2000
            </span>
          </label>

          {status === "error" && (
            <div className="text-xs font-mono text-red-400 bg-red-950/40 p-3 rounded-lg border border-red-500/30">
              {errorMessage}
            </div>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            id="contact-submit"
            disabled={status === "sending" || status === "success"}
          >
            {status === "sending" ? (
              <span>Transmitting...</span>
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                Message Transmitted!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </span>
            )}
          </button>

          {/* Security badge at bottom of form */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#8f8f9c] pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Bot &amp; spam protected
            </span>
            <span>Rate limited</span>
          </div>
        </form>
      </div>
    </section>
  );
}
