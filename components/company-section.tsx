import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

/**
 * Company section — a vertical timeline driven by
 * `siteConfig.company.timeline`. The rail is a muted base line plus an
 * accent line that fills with scroll (see .company-timeline in globals.css).
 * Renders inside the shared DarkBand.
 */
export function CompanySection() {
  const { timeline } = siteConfig.company;

  return (
    <section id="company" aria-labelledby="company-heading">
      <Container className="dark-reveal-content pt-16 pb-28 sm:pt-20 sm:pb-36">
        <h2
          id="company-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Company
        </h2>
        <ol className="company-timeline mt-12">
          {timeline.map((event) => (
            <li
              key={`${event.date}-${event.title}`}
              className="relative pb-12 pl-10 last:pb-0"
            >
              <span aria-hidden="true" className="timeline-dot" />
              <time className="font-mono text-sm text-muted">{event.date}</time>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {event.title}
              </h3>
              {event.description ? (
                <p className="mt-1.5 max-w-xl leading-relaxed text-muted">
                  {event.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
