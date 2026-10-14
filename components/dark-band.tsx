import type { ReactNode } from "react";

/**
 * Continuous dark band wrapping the Software and Company sections.
 * HeroUI's scoped `dark` theme flips every design token inside this subtree.
 * The band is positioned so it slides up over the pinned hero on scroll —
 * the whole viewport turns dark — while `.jagged-edge` cuts sawtooth teeth
 * into its bottom edge so it tears into the light contact section.
 */
export function DarkBand({ children }: { children: ReactNode }) {
  return (
    <div className="dark relative">
      <div className="overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.5rem]">
        <div className="jagged-edge bg-background text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
