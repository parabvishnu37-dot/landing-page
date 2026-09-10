"use client";

import { useState } from "react";
import Image from "next/image";

type IconName = "help" | "bell" | "message" | "menu" | "close";

function Icon({ name }: { name: IconName }) {
  const paths = {
    help: <><circle cx="12" cy="12" r="8.5" /><path d="M9.8 9.2a2.35 2.35 0 1 1 3.65 1.97c-.86.56-1.45 1.03-1.45 2.08" /><path d="M12 16.35h.01" /></>,
    bell: <><path d="M18 9.8a6 6 0 0 0-12 0c0 7-2.2 7-2.2 8.2h16.4C20.2 16.8 18 16.8 18 9.8Z" /><path d="M10 21h4" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.1-.57L4 20l1.55-3.67A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">{paths[name]}</svg>;
}

const navItems = ["Dashboard", "Home", "Create", "Manage", "Explore"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#e3eaf1] bg-white/95 shadow-[0_1px_5px_rgba(23,38,61,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2.5" href="#top" aria-label="SOLO home">
          <Image alt="SOLO" className="h-8 w-[82px] object-contain object-left" height={32} priority src="/solo-logo.svg" width={82} />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a className={`text-[13px] font-semibold transition-colors ${item === "Home" ? "text-[#f3653b]" : "text-slate-500 hover:text-[#f3653b]"}`} href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 md:flex">
          <button className="nav-icon" type="button" aria-label="Help"><Icon name="help" /></button>
          <button className="nav-icon relative" type="button" aria-label="Notifications"><Icon name="bell" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f3653b] ring-2 ring-white" /></button>
          <button className="nav-icon" type="button" aria-label="Messages"><Icon name="message" /></button>
          <button className="ml-2 flex items-center gap-2.5 rounded-full pl-1.5 pr-2 text-left transition-colors hover:bg-slate-50" type="button" aria-label="Open profile menu">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8ec] text-xs font-bold text-[#2d5961]">VP</span>
            <span className="hidden text-xs font-bold text-slate-700 lg:block">Vishnu Parab</span>
            <span className="text-[10px] text-slate-400">⌄</span>
          </button>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 md:hidden" type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => <a className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white-50 hover:text-[#f3653b]" href={`#${item.toLowerCase()}`} key={item} onClick={() => setIsOpen(false)}>{item}</a>)}
          </nav>
          <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
            <button className="nav-icon" type="button" aria-label="Help"><Icon name="help" /></button>
            <button className="nav-icon" type="button" aria-label="Notifications"><Icon name="bell" /></button>
            <button className="nav-icon" type="button" aria-label="Messages"><Icon name="message" /></button>
            <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8ec] text-xs font-bold text-[#2d5961]">VP</span>
          </div>
        </div>
      )}
    </header>
  );
}