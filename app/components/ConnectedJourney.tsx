"use client";

import { useState } from "react";

type StageId = "discover" | "learn" | "build" | "prove" | "grow" | "showcase";

type JourneyStage = {
  id: StageId;
  step: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  activeBg: string;
  activeBorder: string;
  activeText: string;
  iconBg: string;
  expandedTitle: string;
  pipelineText: string[];
};

const stages: JourneyStage[] = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    tagline: "Possibilities & Direction",
    description: "Find possibilities that fit your goals.",
    accentColor: "#FD4322",
    activeBg: "bg-[#fff1ec]",
    activeBorder: "border-[#FD4322]",
    activeText: "text-[#FD4322]",
    iconBg: "bg-[#fff1ec] text-[#FD4322]",
    expandedTitle: "Explore career directions & target roles",
    pipelineText: [
      "Career Goal: Product Designer",
      "Pathway: UI/UX & Design Systems",
      "Opportunities: 14 Active Matches",
    ],
  },
  {
    id: "learn",
    step: "02",
    title: "Learn",
    tagline: "Knowledge & Skills",
    description: "Build the knowledge and skills your path requires.",
    accentColor: "#1255FF",
    activeBg: "bg-[#eef5ff]",
    activeBorder: "border-[#1255FF]",
    activeText: "text-[#1255FF]",
    iconBg: "bg-[#eef5ff] text-[#1255FF]",
    expandedTitle: "Structured curriculum tied to market demand",
    pipelineText: [
      "Course: Web Systems Design",
      "Progress: Module 12 of 16 (75%)",
      "Skills: TypeScript & Next.js",
    ],
  },
  {
    id: "build",
    step: "03",
    title: "Build Skills",
    tagline: "Projects & Real Work",
    description: "Turn learning into real projects and experience.",
    accentColor: "#16A36A",
    activeBg: "bg-[#eaf8f1]",
    activeBorder: "border-[#16A36A]",
    activeText: "text-[#128455]",
    iconBg: "bg-[#eaf8f1] text-[#16A36A]",
    expandedTitle: "Tangible evidence of what you can actually do",
    pipelineText: [
      "Project: Collaborative Canvas",
      "Experience: Code Review by Mentors",
      "Skills: React • Next.js • REST APIs",
    ],
  },
  {
    id: "prove",
    step: "04",
    title: "Prove",
    tagline: "Verified Proof",
    description: "Create trusted evidence of what you can do.",
    accentColor: "#FF7F07",
    activeBg: "bg-[#fff8dd]",
    activeBorder: "border-[#FF7F07]",
    activeText: "text-[#b65d00]",
    iconBg: "bg-[#fff8dd] text-[#FF7F07]",
    expandedTitle: "Turn your work into verified proof",
    pipelineText: [
      "Assessed Artifacts: 3 Projects",
      "Validation Score: 95/100 Proficient",
      "Credential: SOLO Registry Validated",
    ],
  },
  {
    id: "grow",
    step: "05",
    title: "Grow",
    tagline: "Gaps & Next Roles",
    description: "Understand gaps and discover your next opportunity.",
    accentColor: "#7C5CFC",
    activeBg: "bg-[#f5f2ff]",
    activeBorder: "border-[#7C5CFC]",
    activeText: "text-[#7C5CFC]",
    iconBg: "bg-[#f5f2ff] text-[#7C5CFC]",
    expandedTitle: "Bridge skill gaps and unlock advanced roles",
    pipelineText: [
      "Skill Match: 88% Role Fit",
      "Gap to Bridge: Cloud CI/CD",
      "Readiness: High Candidate Tier",
    ],
  },
  {
    id: "showcase",
    step: "06",
    title: "Showcase",
    tagline: "Professional Story",
    description: "Bring your achievements together into your professional story.",
    accentColor: "#EB5038",
    activeBg: "bg-[#fff5f5]",
    activeBorder: "border-[#EB5038]",
    activeText: "text-[#EB5038]",
    iconBg: "bg-[#fff5f5] text-[#EB5038]",
    expandedTitle: "Unify your career journey into a shareable profile",
    pipelineText: [
      "Verified Identity: Alex Chen",
      "Profile: 14 Skills • 3 Badges • 4 Projects",
      "Public Link: solo.to/alex",
    ],
  },
];

function StageIcon({ id }: { id: StageId }) {
  switch (id) {
    case "discover":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "learn":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="9" x2="15" y1="8" y2="8" />
        </svg>
      );
    case "build":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "prove":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3 19 6v5c0 4-2.5 7.1-7 9-4.5-1.9-7-5-7-9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "grow":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "showcase":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="18" rx="2" width="18" x="3" y="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
  }
}

