import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { applicationsSection } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import AnimatedAppIcon from "./AnimatedAppIcon";

export default function ApplicationsSection() {
  const { applications, highlights } = applicationsSection;

  return (
    <section className="relative overflow-hidden bg-neutral-50 section-py">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-amber-300/10 blur-[90px]" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber-400/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        {/* Header — centered, matches Why Choose / Products sections */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {applicationsSection.eyebrow}
          </span>
          <h2 className="mt-4 section-title">
            {applicationsSection.title}{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              {applicationsSection.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {applicationsSection.description}
          </p>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
        </Reveal>

        {/* Industry cards — uniform 3-column grid */}
        <Stagger className="mt-10 card-grid-2-3 sm:mt-14" stagger={0.06}>
          {applications.map((app, i) => (
              <StaggerItem key={app.title}>
                <div className="group flex h-full flex-col rounded-xl border border-neutral-100 bg-white card-pad shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] sm:rounded-2xl">
                  <div className="mb-3 flex items-start justify-between gap-2 sm:mb-5 sm:gap-4">
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-950 sm:h-11 sm:w-11 sm:rounded-xl">
                      <span className="pointer-events-none absolute inset-0 bg-amber-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <AnimatedAppIcon type={app.icon} />
                    </span>
                    <span className="font-display text-lg font-bold leading-none text-amber-100 transition-colors group-hover:text-amber-200 sm:text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-neutral-950 sm:text-lg">{app.title}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm">{app.description}</p>
                </div>
              </StaggerItem>
            ))}
        </Stagger>

        {/* Support highlights — subtle featured strip */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/90 via-white to-amber-50/50 shadow-[0_12px_40px_rgba(251,191,36,0.1)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-400/15 blur-2xl" />

            <div className="relative grid grid-cols-2 divide-x divide-y divide-amber-100/90 md:grid-cols-3 md:divide-y-0">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative px-3 py-5 text-center sm:px-6 sm:py-7 md:px-7 md:py-8"
                >
                  <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inset-x-8" />

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700 shadow-sm">
                    <span className="h-1 w-1 rounded-full bg-amber-500" />
                    {item.tag}
                  </span>
                  <p className="mt-3 font-display text-base font-bold text-neutral-950 md:text-[1.05rem]">
                    {item.title}
                  </p>
                  <p className="mx-auto mt-2 max-w-[280px] text-sm leading-relaxed text-neutral-600">
                    {item.detail}
                  </p>

                  <span className="mt-4 inline-block font-display text-lg font-bold text-amber-200/80 transition-colors group-hover:text-amber-300/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA — centered, balanced */}
        <Reveal delay={0.15} className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800"
          >
            Discuss your application
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
          <Link
            to="/#products"
            className="btn-mobile border border-amber-200 bg-white text-neutral-950 transition-colors hover:border-amber-300 hover:bg-amber-50"
          >
            View product catalog
            <ArrowUpRight className="h-4 w-4 text-amber-600" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
