import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="noise relative overflow-hidden border-y border-line bg-coal py-32">
      <div
        className="absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.12] blur-[150px] animate-pulse-slow"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[22vw] leading-none whitespace-nowrap text-gold-500/[0.04] italic select-none"
        aria-hidden
      >
        Meridian
      </span>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-400">
            The room is waiting
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Your next milestone deserves{" "}
            <em className="text-gold-gradient italic">a better room.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sand">
            Tell us the date, the city and the occasion — we&apos;ll compose
            everything else. Speak with an event director today at{" "}
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-gold-300 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-200"
            >
              {SITE.phone}
            </a>
            .
          </p>
          <div className="mt-10">
            <a
              href="#reserve"
              className="group inline-flex items-center gap-2 bg-gold-500 px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-300"
            >
              Book your event space
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
