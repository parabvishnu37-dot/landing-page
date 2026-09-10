export default function PlatformFeatures() {
  return (
    <section
      className="relative overflow-hidden bg-[#F5F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="platform-capabilities"
    >
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#1255FF]/5 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-[#FD4322]/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            WHAT YOU CAN DO WITH SOLO
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.75rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
            One place to build your career story.
          </h2>

          <p className="mx-auto mt-4 max-w-[660px] text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
            From learning and building skills to earning credentials and finding opportunities, SOLO brings your career journey together in one place.
          </p>
        </div>

        {/* Bento Grid of 8 Real Platform Capabilities */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Card 1: Learning & Pathways (Large / 7 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1255FF]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#eef5ff] px-2.5 py-1 text-[11px] font-extrabold text-[#1255FF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1255FF]" />
                  Learning & Pathways
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#1255FF]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-black tracking-[-0.03em] text-[#14243D]">
                Structured pathways connected to career goals.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">
                Follow structured pathways and discover learning that connects to your goals.
              </p>
            </div>

            {/* Visual: Learning Progress & Course Card */}
            <div className="mt-6 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e8f0] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eef5ff] text-[10px] font-bold text-[#1255FF]">
                    📖
                  </span>
                  <span className="text-[12px] font-extrabold text-[#14243D]">Full-Stack Systems Pathway</span>
                </div>
                <span className="rounded-full bg-[#eef5ff] px-2 py-0.5 text-[10px] font-black text-[#1255FF]">
                  67% Completed
                </span>
              </div>

              {/* Pathway Steps */}
              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-[#64748B]">
                <span className="text-[#1255FF]">01 Foundations ✓</span>
                <span className="text-[#94a3b8]">→</span>
                <span className="text-[#1255FF]">02 Architecture (Active)</span>
                <span className="text-[#94a3b8]">→</span>
                <span className="text-[#94a3b8]">03 Advanced APIs</span>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-2 w-full rounded-full bg-[#e2e8f0]">
                <div className="h-full w-2/3 rounded-full bg-[#1255FF]" />
              </div>
            </div>
          </div>

          {/* Card 2: Opportunities (Medium / 5 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FD4322]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#fff1ec] px-2.5 py-1 text-[11px] font-extrabold text-[#FD4322]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" />
                  Opportunities
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#FD4322]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-black tracking-[-0.03em] text-[#14243D]">
                Opportunities aligned to your growth.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">
                Explore courses, internships, live projects, hackathons, jobs, career pathways and volunteering.
              </p>
            </div>

            {/* Visual: Mini Opportunity Cards */}
            <div className="mt-6 space-y-2 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-3.5">
              <div className="flex items-center justify-between rounded-xl border border-[#e3eaf1] bg-white p-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#fff1ec] text-[10px] font-black text-[#FD4322]">
                    A
                  </span>
                  <div>
                    <p className="text-[11px] font-bold text-[#14243D]">UX Designer · Remote</p>
                    <p className="text-[9px] text-[#64748B]">Airbnb · Full-time</p>
                  </div>
                </div>
                <span className="rounded bg-[#fff1ec] px-1.5 py-0.5 text-[9px] font-extrabold text-[#FD4322]">
                  94% Match
                </span>
              </div>

              <div className="flex flex-wrap gap-1 pt-1 text-[9px] font-bold text-[#64748B]">
                <span className="rounded bg-white px-2 py-0.5 border border-[#e2e8f0]">Internships</span>
                <span className="rounded bg-white px-2 py-0.5 border border-[#e2e8f0]">Live Projects</span>
                <span className="rounded bg-white px-2 py-0.5 border border-[#e2e8f0]">Volunteering</span>
              </div>
            </div>
          </div>

          {/* Card 3: Skills (4 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7F07]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#fff8dd] px-2.5 py-1 text-[11px] font-extrabold text-[#b65d00]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F07]" />
                  Skills
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#FF7F07]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-black tracking-[-0.03em] text-[#14243D]">
                Build, organize & communicate skills.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                Build, organize and communicate the skills you are developing.
              </p>
            </div>

            {/* Visual: Skill Chips with Levels */}
            <div className="mt-5 space-y-2 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-3.5">
              <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 text-[11px]">
                <span className="font-bold text-[#14243D]">TypeScript</span>
                <span className="text-[10px] font-extrabold text-[#FF7F07]">Level 3 · Proficient</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 text-[11px]">
                <span className="font-bold text-[#14243D]">React Architecture</span>
                <span className="text-[10px] font-extrabold text-[#1255FF]">Level 4 · Advanced</span>
              </div>
              <p className="text-center text-[10px] font-bold text-[#64748B] pt-0.5">
                14 Total Verified Competencies
              </p>
            </div>
          </div>

          {/* Card 4: Credentials (4 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB800]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#fff8dd] px-2.5 py-1 text-[11px] font-extrabold text-[#9a7000]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                  Credentials
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#FFB800]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-black tracking-[-0.03em] text-[#14243D]">
                Earn & share verified credentials.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                Earn, manage and share credentials that recognize your achievements.
              </p>
            </div>

            {/* Visual: Verified Credential Card */}
            <div className="mt-5 rounded-2xl border border-[#f5dfb0] bg-gradient-to-br from-white to-[#fffcf5] p-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff8dd] text-sm text-[#FF7F07]">
                  ★
                </div>
                <div>
                  <span className="rounded bg-[#fff8dd] px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-[#b65d00]">
                    Verified Badge
                  </span>
                  <p className="text-[11px] font-black text-[#14243D]">Frontend Systems Specialist</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-[#fbf3db] pt-2 text-[9px] font-bold text-[#64748B]">
                <span>SOLO Registry Validated</span>
                <span className="text-[#16a36a]">Active Status ✓</span>
              </div>
            </div>
          </div>

          {/* Card 5: Evidence (4 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#16A36A]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#eaf8f1] px-2.5 py-1 text-[11px] font-extrabold text-[#128455]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16A36A]" />
                  Evidence
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#16A36A]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-black tracking-[-0.03em] text-[#14243D]">
                Connect skills to real work proof.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                Connect your learning and skills to projects, completion evidence and real work.
              </p>
            </div>

            {/* Visual: Skill -> Project -> Evidence */}
            <div className="mt-5 rounded-2xl border border-[#c9ead9] bg-[#fbfdfc] p-3.5">
              <div className="flex items-center justify-between text-[10px] font-extrabold text-[#14243D]">
                <span className="rounded bg-[#eef5ff] px-2 py-0.5 text-[#1255FF]">Skill</span>
                <span className="text-[#94a3b8]">→</span>
                <span className="rounded bg-[#fff1ec] px-2 py-0.5 text-[#FD4322]">Project</span>
                <span className="text-[#94a3b8]">→</span>
                <span className="rounded bg-[#eaf8f1] px-2 py-0.5 text-[#16a36a]">Evidence</span>
              </div>
              <div className="mt-2.5 rounded-lg bg-white p-2 border border-[#e8f5ee] text-[10px] font-semibold text-[#14243D]">
                <span>✓ Code Reviewed</span> · <span>Live Demo Verified</span>
              </div>
            </div>
          </div>

          {/* Card 6: Skill-Gap Analysis (5 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1255FF]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#eef5ff] px-2.5 py-1 text-[11px] font-extrabold text-[#1255FF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1255FF]" />
                  Skill-Gap Analysis
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#1255FF]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-black tracking-[-0.03em] text-[#14243D]">
                Compare your skills with career goals.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">
                Compare your skills with career requirements and see what you can improve.
              </p>
            </div>

            {/* Visual: Skill Match Gauge & Breakdown */}
            <div className="mt-5 space-y-2 rounded-2xl border border-[#e8eef5] bg-[#F5F8FC] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#14243D]">Target: Full-Stack Engineer</span>
                <span className="rounded-full bg-[#eef5ff] px-2 py-0.5 text-[10px] font-black text-[#1255FF]">
                  88% Match
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-bold">
                <div className="rounded-lg bg-[#eaf8f1] p-1.5 text-[#128455]">
                  <p className="font-extrabold">6 Matched</p>
                  <p className="text-[8px] opacity-80">React, TS, CSS</p>
                </div>
                <div className="rounded-lg bg-[#fff8dd] p-1.5 text-[#b65d00]">
                  <p className="font-extrabold">2 Developing</p>
                  <p className="text-[8px] opacity-80">GraphQL, Tests</p>
                </div>
                <div className="rounded-lg bg-[#eef5ff] p-1.5 text-[#1255FF]">
                  <p className="font-extrabold">1 Missing</p>
                  <p className="text-[8px] opacity-80">CI/CD Ops</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7: Resume (4 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EB5038]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#fff5f5] px-2.5 py-1 text-[11px] font-extrabold text-[#EB5038]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EB5038]" />
                  Resume
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#EB5038]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-black tracking-[-0.03em] text-[#14243D]">
                ATS-ready resume generation.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                Turn your profile information into an ATS-ready professional resume.
              </p>
            </div>

            {/* Visual: Resume Preview & Template Selector */}
            <div className="mt-5 rounded-2xl border border-[#fed7d7] bg-[#fffaf9] p-3.5">
              <div className="flex items-center justify-between border-b border-[#fee2e2] pb-2">
                <span className="text-[10px] font-extrabold text-[#14243D]">ATS Tech Template</span>
                <span className="rounded bg-white px-2 py-0.5 text-[9px] font-bold text-[#EB5038] border border-[#fed7d7]">
                  Export PDF ⤓
                </span>
              </div>
              <div className="mt-2 space-y-1 text-[9px] text-[#64748B]">
                <p className="font-extrabold text-[#14243D]">Alex Chen · Software Engineer</p>
                <p>14 Verified Skills • 3 Credentials • 4 Projects</p>
              </div>
            </div>
          </div>

          {/* Card 8: Community (3 cols) */}
          <div className="group flex flex-col justify-between rounded-[24px] border border-[#dbe6f1] bg-white p-6 shadow-[0_8px_24px_rgba(20,36,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFC]/40 hover:shadow-[0_16px_36px_rgba(20,36,61,0.08)] sm:p-7 lg:col-span-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#f5f2ff] px-2.5 py-1 text-[11px] font-extrabold text-[#7C5CFC]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
                  Community
                </span>
                <span className="text-xs text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#7C5CFC]">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-black tracking-[-0.03em] text-[#14243D]">
                Connect with peer learners.
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                Discover other learners and connect through posts, likes, comments, sharing and following.
              </p>
            </div>

            {/* Visual: Mini Feed Post */}
            <div className="mt-5 rounded-2xl border border-[#ede9fe] bg-[#faf8ff] p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7C5CFC] text-[9px] font-bold text-white">
                  SK
                </span>
                <span className="text-[10px] font-bold text-[#14243D]">Sarah K.</span>
              </div>
              <p className="mt-1.5 text-[9px] text-[#64748B] line-clamp-1">
                Completed Full-Stack Systems Pathway! 🚀
              </p>
              <div className="mt-2 flex items-center gap-3 border-t border-[#ede9fe] pt-1.5 text-[9px] font-bold text-[#7C5CFC]">
                <span>♥ 24</span>
                <span>💬 8</span>
                <span>↗ Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
