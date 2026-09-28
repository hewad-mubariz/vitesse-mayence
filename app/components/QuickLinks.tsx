const links = [
  {
    href: "#mannschaft",
    title: "Mannschaft",
    subtitle: "Unsere Spieler",
    mobile: true,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="14" r="5.5" />
        <circle cx="31" cy="15" r="4.5" />
        <path d="M6 38c1.2-7 5.2-11 11-11s9.8 4 11 11" />
        <path d="M28 27.5c3.2-.8 6.5.6 9.5 4.2 1.4 1.8 2.4 3.8 3.2 6.3" />
      </svg>
    ),
  },
  {
    href: "#spieltag",
    title: "Spielplan",
    subtitle: "Alle Termine",
    mobile: true,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="32" height="30" rx="3" />
        <path d="M8 20h32M16 6v8M32 6v8" />
        <path d="M15 27h4M22 27h4M29 27h4M15 34h4M22 34h4" />
      </svg>
    ),
  },
  {
    href: "#probetraining",
    title: "Probetraining",
    subtitle: "Werde Teil des Teams",
    mobile: true,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 30c2-6 5.5-10 10-10s8 4 10 10" />
        <path d="M18 22c0-4 2.7-7 6-7s6 3 6 7" />
        <path d="M12 34h24" />
        <path d="M16 34l-2 6M32 34l2 6" />
        <path d="M20 20l-3-5M28 20l3-5" />
      </svg>
    ),
  },
  {
    href: "#verein",
    title: "Verein",
    subtitle: "Tradition & Werte",
    mobile: true,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l15 5.5v11c0 10-6.2 17.2-15 22-8.8-4.8-15-12-15-22V10.5L24 5z" />
        <path d="M24 16.5l1.8 3.6 4 .6-2.9 2.8.7 3.9L24 25.4l-3.6 1.9.7-3.9-2.9-2.8 4-.6L24 16.5z" />
      </svg>
    ),
  },
  {
    href: "#partner",
    title: "Partner",
    subtitle: "Gemeinsam mehr",
    mobile: false,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28c-4 0-7 2.8-7 6.5V37h12v-2.5c0-2.2.9-4 2.4-5" />
        <path d="M32 28c4 0 7 2.8 7 6.5V37H27v-2.5c0-2.2-.9-4-2.4-5" />
        <path d="M19 22c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5v5H19v-5z" />
        <path d="M15.5 20c-1.8-1-3-2.8-3-4.8 0-3 2.4-5.4 5.3-5.4" />
        <path d="M32.5 20c1.8-1 3-2.8 3-4.8 0-3-2.4-5.4-5.3-5.4" />
        <path d="M18 30c2.5 3.5 5.5 5 6 5s3.5-1.5 6-5" />
      </svg>
    ),
  },
  {
    href: "#aktuelles",
    title: "Aktuelles",
    subtitle: "News & Stories",
    mobile: false,
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="8" width="24" height="32" rx="2" />
        <rect x="8" y="12" width="24" height="28" rx="2" />
        <circle cx="16" cy="20" r="3" />
        <path d="M22 18h6M22 22h6M12 28h14M12 32h10" />
      </svg>
    ),
  },
];

export function QuickLinks() {
  return (
    <section className="border-y border-white/10 bg-black px-3 py-6 sm:px-4 sm:py-7 md:px-6 md:py-9 lg:px-8">
      {/* Mobile: 4-up icon grid like mockup */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-2 sm:hidden">
        {links
          .filter((l) => l.mobile)
          .map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="flex flex-col items-center gap-2 px-1 py-1 text-center"
            >
              <span className="text-vm-orange">{link.icon}</span>
              <span className="text-[9px] font-extrabold uppercase leading-tight tracking-[0.06em] text-vm-orange">
                {link.title}
              </span>
            </a>
          ))}
      </div>

      {/* sm+: horizontal strip */}
      <div className="quick-scroll mx-auto hidden max-w-[1600px] items-stretch justify-between gap-6 overflow-x-auto pb-1 sm:flex lg:gap-3 xl:gap-6">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="group flex min-w-[170px] shrink-0 items-center gap-3.5 transition lg:min-w-0 lg:flex-1"
          >
            <span className="shrink-0 text-vm-orange transition group-hover:scale-105 group-hover:text-vm-orange-hot">
              {link.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-extrabold uppercase tracking-[0.08em] text-white group-hover:text-vm-orange">
                {link.title}
              </span>
              <span className="mt-0.5 block text-[12px] text-white/65">
                {link.subtitle}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
