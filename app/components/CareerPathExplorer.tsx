"use client";

import { FormEvent, useState } from "react";
import { useCareerPlan } from "@/app/context/CareerContext";

type StageKey = "Goal" | "Skills" | "Learning" | "Build Skills" | "Prove" | "Opportunities";

type StageMeta = {
  key: StageKey;
  label: string;
  color: string;
  detail: string;
};

const stages: StageMeta[] = [
  { key: "Goal", label: "Goal", color: "orange", detail: "Your destination sets the direction for this AI-crafted career roadmap." },
  { key: "Skills", label: "Skills", color: "blue", detail: "Core capabilities prioritized by market demand and relevance." },
  { key: "Learning", label: "Learning", color: "gold", detail: "Structured topics and foundations to build practical proficiency." },
  { key: "Build Skills", label: "Build Skills", color: "green", detail: "Hands-on projects you can build and showcase to demonstrate competence." },
  { key: "Prove", label: "Prove", color: "yellow", detail: "Key credentials and evidence that validate your expertise." },
  { key: "Opportunities", label: "Opportunities", color: "blue", detail: "Target roles, internships, and pathways aligned with your growing skill set." },
];

const suggestions = [
  "Data Analyst",
  "UI/UX Designer",
  "Frontend Developer",
  "Product Designer",
];

function StageIcon({ stageKey }: { stageKey: StageKey }) {
  const paths: Record<StageKey, React.ReactNode> = {
    Goal: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
        <path d="m17 7 3-3M18 4h2v2" />
      </>
    ),
    Skills: (
      <>
        <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="m18 16 .5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2Z" />
      </>
    ),
    Learning: (
      <>
        <path d="M4 6.5 12 4l8 2.5L12 9 4 6.5Z" />
        <path d="M7 8v5c0 1.5 2.2 2.8 5 2.8s5-1.3 5-2.8V8M20 7v5" />
      </>
    ),
    "Build Skills": (
      <>
        <path d="M4 7h16v13H4zM8 7V4h8v3M8 12h8M8 16h5" />
      </>
    ),
    Prove: (
      <>
        <path d="M12 3 19 6v5c0 4-2.5 7.1-7 9-4.5-1.9-7-5-7-9V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    Opportunities: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m14.5 14.5 5 5M8 10h4M10 8v4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {paths[stageKey]}
    </svg>
  );
}

function stageClasses(color: string, active = false) {
  const colors: Record<string, string> = {
    orange: active
      ? "border-[#FD4322] bg-[#fff1ec] text-[#FD4322]"
      : "border-[#f8d1c6] bg-white text-[#FD4322]",
    blue: active
      ? "border-[#1255FF] bg-[#eef5ff] text-[#1255FF]"
      : "border-[#cfe0fb] bg-white text-[#1255FF]",
    gold: active
      ? "border-[#FF7F07] bg-[#fff8dd] text-[#b65d00]"
      : "border-[#f5dfb0] bg-white text-[#b65d00]",
    green: active
      ? "border-[#16a36a] bg-[#eaf8f1] text-[#128455]"
      : "border-[#c9ead9] bg-white text-[#128455]",
    yellow: active
      ? "border-[#ffb800] bg-[#fff8dd] text-[#9a7000]"
      : "border-[#f5e4b8] bg-white text-[#9a7000]",
  };
  return colors[color] || colors.blue;
}

