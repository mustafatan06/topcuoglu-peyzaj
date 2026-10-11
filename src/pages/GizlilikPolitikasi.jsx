import LegalLayout from "@/components/LegalLayout";
import usePageTitle from "@/hooks/usePageTitle";
import { site } from "@/data/site";

export default function GizlilikPolitikasi() {
  usePageTitle("Gizlilik Politikası");

  return (
    <LegalLayout eyebrow="Yasal" title="Gizlilik Politikası" updated="Ekim 2026">
      <p>
        {site.name} olarak, internet sitemizi ziyaret eden kullanıcıların kişisel verilerinin
        korunmasına önem veriyoruz. Bu politika, sitemiz üzerinden paylaştığınız bilgilerin hangi
        amaçla toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.
      </p>

      <h2>Hangi bilgileri topluyoruz?</h2>
      <p>
        İletişim ve keşif formunu doldurduğunuzda ad soyad, telefon numarası, e-posta adresi, adres
        ve talebinize ilişkin mesaj içeriği gibi bilgileri topluyoruz. Bu bilgiler yalnızca sizin
        beyanınıza dayanır; formu doldurmadığınız sürece kimlik bilgisi talep etmiyoruz.
      </p>

      <h2>Bilgileri neden kullanıyoruz?</h2>
      <p>
        Paylaştığınız bilgileri; talebinizi değerlendirmek, ücretsiz keşif randevusu oluşturmak,
        teklif ve bilgilendirme yapmak ve hizmetlerimizi iyileştirmek amacıyla kullanıyoruz.
        Bilgileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmaz.
      </p>

      <h2>Bilgilerin saklanması ve güvenliği</h2>
      <p>
        Form üzerinden ilettiğiniz talepler güvenli sistemlerde kayıtlı tutulur ve yalnızca yetkili
        ekip üyelerimiz erişebilir. Hizmetin tamamlanmasından sonra talebinizle ilgili kayıtlar,
        yasal yükümlülükler saklı kalmak kaydıyla, gerekli görülmeyen bilgilerden arındırılır.
      </p>

      <h2>Çerezler</h2>
      <p>
        Sitemiz, temel işlevlerin çalışması ve ziyaretçi deneyiminin iyileştirilmesi amacıyla sınırlı
        sayıda çerez kullanabilir. Çerezlerle ilgili ayrıntılar için Çerez Politikamızı
        inceleyebilirsiniz.
      </p>

      <h2>Haklarınız</h2>
      <p>
        Kişisel verilerinizin silinmesini, güncellenmesini veya hangi bilgilerin işlendiğini
        öğrenmeyi talep edebilirsiniz. Bu talepleriniz için bize {site.phone} numarasından
        ulaşabilirsiniz.
      </p>

      <h2>İletişim</h2>
      <p>
        {site.name} — {site.address}, {site.city}. Telefon: {site.phone}.
      </p>
    </LegalLayout>
  );
}