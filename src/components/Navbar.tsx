"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "./nav-links";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-strong shadow-lg shadow-black/40" : "glass"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Aakaar home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-bg transition-transform duration-300 group-hover:rotate-12">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-serif text-xl tracking-tight text-ink">
            Aakaar
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-gold/30"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/community"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-bright to-gold px-5 py-2 text-sm font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_24px_rgba(232,180,60,0.4)]"
          >
            Join us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute left-4 right-4 top-[4.5rem] z-50 rounded-3xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? "bg-white/8 text-ink"
                          : "text-muted hover:bg-white/5 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 px-1">
                <Link
                  href="/community"
                  className="block rounded-2xl bg-gradient-to-r from-gold-bright to-gold px-4 py-3 text-center text-base font-semibold text-bg"
                >
                  Join us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
