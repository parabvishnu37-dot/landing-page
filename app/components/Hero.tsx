import Image from "next/image";

function SkillTag({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "orange" | "green" | "gold" | "coral";
}) {
  const styles = {
    blue: "border border-[#cfe0fb] bg-[#eef5ff] text-[#1255FF]",
    orange: "border border-[#f8d1c6] bg-[#fff1ec] text-[#FD4322]",
    gold: "border border-[#f5dfb0] bg-[#fff8dd] text-[#b65d00]",
    coral: "border border-[#fed7d7] bg-[#fff5f5] text-[#EB5038]",
    green: "border border-[#c9ead9] bg-[#eaf8f1] text-[#16a36a]",
  };
  return (
    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold ${styles[tone]}`}>
      {children}
    </span>
  );
}

function DashboardPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-[630px] lg:mr-0"
      aria-label="Interactive product preview of the SOLO learner platform"
    >
      {/* Subtle ambient glows behind the preview */}
      <div
        className="absolute -right-8 top-8 h-48 w-48 rounded-full bg-[#FD4322]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 left-0 h-44 w-44 rounded-full bg-[#1255FF]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Badges */}
      <div className="absolute -left-6 top-14 z-20 hidden rounded-xl border border-[#cfe0fb] bg-white px-3.5 py-2.5 shadow-[0_12px_28px_rgba(20,36,61,0.12)] sm:block animate-bounce-slow">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#1255FF]">Verified</p>
        <p className="mt-0.5 text-[13px] font-black text-[#14243D]">+12 Skills</p>
      </div>

      <div className="absolute -bottom-5 right-6 z-20 hidden rounded-xl border border-[#c9ead9] bg-white px-3.5 py-2.5 shadow-[0_12px_28px_rgba(20,36,61,0.12)] sm:block">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#16a36a]">Best match</p>
        <p className="mt-0.5 text-[13px] font-black text-[#16a36a]">92% Match</p>
      </div>

      {/* Main Preview Container */}
      <div className="relative overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-white p-3 shadow-[0_20px_48px_rgba(20,36,61,0.1)] sm:p-4">
        {/* Window Chrome / Demo Indicator */}
        <div className="flex items-center justify-between border-b border-[#e8eef3] px-2 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
              <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-2 rounded-full bg-[#f1f5f9] px-2.5 py-0.5 text-[10px] font-bold text-[#64748B]">
              SOLO Platform Preview
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1ec] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322] animate-pulse" />
            Live Demo
          </span>
        </div>

        {/* Inner Dashboard Content */}
        <div className="grid gap-3 rounded-xl bg-[#F5F8FC] p-2.5 pt-3.5 sm:grid-cols-[1.05fr_0.95fr]">
          {/* Left Panel: Sample Learner Profile & Readiness */}
          <div className="rounded-2xl border border-[#e3eaf1] bg-white p-4 shadow-[0_4px_12px_rgba(20,36,61,0.03)] sm:p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#64748B]">
                  Sample Learner Track
                </p>
                <h3 className="mt-1 text-[17px] font-black tracking-[-0.03em] text-[#14243D]">
                  Product Design & AI
                </h3>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef5ff] text-[10px] font-black text-[#1255FF] ring-2 ring-[#cfe0fb]">
                AC
              </span>
            </div>

            {/* Gauge */}
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#e8eef3] bg-[#fbfcfd] p-3">
              <div className="relative h-14 w-14 flex-shrink-0">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 52 52">
                  <circle cx="26" cy="26" fill="none" r="21" stroke="#e3eaf1" strokeWidth="5" />
                  <circle
                    cx="26"
                    cy="26"
                    fill="none"
                    r="21"
                    stroke="#FD4322"
                    strokeDasharray="132"
                    strokeDashoffset="21"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-[#14243D]">
                  84%
                </span>
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-[#14243D]">Career readiness</p>
                <p className="mt-0.5 text-[9px] text-[#64748B]">On track for target roles</p>
              </div>
            </div>

            {/* Skills */}
            <p className="mb-2 mt-4 text-[9px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
              Verified Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              <SkillTag tone="blue">Product Design</SkillTag>
              <SkillTag tone="orange">UX Research</SkillTag>
              <SkillTag tone="gold">Design Systems</SkillTag>
              <SkillTag tone="coral">Prototyping</SkillTag>
            </div>
          </div>

          {/* Right Panel: Matched Opportunities */}
          <div className="rounded-2xl border border-[#e3eaf1] bg-white p-4 shadow-[0_4px_12px_rgba(20,36,61,0.03)] sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-extrabold text-[#14243D]">Matched Opportunities</p>
              <span className="text-[9px] font-bold text-[#FD4322]">Demo view</span>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {/* Opportunity 1 */}
              <div className="rounded-xl border border-[#e8eef3] p-3 transition-colors hover:border-[#FD4322]/40">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff1ec] text-[11px] font-black text-[#FD4322]">
                    A
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-extrabold text-[#14243D]">Associate Designer</p>
                    <p className="text-[8px] font-medium text-[#64748B]">Airbnb · Remote</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <SkillTag tone="orange">92% match</SkillTag>
                  <span className="text-[8px] font-semibold text-[#94a3b8]">Verified track</span>
                </div>
              </div>

              {/* Opportunity 2 */}
              <div className="rounded-xl border border-[#e8eef3] p-3 transition-colors hover:border-[#1255FF]/40">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf8f1] text-[11px] font-black text-[#16a36a]">
                    F
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-extrabold text-[#14243D]">UX Research Intern</p>
                    <p className="text-[8px] font-medium text-[#64748B]">Figma · New York</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <SkillTag tone="green">87% match</SkillTag>
                  <span className="text-[8px] font-semibold text-[#94a3b8]">Verified track</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner inside Preview */}
        <div className="mt-3 flex items-center justify-between rounded-xl border border-[#f8d1c6] bg-[#fff8f5] px-4 py-2.5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#FD4322]">Next milestone</p>
            <p className="mt-0.5 text-[11px] font-bold text-[#14243D]">Complete portfolio case study</p>
          </div>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FD4322] shadow-sm font-bold text-xs">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <main id="top" className="relative overflow-hidden bg-[#F5F8FC]">
      {/* Existing hero background image */}
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-60"
        fill
        priority
        sizes="100vw"
        src="/assets/hero-background.png"
      />

      {/* Subtle ambient glows and background shapes */}
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-[#1255FF]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-12 h-80 w-80 rounded-full bg-[#FD4322]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 top-8 h-64 w-64 rounded-full bg-[#eef5ff]/60 blur-3xl"
        aria-hidden="true"
      />

      {/* Hero Content Section */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-68px)] max-w-[1200px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:px-8 lg:py-24">
        {/* Left Column: Messaging & CTAs */}
        <div className="max-w-[580px]">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            YOUR SKILLS. YOUR PATH.
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.75rem,4.8vw,4.25rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#14243D]">
            Turn your skills into{" "}
            <span className="text-[#FD4322]">what&apos;s next.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[#5A6B82] sm:text-[17px]">
            SOLO helps you build skills, gain real experience, earn verified credentials, discover opportunities, and create a career story that grows with you.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#career-explorer"
              className="group inline-flex h-13 items-center justify-center rounded-xl bg-[#FD4322] px-7 text-[15px] font-extrabold text-white shadow-[0_8px_20px_rgba(253,67,34,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
            >
              Get Started{" "}
              <span className="ml-2.5 text-base transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#career-explorer"
              className="inline-flex h-13 items-center justify-center rounded-xl border border-[#d7e3f0] bg-white px-7 text-[15px] font-bold text-[#14243D] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FD4322] hover:text-[#FD4322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2"
            >
              Explore SOLO
            </a>
          </div>

          {/* Learner Social Proof */}
          <div className="mt-11 flex items-center gap-3.5">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#ffd6cc] text-[10px] font-bold text-[#c94524] shadow-sm">
                JM
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#cfe0fb] text-[10px] font-bold text-[#1255FF] shadow-sm">
                SK
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#fde6b3] text-[10px] font-bold text-[#b65d00] shadow-sm">
                RA
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#c9ead9] text-[10px] font-bold text-[#128455] shadow-sm">
                +
              </span>
            </div>
            <p className="text-[12px] leading-tight text-[#64748B]">
              <strong className="font-extrabold text-[#14243D]">12,000+ learners</strong>
              <br />
              <span>building their careers with SOLO</span>
            </p>
          </div>
        </div>

        {/* Right Column: Hero Visual Product Preview */}
        <DashboardPreview />
      </section>
    </main>
  );
}