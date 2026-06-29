import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, ArrowUpRight, Package } from "lucide-react";
import { productCatalog, productCategories } from "../../constants/productsCatalog";
import { company } from "../../constants/siteContent";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

function quoteHref(productTitle) {
  return `/contact#enquiry?product=${encodeURIComponent(productTitle)}`;
}

function ProductCard({ product, index }) {
  const primaryEmail = company.emails[0];

  return (
    <motion.article
      id={`product-${product.id}`}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-amber-200 hover:shadow-[0_20px_50px_rgba(251,191,36,0.14)] sm:rounded-[1.75rem]"
    >
      <div className="relative overflow-hidden bg-neutral-100">
        <OptimizedImage
          src={product.image}
          alt={product.title}
          className="aspect-[4/3]"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/0 to-amber-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
          {productCategories.find((c) => c.id === product.category)?.label ?? "Product"}
        </span>

        <span className="absolute bottom-4 right-4 font-display text-4xl font-bold leading-none text-white/15">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-5 md:p-6">
        <h3 className="font-display text-xs font-bold leading-snug text-neutral-950 sm:text-base md:text-lg">
          {product.title}
        </h3>
        <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-neutral-600 line-clamp-3 sm:mt-2 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-5 sm:flex sm:flex-row sm:gap-2.5">
          {product.email ? (
            <a
              href={`mailto:${primaryEmail}?subject=${encodeURIComponent(`Enquiry: ${product.title}`)}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-2 text-[11px] font-semibold text-neutral-950 transition-all hover:border-amber-300 hover:bg-amber-100 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <Mail className="h-4 w-4 text-amber-600" />
              Email us
            </a>
          ) : (
            <a
              href={product.download}
              download
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-2 text-[11px] font-semibold text-neutral-950 transition-all hover:border-amber-300 hover:bg-amber-100 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <Download className="h-4 w-4 text-amber-600" />
              Download
            </a>
          )}

          <a
            href={quoteHref(product.title)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-neutral-950 px-2.5 py-2 text-[11px] font-semibold text-white transition-all hover:bg-neutral-800 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Get quote
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? productCatalog
        : productCatalog.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="products" className="relative overflow-hidden bg-white section-py">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-amber-300/8 blur-[80px]" />
        <div className="absolute right-[6%] top-[12%] h-40 w-40 rounded-full border border-amber-200/40" />
        <div className="absolute bottom-[18%] left-[4%] h-28 w-28 rotate-12 rounded-3xl bg-amber-400/[0.04]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800 shadow-[0_2px_16px_rgba(251,191,36,0.1)]">
              <Package className="h-3.5 w-3.5 text-amber-600" />
              Product Profile
            </span>
            <h2 className="mt-4 section-title">
              Precision power transmission,
              <span className="block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                engineered for every drive
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              KTR couplings, locking assemblies, ball transfer units, and custom drive components — download specs or
              request a technical quote for any product line.
            </p>
            <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
          </Reveal>

          <Reveal delay={0.1} className="flex shrink-0 items-center gap-3 rounded-2xl border border-amber-100 bg-neutral-50 px-5 py-4">
            <p className="font-display text-3xl font-bold text-amber-600">{productCatalog.length}</p>
            <p className="text-sm font-medium leading-snug text-neutral-600">
              Product lines
              <span className="block text-xs uppercase tracking-wide text-neutral-400">in our catalog</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-10 -mx-5 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
          <div className="flex w-max gap-2 md:flex-wrap md:w-auto">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-sm",
                  activeCategory === cat.id
                    ? "bg-neutral-950 text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-amber-200 hover:bg-amber-50 hover:text-neutral-950"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            layout
            className="mt-8 card-grid-2-3 sm:mt-10"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-neutral-500">No products in this category yet.</p>
        )}

        <Reveal delay={0.15} className="mt-10 flex flex-col items-stretch gap-4 rounded-2xl border border-amber-100 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-4 py-6 text-center sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:px-6 sm:py-8 sm:text-left md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Need help choosing?</p>
            <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
              Our team supports every technical query
            </p>
            <p className="mt-1 text-sm text-neutral-400">Share your application — we&apos;ll recommend the right product.</p>
          </div>
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="shrink-0 border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:w-auto"
          >
            Talk to an expert
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
