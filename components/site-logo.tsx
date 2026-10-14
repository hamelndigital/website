import Image from "next/image";
import { siteConfig } from "@/lib/site";

/**
 * Brand lockup: hexagon mark + typeset wordmark. The wordmark is real text
 * (Geist) so it stays crisp at every size; below ~440px it drops to the
 * mark alone so it never collides with the navigation.
 */
export function SiteLogo({
  markClassName = "h-7",
  textClassName = "hidden min-[440px]:inline text-[17px]",
}: {
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/mark.png"
        alt=""
        width={600}
        height={653}
        priority
        className={`w-auto ${markClassName}`}
      />
      <span
        className={`font-semibold tracking-tight text-foreground ${textClassName}`}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
