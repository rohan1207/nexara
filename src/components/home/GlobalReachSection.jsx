import { whyNexara } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function GlobalReachSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 section-py">
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {whyNexara.eyebrow}
          </span>
          <h2 className="mt-4 section-title">
            {whyNexara.title}{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              {whyNexara.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 text-neutral-600">{whyNexara.description}</p>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
        </Reveal>

        <Stagger className="mt-10 card-grid-2-3 sm:mt-12" stagger={0.07}>
          {whyNexara.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-xl border border-neutral-100 bg-white card-pad shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] sm:rounded-2xl">
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-amber-500 sm:h-5 sm:w-5" />
                  <span className="font-display text-base font-bold text-amber-100 group-hover:text-amber-200 sm:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-sm font-bold text-neutral-950 sm:mt-3 sm:text-base">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10 text-center">
          <PillButton
            to="/about"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto"
          >
            Learn more about us
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
