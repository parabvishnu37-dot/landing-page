import Image from "next/image";

function SoloDashboardMockup() {
  const communityPosts = [
    {
      name: "Aarav Mehta",
      initials: "AM",
      avatarBg: "bg-[#cfe0fb] text-[#1255FF]",
      time: "2h ago",
      text: "Just completed my first React & Redux project on SPARK+! Learned so much about state management.",
      likes: 18,
      comments: 4,
    },
    {
      name: "Priya Nair",
      initials: "PN",
      avatarBg: "bg-[#f8d1c6] text-[#FD4322]",
      time: "5h ago",
      text: "Excited to start my Product Design pathway on SOLO today. Targeting UX Internships next quarter!",
      likes: 24,
      comments: 7,
    },
    {
      name: "Rohan Deshmukh",
      initials: "RD",
      avatarBg: "bg-[#c9ead9] text-[#128455]",
      time: "1d ago",
      text: "Verified my Data Analytics badge on the Credential Wallet! Great milestone.",
      likes: 31,
      comments: 9,
    },
  ];

  const courses = [
    {
      title: "Google AI Tools Workshop",
      provider: "SOLO",
      providerBg: "bg-[#fff1ec] text-[#FD4322]",
      providerIcon: "G",
      skillsCount: "2 Skills",
      badge: "Free",
      duration: "4 Hours",
      mode: "Self-paced",
    },
    {
      title: "Data Analysis in Python",
      provider: "Political Computer Science",
      providerBg: "bg-[#eef5ff] text-[#1255FF]",
      providerIcon: "PY",
      skillsCount: "4 Skills",
      badge: "Free",
      duration: "12 Hours",
      mode: "Self-paced",
    },
    {
      title: "Perplexity AI Essentials",
      provider: "EDUTA",
      providerBg: "bg-[#f4f0ff] text-[#7C5CFC]",
      providerIcon: "AI",
      skillsCount: "3 Skills",
      badge: "Free",
      duration: "3 Hours",
      mode: "Online",
    },
    {
      title: "Prompt Engineering Foundations",
      provider: "SPARK+",
      providerBg: "bg-[#fff8dd] text-[#b65d00]",
      providerIcon: "S+",
      skillsCount: "5 Skills",
      badge: "Free",
      duration: "6 Hours",
      mode: "Hands-on",
    },
  ];

  const internships = [
    {
      title: "Frontend Development Intern",
      company: "TechNova Solutions",
      logo: "TN",
      logoBg: "bg-[#eef5ff] text-[#1255FF]",
      skills: ["React", "Next.js", "TypeScript"],
      mode: "Remote",
      duration: "3 Months",
      type: "Paid",
    },
    {
      title: "Product Management Intern",
      company: "InnovateX",
      logo: "IX",
      logoBg: "bg-[#fff1ec] text-[#FD4322]",
      skills: ["Strategy", "Analytics", "Research"],
      mode: "Hybrid",
      duration: "6 Months",
      type: "Stipend",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      {/* Subtle ambient decorative backglows */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full bg-[#1255FF]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-[#FD4322]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Top Callout Badge */}
      <div className="absolute -top-3.5 right-6 z-20 hidden rounded-full border border-[#cfe0fb] bg-white/95 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#1255FF] shadow-[0_6px_16px_rgba(20,36,61,0.08)] backdrop-blur-md sm:inline-flex sm:items-center sm:gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1255FF] animate-pulse" />
        YOUR LEARNING JOURNEY, IN ONE PLACE.
      </div>

      {/* Floating Bottom Callout Badge */}
      <div className="absolute -bottom-3.5 left-6 z-20 hidden rounded-full border border-[#f8d1c6] bg-white/95 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FD4322] shadow-[0_6px_16px_rgba(20,36,61,0.08)] backdrop-blur-md sm:inline-flex sm:items-center sm:gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" />
        REAL OPPORTUNITIES. REAL GROWTH.
      </div>

      {/* Main Browser Mockup Card */}
      <div className="relative overflow-hidden rounded-[22px] border border-[#dbe6f1] bg-white shadow-[0_24px_60px_rgba(20,36,61,0.12)] transition-all">
        {/* 1. Browser Chrome Header Bar */}
        <div className="flex items-center justify-between border-b border-[#e8eef3] bg-[#f8fafc] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 rounded-md border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B]">
              SOLO Platform Preview
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8f1] px-2.5 py-0.5 text-[10px] font-extrabold text-[#128455]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a36a]" />
            Live Ecosystem
          </span>
        </div>

        {/* 2. Mockup Navigation Bar (Recreating SOLO Header) */}
        <div className="flex items-center justify-between border-b border-[#e8eef3] bg-white px-4 py-2.5 sm:px-5">
          {/* Logo & Links */}
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-black tracking-tight text-[#14243D]">
                SOLO<span className="text-[#FD4322]">.</span>
              </span>
            </div>

            <nav className="hidden items-center gap-4 text-[12px] font-bold text-[#64748B] sm:flex" aria-label="Mockup navigation">
              <span className="cursor-pointer transition-colors hover:text-[#14243D]">Dashboard</span>
              <span className="border-b-2 border-[#FD4322] pb-0.5 font-black text-[#FD4322]">Home</span>
              <span className="cursor-pointer transition-colors hover:text-[#14243D]">Create</span>
              <span className="cursor-pointer transition-colors hover:text-[#14243D]">Manage</span>
              <span className="cursor-pointer transition-colors hover:text-[#14243D]">Explore</span>
            </nav>
          </div>

          {/* Right Placeholder Demo Icons */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f8fafc] text-[11px] text-[#64748B] border border-[#e8eef3]">
              ?
            </span>
            <span className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-[#f8fafc] text-[11px] text-[#64748B] border border-[#e8eef3]">
              🔔
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#FD4322] text-[7px] font-bold text-white">
                3
              </span>
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f8fafc] text-[11px] text-[#64748B] border border-[#e8eef3]">
              ✉
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef5ff] border border-[#cfe0fb] text-[9px] font-black text-[#1255FF]">
              SP
            </span>
          </div>
        </div>

        {/* 3. Main Dashboard Body: 2-Column Layout */}
        <div className="bg-[#F5F8FC] p-3.5 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[250px_1fr]">
            {/* LEFT PANEL: Community Feed */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs sm:p-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-[13px] font-black text-[#14243D]">Community</h4>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16a36a]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#1255FF] hover:underline cursor-pointer">
                    See all →
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {communityPosts.map((post) => (
                    <div
                      key={post.name}
                      className="rounded-xl border border-[#e8eef3] bg-[#fbfcfd] p-2.5 text-left transition-colors hover:border-[#cfe0fb]"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-black ${post.avatarBg}`}
                        >
                          {post.initials}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[11px] font-extrabold text-[#14243D]">
                            {post.name}
                          </p>
                          <p className="text-[9px] text-[#94a3b8]">{post.time}</p>
                        </div>
                      </div>

                      <p className="mt-1.5 text-[10px] leading-relaxed text-[#5A6B82] line-clamp-2">
                        {post.text}
                      </p>

                      <div className="mt-2 flex items-center gap-3 border-t border-[#f1f5f9] pt-1.5 text-[9px] font-semibold text-[#94a3b8]">
                        <span className="hover:text-[#FD4322] cursor-pointer">♥ {post.likes}</span>
                        <span className="hover:text-[#1255FF] cursor-pointer">💬 {post.comments}</span>
                        <span className="hover:text-[#14243D] cursor-pointer">↗ Share</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-[#eef2f6] bg-[#f8fafc] p-2 text-center text-[10px] font-bold text-[#64748B]">
                Active Peer Discussions
              </div>
            </div>

            {/* RIGHT PANEL: Courses & Internships */}
            <div className="flex flex-col gap-4">
              {/* Courses Section */}
              <div className="rounded-2xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs sm:p-4">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] font-black text-[#14243D]">Courses</h4>
                    <span className="rounded-md bg-[#eef5ff] px-1.5 py-0.5 text-[9px] font-bold text-[#1255FF]">
                      Verified Learning
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#1255FF] hover:underline cursor-pointer">
                    See all →
                  </span>
                </div>

                {/* 2x2 Grid of Course Cards */}
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {courses.map((course) => (
                    <div
                      key={course.title}
                      className="group flex flex-col justify-between rounded-xl border border-[#e8eef3] bg-[#fbfcfd] p-2.5 transition-all hover:border-[#FD4322]/40 hover:bg-white"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1.5">
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-black ${course.providerBg}`}
                          >
                            {course.providerIcon}
                          </span>
                          <span className="rounded-md bg-[#eaf8f1] px-1.5 py-0.5 text-[8px] font-extrabold text-[#128455]">
                            {course.badge}
                          </span>
                        </div>

                        <h5 className="mt-1.5 text-[11px] font-extrabold text-[#14243D] leading-tight line-clamp-1">
                          {course.title}
                        </h5>
                        <p className="text-[9px] font-semibold text-[#64748B] truncate">
                          {course.provider}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5">
                          <span className="rounded-md border border-[#e2e8f0] bg-white px-1.5 py-0.5 text-[8px] font-semibold text-[#14243D]">
                            {course.skillsCount}
                          </span>
                          <span className="text-[8px] text-[#94a3b8]">
                            {course.duration}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between border-t border-[#f1f5f9] pt-1.5 text-[8px]">
                        <span className="text-[#94a3b8]">{course.mode}</span>
                        <span className="font-extrabold text-[#FD4322] group-hover:translate-x-0.5 transition-transform">
                          View more →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internships Section */}
              <div className="rounded-2xl border border-[#e3eaf1] bg-white p-3.5 shadow-xs sm:p-4">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] font-black text-[#14243D]">Internships</h4>
                    <span className="rounded-md bg-[#fff1ec] px-1.5 py-0.5 text-[9px] font-bold text-[#FD4322]">
                      Live Opportunities
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#FD4322] hover:underline cursor-pointer">
                    See all →
                  </span>
                </div>

                {/* Compact Horizontal Internship Cards */}
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {internships.map((job) => (
                    <div
                      key={job.title}
                      className="group flex flex-col justify-between rounded-xl border border-[#e8eef3] bg-[#fbfcfd] p-2.5 transition-all hover:border-[#FD4322]/40 hover:bg-white"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-black ${job.logoBg}`}
                            >
                              {job.logo}
                            </span>
                            <div className="min-w-0">
                              <h5 className="truncate text-[11px] font-extrabold text-[#14243D]">
                                {job.title}
                              </h5>
                              <p className="truncate text-[9px] text-[#64748B]">
                                {job.company}
                              </p>
                            </div>
                          </div>
                          <span className="rounded-md bg-[#eef5ff] px-1.5 py-0.5 text-[8px] font-bold text-[#1255FF]">
                            {job.type}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap gap-1">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded border border-[#e2e8f0] bg-white px-1 py-0.5 text-[8px] font-semibold text-[#14243D]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between border-t border-[#f1f5f9] pt-1.5 text-[8px]">
                        <span className="text-[#64748B] font-medium">
                          {job.mode} · {job.duration}
                        </span>
                        <span className="font-extrabold text-[#FD4322] group-hover:translate-x-0.5 transition-transform">
                          View more →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatIsSolo() {
  const highlights = [
    {
      title: "Learn & Build Skills",
      desc: "Structured courses and guided pathways.",
      color: "text-[#1255FF]",
      border: "border-[#cfe0fb]",
      bg: "bg-[#eef5ff]",
    },
    {
      title: "Gain Real Experience",
      desc: "Live projects, hackathons, and internships.",
      color: "text-[#FD4322]",
      border: "border-[#f8d1c6]",
      bg: "bg-[#fff1ec]",
    },
    {
      title: "Prove & Showcase",
      desc: "Earn verified credentials and share your achievements.",
      color: "text-[#128455]",
      border: "border-[#c9ead9]",
      bg: "bg-[#eaf8f1]",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#e8eef3] bg-white py-20 sm:py-28">
      {/* Subtle ambient decorative backglows */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#1255FF]/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#FD4322]/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[400px_1fr] 2xl:grid-cols-[440px_1fr]">
          {/* Left: Heading & Value Proposition (Unchanged) */}
          <div className="max-w-[500px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FD4322]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
              WHAT IS SOLO?
            </div>

            <h2 className="mt-4 text-[clamp(2.1rem,3.4vw,3.1rem)] font-black leading-[1.08] tracking-[-0.045em] text-[#14243D]">
              Everything you need to move from learning to opportunity.
            </h2>

            <p className="mt-5 text-[16px] leading-[1.75] text-[#5A6B82] sm:text-[17px]">
              SOLO connects learning, skills, experience, credentials, and career opportunities in one place.
            </p>

            {/* 3 Value Pillars */}
            <div className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-xl border border-[#e8eef3] bg-[#F7F9FC] p-3.5 transition-colors hover:border-[#d0dbe7] hover:bg-white"
                >
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${item.border} ${item.bg} ${item.color} text-xs font-black`}
                  >
                    ✓
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#14243D]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#5A6B82]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#FD4322] transition-colors hover:text-[#e83b1c]"
              >
                See how the platform works <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right: Recreated High-Fidelity SOLO Product Mockup */}
          <SoloDashboardMockup />
        </div>
      </div>
    </section>
  );
}
