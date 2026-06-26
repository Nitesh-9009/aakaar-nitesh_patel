"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Battery,
  Feather,
  Bluetooth,
  Sparkles,
  Star,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 16);
    rx.set(-py * 16);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform }}
      className="glass relative aspect-square w-full max-w-md rounded-[2rem] p-8"
    >
      <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-surface-2 via-bg to-bg">
        <div className="animate-float grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-gold-bright to-gold shadow-[0_0_60px_rgba(232,180,60,0.4)]">
          <Sparkles className="h-16 w-16 text-bg" />
        </div>
        <p className="mt-8 font-serif text-2xl text-ink">Aura One</p>
        <p className="mt-1 text-sm text-muted">Crafted in titanium &amp; glass</p>
      </div>
      <span className="absolute right-6 top-6 rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-soft ring-1 ring-gold/30">
        New
      </span>
    </motion.div>
  );
}

const specs = [
  { icon: Cpu, label: "Neural chip", value: "A-series 3nm" },
  { icon: Battery, label: "Battery life", value: "38 hours" },
  { icon: Feather, label: "Weight", value: "41 grams" },
  { icon: Bluetooth, label: "Connectivity", value: "BT 5.4 / UWB" },
];

const bento = [
  {
    title: "Adaptive audio",
    body: "Spatial sound that reshapes itself to your space in real time.",
    span: "sm:col-span-2",
  },
  { title: "All-day comfort", body: "Featherlight, balanced, forgettable — in the best way." },
  { title: "Titanium shell", body: "Aerospace-grade, endlessly recyclable." },
  {
    title: "Gesture control",
    body: "A flick, a tap, a turn. The interface disappears.",
    span: "sm:col-span-2",
  },
];

export default function ShowcasePage() {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-36 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/15 blur-[140px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal direction="none">
              <Eyebrow>Product showcase</Eyebrow>
            </Reveal>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
            >
              Meet <span className="text-gradient-gold italic">Aura One</span>
            </motion.h1>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                The most refined thing we&apos;ve ever made. Engineered to vanish
                into your day and reappear exactly when you need it.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#specs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
                >
                  Explore specs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink">
                  <span className="font-serif text-xl text-gold">$349</span>
                  <span className="text-sm text-muted">/ free shipping</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-7 flex items-center gap-2 text-sm text-muted">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </span>
                4.9 · 2,300+ reviews
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="flex justify-center">
              <TiltCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Technical"
          title="Obsessively"
          highlight="engineered"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Stagger className="space-y-3">
            {specs.map((sp, i) => (
              <StaggerItem key={sp.label}>
                <button
                  onClick={() => setActiveSpec(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeSpec === i
                      ? "border-gold/50 bg-gold/5"
                      : "border-line bg-surface/40 hover:border-gold/30"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                      activeSpec === i
                        ? "bg-gold text-bg"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    <sp.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm text-faint">{sp.label}</span>
                    <span className="block text-lg text-ink">{sp.value}</span>
                  </span>
                </button>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal direction="left">
            <div className="glass flex aspect-[4/3] items-center justify-center rounded-[2rem] p-10">
              <motion.div
                key={activeSpec}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {(() => {
                  const Icon = specs[activeSpec].icon;
                  return (
                    <Icon className="mx-auto h-24 w-24 text-gold" strokeWidth={1} />
                  );
                })()}
                <p className="mt-6 font-serif text-3xl text-gradient-gold">
                  {specs[activeSpec].value}
                </p>
                <p className="mt-1 text-muted">{specs[activeSpec].label}</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENTO FEATURES */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Features"
          title="Details you feel,"
          highlight="not just see"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {bento.map((b) => (
            <StaggerItem key={b.title} className={b.span ?? ""}>
              <div className="group h-full rounded-3xl border border-line bg-gradient-to-br from-surface/60 to-bg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-6 h-px w-12 bg-gold transition-all duration-300 group-hover:w-20" />
                <h3 className="text-2xl text-ink">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ABOUT / STORY */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          <Eyebrow>The story</Eyebrow>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-snug text-ink sm:text-4xl">
            “We removed everything that didn&apos;t matter, then perfected what
            was left.”
          </h2>
          <p className="mt-6 text-muted">— The Aakaar product team</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-gold/20 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Hold the <span className="text-gradient-gold italic">future</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Aura One ships worldwide with a 30-day return window and a two-year
              warranty.
            </p>
            <Link
              href="/portfolio"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
            >
              See more work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
