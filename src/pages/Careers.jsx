import { motion } from "framer-motion";
import { Briefcase, Mail, CheckCircle2 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { careerBenefits, openRoles } from "../constants/sitePages";
import { PillButton } from "../components/ui/PillButton";

export default function Careers() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <PageHero
        badge="Join SEPL"
        title="Careers"
        description="Build your career with a leading manufacturer of loading arms and fluid handling systems in Pune."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <motion.div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Why work with us</h2>
            <ul className="mt-6 space-y-3">
              {careerBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-brand-50 px-6 py-5">
              <p className="text-sm font-semibold text-brand-900">Send your resume</p>
              <a
                href="mailto:careers@steelfabeng.com"
                className="mt-2 inline-flex items-center gap-2 text-brand-700 hover:underline"
              >
                <Mail className="h-4 w-4" />
                careers@steelfabeng.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Open positions</h2>
            <div className="mt-6 space-y-4">
              {openRoles.map((role) => (
                <motion.div
                  key={role.title}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <h3 className="font-display text-lg font-bold">{role.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-700">{role.type}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{role.summary}</p>
                    </div>
                  </div>
                  <PillButton
                    href="mailto:careers@steelfabeng.com"
                    variant="outline"
                    className="mt-4 px-5 py-2 text-sm"
                  >
                    Apply now
                  </PillButton>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
