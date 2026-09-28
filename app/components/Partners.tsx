import Image from "next/image";

const partners = [
  { src: "/images/partner-mainz.png", alt: "Mainz", w: 86, h: 73 },
  { src: "/images/partner-lotto.png", alt: "Lotto Rheinland-Pfalz", w: 133, h: 61 },
  { src: "/images/partner-bitburger.png", alt: "Bitburger", w: 149, h: 62 },
  { src: "/images/partner-jako.png", alt: "Jako", w: 172, h: 62 },
];

export function Partners() {
  return (
    <section id="partner" className="bg-[#f3f3f3] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
        <p className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1a1a1a] md:text-xs">
          Unsere Partner
        </p>

        <div className="flex w-full flex-wrap items-center justify-start gap-x-10 gap-y-5 md:flex-1 md:justify-center md:gap-x-12 lg:gap-x-16">
          {partners.map((partner) => (
            <Image
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              width={partner.w}
              height={partner.h}
              className="h-8 w-auto object-contain md:h-9"
              quality={100}
            />
          ))}
        </div>

        <a
          href="#partner"
          className="inline-flex shrink-0 items-center rounded-[3px] border border-[#1a1a1a] px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1a1a1a] transition hover:bg-[#1a1a1a] hover:text-white"
        >
          Alle Partner →
        </a>
      </div>
    </section>
  );
}
