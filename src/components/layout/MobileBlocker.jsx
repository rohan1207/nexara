import { useEffect, useState } from "react";
import { Monitor } from "lucide-react";
import { images } from "../../constants/images";

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MOBILE_QUERY).matches : false
  );

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    media.addEventListener("change", onChange);
    setIsMobile(media.matches);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

export default function MobileBlocker({ children }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-6 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-sm">
          <img src={images.logo} alt="Nexara Traders" className="mx-auto h-16 w-auto object-contain" />
          <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Monitor className="h-7 w-7" />
          </div>
          <h1 className="mt-6 font-display text-2xl font-bold">Website in progress</h1>
          <p className="mt-3 text-base leading-relaxed text-brand-100">
            Please visit us on a desktop or laptop. Our mobile site is coming soon.
          </p>
          <p className="mt-6 text-sm text-brand-200">Nexara Traders · Pune, Maharashtra</p>
        </div>
      </div>
    );
  }

  return children;
}
