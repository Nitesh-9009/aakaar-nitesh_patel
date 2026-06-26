"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  Compass,
  Layers,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeading, Eyebrow } from "@/components/Section";
import { img, IMAGES } from "@/lib/images";

/* ────────────────────────────────────────────────────────────
   EDIT YOUR DETAILS HERE
   ──────────────────────────────────────────────────────────── */
const PROFILE = {
  name: "Nitesh Patel",
  role: "Civil Engineering Student",
  tagline: "B.Tech · Civil Engineering · IIT Bombay · 2026",
  // Replace /profile.svg with your own photo: drop a file in /public
  // (e.g. /nitesh.jpg) and change the path below.
  photo: "/profile.svg",
  intro:
    "Final-year Civil Engineering undergraduate at IIT Bombay with a strong interest in structural design, sustainable construction and engineering software. I enjoy turning analysis into buildable, real-world solutions.",
  email: "nitesh6742patel@gmail.com",
  github: "https://github.com/Nitesh-9009",
  location: "Mumbai, India",
};

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech, IIT Bombay" },
  { icon: MapPin, label: "Location", value: PROFILE.location },
  { icon: Compass, label: "Focus", value: "Structural & Sustainable Design" },
];

// Edit your skills here
const skills = [
  "AutoCAD",
  "STAAD.Pro",
  "ETABS",
  "Revit (BIM)",
  "AutoCAD Civil 3D",
  "MATLAB",
  "Python",
  "MS Project",
  "Surveying",
  "Concrete Technology",
  "Structural Analysis",
  "Project Management",
];

const categories = ["All", "Structural", "Software", "Field", "Research"] as const;
type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  year: string;
  tech: string;
  desc: string;
  img: string;
};

// Edit / replace these with your real projects
const projects: Project[] = [
  {
    title: "RC Frame Analysis",
    category: "Structural",
    year: "2025",
    tech: "ETABS",
    desc: "Multi-storey reinforced-concrete frame designed and analysed for gravity and seismic loads.",
    img: IMAGES.buildingLow,
  },
  {
    title: "Steel Truss Bridge",
    category: "Structural",
    year: "2025",
    tech: "STAAD.Pro",
    desc: "Pedestrian steel truss modelled and optimised for deflection and member efficiency.",
    img: IMAGES.bridge,
  },
  {
    title: "BIM Building Model",
    category: "Software",
    year: "2024",
    tech: "Revit",
    desc: "Coordinated 3D BIM model with architectural, structural and MEP layers.",
    img: IMAGES.office,
  },
  {
    title: "Highway Alignment Design",
    category: "Field",
    year: "2024",
    tech: "Civil 3D",
    desc: "Horizontal and vertical alignment with earthwork volumes for a rural road stretch.",
    img: IMAGES.bridge2,
  },
  {
    title: "Concrete Mix Optimisation",
    category: "Research",
    year: "2025",
    tech: "Lab study",
    desc: "Experimental study to improve strength-to-cement ratio using supplementary materials.",
    img: IMAGES.worker,
  },
  {
    title: "Soil Bearing Capacity Study",
    category: "Field",
    year: "2023",
    tech: "Geotech",
    desc: "Site investigation and foundation recommendation based on plate load testing.",
    img: IMAGES.engineer,
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-36 pb-16">
        <div className="pointer-events-none absolute -right-10 top-24 h-96 w-96 rounded-full bg-accent/12 blur-[130px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: intro */}
          <div>
            <Reveal direction="none">
              <Eyebrow>{PROFILE.tagline}</Eyebrow>
            </Reveal>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
            >
              {PROFILE.name.split(" ")[0]}{" "}
              <span className="text-gradient-accent">
                {PROFILE.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>
            <Reveal delay={0.2}>
              <p className="mt-4 text-xl font-medium text-ink/80">{PROFILE.role}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{PROFILE.intro}</p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: photo */}
          <Reveal direction="none" delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-ink/10">
                <Image
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="glass-strong absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl px-5 py-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">IIT Bombay</p>
                  <p className="text-xs text-muted">Class of 2026</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1}>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface/40 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-faint">{f.label}</p>
                  <p className="mt-0.5 font-medium text-ink">{f.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills &"
          highlight="software"
          subtitle="Tools and technologies I use to design, analyse and deliver."
        />
        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Layers className="h-3.5 w-3.5 text-accent" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've"
          highlight="built"
          subtitle="Academic and personal projects across structural design, software and field work."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
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
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface-2">
                  <Image
                    src={img(p.img)}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">{p.tech}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs text-accent ring-1 ring-accent/20 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-ink">{p.title}</h3>
                    <span className="text-sm text-faint">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent2/15 blur-[80px]" />
            <h2 className="relative text-balance text-4xl text-ink sm:text-5xl">
              Let&apos;s <span className="text-gradient-accent">work together</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Open to internships, research and collaboration in civil and
              structural engineering. I&apos;d love to hear from you.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <Code2 className="h-4 w-4" />
                github.com/Nitesh-9009
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
