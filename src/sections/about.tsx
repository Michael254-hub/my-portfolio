import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "1.5+", label: "Years of experience" },
  { value: "5+", label: "Clients served" },
];

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="About" title="How I think about building software" />

            <div className="mt-8 space-y-5 text-balance text-base leading-relaxed text-fg-muted">
              <p>
                I'm a software and AI engineer who started out curious about
                how websites worked, and stayed for the harder problem: how
                to make software that's both technically sound and genuinely
                useful to the people running it.
              </p>
              <p>
                Most of my work sits at the intersection of full-stack
                engineering and applied machine learning — building the
                backend and interface for a product, then layering in the
                intelligence that makes it actually useful, whether that's
                computer vision, an LLM-backed workflow, or something simpler
                that just needs to be reliable.
              </p>
              <p>
                I care more about a system holding up under real use than
                about how it looks in a demo. That means clear architecture,
                sensible defaults, and interfaces that don't make the person
                using them think harder than they have to.
              </p>
            </div>
          </div>

          <Reveal delay={0.1} className="grid grid-cols-1 gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-subtle bg-surface/60 p-6"
              >
                <div className="font-display text-3xl font-semibold text-fg">{stat.value}</div>
                <div className="mt-1 text-sm text-fg-muted">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
