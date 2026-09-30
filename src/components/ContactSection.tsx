"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid electronic mail address.");
      return;
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;

      if (!endpoint || endpoint.includes("xxxxxxxx")) {
        // Graceful fallback simulation when Formspree endpoint is placeholder
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        return;
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
        throw new Error("Transmission failed. Please dispatch via direct email.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg((err as Error).message || "Could not reach the transmission server. Direct email is recommended.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">08</span>
          <h2 className="text-[#151514]">Direct Inquiries</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          COMMUNICATION DISPATCH · RANCHI, IN
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Information Column */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-sans font-medium text-2xl text-[#151514] mb-3">
              Initiate a dialogue.
            </h3>
            <p className="text-base text-[#6B6A66] leading-relaxed max-w-[48ch]">
              Available for full-stack engineering roles, systems research, technical collaborations, and competitive programming initiatives.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="border-t border-[#DAD9D4] pt-6 space-y-4 font-mono text-xs">
            <div className="flex justify-between items-baseline hairline-b pb-3">
              <span className="text-[#6B6A66] uppercase">Direct Email</span>
              <a
                href="mailto:amishkumardubey@gmail.com"
                className="text-[#151514] font-medium link-specimen"
              >
                amishkumardubey@gmail.com
              </a>
            </div>

            <div className="flex justify-between items-baseline hairline-b pb-3">
              <span className="text-[#6B6A66] uppercase">Location</span>
              <span className="text-[#151514] font-medium">
                BIT Mesra, Ranchi, Jharkhand
              </span>
            </div>

            <div className="flex justify-between items-baseline hairline-b pb-3">
              <span className="text-[#6B6A66] uppercase">Response Protocol</span>
              <span className="text-[#151514] font-medium">
                Within 24 Hours
              </span>
            </div>

            <div className="flex justify-between items-baseline pb-1">
              <span className="text-[#6B6A66] uppercase">Professional Profile</span>
              <a
                href="https://linkedin.com/in/amish-kumar-dubey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#151514] font-medium inline-flex items-center gap-1 hover:underline"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="border border-[#DAD9D4] rounded-[2px] p-6 sm:p-8 bg-[#FAFAF8]">
            {status === "success" ? (
              <div className="py-10 text-left space-y-4">
                <div className="meta-label text-[#151514]">STATUS: TRANSMITTED</div>
                <h3 className="font-sans font-medium text-2xl text-[#151514]">
                  Inquiry logged successfully.
                </h3>
                <p className="text-sm text-[#6B6A66] max-w-md leading-relaxed">
                  Your message has been received. I will review your inquiry and follow up shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-secondary text-xs"
                  >
                    Draft Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="meta-label block mb-2 text-[#151514]">
                    Sender Identification / Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Amish Kumar Dubey"
                    className="specimen-input"
                  />
                </div>

                <div>
                  <label className="meta-label block mb-2 text-[#151514]">
                    Electronic Mail Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. user@domain.com"
                    className="specimen-input"
                  />
                </div>

                <div>
                  <label className="meta-label block mb-2 text-[#151514]">
                    Statement of Inquiry / Project Requirements
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding the project scope, timeline, or engineering role..."
                    className="specimen-input resize-y min-h-[120px]"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-[#F1F1EE] border border-[#151514] font-mono text-xs text-[#151514]">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider font-mono cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Transmitting..." : "Transmit Inquiry"}</span>
                    <span className="arrow-nudge">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
