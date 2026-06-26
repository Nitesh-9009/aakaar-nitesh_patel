"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Trophy,
  Lightbulb,
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
        <div className="animate-float grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-accent2 to-accent shadow-[0_0_60px_rgba(37,99,235,0.20)]">
          <Building2 className="h-16 w-16 text-bg" />
        </div>
        <p className="mt-8 font-serif text-2xl text-ink">CENEX</p>
        <p className="mt-1 text-sm text-muted">Civil Engineering National Exhibition</p>
      </div>
      <span className="absolute right-6 top-6 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/30">
        Flagship
      </span>
    </motion.div>
  );
}

const specs = [
  { icon: Building2, label: "Exhibitors", value: "100+ firms" },
  { icon: Users, label: "Footfall", value: "10,000+" },
  { icon: Trophy, label: "Competitions", value: "National level" },
  { icon: Lightbulb, label: "On display", value: "Live demos" },
];

const bento = [
  {
    title: "Product pavilions",
    body: "Leading firms showcase the latest in construction tech, materials and design.",
    span: "sm:col-span-2",
  },
  { title: "Live demonstrations", body: "Simulations, scale models and prototypes, in action." },
  { title: "National competitions", body: "Go head-to-head with the best civil minds in the country." },
  {
    title: "Networking",
    body: "Meet recruiters, founders and academics shaping the field.",
    span: "sm:col-span-2",
  },
];

export default function ShowcasePage() {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-36 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal direction="none">
              <Eyebrow>Flagship event</Eyebrow>
            </Reveal>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
            >
              Inside <span className="text-gradient-accent">CENEX</span>
            </motion.h1>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                The Civil Engineering National Exhibition is Aakaar&apos;s grand
                stage — where companies display their finest work and students
                come to learn, compete and get inspired.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#specs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
                >
                  Explore highlights
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink">
                  <span className="font-serif text-xl text-accent">Free</span>
                  <span className="text-sm text-muted">entry · open to all</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-7 flex items-center gap-2 text-sm text-muted">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </span>
                Asia&apos;s largest · since 2009
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
          eyebrow="By the numbers"
          title="A grand"
          highlight="platform"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Stagger className="space-y-3">
            {specs.map((sp, i) => (
              <StaggerItem key={sp.label}>
                <button
                  onClick={() => setActiveSpec(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeSpec === i
                      ? "border-accent/50 bg-accent/5"
                      : "border-line bg-surface/40 hover:border-accent/30"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                      activeSpec === i
                        ? "bg-accent text-bg"
                        : "bg-accent/10 text-accent"
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
                    <Icon className="mx-auto h-24 w-24 text-accent" strokeWidth={1} />
                  );
                })()}
                <p className="mt-6 font-serif text-3xl text-gradient-accent">
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
          eyebrow="Highlights"
          title="More than an"
          highlight="exhibition"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {bento.map((b) => (
            <StaggerItem key={b.title} className={b.span ?? ""}>
              <div className="group h-full rounded-3xl border border-line bg-gradient-to-br from-surface/60 to-bg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-6 h-px w-12 bg-accent transition-all duration-300 group-hover:w-20" />
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
          <Eyebrow>In their words</Eyebrow>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-snug text-ink sm:text-4xl">
            “Civil Expo provides a grand platform for companies to display their
            products — and for every attendee to learn.”
          </h2>
          <p className="mt-6 text-muted">— Aakaar, IIT Bombay</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Be at <span className="text-gradient-accent">CENEX</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              The exhibition runs across all three days of Aakaar, with free
              entry for students and professionals alike.
            </p>
            <Link
              href="/portfolio"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
            >
              See past editions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
