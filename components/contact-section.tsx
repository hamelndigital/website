import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

/**
 * Light contact section between the dark content band and the footer —
 * the band's jagged bottom edge tears into this background.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24"
    >
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-24">
        <div>
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Or write to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="link rounded-md outline-none focus-visible:focus-ring"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            directly.
          </p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
