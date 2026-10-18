import { Diamond } from "lucide-react";
import { MARQUEE_ITEMS } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-line bg-coal py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="flex items-center gap-10"
            aria-hidden={index >= MARQUEE_ITEMS.length}
          >
            <span className="font-serif text-xl italic text-sand">
              {label}
            </span>
            <Diamond className="h-3 w-3 fill-gold-500/40 text-gold-500/70" />
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent"
        aria-hidden
      />
    </div>
  );
}
