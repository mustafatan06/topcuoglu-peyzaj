import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-border text-primary">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-lg tracking-tight">Topçuoğlu Peyzaj</span>
            <span className="mt-1.5 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Ankara · Peyzaj & Bakım
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 border border-border px-4 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary lg:flex"
        >
          <Phone className="h-4 w-4 text-primary" />
          {site.phone}
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-foreground lg:hidden"
          aria-label="Menüyü aç"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-heading text-lg">Topçuoğlu Peyzaj</span>
            <button onClick={() => setOpen(false)} aria-label="Menüyü kapat">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-5 px-6 pt-10">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="font-heading text-3xl tracking-tight">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-2 border-t border-border px-6 py-8 text-sm text-muted-foreground">
            <a href={site.phoneHref} className="block text-foreground">
              {site.phone}
            </a>
            <a href={site.phoneAltHref} className="block text-foreground">
              {site.phoneAlt}
            </a>
            <p>
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}