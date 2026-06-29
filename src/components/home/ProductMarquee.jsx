import { motion } from "framer-motion";

const items = [
  "Loading Arms",
  "Unloading Systems",
  "Swivel Joints",
  "Floating Suction",
  "Prover Tanks",
  "ISO · ASTM · BIS",
];

export default function ProductMarquee() {
  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-white py-3">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brand-500" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
