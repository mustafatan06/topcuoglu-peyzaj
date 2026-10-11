import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1B2621] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-xl font-bold tracking-wide">Topçuoğlu Peyzaj</a>
        </div>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-amber-400 transition-colors">Ana Sayfa</a>
          <a href="#hizmetler" className="hover:text-amber-400 transition-colors">Hizmetler</a>
          <a href="/admin" className="hover:text-amber-400 transition-colors text-amber-500 font-semibold">Admin Panel</a>
          <a href="tel:05373193766" className="bg-amber-500 text-zinc-900 px-4 py-2 rounded-lg font-bold hover:bg-amber-400 transition-colors">
            0537 319 37 66
          </a>
        </nav>

        {/* Mobil Menü Butonu */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Menü"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Sağdan Açılır Menü (BEYAZ ARKA PLAN) */}
      <div className={`fixed inset-y-0 right-0 z-50 w-72 bg-white text-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-zinc-200">
          <span className="font-bold text-lg text-[#1B2621]">Menü</span>
          <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-800 p-1 font-bold text-lg">
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-5 font-medium">
          <a href="/" onClick={() => setIsOpen(false)} className="hover:text-amber-600 transition-colors">Ana Sayfa</a>
          <a href="#hizmetler" onClick={() => setIsOpen(false)} className="hover:text-amber-600 transition-colors">Hizmetler</a>
          <a href="/admin" onClick={() => setIsOpen(false)} className="text-amber-600 font-semibold">Admin Panel</a>
          <a href="tel:05373193766" className="bg-amber-500 text-zinc-900 text-center py-3 rounded-lg font-bold mt-4 shadow">
            0537 319 37 66
          </a>
        </nav>
      </div>
    </header>
  );
}