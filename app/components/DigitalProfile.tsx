const profileSkills = ["React", "JavaScript", "TypeScript", "Python", "Communication", "Problem Solving"];

const profileStats = [
  ["8", "Skills Verified"],
  ["4", "Courses Completed"],
  ["2", "Projects"],
  ["3", "Credentials"],
];

const benefits = [
  { number: "01", title: "Verified Skills", description: "Showcase skills backed by evidence and achievements.", tone: "bg-[#eaf8f1] text-[#16a36a]" },
  { number: "02", title: "Digital Credentials", description: "Keep your learning and accomplishments in one trusted profile.", tone: "bg-[#fff8dd] text-[#9a7000]" },
  { number: "03", title: "Share Your Profile", description: "Give employers and opportunities a clear view of what you can offer.", tone: "bg-[#eef5ff] text-[#2463eb]" },
];

function VerifiedMark() {
  return <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a36a] text-[9px] font-black text-white">✓</span>;
}

function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_44px_rgba(54,73,91,0.1)] sm:p-7">
      <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#fff0e9] blur-3xl" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-[19px] bg-[#dce8ec] text-lg font-black text-[#2d5961] shadow-inner">VP</span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[19px] font-black tracking-[-0.05em] text-[#27374c]">Vishnu Parab</h3>
              <span className="flex items-center gap-1 rounded-full bg-[#e8f6f0] px-2 py-1 text-[9px] font-extrabold text-[#438c70]"><VerifiedMark /> Verified Profile</span>
            </div>
            <p className="mt-1 text-[12px] font-semibold text-slate-500">Aspiring Software Engineer</p>
            <p className="mt-1 text-[10px] font-semibold text-slate-400">Goa, India</p>
          </div>
        </div>
        <button aria-label="More profile options" className="flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-extrabold text-slate-400 hover:bg-slate-50" type="button">More</button>
      </div>
      <div className="relative mt-7 rounded-2xl bg-[#f8fafc] p-4">
        <div className="flex items-center justify-between">
          <div><p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">Profile completion</p><p className="mt-1 text-[20px] font-black tracking-[-0.06em] text-[#27374c]">86%</p></div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-[#f3653b] text-[10px] font-black text-[#d87850]">86</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8edf0]"><div className="h-full w-[86%] rounded-full bg-[#f3653b]" /></div>
        <p className="mt-2 text-[10px] font-semibold text-slate-400">Just 2 steps away from a complete profile</p>
      </div>
      <div className="relative mt-6">
        <div className="flex items-center justify-between"><p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-400">Skills</p><span className="text-[10px] font-bold text-[#f3653b]">Edit skills</span></div>
        <div className="mt-3 flex flex-wrap gap-2">{profileSkills.map((skill) => <span className="rounded-lg border border-[#e3edf0] bg-[#f7fafb] px-2.5 py-2 text-[10px] font-bold text-[#55707b]" key={skill}>{skill}</span>)}</div>
      </div>
      <div className="relative mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5 sm:grid-cols-4">
        {profileStats.map(([value, label]) => <div className="rounded-xl bg-[#fbfcfd] p-3" key={label}><p className="text-[20px] font-black tracking-[-0.06em] text-[#27374c]">{value}</p><p className="mt-1 text-[9px] font-bold leading-4 text-slate-400">{label}</p></div>)}
      </div>
      <div className="relative mt-5 flex items-center justify-between"><span className="text-[10px] font-semibold text-slate-400">Last updated today</span><button className="rounded-xl bg-[#f3653b] px-4 py-2.5 text-[11px] font-extrabold text-white shadow-[0_7px_14px_rgba(243,101,59,0.18)] transition-transform hover:-translate-y-0.5" type="button">View profile</button></div>
    </div>
  );
}

function BenefitCard({ number, title, description, tone }: { number: string; title: string; description: string; tone: string }) {
  return <div className="group rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_7px_20px_rgba(54,73,91,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(54,73,91,0.09)]"><div className="flex items-start justify-between"><span className={`flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-black ${tone}`}>{number}</span><span className="text-lg text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#f3653b]">-&gt;</span></div><h3 className="mt-5 text-[15px] font-extrabold text-[#2d3d51]">{title}</h3><p className="mt-2 text-[12px] leading-5 text-slate-500">{description}</p></div>;
}

