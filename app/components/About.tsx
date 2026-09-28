import Image from "next/image";

const stats = [
  { value: "1986", label: "Gegründet" },
  { value: "1", label: "Gemeinsames Ziel" },
  { value: "∞", label: "Viele Geschichten" },
];

export function About() {
  return (
    <section id="verein" className="relative bg-black">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.35fr_0.7fr_0.95fr]">
        {/* Left — copy on photo */}
        <div className="relative min-h-[420px] overflow-hidden px-5 py-14 sm:px-8 md:min-h-[520px] md:px-10 md:py-20 lg:px-12">
          <Image
            src="/images/about-flag.png"
            alt=""
            fill
            className="object-cover object-center grayscale contrast-125 brightness-[0.45]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="grain absolute inset-0" />

          <div className="relative z-10 max-w-xl">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-vm-orange">
              Vitesse Mayence
            </p>
            <h2 className="text-stamp text-[clamp(2.6rem,6.5vw,4.6rem)]">
              <span className="stamp-white block">Lokal.</span>
              <span className="stamp-white block">Leidenschaftlich.</span>
              <span className="stamp-white block">Echt.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/85 md:text-base">
              Der SV Vitesse Mayence steht seit 1986 für Fußball, Zusammenhalt
              und Vielfalt in Mainz-Bretzenheim. Wir sind mehr als nur ein
              Verein – wir sind eine Gemeinschaft.
            </p>
            <a href="#probetraining" className="btn-white mt-8 rounded-sm px-6 py-3.5 text-xs">
              Mehr über uns →
            </a>
          </div>
        </div>

        {/* Middle — stats */}
        <div className="relative flex flex-col justify-center gap-10 border-t border-white/10 px-6 py-12 sm:px-8 lg:border-t-0 lg:border-l lg:border-white/10 lg:px-8 lg:py-16">
          <div className="grain absolute inset-0 opacity-60" />
          {stats.map((stat) => (
            <div key={stat.label} className="relative z-10 text-center lg:text-left">
              <p className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right — generated torn-edge values panel */}
        <aside className="relative min-h-[340px] bg-black lg:min-h-full">
          <Image
            src="/images/values-panel.png"
            alt="Respekt, Vielfalt, Teamgeist, Mainz, Vitesse"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 30vw"
            quality={100}
            priority={false}
          />
        </aside>
      </div>

      <div id="mannschaft" className="sr-only">
        Mannschaft
      </div>
    </section>
  );
}
