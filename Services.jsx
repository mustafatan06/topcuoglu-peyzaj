import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Peyzaj Düzenleme",
      category: "TASARIM & UYGULAMA",
      image: "https://static.wixstatic.com/media/...", // Kendi görsel linklerin
    },
    {
      title: "Bahçe Bakımı",
      category: "PERİYODİK BAKIM",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "İlaçlama",
      category: "HAŞERE & BİTKİ SAĞLIĞI",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Ağaç Budama",
      category: "FORM & GÜVENLİK",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Mikrobiyal Gübre",
      category: "CANLI TOPRAK",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Kanalizasyon Temizliği",
      category: "ALTYAPI & VİDANJÖR",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Çatı & Oluk Temizliği",
      category: "YAPI KORUMA",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Temizlik Hizmetleri",
      category: "GENEL TEMİZLİK",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "Ofis Temizliği",
      category: "KURUMSAL HİZMET",
      image: "https://static.wixstatic.com/media/...",
    },
    {
      title: "İnşaat Temizliği",
      category: "İNŞAAT SONRASI",
      image: "https://static.wixstatic.com/media/...",
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-amber-500 uppercase tracking-wider">
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </div>

      {/* 4 Sütunlu (veya ekran boyutuna göre değişen) standart Grid yapısı */}
      {/* Tüm öğeler 'col-span-1' ve 'aspect-[16/10]' ile aynı boyutta kilitlendi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl shadow-md bg-zinc-900 aspect-[16/10]"
          >
            {/* Görsel: object-cover ile bozulmadan kutuyu tam doldurur */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Karartma Maskesi ve Yazı Alanı */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                {service.category}
              </span>
              <h3 className="font-bold text-white text-lg md:text-xl">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}