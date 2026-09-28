import Image from "next/image";

const posts = [
  {
    tag: "Spielbericht",
    date: "6. Apr. 2025",
    title: "Starke Teamleistung sichert verdienten Heimsieg",
    image: "/images/news-2.png",
    alt: "Jubel nach dem Heimsieg",
  },
  {
    tag: "Verein",
    date: "28. Mär. 2025",
    title: "Neue Gesichter, gleiches Ziel: Saisonauftakt voller Energie",
    image: "/images/news-1.png",
    alt: "Spielszene mit orangem Trikot",
  },
  {
    tag: "Community",
    date: "12. Mär. 2025",
    title: "Probetraining offen: Komm vorbei und spür den Vitesse-Spirit",
    image: "/images/news-3.png",
    alt: "Training und Gemeinschaft",
  },
];

export function News() {
  return (
    <section id="aktuelles" className="bg-vm-ink px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-12">
          <h2 className="text-stamp text-[clamp(2.4rem,6vw,4rem)] text-white">Aktuelles</h2>
          <a
            href="#aktuelles"
            className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-vm-orange transition hover:text-vm-orange-hot"
          >
            Alle News →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-sm bg-vm-panel transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-vm-orange px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-black">
                  {post.tag}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-vm-muted">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-white md:text-xl">
                    {post.title}
                  </h3>
                </div>
                <span className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition group-hover:border-vm-orange group-hover:text-vm-orange">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
