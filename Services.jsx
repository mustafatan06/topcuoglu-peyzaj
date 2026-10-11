import React, { useState, useEffect } from 'react';

export default function Services() {
  const defaultServices = [
    { title: "Peyzaj Düzenleme", category: "TASARIM & UYGULAMA", image: "https://images.unsplash.com/photo-1558904541-efa873a819ab?q=80&w=800&auto=format&fit=crop" },
    { title: "Bahçe Bakımı", category: "PERİYODİK BAKIM", image: "https://images.unsplash.com/photo-1584467735811-628a8d3e23f0?q=80&w=800&auto=format&fit=crop" },
    { title: "İlaçlama", category: "HAŞERE & BİTKİ SAĞLIĞI", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop" },
    { title: "Ağaç Budama", category: "FORM & GÜVENLİK", image: "https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=800&auto=format&fit=crop" },
    { title: "Mikrobiyal Gübre", category: "CANLI TOPRAK", image: "https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?q=80&w=800&auto=format&fit=crop" },
    { title: "Kanalizasyon Temizliği", category: "ALTYAPI & VİDANJÖR", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop" },
    { title: "Çatı & Oluk Temizliği", category: "YAPI KORUMA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { title: "Temizlik Hizmetleri", category: "GENEL TEMİZLİK", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" },
    { title: "Ofis Temizliği", category: "KURUMSAL HİZMET", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { title: "İnşaat Temizliği", category: "İNŞAAT SONRASI", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" }
  ];

  const [adminItems, setAdminItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('topcuoglu_gallery');
    if (saved) {
      setAdminItems(JSON.parse(saved));
    }
  }, []);

  // Admin panelinden eklenenler varsa başa eklenir
  const allServices = [...adminItems, ...defaultServices];

  return (
    <section id="hizmetler" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm text-amber-500 uppercase tracking-wider font-medium">
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </div>

      {/* Kesinlikle taşmayan, tüm ekranlarda aynı boyutta kilitlenmiş esnek grid yapısı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-full">
        {allServices.map((service, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl shadow-md bg-zinc-900 aspect-[4/3] w-full"
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