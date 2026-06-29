import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { enquiryProducts } from "../constants/sitePages";
import { cn } from "../utils/cn";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <PageHero
        badge="Get in touch"
        title="Enquiry"
        description="Request a quote, technical consultation or product information — our team will respond promptly."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">Contact information</h3>
              <ul className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-600" />
                  <span>Pune, Maharashtra, India</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href="tel:+919881070692" className="hover:text-brand-800">
                    +91 98810 70692
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href="mailto:info@steelfabeng.com" className="hover:text-brand-800">
                    info@steelfabeng.com
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              For loading arms, unloading systems, swivel joints, floating suction assemblies and prover tanks — share
              your application details and we will provide a tailored solution.
            </p>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-brand-200 bg-brand-50 px-8 py-12 text-center"
              >
                <p className="font-display text-2xl font-bold text-brand-900">Thank you!</p>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Your enquiry has been received. We will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Full name *</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Company</span>
                    <input
                      type="text"
                      name="company"
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Email *</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Phone *</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Product interest</span>
                    <select
                      name="product"
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    >
                      {enquiryProducts.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Message *</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-1.5 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-800 active:scale-[0.98] sm:w-auto"
                  )}
                >
                  Submit enquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
