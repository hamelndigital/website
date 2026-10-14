import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

/**
 * Software index — an editorial numbered list rather than a card grid.
 * Renders inside the shared DarkBand.
 */
export function SoftwareSection() {
  return (
    <section id="software" aria-labelledby="software-heading">
      <Container className="dark-reveal-content flex min-h-[70svh] flex-col justify-center pt-24 pb-20 sm:pt-32">
        <h2
          id="software-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Software
        </h2>
        <ol className="mt-12">
          {siteConfig.software.map((item, i) => (
            <li key={item.name}>
              <Link
                href={item.href ?? "#software"}
                className="group -mx-4 grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-5 rounded-xl border-t border-separator px-4 py-6 outline-none transition-colors hover:bg-surface focus-visible:focus-ring sm:grid-cols-[3.5rem_1fr_auto] sm:py-8 first:border-t-0"
              >
                <span className="pt-1 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.name}
                  </span>
                  {item.description ? (
                    <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                      {item.description}
                    </span>
                  ) : null}
                </span>
                <span
                  aria-hidden="true"
                  className="self-center text-xl text-muted transition-all group-hover:translate-x-1 group-hover:text-accent motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
