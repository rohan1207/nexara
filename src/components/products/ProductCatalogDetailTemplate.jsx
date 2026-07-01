import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Download } from "lucide-react";
import { getRelatedProducts } from "../../constants/productsCatalog";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";
import { productDownloadFilename, productDownloadUrl } from "../../utils/download";

function quoteHref(productTitle) {
  return `/contact#enquiry?product=${encodeURIComponent(productTitle)}`;
}

function RelatedCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all hover:border-amber-200 hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] sm:rounded-2xl"
    >
      <div className="relative overflow-hidden bg-neutral-100">
        <OptimizedImage
          src={product.image}
          alt={product.title}
          className="aspect-[5/4] sm:aspect-[4/3]"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 sm:text-xs">{product.tag}</p>
        <h3 className="mt-1 font-display text-xs font-bold leading-snug text-neutral-950 sm:text-sm">
          {product.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-[11px] leading-relaxed text-neutral-600 sm:text-xs">
          {product.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 sm:text-xs">
          Read more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function ProductCatalogDetailTemplate({ product }) {
  const related = getRelatedProducts(product.id);

  return (
    <div className="bg-neutral-50">
      <section className="border-b border-neutral-100 bg-white pt-5 sm:pt-6 md:pt-8">
        <div className="mx-auto max-w-[1400px] px-4 pb-8 sm:px-5 sm:pb-10 md:px-8 md:pb-12 lg:px-10">
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-neutral-500 sm:mb-6 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-neutral-950">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <Link to="/#products" className="transition-colors hover:text-neutral-950">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="line-clamp-1 font-medium text-neutral-800">{product.title}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-100 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:rounded-3xl">
                <OptimizedImage
                  src={product.image}
                  alt={product.title}
                  className="aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3]"
                  imgClassName="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col">
                <span className="inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 sm:text-xs">
                  {product.tag}
                </span>
                <h1 className="mt-3 font-display text-xl font-bold leading-tight text-neutral-950 sm:text-2xl md:text-3xl lg:text-4xl">
                  {product.title}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base md:text-[15px]">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href={productDownloadUrl(product)}
                    download={productDownloadFilename(product)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:border-amber-300 hover:bg-amber-100 sm:w-auto"
                  >
                    <Download className="h-4 w-4 text-amber-600" />
                    Download
                  </a>
                  <PillButton
                    to={quoteHref(product.title)}
                    variant="primary"
                    fullWidth
                    className="min-h-[44px] border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto sm:px-6"
                  >
                    Get quote
                    <ArrowUpRight className="h-4 w-4 text-amber-400" />
                  </PillButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 lg:px-10">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-neutral-950 sm:text-2xl md:text-3xl">Key features</h2>
            <ul className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-neutral-100 bg-white p-3 text-xs leading-relaxed text-neutral-600 sm:gap-3 sm:rounded-2xl sm:p-4 sm:text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 rounded-2xl border border-amber-100 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-5 py-8 text-center text-white sm:mt-10 sm:rounded-3xl sm:px-8 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Need technical support?</p>
            <h3 className="mt-2 font-display text-lg font-bold sm:text-xl md:text-2xl">
              Share your application details for sizing and selection
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
              Include bore size, torque, speed and quantity. Our team will recommend the right configuration.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-center sm:gap-3">
              <a
                href={productDownloadUrl(product)}
                download={productDownloadFilename(product)}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <PillButton
                to={quoteHref(product.title)}
                variant="primary"
                fullWidth
                className="min-h-[44px] border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:w-auto sm:px-6"
              >
                Get quote
                <ArrowUpRight className="h-4 w-4" />
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-neutral-100 bg-white section-py">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 lg:px-10">
            <Reveal className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Explore more</p>
              <h2 className="mt-2 font-display text-xl font-bold text-neutral-950 sm:text-2xl md:text-3xl">
                More products to explore
              </h2>
              <p className="mt-2 text-sm text-neutral-600 sm:max-w-2xl">
                Browse other couplings, locking assemblies and power transmission components from our catalogue.
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4 md:grid-cols-3 lg:grid-cols-3"
            >
              {related.map((item) => (
                <RelatedCard key={item.id} product={item} />
              ))}
            </motion.div>

            <Reveal delay={0.1} className="mt-8 text-center sm:mt-10">
              <PillButton
                to="/#products"
                variant="outline"
                fullWidth
                className="border-neutral-200 sm:w-auto sm:px-6"
              >
                View all products
                <ArrowUpRight className="h-4 w-4" />
              </PillButton>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
