import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { EXPERIENCES } from "@/lib/data";

export default function Experiences() {
  return (
    <section id="experiences" className="relative bg-coal py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Host"
          title={
            <>
              Experiences engineered{" "}
              <em className="text-gold-gradient italic">for consequence.</em>
            </>
          }
          description="Six signature formats, each with its own choreography, service style and spatial design. Every one is fully bespoke beneath the surface."
        />

        <div className="mt-16 border-t border-line">
          {EXPERIENCES.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.06} y={20}>
              <a
                href="#reserve"
                className="group relative grid gap-4 overflow-hidden border-b border-line py-9 transition-colors duration-500 lg:grid-cols-[64px_1.1fr_1fr_48px] lg:items-center lg:gap-8"
              >
                <div
                  className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-gold-500/[0.07] via-gold-500/[0.03] to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  aria-hidden
                />
                <span className="relative font-serif text-lg italic text-gold-600 transition-colors duration-500 group-hover:text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-serif text-3xl text-ivory transition-all duration-500 group-hover:translate-x-2 group-hover:text-gold-200 sm:text-4xl">
                  {experience.title}
                </h3>
                <div className="relative">
                  <p className="text-sm leading-relaxed text-sand">
                    {experience.description}
                  </p>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {experience.tags.join("  ·  ")}
                  </p>
                </div>
                <span className="relative hidden h-12 w-12 items-center justify-center border border-line text-sand transition-all duration-500 group-hover:rotate-45 group-hover:border-gold-400 group-hover:text-gold-300 lg:flex">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
