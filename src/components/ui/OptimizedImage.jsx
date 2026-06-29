import { cn } from "../../utils/cn";
import { images } from "../../constants/images";

export default function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  fallback = images.logo,
  ...props
}) {
  return (
    <div className={cn("overflow-hidden bg-slate-100", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-cover transition-transform duration-700", imgClassName)}
        onError={(e) => {
          e.currentTarget.src = fallback;
          e.currentTarget.className = cn(
            e.currentTarget.className,
            "object-contain p-8 opacity-60"
          );
        }}
        {...props}
      />
    </div>
  );
}
