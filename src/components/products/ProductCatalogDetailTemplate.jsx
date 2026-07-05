import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Download } from "lucide-react";
import {
  getProductDisplayImage,
  getProductNavLabel,
  getProductVariant,
  getRelatedProducts,
} from "../../constants/productsCatalog";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";
import { productDownloadFilename, productDownloadUrl } from "../../utils/download";
import { cn } from "../../utils/cn";

function quoteHref(productTitle, variantLabel) {
  const label = variantLabel ? `${productTitle} — ${variantLabel}` : productTitle;
  return `/contact#enquiry?product=${encodeURIComponent(label)}`;
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
        {product.variants?.length > 1 && (
          <span className="absolute left-2 top-2 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-amber-300 sm:text-[10px]">
            {product.variants.length} variants
          </span>
        )}
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

function VariantSelector({ product, activeVariant, onSelect }) {
  if (!product.variants?.length || product.variants.length <= 1) return null;

  return (
    <div className="mt-5 sm:mt-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500 sm:text-xs">
        Product variants
      </p>
      <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {product.variants.map((variant) => {
          const isActive = activeVariant?.id === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelect(variant.id)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all sm:px-4 sm:text-sm",
                isActive
                  ? "border-neutral-950 bg-neutral-950 text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-amber-200 hover:bg-amber-50"
              )}
            >
              <span
                className={cn(
                  "h-7 w-7 overflow-hidden rounded-full border sm:h-8 sm:w-8",
                  isActive ? "border-white/30" : "border-neutral-200"
                )}
              >
                <img src={variant.image} alt="" className="h-full w-full object-cover" />
              </span>
              {variant.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductCatalogDetailTemplate({ product }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const variantParam = searchParams.get("variant");
  const related = getRelatedProducts(product.id);

  const activeVariant = useMemo(
    () => getProductVariant(product, variantParam),
    [product, variantParam]
  );

  const displayImage = useMemo(
    () => getProductDisplayImage(product, activeVariant?.id),
    [product, activeVariant?.id]
  );

  useEffect(() => {
    if (
      variantParam &&
      product.variants?.length &&
      !product.variants.some((variant) => variant.id === variantParam)
    ) {
      setSearchParams({}, { replace: true });
    }
  }, [variantParam, product, setSearchParams]);

  const selectVariant = (variantId) => {
    setSearchParams({ variant: variantId }, { replace: true });
  };

  return (
    <div className="bg-neutral-50">
      <section className="border-b border-neutral-100 bg-white pt-5 sm:pt-6 md:pt-8">
        <div className="mx-auto max-w-[1400px] px-4 pb-8 sm:px-5 sm:pb-10 md:px-8 md:pb-12 lg:px-10">
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-neutral-500 sm:mb-6 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-neutral-950">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <Link to="/products" className="transition-colors hover:text-neutral-950">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="line-clamp-1 font-medium text-neutral-800">
              {activeVariant?.label ? `${getProductNavLabel(product)} · ${activeVariant.label}` : product.title}
            </span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
            <Reveal>
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-100 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:rounded-3xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={displayImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <OptimizedImage
                        src={displayImage}
                        alt={activeVariant ? `${product.title} — ${activeVariant.label}` : product.title}
                        className="aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3]"
                        imgClassName="h-full w-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {product.variants?.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => selectVariant(variant.id)}
                        className={cn(
                          "shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:rounded-2xl",
                          activeVariant?.id === variant.id
                            ? "border-amber-500 shadow-[0_4px_16px_rgba(251,191,36,0.2)]"
                            : "border-transparent opacity-80 hover:opacity-100"
                        )}
                      >
                        <OptimizedImage
                          src={variant.image}
                          alt={variant.label}
                          className="h-16 w-16 sm:h-20 sm:w-20"
                          imgClassName="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {product.gallery?.length > 0 && (
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500 sm:text-xs">
                      {product.galleryTitle ?? "More views"}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                      {product.gallery.map((src, index) => (
                        <div
                          key={src}
                          className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100 sm:rounded-2xl"
                        >
                          <OptimizedImage
                            src={src}
                            alt={`${product.title} model ${index + 1}`}
                            className="aspect-square w-full"
                            imgClassName="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                {activeVariant?.label && product.variants?.length > 1 && (
                  <p className="mt-2 text-sm font-semibold text-amber-700 sm:text-base">
                    Selected: {activeVariant.label}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base md:text-[15px]">
                  {product.description}
                </p>

                <VariantSelector
                  product={product}
                  activeVariant={activeVariant}
                  onSelect={selectVariant}
                />

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
                    to={quoteHref(product.title, activeVariant?.label)}
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
                to={quoteHref(product.title, activeVariant?.label)}
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
                to="/products"
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
