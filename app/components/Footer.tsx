import Image from "next/image";

const footerColumns = [
  { title: "Platform", links: ["Opportunities", "Courses", "Internships", "Jobs", "Career Pathways"] },
  { title: "For Learners", links: ["Build your profile", "Skills", "Credentials", "Resume", "AI Career Assistant"] },
  { title: "Company", links: ["About SOLO", "How it works", "Contact", "Privacy", "Terms"] },
];

function Logo() {
  return <a className="flex items-center" href="#top" aria-label="SOLO home"><Image alt="SOLO" className="h-[35px] w-[120px] object-contain object-left" height={35} src="/solo-logo.svg" width={120} /></a>;
}

export default function Footer() {
  return (
    <footer className="bg-[#17273c] px-6 pb-7 pt-16 text-white sm:pt-20 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div className="max-w-[250px]"><Logo /><p className="mt-5 text-[13px] leading-6 text-[#aebdca]">Helping learners turn skills into opportunities.</p><div className="mt-7 flex items-center gap-2"><a aria-label="SOLO on LinkedIn" className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 text-[10px] font-extrabold text-[#b7c4cf] transition-colors hover:border-[#ff5a36] hover:bg-[#ff5a36]/10 hover:text-white" href="#linkedin">in</a><a aria-label="SOLO on Instagram" className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 text-[10px] font-extrabold text-[#b7c4cf] transition-colors hover:border-[#ff5a36] hover:bg-[#ff5a36]/10 hover:text-white" href="#instagram">ig</a><a aria-label="SOLO on X" className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/15 text-[10px] font-extrabold text-[#b7c4cf] transition-colors hover:border-[#ff5a36] hover:bg-[#ff5a36]/10 hover:text-white" href="#x">x</a></div></div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-8">{footerColumns.map((column) => <div key={column.title}><h2 className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#ffad91]">{column.title}</h2><nav className="mt-5 flex flex-col items-start gap-3" aria-label={`${column.title} links`}>{column.links.map((link) => <a className="text-[12px] font-semibold text-[#b7c4cf] transition-colors hover:text-white" href="#" key={link}>{link}</a>)}</nav></div>)}</div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] font-semibold text-[#8699aa] sm:flex-row sm:items-center sm:justify-between"><p>&copy; 2026 SOLO. All rights reserved.</p><div className="flex gap-5"><a className="transition-colors hover:text-white" href="#privacy">Privacy</a><a className="transition-colors hover:text-white" href="#terms">Terms</a><a className="transition-colors hover:text-white" href="#contact">Contact</a></div></div>
      </div>
    </footer>
  );
}