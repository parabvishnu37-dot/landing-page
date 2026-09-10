"use client";

import { useState } from "react";

type StageId = "discover" | "learn" | "build" | "prove" | "grow" | "showcase";

type Stage = {
  id: StageId;
  step: string;
  title: string;
  question: string;
  description: string;
  accentColor: string;
  activeBg: string;
  activeBorder: string;
  activeText: string;
  badge: string;
  subheading: string;
};

const stages: Stage[] = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    question: "What could I become?",
    description: "Explore career paths, skills, learning opportunities, and directions that fit your goals.",
    accentColor: "#FD4322",
    activeBg: "bg-[#fff1ec]",
    activeBorder: "border-[#FD4322]",
    activeText: "text-[#FD4322]",
    badge: "Career Exploration",
    subheading: "Map your destination with curated career pathways.",
  },
  {
    id: "learn",
    step: "02",
    title: "Learn",
    question: "What should I learn next?",
    description: "Follow relevant learning paths and build the knowledge you need for your goals.",
    accentColor: "#1255FF",
    activeBg: "bg-[#eef5ff]",
    activeBorder: "border-[#1255FF]",
    activeText: "text-[#1255FF]",
    badge: "Structured Curriculum",
    subheading: "Gain targeted knowledge designed for real-world roles.",
  },
  {
    id: "build",
    step: "03",
    title: "Build Skills",
    question: "Can I actually do it?",
    description: "Turn what you learn into projects, practical experience, and real evidence of your abilities.",
    accentColor: "#16A36A",
    activeBg: "bg-[#eaf8f1]",
    activeBorder: "border-[#16A36A]",
    activeText: "text-[#128455]",
    badge: "Hands-on Experience",
    subheading: "Turn learning into evidence through tangible projects.",
  },
  {
    id: "prove",
    step: "04",
    title: "Prove",
    question: "How can I prove it?",
    description: "Earn credentials, badges, and verified evidence that demonstrate your achievements.",
    accentColor: "#FF7F07",
    activeBg: "bg-[#fff8dd]",
    activeBorder: "border-[#FF7F07]",
    activeText: "text-[#b65d00]",
    badge: "Verified Proof",
    subheading: "Validate your abilities with industry-recognized credentials.",
  },
  {
    id: "grow",
    step: "05",
    title: "Grow",
    question: "Where can my skills take me?",
    description: "Understand skill gaps, improve your readiness, and discover opportunities that match your progress.",
    accentColor: "#7C5CFC",
    activeBg: "bg-[#f5f2ff]",
    activeBorder: "border-[#7C5CFC]",
    activeText: "text-[#7C5CFC]",
    badge: "Skill Gap Intelligence",
    subheading: "Identify skill gaps and unlock opportunities matched to your growth.",
  },
  {
    id: "showcase",
    step: "06",
    title: "Showcase",
    question: "How will others see my value?",
    description: "Bring your skills, projects, credentials, and achievements together into your professional story.",
    accentColor: "#EB5038",
    activeBg: "bg-[#fff5f5]",
    activeBorder: "border-[#EB5038]",
    activeText: "text-[#EB5038]",
    badge: "Digital Profile",
    subheading: "Present your verified credentials, projects, and career narrative.",
  },
];

function StageIcon({ id }: { id: StageId }) {
  switch (id) {
    case "discover":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "learn":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="9" x2="15" y1="8" y2="8" />
          <line x1="9" x2="13" y1="12" y2="12" />
        </svg>
      );
    case "build":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "prove":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3 19 6v5c0 4-2.5 7.1-7 9-4.5-1.9-7-5-7-9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "grow":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "showcase":
      return (
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="18" rx="2" width="18" x="3" y="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
  }
}

