import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Globe2,
  Award,
  Factory,
  Cog,
  ShieldCheck,
  FileBadge,
  Building2,
  CheckCircle2,
} from "lucide-react";
import ImageGallery from "./ImageGallery";
import {
  aboutTabs,
  introductionContent,
  factoryContent,
  manufacturingContent,
  qualityContent,
  certificatesGallery,
  vendorCertificates,
} from "../../constants/aboutContent";
import { cn } from "../../utils/cn";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SectionShell({ id, icon: Icon, title, subtitle, children, className }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn("scroll-mt-28", className)}
    >
      <motion.div className="mb-8 flex items-start gap-4 border-b border-[var(--border)] pb-6">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-md">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{subtitle}</p>
          ) : null}
        </div>
      </motion.div>
      {children}
    </motion.section>
  );
}

function BulletList({ items, columns = "sm:grid-cols-2" }) {
  return (
    <ul className={cn("grid gap-3", columns)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] shadow-soft"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/50 p-5 shadow-soft"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

function IntroductionSection() {
  const c = introductionContent;
  return (
    <SectionShell id="introduction" icon={Building2} title="SEPL Introduction" subtitle={c.lead}>
      <div className="space-y-8">
        <HighlightGrid items={c.highlights} />

        <div className="grid gap-6 lg:grid-cols-3">
          {c.storyBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">{block.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border-l-4 border-brand-600 bg-brand-50 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-800">Quality policy</p>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-900">{c.qualityPolicy}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
            <h3 className="font-display text-xl font-bold">Products & services</h3>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {c.products.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg-base)] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
            <h3 className="font-display text-xl font-bold">Major clients</h3>
            <motion.div className="mt-5 flex flex-wrap gap-2">
              {c.clients.map((client) => (
                <span key={client} className="rounded-full bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white">
                  {client}
                </span>
              ))}
            </motion.div>
            <p className="mt-5 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-900">
              <Globe2 className="h-4 w-4 shrink-0 text-brand-600" />
              Global exports across Africa, Middle East & Asia-Pacific
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-xl font-bold">Leadership</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {c.directors.map((d) => (
              <motion.div
                key={d.name}
                whileHover={{ y: -4 }}
                className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-lg font-bold text-brand-800">
                  {d.name.split(" ").pop()?.[0]}
                </span>
                <div>
                  <p className="font-display text-lg font-bold">{d.name}</p>
                  <p className="text-sm font-semibold text-brand-700">{d.role}</p>
                  <p className="mt-2 flex gap-2 text-sm text-[var(--text-muted)]">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {d.address}
                  </p>
                  {d.phone ? (
                    <p className="mt-2 flex gap-2 text-sm font-medium text-brand-800">
                      <Phone className="h-4 w-4" />
                      {d.phone}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function FactorySection() {
  const c = factoryContent;
  return (
    <SectionShell id="factory" icon={Factory} title="Factory Overlook" subtitle={c.lead}>
      <div className="space-y-8">
        <BulletList items={c.features} columns="lg:grid-cols-3" />
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
          <h3 className="mb-6 font-display text-xl font-bold">Factory gallery</h3>
          <ImageGallery images={c.images} />
        </div>
      </div>
    </SectionShell>
  );
}

function ManufacturingSection() {
  const c = manufacturingContent;
  return (
    <SectionShell id="manufacturing" icon={Cog} title="Manufacturing Facility" subtitle={c.lead}>
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {c.capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-brand-600" />
              <h3 className="font-display text-lg font-bold">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-steel-900 px-6 py-8 text-white md:px-10">
          <h3 className="font-display text-lg font-bold">Manufacturing process</h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {c.processSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex gap-3 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
          <ShieldCheck className="h-5 w-5 shrink-0 text-brand-700" />
          <p className="text-sm text-brand-900">{c.qualityPolicy}</p>
        </div>

        <motion.div>
          <h3 className="mb-5 font-display text-xl font-bold">Product range</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.productRange.map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white p-4 shadow-soft"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

function QualitySection() {
  const c = qualityContent;
  return (
    <SectionShell id="quality" icon={ShieldCheck} title="Quality Assurance" subtitle={c.lead}>
      <div className="space-y-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-800">
          <Award className="h-4 w-4" />
          ISO 9001 certified
        </span>

        <div className="grid gap-4 md:grid-cols-2">
          {c.assuranceSteps.map((step) => (
            <motion.div
              key={step.title}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
            >
              <h3 className="font-display text-lg font-bold text-brand-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Industries we serve</h3>
          <div className="flex flex-wrap gap-2">
            {c.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
          <h3 className="mb-6 font-display text-xl font-bold">Quality certificates & documentation</h3>
          <ImageGallery images={c.certificates} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </div>
    </SectionShell>
  );
}

function CertificatesSection() {
  return (
    <SectionShell
      id="certificates"
      icon={FileBadge}
      title="Certificates"
      subtitle="Comprehensive certifications for design and manufacturing excellence."
    >
      <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
        <ImageGallery images={certificatesGallery} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
      </div>
    </SectionShell>
  );
}

function VendorSection() {
  return (
    <SectionShell
      id="vendor-certificate"
      icon={Award}
      title="Certificate of Vendor"
      subtitle="Vendor certificates and partner accreditation documents."
    >
      <motion.div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
        <ImageGallery images={vendorCertificates} columns="grid-cols-1 sm:grid-cols-2" />
      </motion.div>
    </SectionShell>
  );
}

const sectionMap = {
  introduction: IntroductionSection,
  factory: FactorySection,
  manufacturing: ManufacturingSection,
  quality: QualitySection,
  certificates: CertificatesSection,
  "vendor-certificate": VendorSection,
};

const panelMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

export function AboutPageSections({ activeTab }) {
  const Section = sectionMap[activeTab] ?? IntroductionSection;

  return (
    <AnimatePresence mode="wait">
      <motion.div key={activeTab} {...panelMotion}>
        <Section />
      </motion.div>
    </AnimatePresence>
  );
}

export { aboutTabs };
