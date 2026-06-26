"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

/* ────────────────────────────────────────────────────────────
   EDIT YOUR DETAILS HERE
   ──────────────────────────────────────────────────────────── */
const PROFILE = {
  name: "Nitesh Patel",
  role: "Web Developer & Tech Enthusiast",
  tagline: "B.Tech · IIT Bombay · 2026",
  // Replace /profile.svg with your own photo: drop a file in /public
  // (e.g. /nitesh.jpg) and change the path below.
  photo: "/profile.svg",
  intro:
    "I'm a student at IIT Bombay whose real passion is technology. I'm a self-taught web developer who loves building fast, polished interfaces with React, Next.js and modern tooling — and I'm always tinkering with new things across software and the web.",
  email: "nitesh6742patel@gmail.com",
  github: "https://github.com/Nitesh-9009",
  location: "Mumbai, India",
};

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech, IIT Bombay" },
  { icon: MapPin, label: "Location", value: PROFILE.location },
  { icon: Compass, label: "Focus", value: "Web Development & Software" },
];

// Edit your skills here
const skills = [
  "Reactjs",
  "Nextjs",
  "Tailwind CSS",
  "javascript",
  "Python",
  "C++",
];

export default function PortfolioPage() {
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
          highlight="tech"
          subtitle="The languages, frameworks and tools I build with."
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
