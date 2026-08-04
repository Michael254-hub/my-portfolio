import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-lg font-semibold tracking-tight text-fg"
          >
            Michael W. Simiyu
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  activeId === link.id
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {link.label}
              </button>
            ))}
            <div className="ml-2 h-5 w-px bg-border-subtle" />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-fg-muted hover:bg-surface hover:text-fg"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border-subtle bg-bg md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-left text-base font-medium",
                    activeId === link.id ? "bg-surface text-fg" : "text-fg-muted"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
