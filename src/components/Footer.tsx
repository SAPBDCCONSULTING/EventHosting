import { Mail, MapPin, Phone } from "lucide-react";
import { EXPERIENCES, LOCATIONS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 rotate-45 items-center justify-center border border-gold-500/60">
              <span className="-rotate-45 font-serif text-lg text-gold-400">
                M
              </span>
            </span>
            <span className="font-serif text-xl tracking-wide text-ivory">
              {SITE.name}
            </span>
          </a>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand">
            An invitation-only collection of venues for the gatherings that
            shape what happens next.
          </p>
          <p className="mt-6 font-serif text-lg italic text-gold-400/80">
  {SITE.tagline}
</p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Contact
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-sand">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {SITE.address}
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Locations
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-sand">
            {LOCATIONS.map((location) => (
              <li key={location.city}>
                <a
                  href="#locations"
                  className="transition-colors hover:text-gold-300"
                >
                  {location.city}
                  {location.status === "soon" && (
                    <span className="ml-2 text-[10px] uppercase tracking-widest text-muted">
                      &rsquo;27
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Experiences
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-sand">
            {EXPERIENCES.map((experience) => (
              <li key={experience.title}>
                <a
                  href="#experiences"
                  className="transition-colors hover:text-gold-300"
                >
                  {experience.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-7 text-[11px] tracking-wide text-muted sm:flex-row lg:px-10">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p>Private viewings · Seven days a week · By appointment</p>
        </div>
      </div>
    </footer>
  );
}