export default function CareerPathExplorer() {
  const [goalInput, setGoalInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStage, setActiveStage] = useState<StageKey>("Goal");
  const { careerPlan, setCareerPlan, clearCareerPlan } = useCareerPlan();

  const hasGeneratedPlan = Boolean(careerPlan.goal && careerPlan.skills.length > 0);

  async function handleBuildPath(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = goalInput.trim();
    if (!query || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/career-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "career-path",
          goal: query,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to generate career path");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to generate career path");
      }

      setCareerPlan(data.data);
      setActiveStage("Goal");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function handleResetGoal() {
    clearCareerPlan();
    setGoalInput("");
    setActiveStage("Goal");
    setError(null);
  }

  const activeStageMeta = stages.find((s) => s.key === activeStage) || stages[0];

  return (
    <section
      className="relative overflow-hidden bg-[#F5F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="career-explorer"
    >
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#eef5ff] blur-3xl" aria-hidden="true" />
      <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-[#ffe9e3]/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px]">
        {!hasGeneratedPlan ? (
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FD4322]">
              BUILD YOUR CAREER PATH
            </p>
            <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.8rem)] font-black leading-[1.02] tracking-[-0.07em] text-[#14243D]">
              What do you want to become?
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              Tell SOLO your career goal and explore the skills, learning, projects, credentials and opportunities connected to it.
            </p>

            <form
              className="mx-auto mt-10 flex max-w-[780px] flex-col gap-3 rounded-[20px] border border-[#d7e3f0] bg-white p-2.5 shadow-[0_12px_32px_rgba(20,36,61,0.08)] sm:flex-row"
              onSubmit={handleBuildPath}
            >
              <label className="sr-only" htmlFor="career-goal-input">
                I want to become
              </label>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                <span className="text-[#1255FF] text-xl font-bold" aria-hidden="true">
                  ⌕
                </span>
                <input
                  className="h-12 min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-[#14243D] outline-none placeholder:text-[#94a3b8] focus-visible:ring-0"
                  id="career-goal-input"
                  onChange={(event) => setGoalInput(event.target.value)}
                  placeholder="I want to become a..."
                  type="text"
                  value={goalInput}
                  disabled={isLoading}
                />
              </div>
              <button
                className="h-12 rounded-xl bg-[#FD4322] px-6 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(253,67,34,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                type="submit"
                disabled={!goalInput.trim() || isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Building your career path...
                  </span>
                ) : (
                  <>
                    Build My Career Path <span className="ml-2">→</span>
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mx-auto mt-4 max-w-[700px] rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-1 text-[11px] font-bold text-[#64748B]">Try</span>
              {suggestions.map((suggestion) => (
                <button
                  className="rounded-full border border-[#d7e3f0] bg-white px-4 py-2 text-[11px] font-bold text-[#14243D] shadow-2xs transition-all hover:border-[#FD4322] hover:bg-[#fff1ec] hover:text-[#FD4322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF]"
                  key={suggestion}
                  onClick={() => setGoalInput(suggestion)}
                  type="button"
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FD4322]">
                  AI CAREER ROADMAP
                </p>
                <h2 className="mt-3 text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.04] tracking-[-0.065em] text-[#14243D]">
                  Your path to becoming a <span className="text-[#FD4322]">{careerPlan.goal}</span>
                </h2>
                <p className="mt-3 text-[13px] text-[#64748B]">
                  Explore the connected stages generated by SOLO AI for your destination.
                </p>
              </div>
              <button
                className="self-start rounded-xl border border-[#cfe0fb] bg-white px-4 py-2.5 text-[11px] font-extrabold text-[#1255FF] shadow-xs transition-colors hover:border-[#FD4322] hover:text-[#FD4322] sm:self-auto"
                onClick={handleResetGoal}
                type="button"
              >
                Change goal
              </button>
            </div>

            <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              {stages.map((stage, index) => {
                const isActive = activeStage === stage.key;
                return (
                  <div className="flex items-center gap-2 md:block" key={stage.key}>
                    <button
                      aria-pressed={isActive}
                      className={`group flex w-full items-center gap-3 rounded-[16px] border p-4 text-left transition-all hover:-translate-y-0.5 md:h-full md:flex-col md:items-start ${stageClasses(
                        stage.color,
                        isActive
                      )}`}
                      onClick={() => setActiveStage(stage.key)}
                      type="button"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/85 shadow-xs">
                        <StageIcon stageKey={stage.key} />
                      </span>
                      <div>
                        <span className="block text-[12px] font-black">{stage.label}</span>
                        <span className="mt-0.5 block text-[10px] font-semibold opacity-70">
                          Step {index + 1}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[22px] border border-[#d7e3f0] bg-white p-6 shadow-[0_12px_28px_rgba(20,36,61,0.06)] sm:p-8">
              <div className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#64748B]">
                    {activeStageMeta.key} · AI GUIDANCE
                  </p>
                  <h3 className="mt-1 text-[20px] font-black tracking-[-0.04em] text-[#14243D]">
                    {activeStageMeta.detail}
                  </h3>
                </div>
                <span className={`self-start sm:self-auto rounded-full px-3 py-1 text-[10px] font-extrabold ${stageClasses(activeStageMeta.color, true)}`}>
                  Real AI Plan
                </span>
              </div>

              <div className="mt-6">
                {activeStage === "Goal" && (
                  <div className="rounded-2xl border border-[#ffe1d6] bg-[#fff8f5] p-6">
                    <span className="inline-block rounded-md bg-[#FD4322] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                      Target Destination
                    </span>
                    <h4 className="mt-3 text-[22px] font-black text-[#14243D]">
                      {careerPlan.goal}
                    </h4>
                    <p className="mt-2 text-[14px] leading-7 text-slate-700">
                      {careerPlan.summary}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-[#f8d6ca] pt-5">
                      <div className="rounded-xl bg-white p-3 border border-[#f8d6ca]">
                        <p className="text-[18px] font-black text-[#FD4322]">{careerPlan.skills.length}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Skills</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-[#f8d6ca]">
                        <p className="text-[18px] font-black text-[#1255FF]">{careerPlan.learning.length}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Courses</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-[#f8d6ca]">
                        <p className="text-[18px] font-black text-[#16a36a]">{careerPlan.projects.length}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Projects</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-[#f8d6ca]">
                        <p className="text-[18px] font-black text-[#FF7F07]">{careerPlan.credentials.length}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Credentials</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStage === "Skills" && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {careerPlan.skills.map((skill, idx) => {
                      const priorityStyles: Record<string, { bg: string; text: string }> = {
                        high: { bg: "bg-[#fef08a]", text: "text-[#991b1b]" },
                        medium: { bg: "bg-[#dbeafe]", text: "text-[#1e40af]" },
                        low: { bg: "bg-[#eaf8f1]", text: "text-[#128455]" },
                      };
                      const pill = priorityStyles[skill.priority] || priorityStyles.medium;
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-[#e3eaf1] bg-[#f8fafc] p-4 transition-all hover:border-[#cfe0fb] hover:bg-white"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-[13px] font-extrabold text-[#14243D]">
                              {skill.name}
                            </h4>
                            <span className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase ${pill.bg} ${pill.text}`}>
                              {skill.priority}
                            </span>
                          </div>
                          <p className="mt-2 text-[11px] leading-5 text-slate-600">
                            {skill.reason}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeStage === "Learning" && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {careerPlan.learning.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#e3eaf1] bg-[#f8fafc] p-4 transition-all hover:border-[#f5dfb0] hover:bg-white"
                      >
                        <span className="inline-block rounded-md bg-[#fff8dd] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#b65d00]">
                          Curriculum
                        </span>
                        <h4 className="mt-2 text-[13px] font-extrabold text-[#14243D]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[11px] leading-5 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStage === "Build Skills" && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {careerPlan.projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#e3eaf1] bg-[#f8fafc] p-4 transition-all hover:border-[#c9ead9] hover:bg-white"
                      >
                        <span className="inline-block rounded-md bg-[#eaf8f1] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#128455]">
                          Portfolio Project
                        </span>
                        <h4 className="mt-2 text-[13px] font-extrabold text-[#14243D]">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-[11px] leading-5 text-slate-600">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStage === "Prove" && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {careerPlan.credentials.map((credential, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#e3eaf1] bg-[#f8fafc] p-4 transition-all hover:border-[#f5e4b8] hover:bg-white"
                      >
                        <span className="inline-block rounded-md bg-[#fff8dd] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#9a7000]">
                          Certification
                        </span>
                        <h4 className="mt-2 text-[13px] font-extrabold text-[#14243D]">
                          {credential.title}
                        </h4>
                        <p className="mt-2 text-[11px] leading-5 text-slate-600">
                          {credential.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStage === "Opportunities" && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {careerPlan.opportunities.map((opp, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#e3eaf1] bg-[#f8fafc] p-4 transition-all hover:border-[#cfe0fb] hover:bg-white"
                      >
                        <span className="inline-block rounded-md bg-[#eef5ff] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#1255FF]">
                          {opp.type || "Opportunity"}
                        </span>
                        <h4 className="mt-2 text-[13px] font-extrabold text-[#14243D]">
                          {opp.title}
                        </h4>
                        <p className="mt-2 text-[11px] leading-5 text-slate-600">
                          {opp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
