"use client";

import { useState } from "react";

type GoalId = "build-skills" | "get-internship" | "find-job" | "explore-careers" | "showcase-work";

type GoalOption = {
  id: GoalId;
  title: string;
  badge: string;
  description: string;
  accentColor: string;
  activeBg: string;
  activeBorder: string;
  activeText: string;
  iconBg: string;
  contextTitle: string;
  contextDescription: string;
  ctaText: string;
  targetHref: string;
};

const goals: GoalOption[] = [
  {
    id: "build-skills",
    title: "Build My Skills",
    badge: "Pathways & Courses",
    description: "Discover what to learn, follow useful pathways, and grow the skills you need.",
    accentColor: "#1255FF",
    activeBg: "bg-[#eef5ff]",
    activeBorder: "border-[#1255FF]",
    activeText: "text-[#1255FF]",
    iconBg: "bg-[#eef5ff] text-[#1255FF]",
    contextTitle: "Great place to start.",
    contextDescription:
      "Explore structured learning pathways, track market-demand skills, and build a verified competency foundation.",
    ctaText: "Explore Skills & Pathways →",
    targetHref: "#career-explorer",
  },
  {
    id: "get-internship",
    title: "Get an Internship",
    badge: "Hands-on Roles",
    description: "Find opportunities to gain practical experience and build evidence of what you can do.",
    accentColor: "#FD4322",
    activeBg: "bg-[#fff1ec]",
    activeBorder: "border-[#FD4322]",
    activeText: "text-[#FD4322]",
    iconBg: "bg-[#fff1ec] text-[#FD4322]",
    contextTitle: "Gain real-world experience.",
    contextDescription:
      "Discover internships, project simulations, and mentorships that turn academic learning into tangible portfolio work.",
    ctaText: "Explore Internships →",
    targetHref: "#opportunities",
  },
  {
    id: "find-job",
    title: "Find a Job",
    badge: "Role Alignment",
    description: "Explore career opportunities and understand how your skills match what employers need.",
    accentColor: "#FF7F07",
    activeBg: "bg-[#fff8dd]",
    activeBorder: "border-[#FF7F07]",
    activeText: "text-[#b65d00]",
    iconBg: "bg-[#fff8dd] text-[#FF7F07]",
    contextTitle: "Match your strengths to live roles.",
    contextDescription:
      "Compare your current skill set with employer requirements and analyze your role readiness percentage.",
    ctaText: "Analyze Your Skill Match →",
    targetHref: "#skill-match",
  },
  {
    id: "explore-careers",
    title: "Explore Careers",
    badge: "AI Roadmaps",
    description: "Discover possible career directions and the skills, learning, and experience behind them.",
    accentColor: "#7C5CFC",
    activeBg: "bg-[#f5f2ff]",
    activeBorder: "border-[#7C5CFC]",
    activeText: "text-[#7C5CFC]",
    iconBg: "bg-[#f5f2ff] text-[#7C5CFC]",
    contextTitle: "Envision your future path.",
    contextDescription:
      "Tell SOLO your target career goal and generate a connected step-by-step roadmap powered by real AI.",
    ctaText: "Build Your Career Path →",
    targetHref: "#career-explorer",
  },
  {
    id: "showcase-work",
    title: "Showcase My Work",
    badge: "Verified Profile",
    description: "Bring your skills, projects, credentials, and achievements together into your professional story.",
    accentColor: "#EB5038",
    activeBg: "bg-[#fff5f5]",
    activeBorder: "border-[#EB5038]",
    activeText: "text-[#EB5038]",
    iconBg: "bg-[#fff5f5] text-[#EB5038]",
    contextTitle: "Share your professional narrative.",
    contextDescription:
      "Unify your verified badges, deployed projects, and skill assessments into a recruiter-ready digital profile.",
    ctaText: "See How SOLO Showcases You →",
    targetHref: "#how-solo-works",
  },
];

function GoalIcon({ id }: { id: GoalId }) {
  switch (id) {
    case "build-skills":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "get-internship":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "find-job":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="14" rx="2" width="20" x="2" y="7" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "explore-careers":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "showcase-work":
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="18" rx="2" width="18" x="3" y="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
  }
}

