import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { expertiseAreas } from "@/data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="What I bring to a product team"
          description="Capability over checklist — the technologies below are how I execute, not the point."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 0.08}>
                <GlowCard className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated text-accent-blue">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {area.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.capabilities.map((cap) => (
                      <Badge key={cap}>{cap}</Badge>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
