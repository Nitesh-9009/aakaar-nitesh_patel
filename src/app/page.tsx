"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Presentation,
  Users,
  Building2,
  FlaskConical,
  Trophy,
  HardHat,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import { img, IMAGES } from "@/lib/images";

const features = [
  {
    icon: Wrench,
    title: "Workshops",
    body: "Hands-on training in simulation, design and construction software, led with real industry tools.",
  },
  {
    icon: Presentation,
    title: "Lectures",
    body: "The globally renowned Aakaar lecture series, uniting leading experts in civil engineering.",
  },
  {
    icon: Users,
    title: "Panel Discussions",
    body: "Flagship round-tables with prominent figures from across the civil engineering world.",
  },
  {
    icon: Building2,
    title: "Civil Expo",
    body: "A grand platform for companies to display their products and for attendees to learn.",
  },
  {
    icon: FlaskConical,
    title: "Lab Visits",
    body: "Educational visits introducing students to the latest developments and evolving technologies.",
  },
  {
    icon: Trophy,
    title: "CENEX",
    body: "The Civil Engineering National Exhibition — ideas and innovation from across the nation.",
  },
];

const stats = [
  { to: 16, suffix: "+", label: "Editions strong" },
  { to: 50, suffix: "+", label: "Colleges nationwide" },
  { to: 30, suffix: "+", label: "Events & competitions" },
  { to: 5000, suffix: "+", label: "Participants" },
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
          className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
        />
        <motion.div
          style={{ y: yUp }}
          className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent2/10 blur-[120px]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_75%)]" />

        <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal direction="none">
            <Eyebrow>Aakaar · IIT Bombay · Since 2009</Eyebrow>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-7 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl lg:text-8xl"
          >
            Where civil engineering
            <br />
            takes <span className="text-gradient-accent">shape</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            Aakaar is the annual technical festival of the Department of Civil
            Engineering, IIT Bombay — and Asia&apos;s largest celebration of the
            field. Workshops, lectures, exhibitions and competitions, all in one
            place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/event"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
            >
              Explore the events
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-ink transition-all duration-300 hover:border-accent/50 hover:bg-ink/5"
            >
              Discover Civil Expo
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
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee
        items={["Workshops", "Lectures", "Panel Discussions", "Civil Expo", "CENEX", "Lab Visits"]}
      />

      {/* ===== ABOUT / CONTENT ===== */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <Eyebrow>About Aakaar</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight text-ink sm:text-5xl">
              Asia&apos;s largest{" "}
              <span className="text-gradient-accent">civil</span> engineering
              festival.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Since its inception in 2009, Aakaar has been a beacon of
              excellence — a stellar platform for students nationwide to
              showcase and elevate their skills to the highest level.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From hands-on workshops and globally renowned lectures to the
              Civil Engineering National Exhibition, every edition instigates
              students to innovate, create and learn.
            </p>
            <Link
              href="/event"
              className="group mt-8 inline-flex items-center gap-2 font-medium text-accent"
            >
              See the events
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={img(IMAGES.buildingLow)}
                  alt="Modern civil engineering architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="glass rounded-2xl p-4 text-center">
                      <div className="font-serif text-3xl text-white">
                        <Counter to={s.to} suffix={s.suffix} />
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/70">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-float absolute -right-4 -top-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent2 to-accent text-bg shadow-xl">
                <HardHat className="h-7 w-7" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURES BENTO ===== */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeading
          eyebrow="What's on"
          title="Events that"
          highlight="inspire & build"
          subtitle="Six flagship formats that make learning hands-on, competitive and unforgettable."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-3xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-bg">
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
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent2/15 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Be part of the next{" "}
              <span className="text-gradient-accent">edition</span>.
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Register your college, compete in national events and learn from
              the brightest minds in civil engineering.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/community"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
              >
                Register now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:contact@aakaariitb.org.in"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink transition-all hover:border-accent/50 hover:bg-ink/5"
              >
                Contact the team
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
