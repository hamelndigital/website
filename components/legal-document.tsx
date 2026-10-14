import type { ReactNode } from "react";
import { Container } from "@/components/container";

/**
 * Shared layout for legal documents (Impressum, Datenschutzerklärung).
 * Constrained measure, generous vertical rhythm via .legal-prose in
 * globals.css.
 */
export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1">
      <Container className="py-16 sm:py-24">
        {/* Legal documents are written in German; lang + hyphens let long
            compounds (e.g. "Datenschutzerklärung") break cleanly on mobile. */}
        <div lang="de" className="max-w-2xl hyphens-auto">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <div className="typography-prose legal-prose mt-10 sm:mt-12">
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}

/**
 * Marks legally required information that still has to be supplied before
 * publication. Deliberately styled as an editable field so missing values
 * are obvious in review.
 */
export function PendingValue({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-separator bg-surface-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-muted">
      [TODO: {children}]
    </code>
  );
}
