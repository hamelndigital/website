<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Initial corporate website for **hamelndigital** — intentionally minimal content.
Do not add marketing copy, products, or decorative elements without an explicit
request; the design brief is "quality through restraint".

- Package manager: **Bun** (`bun install`, `bun dev`, `bun run build`, `bun run lint`)
- UI: **HeroUI v3** (`@heroui/react` + `@heroui/styles` — no provider; BEM
  classes like `button button--primary` are usable on plain elements)
- Editable site values live in `lib/site.ts` (`url` and `contactEmail` are
  placeholders that must be set before publishing)
- Legal page placeholders render as `[TODO: …]` chips — fill before publishing
- `cacheComponents` is enabled: `new Date()` etc. are not allowed in
  prerendered components — see `CopyrightYear` in `components/site-footer.tsx`
  for the `connection()` + `Suspense` pattern
