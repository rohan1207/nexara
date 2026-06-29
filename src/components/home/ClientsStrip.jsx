import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { partnerBrands, partnersSection } from "../../constants/partners";
import { images } from "../../constants/images";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

function PartnerLogoCard({ brand }) {
  return (
    <div className="mx-2 flex w-[160px] shrink-0 flex-col items-center rounded-xl border border-neutral-100 bg-white px-3 py-3 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:mx-3 sm:w-[200px] sm:rounded-2xl sm:px-4 sm:py-4 md:w-[220px]">
      <div className="flex h-[56px] w-full items-center justify-center rounded-lg bg-neutral-50/80 p-2 sm:h-[72px] sm:rounded-xl sm:p-3">
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.src = images.logo;
            e.currentTarget.className = "max-h-full max-w-full object-contain opacity-40 grayscale";
          }}
        />
      </div>
      <p className="mt-3 w-full truncate text-center text-[11px] font-bold uppercase tracking-wide text-neutral-950">
        {brand.name}
      </p>
      <p className="mt-1 line-clamp-2 min-h-[2rem] text-center text-[10px] leading-snug text-neutral-500">
        {brand.tagline}
      </p>
    </div>
  );
}

function LogoMarquee({ direction = "left", brands }) {
  const track = [...brands, ...brands];

  return (
    <div
      className="marquee-row group relative overflow-hidden py-1"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex w-max will-change-transform",
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        )}
      >
        {track.map((brand, i) => (
          <PartnerLogoCard key={`${brand.id}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default function ClientsStrip() {
  return (
    <section className="relative overflow-hidden bg-white section-py">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-amber-300/10 blur-[90px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-amber-400/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {partnersSection.eyebrow}
          </span>
          <h2 className="mt-4 section-title">
            {partnersSection.title}
            <span className="mt-1 block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              {partnersSection.titleAccent}
            </span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
          <p className="text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
            {partnersSection.lead}
          </p>
          {partnersSection.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-neutral-600 md:text-[15px] md:leading-7">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="relative mt-14 space-y-5 md:mt-16">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
          <LogoMarquee direction="left" brands={partnerBrands} />
          <LogoMarquee direction="right" brands={[...partnerBrands].reverse()} />
        </Reveal>

        <Reveal delay={0.16} className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto"
          >
            Partner with Nexara Traders
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
          <Link
            to="/clients"
            className="btn-mobile border border-amber-200 bg-white text-neutral-950 transition-colors hover:border-amber-300 hover:bg-amber-50"
          >
            View all partners
            <ArrowUpRight className="h-4 w-4 text-amber-600" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
