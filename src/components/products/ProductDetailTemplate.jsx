import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { PillButton } from "../ui/PillButton";
import ImageGallery from "../about/ImageGallery";
import { cn } from "../../utils/cn";
import { images } from "../../constants/images";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ id, title, children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fade}
      className="scroll-mt-28"
    >
      <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">{title}</h2>
      <motion.div className="mt-6" variants={fade}>
        {children}
      </motion.div>
    </motion.section>
  );
}

function SectionContent({ section }) {
  switch (section.type) {
    case "list":
      return (
        <ul className="grid gap-3 sm:grid-cols-2">
          {section.items.map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] shadow-soft"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
              {item}
            </motion.li>
          ))}
        </ul>
      );
    case "specs":
      return (
        <motion.div className="grid gap-4 md:grid-cols-2">
          {section.items.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-soft"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-brand-700">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      );
    case "tags":
      return (
        <div className="flex flex-wrap gap-2">
          {section.items.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-100"
            >
              {tag}
            </span>
          ))}
        </div>
      );
    case "steps":
      return (
        <ol className="space-y-3">
          {section.items.map((step, i) => (
            <motion.li
              key={step}
              whileHover={{ x: 4 }}
              className="flex gap-4 rounded-xl border border-[var(--border)] bg-white px-4 py-3 shadow-soft"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{step}</span>
            </motion.li>
          ))}
        </ol>
      );
    case "text":
    case "paragraph":
      return (
        <p className="rounded-2xl border border-[var(--border)] bg-white p-6 text-[15px] leading-relaxed text-[var(--text-secondary)] shadow-soft">
          {section.content}
        </p>
      );
    default:
      return null;
  }
}

export default function ProductDetailTemplate({ product }) {
  const sectionIds = product.sections.map((s) => s.id);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const ids = [...sectionIds, "gallery"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [sectionIds]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-steel-900 pt-[calc(var(--nav-height)+1.5rem)] text-white">
        <div className="absolute inset-0 opacity-15">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 md:px-8 lg:px-10 lg:pb-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1 text-sm text-brand-200">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Products</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{product.title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">{product.subtitle}</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">{product.title}</h1>
              <p className="mt-4 max-w-lg text-base text-brand-100">{product.tagline}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-brand-200">
                <MapPin className="h-4 w-4" />
                Pune, Maharashtra · Exports to Saudi Arabia
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton to="/enquiry" variant="primary" className="px-6 py-3">
                  Request enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </PillButton>
                <PillButton
                  to="/contact"
                  variant="outline"
                  className="border-white/30 bg-white/10 px-6 py-3 text-white hover:bg-white/20"
                >
                  Contact us
                </PillButton>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = product.images?.[0] || images.logo;
                    e.currentTarget.className =
                      "aspect-[4/3] w-full object-contain bg-white/10 p-12 transition-transform duration-500";
                  }}
                />
              </div>
              {product.images?.length > 1 && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {product.images.slice(0, 2).map((src) => (
                    <div
                      key={src}
                      className="group overflow-hidden rounded-xl border border-white/10"
                    >
                      <img
                        src={src}
                        alt=""
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="max-w-3xl"
        >
          {product.intro.map((p) => (
            <p key={p.slice(0, 40)} className="mb-4 text-[15px] leading-relaxed text-[var(--text-secondary)] last:mb-0">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div className="sticky top-[var(--nav-height)] z-30 -mx-5 mt-10 border-y border-[var(--border)] bg-white/95 px-5 py-3 backdrop-blur-md md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-[0.97]",
                  activeSection === s.id
                    ? "bg-brand-700 text-white shadow-md"
                    : "bg-[var(--bg-base)] text-[var(--text-secondary)] ring-1 ring-[var(--border)] hover:text-brand-800"
                )}
              >
                {s.title}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("gallery")}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-[0.97]",
                activeSection === "gallery"
                  ? "bg-brand-700 text-white shadow-md"
                  : "bg-[var(--bg-base)] text-[var(--text-secondary)] ring-1 ring-[var(--border)] hover:text-brand-800"
              )}
            >
              Gallery
            </button>
          </div>
        </motion.div>

        <div className="mt-14 space-y-16 md:space-y-20">
          {product.sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              <SectionContent section={section} />
            </Section>
          ))}

          <Section id="gallery" title="Product Gallery">
            <ImageGallery images={product.gallery} columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-3" />
          </Section>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mt-20 rounded-3xl bg-gradient-to-r from-brand-800 to-brand-900 px-8 py-12 text-center text-white md:px-16"
        >
          <h3 className="font-display text-2xl font-bold md:text-3xl">Need a custom {product.title} solution?</h3>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Share your application details — our engineering team will design and manufacture to your exact requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PillButton to="/enquiry" variant="primary" className="bg-white px-8 py-3 text-brand-800 hover:bg-brand-50">
              Get a quote
            </PillButton>
            <PillButton
              to="/download"
              variant="outline"
              className="border-white/40 px-8 py-3 text-white hover:bg-white/10"
            >
              Download brochure
            </PillButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
