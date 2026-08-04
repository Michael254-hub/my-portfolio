import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold text-fg sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-fg-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