export default function GoalSelector() {
  const [selectedGoalId, setSelectedGoalId] = useState<GoalId>("build-skills");

  const selectedGoal = goals.find((g) => g.id === selectedGoalId) || goals[0];

  return (
    <section
      className="relative overflow-hidden bg-[#F5F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="goals"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#1255FF]/5 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-[#FD4322]/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left Column: Header & Dynamic Contextual Panel */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
              START WITH YOUR GOAL
            </div>

            <h2 className="mt-4 text-[clamp(2.3rem,4vw,3.6rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
              What do you want to achieve?
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Whether you want to build skills, find an opportunity, explore a career, or showcase your work, SOLO helps you take the next step.
            </p>

            {/* Contextual Action Panel for Selected Goal */}
            <div className="mt-8 rounded-2xl border border-[#dbe6f1] bg-white p-6 shadow-[0_12px_32px_rgba(20,36,61,0.06)] transition-all duration-300">
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${selectedGoal.iconBg}`}
                >
                  <GoalIcon id={selectedGoal.id} />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
                  Goal Selected · {selectedGoal.title}
                </span>
              </div>

              <h3 className="mt-3 text-[20px] font-black tracking-[-0.03em] text-[#14243D]">
                {selectedGoal.contextTitle}
              </h3>

              <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">
                {selectedGoal.contextDescription}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={selectedGoal.targetHref}
                  className="group inline-flex items-center justify-center rounded-xl bg-[#FD4322] px-5 py-3 text-[13px] font-extrabold text-white shadow-[0_4px_14px_rgba(253,67,34,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c]"
                >
                  {selectedGoal.ctaText}
                </a>
                <span className="text-[11px] font-semibold text-[#94a3b8]">
                  Explore freely · No login required
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid of 5 Interactive Goal Cards */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {goals.map((goal, idx) => {
              const isSelected = goal.id === selectedGoalId;
              const isLastSpanTwo = idx === 4; // 5th card spans 2 columns on desktop

              return (
                <button
                  key={goal.id}
                  id={`goal-card-${goal.id}`}
                  role="button"
                  aria-pressed={isSelected}
                  type="button"
                  onClick={() => setSelectedGoalId(goal.id)}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2 ${
                    isLastSpanTwo ? "sm:col-span-2" : ""
                  } ${
                    isSelected
                      ? `${goal.activeBg} ${goal.activeBorder} shadow-[0_12px_28px_rgba(20,36,61,0.08)] ring-1 ring-offset-0`
                      : "border-[#dbe6f1] bg-white text-[#14243D] hover:border-slate-300 hover:shadow-xs"
                  }`}
                  style={{
                    borderColor: isSelected ? goal.accentColor : undefined,
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Badge + Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${
                            isSelected ? "bg-white shadow-xs" : goal.iconBg
                          }`}
                          style={{
                            color: isSelected ? goal.accentColor : undefined,
                          }}
                        >
                          <GoalIcon id={goal.id} />
                        </span>
                        <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#64748B] border border-[#e2e8f0]">
                          {goal.badge}
                        </span>
                      </div>

                      <span
                        className={`text-lg font-black transition-transform duration-200 group-hover:translate-x-1 ${
                          isSelected ? goal.activeText : "text-[#94a3b8] group-hover:text-[#14243D]"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 className="mt-4 text-[17px] font-black tracking-[-0.03em] text-[#14243D]">
                      {goal.title}
                    </h4>

                    {/* Card Description */}
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#64748B]">
                      {goal.description}
                    </p>
                  </div>

                  {/* Bottom selection indicator */}
                  <div className="mt-4 flex items-center justify-between pt-2 text-[10px] font-bold">
                    <span
                      className={`transition-colors ${
                        isSelected ? goal.activeText : "text-[#94a3b8]"
                      }`}
                    >
                      {isSelected ? "Active Choice ✓" : "Click to select"}
                    </span>
                    {isSelected && (
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: goal.accentColor }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
