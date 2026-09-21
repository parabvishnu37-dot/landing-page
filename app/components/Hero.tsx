import Image from "next/image";

function SkillTag({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "orange" | "green" | "gold";
}) {
  const styles = {
    blue: "border border-[#cfe0fb] bg-[#eef5ff] text-[#1255FF]",
    orange: "border border-[#f8d1c6] bg-[#fff1ec] text-[#FD4322]",
    gold: "border border-[#f5dfb0] bg-[#fff8dd] text-[#b65d00]",
    green: "border border-[#c9ead9] bg-[#eaf8f1] text-[#16a36a]",
  };
  return (
    <span className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${styles[tone]}`}>
      {children}
    </span>
  );
}

function ProductPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-[560px] lg:mr-0"
      aria-label="Product preview of the SOLO platform"
    >
      {/* Subtle ambient backglow */}
      <div
        className="pointer-events-none absolute -right-6 top-8 h-44 w-44 rounded-full bg-[#FD4322]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-6 left-6 h-44 w-44 rounded-full bg-[#1255FF]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Single Clean Preview Card */}
      <div className="relative overflow-hidden rounded-[24px] border border-[#dbe6f1] bg-white p-4 shadow-[0_20px_50px_rgba(20,36,61,0.08)] sm:p-6">
        {/* Window Chrome */}
        <div className="flex items-center justify-between border-b border-[#e8eef3] pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[11px] font-bold text-[#64748B]">
              SOLO Platform
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8f1] px-2.5 py-0.5 text-[10px] font-extrabold text-[#128455]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a36a]" />
            Active Track
          </span>
        </div>

        {/* Card Body */}
        <div className="mt-4 space-y-4">
          {/* Track Header & Readiness */}
          <div className="flex flex-col gap-4 rounded-2xl border border-[#e3eaf1] bg-[#F7F9FC] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#64748B]">
                Current Pathway
              </p>
              <h3 className="mt-1 text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
                Product Design & AI
              </h3>
              <p className="mt-1 text-[12px] text-[#64748B]">
                Learning · Projects · Verified Credentials
              </p>
            </div>

            {/* Circular Gauge */}
            <div className="flex items-center gap-3 self-start sm:self-center">
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
                <span className="absolute inset-0 flex items-center justify-center text-[12px] font-black text-[#14243D]">
                  84%
                </span>
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-[#14243D]">Career Readiness</p>
                <p className="text-[10px] font-medium text-[#16a36a]">On Track</p>
              </div>
            </div>
          </div>

          {/* Verified Skills */}
          <div className="rounded-2xl border border-[#e3eaf1] bg-white p-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#64748B]">
              Verified Skills & Evidence
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <SkillTag tone="blue">UX Research</SkillTag>
              <SkillTag tone="orange">Design Systems</SkillTag>
              <SkillTag tone="green">Interactive Prototyping</SkillTag>
              <SkillTag tone="gold">AI Integration</SkillTag>
            </div>
          </div>

          {/* Milestone Banner */}
          <div className="flex items-center justify-between rounded-xl border border-[#f8d1c6] bg-[#fff8f5] px-4 py-3">
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#FD4322]">
                Next Opportunity
              </p>
              <p className="mt-0.5 text-[12px] font-bold text-[#14243D]">
                Associate Product Designer · 92% Match
              </p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FD4322] text-xs font-bold text-white shadow-xs">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F7F9FC]">
      {/* Background Graphic */}
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-50"
        fill
        priority
        sizes="100vw"
        src="/assets/hero-background.png"
      />

      {/* Subtle Glows */}
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-[#1255FF]/8 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-12 h-80 w-80 rounded-full bg-[#FD4322]/8 blur-[100px]"
        aria-hidden="true"
      />

      {/* Main Grid */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-68px)] max-w-[1200px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Left Column */}
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            THE CAREER CONNECT PLATFORM
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.75rem,4.6vw,4.25rem)] font-black leading-[1.05] tracking-[-0.05em] text-[#14243D]">
            Your skills. <br />
            Your path. <br />
            <span className="text-[#FD4322]">Your future.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.7] text-[#5A6B82] sm:text-[17px]">
            SOLO helps you learn skills, gain real experience, prove what you can do, and discover opportunities for your career.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#FD4322] px-7 text-[14px] font-extrabold text-white shadow-[0_6px_18px_rgba(253,67,34,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[#d7e3f0] bg-white px-7 text-[14px] font-bold text-[#14243D] shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#FD4322] hover:text-[#FD4322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2"
            >
              See How SOLO Works
            </a>
          </div>
        </div>

        {/* Right Column: Single Product Preview */}
        <ProductPreview />
      </div>
    </section>
  );
}