function ResumePreview() {
  return <div className="relative h-[185px] w-full max-w-[220px] overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(54,73,91,0.1)]"><div className="flex gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dce8ec] text-[8px] font-black text-[#2d5961]">VP</span><div className="pt-1"><div className="h-2 w-20 rounded-full bg-[#27374c]" /><div className="mt-2 h-1.5 w-28 rounded-full bg-slate-200" /></div></div><div className="mt-5 grid grid-cols-[0.7fr_1fr] gap-4"><div><div className="h-1.5 w-12 rounded bg-[#f3653b]" /><div className="mt-3 h-1.5 w-full rounded bg-slate-200" /><div className="mt-2 h-1.5 w-4/5 rounded bg-slate-200" /><div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" /></div><div><div className="h-1.5 w-16 rounded bg-[#27374c]" /><div className="mt-3 h-1.5 w-full rounded bg-slate-200" /><div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" /><div className="mt-2 h-1.5 w-3/4 rounded bg-slate-200" /></div></div><div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" /></div>;
}

export default function DigitalProfile() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28 lg:px-12 lg:py-32" id="digital-profile">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#e6f1f3]/60 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[710px] text-center"><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f3653b]">YOUR DIGITAL IDENTITY</p><h2 className="mt-4 text-[clamp(2.3rem,4vw,3.8rem)] font-black leading-[1.02] tracking-[-0.07em] text-[#243247]">Everything you&apos;ve achieved. All in one profile.</h2><p className="mx-auto mt-5 max-w-[630px] text-[15px] leading-7 text-slate-500 sm:text-[16px]">Build a verified digital profile that brings your skills, achievements and credentials together - ready to share with employers and opportunities.</p></div>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <ProfileCard />
          <div><p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Built to move with you</p><h3 className="mt-3 text-[27px] font-black leading-tight tracking-[-0.06em] text-[#27374c]">Show what you can do</h3><p className="mt-4 max-w-[400px] text-[13px] leading-6 text-slate-500">Your profile turns progress into proof, so the right people can see the value you bring.</p><div className="mt-7 space-y-3">{benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}</div><button className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#f3653b] px-6 py-3.5 text-sm font-bold text-white shadow-[0_9px_19px_rgba(243,101,59,0.2)] transition-transform hover:-translate-y-0.5" type="button">Create your profile <span className="text-lg leading-none">-&gt;</span></button></div>
        </div>
        <div className="mt-14 flex flex-col gap-8 rounded-[24px] border border-slate-200/80 bg-[#f7fafc] p-6 shadow-[0_8px_24px_rgba(54,73,91,0.05)] sm:p-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[410px]"><p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#f3653b]">Ready to share</p><h3 className="mt-3 text-[23px] font-black leading-tight tracking-[-0.05em] text-[#27374c]">Turn your profile into a professional resume</h3><p className="mt-3 text-[13px] leading-6 text-slate-500">Generate a resume from the skills, experiences and achievements already in your SOLO profile.</p></div>
          <div className="flex flex-col items-center gap-6 sm:flex-row"><ResumePreview /><div className="w-full min-w-[170px] sm:w-auto"><p className="text-[12px] font-extrabold text-[#2d3d51]">Choose a template</p><div className="mt-3 flex gap-2"><button className="rounded-lg border border-[#f3b39e] bg-white px-3 py-2 text-[10px] font-extrabold text-[#d87850]" type="button">Modern</button><button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-500" type="button">Classic</button></div><div className="mt-5 flex flex-wrap gap-2"><button className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[10px] font-extrabold text-[#344359] transition-colors hover:border-[#f3653b] hover:text-[#f3653b]" type="button">Preview resume</button><button className="rounded-xl bg-[#f3653b] px-3.5 py-2.5 text-[10px] font-extrabold text-white shadow-sm transition-transform hover:-translate-y-0.5" type="button">Generate resume</button></div></div></div>
        </div>
      </div>
    </section>
  );
}
