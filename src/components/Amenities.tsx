import {
  Car,
  Headset,
  Presentation,
  ShieldCheck,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { AMENITIES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  presentation: Presentation,
  car: Car,
  headset: Headset,
  wifi: Wifi,
  utensils: UtensilsCrossed,
  shield: ShieldCheck,
};

export default function Amenities() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Signature Amenities"
          title={
            <>
              Everything handled,{" "}
              <em className="text-gold-gradient italic">down to the detail.</em>
            </>
          }
          description="Every booking carries the full weight of our house — technology, hospitality and logistics included as standard, never as extras."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity, index) => {
            const Icon = ICONS[amenity.icon] ?? Presentation;
            return (
              <Reveal key={amenity.title} delay={index * 0.08} y={20}>
                <div className="group flex h-full flex-col gap-5 bg-coal p-8 transition-colors duration-500 hover:bg-surface">
                  <span className="flex h-12 w-12 rotate-45 items-center justify-center border border-gold-500/40 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-500/10">
                    <Icon className="h-5 w-5 -rotate-45 text-gold-400" />
                  </span>
                  <h3 className="font-serif text-2xl text-ivory">
                    {amenity.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sand">
                    {amenity.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
