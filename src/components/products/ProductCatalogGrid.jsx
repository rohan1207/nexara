import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Search, ArrowUpRight, X } from "lucide-react";
import { productCatalog, productCategories } from "../../constants/productsCatalog";
import OptimizedImage from "../ui/OptimizedImage";
import { cn } from "../../utils/cn";
import { productDownloadFilename, productDownloadUrl } from "../../utils/download";

export function filterProducts({ query = "", category = "all" } = {}) {
  const normalizedQuery = query.trim().toLowerCase();

  return productCatalog.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchable = [
      product.title,
      product.description,
      product.tag,
      product.navLabel,
      product.category,
      ...(product.features ?? []),
      ...(product.variants?.map((variant) => variant.label) ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}

function ProductCard({ product, index }) {
  const navigate = useNavigate();

  const openProduct = () => navigate(`/products/${product.id}`);

  return (
    <motion.article
      id={`product-${product.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      role="link"
      tabIndex={0}
      onClick={openProduct}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProduct();
        }
      }}
      className="group relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-amber-200 hover:shadow-[0_20px_50px_rgba(251,191,36,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 sm:rounded-[1.75rem]"
    >
      <div className="relative overflow-hidden bg-neutral-100">
        <OptimizedImage
          src={product.image}
          alt={product.title}
          className="aspect-[5/4] sm:aspect-[4/3]"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-amber-300 sm:text-[10px]">
          {product.tag}
        </span>
        {product.variants?.length > 1 && (
          <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold text-neutral-800 sm:text-[10px]">
            {product.variants.length} variants
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-2.5 sm:p-5 md:p-6">
        <h3 className="font-display text-[11px] font-bold leading-snug text-neutral-950 sm:text-base md:text-lg">
          {product.navLabel ?? product.title.split("—")[0].trim()}
        </h3>
        <p className="mt-1 flex-1 text-[10px] leading-relaxed text-neutral-600 line-clamp-2 sm:mt-2 sm:text-sm sm:line-clamp-3">
          {product.description}
        </p>

        {product.variants?.length > 1 && (
          <div className="mt-2 flex flex-wrap gap-1 sm:mt-3">
            {product.variants.slice(0, 4).map((variant) => (
              <span
                key={variant.id}
                className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-medium text-neutral-600 sm:text-[10px]"
              >
                {variant.label}
              </span>
            ))}
          </div>
        )}

        <div className="relative z-10 mt-2 grid grid-cols-2 gap-1 sm:mt-5 sm:gap-2.5">
          <a
            href={productDownloadUrl(product)}
            download={productDownloadFilename(product)}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            className="inline-flex min-w-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-1.5 py-1.5 text-[9px] font-semibold leading-none text-neutral-950 transition-all hover:border-amber-300 hover:bg-amber-100 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs md:gap-2 md:px-4 md:py-2.5 md:text-sm"
          >
            <Download className="hidden h-3.5 w-3.5 text-amber-600 sm:block md:h-4 md:w-4" />
            <span className="truncate">Download</span>
          </a>
          <span className="inline-flex min-w-0 items-center justify-center gap-0.5 rounded-full bg-neutral-950 px-1.5 py-1.5 text-[9px] font-semibold leading-none text-white transition-all group-hover:bg-neutral-800 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs md:gap-2 md:px-4 md:py-2.5 md:text-sm">
            <span className="truncate">Read more</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 text-amber-400 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductCatalogGrid({
  showSearch = true,
  showResultsCount = true,
  className = "",
  gridClassName = "mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4 md:gap-5 lg:grid-cols-3",
  products: productsOverride,
  initialCategory = "all",
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (productsOverride) return productsOverride;
    return filterProducts({ query, category: activeCategory });
  }, [productsOverride, query, activeCategory]);

  return (
    <div className={className}>
      {showSearch && (
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 sm:h-5 sm:w-5" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search couplings, locking assemblies, model names..."
              className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-11 text-sm text-neutral-900 shadow-[0_4px_20px_rgba(15,23,42,0.04)] outline-none transition-all placeholder:text-neutral-400 focus:border-amber-300 focus:ring-2 focus:ring-amber-100 sm:py-3.5 sm:text-base"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="flex w-max gap-2 md:flex-wrap md:w-auto">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-sm",
                    activeCategory === category.id
                      ? "bg-neutral-950 text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:border-amber-200 hover:bg-amber-50 hover:text-neutral-950"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {showResultsCount && (
            <p className="text-sm text-neutral-500">
              Showing <span className="font-semibold text-neutral-800">{filtered.length}</span> of{" "}
              <span className="font-semibold text-neutral-800">{productCatalog.length}</span> products
              {query ? (
                <>
                  {" "}
                  for <span className="font-semibold text-amber-700">&ldquo;{query}&rdquo;</span>
                </>
              ) : null}
            </p>
          )}
        </div>
      )}

      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div key={`${activeCategory}-${query}`} layout className={gridClassName}>
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-2xl border border-dashed border-neutral-200 bg-white px-6 py-12 text-center"
          >
            <p className="font-display text-lg font-bold text-neutral-900">No products found</p>
            <p className="mt-2 text-sm text-neutral-500">
              Try a different search term or clear your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
              className="mt-5 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:border-amber-200 hover:bg-amber-50"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
