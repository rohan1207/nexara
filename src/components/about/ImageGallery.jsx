import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { images } from "../../constants/images";

export default function ImageGallery({ images, columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className={`grid gap-3 ${columns}`}>
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLightbox(img)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-slate-50 text-left shadow-soft"
          >
            <img
              src={img.src}
              alt={img.alt || img.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = images.logo;
                e.currentTarget.className = "h-full w-full object-contain p-6 opacity-30";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand-900/0 transition-colors group-hover:bg-brand-900/20">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-800 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </span>
            </div>
            {img.title && (
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-xs font-medium text-white">
                {img.title}
              </p>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt || lightbox.title}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
