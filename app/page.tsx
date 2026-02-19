"use client";

import { useState } from "react";

// Custom 2D Flat SVG Icons for Retro/Vintage Theme
const MosqueIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L4 10V20H9V14H15V20H20V10L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 3V8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 4V20" stroke="white" strokeWidth="1.5"/>
    <path d="M16 4V20" stroke="white" strokeWidth="1.5"/>
    <path d="M8 8H16" stroke="white" strokeWidth="1"/>
    <path d="M8 12H16" stroke="white" strokeWidth="1"/>
    <path d="M8 16H16" stroke="white" strokeWidth="1"/>
  </svg>
);

const FoodIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="14" rx="8" ry="6" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 10C4 10 6 8 12 8C18 8 20 10 20 10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PrayingHandsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4V12L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 4V12L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 18C6 18 4 16 4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 18C18 18 20 16 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="4" r="2" fill="currentColor"/>
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="10" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V18" stroke="white" strokeWidth="1.5"/>
    <path d="M12 8V4" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="9" cy="5" rx="2" ry="1.5" fill="currentColor"/>
    <ellipse cx="15" cy="5" rx="2" ry="1.5" fill="currentColor"/>
  </svg>
);

const HeartGiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
    <rect x="8" y="10" width="8" height="6" fill="white"/>
    <path d="M12 10V16" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="9" r="2.5" fill="white"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 10H21" stroke="white" strokeWidth="1.5"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1" fill="white"/>
    <circle cx="12" cy="14" r="1" fill="white"/>
    <circle cx="16" cy="14" r="1" fill="white"/>
    <circle cx="8" cy="17" r="1" fill="white"/>
    <circle cx="12" cy="17" r="1" fill="white"/>
    <circle cx="16" cy="17" r="1" fill="white"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarBadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <path d="M12 6L13.5 9.5L17.5 10L14.5 12.5L15.5 16.5L12 14.5L8.5 16.5L9.5 12.5L6.5 10L10.5 9.5L12 6Z" fill="white"/>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream grid-pattern relative">
      {/* ============================================ */}
      {/* NAVBAR */}
      {/* ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow border-b-4 border-black shadow-hard-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-block font-logo font-headline text-2xl md:text-3xl text-black uppercase tracking-wider hover:opacity-80 transition-opacity duration-100"
              >
                RGM VOL.3
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#penyelenggara"
                className="font-headline text-black uppercase tracking-wider text-sm hover:bg-white hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Penyelenggara
              </a>
              <a
                href="#kegiatan"
                className="font-headline text-black uppercase tracking-wider text-sm hover:bg-white hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Kegiatan
              </a>
              <a
                href="#asatidz"
                className="font-headline text-black uppercase tracking-wider text-sm hover:bg-white hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Asatidz
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3 bg-violet border-4 border-black shadow-hard-md font-headline text-black uppercase tracking-wider hover:translate-x-1 hover:shadow-hard-lg transition-all duration-100 push-button"
              >
                Mulai Gratis
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-white border-4 border-black shadow-hard-sm hover:shadow-hard-md transition-all duration-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b-4 border-black shadow-hard-md">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#penyelenggara"
                className="block font-headline text-black uppercase tracking-wider text-lg py-2 border-b-2 border-black pb-2"
              >
                Penyelenggara
              </a>
              <a
                href="#kegiatan"
                className="block font-headline text-black uppercase tracking-wider text-lg py-2 border-b-2 border-black pb-2"
              >
                Kegiatan
              </a>
              <a
                href="#asatidz"
                className="block font-headline text-black uppercase tracking-wider text-lg py-2 border-b-2 border-black pb-2"
              >
                Asatidz
              </a>
              <a
                href="#cta"
                className="block w-full text-center px-6 py-4 bg-violet border-4 border-black shadow-hard-md font-headline text-black uppercase tracking-wider push-button"
              >
                Mulai Gratis
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red border-4 border-black shadow-hard-lg rotate-3 opacity-20 hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow border-4 border-black shadow-hard-lg -rotate-6 opacity-20 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative">
              {/* Badge */}
              <div className="inline-block">
                <div className="bg-red border-4 border-black shadow-hard-md px-4 py-2 font-headline text-black uppercase tracking-widest inline-block rotate-2">
                  RAMADHAN 1447H
                </div>
              </div>

              {/* Headline with sticker effect */}
              <div className="space-y-2">
                <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight">
                  <span className="text-black block -rotate-1 inline-block">RAMADHAN</span>
                  <span className="text-black block -rotate-1 inline-block ml-4">LEVEL UP!</span>
                </h1>
                <div className="font-semibold text-xl md:text-3xl text-red mt-4 -rotate-1 inline-block">
                  &gt; BERSAMA GARUT MENGAJI
                </div>
              </div>

              {/* Description */}
              <p className="font-subheadline text-lg md:text-xl leading-snug text-black max-w-xl border-l-4 border-black pl-4">
                Ramadhan Level UP mengajak kita menjadikan bulan suci sebagai momen istimewa untuk konsisten beribadah dan capai peningkatan diri secara menyeluruh.
              </p>

              {/* Decorative sticker badges */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs rotate-2">
                  30 HARI
                </div>
                <div className="bg-violet border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs -rotate-1">
                  6 KEGIATAN
                </div>
                <div className="bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs rotate-3">
                  7 ASATIDZ
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20berminat%20daftar%20Program%20Tahsin%20Ramadhan%20bersama%20Garut%20Mengaji.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red border-4 border-black shadow-hard-md font-headline text-black uppercase tracking-wider text-lg hover:translate-x-1 hover:shadow-hard-lg transition-all duration-100 push-button group"
                >
                  START LEVEL UP!
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#kegiatan"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-4 border-black shadow-hard-sm font-headline text-black uppercase tracking-wider text-lg hover:bg-yellow hover:translate-x-1 hover:shadow-hard-md transition-all duration-100"
                >
                  Lihat Kegiatan
                </a>
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="relative">
              {/* Floating sticker */}
              <div className="absolute -top-6 -right-6 bg-yellow border-4 border-black shadow-hard-xl p-4 font-headline text-black uppercase tracking-wider rotate-3 animate-bounce-subtle hidden md:block">
                <StarIcon className="w-6 h-6" />
              </div>

              {/* Main Info Card */}
              <div className="bg-white border-4 border-black shadow-hard-xl p-6 md:p-8 lift-effect relative">
                <div className="absolute -top-3 -left-3 bg-violet border-4 border-black shadow-hard-md px-3 py-1 font-headline text-black uppercase text-xs rotate-2">
                  INFO
                </div>

                <div className="space-y-6 mt-4">
                  {/* Date Range */}
                  <div>
                    <div className="bg-cream border-4 border-black p-4 shadow-hard-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-headline text-black uppercase text-sm">MULAI</span>
                        <span className="font-headline text-red uppercase text-sm">SELESAI</span>
                      </div>
                      <div className="flex items-center justify-between font-headline text-2xl">
                        <span>18 FEB</span>
                        <ArrowRightIcon className="w-6 h-6 text-red" />
                        <span>20 MAR</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-cream border-4 border-black p-4 text-center shadow-hard-sm">
                      <div className="font-headline text-4xl md:text-5xl">30</div>
                      <div className="font-headline text-black text-xs uppercase mt-1">HARI</div>
                    </div>
                    <div className="bg-yellow border-4 border-black p-4 text-center shadow-hard-sm">
                      <div className="font-headline text-4xl md:text-5xl">6</div>
                      <div className="font-headline text-black text-xs uppercase mt-1">MODUL</div>
                    </div>
                    <div className="bg-violet border-4 border-black p-4 text-center shadow-hard-sm">
                      <div className="font-headline text-4xl md:text-5xl">7</div>
                      <div className="font-headline text-black text-xs uppercase mt-1">USTADZ</div>
                    </div>
                  </div>

                  {/* Quick Highlights */}
                  <div className="space-y-2">
                    <div className="bg-red border-4 border-black shadow-hard-sm p-3">
                      <div className="font-headline text-sm uppercase flex items-center">
                        <StarIcon className="w-4 h-4 mr-2" />
                        TARAWEH + QURAN
                      </div>
                    </div>
                    <div className="bg-yellow border-4 border-black shadow-hard-sm p-3">
                      <div className="font-headline text-sm uppercase flex items-center">
                        <StarIcon className="w-4 h-4 mr-2" />
                        KAJIAN 2x/MINGGU
                      </div>
                    </div>
                    <div className="bg-violet border-4 border-black shadow-hard-sm p-3">
                      <div className="font-headline text-sm uppercase flex items-center">
                        <StarIcon className="w-4 h-4 mr-2" />
                        ITIKAF 10 HARI
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-cream border-4 border-black p-4 shadow-hard-sm">
                    <div className="font-headline text-black uppercase text-sm mb-2">LOKASI</div>
                    <p className="font-body text-black">Masjid Al-Barru Stasiun Garut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PENYELENGGARA SECTION */}
      {/* ============================================ */}
      <section id="penyelenggara" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y-4 border-black relative">
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl uppercase tracking-tight mb-4">
              <span className="inline-block bg-yellow border-4 border-black shadow-hard-sm px-4 py-2 -rotate-2">
                PENYELENGGARAAN
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-cream border-4 border-black shadow-hard-md p-6 lift-effect relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-red border-4 border-black shadow-hard-sm flex items-center justify-center">
                <span className="font-headline text-xs">1</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red border-4 border-black shadow-hard-sm flex items-center justify-center mr-4">
                  <MosqueIcon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="bg-black text-white font-headline text-xs uppercase px-2 py-1 inline-block mb-2">
                    PENYELENGGARA
                  </div>
                  <p className="font-bold text-black">
                    Garut Mengaji X DKM Masjid Al-Barru Stasiun Garut
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-violet border-4 border-black shadow-hard-md p-6 lift-effect relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow border-4 border-black shadow-hard-sm flex items-center justify-center">
                <span className="font-headline text-xs">2</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet border-4 border-black shadow-hard-sm flex items-center justify-center mr-4">
                  <LocationIcon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="bg-black text-white font-headline text-xs uppercase px-2 py-1 inline-block mb-2">
                    LOKASI
                  </div>
                  <p className="font-bold text-black">
                    Masjid Al-Barru Stasiun Garut
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-yellow border-4 border-black shadow-hard-md p-6 lift-effect relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-red border-4 border-black shadow-hard-sm flex items-center justify-center">
                <span className="font-headline text-xs">3</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow border-4 border-black shadow-hard-sm flex items-center justify-center mr-4">
                  <CalendarIcon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="bg-black text-white font-headline text-xs uppercase px-2 py-1 inline-block mb-2">
                    WAKTU
                  </div>
                  <p className="font-body text-black mb-1">
                    18 Feb - 20 Mar 2026
                  </p>
                  <p className="font-body text-red text-sm">
                    01 - 30 Ramadhan 1447H
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* KEGIATAN SECTION */}
      {/* ============================================ */}
      <section id="kegiatan" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-yellow border-y-4 border-black relative">
        {/* Radial dots pattern overlay */}
        <div className="absolute inset-0 radial-dots opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl uppercase tracking-tight mb-4">
              <span className="inline-block bg-red border-4 border-black shadow-hard-sm px-4 py-2 -rotate-1">
                KEGIATAN
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kegiatan 1 */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-xs rotate-2">
                MOD_01
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <MosqueIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                FULL TARAWEH BERJAMA'AH
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Sholat Taraweh berjamaah & Belajar Basic Membaca Al-Quran.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-sm hover:bg-red hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Detail
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Kegiatan 2 */}
            <div className="bg-violet border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs -rotate-1">
                MOD_02
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <BookIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                KAJIAN RUTIN
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Rabu Sore & Sabtu Sore
              </p>
              <p className="font-body text-violet text-xs border-t-2 border-black pt-3">
                Bersama: Ustadz Iwan Darmawan, Lc. & Ustadz Usamah Suryana, BA. Hafizhahullahu Ta'ala
              </p>
            </div>

            {/* Kegiatan 3 */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-xs rotate-3">
                MOD_03
              </div>
              <div className="w-12 h-12 bg-yellow border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <FoodIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                IFTHAR JAMA'I
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Buka Bersama dilanjutkan dengan Sholat Maghrib Berjamaah.
              </p>
            </div>

            {/* Kegiatan 4 */}
            <div className="bg-yellow border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-violet border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs -rotate-2">
                MOD_04
              </div>
              <div className="w-12 h-12 bg-white border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <PrayingHandsIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                ITIKAF 10 HARI AKHIR
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Itikaf selama 10 hari bersama 75 Jamaah di Masjid Al-Barru Stasiun Garut.
              </p>
            </div>

            {/* Kegiatan 5 */}
            <div className="bg-violet border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs rotate-1">
                MOD_05
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <GiftIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                BINGKISAN ASATIDZ
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Berbagi bingkisan untuk para Asatidz di Kota Garut.
              </p>
            </div>

            {/* Kegiatan 6 */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-xs -rotate-3">
                MOD_06
              </div>
              <div className="w-12 h-12 bg-yellow border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <HeartGiftIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black">
                TEBAR THR
              </h3>
              <p className="font-subheadline text-black text-sm leading-snug mb-4">
                Tebar THR (Menembus Malam) di sekitar kota Garut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ASATIDZ SECTION */}
      {/* ============================================ */}
      <section id="asatidz" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream border-y-4 border-black relative">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise opacity-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl uppercase tracking-tight mb-4">
              <span className="inline-block bg-yellow border-4 border-black shadow-hard-sm px-4 py-2 rotate-1">
                ASATIDZ
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Ustadz Iwan Darmawan, Lc. Hafizhahullahu Ta'ala",
              "Ustadz Usamah Suryana, BA. Hafizhahullahu Ta'ala",
              "Ustadz Abdul Hakim, M.Pd.I Hafizhahullahu Ta'ala",
              "Ustadz Alfian Abu Yumna Hafizhahullahu Ta'ala",
              "Ustadz Abu Hanafi As-Sundawwy, M.Pd Hafizhahullahu Ta'ala",
              "Ustadz Imaddudin Al-Mubaroq Hafizhahullahu Ta'ala",
              "Ustadz Saepul Rohman Hafizhahullahu Ta'ala",
            ].map((asatidz, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black shadow-hard-md p-4 md:p-5 flex items-center lift-effect group"
              >
                <div className="w-12 h-12 bg-red border-4 border-black shadow-hard-sm flex items-center justify-center mr-4 flex-shrink-0 font-headline text-xl">
                  {index + 1}
                </div>
                <p className="font-body text-black flex-1 text-sm md:text-base">
                  {asatidz}
                </p>
                <div className="bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-xs rotate-2 group-hover:rotate-0 transition-transform">
                  SAH
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section id="cta" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black border-y-4 border-black relative">
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 halftone opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Floating badge */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-yellow border-4 border-black shadow-hard-xl px-6 py-3 font-headline text-black uppercase tracking-widest animate-bounce-subtle">
            LIMITED SLOTS
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-tight text-white">
              MULAI LEVEL UP!
              <br />
              <span className="text-red">SEKARANG</span>
            </h2>

            <p className="font-subheadline text-xl md:text-2xl text-cream max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk meningkatkan kualitas ibadah di bulan Ramadhan tahun ini.
            </p>

            <a
              href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20berminat%20daftar%20Program%20Tahsin%20Ramadhan%20bersama%20Garut%20Mengaji.."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-red border-4 border-black shadow-hard-xl font-headline text-white uppercase tracking-wider text-xl hover:translate-x-2 hover:shadow-hard-massive transition-all duration-100 push-button"
            >
              DAFTAR GRATIS
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </a>

            <p className="font-bold text-cream text-sm">
              Press Enter to confirm registration →
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-violet border-t-4 border-black relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="mb-4">
                <div className="inline-block font-logo font-headline text-2xl md:text-3xl text-black uppercase tracking-wider">
                  RGM VOL.3
                </div>
              </div>
              <p className="font-body text-black text-sm">
                Ramadhan Level UP! Bersama Garut Mangaji
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-headline text-lg uppercase mb-4">NAVIGASI</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#penyelenggara"
                    className="font-headline text-black hover:bg-yellow hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./penyelenggara
                  </a>
                </li>
                <li>
                  <a
                    href="#kegiatan"
                    className="font-headline text-black hover:bg-yellow hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./kegiatan
                  </a>
                </li>
                <li>
                  <a
                    href="#asatidz"
                    className="font-headline text-black hover:bg-yellow hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./asatidz
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-headline text-lg uppercase mb-4">LOKASI</h4>
              <p className="font-bold text-black text-sm mb-1">
                Masjid Al-Barru Stasiun Garut
              </p>
              <p className="font-body text-black text-sm">
                Garut, Jawa Barat
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t-4 border-black">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red border-4 border-black shadow-hard-sm flex items-center justify-center">
                  <StarIcon className="w-4 h-4" />
                </div>
                <span className="font-body text-black text-sm uppercase">
                  START FOR LEVEL UP
                </span>
              </div>
              <p className="font-body text-black text-sm">
                © 2026 RGM VOL.3 - Garut Mangaji. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
