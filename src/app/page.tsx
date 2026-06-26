"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Gauge,
  ShieldCheck,
  Layers,
  Wand2,
  Globe,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

const features = [
  {
    icon: Rocket,
    title: "Launch in days",
    body: "Pre-built flows and a design system that turns ideas into shippable products fast.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    body: "Edge-rendered, image-optimised and scoring green on Core Web Vitals out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Best-practice auth, hardened headers and OWASP-aware patterns baked in.",
  },
  {
    icon: Layers,
    title: "Composable",
    body: "Mix and match modular blocks — landing, events, showcase, portfolio, community.",
  },
  {
    icon: Wand2,
    title: "Motion-first",
    body: "Scroll reveals, parallax and micro-interactions tuned for a premium feel.",
  },
  {
    icon: Globe,
    title: "Responsive everywhere",
    body: "Pixel-perfect from 375px phones to ultra-wide displays, automatically.",
  },
];

const stats = [
  { to: 120, suffix: "+", label: "Products launched" },
  { to: 98, suffix: "%", label: "Client retention" },
  { to: 40, suffix: "K", label: "Community members" },
  { to: 12, suffix: "", label: "Design awards" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28"
      >
        <motion.div
          style={{ y: yDown }}
          className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-gold/20 blur-[100px]"
        />
        <motion.div
          style={{ y: yUp }}
          className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-bright/10 blur-[120px]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_75%)]" />

        <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal direction="none">
            <Eyebrow>Aakaar · The studio launchpad</Eyebrow>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-7 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl lg:text-8xl"
          >
            Crafting <span className="text-gradient-gold italic">form</span>
            <br />
            &amp; future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            One studio, five experiences. Aakaar turns startups, events,
            products, portfolios and communities into beautifully crafted,
            motion-rich web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/showcase"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-7 py-3.5 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
            >
              Explore the work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/event"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-ink transition-all duration-300 hover:border-gold/50 hover:bg-white/5"
            >
              See upcoming event
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee
        items={["Startups", "Events", "Showcases", "Portfolios", "Communities"]}
      />

      {/* ===== ABOUT / CONTENT ===== */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <Eyebrow>About the studio</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight text-ink sm:text-5xl">
              We design the{" "}
              <span className="text-gradient-gold italic">shape</span> of what
              comes next.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Aakaar — meaning <em>form</em> — is a multi-experience design
              studio. We believe great products are felt before they&apos;re
              understood. So we obsess over motion, hierarchy and the small
              details that make an interface feel alive.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From a startup&apos;s first landing page to a thriving community
              hub, every surface is crafted with the same care, the same system,
              the same intent.
            </p>
            <Link
              href="/portfolio"
              className="group mt-8 inline-flex items-center gap-2 font-medium text-gold"
            >
              View our portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="relative">
              <div className="glass rounded-3xl p-2">
                <div className="rounded-[1.25rem] bg-gradient-to-br from-surface-2 to-bg p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-line/60 bg-white/[0.02] p-5 text-center"
                      >
                        <div className="font-serif text-4xl text-gradient-gold">
                          <Counter to={s.to} suffix={s.suffix} />
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-wider text-faint">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="animate-float absolute -right-4 -top-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold-bright to-gold text-bg shadow-xl">
                <Rocket className="h-7 w-7" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURES BENTO ===== */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeading
          eyebrow="Why Aakaar"
          title="A system that"
          highlight="scales with you"
          subtitle="Every page type ships with the same polished foundation — motion, accessibility and performance, handled."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-3xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-surface">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-bg">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl text-ink">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold-bright/15 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Ready to give your idea a{" "}
              <span className="text-gradient-gold italic">form</span>?
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Tell us what you&apos;re building. We&apos;ll bring the craft, the
              motion and the polish.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/community"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
              >
                Join the community
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:hello@aakaar.studio"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink transition-all hover:border-gold/50 hover:bg-white/5"
              >
                Start a project
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
