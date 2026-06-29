import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { loadingArmSystems } from "../../constants/products";
import { images } from "../../constants/images";

function SectionTitle() {
  return (
    <h2 className="text-center font-display text-2xl font-bold uppercase tracking-wide text-steel-800 md:text-3xl">
      <span className="relative inline-block">
        Loading
        <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-brand-600" />
      </span>{" "}
      Arm Systems
    </h2>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={product.href} className="group block">
        <motion.article
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="overflow-hidden rounded-2xl border-2 border-steel-800/90 bg-white shadow-soft transition-shadow duration-300 group-hover:border-brand-600 group-hover:shadow-[0_16px_48px_rgba(3,105,161,0.12)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
            <motion.img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = images.logo;
                e.currentTarget.className = "mx-auto h-24 w-auto object-contain opacity-40 p-8";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="border-t border-[var(--border)] bg-white px-4 py-4 text-center">
            <h3 className="font-display text-base font-bold text-steel-800 transition-colors group-hover:text-brand-800 md:text-lg">
              {product.title}
            </h3>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

export default function LoadingArmSystems() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <SectionTitle />
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {loadingArmSystems.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
