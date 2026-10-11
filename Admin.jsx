import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [baslik, setBaslik] = useState('');
  const [kategori, setKategori] = useState('');
  const [resim, setResim] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('topcuoglu_gallery');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '0606') {
      setIsLoggedIn(true);
    } else {
      alert('Hatalı şifre! (Varsayılan şifre: 0606)');
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!baslik || !resim) {
      alert('Lütfen başlık ve görsel adresini doldurun.');
      return;
    }

    const newItem = { başlığı: baslik, kategorisi: kategori || 'ÖZEL HİZMET', resim: resim };
    const updatedItems = [newItem, ...items];
    setItems(updatedItems);
    localStorage.setItem('topcuoglu_gallery', JSON.stringify(updatedItems));

    setBaslik('');
    setKategori('');
    setResim('');
    alert('Hizmet / Görsel başarıyla eklendi ve ana sayfaya yansıtıldı!');
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    localStorage.setItem('topcuoglu_gallery', JSON.stringify(updated));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full border border-zinc-800 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-400">Topçuoğlu Admin Girişi</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Yönetici Şifresi</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                placeholder="Şifrenizi girin"
                required
              />
            </div>
            <button type="submit" className="w-full bg-amber-500 text-zinc-950 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
          <h1 className="text-3xl font-bold text-amber-400">Admin Yönetim Paneli</h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30">
            Çıkış Yap
          </button>
        </div>

        {/* Ekleme Formu */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-zinc-200">Siteye Yeni Hizmet / Ürün Ekle</h2>
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Hizmet Adı (Örn: Çim Serimi)" 
              value={baslik} 
              onChange={(e) => setBaslik(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:border-amber-400"
              required
            />
            <input 
              type="text" 
              placeholder="Kategori (Örn: UYGULAMA)" 
              value={kategori} 
              onChange={(e) => setKategori(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:border-amber-400"
            />
            <input 
              type="url" 
              placeholder="Görsel URL Adresi" 
              value={resim} 
              onChange={(e) => setResim(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:border-amber-400"
              required
            />
            <button type="submit" className="md:col-span-3 bg-amber-500 text-zinc-950 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Yayınla
            </button>
          </form>
        </div>

        {/* Liste */}
        <h2 className="text-xl font-semibold mb-4 text-zinc-200">Eklediğiniz Özel İçerikler ({items.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col justify-between">
              <div>
                <img src={item.resim} alt={item.başlığı} className="w-full h-36 object-cover rounded-lg mb-3" />
                <span className="text-xs text-amber-400 font-bold uppercase">{item.kategorisi}</span>
                <h3 className="font-semibold text-white">{item.başlığı}</h3>
              </div>
              <button 
                onClick={() => handleDelete(index)} 
                className="mt-4 bg-red-600/20 text-red-400 hover:bg-red-600/30 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}