"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/lib/data";

const STATS = [
  { value: "480+", label: "Private events hosted" },
  { value: "60+", label: "Global brands served" },
  { value: "04", label: "Cities, two countries" },
  { value: "98%", label: "Guests who return" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="noise relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Cinematic backdrop */}
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold-500/15 blur-[140px] animate-pulse-slow"
        aria-hidden
      />
      <div
        className="absolute bottom-[-20%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-gold-700/20 blur-[130px] animate-pulse-slow [animation-delay:2.5s]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:px-10"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-400"
        >
          <span className="h-px w-10 bg-gold-500/70" aria-hidden />
          Private Corporate Event Venues
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-7 max-w-4xl font-serif text-5xl leading-[1.04] text-ivory sm:text-7xl lg:text-[5.4rem]"
        >
          Where leadership
          <br />
          <em className="text-gold-gradient italic">gathers in private.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-sand"
        >
          {SITE.name} is an invitation-only collection of venues crafted for
          CXO summits, international delegations, brand launches and gala
          evenings — across the world&apos;s most influential business
          addresses.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-2 bg-gold-500 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-300"
          >
            Reserve your date
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center gap-2 border border-line px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold-500/60 hover:text-gold-300"
          >
            Explore experiences
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-muted"
        >
          <MapPin className="h-3.5 w-3.5 text-gold-500" />
          Gurugram · Mumbai · Bengaluru · Dubai &rsquo;27
        </motion.p>

        <motion.dl
          variants={item}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col bg-coal/80 px-6 py-6 backdrop-blur-sm transition-colors hover:bg-surface"
            >
              <dt className="order-2 mt-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </dt>
              <dd className="order-1 font-serif text-4xl text-gold-300">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#reserve"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-gold-300 md:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
