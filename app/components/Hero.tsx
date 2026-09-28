import Image from "next/image";

/** Subtle stamp jitter — U a touch high, rest lightly uneven (not chaotic). */
const LINE_OFFSETS: Record<string, number[]> = {
  "UNSER SPIEL.": [3, -1, 0, 1, -1, 0, -2, 1, 0, -1, 2, 0],
  "UNSERE STADT.": [3, -1, 0, 1, -1, 0, 0, -2, 1, 0, -1, 2, 0],
};

function StampLine({
  text,
  tone,
}: {
  text: string;
  tone: "white" | "orange";
}) {
  const offsets = LINE_OFFSETS[text] ?? [];
  return (
    <span className="stamp-line">
      {Array.from(text).map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`stamp-char stamp-${tone}`}
          style={{ ["--ty" as string]: `${offsets[i] ?? 0}px` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function HeroScript() {
  return (
    <p className="hero-script" aria-label="Mainz Bretzenheim Seit 1986">
      <span>Mainz</span>
      <span>Bretzenheim</span>
      <span>Seit 1986</span>
      <span className="hero-script-stroke" aria-hidden="true" />
    </p>
  );
}

export function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Vitesse Mayence Mannschaft im Kreis"
        fill
        priority
        className="object-cover object-[center_40%] sm:object-[center_45%]"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-4 pb-36 pt-24 sm:px-5 sm:pb-44 sm:pt-28 md:px-6 md:pb-52 lg:px-8 lg:pb-56">
        <div className="grid items-end gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-10">
          <div className="max-w-4xl">
            <p className="animate-rise mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 sm:mb-4 sm:text-[11px] sm:tracking-[0.28em] md:text-xs">
              Fußball. Gemeinschaft. Mainz.
            </p>

            <div className="flex items-end justify-between gap-3 lg:block">
              <h1 className="animate-rise-delay-1 text-stamp hero-headline min-w-0 flex-1">
                <StampLine text="UNSER SPIEL." tone="white" />
                <StampLine text="UNSERE STADT." tone="orange" />
              </h1>

              {/* Mobile / tablet only — wrapper owns display so .hero-script can't override */}
              <div className="animate-rise-delay-2 mb-1 shrink-0 sm:mb-2 lg:hidden">
                <HeroScript />
              </div>
            </div>

            <p className="animate-rise-delay-2 mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:mt-6 sm:text-sm md:text-base">
              <span className="block">Mehr als ein Verein.</span>
              <span className="mt-0.5 hidden sm:block">Vitesse Mayence.</span>
            </p>

            <div className="animate-rise-delay-2 mt-6 flex flex-row flex-wrap items-stretch gap-2.5 sm:mt-8 sm:gap-4">
              <a
                href="#spieltag"
                className="btn-primary min-h-11 flex-1 rounded-sm px-3 py-3 text-[11px] sm:min-h-0 sm:flex-none sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Zum nächsten Spiel →
              </a>
              <a
                href="#verein"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2.5 rounded-sm px-3 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white/90 transition hover:text-white sm:min-h-0 sm:flex-none sm:justify-start sm:gap-3 sm:px-0 sm:py-0 sm:text-xs sm:tracking-[0.12em]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/45 text-sm sm:h-12 sm:w-12">
                  ▶
                </span>
                <span className="text-left leading-snug">
                  <span className="sm:hidden">Video ansehen</span>
                  <span className="hidden sm:block">
                    <span className="block">Unser Verein</span>
                    <span className="block">in 60 Sekunden</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Desktop only */}
          <div className="animate-rise-delay-2 hidden justify-self-end pb-2 lg:block">
            <HeroScript />
          </div>
        </div>
      </div>
    </section>
  );
}
