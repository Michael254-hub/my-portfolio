import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-blue), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for select engagements
            </span>

            <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-[3.75rem]">
              Software &amp; AI engineer, building things that work.
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-fg-muted">
              I design and ship production web applications and applied
              machine learning systems — from backend architecture to the
              last pixel of the interface.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                as="a"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View my work
                <ArrowRight size={16} />
              </Button>
              <Button
                as="a"
                variant="secondary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
          >
            <div
              className="absolute inset-0 animate-float rounded-[2.5rem] opacity-70 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 120deg, var(--accent-blue), var(--accent-violet), var(--accent-cyan), var(--accent-blue))",
              }}
            />
            <div className="relative flex h-full w-full items-center justify-center rounded-[2.5rem] border border-border-strong bg-surface/80 backdrop-blur-xl">
              <span className="font-display text-6xl font-semibold text-fg">
                MS
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
