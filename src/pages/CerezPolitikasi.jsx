import LegalLayout from "@/components/LegalLayout";
import usePageTitle from "@/hooks/usePageTitle";
import { site } from "@/data/site";

export default function CerezPolitikasi() {
  usePageTitle("Çerez Politikası");

  return (
    <LegalLayout eyebrow="Yasal" title="Çerez Politikası" updated="Ekim 2026">
      <p>
        Bu politika, {site.name} internet sitesinde kullanılan çerezler ve benzeri teknolojiler
        hakkında ziyaretçilerimizi bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, ziyaret ettiğiniz web sitesi tarafından tarayıcınıza kaydedilen küçük metin
        dosyalarıdır. Çerezler sayesinde site, tercihlerinizi hatırlayabilir ve sayfaların doğru
        çalışmasını sağlayabilir.
      </p>

      <h2>Hangi çerezleri kullanıyoruz?</h2>
      <p>
        Sitemizde ağırlıklı olarak zorunlu çerezler kullanılır. Bu çerezler; form gönderimlerinin
        güvenli şekilde iletilmesi, dil ve görüntüleme tercihlerinin hatırlanması ve sitenin temel
        işlevlerinin çalışması için gereklidir. Zorunlu çerezler devre dışı bırakıldığında sitenin
        bazı bölümleri beklendiği gibi çalışmayabilir.
      </p>

      <h2>Üçüncü taraf hizmetleri</h2>
      <p>
        Sitemizde harita, video veya sosyal medya içerikleri gibi üçüncü taraf hizmetler
        görüntülendiğinde, ilgili hizmet sağlayıcı kendi çerezlerini yerleştirebilir. Bu çerezler
        ilgili sağlayıcının kendi politikalarına tabidir.
      </p>

      <h2>Çerezleri nasıl yönetirsiniz?</h2>
      <p>
        Tarayıcınızın ayarlar bölümünden çerezleri silebilir veya engelleyebilirsiniz. Çerezleri
        engellemeniz hâlinde siteyi kullanmaya devam edebilirsiniz; ancak bazı işlevler sınırlı
        çalışabilir.
      </p>

      <h2>İletişim</h2>
      <p>
        Çerez uygulamalarımızla ilgili sorularınız için {site.phone} numarasından bize
        ulaşabilirsiniz.
      </p>
    </LegalLayout>
  );
}