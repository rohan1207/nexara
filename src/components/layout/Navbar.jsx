import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Phone, Mail } from "lucide-react";
import Logo from "./logo";
import { navItems, ctaItem } from "../../constants/navigation";
import { heroContent, company } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";
import { cn } from "../../utils/cn";
import { isNavActive } from "../../utils/navActive";

const navPill =
  "rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-200 active:scale-[0.97]";

const navActive = "bg-neutral-950 text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]";
const navIdle = "text-neutral-600 hover:bg-amber-50 hover:text-neutral-950";

function ProductNavItem({ item, onNavigate }) {
  return (
    <div className="rounded-xl px-2 py-1.5 transition-colors hover:bg-amber-50/70">
      <Link
        to={item.href}
        className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-[13px] font-semibold text-neutral-900 hover:text-neutral-950"
        onClick={onNavigate}
      >
        <span className="min-w-0 leading-snug">{item.label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-amber-600" />
      </Link>
      {item.variants?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 px-2 pb-2">
          {item.variants.map((variant) => (
            <Link
              key={variant.href}
              to={variant.href}
              className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition-all hover:border-amber-200 hover:bg-amber-50 hover:text-neutral-950"
              onClick={onNavigate}
            >
              {variant.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavDropdown({ label, children, href }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const isActive = isNavActive(location.pathname, href);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(navPill, "inline-flex items-center gap-1.5", isActive ? navActive : navIdle, open && !isActive && "bg-amber-50 text-neutral-950")}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.16 }}
            className="absolute left-1/2 top-full z-50 mt-2 max-h-[min(78vh,560px)] w-[min(92vw,680px)] -translate-x-1/2 overflow-y-auto rounded-2xl border border-amber-100 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
          >
            <Link
              to={href}
              className="mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-amber-700 hover:bg-amber-50"
              onClick={closeMenu}
            >
              View all products
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <div className="h-px bg-amber-100" />
            <div className="mt-1 grid gap-0.5 sm:grid-cols-2">
              {children.map((item) => (
                <ProductNavItem key={item.href} item={item} onNavigate={closeMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileProductsNav({ items, href, closeMobile, pathname }) {
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const isActive = isNavActive(pathname, href);

  return (
    <div className="border-b border-amber-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center justify-between py-3.5 font-display text-base font-semibold",
          isActive ? "text-amber-700" : "text-neutral-950"
        )}
      >
        Products
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-1 pb-3 pl-1">
              <Link
                to={href}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                onClick={closeMobile}
              >
                View all products
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              {items.map((item) => {
                const hasVariants = item.variants?.length > 0;
                const isExpanded = expandedId === item.href;

                return (
                  <div key={item.href} className="rounded-xl border border-transparent hover:border-amber-100">
                    <div className="flex items-stretch">
                      <Link
                        to={item.href}
                        className="min-w-0 flex-1 px-3 py-2.5 text-sm font-semibold text-neutral-900"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                      {hasVariants && (
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : item.href)}
                          className="inline-flex w-10 shrink-0 items-center justify-center text-neutral-500"
                          aria-label={`Show ${item.label} variants`}
                        >
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                        </button>
                      )}
                    </div>

                    {hasVariants && isExpanded && (
                      <div className="flex flex-wrap gap-1.5 px-3 pb-2.5">
                        {item.variants.map((variant) => (
                          <Link
                            key={variant.href}
                            to={variant.href}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700"
                            onClick={closeMobile}
                          >
                            {variant.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className="hidden border-b border-white/10 bg-neutral-950 lg:block">
          <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-8 text-[11px] text-neutral-400 xl:px-10">
            <p className="font-medium uppercase tracking-[0.14em] text-neutral-500">
              {heroContent.tagline}
            </p>
            <div className="flex items-center gap-5">
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 hover:text-amber-400"
                >
                  <Phone className="h-3 w-3" />
                  {phone}
                </a>
              ))}
              <a href={`mailto:${company.emails[0]}`} className="inline-flex items-center gap-1.5 hover:text-amber-400">
                <Mail className="h-3 w-3" />
                {company.emails[0]}
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "border-b transition-all duration-300",
            scrolled
              ? "border-amber-100/90 bg-white/95 shadow-[0_4px_24px_rgba(251,191,36,0.08)] backdrop-blur-md"
              : "border-transparent bg-white/90 backdrop-blur-sm"
          )}
        >
          <div className="mx-auto flex h-[var(--nav-main-height)] max-w-[1400px] items-center justify-between gap-2 px-4 sm:gap-4 md:px-8 xl:px-10">
            <Link to="/" className="flex shrink-0 items-center py-1">
              <Logo variant="nav" />
            </Link>

            <nav className="hidden items-center gap-0.5 xl:flex">
              {navItems.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} label={item.label} href={item.href} children={item.children} />
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(navPill, isNavActive(location.pathname, item.href) ? navActive : navIdle)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-100 bg-white text-neutral-700 transition-colors hover:bg-amber-50 lg:hidden"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4 text-amber-600" />
              </a>

              <PillButton
                to={ctaItem.href}
                variant="primary"
                size="sm"
                className="hidden border-0 bg-neutral-950 text-[13px] text-white hover:bg-neutral-800 min-[380px]:inline-flex xl:px-6 xl:py-3 xl:text-sm"
              >
                <span className="xl:hidden">Enquire</span>
                <span className="hidden xl:inline">{ctaItem.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-amber-400 xl:h-4 xl:w-4" />
              </PillButton>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cn(navPill, "border border-amber-100 bg-white p-2.5 xl:hidden")}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[var(--nav-height)] shrink-0" aria-hidden />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-neutral-950/40 backdrop-blur-sm xl:hidden"
              onClick={closeMobile}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[120] flex w-full max-w-sm flex-col bg-white xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-amber-100 px-5 py-5">
                <Logo variant="sidebar" />
                <button
                  type="button"
                  onClick={closeMobile}
                  className={cn(navPill, "border border-amber-100 p-2.5")}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-3">
                {navItems.map((item) =>
                  item.children ? (
                    <MobileProductsNav
                      key={item.label}
                      items={item.children}
                      href={item.href}
                      closeMobile={closeMobile}
                      pathname={location.pathname}
                    />
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "block border-b border-amber-50 py-3.5 font-display text-base font-semibold",
                        isNavActive(location.pathname, item.href) ? "text-amber-700" : "text-neutral-950"
                      )}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="border-t border-amber-100 p-4 sm:p-5">
                <PillButton
                  to={ctaItem.href}
                  variant="primary"
                  fullWidth
                  className="border-0 bg-neutral-950 text-white hover:bg-neutral-800"
                  onClick={closeMobile}
                >
                  {ctaItem.label}
                  <ArrowUpRight className="h-4 w-4 text-amber-400" />
                </PillButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
