import { motion } from "framer-motion";
import { Download as DownloadIcon, FileText } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { downloads } from "../constants/sitePages";

export default function Download() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <PageHero
        badge="Resources"
        title="Download"
        description="Brochures, catalogues and certificates. Download Nexara Traders product and company documentation."
      />
      <motion.div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
          Place PDF files in the public/downloads folder to enable direct downloads.
        </p>
        <motion.div className="grid gap-5 sm:grid-cols-2">
          {downloads.map((doc, i) => (
            <motion.a
              key={doc.title}
              href={doc.file}
              download
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                <FileText className="h-6 w-6" />
              </span>
              <motion.div className="min-w-0 flex-1">
                <motion.div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{doc.title}</h3>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700">{doc.size}</span>
                </motion.div>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{doc.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  <DownloadIcon className="h-4 w-4" /> Download
                </span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
