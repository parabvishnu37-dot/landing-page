"use client";

import { useState, KeyboardEvent } from "react";
import { useCareerPlan } from "@/app/context/CareerContext";
import { OpportunityDemo, SkillMatchResult } from "@/app/types/career";

const demoOpportunities: OpportunityDemo[] = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    company: "Veloce Labs",
    location: "Remote",
    type: "Full-time",
    description: "Build interactive, high-performance web applications using modern React, TypeScript, and responsive UI design.",
    suggestedSkills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Git"],
    requirements: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git", "Testing"],
  },
  {
    id: "senior-eng-mgr",
    title: "Senior Manager Engineering",
    company: "Apex Cloud Systems",
    location: "San Francisco, CA · Hybrid",
    type: "Full-time",
    description: "Lead distributed engineering teams, drive architectural decisions, and champion agile delivery across cloud platforms.",
    suggestedSkills: ["System Architecture", "Team Leadership", "Agile Coaching", "Engineering Strategy", "Mentorship", "CI/CD"],
    requirements: ["System Architecture", "Team Leadership", "Engineering Strategy", "Cloud Infrastructure", "CI/CD", "Mentorship"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "Studio Flow",
    location: "New York, NY · Hybrid",
    type: "Contract",
    description: "Craft intuitive user journeys, interactive wireframes, and design systems for next-generation digital products.",
    suggestedSkills: ["Figma", "UX Research", "Wireframing", "Prototyping", "Visual Design"],
    requirements: ["Figma", "UX Research", "Wireframing", "Prototyping", "Design Systems", "Visual Design"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    company: "MetricWave Analytics",
    location: "Remote",
    type: "Full-time",
    description: "Transform complex data sets into executive dashboards, predictive trends, and clear business intelligence metrics.",
    suggestedSkills: ["Python", "SQL", "Excel", "Data Analysis", "Power BI"],
    requirements: ["SQL", "Python", "Data Analysis", "Power BI", "Excel", "Data Visualization"],
  },
  {
    id: "product-designer",
    title: "Product Designer",
    company: "Aura Creative",
    location: "Austin, TX · Hybrid",
    type: "Full-time",
    description: "Lead end-to-end product design from discovery research and system modeling to high-fidelity prototypes.",
    suggestedSkills: ["Design Systems", "User Research", "Wireframing", "Product Strategy", "Interaction Design", "Figma"],
    requirements: ["Product Strategy", "UX Research", "UI Design", "Figma", "Interaction Design", "Design Thinking"],
  },
];

export default function SkillMatch() {
  const { setSkillMatch, setCopilotPreloadQuery } = useCareerPlan();
  const [selectedOpp, setSelectedOpp] = useState<OpportunityDemo>(demoOpportunities[0]);
  const [userSkills, setUserSkills] = useState<string[]>(["React", "JavaScript", "HTML"]);
  const [skillInput, setSkillInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [matchResult, setMatchResult] = useState<SkillMatchResult | null>(null);

  const handleAddSkill = (skillToAdd: string) => {
    const trimmed = skillToAdd.trim();
    if (!trimmed) return;
    if (userSkills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setSkillInput("");
      return;
    }
    setUserSkills((prev) => [...prev, trimmed]);
    setSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUserSkills((prev) => prev.filter((s) => s.toLowerCase() !== skillToRemove.toLowerCase()));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill(skillInput);
    }
  };

  const handleSelectOpportunity = (opp: OpportunityDemo) => {
    setSelectedOpp(opp);
  };

  const analyzeSkillMatch = async () => {
    if (!selectedOpp || userSkills.length === 0 || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/career-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "skill-match",
          opportunity: {
            title: selectedOpp.title,
            description: selectedOpp.description,
            requirements: selectedOpp.requirements,
          },
          skills: userSkills,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to evaluate skill match");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to evaluate skill match");
      }

      setMatchResult(data.data);
      setSkillMatch(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze skill match. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskCopilot = () => {
    if (!matchResult) return;
    setSkillMatch(matchResult);
    setCopilotPreloadQuery(
      `Based on my skill match for ${selectedOpp.title} (${matchResult.matchPercentage}% match), what should I learn first?`
    );
    const element = document.getElementById("ai-assistant");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const unusedSuggestions = selectedOpp.suggestedSkills.filter(
    (suggested) => !userSkills.some((s) => s.toLowerCase() === suggested.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28" id="skill-match">
      <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#ffe9e3]/60 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-20 bottom-16 h-80 w-80 rounded-full bg-[#cfe0fb]/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FD4322]">
            AI Skill Match Preview
          </p>
          <h2 className="mt-4 text-[clamp(2.3rem,4vw,3.6rem)] font-black leading-[1.04] tracking-[-0.07em] text-[#14243d]">
            Know where you stand. Know what&apos;s next.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-slate-500 sm:text-[16px]">
            Choose a target opportunity, add your skills, and let our AI evaluate your match in real time—no login required.
          </p>
        </div>

        {/* Step 1 & Step 2 Bento Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Step 1: Opportunities (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
                  Step 1
                </span>
                <h3 className="text-[18px] font-black tracking-[-0.04em] text-[#14243d]">
                  Choose an Opportunity
                </h3>
              </div>
              <span className="rounded-full bg-[#eef5ff] px-2.5 py-1 text-[10px] font-extrabold text-[#1255FF]">
                Sample Data
              </span>
            </div>

            <div className="space-y-3">
              {demoOpportunities.map((opp) => {
                const isSelected = selectedOpp.id === opp.id;
                return (
                  <button
                    key={opp.id}
                    onClick={() => handleSelectOpportunity(opp)}
                    type="button"
                    className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 ${
                      isSelected
                        ? "border-[#FD4322] bg-white shadow-[0_8px_24px_rgba(253,67,34,0.12)] ring-2 ring-[#FD4322]/20"
                        : "border-[#d7e3f0] bg-white/80 hover:bg-white hover:border-[#b4cbe5] shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block rounded-md bg-[#eef5ff] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#1255FF]">
                          Demo Role
                        </span>
                        <h4 className="mt-1 text-[15px] font-extrabold text-[#14243d]">
                          {opp.title}
                        </h4>
                        <p className="text-[11px] font-semibold text-slate-500">
                          {opp.company} · {opp.location}
                        </p>
                      </div>
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-black ${
                          isSelected
                            ? "border-[#FD4322] bg-[#FD4322] text-white"
                            : "border-slate-300 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                    <p className="mt-2.5 text-[12px] leading-5 text-slate-600 line-clamp-2">
                      {opp.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                      <span className="rounded-md bg-[#f4f7fa] px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {opp.type}
                      </span>
                      <span className="text-[10px] font-bold text-[#FD4322]">
                        {opp.requirements.length} Core Skills
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Skills Input & Action (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-[24px] border border-[#d7e3f0] bg-white p-6 shadow-[0_10px_30px_rgba(20,36,61,0.06)] sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
                    Step 2
                  </span>
                  <h3 className="text-[20px] font-black tracking-[-0.04em] text-[#14243d]">
                    What skills do you have?
                  </h3>
                  <p className="mt-1 text-[13px] leading-6 text-slate-500">
                    Add your current skills to see how well they match this opportunity.
                  </p>
                </div>
                <div className="rounded-xl border border-[#cfe0fb] bg-[#eef5ff] px-3 py-1.5 text-right">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Target Role</p>
                  <p className="text-[12px] font-black text-[#1255FF]">{selectedOpp.title}</p>
                </div>
              </div>

              {/* Skills Chips Container */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                    Your Skills ({userSkills.length})
                  </label>
                  {userSkills.length > 0 && (
                    <button
                      onClick={() => setUserSkills([])}
                      type="button"
                      className="text-[10px] font-bold text-slate-400 hover:text-[#FD4322] transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="mt-2.5 flex min-h-[56px] flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-[#f8fafc] p-3">
                  {userSkills.length === 0 ? (
                    <p className="text-[12px] font-medium text-slate-400 italic">
                      No skills added yet. Type below or pick suggestions to get started.
                    </p>
                  ) : (
                    userSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#cfe0fb] bg-white px-3 py-1.5 text-[12px] font-bold text-[#14243d] shadow-sm transition-all hover:border-[#FD4322]/40"
                      >
                        {skill}
                        <button
                          aria-label={`Remove ${skill}`}
                          onClick={() => handleRemoveSkill(skill)}
                          type="button"
                          className="flex h-4 w-4 items-center justify-center rounded-full text-slate-400 hover:bg-[#ffe9e3] hover:text-[#FD4322] transition-colors"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Input Form */}
              <div className="mt-4 flex gap-2">
                <input
                  aria-label="Enter a skill"
                  type="text"
                  placeholder="e.g. React, Python, Figma, SQL..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-semibold text-[#14243d] placeholder:text-slate-400 outline-none focus:border-[#1255FF] focus:ring-2 focus:ring-[#cfe0fb] disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill(skillInput)}
                  disabled={!skillInput.trim() || isLoading}
                  className="flex h-12 items-center justify-center rounded-xl bg-[#14243d] px-5 text-[12px] font-extrabold text-white transition-all hover:bg-[#203758] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  + Add
                </button>
              </div>

              {/* Suggested Skills */}
              {unusedSuggestions.length > 0 && (
                <div className="mt-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                    Suggested for {selectedOpp.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {unusedSuggestions.map((suggested) => (
                      <button
                        key={suggested}
                        onClick={() => handleAddSkill(suggested)}
                        type="button"
                        disabled={isLoading}
                        className="rounded-lg border border-dashed border-[#cfe0fb] bg-[#f4f8fc] px-2.5 py-1 text-[11px] font-bold text-[#1255FF] transition-all hover:border-[#1255FF] hover:bg-[#eef5ff]"
                      >
                        + {suggested}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-[12px] font-medium text-red-700">
                  <span className="font-bold">Error:</span> {error}
                </div>
              )}

              {/* Analyze CTA */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-500 font-medium">
                  {userSkills.length === 0
                    ? "Add at least one skill to calculate your match preview."
                    : `${userSkills.length} skill${userSkills.length > 1 ? "s" : ""} ready for analysis against ${selectedOpp.title}.`}
                </p>
                <button
                  type="button"
                  onClick={analyzeSkillMatch}
                  disabled={userSkills.length === 0 || isLoading}
                  className="w-full sm:w-auto h-12 rounded-xl bg-[#FD4322] px-7 text-[13px] font-extrabold text-white shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Analyzing with AI...
                    </span>
                  ) : matchResult ? (
                    "Re-analyze My Skill Match →"
                  ) : (
                    "Analyze My Skill Match →"
                  )}
                </button>
              </div>
            </div>

            {/* AI Skill Match Result Card */}
            {matchResult && (
              <div className="rounded-[24px] border border-[#d7e3f0] bg-white p-6 shadow-[0_14px_36px_rgba(20,36,61,0.08)] sm:p-8 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff1ec] text-[#FD4322] font-black text-xs">
                      AI
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        AI-Generated Skill Match
                      </p>
                      <h4 className="text-[16px] font-black text-[#14243d]">
                        {selectedOpp.title}
                      </h4>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#c9ead9] bg-[#eaf8f1] px-3 py-1 text-[11px] font-extrabold text-[#128455]">
                    Preview Assessment
                  </span>
                </div>

                {/* Score and summary */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-[#f4f8fc] p-6 border border-[#e3eaf1]">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
                      <circle cx="60" cy="60" r="48" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        fill="none"
                        stroke="#FD4322"
                        strokeWidth="10"
                        strokeDasharray={301.6}
                        strokeDashoffset={301.6 - (301.6 * matchResult.matchPercentage) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <p className="text-[26px] font-black leading-none text-[#14243d]">
                        {matchResult.matchPercentage}%
                      </p>
                      <p className="mt-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                        Match
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-[15px] font-extrabold text-[#14243d]">
                      {matchResult.matchPercentage >= 75
                        ? "Strong foundation for this opportunity"
                        : matchResult.matchPercentage >= 50
                        ? "Good foundation, with a few areas to strengthen"
                        : "Early alignment with growth opportunities"}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-5 text-slate-600">
                      {matchResult.summary}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold text-slate-400">
                      Educational preview based on your current inputs. Not an employer hiring decision.
                    </p>
                  </div>
                </div>

                {/* Skills Breakdown 3 Columns */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {/* Matched Skills */}
                  <div className="rounded-xl border border-[#c9ead9] bg-[#f5fbf8] p-4">
                    <div className="flex items-center gap-1.5 text-[#128455]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16a36a] text-[10px] font-black text-white">
                        ✓
                      </span>
                      <h5 className="text-[11px] font-black uppercase tracking-wider">Matched Skills</h5>
                    </div>
                    <div className="mt-3 space-y-2">
                      {matchResult.matchedSkills.length === 0 ? (
                        <p className="text-[11px] text-slate-400 italic">None identified yet</p>
                      ) : (
                        matchResult.matchedSkills.map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-white p-2.5 border border-[#e0f1e7] shadow-xs">
                            <p className="text-[12px] font-bold text-[#14243d]">{item.name}</p>
                            <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{item.reason}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Developing Skills */}
                  <div className="rounded-xl border border-[#f5dfb0] bg-[#fffcf4] p-4">
                    <div className="flex items-center gap-1.5 text-[#b65d00]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7F07] text-[10px] font-black text-white">
                        ◐
                      </span>
                      <h5 className="text-[11px] font-black uppercase tracking-wider">Developing</h5>
                    </div>
                    <div className="mt-3 space-y-2">
                      {matchResult.partialSkills.length === 0 ? (
                        <p className="text-[11px] text-slate-400 italic">No partial skills noted</p>
                      ) : (
                        matchResult.partialSkills.map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-white p-2.5 border border-[#f9eed2] shadow-xs">
                            <p className="text-[12px] font-bold text-[#14243d]">{item.name}</p>
                            <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{item.reason}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Skills to Develop / Missing */}
                  <div className="rounded-xl border border-[#cfe0fb] bg-[#f8fbff] p-4">
                    <div className="flex items-center gap-1.5 text-[#1255FF]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1255FF] text-[10px] font-black text-white">
                        ○
                      </span>
                      <h5 className="text-[11px] font-black uppercase tracking-wider">Skills to Develop</h5>
                    </div>
                    <div className="mt-3 space-y-2">
                      {matchResult.missingSkills.length === 0 ? (
                        <p className="text-[11px] text-slate-400 italic">No missing requirements</p>
                      ) : (
                        matchResult.missingSkills.map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-white p-2.5 border border-[#e1ecfc] shadow-xs">
                            <p className="text-[12px] font-bold text-[#14243d]">{item.name}</p>
                            <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{item.reason}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* What to do next */}
                {matchResult.nextSteps.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-slate-100 bg-[#fafcff] p-5">
                    <h5 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#14243d]">
                      What to do next
                    </h5>
                    <ol className="mt-3 space-y-2">
                      {matchResult.nextSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[12px] text-slate-700 leading-5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1255FF]/10 text-[11px] font-black text-[#1255FF]">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Connection to Copilot Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[12px] text-slate-500 font-semibold">
                    Want structured learning and project advice for this match?
                  </p>
                  <button
                    type="button"
                    onClick={handleAskCopilot}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1255FF] px-6 py-3 text-[12px] font-black text-white shadow-[0_6px_18px_rgba(18,85,255,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#0942d4]"
                  >
                    Ask SOLO what to learn next →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}