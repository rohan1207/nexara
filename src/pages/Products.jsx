import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, Download, ArrowUpRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { productCatalog } from "../constants/productsCatalog";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal } from "../components/ui/Reveal";

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge="Our products"
        title="Precision power transmission components"
        description="KTR couplings, AutoLock locking assemblies, Alwayse ball transfer units, and custom drive components — authorised, genuine, and technically supported."
        image={images.productsHero}
      />

      <div className="mx-auto max-w-[1400px] space-y-8 px-4 py-10 sm:space-y-12 sm:px-5 sm:py-12 md:space-y-16 md:px-8 md:py-20 lg:px-10">
        {productCatalog.map((product, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={product.id}>
              <section
                id={product.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)]"
              >
                <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`relative ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <OptimizedImage
                      src={product.image}
                      alt={product.title}
                      className="aspect-[4/3] lg:aspect-auto lg:min-h-[380px]"
                      imgClassName="lg:absolute lg:inset-0 lg:h-full"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-neutral-950 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                      {product.tag}
                    </span>
                  </div>
                  <div className={`flex flex-col justify-center p-5 sm:p-8 md:p-10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      Product {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold text-neutral-950 md:text-2xl">{product.title}</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">{product.description}</p>
                    {product.features && (
                      <>
                        <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-neutral-800">Key features</h3>
                        <ul className="mt-3 space-y-2">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
                      <a
                        href={product.download}
                        download
                        className="btn-mobile border border-amber-200 bg-amber-50 text-neutral-950 hover:bg-amber-100"
                      >
                        <Download className="h-4 w-4" /> Download
                      </a>
                      <PillButton
                        to={`/contact#enquiry?product=${encodeURIComponent(product.title)}`}
                        variant="primary"
                        fullWidth
                        className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto sm:px-5 sm:py-2.5"
                      >
                        Get quote
                        <ArrowUpRight className="h-4 w-4 text-amber-400" />
                      </PillButton>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-neutral-950 to-neutral-900 px-5 py-8 text-center text-white sm:rounded-3xl sm:px-8 sm:py-12 md:px-16">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Need help selecting the right coupling?</h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-400">
              Share bore size, torque, speed, and application details — our team provides technical consultation.
            </p>
            <PillButton
              to="/contact#enquiry"
              variant="primary"
              fullWidth
              className="mt-6 border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:mt-8 sm:w-auto sm:px-8"
            >
              Send technical enquiry
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
