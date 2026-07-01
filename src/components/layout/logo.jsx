import { cn } from "../../utils/cn";
import { images } from "../../constants/images";
import { heroContent } from "../../constants/siteContent";

const sizes = {
  nav: "h-11 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[250px] md:h-[4.5rem] md:max-w-[290px] lg:h-[4.75rem] lg:max-w-[320px]",
  sidebar: "h-10 w-auto max-w-[160px] object-contain sm:h-11 sm:max-w-[180px]",
  footer: "h-11 w-auto max-w-[180px] object-contain brightness-0 invert sm:h-12 sm:max-w-[200px]",
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
