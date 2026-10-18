import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative bg-coal py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="In Their Words"
          title={
            <>
              Trusted by the people{" "}
              <em className="text-gold-gradient italic">
                who can&apos;t afford a bad evening.
              </em>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.12} y={26}>
              <blockquote className="card-frame flex h-full flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 fill-gold-500/20 text-gold-500" />
                  <span className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </span>
                </div>
                <p className="flex-1 font-serif text-lg leading-relaxed text-ivory/90 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="border-t border-line pt-5">
                  <p className="text-sm font-semibold tracking-wide text-gold-300">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {testimonial.role}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
