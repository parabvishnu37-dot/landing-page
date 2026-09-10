export default function FinalCTA() {
  return (
    <section className="bg-[#f4f7fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" id="get-started">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[22px] bg-[#17263d] px-6 py-16 text-center shadow-[0_14px_30px_rgba(23,38,61,0.13)] sm:px-12 sm:py-20">
        <div className="absolute -left-20 -top-28 h-64 w-64 rounded-full bg-[#29445c]/45 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-[#ff5a36]/12 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-[680px]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ffb800]">YOUR NEXT STEP STARTS HERE</p>
          <h2 className="mt-5 text-[clamp(2.35rem,4.5vw,4rem)] font-black leading-[1] tracking-[-0.07em] text-white">Your next opportunity starts here.</h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-7 text-[#c6d1dc] sm:text-[16px]">Build your profile, discover opportunities and take your next step with SOLO.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5a36] px-7 text-sm font-extrabold text-white shadow-[0_8px_16px_rgba(255,90,54,0.2)] transition-transform hover:-translate-y-0.5" href="#skill-match">Get Started <span className="ml-3 text-lg leading-none">&rarr;</span></a><a className="inline-flex h-12 items-center justify-center rounded-xl border border-[#7890a4] bg-white/5 px-7 text-sm font-extrabold text-white transition-colors hover:border-[#ffad91] hover:bg-white/10" href="#opportunities">Explore Opportunities</a></div>
        </div>
      </div>
    </section>
  );
}