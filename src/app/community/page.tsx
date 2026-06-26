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
  { to: 40, suffix: "K", label: "Members" },
  { to: 120, suffix: "+", label: "Cities" },
  { to: 850, suffix: "", label: "Events hosted" },
  { to: 24, suffix: "/7", label: "Active chat" },
];

const benefits = [
  { icon: MessagesSquare, title: "Real conversations", body: "Channels for every craft — design, code, motion, careers." },
  { icon: Calendar, title: "Weekly sessions", body: "Live critiques, AMAs and workshops with working pros." },
  { icon: Gift, title: "Member perks", body: "Tools, templates and event passes, on the house." },
  { icon: Heart, title: "Genuine support", body: "Feedback that lifts you up and pushes you forward." },
];

const testimonials = [
  {
    quote: "This community rebuilt my confidence. I shipped my first product because of the people here.",
    name: "Maya R.",
    role: "Product Designer",
  },
  {
    quote: "The weekly critiques are gold. Honest, kind and genuinely useful every single time.",
    name: "Dev S.",
    role: "Frontend Engineer",
  },
  {
    quote: "I found my co-founder in the #startups channel. Aakaar changed my trajectory.",
    name: "Tobias K.",
    role: "Founder",
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
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/12 blur-[140px]" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal direction="none">
            <Eyebrow>The Aakaar community</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            Build with people who{" "}
            <span className="text-gradient-gold italic">get it</span>
          </motion.h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              40,000 designers, builders and dreamers sharing work, trading
              feedback and shipping things they&apos;re proud of — together.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mx-auto mt-10 flex max-w-md -space-x-3">
              {["AV", "KM", "PN", "LM", "MR", "DS"].map((i, idx) => (
                <span
                  key={i}
                  style={{ zIndex: 10 - idx }}
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-bg bg-gradient-to-br from-gold-bright/30 to-gold/10 text-sm text-gold ring-1 ring-gold/20"
                >
                  {i}
                </span>
              ))}
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-bg bg-surface text-xs text-muted">
                +40k
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
                <div className="font-serif text-4xl text-gradient-gold sm:text-5xl">
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
          eyebrow="Why join"
          title="More than a"
          highlight="Discord server"
          subtitle="A genuine home for your craft — with the structure, people and energy to help you grow."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group h-full rounded-3xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-bg">
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
        <SectionHeading eyebrow="Member stories" title="Real people," highlight="real growth" />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-surface/40 p-7">
                <blockquote className="font-serif text-lg leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-sm text-gold">
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
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-[80px]" />
            <span className="relative grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-bright to-gold text-bg">
              <Users className="h-7 w-7" />
            </span>
            <h2 className="relative mt-6 text-balance text-4xl text-ink sm:text-5xl">
              Join the <span className="text-gradient-gold italic">circle</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-muted">
              Drop your email and we&apos;ll send your invite. Free, forever.
            </p>

            {status === "done" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-gold/10 px-6 py-3 text-gold-soft ring-1 ring-gold/30"
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
                    placeholder="you@studio.com"
                    className="w-full rounded-full border border-line bg-bg/60 px-5 py-3.5 text-ink placeholder:text-faint transition-colors focus:border-gold/50"
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
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-7 py-3.5 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
                >
                  Get invite
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
