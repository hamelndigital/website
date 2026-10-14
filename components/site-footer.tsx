import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site";

/**
 * Rendered at request time so the copyright year is always current.
 * `connection()` keeps `new Date()` out of the prerendered shell, which
 * Cache Components requires.
 */
async function CopyrightYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-separator">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="-m-2 inline-flex w-fit items-center rounded-lg p-2 outline-none transition-opacity hover:opacity-70 focus-visible:focus-ring"
          >
            <SiteLogo markClassName="h-6" textClassName="text-[15px]" />
          </Link>
          {siteConfig.footerNav.length > 0 && (
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-16 gap-y-10"
          >
            {siteConfig.footerNav.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-medium text-foreground">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-md text-sm text-muted outline-none transition-colors hover:text-foreground focus-visible:focus-ring"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          )}
        </div>
        <div className="mt-12 border-t border-separator pt-6">
          <p className="text-sm text-muted">
            © <Suspense fallback={null}><CopyrightYear /></Suspense>{" "}
            {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
