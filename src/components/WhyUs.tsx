import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { DIFFERENTIATORS } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="noise relative overflow-hidden bg-coal py-28">
      <div
        className="absolute top-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-gold-500/[0.08] blur-[140px]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-400">
              <span className="h-px w-8 bg-gold-500/60" aria-hidden />
              Why Meridian
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl">
              Business happens{" "}
              <em className="text-gold-gradient italic">differently here.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand">
              A venue should never be the variable you worry about. We built
              The Meridian to be the constant — so the only thing anyone
              remembers is the conversation.
            </p>
            <a
              href="#reserve"
              className="group mt-9 inline-flex items-center gap-2 border border-gold-500/50 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-300 transition-all hover:bg-gold-500 hover:text-ink"
            >
              Plan your event
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div>
          {DIFFERENTIATORS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} y={20}>
              <div className="group grid gap-3 border-t border-line py-8 transition-colors last:border-b sm:grid-cols-[72px_1fr] sm:gap-6">
                <span className="font-serif text-2xl italic text-gold-600 transition-colors duration-500 group-hover:text-gold-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ivory transition-colors duration-500 group-hover:text-gold-200">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-sand">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
