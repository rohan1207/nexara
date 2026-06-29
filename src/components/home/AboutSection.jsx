import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PillButton } from "../ui/PillButton";

const highlights = [
  { value: "1995", label: "Founded" },
  { value: "3128 m²", label: "Manufacturing" },
  { value: "ISO 9001", label: "DNV Certified" },
  { value: "₹10 Cr", label: "Sales volume" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[var(--bg-base)] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-start">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem]">
              Engineering trust
              <span className="block text-brand-700">since 1995</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
              SEPL was established in the year 1995. Company is managed by team of directors with vast
              experience and expertise in their respective fields of Operation. SEPL is an ISO 9001:2008
              Certified Company for Design. Steelfab Engineering Private Ltd.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="rounded-2xl border border-[var(--border)] bg-white px-4 py-4 shadow-soft"
                >
                  <p className="font-display text-xl font-bold text-brand-800">{item.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <PillButton to="/about#introduction" variant="outline" className="mt-8 px-6 py-3 text-sm">
              Read full story
            </PillButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="space-y-4"
          >
            {[
              {
                text: "We take this opportunity to introduce ourselves as one of the largest and leading manufacturers of fluid handling systems. Steelfab Engineering Pvt. Ltd (SEPL) came in existence in the year 1995, and since then there has been no looking back. SEPL now has 3128 sq meter area with world class manufacturing facilities at two places.",
              },
              {
                text: "SEPL has achieved ISO 9001: 2008 by DNV and also SEPL confirms to some of the highest design standards in India and world — ISO, ASTM and BIS — with sales volume nearly 10 cr.",
              },
              {
                text: "Today we are leading Manufacturer, Supplier, Exporter of a wide range of Loading Arms, Unloading Arms, Loading Arms Systems, Unloading Arms Systems, Swivel Joints, Floating Suction Assemblies, Prover Tanks, Storage Tanks for Industrial applications.",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft transition-shadow hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">{block.text}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2 rounded-2xl border border-brand-200 bg-brand-50/80 px-5 py-4"
            >
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-800 shadow-sm">
                Pune, Maharashtra
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-800 shadow-sm">
                Exports to Saudi Arabia
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-800 shadow-sm">
                ISO · ASTM · BIS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