export default function ConnectedJourney() {
  const [activeStageId, setActiveStageId] = useState<StageId>("prove");

  const activeIndex = stages.findIndex((s) => s.id === activeStageId);
  const activeStage = stages[activeIndex] || stages[3];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 border-t border-[#e8eef5]"
      id="connected-journey"
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1255FF]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            YOUR JOURNEY WITH SOLO
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.75rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
            Everything connects to one career story.
          </h2>

          <p className="mx-auto mt-4 max-w-[660px] text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
            From discovering where you want to go to showcasing what you can do, SOLO keeps your progress connected along the way.
          </p>
        </div>

        {/* Supporting Prominent Manifesto Banner */}
        <div className="mx-auto mt-10 max-w-[880px] rounded-2xl border border-[#dbe6f1] bg-[#F5F8FC] p-5 shadow-xs">
          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            <div className="rounded-xl bg-white p-3 border border-[#e8eef5]">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1255FF]">Phase 1</span>
              <p className="mt-1 text-[13px] font-black text-[#14243D]">Learn something new.</p>
            </div>
            <div className="rounded-xl bg-white p-3 border border-[#e8eef5]">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#16A36A]">Phase 2</span>
              <p className="mt-1 text-[13px] font-black text-[#14243D]">Build something real.</p>
            </div>
            <div className="rounded-xl bg-white p-3 border border-[#e8eef5]">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#FF7F07]">Phase 3</span>
              <p className="mt-1 text-[13px] font-black text-[#14243D]">Prove what you can do.</p>
            </div>
            <div className="rounded-xl bg-white p-3 border border-[#e8eef5]">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#FD4322]">Phase 4</span>
              <p className="mt-1 text-[13px] font-black text-[#14243D]">Find where it takes you.</p>
            </div>
          </div>
        </div>

        {/* Flowing Connected Journey Track (Desktop & Tablet) */}
        <div className="mt-16">
          {/* Desktop Flowing Connected Layout */}
          <div className="hidden lg:block">
            {/* Connected Curved Pathway SVG */}
            <div className="relative">
              <svg
                className="absolute left-0 top-12 h-24 w-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 1000 80"
                fill="none"
              >
                {/* Background Track Line */}
                <path
                  d="M 50,40 Q 250,75 500,40 T 950,40"
                  stroke="#e2e8f0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Active Animated Progress Track */}
                <path
                  d="M 50,40 Q 250,75 500,40 T 950,40"
                  stroke="url(#journeyGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 - ((activeIndex + 1) / stages.length) * 1000}
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FD4322" />
                    <stop offset="35%" stopColor="#1255FF" />
                    <stop offset="65%" stopColor="#16A36A" />
                    <stop offset="85%" stopColor="#FF7F07" />
                    <stop offset="100%" stopColor="#EB5038" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 6 Connected Nodes Grid */}
              <div className="relative z-10 grid grid-cols-6 gap-3">
                {stages.map((stage, idx) => {
                  const isSelected = stage.id === activeStageId;
                  const isPassed = idx <= activeIndex;

                  return (
                    <button
                      key={stage.id}
                      id={`flow-node-${stage.id}`}
                      role="button"
                      aria-pressed={isSelected}
                      type="button"
                      onClick={() => setActiveStageId(stage.id)}
                      className="group flex flex-col items-center text-center focus-visible:outline-none"
                    >
                      {/* Node Circle on Track */}
                      <div
                        className={`flex h-13 w-13 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                          isSelected
                            ? `${stage.activeBg} ${stage.activeBorder} ${stage.activeText} scale-110 shadow-lg ring-4 ring-offset-2 ring-[#F5F8FC]`
                            : isPassed
                            ? "border-[#14243D] bg-white text-[#14243D]"
                            : "border-[#dbe6f1] bg-white text-[#94a3b8] group-hover:border-slate-400 group-hover:scale-105"
                        }`}
                      >
                        <StageIcon id={stage.id} />
                      </div>

                      {/* Small directional connector arrow between stages */}
                      <span className="mt-3 text-[10px] font-black uppercase tracking-wider text-[#94a3b8]">
                        Step {stage.step}
                      </span>

                      <h4
                        className={`mt-1 text-[15px] font-black transition-colors ${
                          isSelected ? stage.activeText : "text-[#14243D] group-hover:text-[#1255FF]"
                        }`}
                      >
                        {stage.title}
                      </h4>

                      <p className="mt-1 px-1 text-[11px] leading-relaxed text-[#64748B]">
                        {stage.description}
                      </p>

                      {/* Micro visual badge */}
                      <span
                        className={`mt-2.5 rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase transition-colors ${
                          isSelected ? `${stage.activeBg} ${stage.activeText}` : "bg-[#f1f5f9] text-[#94a3b8]"
                        }`}
                      >
                        {stage.tagline}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Vertical Connected Stepper */}
          <div className="lg:hidden">
            <div className="relative border-l-2 border-[#e2e8f0] ml-4 pl-6 space-y-5">
              {stages.map((stage) => {
                const isSelected = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    id={`mobile-journey-${stage.id}`}
                    role="button"
                    aria-pressed={isSelected}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className={`group relative flex w-full flex-col rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? `${stage.activeBg} ${stage.activeBorder} shadow-sm ring-2 ring-offset-1`
                        : "border-[#e2e8f0] bg-white text-[#14243D]"
                    }`}
                  >
                    {/* Circle Node on vertical connector line */}
                    <span
                      className={`absolute -left-[35px] top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white text-[10px] font-black transition-colors ${
                        isSelected
                          ? `${stage.activeBorder} ${stage.activeText}`
                          : "border-[#cbd5e1] text-[#94a3b8]"
                      }`}
                    >
                      {stage.step}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold uppercase ${isSelected ? stage.activeText : "text-[#94a3b8]"}`}>
                        {stage.tagline}
                      </span>
                      <span className={isSelected ? stage.activeText : "text-[#94a3b8]"}>
                        <StageIcon id={stage.id} />
                      </span>
                    </div>

                    <h4 className="mt-1 text-[15px] font-black text-[#14243D]">{stage.title}</h4>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#64748B]">{stage.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expanded Contextual Stage Card */}
          <div className="mt-10 rounded-[24px] border border-[#dbe6f1] bg-[#F5F8FC] p-6 shadow-[0_16px_40px_rgba(20,36,61,0.06)] transition-all duration-300 sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] shadow-xs">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: activeStage.accentColor }}
                    aria-hidden="true"
                  />
                  Stage {activeStage.step} of 06 · {activeStage.title}
                </div>

                <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.4rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#14243D]">
                  {activeStage.expandedTitle}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#64748B] sm:text-[15px]">
                  {activeStage.description} Everything in this stage builds directly on what you explored earlier, preparing you for the next milestone.
                </p>

                {/* Pipeline connection items */}
                <div className="mt-5 space-y-2">
                  {activeStage.pipelineText.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white px-3.5 py-2.5 text-[12px] font-bold text-[#14243D]"
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white"
                        style={{ backgroundColor: activeStage.accentColor }}
                      >
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Product Snippet Graphic */}
              <div className="rounded-2xl border border-[#dbe6f1] bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg ${activeStage.iconBg}`}
                    >
                      <StageIcon id={activeStage.id} />
                    </span>
                    <span className="text-[12px] font-black text-[#14243D]">
                      SOLO Connected Ecosystem
                    </span>
                  </div>
                  <span
                    className="rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${activeStage.accentColor}18`,
                      color: activeStage.accentColor,
                    }}
                  >
                    Active Link
                  </span>
                </div>

                {/* Stage Progression Flow Diagram */}
                <div className="mt-4 flex flex-col gap-2 text-[11px] font-bold">
                  <div className="flex items-center justify-between rounded-lg bg-[#F5F8FC] p-2.5 text-[#64748B]">
                    <span>Career Goal</span>
                    <span className="text-[#1255FF]">Direct Connection →</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#F5F8FC] p-2.5 text-[#64748B]">
                    <span>Skills & Learning</span>
                    <span className="text-[#16A36A]">Real-world Evidence →</span>
                  </div>
                  <div
                    className="flex items-center justify-between rounded-lg p-2.5 shadow-xs"
                    style={{
                      backgroundColor: `${activeStage.accentColor}15`,
                      color: activeStage.accentColor,
                    }}
                  >
                    <span>Current Focus: {activeStage.title}</span>
                    <span className="font-extrabold">Active Node ★</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#F5F8FC] p-2.5 text-[#64748B]">
                    <span>Opportunity & Proof</span>
                    <span className="text-[#FD4322]">Verified Profile →</span>
                  </div>
                </div>

                <p className="mt-3.5 text-center text-[10px] font-semibold text-[#94a3b8]">
                  Connected within SOLO &middot; No isolated tools
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
            Ready to explore your path?
          </p>
          <div className="mt-4">
            <a
              href="#career-explorer"
              className="inline-flex items-center justify-center rounded-xl bg-[#FD4322] px-7 py-3.5 text-[14px] font-extrabold text-white shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c]"
            >
              Explore Your Path →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
