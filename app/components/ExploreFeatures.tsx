"use client";

import { useCareerPlan } from "@/app/context/CareerContext";

export default function ExploreFeatures() {
  const { openCopilot } = useCareerPlan();

  return (
    <section id="explore" className="border-t border-[#e8eef3] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[650px] text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FD4322]">
            INTERACTIVE TOOLS
          </p>
          <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.75rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#14243D]">
            Want to explore SOLO?
          </h2>
          <p className="mt-3 text-[16px] text-[#5A6B82]">
            Try our interactive tools below and preview how SOLO powers your career decisions.
          </p>
        </div>

        {/* Three Cards Only */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Card 1: Career Path Explorer */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e3eaf1] bg-[#F7F9FC] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#d0dbe7] hover:bg-white hover:shadow-lg">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#cfe0fb] bg-[#eef5ff] text-[#1255FF] shadow-xs">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689A1.125 1.125 0 0 0 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>

              <h3 className="mt-5 text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
                CAREER PATH EXPLORER
              </h3>

              <p className="mt-2.5 text-[14px] leading-relaxed text-[#5A6B82]">
                Choose a career goal and explore a possible path.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#career-explorer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#cfe0fb] bg-white py-3 text-[13px] font-extrabold text-[#1255FF] shadow-xs transition-all hover:border-[#1255FF] hover:bg-[#1255FF] hover:text-white"
              >
                Explore Career Path →
              </a>
            </div>
          </div>

          {/* Card 2: Skill Match */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e3eaf1] bg-[#F7F9FC] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#d0dbe7] hover:bg-white hover:shadow-lg">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f8d1c6] bg-[#fff1ec] text-[#FD4322] shadow-xs">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
              </div>

              <h3 className="mt-5 text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
                SKILL MATCH
              </h3>

              <p className="mt-2.5 text-[14px] leading-relaxed text-[#5A6B82]">
                See how your skills compare with an opportunity.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#skill-match"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#f8d1c6] bg-white py-3 text-[13px] font-extrabold text-[#FD4322] shadow-xs transition-all hover:border-[#FD4322] hover:bg-[#FD4322] hover:text-white"
              >
                Check Skill Match →
              </a>
            </div>
          </div>

          {/* Card 3: AI Career Copilot */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e3eaf1] bg-[#F7F9FC] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#d0dbe7] hover:bg-white hover:shadow-lg">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9ead9] bg-[#eaf8f1] text-[#128455] shadow-xs">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.25 4.75L18 9l-4.75 1.25L12 15l-1.25-4.75L6 9l4.75-1.25L12 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.5 14 .58 2.42L21.5 17l-.58 2.42L15.5 17l2.42-.58L18.5 14Z" />
                </svg>
              </div>

              <h3 className="mt-5 text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
                AI CAREER COPILOT
              </h3>

              <p className="mt-2.5 text-[14px] leading-relaxed text-[#5A6B82]">
                Ask SOLO for guidance on your next career step.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => openCopilot("Hi! Can you give me guidance on my next career step?")}
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#c9ead9] bg-white py-3 text-[13px] font-extrabold text-[#128455] shadow-xs transition-all hover:border-[#128455] hover:bg-[#128455] hover:text-white"
              >
                Ask SOLO AI →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
