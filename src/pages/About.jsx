import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { aboutPage } from "../constants/aboutContent";
import { company } from "../constants/siteContent";
import { partnerBrands } from "../constants/partners";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

export default function About() {
  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge={aboutPage.hero.badge}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        image={images.about}
      />

      {/* Stats */}
      <div className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-5 md:-mt-14 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-amber-100/80 bg-amber-100/80 shadow-[0_16px_48px_rgba(251,191,36,0.12)] sm:grid-cols-4">
            {aboutPage.stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-5 text-center md:py-6">
                <p className="font-display text-2xl font-bold text-neutral-950 md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Our story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-950 md:text-4xl">
                Powering industry with{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  precision & care
                </span>
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />

              <div className="mt-8 space-y-5">
                {aboutPage.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-neutral-600 md:text-base md:leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-amber-100/80 shadow-[0_24px_60px_rgba(251,191,36,0.12)]">
                <OptimizedImage
                  src={images.factory[0]}
                  alt="Nexara Traders power transmission solutions"
                  className="aspect-[4/3] lg:aspect-[5/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Our motto</p>
                  <p className="mt-2 font-display text-xl font-bold text-white md:text-2xl">{aboutPage.motto}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-amber-100/80 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-neutral-950 md:text-3xl">What sets Nexara Traders apart</h2>
            <p className="mt-3 text-neutral-600">Quality products, authorised brands and service you can rely on.</p>
          </Reveal>

          <Stagger className="mt-8 card-grid-2-3 sm:mt-10 md:grid-cols-3" stagger={0.08}>
            {aboutPage.values.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-xl border border-neutral-100 bg-neutral-50 card-pad sm:rounded-2xl md:p-7">
                  <span className="font-display text-xl font-bold text-amber-200 sm:text-2xl">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-sm font-bold text-neutral-950 sm:mt-3 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Authorized brands */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Partnerships</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950 md:text-3xl">
              Authorised dealer & stockist
            </h2>
            <p className="mt-3 text-neutral-600">
              We represent leading global and Make in India brands for mechanical power transmission and automation.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {partnerBrands.map((brand) => (
              <Reveal key={brand.id} delay={0.04}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-neutral-100 bg-white p-4 text-center shadow-sm">
                  <div className="flex h-14 w-full items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = images.logo;
                        e.currentTarget.className = "max-h-full max-w-full object-contain opacity-40";
                      }}
                    />
                  </div>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-neutral-800">{brand.name}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-wrap gap-2">
              {aboutPage.authorizedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1.5 rounded-full border border-amber-100 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Custom supply */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-neutral-950 md:text-3xl">
                Custom supply & engineering
              </h2>
              <p className="mt-4 text-neutral-600">
                Beyond catalogue lines, we support tailored drive components and fabrication as per your technical
                drawings — focused on economical, long-term solutions.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                {aboutPage.customSupply.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-xs text-neutral-700 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.08}>
              <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-50/50 p-8 md:p-10">
                <ShieldCheck className="h-10 w-10 text-amber-500" />
                <p className="mt-4 font-display text-xl font-bold text-neutral-950 md:text-2xl">
                  Most economical & long-term solutions
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Share your application details, load data or drawing — our team will recommend the right product or
                  supply path for your plant or OEM requirement.
                </p>
                <PillButton
                  to="/contact#enquiry"
                  variant="primary"
                  className="mt-6 border-0 bg-neutral-950 px-6 py-3 text-sm text-white hover:bg-neutral-800"
                >
                  Send your requirement
                  <ArrowUpRight className="h-4 w-4 text-amber-400" />
                </PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Resources</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-neutral-950 md:text-3xl">
              Documents & certificates
            </h2>
            <p className="mt-3 text-neutral-600">Downloads and registration documents for your reference.</p>
          </Reveal>

          <div className="mt-8 card-grid-2-4 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {aboutPage.documents.map((doc) => (
              <Reveal key={doc.id}>
                {doc.type === "download" ? (
                  <a
                    href={doc.href}
                    download
                    className="group flex h-full flex-col rounded-xl border border-neutral-100 bg-white p-4 shadow-sm transition-all hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] sm:rounded-2xl sm:p-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-amber-400">
                      <Download className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-neutral-950">{doc.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-neutral-600">{doc.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:text-amber-800">
                      Download <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
                    <div className="flex h-36 items-center justify-center border-b border-neutral-100 bg-neutral-50 p-4">
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = images.logo;
                          e.currentTarget.className = "max-h-16 max-w-full object-contain opacity-30";
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                        <FileText className="h-4 w-4" />
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-neutral-950">{doc.title}</h3>
                      <p className="mt-1 flex-1 text-sm text-neutral-600">{doc.description}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reach out */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
              <div className="grid lg:grid-cols-2">
                <div className="p-5 sm:p-8 md:p-12 lg:p-14">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Reach out to us</p>
                  <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                    Let&apos;s find the right solution together
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
                    Contact Nexara Traders for product enquiries, technical queries, vendor registration or catalogue
                    downloads. We respond promptly — exact supply is our commitment.
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li className="flex gap-3 text-neutral-300">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      <span>
                        {company.address.line1}, {company.address.line2}, {company.address.city}
                      </span>
                    </li>
                    {company.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-3 text-neutral-300 hover:text-white"
                        >
                          <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                          {phone}
                        </a>
                      </li>
                    ))}
                    {company.emails.map((email) => (
                      <li key={email}>
                        <a href={`mailto:${email}`} className="flex items-center gap-3 text-neutral-300 hover:text-white">
                          <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-5 sm:p-8 md:p-12 lg:border-l lg:border-t-0">
                  <p className="text-sm text-neutral-400">Ready to get started?</p>
                  <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-6 sm:flex-row lg:flex-col xl:flex-row">
                    <PillButton
                      to="/contact#enquiry"
                      variant="primary"
                      fullWidth
                      className="border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:w-auto lg:w-full xl:w-auto"
                    >
                      Technical enquiry
                      <ArrowUpRight className="h-4 w-4" />
                    </PillButton>
                    <Link
                      to="/#products"
                      className="btn-mobile border border-white/20 text-white transition-colors hover:bg-white/10 lg:w-full xl:w-auto"
                    >
                      View products
                      <ArrowUpRight className="h-4 w-4 text-amber-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
