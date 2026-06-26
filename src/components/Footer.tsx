import Link from "next/link";
import { Sparkles, Code2, AtSign, Globe2, MessageCircle, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "./nav-links";

const socials = [
  { icon: Code2, href: "https://github.com/Nitesh-9009", label: "GitHub" },
  { icon: AtSign, href: "#", label: "Twitter / X" },
  { icon: Globe2, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-bg">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-serif text-2xl text-ink">Aakaar</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Crafting form &amp; future. One studio, five experiences — built
              with intent, motion and a love for detail.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-faint">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-faint">
              Say hello
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href="mailto:hello@aakaar.studio" className="transition-colors hover:text-ink">
                  hello@aakaar.studio
                </a>
              </li>
              <li>Remote · Worldwide</li>
              <li className="pt-2">
                <a
                  href="mailto:hello@aakaar.studio"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold/10"
                >
                  Start a project <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Aakaar Studio. All rights reserved.</p>
          <p>Designed &amp; built by Nitesh Patel.</p>
        </div>
      </div>
    </footer>
  );
}