export default function HowItWorks() {
  const [activeStageId, setActiveStageId] = useState<StageId>("discover");

  const activeIndex = stages.findIndex((s) => s.id === activeStageId);
  const activeStage = stages[activeIndex] || stages[0];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 border-y border-[#e8eef5]"
      id="how-solo-works"
    >
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-[#1255FF]/5 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-[#FD4322]/5 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            HOW SOLO WORKS
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.75rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
            From learning to opportunity.
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
            Build skills, gain real experience, prove what you can do, and turn your progress into new career opportunities.
          </p>

          {/* Connected Ecosystem Strip */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#e2e8f0] bg-[#F5F8FC] px-4 py-2 text-[11px] font-bold text-[#64748B]">
            <span className="text-[#14243D] font-extrabold">One journey. Everything connected:</span>
            <span className="text-[#FD4322]">Career Goal</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#1255FF]">Skills</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#16A36A]">Learning</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#16A36A]">Experience</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#FF7F07]">Proof</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#7C5CFC]">Opportunity</span>
            <span className="text-[#94a3b8]">→</span>
            <span className="text-[#EB5038]">Story</span>
          </div>
        </div>

        {/* 6-Step Connected Journey Stepper (Desktop & Tablet) */}
        <div className="mt-14">
          {/* Desktop Timeline Stepper */}
          <div className="hidden lg:block">
            {/* Top Connector Line */}
            <div className="relative mx-12 h-1 bg-[#e2e8f0]">
              <div
                className="h-full bg-gradient-to-r from-[#FD4322] via-[#1255FF] to-[#7C5CFC] transition-all duration-500 ease-out"
                style={{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stage Buttons Grid */}
            <div className="relative -mt-4.5 grid grid-cols-6 gap-3">
              {stages.map((stage, idx) => {
                const isActive = stage.id === activeStageId;
                const isPassed = idx <= activeIndex;

                return (
                  <button
                    key={stage.id}
                    id={`journey-step-${stage.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`journey-panel-${stage.id}`}
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className="group flex flex-col items-center text-center focus-visible:outline-none"
                  >
                    {/* Circle Node on Line */}
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? `${stage.activeBg} ${stage.activeBorder} ${stage.activeText} scale-110 shadow-md`
                          : isPassed
                          ? "border-[#14243D] bg-white text-[#14243D]"
                          : "border-[#cbd5e1] bg-white text-[#94a3b8] group-hover:border-[#94a3b8]"
                      }`}
                    >
                      <StageIcon id={stage.id} />
                    </div>

                    {/* Stage Label & Number */}
                    <span
                      className={`mt-3 text-[11px] font-black uppercase tracking-wider transition-colors ${
                        isActive ? stage.activeText : "text-[#94a3b8]"
                      }`}
                    >
                      {stage.step} — {stage.title}
                    </span>

                    {/* Learner Question */}
                    <span
                      className={`mt-1 text-[13px] font-black transition-colors ${
                        isActive ? "text-[#14243D]" : "text-[#64748B] group-hover:text-[#14243D]"
                      }`}
                    >
                      &ldquo;{stage.question}&rdquo;
                    </span>

                    {/* Short Description */}
                    <span className="mt-1 px-1 text-[11px] leading-snug text-[#94a3b8] line-clamp-2">
                      {stage.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Stepper Selector */}
          <div className="lg:hidden">
            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-3"
              role="tablist"
              aria-label="How SOLO Works 6-Step Journey"
            >
              {stages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    id={`mobile-step-${stage.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`journey-panel-${stage.id}`}
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className={`flex min-w-[140px] flex-col items-start rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? `${stage.activeBg} ${stage.activeBorder} shadow-sm`
                        : "border-[#e2e8f0] bg-white text-[#64748B]"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className={`text-[10px] font-black ${isActive ? stage.activeText : "text-[#94a3b8]"}`}>
                        {stage.step}
                      </span>
                      <span className={isActive ? stage.activeText : "text-[#94a3b8]"}>
                        <StageIcon id={stage.id} />
                      </span>
                    </div>
                    <span className="mt-1 text-[13px] font-extrabold text-[#14243D]">
                      {stage.title}
                    </span>
                    <span className="mt-0.5 text-[10px] text-[#64748B] line-clamp-1">
                      {stage.question}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Visual Explanation Card */}
          <div
            id={`journey-panel-${activeStage.id}`}
            role="tabpanel"
            aria-labelledby={`journey-step-${activeStage.id}`}
            className="mt-8 rounded-[24px] border border-[#dbe6f1] bg-[#F5F8FC] p-6 shadow-[0_16px_40px_rgba(20,36,61,0.06)] transition-all duration-300 sm:p-8 lg:p-10"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              {/* Left Column: Stage Explanation */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] shadow-xs">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: activeStage.accentColor }}
                    aria-hidden="true"
                  />
                  Step {activeStage.step} of 06 · {activeStage.badge}
                </div>

                <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#14243D]">
                  {activeStage.title}
                </h3>

                <p className="mt-1 text-[16px] font-extrabold text-[#14243D]">
                  &ldquo;{activeStage.question}&rdquo;
                </p>

                <p className="mt-3 text-[14px] leading-6 text-[#64748B] sm:text-[15px]">
                  {activeStage.description}
                </p>

                <div className="mt-5 rounded-xl border border-[#e2e8f0] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
                    What happens in this stage
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-[#14243D]">
                    {activeStage.subheading}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#career-explorer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#FD4322] px-5 py-2.5 text-[13px] font-extrabold text-white shadow-xs transition-all hover:bg-[#e83b1c]"
                  >
                    Try with your own goal →
                  </a>
                  <span className="text-[11px] font-semibold text-[#64748B]">
                    Connected to SOLO Career Path Explorer
                  </span>
                </div>
              </div>

              {/* Right Column: Stage Visual Demonstration */}
              <div className="relative">
                {activeStageId === "discover" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                          Career Pathway Exploration
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Curated Target Roles & Pathways</h4>
                      </div>
                      <span className="rounded-full bg-[#fff1ec] px-2.5 py-0.5 text-[10px] font-bold text-[#FD4322]">
                        1,400+ Paths
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-xl border border-[#e8eef5] p-3 transition-colors hover:border-[#FD4322]/40">
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] font-extrabold text-[#14243D]">Product Design Track</p>
                          <span className="rounded-md bg-[#fff1ec] px-2 py-0.5 text-[9px] font-extrabold text-[#FD4322]">
                            94% Match Fit
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] text-[#64748B]">
                          Explore UI/UX, Design Systems, and User Research requirements.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#e8eef5] p-3 transition-colors hover:border-[#1255FF]/40">
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] font-extrabold text-[#14243D]">Full-Stack Development</p>
                          <span className="rounded-md bg-[#eef5ff] px-2 py-0.5 text-[9px] font-extrabold text-[#1255FF]">
                            91% Match Fit
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] text-[#64748B]">
                          Explore React, Next.js, API Design, and Database Architecture.
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5 pt-1 border-t border-[#f1f5f9]">
                      <span className="rounded bg-[#F5F8FC] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">
                        ✓ Internships
                      </span>
                      <span className="rounded bg-[#F5F8FC] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">
                        ✓ Live Projects
                      </span>
                      <span className="rounded bg-[#F5F8FC] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">
                        ✓ Hackathons
                      </span>
                    </div>
                  </div>
                )}

                {activeStageId === "learn" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#1255FF]">
                          Structured Learning Path
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Targeted Curriculum Progress</h4>
                      </div>
                      <span className="rounded-full bg-[#eef5ff] px-2.5 py-0.5 text-[10px] font-bold text-[#1255FF]">
                        Module 12/16
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#cfe0fb] bg-[#F5F8FC] p-4">
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-[#14243D]">
                        <span>Full-Stack Foundation Track</span>
                        <span className="text-[#1255FF]">75% Complete</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-[#e2e8f0]">
                        <div className="h-full w-3/4 rounded-full bg-[#1255FF]" />
                      </div>
                      <p className="mt-2 text-[10px] text-[#64748B]">
                        Next up: State Management Architecture & REST API Integration
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#94a3b8]">
                        Competencies Developing
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          TypeScript
                        </span>
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          Next.js App Router
                        </span>
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          REST APIs
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStageId === "build" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#16A36A]">
                          Evidence Creation
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Turn Learning Into Evidence</h4>
                      </div>
                      <span className="rounded-full bg-[#eaf8f1] px-2.5 py-0.5 text-[10px] font-bold text-[#128455]">
                        Verified Artifact
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#c9ead9] p-4 bg-[#fbfdfc]">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold text-[#128455] uppercase">[ Project ]</p>
                          <h5 className="text-[13px] font-black text-[#14243D]">Portfolio Website & Workspace</h5>
                        </div>
                        <span className="rounded-full bg-[#eaf8f1] px-2 py-0.5 text-[9px] font-bold text-[#128455]">
                          ✓ Reviewed
                        </span>
                      </div>

                      <div className="mt-3 border-t border-[#eaf8f1] pt-2">
                        <p className="text-[10px] font-extrabold text-[#1255FF] uppercase">[ Experience ]</p>
                        <p className="text-[11px] font-semibold text-[#14243D]">
                          Frontend Internship Simulation · Code Reviewed by Mentors
                        </p>
                      </div>

                      <div className="mt-3 border-t border-[#eaf8f1] pt-2">
                        <p className="text-[10px] font-extrabold text-[#FD4322] uppercase">[ Skills ]</p>
                        <p className="text-[11px] font-bold text-[#14243D]">
                          React • JavaScript • TypeScript • Responsive Design
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStageId === "prove" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FF7F07]">
                          Credential Validation
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Verified Badges & Evidence</h4>
                      </div>
                      <span className="rounded-full bg-[#fff8dd] px-2.5 py-0.5 text-[10px] font-bold text-[#b65d00]">
                        Credential Network
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#f5dfb0] bg-gradient-to-br from-white to-[#fffcf5] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8dd] text-lg text-[#FF7F07]">
                          ★
                        </div>
                        <div>
                          <span className="rounded bg-[#fff8dd] px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-[#b65d00]">
                            Verified Badge
                          </span>
                          <h5 className="text-[13px] font-black text-[#14243D]">
                            SOLO Certified: Frontend Engineer
                          </h5>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#fbf3db] pt-3 text-[10px]">
                        <div>
                          <p className="text-[#94a3b8]">Assessed Projects</p>
                          <p className="font-extrabold text-[#14243D]">3 Real-world Artifacts</p>
                        </div>
                        <div>
                          <p className="text-[#94a3b8]">Proficiency</p>
                          <p className="font-extrabold text-[#16A36A]">95/100 Validated</p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] font-bold text-[#b65d00]">
                        <span>Registry: SOLO-CERT-892</span>
                        <span className="underline">Public Link ↗</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStageId === "grow" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#7C5CFC]">
                          Skill Gap & Readiness
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Where Your Skills Can Take You</h4>
                      </div>
                      <span className="rounded-full bg-[#f5f2ff] px-2.5 py-0.5 text-[10px] font-bold text-[#7C5CFC]">
                        88% Role Match
                      </span>
                    </div>

                    <div className="space-y-2 rounded-xl border border-[#ede9fe] bg-[#faf8ff] p-3.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#16A36A]">✓ Matched Skills</span>
                        <span className="font-semibold text-[#14243D]">React, TypeScript, CSS Architecture</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#b65d00]">◐ Developing</span>
                        <span className="font-semibold text-[#14243D]">GraphQL, Integration Testing</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#7C5CFC]">○ Gaps to Bridge</span>
                        <span className="font-semibold text-[#14243D]">CI/CD & Cloud Deployment</span>
                      </div>
                    </div>

                    <p className="text-[10px] font-medium text-[#64748B]">
                      💡 Closing the CI/CD gap advances your readiness into top 10% candidate pool.
                    </p>
                  </div>
                )}

                {activeStageId === "showcase" && (
                  <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm space-y-3.5">
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#EB5038]">
                          Professional Narrative
                        </span>
                        <h4 className="text-[14px] font-black text-[#14243D]">Tell Your Professional Story</h4>
                      </div>
                      <span className="rounded-full bg-[#fff5f5] px-2.5 py-0.5 text-[10px] font-bold text-[#EB5038]">
                        Shareable Profile
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#f8d1c6] p-4 bg-[#fffaf9]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef5ff] text-[10px] font-black text-[#1255FF]">
                            AC
                          </span>
                          <div>
                            <h5 className="text-[12px] font-black text-[#14243D]">Alex Chen</h5>
                            <p className="text-[9px] font-semibold text-[#64748B]">Full-Stack Product Engineer</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-[#eaf8f1] px-2 py-0.5 text-[8px] font-extrabold text-[#128455]">
                          ✓ Verified
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-lg bg-white p-2 text-[10px] border border-[#f1f5f9]">
                        <span className="font-bold text-[#14243D]">14 Skills • 3 Credentials • 4 Projects</span>
                        <span className="text-[#FD4322] font-bold">solo.to/alex</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
