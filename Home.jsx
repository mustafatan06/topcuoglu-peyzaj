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
    <div style={{ minHeight: '100vh', backgroundColor: '#111813', color: '#ffffff' }}>
      {/* Üst Bilgilendirme Alanı */}
      <section style={{ padding: '48px 16px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '-0.025em' }}>
          Topçuoğlu Peyzaj <span style={{ color: '#fbbf24' }}>& Tasarım</span>
        </h1>
        <p style={{ fontSize: '1rem', color: '#f59e0b', textTransform: 'uppercase', fontWeight: 500, maxWidth: '768px', margin: '0 auto' }}>
          Peyzaj düzenlemeden ilaçlamaya, kanalizasyondan ofis temizliğine kadar on ayrı hizmeti aynı ekiple, aynı standartta yürütüyoruz.
        </p>
      </section>

      {/* TÜM KUTULARI KESİN OLARAK EŞİT YATAY NİZAMA KİLİTEYEN YAPI */}
      <section style={{ paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px', width: '100%' }}>
          {allServices.map((hizmet, index) => (
            <div 
              key={index} 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: '12px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
                backgroundColor: '#18181b', 
                aspectRatio: '16 / 10', 
                width: '100%',
                border: '1px solid rgba(39, 39, 42, 0.4)'
              }}
            >
              <img 
                src={hizmet.resim} 
                alt={hizmet.başlığı} 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center' 
                }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4), transparent)', 
                padding: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-end' 
              }}>
                <span style={{ fontSize: '12px', color: '#fbbf24', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                  {hizmet.kategorisi}
                </span>
                <h3 style={{ fontWeight: 'bold', color: '#ffffff', fontSize: '1.125rem', margin: 0 }}>
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