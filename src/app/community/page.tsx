"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessagesSquare,
  Calendar,
  Gift,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";
import Counter from "@/components/Counter";

const stats = [
  { to: 5000, suffix: "+", label: "Participants" },
  { to: 50, suffix: "+", label: "Colleges" },
  { to: 30, suffix: "+", label: "Events" },
  { to: 16, suffix: "+", label: "Editions" },
];

const benefits = [
  { icon: MessagesSquare, title: "Learn & build", body: "Workshops and lectures with working professionals and academics." },
  { icon: Calendar, title: "Compete nationally", body: "National-level events with real recognition and prizes." },
  { icon: Gift, title: "Get noticed", body: "Certificates, prizes and visibility with leading firms." },
  { icon: Heart, title: "Connect", body: "Meet civil enthusiasts from the best institutions nationwide." },
];

const testimonials = [
  {
    quote: "Aakaar was the first time I competed at a national level. The exposure was unreal.",
    name: "Ananya P.",
    role: "Civil Engineering, NIT",
  },
  {
    quote: "The workshops are genuinely hands-on. I left knowing software I'd only read about.",
    name: "Rohan D.",
    role: "Final year, VJTI",
  },
  {
    quote: "The lecture series brought experts I never thought I'd hear in person. Inspiring.",
    name: "Sara K.",
    role: "Civil Engineering, COEP",
  },
];

export default function CommunityPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("done");
    setEmail("");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-40 pb-16">
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal direction="none">
            <Eyebrow>Join the festival</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            Build with people who{" "}
            <span className="text-gradient-accent">get it</span>
          </motion.h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Thousands of civil engineering students from the best colleges —
              learning, competing and building together at IIT Bombay.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mx-auto mt-10 flex max-w-md -space-x-3">
              {["AV", "KM", "PN", "LM", "MR", "DS"].map((i, idx) => (
                <span
                  key={i}
                  style={{ zIndex: 10 - idx }}
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-bg bg-gradient-to-br from-accent2/30 to-accent/10 text-sm text-accent ring-1 ring-accent/20"
                >
                  {i}
                </span>
              ))}
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-bg bg-surface text-xs text-muted">
                +5k
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-serif text-4xl text-gradient-accent sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ABOUT / BENEFITS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Why participate"
          title="More than a"
          highlight="fest"
          subtitle="A genuine platform for your craft — with the people, events and energy to help you grow."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group h-full rounded-3xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{b.title}</h3>
                <p className="mt-2 text-muted">{b.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeading eyebrow="Voices from Aakaar" title="Real students," highlight="real growth" />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface/40 p-7">
                <blockquote className="font-serif text-lg leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-sm text-accent">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm text-ink">{t.name}</span>
                    <span className="block text-xs text-faint">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* JOIN FORM */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />
            <span className="relative grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent2 to-accent text-bg">
              <Users className="h-7 w-7" />
            </span>
            <h2 className="relative mt-6 text-balance text-4xl text-ink sm:text-5xl">
              Stay in the <span className="text-gradient-accent">loop</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-muted">
              Drop your email for schedules, registration alerts and event
              updates. No spam, ever.
            </p>

            {status === "done" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-6 py-3 text-accent ring-1 ring-accent/30"
              >
                <CheckCircle2 className="h-5 w-5" /> You&apos;re in — check your inbox!
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="flex-1 text-left">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="you@college.edu"
                    className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-ink placeholder:text-faint transition-colors focus:border-accent/50"
                    aria-invalid={status === "error"}
                  />
                  {status === "error" && (
                    <p className="mt-2 pl-4 text-sm text-red-400">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
                >
                  Get updates
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
