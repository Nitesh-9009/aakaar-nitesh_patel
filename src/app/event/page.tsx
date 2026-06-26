"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Ticket, Mic2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SectionHeading, Eyebrow } from "@/components/Section";
import Image from "next/image";
import { img, IMAGES } from "@/lib/images";

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
  { time: "09:00", title: "Inauguration & welcome", desc: "Lighting of the lamp and keynote to open the festival." },
  { time: "10:30", title: "Hands-on workshops", desc: "Industry software, simulation and design, led by experts." },
  { time: "13:00", title: "Aakaar Lecture Series", desc: "Globally renowned voices in civil engineering take the stage." },
  { time: "15:00", title: "Panel Discussion", desc: "A flagship round-table with leaders across the industry." },
  { time: "17:00", title: "Civil Expo & CENEX", desc: "Exhibitions, products and national-level innovation on display." },
  { time: "19:00", title: "Prize ceremony & culturals", desc: "Celebrating the winners, followed by a night of music." },
];

const speakers = [
  { name: "Dr. Arjun Mehta", role: "Structural Engineer", initials: "AM" },
  { name: "Ritu Sharma", role: "Urban Planner", initials: "RS" },
  { name: "Vikram Iyer", role: "Geotechnical Expert", initials: "VI" },
  { name: "Neha Kulkarni", role: "Construction Tech Lead", initials: "NK" },
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
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-accent2/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal direction="none">
            <Eyebrow>16th Edition · IIT Bombay</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-7 text-balance text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            Aakaar <span className="text-gradient-accent">2026</span>
          </motion.h1>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" /> {dateLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> IIT Bombay, Powai, Mumbai
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" /> 9:00 AM — Late
              </span>
            </div>
          </Reveal>

          {/* Countdown */}
          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5">
              {units.map((u) => (
                <div key={u.label} className="glass rounded-2xl px-2 py-5 sm:py-7">
                  <div className="font-serif text-3xl text-gradient-accent sm:text-5xl">
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
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
              >
                <Ticket className="h-4 w-4" /> Register now
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium text-ink transition-all hover:border-accent/50 hover:bg-ink/5"
              >
                View schedule
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VENUE BANNER */}
      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
            <Image
              src={img(IMAGES.arch2)}
              alt="IIT Bombay campus"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
              <p className="font-serif text-2xl text-white sm:text-3xl">IIT Bombay, Powai</p>
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">
                3 days · 30+ events
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <SectionHeading
              align="left"
              eyebrow="About the festival"
              title="Three days that"
              highlight="shape the field"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Aakaar brings together the brightest civil engineering minds from
              the best institutions of the nation. Workshops, lectures, expos
              and competitions — a stellar platform to showcase skills and learn
              from the very best.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Hosted on the IIT Bombay campus, every edition adds more creative,
              mind-tinkering events that make learning genuinely fun.
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "30+", v: "Events & competitions" },
                { k: "50+", v: "Colleges nationwide" },
                { k: "3", v: "Days of action" },
                { k: "5000+", v: "Participants" },
              ].map((x) => (
                <div key={x.v} className="glass rounded-2xl p-6 text-center">
                  <div className="font-serif text-4xl text-gradient-accent">{x.k}</div>
                  <p className="mt-2 text-sm text-muted">{x.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Schedule" title="A day, perfectly" highlight="paced" />
        <Stagger className="relative mt-14">
          <div className="absolute left-[6.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block" />
          {agenda.map((a) => (
            <StaggerItem key={a.time}>
              <div className="group flex gap-5 pb-8 sm:gap-8">
                <div className="w-20 shrink-0 pt-1 text-right font-serif text-lg text-accent">
                  {a.time}
                </div>
                <div className="relative hidden sm:block">
                  <span className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg transition-colors group-hover:bg-accent" />
                </div>
                <div className="flex-1 rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-surface">
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
          eyebrow="Speakers & guests"
          title="Learn from the"
          highlight="best in the field"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((sp) => (
            <StaggerItem key={sp.name}>
              <div className="group rounded-3xl border border-line bg-surface/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent2/20 to-accent/10 font-serif text-2xl text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-105">
                  {sp.initials}
                </div>
                <h3 className="mt-5 text-lg text-ink">{sp.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
                  <Mic2 className="h-3.5 w-3.5 text-accent" /> {sp.role}
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
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />
            <Eyebrow>Open to all colleges</Eyebrow>
            <h2 className="relative mt-5 text-balance text-4xl text-ink sm:text-5xl">
              Register for{" "}
              <span className="text-gradient-accent">Aakaar</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">
              Bring your team, compete in national events and be part of Asia&apos;s
              largest civil engineering festival. Registration is now open.
            </p>
            <Link
              href="/community"
              className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/20"
            >
              Register your team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
