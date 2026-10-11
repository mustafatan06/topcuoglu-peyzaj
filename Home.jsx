import React, { useState, useEffect } from 'react';

export default function Home() {
  const defaultServices = [
    { başlığı: "Peyzaj Düzenleme", kategorisi: "TASARIM & UYGULAMA", resim: "https://images.unsplash.com/photo-1558904541-efa873a819ab?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Bahçe Bakımı", kategorisi: "PERİYODİK BAKIM", resim: "https://images.unsplash.com/photo-1584467735811-628a8d3e23f0?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "İlaçlama", kategorisi: "HAŞERE & BİTKİ SAĞLIĞI", resim: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Ağaç Budama", kategorisi: "FORM & GÜVENLİK", resim: "https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Mikrobiyal Gübre", kategorisi: "CANLI TOPRAK", resim: "https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Kanalizasyon Temizliği", kategorisi: "ALTYAPI & VİDANJÖR", resim: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Çatı & Oluk Temizliği", kategorisi: "YAPI KORUMA", resim: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Temizlik Hizmetleri", kategorisi: "GENEL TEMİZLİK", resim: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "Ofis Temizliği", kategorisi: "KURUMSAL HİZMET", resim: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { başlığı: "İnşaat Temizliği", kategorisi: "İNŞAAT SONRASI", resim: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" }
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
    <div className="min-h-screen bg-[#111813] text-white">
      {/* Üst Bilgilendirme Alanı */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Topçuoğlu Peyzaj <span className="text-amber-400">& Tasarım</span>
        </h1>
        <p className="text-sm md:text-base text-amber-500 uppercase tracking-wider font-medium max-w-3xl mx-auto">
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </section>

      {/* Kusursuz 3'lü Yatay Hizmetler Grid Yapısı */}
      <section className="pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {allServices.map((hizmet, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 aspect-[16/10] w-full border border-zinc-800/40"
            >
              <img 
                src={hizmet.resim} 
                alt={hizmet.başlığı} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  {hizmet.kategorisi}
                </span>
                <h3 className="font-bold text-white text-lg md:text-xl">
                  {hizmet.başlığı}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}