"use client";

import { useState } from "react";

type Category = "Courses" | "Internships" | "Live Projects" | "Hackathons" | "Jobs" | "Career Pathways" | "Volunteering";

type Opportunity = {
  category: Category;
  company: string;
  title: string;
  type: string;
  skills: number;
  location: string;
  duration: string;
  posted: string;
  match: number;
  mark: string;
  access: "Free" | "Paid";
};

const categories: Category[] = ["Courses", "Internships", "Live Projects", "Hackathons", "Jobs", "Career Pathways", "Volunteering"];

const opportunities: Opportunity[] = [
  { category: "Courses", company: "SPARK+", title: "Fundamentals of AI", type: "Course", skills: 8, location: "Virtual", duration: "2 Hours", posted: "Posted today", match: 92, mark: "S+", access: "Free" },
  { category: "Courses", company: "SPARK+", title: "React Fundamentals", type: "Course", skills: 7, location: "Virtual", duration: "4 Hours", posted: "Posted 2d ago", match: 87, mark: "S+", access: "Free" },
  { category: "Courses", company: "SOLO Academy", title: "Data Foundations", type: "Course", skills: 6, location: "Virtual", duration: "3 Hours", posted: "Posted 4d ago", match: 83, mark: "SA", access: "Paid" },
  { category: "Internships", company: "SPARK+", title: "Software Engineering Intern", type: "Internship", skills: 6, location: "Remote", duration: "3 Months", posted: "Posted 3d ago", match: 81, mark: "S+", access: "Free" },
  { category: "Live Projects", company: "BuildLab", title: "Community App Redesign", type: "Live project", skills: 5, location: "Remote", duration: "6 Weeks", posted: "Posted 2d ago", match: 85, mark: "BL", access: "Free" },
  { category: "Hackathons", company: "CodeSprint", title: "Future of Learning Hackathon", type: "Hackathon", skills: 7, location: "Virtual", duration: "48 Hours", posted: "Posted today", match: 79, mark: "CS", access: "Free" },
  { category: "Jobs", company: "TechNova", title: "Junior Software Engineer", type: "Full-time", skills: 9, location: "Goa, India", duration: "Full-time", posted: "Posted 5d ago", match: 76, mark: "TN", access: "Paid" },
  { category: "Career Pathways", company: "SOLO", title: "Frontend Developer Pathway", type: "Career pathway", skills: 12, location: "Online", duration: "6 Months", posted: "Posted 1w ago", match: 88, mark: "S", access: "Free" },
  { category: "Volunteering", company: "Community Network", title: "Digital Skills Mentor", type: "Volunteering", skills: 5, location: "Hybrid", duration: "Flexible", posted: "Posted 1w ago", match: 72, mark: "CN", access: "Free" },
];

function categoryAccent(category: Category) {
  if (category === "Courses") return "bg-[#fff8dd] text-[#9a7000]";
  if (category === "Internships" || category === "Career Pathways") return "bg-[#eef5ff] text-[#2463eb]";
  if (category === "Live Projects" || category === "Volunteering") return "bg-[#eaf8f1] text-[#16a36a]";
  if (category === "Hackathons") return "bg-[#f3eeff] text-[#7c5cfc]";
  return "bg-[#fff1ec] text-[#ff5a36]";
}

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="group flex min-h-[260px] flex-col rounded-[18px] border border-[#e3eaf1] bg-white p-5 shadow-[0_5px_16px_rgba(23,38,61,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f5b7a5] hover:shadow-[0_10px_24px_rgba(23,38,61,0.08)] sm:p-5">
      <div className="flex items-start justify-between gap-4"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[10px] font-black ${categoryAccent(opportunity.category)}`}>{opportunity.mark}</span><span className="rounded-full bg-[#eaf8f1] px-2.5 py-1 text-[10px] font-extrabold text-[#16a36a]">{opportunity.match}% Match</span></div>
      <div className="mt-4"><p className="text-[11px] font-bold text-slate-400">{opportunity.company}</p><h3 className="mt-1.5 text-[16px] font-extrabold leading-6 tracking-[-0.035em] text-[#17263d]">{opportunity.title}</h3><div className="mt-3 flex flex-wrap gap-1.5"><span className="inline-flex rounded-md bg-[#eef3f7] px-2 py-1 text-[9px] font-bold text-[#60738f]">{opportunity.type}</span><span className={`inline-flex rounded-md px-2 py-1 text-[9px] font-bold ${opportunity.access === "Free" ? "bg-[#e7f6ef] text-[#438c70]" : "bg-[#fff4cc] text-[#ad7b20]"}`}>{opportunity.access}</span></div></div>
      <div className="mt-auto grid grid-cols-2 gap-x-3 gap-y-3 border-t border-slate-100 pt-5"><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">Skills</p><p className="mt-1 text-[11px] font-bold text-slate-600">{opportunity.skills} Skills</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">Where</p><p className="mt-1 truncate text-[11px] font-bold text-slate-600">{opportunity.location}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">Duration</p><p className="mt-1 text-[11px] font-bold text-slate-600">{opportunity.duration}</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">Added</p><p className="mt-1 text-[11px] font-bold text-slate-600">{opportunity.posted}</p></div></div>
      <button className="mt-5 flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-left text-[11px] font-extrabold text-[#344359] transition-colors hover:border-[#f3653b] hover:text-[#f3653b]" type="button">View more <span className="text-base font-normal transition-transform group-hover:translate-x-1">→</span></button>
    </article>
  );
}

export default function Opportunities() {
  const [activeCategory, setActiveCategory] = useState<Category>("Courses");
  const visibleOpportunities = opportunities.filter((opportunity) => opportunity.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28" id="opportunities">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[650px] text-center"><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f3653b]">DISCOVER YOUR NEXT STEP</p><h2 className="mt-4 text-[clamp(2.3rem,4vw,3.8rem)] font-black leading-[1.02] tracking-[-0.07em] text-[#243247]">Opportunities built around you</h2><p className="mx-auto mt-5 max-w-[570px] text-[15px] leading-7 text-slate-500 sm:text-[16px]">Explore learning and career opportunities matched to your skills, interests and goals.</p></div>

        <div className="mx-auto mt-10 flex w-fit max-w-full overflow-x-auto rounded-2xl border border-[#e3eaf1] bg-white p-1.5 shadow-[0_3px_12px_rgba(23,38,61,0.03)] sm:mt-12"><div className="flex min-w-max gap-1">{categories.map((category) => <button aria-pressed={activeCategory === category} className={`rounded-xl px-3.5 py-2.5 text-[11px] font-extrabold transition-colors sm:px-4 ${activeCategory === category ? "bg-[#fff1ec] text-[#ff5a36] shadow-sm" : "text-[#64748b] hover:bg-[#f4f8fc] hover:text-[#14243d]"}`} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}</div></div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleOpportunities.map((opportunity) => <OpportunityCard key={opportunity.title} opportunity={opportunity} />)}</div>
        <div className="mt-12 text-center"><button className="inline-flex items-center gap-3 rounded-xl bg-[#ff5a36] px-6 py-3.5 text-sm font-bold text-white shadow-[0_9px_19px_rgba(255,90,54,0.2)] transition-transform hover:-translate-y-0.5" type="button">See all opportunities <span className="text-lg leading-none">→</span></button></div>
      </div>
    </section>
  );
}