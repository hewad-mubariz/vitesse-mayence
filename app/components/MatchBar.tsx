import Image from "next/image";

export function MatchBar() {
  return (
    <section
      id="spieltag"
      className="relative z-20 -mt-28 px-3 sm:-mt-28 sm:px-4 md:-mt-32 md:px-5 lg:px-6"
    >
      <div className="mx-auto grid max-w-[1600px] gap-3 lg:grid-cols-2 lg:gap-4">
        {/* Nächstes Spiel */}
        <article className="rounded-md border border-white/8 bg-[#121212] p-4 shadow-2xl shadow-black/50 sm:p-5 md:p-7">
          <div className="mb-5 flex items-start justify-between gap-2 sm:mb-8 sm:items-center sm:gap-3">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white sm:gap-2.5 sm:text-[13px] sm:tracking-[0.14em]">
              <CalendarIcon className="text-vm-orange" />
              Nächstes Spiel
            </p>
            <p className="max-w-[42%] text-right text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-white/55 sm:max-w-none sm:text-[11px] sm:tracking-[0.14em]">
              C-Klasse Mainz-Bingen
            </p>
          </div>

          <div className="mb-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:mb-8 sm:gap-3 md:gap-6">
            <ClubBlock src="/logo/vitesse-crest.png" name={"Vitesse\nMayence"} />
            <div className="min-w-0 px-0.5 text-center sm:px-1 md:px-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-white/90 sm:text-sm sm:tracking-[0.08em]">
                Sa. 12. Apr. 2025
              </p>
              <p className="font-display mt-0.5 text-[clamp(2.2rem,12vw,4.25rem)] leading-none text-white sm:mt-1">
                15:00
              </p>
              <p className="mt-2 flex items-start justify-center gap-1 text-[9px] leading-snug text-white/70 sm:mt-3 sm:items-center sm:gap-1.5 sm:text-[11px] md:text-xs">
                <PinIcon />
                <span className="max-w-[9.5rem] sm:max-w-none">
                  <span className="sm:hidden">Sportanlage Bretzenheim</span>
                  <span className="hidden sm:inline">
                    Sportanlage Mainz-Bretzenheim
                  </span>
                </span>
              </p>
            </div>
            <ClubBlock src="/logo/crest-tsv-mainz.png" name={"TSV\nMainz"} />
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
            <a
              href="#spieltag"
              className="btn-primary rounded-sm px-6 py-3 text-[11px] sm:px-8 sm:py-3.5 sm:text-xs"
            >
              Zum Spiel
            </a>
            <a
              href="#spieltag"
              className="btn-ghost rounded-sm px-5 py-3 text-[11px] sm:px-6 sm:py-3.5 sm:text-xs"
            >
              In Kalender speichern
            </a>
          </div>
        </article>

        {/* Letztes Spiel */}
        <article className="relative overflow-hidden rounded-md border border-white/8 shadow-2xl shadow-black/50">
          <Image
            src="/images/news-2.png"
            alt=""
            fill
            className="object-cover object-center opacity-40 grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/90" />

          <div className="relative z-10 p-4 sm:p-5 md:p-7">
            <div className="mb-5 flex items-start justify-between gap-2 sm:mb-8 sm:items-center sm:gap-3">
              <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white sm:gap-2.5 sm:text-[13px] sm:tracking-[0.14em]">
                <CalendarIcon className="text-vm-orange" />
                Letztes Spiel
              </p>
              <p className="max-w-[42%] text-right text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-white/55 sm:max-w-none sm:text-[11px] sm:tracking-[0.14em]">
                C-Klasse Mainz-Bingen
              </p>
            </div>

            <div className="mb-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:mb-8 sm:gap-3 md:gap-6">
              <ClubBlock src="/logo/vitesse-crest.png" name={"Vitesse\nMayence"} />
              <div className="min-w-0 px-1 text-center md:px-6">
                <p className="font-display text-[clamp(2.6rem,14vw,4.75rem)] leading-none tracking-wide text-white">
                  3<span className="mx-1 text-white/50">:</span>1
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/85 sm:mt-3 sm:text-sm sm:tracking-[0.1em]">
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
                className="inline-flex items-center gap-2 rounded-sm border border-white/35 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-vm-orange transition hover:border-vm-orange hover:bg-white/5 sm:px-6 sm:py-3.5 sm:text-xs"
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
    <div className="flex flex-col items-center gap-1.5 text-center sm:gap-2.5">
      <Image
        src={src}
        alt={name.replace("\n", " ")}
        width={160}
        height={160}
        className="h-14 w-14 object-contain drop-shadow-lg sm:h-[4.5rem] sm:w-[4.5rem] md:h-24 md:w-24"
        quality={100}
        unoptimized={src.endsWith(".svg")}
      />
      <p className="whitespace-pre-line text-[9px] font-extrabold uppercase leading-tight tracking-[0.06em] text-white sm:text-[10px] sm:tracking-[0.08em] md:text-[11px]">
        {name}
      </p>
    </div>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${className}`}
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
      className="mt-0.5 h-3 w-3 shrink-0 sm:mt-0 sm:h-3.5 sm:w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 21s6.5-5 6.5-10.2a6.5 6.5 0 10-13 0C5.5 16 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}
