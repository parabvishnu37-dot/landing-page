"use client";

import { useState } from "react";
import Image from "next/image";

type Stage = {
  num: string;
  title: string;
  desc: string;
  tag: string;
  route: string;
  screenshot: string;
  alt: string;
  accent: string;
  badgeBg: string;
  icon: React.ReactNode;
  details: string[];
};

export default function HowSoloWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const stages: Stage[] = [
    {
      num: "01",
      title: "Discover",
      desc: "Explore learning, pathways, and verified opportunities.",
      tag: "OPPORTUNITIES HUB",
      route: "solo.platform/explore",
      screenshot: "/screenshots/opportunities-explore.png",
      alt: "SOLO opportunities explorer showing internships, courses, and pathways",
      accent: "text-[#1255FF]",
      badgeBg: "bg-[#eef5ff] border-[#cfe0fb] text-[#1255FF]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
        </svg>
      ),
      details: ["Filtered by mode & cost", "Personalized recommendations", "Direct employer postings"],
    },
    {
      num: "02",
      title: "Learn",
      desc: "Follow structured pathways from foundations to mastery.",
      tag: "VISUAL CAREER PATHWAYS",
      route: "solo.platform/pathways",
      screenshot: "/screenshots/career-pathway.png",
      alt: "SOLO visual career pathway connecting courses and milestones",
      accent: "text-[#FD4322]",
      badgeBg: "bg-[#fff1ec] border-[#f8d1c6] text-[#FD4322]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      details: ["Node-by-node milestones", "Progressive skill accumulation", "Verified completion criteria"],
    },
    {
      num: "03",
      title: "Build",
      desc: "Turn knowledge into real-world projects and experience.",
      tag: "LIVE PROJECTS & INDUSTRY",
      route: "solo.platform/live-projects",
      screenshot: "/screenshots/live-projects.png",
      alt: "SOLO live projects dashboard showing industry-backed assignments",
      accent: "text-[#16a36a]",
      badgeBg: "bg-[#eaf8f1] border-[#c9ead9] text-[#16a36a]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 1 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4z" />
        </svg>
      ),
      details: ["Virtual 500h & short sprints", "SPARK+ & IBM SkillsBuild", "Verified mentor review"],
    },
    {
      num: "04",
      title: "Prove",
      desc: "Earn verified Open Badges and comprehensive records.",
      tag: "CREDENTIAL WALLET",
      route: "solo.platform/credentials",
      screenshot: "/screenshots/credential-wallet.png",
      alt: "SOLO Credential Wallet showing verified badges and CLR export",
      accent: "text-[#b65d00]",
      badgeBg: "bg-[#fff8dd] border-[#f5dfb0] text-[#b65d00]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      details: ["1EdTech Open Badges", "Comprehensive Learner Record (CLR)", "Verifiable on-chain & web"],
    },
    {
      num: "05",
      title: "Grow",
      desc: "Understand skill gaps and match to target opportunities.",
      tag: "SKILL GAP & MATCHING",
      route: "solo.platform/skill-match",
      screenshot: "/screenshots/opportunities-explore.png",
      alt: "SOLO skill matching and opportunities recommendation engine",
      accent: "text-[#7C5CFC]",
      badgeBg: "bg-[#f4f0ff] border-[#ded4fb] text-[#7C5CFC]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
      details: ["Automatic requirement comparison", "Identified missing skills", "AI-recommended next actions"],
    },
    {
      num: "06",
      title: "Showcase",
      desc: "Generate ATS resumes and present your verified story.",
      tag: "LEARNER PROFILE & RESUME",
      route: "solo.platform/profile",
      screenshot: "/screenshots/learner-profile.png",
      alt: "SOLO learner profile showing acquired skills and ATS resume generation",
      accent: "text-[#EB5038]",
      badgeBg: "bg-[#fff5f5] border-[#fed7d7] text-[#EB5038]",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      details: ["One-click ATS resume generation", "Public portfolio profile", "Acquired skill verification"],
    },
  ];

  const current = stages[activeIdx];

  return (
    <section id="how-it-works" className="relative border-t border-[#e8eef3] bg-[#F7F9FC] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            HOW SOLO WORKS
          </div>

          <h2 className="mt-3 text-[clamp(2rem,3.6vw,2.9rem)] font-black leading-[1.12] tracking-[-0.04em] text-[#14243D]">
            A real visual journey from start to finish.
          </h2>

          <p className="mt-3 text-[16px] text-[#5A6B82]">
            Select any stage below to see the actual SOLO platform in action.
          </p>
        </div>

        {/* Interactive 6-Stage Journey Navigation */}
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex flex-col rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-[#FD4322] bg-white shadow-[0_8px_24px_rgba(253,67,34,0.12)] ring-2 ring-[#FD4322]/20"
                      : "border-[#e3eaf1] bg-white/70 hover:bg-white hover:border-[#d0dbe7] shadow-xs"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[12px] font-black ${
                        isActive ? "text-[#FD4322]" : "text-[#64748B]"
                      }`}
                    >
                      {stage.num}
                    </span>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-bold transition-transform ${
                        isActive
                          ? "border-[#f8d1c6] bg-[#fff1ec] text-[#FD4322] scale-110"
                          : "border-[#e8eef3] bg-[#f8fafc] text-[#64748B] group-hover:border-[#d0dbe7]"
                      }`}
                    >
                      {stage.icon}
                    </span>
                  </div>

                  <h3
                    className={`mt-2 text-[15px] font-extrabold tracking-tight ${
                      isActive ? "text-[#14243D]" : "text-[#14243D]"
                    }`}
                  >
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-relaxed text-[#64748B] line-clamp-2">
                    {stage.desc}
                  </p>

                  {/* Active bottom line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#FD4322]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Real Product Screenshot Walkthrough */}
        <div className="mt-8 overflow-hidden rounded-[26px] border border-[#dbe6f1] bg-white shadow-[0_20px_50px_rgba(20,36,61,0.08)]">
          {/* Browser Top Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8eef3] bg-[#f8fafc] px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 rounded-md border border-[#e2e8f0] bg-white px-3 py-0.5 text-[11px] font-semibold text-[#64748B]">
                {current.route}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${current.badgeBg}`}
              >
                {current.tag}
              </span>
              <span className="text-[11px] font-bold text-[#64748B]">
                Stage {current.num} of 06
              </span>
            </div>
          </div>

          {/* Screenshot & Information Grid */}
          <div className="grid gap-0 lg:grid-cols-[1.5fr_1fr]">
            {/* Screenshot Display */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 lg:border-r lg:border-[#e8eef3]">
              <Image
                key={current.screenshot}
                src={current.screenshot}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-top transition-opacity duration-300 animate-fadeIn"
                priority
              />
            </div>

            {/* Stage Explanation & Context */}
            <div className="flex flex-col justify-between bg-white p-6 sm:p-8">
              <div>
                <span
                  className={`text-[12px] font-extrabold uppercase tracking-[0.14em] ${current.accent}`}
                >
                  STAGE {current.num} · {current.title.toUpperCase()}
                </span>

                <h3 className="mt-2 text-[22px] font-black tracking-[-0.03em] text-[#14243D]">
                  {current.title} with SOLO
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#5A6B82]">
                  {current.desc}
                </p>

                {/* Key Capabilities in this Screenshot */}
                <div className="mt-6 border-t border-[#f0f4f8] pt-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                    Platform Features in this View:
                  </p>
                  <ul className="mt-3 space-y-2 text-[13px] font-medium text-[#14243D]">
                    {current.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step Quick Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-[#f0f4f8] pt-4">
                <button
                  type="button"
                  disabled={activeIdx === 0}
                  onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                  className="text-[12px] font-bold text-[#64748B] hover:text-[#14243D] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeIdx === stages.length - 1}
                  onClick={() => setActiveIdx((prev) => Math.min(stages.length - 1, prev + 1))}
                  className="text-[12px] font-extrabold text-[#FD4322] hover:text-[#e83b1c] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
