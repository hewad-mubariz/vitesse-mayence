import Image from "next/image";

const stats = [
  { value: "1986", label: "Gegründet" },
  { value: "1", label: "Gemeinsames Ziel" },
  { value: "∞", label: "Viele Geschichten" },
];

export function About() {
  return (
    <section id="verein" className="relative overflow-x-hidden bg-black">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.35fr_0.7fr_0.95fr]">
        {/* Left — copy on photo */}
        <div className="relative min-h-[380px] overflow-hidden px-5 py-12 sm:min-h-[420px] sm:px-8 sm:py-14 md:min-h-[520px] md:px-10 md:py-20 lg:px-12">
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
            <h2 className="text-stamp text-[clamp(2.4rem,8vw,4.6rem)]">
              <span className="stamp-white block">Lokal.</span>
              <span className="stamp-white block">Leidenschaftlich.</span>
              <span className="stamp-white block">Echt.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/85 sm:mt-6 sm:text-[15px] md:text-base">
              Der SV Vitesse Mayence steht seit 1986 für Fußball, Zusammenhalt
              und Vielfalt in Mainz-Bretzenheim. Wir sind mehr als nur ein
              Verein – wir sind eine Gemeinschaft.
            </p>
            <a
              href="#probetraining"
              className="btn-white mt-7 rounded-sm px-5 py-3 text-[11px] sm:mt-8 sm:px-6 sm:py-3.5 sm:text-xs"
            >
              Mehr über uns →
            </a>
          </div>
        </div>

        {/* Stats + values sit together on mobile so the block doesn’t feel empty */}
        <div className="lg:contents">
          <div className="relative border-t border-white/10 px-4 py-6 sm:px-6 sm:py-8 lg:flex lg:flex-col lg:justify-center lg:gap-10 lg:border-t-0 lg:border-l lg:border-white/10 lg:px-8 lg:py-16">
            <div className="grain absolute inset-0 opacity-60" />
            <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-5 lg:flex lg:flex-col lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-[clamp(1.9rem,7.5vw,4.5rem)] leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-white/65 sm:mt-1.5 sm:text-[11px] sm:tracking-[0.18em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative h-[100svh] w-full lg:h-auto lg:min-h-full">
            <Image
              src="/images/values-panel.png"
              alt="Respekt, Vielfalt, Teamgeist, Mainz, Vitesse"
              fill
              className="object-cover object-[20%_center] lg:object-left"
              sizes="(max-width: 1024px) 100vw, 30vw"
              quality={100}
            />
          </aside>
        </div>
      </div>

      <div id="mannschaft" className="sr-only">
        Mannschaft
      </div>
    </section>
  );
}
