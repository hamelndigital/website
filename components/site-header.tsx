import Link from "next/link";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site";

const navLinkClass =
  "rounded-md text-sm text-muted outline-none transition-colors hover:text-foreground focus-visible:focus-ring";

export function SiteHeader() {
  return (
    <header>
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="-m-2 shrink-0 rounded-lg p-2 outline-none transition-opacity hover:opacity-70 focus-visible:focus-ring"
        >
          <SiteLogo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {siteConfig.nav.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.portalUrl}
            className="button button--secondary button--sm"
          >
            Log in
          </a>
        </nav>
      </Container>
    </header>
  );
}
