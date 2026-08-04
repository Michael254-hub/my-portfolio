import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contact, socials } from "@/data/site";

const details = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: contact.location },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
            Contact
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-fg sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-fg-muted">
            I'm open to new opportunities and interesting problems. Reach out
            directly — I read everything and reply personally.
          </p>

          <div className="mt-8 flex justify-center">
            <Button as="a" href={`mailto:${contact.email}`} size="lg">
              Say hello
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon size={18} className="text-accent-blue" />
                <div>
                  <div className="text-xs text-fg-faint">{item.label}</div>
                  <div className="mt-0.5 text-sm font-medium text-fg">{item.value}</div>
                </div>
              </>
            );
            const className =
              "flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/50 p-4 transition-colors duration-200 hover:border-border-strong";

            return item.href ? (
              <a key={item.label} href={item.href} className={className}>
                {content}
              </a>
            ) : (
              <div key={item.label} className={className}>
                {content}
              </div>
            );
          })}
        </Reveal>

        <div className="mt-10 flex justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border-subtle px-4 py-2 text-sm text-fg-muted transition-colors duration-200 hover:border-border-strong hover:text-fg"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
