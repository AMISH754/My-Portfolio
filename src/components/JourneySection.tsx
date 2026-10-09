"use client";

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function JourneySection() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="head rv">
          <div className="label">05 / journey</div>
          <h2 className="h2">Experience &amp; Education</h2>
          <p>
            Academic background at BIT Mesra, technical leadership roles, and full-stack software development milestones.
          </p>
        </div>

        <div className="jgrid">
          {/* Experience Column */}
          <div className="jcol rv-l" style={{ flex: "1 1 380px" }}>
            <h3 className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#f2477f]" />
              <span>Experience &amp; Leadership</span>
            </h3>
            <div className="tl">
              <div className="dotl">
                <div className="when">PRESENT</div>
                <div className="what">Joint Secretary — IETE</div>
                <p>
                  Leading coordination and execution of campus-wide technical events, coding workshops, and seminars at the Institution of Electronics and Telecommunication Engineers (BIT Mesra).
                </p>
              </div>

              <div className="dotl">
                <div className="when">2024 — 2025</div>
                <div className="what">Web Developer — Value Education Cell</div>
                <p>
                  Contributed to the design, development, and maintenance of digital web platforms supporting institutional initiatives at BIT Mesra.
                </p>
              </div>

              <div className="dotl">
                <div className="when">2024 — PRESENT</div>
                <div className="what">Full-Stack Web Engineering</div>
                <p>
                  Engineered and deployed production SPA applications (NexJyoti Education Foundation, Heart Talk real-time chat, VortexCast Weather Dashboard) utilizing React, Node.js, and Firebase.
                </p>
              </div>
            </div>
          </div>

          {/* Education Swaying Tree Column */}
          <div className="jcol rv-r" style={{ flex: "1 1 560px" }}>
            <h3 className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#f2477f]" />
              <span>Academic Record</span>
            </h3>

            <div className="root font-mono">academic.root</div>
            <div className="trunk"></div>

            <div className="tnodes">
              {/* Node 1 */}
              <div className="tnode">
                <span className="knot"></span>
                <div className="hang" style={{ animationDelay: "-1s" }}>
                  <div className="string" style={{ height: "34px" }}></div>
                  <div className="tcard">
                    <div className="when">2024 — 2028</div>
                    <div className="t1">Birla Institute of Technology</div>
                    <div className="t2">Mesra, Jharkhand</div>
                    <p>
                      <strong>B.Tech in ECE</strong> · <strong>CGPA: 8.67</strong>
                      <br />
                      Electronics &amp; Communication Engineering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 2 */}
              <div className="tnode">
                <span className="knot" style={{ animationDelay: "-.8s" }}></span>
                <div
                  className="hang"
                  style={{ animationDelay: "-2.4s", animationDuration: "5.2s" }}
                >
                  <div className="string" style={{ height: "84px" }}></div>
                  <div className="tcard">
                    <div className="when">2022 — 2023</div>
                    <div className="t1">St. Xavier's College</div>
                    <div className="t2">Ranchi, Jharkhand</div>
                    <p>
                      <strong>Class XII (JAC)</strong> · <strong>Percentage: 91%</strong>
                      <br />
                      Senior Secondary Education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="tnode">
                <span className="knot" style={{ animationDelay: "-1.6s" }}></span>
                <div
                  className="hang"
                  style={{ animationDelay: "-3.6s", animationDuration: "4.2s" }}
                >
                  <div className="string" style={{ height: "52px" }}></div>
                  <div className="tcard">
                    <div className="when">2020 — 2021</div>
                    <div className="t1">Bishop Hartmann Academy</div>
                    <div className="t2">Ranchi, Jharkhand</div>
                    <p>
                      <strong>Class X (ICSE)</strong> · <strong>Percentage: 93%</strong>
                      <br />
                      Secondary Education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
