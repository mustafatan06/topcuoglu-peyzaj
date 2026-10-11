import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { services } from "@/data/services";
import usePageTitle from "@/hooks/usePageTitle";

export default function Hizmetler() {
  usePageTitle("Hizmetlerimiz");

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Seçmek istediğiniz hizmetin üzerine tıklayın"
          description="Peyzaj ve bakımdan ilaçlamaya, altyapı ve temizlik hizmetlerine kadar tüm ihtiyaçlarınızı tek elden, entegre bir şekilde karşılıyoruz. Her hizmetin detayını, uygulama adımlarını ve saha fotoğraflarını kendi sayfasında bulabilirsiniz."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CtaBand title="Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?" />
    </>
  );
}