import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { aboutSummary } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

function BgShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-16 top-24 h-56 w-56 rounded-full border border-amber-200/50 md:h-72 md:w-72" />
      <div className="absolute left-8 top-40 h-28 w-28 rotate-12 rounded-[2rem] bg-amber-400/[0.06] md:h-36 md:w-36" />
      <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-amber-300/[0.07] blur-3xl" />
      <div className="absolute bottom-16 right-[8%] h-44 w-44 rounded-full border-2 border-dashed border-amber-300/25" />
      <div className="absolute bottom-32 left-[12%] h-3 w-3 rounded-full bg-amber-500/60" />
      <div className="absolute right-[22%] top-[18%] h-2 w-2 rounded-full bg-amber-400/50" />
      <div className="absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/60" />
      <div
        className="absolute bottom-0 right-0 h-64 w-64 opacity-40 md:h-80 md:w-80"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(251,191,36,0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(circle at 100% 100%, black 0%, transparent 70%)",
        }}
      />
      <svg
        className="absolute left-[42%] top-12 hidden h-24 w-24 text-amber-200/40 lg:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M10 50 Q50 10 90 50 Q50 90 10 50" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 section-py">
      <BgShapes />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy */}
          <div className="min-w-0 lg:col-span-5 xl:col-span-5">
            <Reveal>
              <div className="flex items-start gap-4">
                <div className="mt-2 hidden h-16 w-1 shrink-0 rounded-full bg-gradient-to-b from-amber-500 to-amber-200 sm:block" />
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {aboutSummary.eyebrow}
                  </span>

                  <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-neutral-950">
                    {aboutSummary.title}
                    <span className="mt-1 block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                      {aboutSummary.titleAccent}
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600 md:text-base md:leading-7">
                    {aboutSummary.lead}
                  </p>
                </div>
              </div>
            </Reveal>

            <Stagger
              className="mt-6 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3"
              stagger={0.07}
            >
              {aboutSummary.pillars.map((pillar, i) => (
                <StaggerItem key={pillar} className="min-w-0">
                  <div className="group flex h-full min-w-0 gap-2.5 rounded-xl border border-white bg-white/80 p-3 shadow-[0_2px_16px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all hover:border-amber-100 hover:shadow-[0_8px_28px_rgba(251,191,36,0.1)] sm:gap-3 sm:rounded-2xl sm:p-4">
                    <span className="shrink-0 font-display text-base font-bold leading-none text-amber-200 transition-colors group-hover:text-amber-400 sm:text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 flex-1 break-words text-xs leading-snug text-neutral-600 sm:text-sm sm:leading-relaxed">
                      {pillar}
                    </p>
                  </div>
                </StaggerItem>
              ))}

              <StaggerItem className="flex min-w-0 items-center justify-end sm:col-start-2">
                <PillButton
                  to="/about"
                  variant="primary"
                  className="w-auto shrink-0 border-0 bg-neutral-950 px-5 text-white hover:bg-neutral-800"
                >
                  Read more
                  <ArrowUpRight className="h-4 w-4 text-amber-400" />
                </PillButton>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.2} className="mt-4 flex flex-wrap gap-1.5 sm:mt-3">
              {aboutSummary.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-amber-100 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 sm:px-3 sm:py-1 sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Visual bento */}
          <Reveal direction="right" className="relative min-w-0 lg:col-span-7 xl:col-span-7">
            <div className="absolute -right-2 -top-2 h-full w-full rounded-[2rem] border border-amber-200/40 md:-right-4 md:-top-4 md:rounded-[2.5rem]" />

            <div className="relative grid grid-cols-12 gap-3 md:gap-4">
              <div className="relative col-span-12 overflow-hidden rounded-[1.75rem] sm:col-span-8 sm:row-span-2 sm:min-h-[340px] md:min-h-[400px] md:rounded-[2rem]">
                <OptimizedImage
                  src={images.factory[1]}
                  alt="Nexara Traders industrial operations"
                  className="h-full min-h-[240px] w-full object-cover sm:min-h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/50 via-transparent to-amber-500/10" />
                <div className="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md md:bottom-6 md:left-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">Since 1990s</p>
                  <p className="mt-0.5 font-display text-sm font-bold text-white md:text-base">Trusted nationwide</p>
                </div>
              </div>

              <div className="col-span-6 overflow-hidden rounded-2xl sm:col-span-4 sm:row-span-1">
                <OptimizedImage
                  src={images.factory[2]}
                  alt="Technical expertise"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="col-span-6 overflow-hidden rounded-2xl sm:col-span-4 sm:row-span-1">
                <OptimizedImage
                  src={images.factory[3]}
                  alt="Industrial solutions"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10 -mt-6 mx-2 grid grid-cols-2 gap-2 rounded-2xl border border-amber-100/80 bg-white p-3 shadow-[0_16px_48px_rgba(251,191,36,0.12)] sm:mx-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-amber-100 sm:p-0 md:-mt-8 md:mx-8"
            >
              {aboutSummary.highlights.map((item) => (
                <div key={item.label} className="min-w-0 px-2 py-2.5 text-center sm:px-4 sm:py-4">
                  <p className="truncate font-display text-base font-bold text-neutral-950 sm:text-lg md:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500 sm:text-[10px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
