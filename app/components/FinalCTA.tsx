export default function FinalCTA() {
  return (
    <section className="bg-[#F7F9FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8" id="get-started">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#14243D] px-6 py-16 text-center shadow-[0_20px_50px_rgba(20,36,61,0.18)] sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-28 h-64 w-64 rounded-full bg-[#1255FF]/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-[#FD4322]/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-[680px]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF7F07]">
            START WITH SOLO TODAY
          </p>
          <h2 className="mt-4 text-[clamp(2.3rem,4.2vw,3.6rem)] font-black leading-[1.05] tracking-[-0.05em] text-white">
            Ready to move from learning to opportunity?
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[16px] leading-[1.7] text-[#cfe0fb]">
            Learn what matters, build what you can do, prove your progress, and discover where your skills can take you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <a
              href="#career-explorer"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#FD4322] px-8 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(253,67,34,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c]"
            >
              Get Started →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              See How SOLO Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}