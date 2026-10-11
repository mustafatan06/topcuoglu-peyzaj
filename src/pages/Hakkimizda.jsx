import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Image } from "@/components/ui/image";
import { site, whyUs, wideBannerImage } from "@/data/site";
import { galleryImages } from "@/data/services";
import usePageTitle from "@/hooks/usePageTitle";
import { Compass, Sprout, Shield } from "lucide-react";

const commitments = [
  {
    icon: Sprout,
    title: "Misyonumuz",
    text: "Müşterilerimizin hayallerindeki dış mekanları, bilimsel veriler ve estetik değerler ışığında gerçeğe dönüştürmek; yaşam kalitesini artıran, çevre dostu alanlar yaratmak.",
  },
  {
    icon: Compass,
    title: "Vizyonumuz",
    text: "Yenilikçi uygulamalarımız ve sürdürülebilir çevre bilincimizle, peyzaj ve açık alan yönetimi sektöründe öncü, güvenilir ve ilham veren bir marka olmaya devam etmek.",
  },
  {
    icon: Shield,
    title: "Yaklaşımımız",
    text: "Canlı mikrobiyal gübre ve toprak düzenleyici uygulamalarımızla bitki sağlığını temelinden güçlendiriyor, sadece görsel bir güzellik değil toprağın altında da işleyen sağlıklı bir yapı kuruyoruz.",
  },
];

export default function Hakkimizda() {
  usePageTitle("Hakkımızda");

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Doğayı Sanatla, Mekanları Huzurla Buluşturuyoruz"
          description="Topcuoğlu Peyzaj, kurulduğu günden bu yana yeşile olan tutkusunu profesyonel tekniklerle birleştirerek, yaşam alanlarınıza değer katmak amacıyla yola çıkmıştır. Sadece bir bahçe düzenleme firması olmanın ötesinde; toprağın dilinden anlayan, doğanın dengesine saygı duyan ve estetiği mühendislikle harmanlayan bir çözüm ortağıyız."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Peyzaj tasarımından periyodik bahçe bakımına, bitki sağlığından teknik tesisat
              çözümlerine kadar geniş bir yelpazede hizmet sunuyoruz. Modern yaşamın getirdiği yoğun
              tempoda, insanların nefes alabileceği, doğayla bağ kurabileceği "yaşayan mekanlar"
              inşa etmek en büyük önceliğimizdir.
            </p>
            <p>
              Sektördeki farkımızı, geleneksel yöntemleri modern teknolojiyle birleştirerek ortaya
              koyuyoruz. Bahçelerinizde kullandığımız canlı mikrobiyal gübre ve toprak düzenleyici
              uygulamalarımızla, bitki sağlığını temelinden güçlendiriyor ve sürdürülebilir bir
              ekosistem oluşturuyoruz.
            </p>
            <p className="font-heading text-lg tracking-tight text-foreground">
              Topcuoğlu Peyzaj olarak biz, her bahçenin bir ruhu olduğuna inanıyoruz. Siz hayal
              edin, biz doğanın imkanlarıyla o ruhu canlandıralım.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <Image
              src={wideBannerImage}
              alt="Topçuoğlu Peyzaj"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Değerlerimiz" title="Bizi biz yapan üç şey" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="border-t border-border pt-8">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 font-heading text-xl tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Çalışma Biçimimiz" title="Neden Biz?" />
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

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Hizmet Bölgemiz"
            title="Ankara ve çevresinde sahadayız"
            description={`${site.address} — ${site.city}. ${site.serviceArea}.`}
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryImages.slice(4, 8).map((item) => (
              <div key={item.src} className="relative aspect-square overflow-hidden border border-border">
                <Image src={item.src} alt={item.title} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}