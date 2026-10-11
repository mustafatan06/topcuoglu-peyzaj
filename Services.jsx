import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Peyzaj Düzenleme",
      category: "TASARIM & UYGULAMA",
      image: "https://static.wixstatic.com/media/...", // Mevcut görsel linklerin
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2",
      isLarge: true
    },
    {
      title: "Bahçe Bakımı",
      category: "PERİYODİK BAKIM",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2",
      isLarge: true
    },
    {
      title: "İlaçlama",
      category: "HAŞERE & BİTKİ SAĞLIĞI",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Ağaç Budama",
      category: "FORM & GÜVENLİK",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Mikrobiyal Gübre",
      category: "CANLI TOPRAK",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Kanalizasyon Temizliği",
      category: "ALTYAPI & VİDANJÖR",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Çatı & Oluk Temizliği",
      category: "YAPI KORUMA",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Temizlik Hizmetleri",
      category: "GENEL TEMİZLİK",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "Ofis Temizliği",
      category: "KURUMSAL HİZMET",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    },
    {
      title: "İnşaat Temizliği",
      category: "İNŞAAT SONRASI",
      image: "https://static.wixstatic.com/media/...",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      isLarge: false
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-amber-500 uppercase tracking-wider">
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </div>

      {/* Grid Yapısı: Tüm görselleri aspect-square ile kusursuz kare yapar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[280px]">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className={`group relative overflow-hidden rounded-xl shadow-md bg-zinc-900 aspect-square ${service.colSpan} ${service.rowSpan}`}
          >
            {/* Görsel: Orantısızlığı önlemek için absolute ve object-cover */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Karartma Maskesi ve Yazı Katmanı */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs md:text-sm text-amber-400 font-semibold uppercase tracking-wider mb-1">
                {service.category}
              </span>
              <h3 className={`font-bold text-white ${service.isLarge ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}