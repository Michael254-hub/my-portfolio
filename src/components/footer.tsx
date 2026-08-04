import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-fg-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Michael W. Simiyu. All rights reserved.</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
