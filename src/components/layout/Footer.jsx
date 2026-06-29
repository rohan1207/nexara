import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, ExternalLink } from "lucide-react";
import Logo from "./logo";
import { company, heroContent } from "../../constants/siteContent";
import { navItems, ctaItem } from "../../constants/navigation";
import { PillButton } from "../ui/PillButton";

const footerProducts = [
  "KTR Couplings",
  "ROTEX® & TOOLFLEX®",
  "AutoLock Locking",
  "Alwayse BTU",
  "Gear & Flange",
  "Custom Drive Parts",
];

const socialIcons = {
  places: ExternalLink,
  facebook: Facebook,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-500/20 bg-neutral-950 text-neutral-400">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-amber-500/8 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-amber-400/6 blur-[80px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-10 sm:px-5 sm:py-14 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <Logo variant="footer" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
              {heroContent.brand} — authorised KTR dealer and channel partner for precision couplings, locking
              assemblies, and power transmission components. Pune, Maharashtra.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {company.social.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon] ?? ExternalLink;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-neutral-300 transition-colors hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Quick links</h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Products</h4>
            <ul className="mt-4 space-y-2.5">
              {footerProducts.map((item) => (
                <li key={item}>
                  <Link
                    to="/#products"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3 text-neutral-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.city}
                </span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-neutral-400 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                    {phone}
                  </a>
                </li>
              ))}
              {company.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 break-all text-neutral-400 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-neutral-500 sm:text-left">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <PillButton
            to={ctaItem.href}
            variant="primary"
            fullWidth
            className="border-0 bg-amber-500 text-neutral-950 hover:bg-amber-400 sm:w-auto sm:px-5 sm:py-2.5"
          >
            {ctaItem.label}
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </div>

        <p className="mt-6 text-c