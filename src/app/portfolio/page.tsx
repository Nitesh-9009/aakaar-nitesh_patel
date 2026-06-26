"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, PenTool, Compass, Code2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading, Eyebrow } from "@/components/Section";

const categories = ["All", "Web", "Brand", "Product", "Motion"] as const;
type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  year: string;
  tag: string;
};

const projects: Project[] = [
  { title: "Lumen Finance", category: "Web", year: "2025", tag: "Fintech platform" },
  { title: "Northwind", category: "Brand", year: "2025", tag: "Identity system" },
  { title: "Aura One", category: "Product", year: "2026", tag: "Wearable launch" },
  { title: "Solstice", category: "Motion", year: "2024", tag: "Title sequence" },
  { title: "Meridian", category: "Web", year: "2024", tag: "SaaS dashboard" },
  { title: "Vellum", category: "Brand", year: "2026", tag: "Editorial brand" },
];

const process = [
  { icon: Compass, title: "Discover", body: "We map the problem, the people and the possibilities." },
  { icon: PenTool, title: "Design", body: "Systems, motion and prototypes that feel inevitable." },
  { icon: Code2, title: "Build", body: "Performant, accessible, production-grade code." },
  { icon: Rocket, title: "Launch", body: "Ship, measure, refine — then do it again." },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-16">
        <div className="pointer-events-none absolute -right-10 top-20 h-96 w-96 rounded-full bg-accent/12 blur-[130px]" />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal direction="none">
            <Eyebrow>Selected work</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            Work we&apos;re <span className="text-gradient-accent">proud</span> of
          </motion.h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A look at the brands, products and experiences we&apos;ve shaped —
              each one crafted with intent, motion and obsessive detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  filter === c ? "text-bg" : "text-muted hover:text-ink"
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-surface/40"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 to-bg">
                  <span className="font-serif text-6xl text-line transition-all duration-500 group-hover:scale-110 group-hover:text-accent/30">
                    {p.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm text-muted">{p.tag}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-bg">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg text-ink">{p.title}</h3>
                  <span className="text-sm text-faint">{p.year}</span>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs text-accent ring-1 ring-accent/20 backdrop-blur">
                  {p.category}
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ABOUT / PROCESS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for"
          highlight="great outcomes"
          subtitle="Four deliberate stages that take an idea from a blank page to something people love to use."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-4xl text-line">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent2/15 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Have a project in <span className="text-gradient-accent">mind</span>?
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              We take on a handful of partners each quarter. Let&apos;s see if
              we&apos;re a fit.
            </p>
            <Link
              href="/community"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
