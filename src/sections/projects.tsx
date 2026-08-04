import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/data/projects";

const accentGradient: Record<Project["accent"], string> = {
  blue: "from-accent-blue/25 via-accent-blue/5 to-transparent",
  cyan: "from-accent-cyan/25 via-accent-cyan/5 to-transparent",
  violet: "from-accent-violet/25 via-accent-violet/5 to-transparent",
};

const accentText: Record<Project["accent"], string> = {
  blue: "text-accent-blue",
  cyan: "text-accent-cyan",
  violet: "text-accent-violet",
};

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects"
          description="Real, shipped products — each built end-to-end, from architecture to the interface clients actually use."
        />

        <div className="mt-14 space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-8 rounded-2xl border border-border-subtle bg-surface/50 p-8 transition-all duration-300 hover:border-border-strong hover:bg-surface-hover sm:p-10 lg:grid-cols-[0.4fr_1fr]"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br ${accentGradient[project.accent]} border border-border-subtle`}
                >
                  <span className={`font-display text-4xl font-semibold ${accentText[project.accent]}`}>
                    {project.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-fg">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </div>
                  <p className={`mt-1 text-sm font-medium ${accentText[project.accent]}`}>
                    {project.summary}
                  </p>
                  <p className="mt-4 max-w-2xl text-balance leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
