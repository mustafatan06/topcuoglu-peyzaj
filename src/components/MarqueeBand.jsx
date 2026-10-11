import { site } from "@/data/site";

export default function MarqueeBand() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <div className="overflow-hidden border-b border-border bg-secondary py-2.5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}