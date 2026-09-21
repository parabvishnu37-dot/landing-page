import Image from "next/image";

export default function SoloFeatures() {
  const pipeline = [
    { label: "LEARN", color: "text-[#1255FF]", bg: "bg-[#eef5ff]", border: "border-[#cfe0fb]" },
    { label: "BUILD", color: "text-[#FD4322]", bg: "bg-[#fff1ec]", border: "border-[#f8d1c6]" },
    { label: "PROVE", color: "text-[#b65d00]", bg: "bg-[#fff8dd]", border: "border-[#f5dfb0]" },
    { label: "GROW", color: "text-[#7C5CFC]", bg: "bg-[#f4f0ff]", border: "border-[#ded4fb]" },
    { label: "OPPORTUNITIES", color: "text-[#128455]", bg: "bg-[#eaf8f1]", border: "border-[#c9ead9]" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#e8eef3] bg-white py-20 sm:py-28">
      {/* Ambient background blur */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1255FF]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            CONNECTED ECOSYSTEM
          </div>

          <h2 className="mt-3 text-[clamp(2.1rem,3.8vw,3.1rem)] font-black leading-[1.1] tracking-[-0.045em] text-[#14243D]">
            From skills to opportunities.
          </h2>

          <p className="mt-3 text-[16px] leading-relaxed text-[#5A6B82]">
            Everything works together to help learners move forward.
          </p>
        </div>

        {/* Central Visual Flow: LEARN → BUILD → PROVE → GROW → OPPORTUNITIES */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {pipeline.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-3">
              <span
                className={`rounded-xl border px-3.5 py-1.5 text-[11px] font-black tracking-wider shadow-xs ${step.border} ${step.bg} ${step.color}`}
              >
                {step.label}
              </span>
              {index < pipeline.length - 1 && (
                <span className="text-sm font-black text-[#94a3b8] sm:text-base">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Bento-Style Composition with Cropped Real Platform Previews */}
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {/* 1. Large Card: Learning & Pathways (7 Cols on Desktop) */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-[#F7F9FC] p-6 shadow-xs transition-all duration-300 hover:border-[#b9cede] hover:shadow-md md:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#cfe0fb] bg-[#eef5ff] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1255FF]">
                  01 · LEARN
                </span>
                <span className="text-[11px] font-semibold text-[#64748B]">Visual Pathway</span>
              </div>

              <h3 className="mt-3 text-[20px] font-black tracking-tight text-[#14243D]">
                Connected Career Pathways
              </h3>
              <p className="mt-1 text-[13px] text-[#5A6B82]">
                Visual milestone graph connecting courses, frameworks, and capstone projects.
              </p>
            </div>

            {/* Cropped UI Preview: Career Pathway Nodes */}
            <div className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl border border-[#dbe6f1] bg-white shadow-xs">
              <Image
                src="/screenshots/career-pathway.png"
                alt="Cropped preview of SOLO career pathway milestone nodes"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-3">
                <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#14243D] shadow-xs backdrop-blur-xs">
                  Node milestones with progressive badge unlocks
                </span>
              </div>
            </div>
          </div>

          {/* 2. Small Card: Live Projects & Experience (5 Cols on Desktop) */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-[#F7F9FC] p-6 shadow-xs transition-all duration-300 hover:border-[#b9cede] hover:shadow-md md:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#FD4322]">
                  02 · BUILD
                </span>
                <span className="text-[11px] font-semibold text-[#64748B]">Real Experience</span>
              </div>

              <h3 className="mt-3 text-[19px] font-black tracking-tight text-[#14243D]">
                Live Projects & Sprints
              </h3>
              <p className="mt-1 text-[13px] text-[#5A6B82]">
                Industry challenges from SPARK+ and IBM SkillsBuild.
              </p>
            </div>

            {/* Cropped UI Preview: Live Projects */}
            <div className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl border border-[#dbe6f1] bg-white shadow-xs">
              <Image
                src="/screenshots/live-projects.png"
                alt="Cropped preview of SOLO live project cards"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-3">
                <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#14243D] shadow-xs backdrop-blur-xs">
                  Virtual · 500h & short sprint formats
                </span>
              </div>
            </div>
          </div>

          {/* 3. Small Card: Credential Wallet (5 Cols on Desktop) */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-[#F7F9FC] p-6 shadow-xs transition-all duration-300 hover:border-[#b9cede] hover:shadow-md md:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#f5dfb0] bg-[#fff8dd] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#b65d00]">
                  03 · PROVE
                </span>
                <span className="text-[11px] font-semibold text-[#64748B]">Wallet & CLR</span>
              </div>

              <h3 className="mt-3 text-[19px] font-black tracking-tight text-[#14243D]">
                Credential Wallet
              </h3>
              <p className="mt-1 text-[13px] text-[#5A6B82]">
                Verifiable 1EdTech Open Badges & Comprehensive Learner Records.
              </p>
            </div>

            {/* Cropped UI Preview: Credential Wallet Badges */}
            <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl border border-[#dbe6f1] bg-white shadow-xs">
              <Image
                src="/screenshots/credential-wallet.png"
                alt="Cropped preview of SOLO credential wallet"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-3">
                <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#14243D] shadow-xs backdrop-blur-xs">
                  Issue CLR & verify skills
                </span>
              </div>
            </div>
          </div>

          {/* 4. Large Card: Profile, Acquired Skills & Resume (7 Cols on Desktop) */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-[#F7F9FC] p-6 shadow-xs transition-all duration-300 hover:border-[#b9cede] hover:shadow-md md:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#ded4fb] bg-[#f4f0ff] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#7C5CFC]">
                  04 · GROW
                </span>
                <span className="text-[11px] font-semibold text-[#64748B]">Profile & Resume</span>
              </div>

              <h3 className="mt-3 text-[20px] font-black tracking-tight text-[#14243D]">
                Unified Profile & ATS Resume
              </h3>
              <p className="mt-1 text-[13px] text-[#5A6B82]">
                Your acquired skills, credentials, and achievements automatically converted to an ATS-ready resume.
              </p>
            </div>

            {/* Cropped UI Preview: Learner Profile & Skills */}
            <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl border border-[#dbe6f1] bg-white shadow-xs">
              <Image
                src="/screenshots/learner-profile.png"
                alt="Cropped preview of SOLO learner profile with resume generation"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-3">
                <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#14243D] shadow-xs backdrop-blur-xs">
                  One-click Generate Resume & Acquired Skill verification
                </span>
              </div>
            </div>
          </div>

          {/* 5. Full-Width Wide Card: Opportunities Ecosystem (12 Cols) */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-[#F7F9FC] p-6 shadow-xs transition-all duration-300 hover:border-[#b9cede] hover:shadow-md md:col-span-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="rounded-full border border-[#c9ead9] bg-[#eaf8f1] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#128455]">
                  05 · OPPORTUNITIES
                </span>
                <h3 className="mt-2 text-[20px] font-black tracking-tight text-[#14243D]">
                  Curated Employer Opportunities
                </h3>
              </div>
              <p className="max-w-[500px] text-[13px] text-[#5A6B82]">
                Internships, hackathons, and entry roles matched directly to your verified credential portfolio.
              </p>
            </div>

            {/* Cropped UI Preview: Opportunities Explorer */}
            <div className="relative mt-6 h-60 w-full overflow-hidden rounded-2xl border border-[#dbe6f1] bg-white shadow-xs">
              <Image
                src="/screenshots/opportunities-explore.png"
                alt="Cropped preview of SOLO opportunities listings"
                fill
                sizes="100vw"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-3.5">
                <span className="rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-bold text-[#14243D] shadow-xs backdrop-blur-xs">
                  Filter by cost, mode (Virtual/Onsite), source (SOLO/Employer), and specific acquired skills
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
