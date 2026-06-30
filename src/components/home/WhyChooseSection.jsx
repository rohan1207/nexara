import { motion } from "framer-motion";
import { Globe2, Layers, Cog, Sparkles } from "lucide-react";
import { whyChooseUs } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { cn } from "../../utils/cn";

const icons = [Globe2, Layers, Cog, Sparkles];

function FeatureCard({ item, index, wide = false }) {
  const Icon = icons[index] || Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border border-neutral-100 bg-white card-pad shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-amber-200 hover:shadow-[0_16px_40px_rgba(251,191,36,0.12)] sm:rounded-2xl",
        wide && "lg:flex lg:items-center lg:gap-6 lg:py-5 xl:gap-8"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-300 group-hover:scale-x-100" />

      {wide ? (
        <>
          <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4 lg:mb-0 lg:shrink-0 lg:flex-col lg:items-start lg:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </div>
            <span className="font-display text-lg font-bold leading-none text-amber-100 transition-colors duration-300 group-hover:text-amber-200 sm:text-2xl lg:hidden">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="min-w-0 flex-1 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:items-center lg:gap-6 xl:gap-8">
            <div className="min-w-0">
              <div className="mb-2 hidden items-center justify-between gap-3 lg:flex">
                <h3 className="font-display text-base font-bold text-neutral-950 xl:text-lg">{item.title}</h3>
                <span className="shrink-0 font-display text-2xl font-bold leading-none text-amber-100 transition-colors duration-300 group-hover:text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold text-neutral-950 sm:text-base md:text-lg lg:hidden">
                {item.title}
              </h3>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm lg:mt-0">
              {item.description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </div>
            <span className="font-display text-lg font-bold leading-none text-amber-100 transition-colors duration-300 group-hover:text-amber-200 sm:text-2xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display text-sm font-bold text-neutral-950 sm:text-base md:text-lg">{item.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm">{item.description}</p>
        </>
      )}
    </motion.div>
  );
}

export default function WhyChooseSection() {
  const topItems = whyChooseUs.items.slice(0, 3);
  const wideItem = whyChooseUs.items[3];

  return (
    <section className="relative overflow-hidden bg-white section-py">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-amber-400/15 blur-[90px]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-300/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 70% 60% at 30% 50%, black 15%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {whyChooseUs.eyebrow}
          </span>
          <h2 className="mt-4 section-title">{whyChooseUs.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {whyChooseUs.description}
          </p>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
          {/* Left image — stretches to match right column height */}
          <Reveal direction="left" className="relative flex h-full min-h-0 flex-col pb-5 sm:pb-6 lg:pb-5">
            <div className="relative flex h-full min-h-[300px] flex-1 overflow-hidden rounded-2xl border border-amber-100/80 shadow-[0_24px_60px_rgba(251,191,36,0.12)] sm:min-h-[340px] sm:rounded-3xl lg:min-h-0">
              <OptimizedImage
                src={images.factory[0]}
                alt="Nexara Traders power transmission solutions"
                className="h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400 sm:text-xs">
                  {whyChooseUs.imageCaption.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-white sm:mt-1.5 sm:text-xl md:text-2xl">
                  {whyChooseUs.imageCaption.headline}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="absolute -bottom-1 right-2 rounded-xl border border-amber-200/60 bg-neutral-950 px-3.5 py-2.5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:-bottom-2 sm:right-3 sm:rounded-2xl sm:px-5 sm:py-4 lg:-bottom-3"
            >
              <p className="font-display text-xl font-bold text-amber-400 sm:text-2xl md:text-3xl">
                {whyChooseUs.highlight.value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-400 sm:text-xs">
                {whyChooseUs.highlight.label}
              </p>
            </motion.div>

            <div className="pointer-events-none absolute -left-3 top-8 hidden h-24 w-24 rounded-full border border-dashed border-amber-300/40 lg:block" />
          </Reveal>

          {/* Right cards — 3 on top, 4th spans full width */}
          <Stagger
            className="grid h-full grid-cols-1 content-start gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
            stagger={0.1}
          >
            {topItems.map((item, i) => (
              <StaggerItem
                key={item.title}
                className={cn("min-w-0 lg:col-span-1", i === 2 && "sm:col-span-2 lg:col-span-1")}
              >
                <FeatureCard item={item} index={i} />
              </StaggerItem>
            ))}

            {wideItem && (
              <StaggerItem className="min-w-0 sm:col-span-2 lg:col-span-3">
                <FeatureCard item={wideItem} index={3} wide />
              </StaggerItem>
            )}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
