import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function ServiceCard({ service, className, tall = false }) {
  return (
    <Link
      to={`/hizmetler/${service.slug}`}
      className={cn(
        "group relative block overflow-hidden border border-border bg-card",
        className
      )}
    >
      <div className={cn("relative w-full", tall ? "aspect-[4/5]" : "aspect-[4/3]")}>
        <Image
          src={service.cardImage}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary">{service.kicker}</p>
          <h3 className="mt-2 font-heading text-xl tracking-tight text-foreground">
            {service.card}
          </h3>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}