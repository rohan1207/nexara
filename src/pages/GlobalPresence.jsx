import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { globalRegions } from "../constants/sitePages";

export default function GlobalPresence() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <PageHero
        badge="Worldwide reach"
        title="Global Presence"
        description="From Pune, Maharashtra — delivering fluid handling solutions to customers in Saudi Arabia, Africa, Asia-Pacific and beyond."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {[
            { value: "10+", label: "Export countries" },
            { value: "1995", label: "Serving since" },
            { value: "Pune", label: "Manufacturing hub" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--border)] bg-white px-6 py-8 text-center shadow-soft"
            >
              <p className="font-display text-3xl font-bold text-brand-700">{stat.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <motion.div className="space-y-6">
          {globalRegions.map((region, i) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:flex-row md:items-center md:gap-8 md:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <Globe2 className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{region.region}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {region.countries.join(" · ")}
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{region.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-center text-sm text-[var(--text-muted)]">
          Headquartered in Pune, Maharashtra, India · Exports coordinated for international projects
        </p>
      </div>
    </motion.div>
  );
}
