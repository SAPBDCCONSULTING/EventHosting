import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment}`}>
      <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-400">
        <span className="h-px w-8 bg-gold-500/60" aria-hidden />
        {eyebrow}
        {align === "center" && (
          <span className="h-px w-8 bg-gold-500/60" aria-hidden />
        )}
      </span>
      <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-sand">
          {description}
        </p>
      )}
    </Reveal>
  );
}
