export default function WhatYouCanDo() {
  const cards = [
    {
      title: "Discover",
      desc: "Find learning, pathways, and opportunities.",
      color: "text-[#1255FF]",
      bg: "bg-[#eef5ff]",
      border: "border-[#cfe0fb]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Learn",
      desc: "Build the skills your goals require.",
      color: "text-[#FD4322]",
      bg: "bg-[#fff1ec]",
      border: "border-[#f8d1c6]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Build",
      desc: "Turn learning into projects and experience.",
      color: "text-[#16a36a]",
      bg: "bg-[#eaf8f1]",
      border: "border-[#c9ead9]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 1 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4z" />
        </svg>
      ),
    },
    {
      title: "Prove",
      desc: "Earn credentials and create evidence of your abilities.",
      color: "text-[#b65d00]",
      bg: "bg-[#fff8dd]",
      border: "border-[#f5dfb0]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      title: "Grow",
      desc: "Understand skill gaps and improve your readiness.",
      color: "text-[#7C5CFC]",
      bg: "bg-[#f4f0ff]",
      border: "border-[#ded4fb]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: "Showcase",
      desc: "Bring your skills and achievements together.",
      color: "text-[#EB5038]",
      bg: "bg-[#fff5f5]",
      border: "border-[#fed7d7]",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FD4322]">
            PLATFORM CAPABILITIES
          </p>
          <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.75rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#14243D]">
            What can you do with SOLO?
          </h2>
          <p className="mt-3 text-[16px] text-[#5A6B82]">
            One connected platform that supports your growth from your first skill to your next opportunity.
          </p>
        </div>

        {/* Simple 6-Card Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-[#e3eaf1] bg-white p-6 shadow-[0_4px_16px_rgba(20,36,61,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d0dbe7] hover:shadow-[0_12px_28px_rgba(20,36,61,0.07)]"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${card.border} ${card.bg} ${card.color} shadow-xs transition-transform group-hover:scale-105`}
                >
                  {card.icon}
                </div>
                <h3 className="text-[18px] font-black tracking-[-0.02em] text-[#14243D]">
                  {card.title}
                </h3>
              </div>

              <p className="mt-3.5 text-[14px] leading-relaxed text-[#5A6B82]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
