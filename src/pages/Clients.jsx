import PageHero from "../components/layout/PageHero";
import { partnersSection, partnerBrands } from "../constants/partners";
import { clientHighlights } from "../constants/siteContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal } from "../components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import ClientsStrip from "../components/home/ClientsStrip";

export default function Clients() {
  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge="Our partners"
        title={partnersSection.title}
        description={partnersSection.lead}
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-amber-100 bg-amber-100 sm:grid-cols-4">
            {clientHighlights.map((item) => (
              <div key={item.label} className="bg-white px-4 py-5 text-center">
                <p className="font-display text-2xl font-bold text-neutral-950">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 card-grid-2-4 gap-3 sm:mt-14 sm:gap-5">
          {partnerBrands.map((brand) => (
            <Reveal key={brand.id}>
              <div className="flex h-full flex-col items-center rounded-xl border border-neutral-100 bg-white p-4 text-center shadow-sm sm:rounded-2xl sm:p-6">
                <div className="flex h-16 w-full items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = images.logo;
                      e.currentTarget.className = "max-h-12 object-contain opacity-40";
                    }}
                  />
                </div>
                <p className="mt-4 text-sm font-bold text-neutral-950">{brand.name}</p>
                <p className="mt-1 text-xs text-neutral-500">{brand.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto sm:px-8"
          >
            Partner with Nexara Traders
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
        </Reveal>
      </div>

      {/* Reuse marquee section */}
      <ClientsStrip />
    </div>
  );
}
