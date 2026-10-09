"use client";

import React from "react";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="photo-col rv-l">
          <div className="photo">
            <div className="orbit" aria-hidden="true"></div>
            <div className="ring" aria-hidden="true"></div>

            {/* Pic uses absolute inset from CSS but we need relative for Next Image fill */}
            <div className="pic" style={{ padding: 0 }}>
              <Image
                src="/my photo.jpg"
                alt="Amish Kumar Dubey"
                fill
                className="object-cover object-top rounded-full"
                priority
                sizes="400px"
                style={{ borderRadius: "50%" }}
              />
            </div>

            <div className="badge b1">&lt;Full-Stack/&gt;</div>
            <div className="badge b2">550+ Solved · CF 1126</div>
            <div className="badge b3">Ranchi / Mesra, India</div>
          </div>
        </div>

        <div className="about-text rv-r">
          <div className="label">01 / about</div>
          <h2 className="h2">Turning hard problems into clean code</h2>
          <p>
            I am an Electronics and Communication Engineering undergraduate at <strong>Birla Institute of Technology, Mesra</strong> (CGPA 8.67/10.0). My background bridges hardware-level logic with modern web architecture.
          </p>
          <p>
            With over <strong>550+ Data Structures &amp; Algorithms problems solved</strong> across LeetCode, CodeChef, and GeeksforGeeks, and a peak rating of <strong>1126 on Codeforces</strong>, competitive programming has honed my algorithmic optimization skills.
          </p>
          <p>
            As <strong>Joint Secretary of the IETE Student Forum</strong> and former <strong>Web Developer at the Value Education Cell</strong>, I actively build web software and foster campus-wide technical culture.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              className="btn btn-ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-1" />
              Download Resume
            </a>
            <a
              className="btn btn-primary"
              href="mailto:amishkumardubey@gmail.com"
            >
              <Mail className="w-4 h-4 mr-1" />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
