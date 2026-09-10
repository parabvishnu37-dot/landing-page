"use client";

import { useState } from "react";

type TabId = "discover" | "learn" | "build" | "prove" | "grow" | "showcase";

type TabData = {
  id: TabId;
  step: string;
  label: string;
  subtitle: string;
  colorName: string;
  accentColor: string;
  activeBg: string;
  activeBorder: string;
  activeText: string;
  heading: string;
  description: string;
  journeyQuestion: string;
};

const tabs: TabData[] = [
  {
    id: "discover",
    step: "01",
    label: "Discover",
    subtitle: "Opportunities & Paths",
    colorName: "orange",
    accentColor: "#FD4322",
    activeBg: "bg-[#fff1ec]",
    activeBorder: "border-[#FD4322]",
    activeText: "text-[#FD4322]",
    heading: "Discover your next opportunity.",
    description:
      "Explore courses, internships, live projects, hackathons, jobs, career pathways, and volunteering opportunities that can help you move forward.",
    journeyQuestion: "What direction should I explore?",
  },
  {
    id: "learn",
    step: "02",
    label: "Learn",
    subtitle: "Structured Pathways",
    colorName: "blue",
    accentColor: "#1255FF",
    activeBg: "bg-[#eef5ff]",
    activeBorder: "border-[#1255FF]",
    activeText: "text-[#1255FF]",
    heading: "Learn with a path in mind.",
    description:
      "Follow structured learning, build relevant knowledge, and track your progress as you develop new skills.",
    journeyQuestion: "What foundational knowledge do I need?",
  },
  {
    id: "build",
    step: "03",
    label: "Build Skills",
    subtitle: "Hands-on Experience",
    colorName: "green",
    accentColor: "#16a36a",
    activeBg: "bg-[#eaf8f1]",
    activeBorder: "border-[#16a36a]",
    activeText: "text-[#128455]",
    heading: "Turn learning into real experience.",
    description:
      "Build projects, gain practical experience, and create evidence that shows what you can actually do.",
    journeyQuestion: "What tangible work can I create?",
  },
  {
    id: "prove",
    step: "04",
    label: "Prove",
    subtitle: "Verified Credentials",
    colorName: "gold",
    accentColor: "#FF7F07",
    activeBg: "bg-[#fff8dd]",
    activeBorder: "border-[#FF7F07]",
    activeText: "text-[#b65d00]",
    heading: "Give your skills proof.",
    description:
      "Earn credentials, badges, and verified evidence that make your achievements easier to demonstrate and share.",
    journeyQuestion: "How do I validate my capabilities?",
  },
  {
    id: "grow",
    step: "05",
    label: "Grow",
    subtitle: "Skill Gap Analysis",
    colorName: "purple",
    accentColor: "#6366F1",
    activeBg: "bg-[#f3f0ff]",
    activeBorder: "border-[#6366F1]",
    activeText: "text-[#6366F1]",
    heading: "Know what to improve next.",
    description:
      "Understand your skill gaps, compare your strengths with career requirements, and discover opportunities that fit your progress.",
    journeyQuestion: "Where are my gaps and how do I level up?",
  },
  {
    id: "showcase",
    step: "06",
    label: "Showcase",
    subtitle: "Professional Profile",
    colorName: "coral",
    accentColor: "#EB5038",
    activeBg: "bg-[#fff5f5]",
    activeBorder: "border-[#EB5038]",
    activeText: "text-[#EB5038]",
    heading: "Tell your professional story.",
    description:
      "Bring your skills, projects, credentials, and achievements together into a professional profile.",
    journeyQuestion: "Where can my proven experience take me?",
  },
];

