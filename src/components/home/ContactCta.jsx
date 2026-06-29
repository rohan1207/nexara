import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";
import { company } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";

export default function ContactCta() {
  return (
    <section className="bg-neutral-50 section-py">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-[0_24px_60px_rgba(251,191,36,0.1)]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <OptimizedImage src={images.contact} alt="Nexara Traders Pune" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent lg:bg-gradient-to-l lg:from-neutral-950/50 lg:to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">Reach out to us</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-neutral-950 sm:text-3xl md:text-4xl">
                  Send your product enquiry
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  Share product name, bore size, torque/speed requirements, and quantity. {company.proprietor} and our
                  team respond promptly with technical guidance and quotations.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="text-neutral-500">
                    <span className="font-semibold text-neutral-800">Proprietor:</span> {company.proprietor}
                  </li>
                  <li>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 font-semibold text-neutral-900 hover:text-amber-700"
                    >
                      <Phone className="h-4 w-4 text-amber-500" /> {company.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-600 hover:text-amber-700"
                    >
                      <MessageCircle className="h-4 w-4 text-amber-500" /> WhatsApp
                    </a>
                  </li>
                  {company.emails.map((email) => (
                    <li key={email}>
                      <a href={`mailto:${email}`} className="flex items-center gap-2 text-neutral-600 hover:text-amber-700">
                        <Mail className="h-4 w-4 text-amber-500" /> {email}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
                  <PillButton
                    to="/contact#enquiry"
                    variant="primary"
                    fullWidth
                    className="border-0 bg-neutral-950 text-white hover:bg-neutral-800 sm:w-auto"
                  >
                    Send enquiry
                    <ArrowUpRight className="h-4 w-4 text-amber-400" />
                  </PillButton>
                  <Link
                    to="/specifications"
                    className="btn-mobile border border-amber-200 text-neutral-950 hover:bg-amber-50"
                  >
                    Technical specs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
