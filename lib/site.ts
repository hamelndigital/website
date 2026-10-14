/**
 * Central site configuration.
 *
 * Values marked TODO must be supplied before the site is published.
 */

export type SiteLink = {
  href: string;
  label: string;
};

export type SoftwareItem = {
  name: string;
  description?: string;
  href?: string;
};

export type TimelineEvent = {
  date: string;
  title: string;
  description?: string;
  href?: string;
};

export type FooterNavGroup = {
  title: string;
  links: SiteLink[];
};

export const siteConfig = {
  name: "hamelndigital",
  tagline: "Tools for the modern internet.",

  /**
   * TODO before publishing: production origin, e.g. "https://hamelndigital.com".
   * Used for metadataBase, Open Graph URLs, sitemap.xml and robots.txt.
   * Left empty until the production domain is known.
   */
  url: "https://hamelndigital.de",

  /**
   * TODO before publishing: public contact email address.
   * The ".example" TLD is a reserved placeholder (RFC 2606) — replace it with
   * the real address. Used by the contact actions and the legal pages.
   */
  contactEmail: "hello@hamelndigital.de",

  /**
   * Primary navigation. The Software and Company sections are not public yet —
   * these links reserve their future routes.
   */
  nav: [
    { href: "/#software", label: "Software" },
    { href: "/#company", label: "Company" },
  ] satisfies SiteLink[],

  /** Software list rendered by the homepage Software section. Empty for now. */
  software: [
    {
      name: "hd Projects",
      description: "Powerful and highly-configurable project management environment for teams",
      href: "/software/projects"
    },
    {
      name: "hd Deploy",
      description: "Git-based Docker deployment service with full support for Docker and the Cloudflare Zone API",
      href: "/software/deploy"
    },
    {
      name: "hd Monitor",
      description: "OpenTelemetry-compatible monitoring service",
      href: "/software/monitor"
    }
  ] as SoftwareItem[],

  /** Company section — chronological timeline events. Empty for now. */
  company: {
    timeline: [
      {
        date: "2025",
        title: "Just getting started",
        description: "We've gone from minding our own business to not. Please be patient while we get things setup"
      }
    ] as TimelineEvent[],
  },

  /**
   * TODO before publishing: customer portal URL (e.g. https://portal.<domain>).
   * Reserved route until the portal exists.
   */
  portalUrl: "/login",

  /**
   * Footer navigation. Add groups and links here as the site grows —
   * the footer renders whatever is configured.
   */
  footerNav: [] as FooterNavGroup[],
} as const;
