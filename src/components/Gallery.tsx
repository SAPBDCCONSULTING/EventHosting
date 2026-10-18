import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GALLERY_SPACES } from "@/lib/data";

/* Gradient "art" panels — swap these tiles for real photography in /public later. */
const TILE_ART = [
  "bg-[radial-gradient(120%_120%_at_20%_10%,#5a431f_0%,#241b0d_45%,#0a0907_100%)]",
  "bg-[radial-gradient(130%_130%_at_80%_20%,#3d3524_0%,#1c1811_50%,#0a0907_100%)]",
  "bg-[radial-gradient(120%_140%_at_50%_100%,#6b4f22_0%,#2a2010_45%,#0a0907_100%)]",
  "bg-[radial-gradient(140%_120%_at_10%_90%,#41331c_0%,#1e1710_55%,#0a0907_100%)]",
  "bg-[radial-gradient(120%_120%_at_90%_80%,#54501f_0%,#221d0e_50%,#0a0907_100%)]",
  "bg-[radial-gradient(130%_130%_at_30%_30%,#4a3a2a_0%,#1e1710_55%,#0a0907_100%)]",
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
              <em className="text-gold-gradient italic">The Meridian.</em>
            </>
          }
          description="A glimpse of the rooms where deals close, launches land and milestones are marked. Private viewings available seven days a week."
        />

        <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_SPACES.map((space, index) => (
            <Reveal
              key={space.title}
              delay={index * 0.07}
              y={22}
              className={TILE_SPANS[index % TILE_SPANS.length]}
            >
              <figure
                className={`group relative h-full w-full overflow-hidden border border-line ${
                  TILE_ART[index % TILE_ART.length]
                }`}
              >
                <div
                  className="grid-lines absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-110"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 border border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/40"
                  aria-hidden
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
