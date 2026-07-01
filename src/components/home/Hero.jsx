import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import HeroModelViewer from "./HeroModelViewer";
import { PillButton } from "../ui/PillButton";
import { heroContent } from "../../constants/siteContent";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-var(--nav-height))] flex-col overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_-10%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_100%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[100px]" />
        <div className="absolute -left-20 bottom-1/4 h-[280px] w-[280px] rounded-full bg-amber-300/15 blur-[80px]" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      </div>

      <div className="hero-content-grid relative mx-auto w-full max-w-[1400px] flex-1 px-4 pb-8 pt-5 sm:px-5 sm:pb-10 sm:pt-6 md:px-8 md:pt-8 lg:px-10 lg:pb-14">
        <motion.div {...fadeUp(0)} className="hero-area-badge mb-5 lg:mb-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1.5 shadow-[0_2px_16px_rgba(251,191,36,0.12)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-950">
              {heroContent.brand}
            </span>
            <span className="hidden h-3 w-px bg-amber-200 sm:block" />
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.1em] text-neutral-500 sm:inline">
              {heroContent.tagline}
            </span>
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="hero-area-title font-display text-balance text-[clamp(1.75rem,4.8vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-neutral-950"
        >
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Precision Power Transmission Components.
          </span>{" "}
          Engineered for Every Drive.
        </motion.h1>

        <div className="hero-area-model my-4 lg:my-0">
          <HeroModelViewer />
        </div>

        <motion.div
          {...fadeUp(0.16)}
          className="hero-area-accent mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 lg:mt-5"
        />

        <motion.p
          {...fadeUp(0.22)}
          className="hero-area-desc mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-600 md:text-base md:leading-7 lg:mt-5"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="hero-area-cta mt-6 flex w-full flex-col gap-2.5 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
          <PillButton
            to="/products"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white shadow-[0_4px_24px_rgba(0,0,0,0.18)] hover:bg-neutral-800 sm:w-auto"
          >
            Explore products
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
          <PillButton
            to="/contact#enquiry"
            variant="outline"
            fullWidth
            className="border-amber-200 bg-white/90 text-neutral-950 hover:border-amber-400 hover:bg-amber-50 sm:w-auto"
          >
            Technical enquiry
          </PillButton>
        </motion.div>

        <motion.div
          {...fadeUp(0.38)}
          className="hero-area-stats mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-2.5"
        >
          {heroContent.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white/70 p-2.5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(251,191,36,0.12)] sm:rounded-2xl sm:p-3.5 md:p-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative font-display text-sm font-bold text-neutral-950 sm:text-base md:text-lg">
                {stat.value}
              </p>
              <p className="relative mt-0.5 text-[10px] font-medium uppercase tracking-wide text-neutral-500 sm:text-[11px]">
                {stat.label}
              </p>
              {i === 0 && (
                <Sparkles className="absolute right-2 top-2 h-3.5 w-3.5 text-amber-400/60" aria-hidden />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
