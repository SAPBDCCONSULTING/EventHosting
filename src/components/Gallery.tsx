
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GALLERY_SPACES } from "@/lib/data";

const GALLERY_IMAGES = [
  "/images/gallery/grand-salon.jpg",
  "/images/gallery/boardroom.jpg",
  "/images/gallery/champagne-bar.jpg",
  "/images/gallery/terrace.jpg",
  "/images/gallery/private-dining.jpg",
  "/images/gallery/library-lounge.jpg",
];

const TILE_SPANS = [
  "sm:col-span-2 sm:row-span-2 min-h-72 sm:min-h-96",
  "min-h-56",
  "min-h-56",
  "min-h-56",
  "min-h-56",
  "sm:col-span-2 min-h-56",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Spaces"
          title={
            <>
              Step inside{" "}
              <em className="text-gold-gradient italic">
                The Meridian Estate.
              </em>
            </>
          }
          description="Discover elegant spaces for corporate gatherings, private celebrations, and memorable evenings. Contact us to arrange a private viewing."
        />

        <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_SPACES.map((space, index) => (
            <Reveal
              key={space.title}
              delay={index * 0.07}
              y={22}
              className={TILE_SPANS[index % TILE_SPANS.length]}
            >
              <figure className="group relative h-full w-full overflow-hidden border border-line bg-coal">
                <img
                  src={GALLERY_IMAGES[index]}
                  alt={`${space.title} — ${space.subtitle}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-0 border border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/40"
                  aria-hidden="true"
                />

                <figcaption className="absolute bottom-0 left-0 p-5">
                  <p className="font-serif text-xl text-ivory transition-colors group-hover:text-gold-200">
                    {space.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400/80">
                    {space.subtitle}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
