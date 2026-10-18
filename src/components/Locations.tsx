import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { LOCATIONS } from "@/lib/data";

const CITY_ART = [
  "from-[#2a1f0e] via-[#4a3517] to-[#0a0907]",
  "from-[#1a1f2e] via-[#3d3420] to-[#0a0907]",
  "from-[#14231a] via-[#3a3320] to-[#0a0907]",
  "from-[#241a2e] via-[#443014] to-[#0a0907]",
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Addresses"
          title={
            <>
              Positioned where{" "}
              <em className="text-gold-gradient italic">power works.</em>
            </>
          }
          description="Landmark addresses in the business districts that matter — each venue minutes from the airports, hotels and boardrooms your guests already know."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {LOCATIONS.map((location, index) => (
            <Reveal key={location.city} delay={index * 0.1} y={24}>
              <article
                className={`group flex h-full flex-col overflow-hidden border transition-colors duration-500 ${
                  location.status === "soon"
                    ? "border-dashed border-line"
                    : "card-frame"
                }`}
              >
                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${
                    CITY_ART[index % CITY_ART.length]
                  }`}
                >
                  <div
                    className="grid-lines absolute inset-0 opacity-70"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
                    aria-hidden
                  />
                  <span className="absolute top-4 left-4 border border-gold-500/40 bg-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur-sm">
                    {location.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 font-serif text-3xl text-ivory">
                    {location.city}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-serif text-xl text-gold-200">
                      {location.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs tracking-wide text-muted">
                      <MapPin className="h-3 w-3 text-gold-500" />
                      {location.address}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {location.capacities.map((capacity) => (
                      <li
                        key={capacity}
                        className="border border-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-sand"
                      >
                        {capacity}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reserve"
                    className="mt-auto inline-flex items-center gap-2 pt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-400 transition-colors hover:text-gold-200"
                  >
                    {location.status === "soon"
                      ? "Join the waitlist"
                      : "Request this venue"}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
