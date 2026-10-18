"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Eye,
  Loader2,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/data";

const inputClass =
  "w-full border border-line bg-coal px-4 py-3 text-sm text-ivory placeholder:text-muted outline-none transition-colors focus:border-gold-500/70";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-sand";

const ASSURANCES = [
  { icon: Clock, text: "Response from an event director within 4 business hours" },
  { icon: Eye, text: "Private venue viewing arranged around your calendar" },
  { icon: ShieldCheck, text: "NDA-signed briefing available before any details are shared" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      experienceType: formData.get("type"),
      guests: formData.get("guests"),
      date: formData.get("date"),
      notes: formData.get("notes"),
      company: formData.get("company"), // honeypot — stays empty for humans
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setReference(result.reference ?? null);
      setStatus("success");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <section id="reserve" className="noise relative overflow-hidden py-28">
      <div
        className="absolute top-1/3 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-gold-600/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <Reveal>
          <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-400">
            <span className="h-px w-8 bg-gold-500/60" aria-hidden />
            Book your event space
          </span>
          <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl">
            Reserve the room.
            <br />
            <em className="text-gold-gradient italic">
              We&apos;ll handle the rest.
            </em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-sand">
            Tell us about your gathering and an event director will call you
            back with availability, a floor plan and a tailored proposal.
          </p>

          <ul className="mt-10 space-y-5">
            {ASSURANCES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="pt-1.5 text-sm leading-relaxed text-sand">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:gap-10">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-ivory transition-colors hover:text-gold-300"
            >
              <Phone className="h-4 w-4 text-gold-500" /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-sm text-ivory transition-colors hover:text-gold-300"
            >
              <Mail className="h-4 w-4 text-gold-500" /> {SITE.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card-frame relative p-8 sm:p-10">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[480px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-gold-400" />
                <h3 className="mt-6 font-serif text-3xl text-ivory">
                  Request received.
                </h3>
                {reference && (
                  <p className="mt-4 border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-gold-300">
                    REF · {reference}
                  </p>
                )}
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand">
                  An event director will reach out within 4 business hours to
                  confirm availability and arrange your private viewing. Quote
                  your reference number when we call.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 border border-line px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-sand transition-colors hover:border-gold-500/60 hover:text-gold-300"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                {/* Honeypot — hidden from humans, catnip for bots */}
                <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="name" className={labelClass}>Full name *</label>
                  <input id="name" name="name" required placeholder="Aarav Sharma" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Work email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="+91 98XXX XXXXX" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>Preferred city *</label>
                  <select id="city" name="city" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a city</option>
                    {SITE.cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="type" className={labelClass}>Experience type *</label>
                  <select id="type" name="type" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select an experience</option>
                    <option>CXO Summit / Roundtable</option>
                    <option>Global Delegation</option>
                    <option>Brand / Product Launch</option>
                    <option>Board / Investor Meeting</option>
                    <option>Gala Dinner / Celebration</option>
                    <option>Executive Offsite / Workshop</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>Expected guests *</label>
                  <select id="guests" name="guests" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select guest count</option>
                    <option>Up to 20</option>
                    <option>20 – 50</option>
                    <option>50 – 120</option>
                    <option>120 – 300</option>
                    <option>300+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="date" className={labelClass}>Preferred date *</label>
                  <input id="date" name="date" type="date" required className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="notes" className={labelClass}>Anything we should know</label>
                  <textarea id="notes" name="notes" rows={3} placeholder="Agenda, protocol needs, catering preferences…" className={`${inputClass} resize-none`} />
                </div>
                {status === "error" && errorMessage && (
                  <p
                    role="alert"
                    className="border border-red-900/60 bg-red-950/40 px-4 py-3 text-sm leading-relaxed text-red-300 sm:col-span-2"
                  >
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 bg-gold-500 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="h-4 w-4" />
                      Submit request
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] tracking-wide text-muted sm:col-span-2">
                  Your details stay confidential. No spam, no list-selling — ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

