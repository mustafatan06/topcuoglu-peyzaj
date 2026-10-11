import { Link, useParams } from "react-router-dom";
import { Check, Phone, ArrowLeft } from "lucide-react";
import { Image } from "@/components/ui/image";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";
import usePageTitle from "@/hooks/usePageTitle";

export default function HizmetDetay() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  usePageTitle(service ? service.title : "Hizmet bulunamadı");

  if (!service) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
        <h1 className="font-heading text-3xl tracking-tight">Bu hizmeti bulamadık</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Aradığınız hizmet sayfası taşınmış olabilir.
        </p>
        <Link
          to="/hizmetler"
          className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.2em] text-primary"
        >
          Tüm hizmetlere dön
        </Link>
      </section>
    );
  }

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Hizmetler
          </Link>
          <p className="eyebrow mt-10">{service.kicker}</p>
          <h1 className="mt-5 max-w-3xl font-heading text-3xl leading-[1.1] tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 font-body text-sm uppercase tracking-[0.24em] text-primary">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-heading text-2xl leading-relaxed tracking-tight text-foreground">
              {service.headline}
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{service.intro}</p>
            <div className="mt-10 border-t border-border pt-8">
              <p className="eyebrow">Müşteri Avantajı</p>
              <p className="mt-4 font-heading text-lg leading-relaxed tracking-tight">
                “{service.advantage}”
              </p>
            </div>
            <a
              href={site.phoneHref}
              className="mt-10 inline-flex items-center gap-3 border border-border px-6 py-4 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> {site.phone}
            </a>
          </div>

          <div>
            <SectionHeading eyebrow="Kapsam" title={service.detailsTitle} />
            <ul className="mt-10 space-y-6">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-4 border-b border-border pb-6 last:border-0">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>

            {service.extra && (
              <div className="mt-12 border border-border bg-card p-8">
                <p className="eyebrow">{service.extra.title}</p>
                <ul className="mt-6 space-y-4">
                  {service.extra.items.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Saha Fotoğrafları" title="Bu hizmetten kareler" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[4/3] overflow-hidden border border-border"
              >
                <Image
                  src={src}
                  alt={`${service.title} çalışması`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Diğer Hizmetler" title="Bunlar da ilginizi çekebilir" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/hizmetler/${item.slug}`}
                className="group border-t border-border pt-6"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
                  {item.kicker}
                </p>
                <p className="mt-3 font-heading text-xl tracking-tight transition-colors group-hover:text-primary">
                  {item.card}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Bu hizmet için ücretsiz keşif planlayalım" />
    </>
  );
}