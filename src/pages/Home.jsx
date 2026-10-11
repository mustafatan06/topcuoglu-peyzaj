import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Quote } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import { heroSlides, site, whyUs, wideBannerImage } from "@/data/site";
import { galleryImages, services } from "@/data/services";
import { posts } from "@/data/posts";
import usePageTitle from "@/hooks/usePageTitle";
import { cn } from "@/lib/utils";

export default function Home() {
  usePageTitle("Ankara Peyzaj Tasarımı ve Bahçe Bakımı");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.caption}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out",
              index === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
          <div className="relative max-w-3xl border-l border-primary/50 pl-6 lg:pl-10">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="mt-6 font-heading text-4xl leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Estetik Tasarım,
              <br />
              Kusursuz Uygulama.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Yaşam alanlarınıza estetik dokunuşlar yaparak, doğayı sanatla buluşturuyoruz. Modern
              tasarım ve doğru bitkilendirme ile bahçenizi yeniden yaratıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ücretsiz Keşif
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 border border-border px-7 py-4 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                onClick={() => setActive(index)}
                aria-label={slide.caption}
                className={cn(
                  "h-px w-14 transition-colors",
                  index === active ? "bg-primary" : "bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Hizmetlerimiz"
              title="Bahçenizin her ihtiyacı tek elden"
              description="Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz."
            />
            <Link
              to="/hizmetler"
              className="link-underline shrink-0 text-sm uppercase tracking-[0.2em] text-primary"
            >
              Tüm Hizmetler
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                tall={index === 0}
                className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Neden Biz?"
            title="Doğanın dengesine saygı duyan bir çözüm ortağı"
          />
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {whyUs.map((item, index) => (
              <div key={item.title} className="border-t border-border pt-7">
                <p className="font-heading text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-heading text-xl tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden border border-border lg:aspect-[4/5]">
            <Image
              src={wideBannerImage}
              alt="Topçuoğlu Peyzaj ekibi çalışırken"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Hakkımızda"
              title="Doğayı sanatla, mekanları huzurla buluşturuyoruz"
              description="Topcuoğlu Peyzaj, kurulduğu günden bu yana yeşile olan tutkusunu profesyonel tekniklerle birleştirerek, yaşam alanlarınıza değer katmak amacıyla yola çıkmıştır. Sadece bir bahçe düzenleme firması olmanın ötesinde; toprağın dilinden anlayan, doğanın dengesine saygı duyan ve estetiği mühendislikle harmanlayan bir çözüm ortağıyız."
            />
            <div className="mt-10 flex items-start gap-4 border-t border-border pt-8">
              <Quote className="h-5 w-5 shrink-0 text-primary" />
              <p className="font-heading text-lg leading-relaxed tracking-tight">
                Her bahçenin bir ruhu olduğuna inanıyoruz. Siz hayal edin, biz doğanın imkanlarıyla
                o ruhu canlandıralım.
              </p>
            </div>
            <Link
              to="/hakkimizda"
              className="link-underline mt-10 inline-block text-sm uppercase tracking-[0.2em] text-primary"
            >
              Hikayemizi okuyun
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Galeri"
              title="Sahadan kareler"
              description="Rulo çim uygulamaları, sert zemin çalışmaları, budama operasyonları ve ilaçlama uygulamalarımızdan bir seçki."
            />
            <Link
              to="/galeri"
              className="link-underline shrink-0 text-sm uppercase tracking-[0.2em] text-primary"
            >
              Galeriyi Gör
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryImages.slice(0, 4).map((item) => (
              <div key={item.src} className="group relative aspect-square overflow-hidden border border-border">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Blog"
              title="Bahçe bakımında dikkat edilmesi gerekenler"
              description="Kendi bahçenizde uygulayabileceğiniz pratik bakım ve tasarım ipuçlarımız."
            />
            <Link
              to="/blog"
              className="link-underline shrink-0 text-sm uppercase tracking-[0.2em] text-primary"
            >
              Tüm Yazılar
            </Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}