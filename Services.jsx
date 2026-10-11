import React, { useState, useEffect } from 'react';

export default function Services() {
  const defaultServices = [
    { title: "Peyzaj Düzenleme", category: "TASARIM & UYGULAMA", image: "https://static.wixstatic.com/media/..." }, // Kendi görsel linklerin
    { title: "Bahçe Bakımı", category: "PERİYODİK BAKIM", image: "https://static.wixstatic.com/media/..." },
    { title: "İlaçlama", category: "HAŞERE & BİTKİ SAĞLIĞI", image: "https://static.wixstatic.com/media/..." },
    { title: "Ağaç Budama", category: "FORM & GÜVENLİK", image: "https://static.wixstatic.com/media/..." },
    { title: "Mikrobiyal Gübre", category: "CANLI TOPRAK", image: "https://static.wixstatic.com/media/..." },
    { title: "Kanalizasyon Temizliği", category: "ALTYAPI & VİDANJÖR", image: "https://static.wixstatic.com/media/..." },
    { title: "Çatı & Oluk Temizliği", category: "YAPI KORUMA", image: "https://static.wixstatic.com/media/..." },
    { title: "Temizlik Hizmetleri", category: "GENEL TEMİZLİK", image: "https://static.wixstatic.com/media/..." },
    { title: "Ofis Temizliği", category: "KURUMSAL HİZMET", image: "https://static.wixstatic.com/media/..." },
    { title: "İnşaat Temizliği", category: "İNŞAAT SONRASI", image: "https://static.wixstatic.com/media/..." }
  ];

  const [adminItems, setAdminItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('topcuoglu_gallery');
    if (saved) {
      setAdminItems(JSON.parse(saved));
    }
  }, []);

  const allServices = [...adminItems, ...defaultServices];

  return (
    <section id="hizmetler" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-amber-500 uppercase tracking-wider font-medium">
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </div>

      {/* Hiçbir istisna bırakmadan tüm kartları aspect-[16/10] yatay dikdörtgen ve eşit boyuta kilitledik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-full">
        {allServices.map((service, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl shadow-md bg-zinc-900 aspect-[16/10] w-full"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider mb-0.5">
                {service.category}
              </span>
              <h3 className="font-bold text-white text-base md:text-lg">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}