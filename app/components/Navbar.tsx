"use client";

import { useState } from "react";
import Image from "next/image";

type PublicNavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navItems: PublicNavItem[] = [
  { label: "Home", href: "#top", active: true },
  { label: "Explore", href: "#explore" },
  { label: "Learner Stories", href: "#how-it-works" },
  { label: "About", href: "#get-started" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#e3eaf1] bg-white/95 shadow-[0_1px_6px_rgba(20,36,61,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: SOLO Logo */}
        <a className="flex items-center gap-2.5 transition-opacity hover:opacity-90" href="#top" aria-label="SOLO home">
          <Image
            alt="SOLO"
            className="h-8 w-[84px] object-contain object-left"
            height={32}
            priority
            src="/solo-logo.svg"
            width={84}
          />
        </a>

        {/* Center: Public Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Public navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[14px] font-bold transition-colors ${
                item.active
                  ? "text-[#FD4322]"
                  : "text-[#14243D] hover:text-[#FD4322]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Public Actions (Log in + Get Started) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#get-started"
            className="rounded-xl border border-[#d7e3f0] bg-white px-4 py-2 text-[13px] font-bold text-[#14243D] transition-all hover:border-[#FD4322] hover:text-[#FD4322]"
          >
            Log in
          </a>
          <a
            href="#career-explorer"
            className="inline-flex items-center justify-center rounded-xl bg-[#FD4322] px-5 py-2 text-[13px] font-extrabold text-white shadow-[0_4px_14px_rgba(253,67,34,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#14243D] hover:bg-[#f4f7fa] md:hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t border-[#e3eaf1] bg-white px-6 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-3.5 py-2.5 text-[14px] font-bold transition-colors ${
                  item.active
                    ? "bg-[#fff1ec] text-[#FD4322]"
                    : "text-[#14243D] hover:bg-[#f4f7fa] hover:text-[#FD4322]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center justify-center rounded-xl border border-[#d7e3f0] bg-white text-[13px] font-bold text-[#14243D] transition-colors hover:border-[#FD4322] hover:text-[#FD4322]"
            >
              Log in
            </a>
            <a
              href="#career-explorer"
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center justify-center rounded-xl bg-[#FD4322] text-[13px] font-extrabold text-white shadow-[0_4px_14px_rgba(253,67,34,0.22)] transition-all hover:bg-[#e83b1c]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}