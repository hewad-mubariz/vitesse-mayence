"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
      setMenuMounted(true);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setMenuAnimating(true));
      });
      return () => cancelAnimationFrame(raf);
    }

    document.body.style.overflow = "";
    document.body.classList.remove("mobile-menu-open");
    setMenuAnimating(false);
    if (!menuMounted) return;

    const t = window.setTimeout(() => setMenuMounted(false), 500);
    return () => window.clearTimeout(t);
  }, [open, menuMounted]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, []);

  const barSolid = scrolled || menuMounted;

  const menu =
    portalReady &&
    menuMounted &&
    createPortal(
      <div
        className={`mobile-menu lg:hidden ${menuAnimating ? "is-open" : "is-closing"}`}
        aria-hidden={!menuAnimating}
      >
        <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-glow" aria-hidden />
          <p className="mobile-menu-kicker">Fußball. Gemeinschaft. Mainz.</p>
          <nav className="mobile-menu-nav">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                style={{ ["--i" as string]: i }}
                onClick={() => setOpen(false)}
                className="mobile-menu-link"
              >
                <span className="mobile-menu-label">{item.label}</span>
              </a>
            ))}
          </nav>
          <a
            href="#probetraining"
            onClick={() => setOpen(false)}
            className="btn-primary mobile-menu-cta rounded-sm px-5 py-4 text-sm"
          >
            Probetraining anfragen →
          </a>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,backdrop-filter] duration-[400ms] ease-out ${
          barSolid
            ? "bg-black/80 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/80 to-transparent"
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

        <div className="relative mx-auto flex max-w-7xl items-center gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 md:px-6 md:py-3 lg:px-8">
          <Link
            href="#start"
            className="relative z-[70] flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo/vitesse-crest.png"
              alt="Vitesse Mayence Wappen"
              width={256}
              height={256}
              className="h-11 w-auto object-contain object-bottom sm:h-12 md:h-16"
              priority
              quality={100}
              sizes="64px"
            />
            <p className="max-w-[9.5rem] text-[9px] font-bold uppercase leading-snug tracking-[0.14em] text-white/80 sm:max-w-none sm:text-[10px] sm:tracking-[0.2em] md:hidden">
              Fußball. Gemeinschaft. Mainz.
            </p>
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

          <div className="relative z-[70] ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2.5">
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
              className={`btn-primary rounded-sm px-2.5 py-2 text-[10px] transition duration-300 sm:px-3.5 sm:text-[11px] md:px-4 md:py-2.5 md:text-xs ${
                menuAnimating
                  ? "pointer-events-none opacity-0 sm:pointer-events-auto sm:opacity-100"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="sm:hidden">Probe</span>
              <span className="hidden sm:inline">Probetraining</span>
              <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border text-white transition duration-300 sm:h-11 sm:w-11 lg:hidden ${
                menuAnimating
                  ? "border-vm-orange/60 bg-vm-orange text-black"
                  : "border-white/25 bg-white/5 hover:border-white/45 hover:bg-white/10"
              }`}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                    menuAnimating ? "top-1.5 rotate-45" : "top-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition-all duration-200 ease-out ${
                    menuAnimating ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                    menuAnimating ? "top-1.5 -rotate-45" : "top-3 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
