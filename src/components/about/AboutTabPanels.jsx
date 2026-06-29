import { motion } from "framer-motion";
import { MapPin, Phone, Building2, Globe2, Award } from "lucide-react";
import ImageGallery from "./ImageGallery";
import {
  introductionContent,
  factoryContent,
  manufacturingContent,
  qualityContent,
  certificatesGallery,
  vendorCertificates,
} from "../../constants/aboutContent";

const panel = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35 },
};

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
      {title ? <h3 className="mb-4 font-display text-xl font-bold text-[var(--text-primary)]">{title}</h3> : null}
      {children}
    </div>
  );
}

function P({ children, className = "" }) {
  return <p className={`text-[15px] leading-relaxed text-[var(--text-secondary)] ${className}`}>{children}</p>;
}

function IntroductionPanel() {
  const c = introductionContent;
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <P className="font-medium text-brand-800">{c.lead}</P>
        {c.paragraphs.map((text) => (
          <P key={text.slice(0, 48)} className="mt-4">
            {text}
          </P>
        ))}
        <div className="mt-6 rounded-xl border-l-4 border-brand-600 bg-brand-50 px-5 py-4">
          <p className="text-sm font-semibold text-brand-900">Quality Policy</p>
          <p className="mt-1 text-sm text-brand-800">{c.qualityPolicy}</p>
        </div>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Product & Services">
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.products.map((item) => (
              <li key={item} className="rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Major Clients">
          <div className="flex flex-wrap gap-2">
            {c.clients.map((client) => (
              <span key={client} className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                {client}
              </span>
            ))}
          </div>
          <p className="mt-4 flex gap-2 text-sm text-[var(--text-muted)]">
            <Globe2 className="h-4 w-4 shrink-0 text-brand-600" />
            Exports to Nigeria, South Africa, Vietnam, Kuwait, Greece, Israel, Indonesia & more.
          </p>
        </Card>
      </div>
      <Card title="Our Directors">
        <div className="grid gap-4 md:grid-cols-2">
          {c.directors.map((d) => (
            <motion.div key={d.name} whileHover={{ y: -4 }} className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-5">
              <p className="font-display text-lg font-bold">{d.name}</p>
              <p className="text-sm text-brand-700">{d.role}</p>
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
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function FactoryPanel() {
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <P className="font-medium text-brand-800">{factoryContent.lead}</P>
      </Card>
      <Card title="Factory Gallery">
        <ImageGallery images={factoryContent.images} />
      </Card>
    </motion.div>
  );
}

function ManufacturingPanel() {
  const c = manufacturingContent;
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <P className="font-medium text-brand-800">{c.lead}</P>
        {c.paragraphs.map((text) => (
          <P key={text.slice(0, 48)} className="mt-4">
            {text}
          </P>
        ))}
        <div className="mt-6 flex gap-3 rounded-xl bg-brand-50 p-4">
          <Building2 className="h-5 w-5 shrink-0 text-brand-700" />
          <p className="text-sm text-brand-900">{c.qualityPolicy}</p>
        </div>
      </Card>
      <Card title="Products Range">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.productRange.map((item, i) => (
            <motion.div key={item} whileHover={{ scale: 1.02 }} className="flex gap-3 rounded-xl border bg-[var(--bg-base)] p-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function QualityPanel() {
  const c = qualityContent;
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase text-brand-800">
          <Award className="h-4 w-4" />
          ISO 9001 Certified
        </span>
        <P className="font-medium text-brand-800">{c.lead}</P>
        {c.paragraphs.map((text) => (
          <P key={text.slice(0, 48)} className="mt-4">
            {text}
          </P>
        ))}
      </Card>
      <Card title="Quality Certificates & Documentation">
        <ImageGallery images={c.certificates} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
      </Card>
    </motion.div>
  );
}

function CertificatesPanel() {
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <P>
          Steelfab Engineering Pvt. Ltd (SEPL) maintains comprehensive certifications for design and
          manufacturing excellence.
        </P>
      </Card>
      <Card title="Our Certificates">
        <ImageGallery images={certificatesGallery} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
      </Card>
    </motion.div>
  );
}

function VendorPanel() {
  return (
    <motion.div {...panel} className="space-y-6">
      <Card>
        <P>SEPL vendor certificates and partner accreditation documents.</P>
      </Card>
      <Card title="Certificate of Vendor">
        <ImageGallery images={vendorCertificates} columns="grid-cols-1 sm:grid-cols-2" />
      </Card>
    </motion.div>
  );
}

export function AboutTabPanel({ tabId }) {
  const panels = {
    introduction: IntroductionPanel,
    factory: FactoryPanel,
    manufacturing: ManufacturingPanel,
    quality: QualityPanel,
    certificates: CertificatesPanel,
    "vendor-certificate": VendorPanel,
  };
  const Panel = panels[tabId] || IntroductionPanel;
  return <Panel />;
}