function TabIcon({ id }: { id: TabId }) {
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

export default function SoloExperience() {
  const [activeTabId, setActiveTabId] = useState<TabId>("discover");

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section
      className="relative overflow-hidden bg-[#F5F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="how-it-works"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-[#1255FF]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-24 h-80 w-80 rounded-full bg-[#FD4322]/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            THE SOLO EXPERIENCE
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.75rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
            Everything you need to move forward.
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
            SOLO connects learning, skills, experience, credentials, and career opportunities in one place.
          </p>
        </div>

        {/* Six Interactive Feature Tabs */}
        <div className="mt-12">
          {/* Scrollable Tab Bar on Mobile / Grid on Tablet & Desktop */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
            role="tablist"
            aria-label="SOLO Experience Feature Tabs"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`group flex min-w-[150px] sm:min-w-0 flex-1 flex-col items-start rounded-2xl border p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2 ${
                    isActive
                      ? `${tab.activeBg} ${tab.activeBorder} shadow-[0_8px_20px_rgba(20,36,61,0.06)]`
                      : "border-[#dbe6f1] bg-white text-[#14243D] hover:border-slate-300 hover:bg-[#fafcff]"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? `${tab.activeText} bg-white shadow-xs`
                          : "bg-[#f1f5f9] text-[#64748B] group-hover:text-[#14243D]"
                      }`}
                    >
                      <TabIcon id={tab.id} />
                    </span>
                    <span
                      className={`text-[10px] font-black tracking-wider ${
                        isActive ? tab.activeText : "text-[#94a3b8]"
                      }`}
                    >
                      {tab.step}
                    </span>
                  </div>

                  <span
                    className={`mt-2.5 block text-[13px] font-extrabold leading-tight ${
                      isActive ? "text-[#14243D]" : "text-[#14243D]"
                    }`}
                  >
                    {tab.label}
                  </span>

                  <span
                    className={`mt-0.5 block truncate text-[10px] font-semibold ${
                      isActive ? tab.activeText : "text-[#64748B]"
                    }`}
                  >
                    {tab.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Tab Content Panel */}
          <div
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
            className="mt-6 rounded-[28px] border border-[#dbe6f1] bg-white p-6 shadow-[0_20px_50px_rgba(20,36,61,0.07)] transition-all duration-300 sm:p-8 lg:p-11"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              {/* Left Column: Heading, Description & Story Context */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FC] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: activeTab.accentColor }}
                    aria-hidden="true"
                  />
                  Step {activeTab.step} of 06 · {activeTab.label}
                </div>

                <h3 className="mt-4 text-[clamp(1.9rem,3.2vw,2.75rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#14243D]">
                  {activeTab.heading}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
                  {activeTab.description}
                </p>

                {/* Question it answers for the learner */}
                <div className="mt-6 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#94a3b8]">
                    What this solves for you
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-[#14243D]">
                    &ldquo;{activeTab.journeyQuestion}&rdquo;
                  </p>
                </div>

                {/* Quick Action Navigation */}
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="#career-explorer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#14243D] px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#FD4322]"
                  >
                    Explore in SOLO →
                  </a>
                  <span className="text-[12px] font-semibold text-[#94a3b8]">
                    Free to explore · No sign up required
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Product Demonstration Preview */}
              <div className="relative">
                {activeTabId === "discover" && (
                  <div className="space-y-3 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#fff1ec] text-[10px] font-extrabold text-[#FD4322]">
                          ⌕
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Curated Opportunities</p>
                      </div>
                      <span className="rounded-full bg-[#fff1ec] px-2 py-0.5 text-[9px] font-bold text-[#FD4322]">
                        1,400+ Active
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Opportunity 1 */}
                      <div className="rounded-xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs transition-transform hover:-translate-y-0.5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff1ec] text-[12px] font-black text-[#FD4322]">
                              A
                            </span>
                            <div>
                              <h4 className="text-[12px] font-bold text-[#14243D]">Associate UX Designer</h4>
                              <p className="text-[10px] text-[#64748B]">Airbnb · Remote · Full-time</p>
                            </div>
                          </div>
                          <span className="rounded-md border border-[#f8d1c6] bg-[#fff1ec] px-2 py-0.5 text-[10px] font-extrabold text-[#FD4322]">
                            94% match
                          </span>
                        </div>
                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[9px] font-semibold text-[#64748B]">
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">Figma</span>
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">User Research</span>
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">Design Tokens</span>
                        </div>
                      </div>

                      {/* Opportunity 2 */}
                      <div className="rounded-xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs transition-transform hover:-translate-y-0.5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef5ff] text-[12px] font-black text-[#1255FF]">
                              S
                            </span>
                            <div>
                              <h4 className="text-[12px] font-bold text-[#14243D]">Frontend Engineer</h4>
                              <p className="text-[10px] text-[#64748B]">Stripe · San Francisco · Full-time</p>
                            </div>
                          </div>
                          <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-0.5 text-[10px] font-extrabold text-[#1255FF]">
                            91% match
                          </span>
                        </div>
                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[9px] font-semibold text-[#64748B]">
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">React</span>
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">TypeScript</span>
                          <span className="rounded bg-[#f1f5f9] px-2 py-0.5">API Design</span>
                        </div>
                      </div>

                      {/* Opportunity 3 */}
                      <div className="rounded-xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs transition-transform hover:-translate-y-0.5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf8f1] text-[12px] font-black text-[#16a36a]">
                              ⚡
                            </span>
                            <div>
                              <h4 className="text-[12px] font-bold text-[#14243D]">AI Web App Sprint</h4>
                              <p className="text-[10px] text-[#64748B]">Live Hackathon · 2 Weeks Left</p>
                            </div>
                          </div>
                          <span className="rounded-md border border-[#c9ead9] bg-[#eaf8f1] px-2 py-0.5 text-[10px] font-extrabold text-[#128455]">
                            Open Project
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 pt-1 text-[10px] font-bold text-[#64748B]">
                      <span className="flex items-center gap-1 rounded-full border border-[#dbe6f1] bg-white px-2.5 py-1">
                        🎯 Career Pathways
                      </span>
                      <span className="flex items-center gap-1 rounded-full border border-[#dbe6f1] bg-white px-2.5 py-1">
                        💼 Internships
                      </span>
                      <span className="flex items-center gap-1 rounded-full border border-[#dbe6f1] bg-white px-2.5 py-1">
                        🤝 Volunteering
                      </span>
                    </div>
                  </div>
                )}

                {activeTabId === "learn" && (
                  <div className="space-y-4 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eef5ff] text-[10px] font-extrabold text-[#1255FF]">
                          📖
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Curated Learning Curriculum</p>
                      </div>
                      <span className="rounded-full bg-[#eef5ff] px-2 py-0.5 text-[9px] font-bold text-[#1255FF]">
                        Structured Path
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#cfe0fb] bg-white p-4 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1255FF]">Active Course</p>
                          <h4 className="mt-0.5 text-[14px] font-black text-[#14243D]">Full-Stack Systems Architecture</h4>
                        </div>
                        <span className="rounded-full bg-[#eef5ff] px-2.5 py-1 text-[11px] font-black text-[#1255FF]">
                          78%
                        </span>
                      </div>

                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#eef5ff]">
                        <div className="h-full w-[78%] rounded-full bg-[#1255FF] transition-all duration-500" />
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-[#64748B]">
                        <span>Module 14 of 18 completed</span>
                        <span className="font-bold text-[#1255FF]">Next: App Router APIs</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#e3eaf1] bg-white p-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Skills Developed</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          TypeScript
                        </span>
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          Next.js App Router
                        </span>
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          REST Architecture
                        </span>
                        <span className="rounded-md border border-[#cfe0fb] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold text-[#1255FF]">
                          State Management
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "build" && (
                  <div className="space-y-4 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eaf8f1] text-[10px] font-extrabold text-[#16a36a]">
                          🛠
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Hands-on Project Portfolio</p>
                      </div>
                      <span className="rounded-full bg-[#eaf8f1] px-2 py-0.5 text-[9px] font-bold text-[#128455]">
                        Verified Artifacts
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#c9ead9] bg-white p-4 shadow-xs">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="rounded-sm bg-[#eaf8f1] px-2 py-0.5 text-[9px] font-extrabold uppercase text-[#128455]">
                            Featured Project
                          </span>
                          <h4 className="mt-1 text-[14px] font-black text-[#14243D]">
                            Collaborative Design Feedback Engine
                          </h4>
                          <p className="mt-0.5 text-[11px] text-[#64748B]">
                            Real-time canvas with WebSocket sync and role permissions.
                          </p>
                        </div>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf8f1] text-[#16a36a] font-bold text-xs">
                          ✓
                        </span>
                      </div>

                      <div className="mt-4 space-y-2 border-t border-[#f0fdf4] pt-3">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#14243D]">
                          <span className="text-[#16a36a]">✓</span> Code reviewed by industry engineers
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#14243D]">
                          <span className="text-[#16a36a]">✓</span> Deployed to production & test suite passing
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#14243D]">
                          <span className="text-[#16a36a]">✓</span> Evidence documented for recruiter review
                        </div>
                      </div>

                      <div className="mt-3.5 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                        <span className="rounded bg-[#f1f5f9] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">Next.js</span>
                        <span className="rounded bg-[#f1f5f9] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">Tailwind CSS</span>
                        <span className="rounded bg-[#f1f5f9] px-2 py-0.5 text-[9px] font-bold text-[#64748B]">WebSockets</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "prove" && (
                  <div className="space-y-4 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#fff8dd] text-[10px] font-extrabold text-[#FF7F07]">
                          🛡
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Verified Credentials</p>
                      </div>
                      <span className="rounded-full bg-[#fff8dd] px-2 py-0.5 text-[9px] font-bold text-[#b65d00]">
                        Shareable Badge
                      </span>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-[#f5dfb0] bg-gradient-to-br from-white to-[#fffcf5] p-5 shadow-xs">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff8dd] text-xl text-[#FF7F07] shadow-xs">
                            ★
                          </div>
                          <div>
                            <span className="rounded-full bg-[#fff8dd] px-2 py-0.5 text-[9px] font-extrabold uppercase text-[#b65d00]">
                              Verified Credential
                            </span>
                            <h4 className="mt-1 text-[15px] font-black text-[#14243D]">
                              Professional Frontend Engineer
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#fbf3db] pt-3 text-[10px]">
                        <div>
                          <p className="text-[#94a3b8]">Verified Projects</p>
                          <p className="font-extrabold text-[#14243D]">3 Hands-on Artifacts</p>
                        </div>
                        <div>
                          <p className="text-[#94a3b8]">Assessment Score</p>
                          <p className="font-extrabold text-[#16a36a]">96 / 100 Proficient</p>
                        </div>
                        <div>
                          <p className="text-[#94a3b8]">Issuer</p>
                          <p className="font-extrabold text-[#14243D]">SOLO Registry</p>
                        </div>
                        <div>
                          <p className="text-[#94a3b8]">Status</p>
                          <p className="font-extrabold text-[#1255FF]">Publicly Verifiable</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-lg bg-[#fbf5e6] px-3 py-2 text-[10px] font-bold text-[#b65d00]">
                        <span>ID: SOLO-8921-VERIFIED</span>
                        <span className="text-[#FD4322] underline cursor-pointer">View credential page →</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "grow" && (
                  <div className="space-y-4 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f3f0ff] text-[10px] font-extrabold text-[#6366F1]">
                          📊
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Skill Gap Intelligence</p>
                      </div>
                      <span className="rounded-full bg-[#f3f0ff] px-2 py-0.5 text-[9px] font-bold text-[#6366F1]">
                        Dynamic Insights
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#e0e7ff] bg-white p-4 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#6366F1]">Target Role</p>
                          <h4 className="text-[14px] font-black text-[#14243D]">Full-Stack Product Engineer</h4>
                        </div>
                        <span className="rounded-full bg-[#f3f0ff] px-3 py-1 text-[12px] font-black text-[#6366F1]">
                          88% Match
                        </span>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        <div className="flex items-center justify-between rounded-lg bg-[#eaf8f1] px-3 py-2 text-[11px]">
                          <span className="font-bold text-[#128455]">✓ Matched Skills</span>
                          <span className="font-semibold text-[#128455]">React, TypeScript, CSS Systems</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-[#fff8dd] px-3 py-2 text-[11px]">
                          <span className="font-bold text-[#b65d00]">◐ Developing</span>
                          <span className="font-semibold text-[#b65d00]">GraphQL, Unit Testing</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-[#f3f0ff] px-3 py-2 text-[11px]">
                          <span className="font-bold text-[#6366F1]">○ To Acquire</span>
                          <span className="font-semibold text-[#6366F1]">Cloud Deployments & CI/CD</span>
                        </div>
                      </div>

                      <div className="mt-3.5 rounded-lg border border-[#e0e7ff] bg-[#faf5ff] p-2.5 text-[11px] font-semibold text-[#6366F1]">
                        💡 Recommended next step: Complete a cloud deployment module to raise match to 95%.
                      </div>
                    </div>
                  </div>
                )}

                {activeTabId === "showcase" && (
                  <div className="space-y-4 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#fff1ec] text-[10px] font-extrabold text-[#EB5038]">
                          👤
                        </span>
                        <p className="text-[12px] font-extrabold text-[#14243D]">Public Digital Portfolio</p>
                      </div>
                      <span className="rounded-full bg-[#fff1ec] px-2 py-0.5 text-[9px] font-bold text-[#EB5038]">
                        Recruiter Ready
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#f8d1c6] bg-white p-4 shadow-xs">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ff] text-[11px] font-black text-[#1255FF] ring-2 ring-[#cfe0fb]">
                            AC
                          </span>
                          <div>
                            <h4 className="text-[13px] font-black text-[#14243D]">Alex Chen</h4>
                            <p className="text-[10px] font-semibold text-[#64748B]">Full-Stack Product Engineer</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-[#eaf8f1] px-2 py-0.5 text-[9px] font-bold text-[#16a36a]">
                          ✓ Active Profile
                        </span>
                      </div>

                      <div className="mt-3.5 grid grid-cols-3 gap-2 rounded-lg bg-[#F5F8FC] p-2.5 text-center text-[10px]">
                        <div>
                          <p className="font-black text-[#14243D]">14</p>
                          <p className="text-[#64748B]">Skills</p>
                        </div>
                        <div>
                          <p className="font-black text-[#14243D]">3</p>
                          <p className="text-[#64748B]">Credentials</p>
                        </div>
                        <div>
                          <p className="font-black text-[#14243D]">4</p>
                          <p className="text-[#64748B]">Projects</p>
                        </div>
                      </div>

                      <div className="mt-3 rounded-lg border border-[#e3eaf1] p-2.5">
                        <p className="text-[9px] font-bold uppercase text-[#94a3b8]">Featured Proof</p>
                        <p className="text-[11px] font-bold text-[#14243D]">AI Workspace Engine · Deployed Demo</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] font-bold text-[#FD4322]">
                        <span>solo.to/alex-chen</span>
                        <span className="rounded bg-[#fff1ec] px-2 py-0.5">Share Profile ↗</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Continuous Journey Progression Breadcrumb */}
            <div className="mt-10 border-t border-[#e8eef5] pt-6">
              <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#94a3b8]">
                THE LEARNER JOURNEY: FROM EXPLORATION TO IMPACT
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-[#64748B]">
                <span className={activeTabId === "discover" ? "text-[#FD4322] font-black" : ""}>
                  Discover
                </span>
                <span className="text-[#cbd5e1]">→</span>
                <span className={activeTabId === "learn" ? "text-[#1255FF] font-black" : ""}>
                  Learn
                </span>
                <span className="text-[#cbd5e1]">→</span>
                <span className={activeTabId === "build" ? "text-[#16a36a] font-black" : ""}>
                  Build Skills
                </span>
                <span className="text-[#cbd5e1]">→</span>
                <span className={activeTabId === "prove" ? "text-[#FF7F07] font-black" : ""}>
                  Prove
                </span>
                <span className="text-[#cbd5e1]">→</span>
                <span className={activeTabId === "grow" ? "text-[#6366F1] font-black" : ""}>
                  Grow
                </span>
                <span className="text-[#cbd5e1]">→</span>
                <span className={activeTabId === "showcase" ? "text-[#EB5038] font-black" : ""}>
                  Showcase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
