import { cn } from "../../utils/cn";
import { images } from "../../constants/images";
import { heroContent } from "../../constants/siteContent";

const sizes = {
  nav: "h-10 w-auto max-w-[168px] object-contain sm:h-[3.25rem] sm:max-w-[220px] md:h-16 md:max-w-[260px]",
  sidebar: "h-9 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[160px]",
  footer: "h-10 w-auto max-w-[160px] object-contain brightness-0 invert sm:h-11 sm:max-w-[180px]",
};

export default function Logo({ variant = "nav", className = "" }) {
  return (
    <img
      src={images.logo}
      alt={heroContent.brand}
      className={cn("shrink-0 transition-opacity duration-200", sizes[variant] ?? sizes.nav, className)}
      onError={(e) => {
        if (e.currentTarget.src.endsWith("/logonew.png")) return;
        e.currentTarget.src = "/logonew.png";
      }}
    />
  );
}
