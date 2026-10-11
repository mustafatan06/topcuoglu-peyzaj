import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { galleryImages } from "@/data/services";
import usePageTitle from "@/hooks/usePageTitle";

export default function Galeri() {
  usePageTitle("Galeri");

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Galeri"
          title="Tamamladığımız işlerden bir seçki"
          description="Rulo çim serme, sert zemin ve yürüyüş yolu uygulamaları, form budama, bariyer ilaçlama ve toprak rehabilitasyonu çalışmalarımızdan kareler."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <figure
              key={item.src}
              className="group relative aspect-[4/5] overflow-hidden border border-border bg-card"
            >
              <Image
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
                  {item.service}
                </p>
                <p className="mt-2 font-heading text-lg tracking-tight">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand title="Sıradaki proje sizin bahçeniz olsun" />
    </>
  );
}