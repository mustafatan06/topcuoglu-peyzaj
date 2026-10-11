import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import usePageTitle from "@/hooks/usePageTitle";

export default function Iletisim() {
  usePageTitle("İletişim ve Ücretsiz Keşif");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeading
        eyebrow="İletişim"
        title="Yeni Projenizi Birlikte Yapalım"
        description="Evde ücretsiz konsültasyon için formu doldurun veya bizi arayın. Talebiniz bize ulaştığında ekibimiz keşif için randevu oluşturur."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-10">
          <div className="border-t border-border pt-8">
            <p className="eyebrow">Telefon</p>
            <div className="mt-5 space-y-2">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 font-heading text-2xl tracking-tight transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5 text-primary" />
                {site.phone}
              </a>
              <a
                href={site.phoneAltHref}
                className="flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                {site.phoneAlt}
              </a>
            </div>
            <p className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Kanalizasyon ve acil müdahale hizmetlerimiz 7/24 aktiftir.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">Adres</p>
            <p className="mt-5 flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{site.serviceArea}.</p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">Sosyal Medya</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-primary" />
              @topcuoglu.peyzaj
            </a>
          </div>
        </div>

        <div className="border border-border bg-card p-8 lg:p-12">
          <p className="eyebrow">Ücretsiz Keşif Formu</p>
          <h2 className="mt-4 font-heading text-2xl tracking-tight">
            Projenizi kısaca anlatın
          </h2>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}