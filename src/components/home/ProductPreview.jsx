import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { products } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";

export default function ProductPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Our products</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Loading arm systems
            </h2>
          </div>
          <PillButton to="/products" variant="outline" className="w-fit px-5 py-2.5 text-sm">
            View all products
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/products#${product.id}`}
                className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] p-6 shadow-soft transition-all hover:border-brand-300 hover:shadow-md md:p-8"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-brand-800">
                  {product.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {product.overview}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
