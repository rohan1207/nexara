import { useMemo, useState } from "react";
import { ArrowUpRight, Package } from "lucide-react";
import { productCatalog, productCategories } from "../../constants/productsCatalog";
import ProductCatalogGrid, { filterProducts } from "../products/ProductCatalogGrid";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(
    () => filterProducts({ category: activeCategory }),
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
              Eleven product lines from KTR couplings and AutoLock locking assemblies to Alwayse ball transfer units.
              Tap any card to explore variants, downloads and specifications.
            </p>
            <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
          </Reveal>

          <Reveal delay={0.1} className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-neutral-50 px-5 py-4">
              <p className="font-display text-3xl font-bold text-amber-600">{productCatalog.length}</p>
              <p className="text-sm font-medium leading-snug text-neutral-600">
                Product lines
                <span className="block text-xs uppercase tracking-wide text-neutral-400">in our catalog</span>
              </p>
            </div>
            <PillButton
              to="/products"
              variant="outline"
              className="border-neutral-200 px-5 py-3 text-sm sm:shrink-0"
            >
              View all
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
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

        <Reveal delay={0.08}>
          <ProductCatalogGrid
            showSearch={false}
            showResultsCount={false}
            products={filtered}
            gridClassName="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4 md:gap-5 lg:grid-cols-3"
          />
        </Reveal>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-neutral-500">No products in this category yet.</p>
        )}

        <Reveal delay={0.15} className="mt-10 flex flex-col items-stretch gap-4 rounded-2xl border border-amber-100 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-4 py-6 text-center sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:px-6 sm:py-8 sm:text-left md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Explore the full catalogue</p>
            <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
              Search, filter and browse all products
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              Open the dedicated products page for search and complete listings.
            </p>
          </div>
          <PillButton
            to="/products"
            variant="primary"
            fullWidth
            className="shrink-0 border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:w-auto"
          >
            View all products
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
