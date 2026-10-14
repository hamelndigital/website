# hamelndigital

Initial corporate website for **hamelndigital** — _Tools for the modern internet._

## Stack

- [Next.js](https://nextjs.org) (App Router, Cache Components) + React 19 + TypeScript (strict)
- [HeroUI v3](https://heroui.com) (`@heroui/react` + `@heroui/styles`, no provider needed)
- Tailwind CSS v4 · Bun

## Develop

```bash
bun install
bun dev        # http://localhost:3000

# or in Docker (source mounted, hot reload):
docker-compose -f compose.dev.yaml up   # http://localhost:3000
```

## Deploy

`compose.yaml` builds the production image and attaches it to the external
`eucent-edge` network; Traefik routes `hamelndigital.de` (`websecure`,
`letsencrypt` resolver). No ports are published — the app is only reachable
through Traefik.

```bash
docker-compose up -d --build
```

## Verify

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

## Configuration

Everything editable lives in `lib/site.ts`:

| Key | Purpose | Status |
| --- | --- | --- |
| `url` | Production origin — used for `metadataBase`, Open Graph, `sitemap.xml`, `robots.txt` | **TODO before publishing** (currently empty) |
| `contactEmail` | Public contact address — used by all contact actions and legal pages | **TODO before publishing** (placeholder `…@hamelndigital.example`, RFC 2606 reserved TLD) |
| `nav` | Header nav links (`/software`, `/company` reserve routes that do not exist yet) | configured |
| `portalUrl` | Customer portal URL for the header "Log in" action — currently the reserved route `/login` | **TODO before publishing** |
| `footerNav` | Footer link groups — extend as the site grows | configured |

## Before publishing

- [ ] Set `url` and `contactEmail` in `lib/site.ts`.
- [ ] Fill all `[TODO: …]` placeholders in `app/imprint/page.tsx` (legal entity, address, representative, register, VAT ID, MStV responsibility) and have them legally reviewed.
- [ ] Complete the marked sections in `app/privacy/page.tsx` (hosting provider, log retention, review date) and verify the statements match the actual deployment.

The legal pages are **not publication-ready** until these details are supplied and reviewed.
