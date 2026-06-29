import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { company } from "../constants/siteContent";
import { enquiryProducts } from "../constants/sitePages";
import { cn } from "../utils/cn";
import { Reveal } from "../components/ui/Reveal";

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.hash === "#enquiry") {
      requestAnimationFrame(() => {
        document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge="Contact"
        title="Reach out to us"
        description="Product enquiries, technical queries, and vendor registration — Nexara Traders, Pune, Maharashtra."
      />

      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm md:p-8">
                <h2 className="font-display text-xl font-bold text-neutral-950">Office & correspondence</h2>
                <p className="mt-4 flex gap-3 text-sm leading-relaxed text-neutral-600">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <span>
                    <strong className="text-neutral-950">{company.name}</strong>
                    <br />
                    {company.address.full}
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm md:p-8">
                <h2 className="font-display text-xl font-bold text-neutral-950">Direct contacts</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Proprietor: <strong className="text-neutral-800">{company.proprietor}</strong>
                </p>
                <ul className="mt-5 space-y-4">
                  {company.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-lg font-semibold text-neutral-900 hover:text-amber-700"
                      >
                        <Phone className="h-5 w-5 text-amber-500" />
                        {phone}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-neutral-600 hover:text-amber-700"
                    >
                      <MessageCircle className="h-5 w-5 text-amber-500" />
                      WhatsApp: {company.whatsapp}
                    </a>
                  </li>
                  {company.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 text-sm text-neutral-600 hover:text-amber-700"
                      >
                        <Mail className="h-5 w-5 text-amber-500" />
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-neutral-500">
                  Website:{" "}
                  <a href={company.website} className="font-medium text-amber-700 hover:underline" target="_blank" rel="noopener noreferrer">
                    www.nexaratraders.com
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 md:p-8">
                <h3 className="font-display font-bold text-neutral-950">For your enquiry, include:</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                  <li>• Product name or KTR / AutoLock model number</li>
                  <li>• Bore size, shaft diameter, and keyway requirements</li>
                  <li>• Torque, speed, and application details</li>
                  <li>• Quantity required</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.1}>
            <div id="enquiry" className="scroll-mt-28">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-amber-200 bg-amber-50 px-8 py-16 text-center"
                >
                  <p className="font-display text-3xl font-bold text-neutral-950">Thank you!</p>
                  <p className="mt-3 text-neutral-600">We will respond to your enquiry shortly.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:rounded-3xl sm:p-6 md:p-10"
                >
                  <h2 className="font-display text-2xl font-bold text-neutral-950">Send your enquiry</h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    Our team provides technical consultation and quotations for all product lines.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                    <label className="col-span-1 block">
                      <span className="text-sm font-semibold">Full name *</span>
                      <input
                        required
                        type="text"
                        className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm"
                      />
                    </label>
                    <label className="col-span-1 block">
                      <span className="text-sm font-semibold">Company</span>
                      <input
                        type="text"
                        className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm"
                      />
                    </label>
                    <label className="col-span-1 block">
                      <span className="text-sm font-semibold">Email *</span>
                      <input
                        required
                        type="email"
                        className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm"
                      />
                    </label>
                    <label className="col-span-1 block">
                      <span className="text-sm font-semibold">Phone *</span>
                      <input
                        required
                        type="tel"
                        className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm"
                      />
                    </label>
                    <label className="col-span-2 block">
                      <span className="text-sm font-semibold">Product interest</span>
                      <select className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm">
                        {enquiryProducts.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="col-span-2 block">
                      <span className="text-sm font-semibold">Message *</span>
                      <textarea
                        required
                        rows={5}
                        placeholder="Bore size, torque, speed, application, quantity..."
                        className="mt-1.5 w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-amber-400 sm:px-4 sm:py-3 sm:text-sm"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] sm:w-auto"
                    )}
                  >
                    Submit enquiry
                    <Send className="h-4 w-4 text-amber-400" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
