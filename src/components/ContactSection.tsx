"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
      
      if (!endpoint || endpoint.includes("xxxxxxxx")) {
        throw new Error("Formspree URL is not configured. Please add your Formspree URL in the .env.local file.");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Trigger a celebratory confetti burst
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Could not connect to the mail server. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-transparent border-t border-slate-800/60">
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block - Contacts Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Let's discuss something <span className="text-secondary">great</span>.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have an internship role, an open-source query, or just want to talk tech and competitive coding, my inbox is always open.
              </p>

              {/* Detail Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</div>
                    <a href="mailto:amishkumardubey@gmail.com" className="text-slate-200 text-sm hover:text-white hover:underline transition-colors font-medium">
                      amishkumardubey@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</div>
                    <div className="text-slate-200 text-sm font-medium">
                      BIT Mesra Campus, Ranchi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct profile hooks */}
            <div className="mt-8 border-t border-slate-800/80 pt-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-4">Follow My Codes</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AMISH754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/amish-kumar-dubey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Contact Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-navy-800 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Thank you! Your message was delivered successfully. Amish will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full border border-slate-700 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all mt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-300">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Amish Kumar Dubey"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-300">Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="amishkumardubey@gmail.com"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-300">Message</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hi Amish, let's collaborate on a full stack project..."
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all min-h-[120px]"
                    />
                  </div>

                  {/* Error Alert panel */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 text-xs bg-red-950/40 border border-red-900/40 text-red-400 rounded-xl">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Button Submission */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 w-full text-white font-bold rounded-xl bg-primary hover:bg-primary/95 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Delivering...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
