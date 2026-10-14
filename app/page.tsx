import { CompanySection } from "@/components/company-section";
import { ContactSection } from "@/components/contact-section";
import { Container } from "@/components/container";
import { DarkBand } from "@/components/dark-band";
import { SoftwareSection } from "@/components/software-section";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero stays pinned while the dark band slides over it — the whole
          viewport turns dark on scroll. The wrapper bounds the sticky range
          to hero + band so the hero unpins before the contact section. */}
      <div>
        <div className="sticky top-0 flex min-h-svh flex-col">
          <Container className="flex flex-1 w-full flex-col items-center justify-center py-24 text-center">
            <h1 className="text-[clamp(2.25rem,12vw,8.5rem)] leading-none font-semibold tracking-[-0.045em] text-foreground">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-xl font-normal tracking-tight text-muted sm:mt-8 sm:text-2xl md:text-3xl">
              {siteConfig.tagline}
            </p>
            <div className="mt-12 flex flex-col items-center gap-5 sm:mt-14 sm:flex-row sm:gap-8">
              <a href="#contact" className="button button--primary button--lg">
                Contact us
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="rounded-md font-mono text-sm text-muted outline-none transition-colors hover:text-foreground focus-visible:focus-ring"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </Container>
        </div>
        <DarkBand>
          <SoftwareSection />
          <CompanySection />
        </DarkBand>
      </div>
      <ContactSection />
    </main>
  );
}
