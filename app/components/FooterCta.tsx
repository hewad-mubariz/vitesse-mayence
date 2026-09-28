import Image from "next/image";

export function FooterCta() {
  return (
    <section id="probetraining" className="relative overflow-hidden">
      <div className="relative min-h-[360px] md:min-h-[440px]">
        <Image
          src="/images/cta-fans.png"
          alt="Fans von Vitesse Mayence"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(241,90,36,0.45))]" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl flex-col items-start justify-center px-4 py-16 md:min-h-[440px] md:px-6 lg:px-8">
          <h2 className="text-stamp max-w-3xl text-[clamp(3rem,10vw,6.5rem)] text-white [transform:skewX(-4deg)]">
            Vitesse ist mehr.
          </h2>
          <p className="mt-4 max-w-lg text-base text-white/85 md:text-lg">
            Du willst mitspielen, mitfiebern oder den Verein stärken? Komm zum
            Probetraining – wir freuen uns auf dich.
          </p>
          <a
            href="mailto:info@vitesse-mayence.de"
            className="mt-8 inline-flex rounded-sm bg-black px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-vm-panel"
          >
            Probetraining anfragen →
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-vm-line bg-black px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo/vitesse-crest.png"
            alt="Vitesse Mayence"
            width={256}
            height={256}
            className="h-12 w-auto object-contain object-bottom"
            quality={100}
            sizes="48px"
          />
          <div>
            <p className="font-display text-2xl text-white">Vitesse Mayence</p>
            <p className="text-xs uppercase tracking-[0.18em] text-vm-muted">
              Fußball. Gemeinschaft. Mainz.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
          <a href="#spieltag" className="hover:text-vm-orange">
            Spieltag
          </a>
          <a href="#verein" className="hover:text-vm-orange">
            Verein
          </a>
          <a href="#aktuelles" className="hover:text-vm-orange">
            Aktuelles
          </a>
          <a href="#partner" className="hover:text-vm-orange">
            Partner
          </a>
          <a href="#probetraining" className="hover:text-vm-orange">
            Probetraining
          </a>
        </div>
        <p className="text-xs text-vm-muted">
          © 2026 Vitesse Mayence e.V.
        </p>
      </div>
    </footer>
  );
}
