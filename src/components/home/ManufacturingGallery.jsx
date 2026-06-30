import { Wrench, Cog, Ruler, Settings2, ArrowUpRight } from "lucide-react";
import { services } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

const icons = [Wrench, Cog, Ruler, Settings2, Wrench, Cog, Settings2];

function ServiceCard({ item, index }) {
  const Icon = icons[index % icons.length];

  return (
    <div className="group flex h-full items-center gap-2 rounded-xl border border-neutral-100 bg-white px-3 py-3 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-neutral-950 sm:h-9 sm:w-9">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
      <p className="text-xs font-medium leading-snug text-neutral-700 sm:text-sm">{item}</p>
    </div>
  );
}

export default function ServicesSection() {
  const topRow = services.items.slice(0, 4);
  const bottomRow = services.items.slice(4);
  return (
    <section id="services" className="relative overflow-hidden bg-neutral-50 section-py">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-300/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-amber-400/8 blur-[80px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {services.eyebrow}
          </span>
          <h2 className="mt-4 section-title">
            {services.title}{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              {services.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {services.description}
          </p>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
        </Reveal>

        <Stagger className="mt-10 card-grid-2-4 sm:mt-14" stagger={0.05}>
          {topRow.map((item, i) => (
            <StaggerItem key={item}>
              <ServiceCard item={item} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger
          className="mt-3 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:mx-auto lg:max-w-[75%] lg:grid-cols-3 lg:gap-5"
          stagger={0.05}
        >
          {bottomRow.map((item, i) => (
            <StaggerItem key={item} className={i === 2 ? "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.5rem)] lg:col-span-1 lg:mx-0 lg:max-w-none" : ""}>
              <ServiceCard item={item} index={i + 4} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10 text-center">
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto"
          >
            Request a service quote
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
