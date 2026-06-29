import { motion } from "framer-motion";
import OptimizedImage from "../ui/OptimizedImage";
import { cn } from "../../utils/cn";

export default function PageHero({ badge, title, description, image, theme = "brand" }) {
  const isNexera = theme === "nexera";

  return (
    <section
      className={cn(
        "relative overflow-hidden pb-14 pt-[calc(var(--nav-height)+1.25rem)] sm:pb-20 sm:pt-[calc(var(--nav-height)+2rem)] md:pb-28",
        isNexera
          ? "bg-white text-neutral-950"
          : "bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white"
      )}
    >
      {isNexera ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(251,191,36,0.15),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 15%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>
      ) : image ? (
        <>
          <OptimizedImage src={image} alt="" className="absolute inset-0 h-full w-full" imgClassName="opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/70" />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {isNexera && image ? (
        <>
          <OptimizedImage
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full"
            imgClassName="opacity-[0.07] object-cover"
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8 lg:px-10">
        {badge ? (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]",
              isNexera
                ? "border border-amber-200/80 bg-white text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)]"
                : "border border-white/20 bg-white/10 font-semibold tracking-wider backdrop-blur-sm"
            )}
          >
            {isNexera ? <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> : null}
            {badge}
          </motion.span>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={cn(
            "mt-5 font-display font-bold",
            isNexera
              ? "mt-4 text-[clamp(1.65rem,5.5vw,3.75rem)] capitalize sm:mt-5"
              : "text-4xl md:text-5xl lg:text-6xl"
          )}
        >
          {isNexera ? (
            <>
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                {title}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "mx-auto mt-3 max-w-2xl text-sm sm:mt-4 sm:text-base md:text-lg",
              isNexera ? "text-neutral-600" : "text-brand-100"
            )}
          >
            {description}
          </motion.p>
        ) : null}
        {isNexera ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
          />
        ) : null}
      </div>
    </section>
  );
}
