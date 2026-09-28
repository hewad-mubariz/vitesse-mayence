"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#start", label: "Start" },
  { href: "#spieltag", label: "Spieltag" },
  { href: "#mannschaft", label: "Mannschaft" },
  { href: "#verein", label: "Verein" },
  { href: "#aktuelles", label: "Aktuelles" },
  { href: "#partner", label: "Partner" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-black/95 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 md:px-6 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
            Fußball. Gemeinschaft. Mainz.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
            <span>Mainz-Bretzenheim</span>
            <span className="text-vm-orange">Seit 1986</span>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 lg:px-8">
        <Link href="#start" className="relative z-50 flex shrink-0 items-center gap-3">
          <Image
            src="/logo/vitesse-crest.png"
            alt="Vitesse Mayence Wappen"
            width={256}
            height={256}
            className="h-14 w-auto object-contain object-bottom md:h-16"
            priority
            quality={100}
            sizes="64px"
          />
          <div className="hidden leading-tight xl:block">
            <p className="font-display text-xl tracking-wide text-white">
              Vitesse Mayence
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-vm-muted">
              Mainz-Bretzenheim · Seit 1986
            </p>
          </div>
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-5 lg:flex xl:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.14em] text-white/90 hover:text-white xl:text-[13px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-50 flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 xl:flex">
            <button type="button" className="text-vm-orange">
              DE
            </button>
            <span className="text-white/30">|</span>
            <button type="button" className="hover:text-white">
              EN
            </button>
          </div>
          <a
            href="#probetraining"
            className="btn-primary hidden rounded-sm px-4 py-2.5 text-xs md:inline-flex"
          >
            Probetraining
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } fixed inset-0 top-0 z-40 bg-black/95 transition-opacity duration-300`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-vm-orange">
            Fußball. Gemeinschaft. Mainz.
          </p>
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#probetraining"
            onClick={() => setOpen(false)}
            className="btn-primary mt-auto rounded-sm px-5 py-4 text-sm"
          >
            Probetraining anfragen →
          </a>
        </div>
      </div>
    </header>
  );
}
