"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div>© 2026 Amish Kumar Dubey. Built with care &amp; precision.</div>
        <nav>
          <a className="flink" href="#top">
            Back to top ↑
          </a>
          <a className="flink" href="#projects">
            Projects
          </a>
          <a className="flink" href="#contests">
            Contests
          </a>
          <a
            className="flink"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
