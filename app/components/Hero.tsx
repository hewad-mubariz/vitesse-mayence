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

export function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Vitesse Mayence Mannschaft im Kreis"
        fill
        priority
        className="object-cover object-[center_45%]"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-4 pb-44 pt-28 sm:pb-48 md:px-6 md:pb-52 lg:px-8 lg:pb-56">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_auto]">
          <div className="max-w-4xl">
            <p className="animate-rise mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 md:text-xs">
              Fußball. Gemeinschaft. Mainz.
            </p>

            <h1 className="animate-rise-delay-1 text-stamp hero-headline">
              <StampLine text="UNSER SPIEL." tone="white" />
              <StampLine text="UNSERE STADT." tone="orange" />
            </h1>

            <p className="animate-rise-delay-2 mt-6 text-sm font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/90 md:text-base">
              <span className="block">Mehr als ein Verein.</span>
              <span className="block">Vitesse Mayence.</span>
            </p>

            <div className="animate-rise-delay-2 mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href="#spieltag" className="btn-white rounded-sm px-6 py-3.5 text-sm">
                Zum nächsten Spiel →
              </a>
              <a
                href="#verein"
                className="inline-flex items-center gap-3 text-white/90 transition hover:text-white"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/45 text-sm">
                  ▶
                </span>
                <span className="text-left text-xs font-bold uppercase leading-snug tracking-[0.12em] sm:text-sm">
                  <span className="block">Unser Verein</span>
                  <span className="block">in 60 Sekunden</span>
                </span>
              </a>
            </div>
          </div>

          <div className="animate-rise-delay-2 justify-self-start pb-2 lg:justify-self-end">
            <p className="hero-script" aria-label="Mainz Bretzenheim Seit 1986">
              <span>Mainz</span>
              <span>Bretzenheim</span>
              <span>Seit 1986</span>
              <span className="hero-script-stroke" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
