"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Ticket, Mic2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";

const EVENT_DATE = new Date();
EVENT_DATE.setDate(EVENT_DATE.getDate() + 42);

function useCountdown(target: Date) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

const agenda = [
  { time: "09:00", title: "Doors & welcome coffee", desc: "Networking in the glass atrium." },
  { time: "10:00", title: "Keynote — The Shape of Tomorrow", desc: "Vision for motion-first product design." },
  { time: "12:30", title: "Hands-on design lab", desc: "Build a landing page live with the Aakaar system." },
  { time: "15:00", title: "Panel — Craft at scale", desc: "How studios keep quality while shipping fast." },
  { time: "18:00", title: "Showcase & after-party", desc: "Demos, music and a golden-hour rooftop." },
];

const speakers = [
  { name: "Aria Voss", role: "Design Director, Lumen", initials: "AV" },
  { name: "Kenji Mori", role: "Founder, Northwind", initials: "KM" },
  { name: "Priya Nair", role: "Head of Motion, Aakaar", initials: "PN" },
  { name: "Leo Marchetti", role: "Creative Lead, Studio Sol", initials: "LM" },
];

export default function EventPage() {
  const { d, h, m, s } = useCountdown(EVENT_DATE);
  const dateLabel = EVENT_DATE.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const units = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28">
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-gold/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold-bright/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal direction="none">
            <Eyebrow>Aakaar Summit 2026</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-7 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            The Shape of <span className="text-gradient-gold italic">Tomorrow</span>
          </motion.h1>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" /> {dateLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> The Glass Atrium, Bengaluru
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" /> 9:00 AM — Late
              </span>
            </div>
          </Reveal>

          {/* Countdown */}
          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5">
              {units.map((u) => (
                <div key={u.label} className="glass rounded-2xl px-2 py-5 sm:py-7">
                  <div className="font-serif text-3xl text-gradient-gold sm:text-5xl">
                    {String(u.value).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-faint sm:text-xs">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#tickets"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
              >
                <Ticket className="h-4 w-4" /> Get your pass
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink transition-all hover:border-gold/50 hover:bg-white/5"
              >
                View agenda
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <SectionHeading
              align="left"
              eyebrow="About the summit"
              title="One day to rethink"
              highlight="how we build"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A single, intentional day with the people shaping the next decade
              of digital products. Talks, hands-on labs and conversations that
              actually change how you work — wrapped in an experience designed
              down to the last pixel.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Limited to 300 seats so every attendee gets real access to
              speakers, mentors and each other.
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "300", v: "Curated seats" },
                { k: "12", v: "Speakers & mentors" },
                { k: "5", v: "Hands-on labs" },
                { k: "1", v: "Unforgettable day" },
              ].map((x) => (
                <div key={x.v} className="glass rounded-2xl p-6 text-center">
                  <div className="font-serif text-4xl text-gradient-gold">{x.k}</div>
                  <p className="mt-2 text-sm text-muted">{x.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Agenda" title="A day, perfectly" highlight="paced" />
        <Stagger className="relative mt-14">
          <div className="absolute left-[6.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block" />
          {agenda.map((a) => (
            <StaggerItem key={a.time}>
              <div className="group flex gap-5 pb-8 sm:gap-8">
                <div className="w-20 shrink-0 pt-1 text-right font-serif text-lg text-gold">
                  {a.time}
                </div>
                <div className="relative hidden sm:block">
                  <span className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-bg transition-colors group-hover:bg-gold" />
                </div>
                <div className="flex-1 rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-surface">
                  <h3 className="text-lg text-ink">{a.title}</h3>
                  <p className="mt-1 text-muted">{a.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SPEAKERS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Speakers"
          title="Learn from the"
          highlight="best in craft"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((sp) => (
            <StaggerItem key={sp.name}>
              <div className="group rounded-3xl border border-line bg-surface/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-bright/20 to-gold/10 font-serif text-2xl text-gold ring-1 ring-gold/20 transition-transform duration-300 group-hover:scale-105">
                  {sp.initials}
                </div>
                <h3 className="mt-5 text-lg text-ink">{sp.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
                  <Mic2 className="h-3.5 w-3.5 text-gold" /> {sp.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TICKETS CTA */}
      <section id="tickets" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-[80px]" />
            <Eyebrow>Limited seats</Eyebrow>
            <h2 className="relative mt-5 text-balance text-4xl text-ink sm:text-5xl">
              Secure your <span className="text-gradient-gold italic">pass</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Early-bird passes include the after-party and a year of community
              access. Once they&apos;re gone, they&apos;re gone.
            </p>
            <Link
              href="/community"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_36px_rgba(232,180,60,0.45)]"
            >
              Reserve my seat
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
