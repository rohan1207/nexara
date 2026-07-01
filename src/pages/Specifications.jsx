import { CheckCircle2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { specifications } from "../constants/siteContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal } from "../components/ui/Reveal";

export default function Specifications() {
  const { highlights, categories, materials } = specifications;

  return (
    <div className="bg-neutral-50">
      <PageHero
        theme="nexera"
        badge={specifications.eyebrow}
        title={specifications.title}
        description={specifications.description}
        image={images.specs}
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-amber-100 bg-amber-100 sm:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="bg-white px-4 py-5 text-center md:py-6">
                <p className="font-display text-2xl font-bold text-neutral-950 md:text-3xl">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 card-grid-2-2 sm:mt-14">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-neutral-100 bg-white card-pad shadow-sm sm:rounded-2xl md:p-8">
                <h3 className="font-display text-lg font-bold text-neutral-950">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <h2 className="font-display text-2xl font-bold text-neutral-950">Materials of construction</h2>
          <div className="mt-5 card-grid-2-4 gap-3 sm:mt-6 sm:gap-4">
            {materials.map((m) => (
              <div key={m.code} className="rounded-xl border border-neutral-100 bg-white p-3.5 sm:rounded-2xl sm:p-5">
                <span className="inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                  {m.code}
                </span>
                <p className="mt-2 font-display font-bold text-neutral-950">{m.name}</p>
                <p className="mt-1 text-sm text-neutral-600">{m.use}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 text-center">
          <PillButton
            to="/contact#enquiry"
            variant="primary"
            fullWidth
            className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto sm:px-8"
          >
            Request application-specific sizing
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </PillButton>
        </Reveal>
      </div>
    </div>
  );
}
