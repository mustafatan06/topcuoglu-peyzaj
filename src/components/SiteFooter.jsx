import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { nav, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-heading text-2xl tracking-tight">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Peyzaj tasarımından periyodik bahçe bakımına, bitki sağlığından teknik tesisat
            çözümlerine kadar geniş bir yelpazede hizmet sunuyoruz. Her bahçenin bir ruhu olduğuna
            inanıyoruz: siz hayal edin, biz doğanın imkanlarıyla o ruhu canlandıralım.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @topcuoglu.peyzaj
          </a>
        </div>

        <div>
          <p className="eyebrow">Hizmetler</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/hizmetler/${s.slug}`} className="transition-colors hover:text-foreground">
                  {s.card}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/hizmetler" className="text-primary">
                Tüm hizmetler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">İletişim</p>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <a href={site.phoneHref} className="block text-foreground">
                  {site.phone}
                </a>
                <a href={site.phoneAltHref} className="block">
                  {site.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {nav.slice(1, 5).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link to="/gizlilik-politikasi" className="transition-colors hover:text-foreground">
              Gizlilik Politikası
            </Link>
            <Link to="/cerez-politikasi" className="transition-colors hover:text-foreground">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}