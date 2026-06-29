import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const ease = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.15,
}) {
  const offset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}) {
  const isDark = theme === "dark";

  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]",
            isDark
              ? "border-white/25 bg-white/10 text-white"
              : "border-brand-200 bg-brand-50 text-brand-700"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", isDark ? "bg-brand-300" : "bg-brand-600")} />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-[var(--text-primary)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            isDark ? "text-slate-200" : "text-[var(--text-secondary)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
