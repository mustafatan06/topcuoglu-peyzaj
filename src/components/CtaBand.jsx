import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function CtaBand({ title = "Yeni Projenizi Birlikte Yapalım" }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:px-10 lg:py-28">
        <div>
          <p className="eyebrow">Ücretsiz Keşif</p>
          <h2 className="mt-5 font-heading text-3xl tracking-tight sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Evde ücretsiz konsültasyon için formu doldurun veya bizi arayın. {site.serviceArea}.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-3 border border-border px-6 py-4 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phone}
          </a>
          <Link
            to="/iletisim"
            className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Formu Doldur
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}