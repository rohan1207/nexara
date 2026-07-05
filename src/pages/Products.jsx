import PageHero from "../components/layout/PageHero";
import ProductCatalogGrid from "../components/products/ProductCatalogGrid";
import { PillButton } from "../components/ui/PillButton";
import { Reveal } from "../components/ui/Reveal";
import { productCatalog } from "../constants/productsCatalog";
import { images } from "../constants/images";
import { ArrowUpRight, Package } from "lucide-react";

export default function Products() {
  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge="Our products"
        title="Precision power transmission components"
        description="Browse KTR couplings, AutoLock locking assemblies and Alwayse ball transfer units. Search, filter by category and open any product for variants, downloads and technical details."
        image={images.productsHero}
      />

      <section className="pb-14 pt-8 sm:pb-20 sm:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8 lg:px-10">
          <Reveal className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
                <Package className="h-3.5 w-3.5 text-amber-600" />
                Full catalogue
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950 sm:text-3xl">
                {productCatalog.length} product lines
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                Every card is clickable. Products with multiple variants show sub-options on the detail page and in the navigation menu.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ProductCatalogGrid />
          </Reveal>

          <Reveal delay={0.1} className="mt-12 rounded-2xl border border-amber-100 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-5 py-8 text-center text-white sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-10 md:text-left">
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Need help choosing?</p>
                <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                  Our team supports every technical query
                </h3>
                <p className="mt-2 max-w-xl text-sm text-neutral-400">
                  Share bore size, torque, speed and application details. We will recommend the right coupling or locking assembly.
                </p>
              </div>
              <PillButton
                to="/contact#enquiry"
                variant="primary"
                fullWidth
                className="mt-6 shrink-0 border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 md:mt-0 md:w-auto md:px-6"
              >
                Send technical enquiry
                <ArrowUpRight className="h-4 w-4" />
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
