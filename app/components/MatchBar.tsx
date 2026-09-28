import Image from "next/image";

export function MatchBar() {
  return (
    <section
      id="spieltag"
      className="relative z-20 -mt-24 px-3 sm:-mt-28 sm:px-4 md:-mt-32 md:px-5 lg:px-6"
    >
      <div className="mx-auto grid max-w-[1600px] gap-3 lg:grid-cols-2 lg:gap-4">
        {/* Nächstes Spiel */}
        <article className="rounded-md border border-white/8 bg-[#121212] p-5 shadow-2xl shadow-black/50 md:p-7">
          <div className="mb-8 flex items-center justify-between gap-3">
            <p className="flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
              <CalendarIcon className="text-vm-orange" />
              Nächstes Spiel
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              C-Klasse Mainz-Bingen
            </p>
          </div>

          <div className="mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
            <ClubBlock src="/logo/vitesse-crest.png" name={"Vitesse\nMayence"} />
            <div className="px-1 text-center md:px-4">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/90">
                Sa. 12. Apr. 2025
              </p>
              <p className="font-display mt-1 text-[clamp(2.8rem,6vw,4.25rem)] leading-none text-white">
                15:00
              </p>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/70 md:text-xs">
                <PinIcon />
                <span>Sportanlage Mainz-Bretzenheim</span>
              </p>
            </div>
            <ClubBlock src="/logo/crest-tsv-mainz.png" name={"TSV\nMainz"} />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#spieltag"
              className="btn-primary rounded-sm px-8 py-3.5 text-xs"
            >
              Zum Spiel
            </a>
            <a
              href="#spieltag"
              className="btn-ghost rounded-sm px-6 py-3.5 text-xs"
            >
              In Kalender speichern
            </a>
          </div>
        </article>

        {/* Letztes Spiel — with photo background */}
        <article className="relative overflow-hidden rounded-md border border-white/8 shadow-2xl shadow-black/50">
          <Image
            src="/images/news-2.png"
            alt=""
            fill
            className="object-cover object-center opacity-40 grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/90" />

          <div className="relative z-10 p-5 md:p-7">
            <div className="mb-8 flex items-center justify-between gap-3">
              <p className="flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white">
                <CalendarIcon className="text-vm-orange" />
                Letztes Spiel
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
                C-Klasse Mainz-Bingen
              </p>
            </div>

            <div className="mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
              <ClubBlock src="/logo/vitesse-crest.png" name={"Vitesse\nMayence"} />
              <div className="px-2 text-center md:px-6">
                <p className="font-display text-[clamp(3.2rem,7vw,4.75rem)] leading-none tracking-wide text-white">
                  3<span className="mx-1 text-white/50">:</span>1
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-white/85">
                  So. 6. Apr. 2025
                </p>
              </div>
              <ClubBlock
                src="/logo/crest-sv-hechtsheim.png"
                name={"SV\nHechtsheim"}
              />
            </div>

            <div className="flex justify-center">
              <a
                href="#aktuelles"
                className="inline-flex items-center gap-2 rounded-sm border border-white/35 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-vm-orange transition hover:border-vm-orange hover:bg-white/5"
              >
                Spielbericht lesen →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ClubBlock({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <Image
        src={src}
        alt={name.replace("\n", " ")}
        width={160}
        height={160}
        className="h-[4.5rem] w-[4.5rem] object-contain drop-shadow-lg md:h-24 md:w-24"
        quality={100}
        unoptimized={src.endsWith(".svg")}
      />
      <p className="whitespace-pre-line text-[10px] font-extrabold uppercase leading-tight tracking-[0.08em] text-white md:text-[11px]">
        {name}
      </p>
    </div>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M8 13h2M12 13h2M16 13h2M8 17h2M12 17h2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 21s6.5-5 6.5-10.2a6.5 6.5 0 10-13 0C5.5 16 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}
