"use client";

import { useState } from "react";
import Image from "next/image";

// Custom 2D Flat SVG Icons for Retro/Vintage Theme
const MosqueIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main building */}
    <path d="M12 2L3 9V21H8V15H16V21H21V9L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Dome detail */}
    <path d="M12 2V7" stroke="white" strokeWidth="2"/>
    <circle cx="12" cy="5" r="2" fill="white"/>
    {/* Crescent on top */}
    <path d="M12 3.5C13 3.5 13.5 4 13.5 4.5C13.5 5 13 5.5 12 5.5C11 5.5 10.5 5 10.5 4.5C10.5 4 11 3.5 12 3.5Z" fill="currentColor"/>
    {/* Windows */}
    <rect x="10" y="17" width="4" height="4" rx="1" fill="white"/>
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Book cover */}
    <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Book spine */}
    <path d="M8 3V21" stroke="white" strokeWidth="2"/>
    <path d="M16 3V21" stroke="white" strokeWidth="2"/>
    {/* Text lines */}
    <path d="M10 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 11H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 14H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Bookmark */}
    <rect x="17" y="2" width="3" height="8" fill="white" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

const FoodIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bowl */}
    <ellipse cx="12" cy="14" rx="9" ry="7" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 10C3 10 6 7 12 7C18 7 21 10 21 10" stroke="white" strokeWidth="2"/>
    {/* Steam */}
    <path d="M8 4V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
    <path d="M12 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
    <path d="M16 4V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
    {/* Garnish */}
    <circle cx="9" cy="14" r="1.5" fill="white"/>
    <circle cx="15" cy="14" r="1.5" fill="white"/>
  </svg>
);

const PrayingHandsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left hand */}
    <path d="M7 3V13L5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 20C5 20 3 17 3 14C3 13 3.5 12 4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Right hand */}
    <path d="M17 3V13L19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19 20C19 20 21 17 21 14C21 13 20.5 12 20 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Prayer beads */}
    <circle cx="12" cy="3" r="2.5" fill="white" stroke="currentColor" strokeWidth="1"/>
    <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="9" r="1" fill="currentColor"/>
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gift box */}
    <rect x="3" y="8" width="18" height="11" rx="1" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Ribbon vertical */}
    <path d="M12 8V19" stroke="white" strokeWidth="2"/>
    {/* Ribbon horizontal */}
    <path d="M3 13.5H21" stroke="white" strokeWidth="2"/>
    {/* Bow loops */}
    <ellipse cx="9" cy="5" rx="3" ry="2" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="15" cy="5" rx="3" ry="2" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    <path d="M9 7V8" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 7V8" stroke="currentColor" strokeWidth="2"/>
    {/* Bow center */}
    <circle cx="12" cy="5" r="1.5" fill="white"/>
  </svg>
);

const HeartGiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Heart shape */}
    <path d="M12 21.5L10.5 20.1C5.2 15.3 1.7 12.1 1.7 8.2C1.7 5 4.2 2.5 7.3 2.5C9.1 2.5 10.8 3.4 12 4.7C13.2 3.4 14.9 2.5 16.7 2.5C19.8 2.5 22.3 5 22.3 8.2C22.3 12.1 18.8 15.3 13.5 20.1L12 21.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    {/* Gift box overlay */}
    <rect x="7" y="10" width="10" height="7" rx="1" fill="white" stroke="currentColor" strokeWidth="1"/>
    <path d="M12 10V17" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 13.5H17" stroke="currentColor" strokeWidth="1"/>
    {/* Shine effect */}
    <path d="M5 5L7 3M8 4L10 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pin body */}
    <path d="M12 2C7.5 2 4 5.5 4 9.5C4 14.5 12 23 12 23C12 23 20 14.5 20 9.5C20 5.5 16.5 2 12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Inner circle */}
    <circle cx="12" cy="9" r="3" fill="white" stroke="currentColor" strokeWidth="1"/>
    {/* Center dot */}
    <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar body */}
    <rect x="2" y="3" width="20" height="19" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Header */}
    <path d="M2 8H22" stroke="white" strokeWidth="2"/>
    {/* Rings */}
    <circle cx="7" cy="5" r="1.5" fill="white"/>
    <circle cx="17" cy="5" r="1.5" fill="white"/>
    <path d="M7 3V7M17 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Days */}
    <circle cx="7" cy="13" r="1.5" fill="white"/>
    <circle cx="12" cy="13" r="1.5" fill="white"/>
    <circle cx="17" cy="13" r="1.5" fill="white"/>
    <circle cx="7" cy="17" r="1.5" fill="white"/>
    <circle cx="12" cy="17" r="1.5" fill="white"/>
    <circle cx="17" cy="17" r="1.5" fill="white"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer star */}
    <path d="M12 1L15.5 8.5L23 9.5L17 14.5L18.5 22L12 18L5.5 22L7 14.5L1 9.5L8.5 8.5L12 1Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    {/* Inner highlight */}
    <path d="M12 4L14.5 9L19 9.5L15.5 12.5L16.5 17L12 14.5L7.5 17L8.5 12.5L5 9.5L9.5 9L12 4Z" fill="white" opacity="0.3"/>
    {/* Shine points */}
    <circle cx="12" cy="3" r="1" fill="white"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Arrow line */}
    <path d="M3 12H21" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    {/* Arrow head */}
    <path d="M12 4L20 12L12 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarBadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge circle */}
    <circle cx="12" cy="12" r="11" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Star shape */}
    <path d="M12 5L14 9.5L19 10L15.5 13L16.5 18L12 15.5L7.5 18L8.5 13L5 10L10 9.5L12 5Z" fill="white"/>
    {/* Star highlight */}
    <path d="M12 7L13.5 10L16.5 10.5L14 12.5L14.5 15.5L12 14L9.5 15.5L10 12.5L7.5 10.5L10.5 10L12 7Z" fill="currentColor" opacity="0.3"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect x="1" y="3" width="22" height="18" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    {/* Play button */}
    <path d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z" fill="white"/>
    {/* Shine effect */}
    <path d="M4 5L6 4" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Camera body */}
    <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    {/* Lens outer */}
    <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
    {/* Lens inner */}
    <circle cx="12" cy="12" r="2.5" fill="white"/>
    {/* Flash dot */}
    <circle cx="18" cy="6" r="1.5" fill="white"/>
    {/* Viewfinder corners */}
    <rect x="4" y="4" width="4" height="4" rx="1" fill="none" stroke="white" strokeWidth="1"/>
    <rect x="16" y="16" width="4" height="4" rx="1" fill="none" stroke="white" strokeWidth="1"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main note body */}
    <path d="M12 1V16C12 18.5 10 20.5 7.5 20.5C5 20.5 3 18.5 3 16C3 13.5 5 11.5 7.5 11.5C8.3 11.5 9 11.7 9.7 12V7.5C9 7.3 8.3 7.2 7.5 7.2C3.4 7.2 0 10.6 0 14.7C0 18.8 3.4 22.2 7.5 22.2C11.6 22.2 15 18.8 15 14.7V7.8C16.6 9 18.6 9.6 20.8 9.6V5.3C18.3 5.3 16.1 3.8 15 1.7V1H12Z" fill="currentColor"/>
    {/* Highlight dots */}
    <circle cx="4" cy="3" r="1" fill="white" opacity="0.5"/>
    <circle cx="20" cy="22" r="1" fill="white" opacity="0.3"/>
  </svg>
);

const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bill body */}
    <rect x="2" y="5" width="20" height="14" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Center circle */}
    <circle cx="12" cy="12" r="4" fill="white" stroke="currentColor" strokeWidth="1.5"/>
    {/* Dollar sign */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    {/* Corner decorations */}
    <circle cx="5" cy="8" r="1" fill="white"/>
    <circle cx="19" cy="8" r="1" fill="white"/>
    <circle cx="5" cy="16" r="1" fill="white"/>
    <circle cx="19" cy="16" r="1" fill="white"/>
  </svg>
);

const BeverageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cup body */}
    <path d="M7 4V7H5V20H19V7H17V4H7Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Liquid level */}
    <path d="M7 11H19" stroke="white" strokeWidth="2"/>
    <path d="M7 15H19" stroke="white" strokeWidth="2"/>
    {/* Straw */}
    <rect x="17" y="6" width="3" height="2" fill="white" rx="0.5"/>
    {/* Bubbles */}
    <circle cx="9" cy="18" r="1" fill="white"/>
    <circle cx="13" cy="17" r="0.75" fill="white"/>
    <circle cx="15" cy="18.5" r="0.5" fill="white"/>
  </svg>
);

const MerchandiseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bag body */}
    <rect x="3" y="7" width="18" height="14" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Handle */}
    <path d="M8 7V5C8 3.5 9 2.5 10.5 2.5H13.5C15 2.5 16 3.5 16 5V7" stroke="currentColor" strokeWidth="2"/>
    {/* Handle connectors */}
    <circle cx="8" cy="7" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="7" r="1.5" fill="currentColor"/>
    {/* Brand label */}
    <rect x="9" y="11" width="6" height="6" rx="1" fill="white"/>
    {/* Tag symbol */}
    <path d="M12 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="0.5" fill="currentColor"/>
  </svg>
);

const MediaPartnerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Screen frame */}
    <rect x="1" y="3" width="22" height="16" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    {/* Screen content */}
    <circle cx="7" cy="11" r="2.5" fill="white"/>
    {/* Mountains */}
    <path d="M1 17L5 13L9 17L13 13L17 17L21 13L23 15V18C23 19.1 22.1 20 21 20H3C1.9 20 1 19.1 1 18V17Z" fill="white"/>
    {/* Signal waves */}
    <path d="M18 7H20M18 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Shine effect */}
    <circle cx="4" cy="5" r="1" fill="white" opacity="0.5"/>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream grid-pattern relative">
      {/* ============================================ */}
      {/* NAVBAR */}
      {/* ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black shadow-hard-md" style={{ backgroundColor: '#132359' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity duration-100"
              >
                <Image
                  src="/logo.svg"
                  alt="RGM VOL.3 - Ramadhan Level UP Bersama Garut Mengaji"
                  width={220}
                  height={66}
                  className="w-auto h-14 md:h-16"
                  priority
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#penyelenggara"
                className="font-headline text-white uppercase tracking-wider text-base hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Penyelenggara
              </a>
              <a
                href="#kegiatan"
                className="font-headline text-white uppercase tracking-wider text-base hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Kegiatan
              </a>
              <a
                href="#taawun"
                className="font-headline text-white uppercase tracking-wider text-base hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Taawun
              </a>
              <a
                href="#asatidz"
                className="font-headline text-white uppercase tracking-wider text-base hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-2"
              >
                Asatidz
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3 border-4 border-black shadow-hard-md font-headline text-white uppercase tracking-wider hover:translate-x-1 hover:shadow-hard-lg transition-all duration-100 push-button"
                style={{ backgroundColor: '#C45C26' }}
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
                onClick={() => setMobileMenuOpen(false)}
                className="block font-headline text-black uppercase tracking-wider text-xl py-2 border-b-2 border-black pb-2"
              >
                Penyelenggara
              </a>
              <a
                href="#kegiatan"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-headline text-black uppercase tracking-wider text-xl py-2 border-b-2 border-black pb-2"
              >
                Kegiatan
              </a>
              <a
                href="#taawun"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-headline text-black uppercase tracking-wider text-xl py-2 border-b-2 border-black pb-2"
              >
                Taawun
              </a>
              <a
                href="#asatidz"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-headline text-black uppercase tracking-wider text-xl py-2 border-b-2 border-black pb-2"
              >
                Asatidz
              </a>
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-4 border-4 border-black shadow-hard-md font-headline text-white uppercase tracking-wider push-button"
                style={{ backgroundColor: '#C45C26' }}
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
                <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none uppercase tracking-tight">
                  <span className="text-black block -rotate-1 inline-block">RAMADHAN</span>
                  <span className="text-black block -rotate-1 inline-block ml-4">LEVEL UP!</span>
                </h1>
                <div className="font-subheadline text-2xl md:text-4xl text-red mt-4 -rotate-1 inline-block">
                  &gt; BERSAMA GARUT MENGAJI
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-xl md:text-2xl leading-snug text-black max-w-xl border-l-4 border-black pl-4">
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
                  href="#taawun"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-4 border-black shadow-hard-sm font-headline text-black uppercase tracking-wider text-lg hover:bg-yellow hover:translate-x-1 hover:shadow-hard-md transition-all duration-100"
                >
                  BER TAAWUN
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
                        <span className="font-headline text-black uppercase text-base">MULAI</span>
                        <span className="font-headline text-red uppercase text-base">SELESAI</span>
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
                      <div className="font-headline text-5xl md:text-6xl">30</div>
                      <div className="font-headline text-black text-sm uppercase mt-1">HARI</div>
                    </div>
                    <div className="bg-yellow border-4 border-black p-4 text-center shadow-hard-sm">
                      <div className="font-headline text-5xl md:text-6xl">6</div>
                      <div className="font-headline text-black text-sm uppercase mt-1">MODUL</div>
                    </div>
                    <div className="bg-violet border-4 border-black p-4 text-center shadow-hard-sm">
                      <div className="font-headline text-5xl md:text-6xl">7</div>
                      <div className="font-headline text-black text-sm uppercase mt-1">USTADZ</div>
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
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-tight mb-4">
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
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-tight mb-4">
              <span className="inline-block bg-red border-4 border-black shadow-hard-sm px-4 py-2 -rotate-1">
                KEGIATAN
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kegiatan 1 */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-sm rotate-2">
                MOD_01
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <MosqueIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                FULL TARAWEH BERJAMA'AH
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
                Sholat Taraweh berjamaah & Belajar Basic Membaca Al-Quran.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-base hover:bg-red hover:text-white hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Detail
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Kegiatan 2 */}
            <div className="bg-violet border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm -rotate-1">
                MOD_02
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <BookIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                KAJIAN RUTIN
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
                Rabu Sore & Sabtu Sore
              </p>
              <p className="font-body text-violet text-sm md:text-base border-t-2 border-black pt-3">
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
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                IFTHAR JAMA'I
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
                Buka Bersama dilanjutkan dengan Sholat Maghrib Berjamaah.
              </p>
            </div>

            {/* Kegiatan 4 */}
            <div className="bg-yellow border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-violet border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm -rotate-2">
                MOD_04
              </div>
              <div className="w-12 h-12 bg-white border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <PrayingHandsIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                ITIKAF 10 HARI AKHIR
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
                Itikaf selama 10 hari bersama 75 Jamaah di Masjid Al-Barru Stasiun Garut.
              </p>
            </div>

            {/* Kegiatan 5 */}
            <div className="bg-violet border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm rotate-1">
                MOD_05
              </div>
              <div className="w-12 h-12 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4">
                <GiftIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                BINGKISAN ASATIDZ
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
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
              <h3 className="font-headline text-2xl uppercase mb-3 text-black">
                TEBAR THR
              </h3>
              <p className="font-body text-black text-lg md:text-xl leading-snug mb-4">
                Tebar THR (Menembus Malam) di sekitar kota Garut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TAAWUN SECTION */}
      {/* ============================================ */}
      <section id="taawun" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-violet border-y-4 border-black relative">
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 halftone opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-tight mb-4">
              <span className="inline-block bg-yellow border-4 border-black shadow-hard-sm px-4 py-2 -rotate-1">
                TAAWUN
              </span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-white max-w-3xl mx-auto mt-6">
              Mari berkontribusi bersama untuk kelancaran program Ramadhan Level UP!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Taawun 1 - MONEY VALUE */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-sm rotate-2">
                TAW_01
              </div>
              <div className="w-16 h-16 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4 mx-auto">
                <MoneyIcon className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black text-center">
                MONEY VALUE
              </h3>
              <p className="font-body text-black text-base md:text-lg leading-snug mb-4 text-center">
                Mendukung program Ramadhan Level UP! Bersama Garut Mengaji secara Financial.
              </p>
              <a
                href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20ingin%20berkontribusi%20Financial%20untuk%20program%20Ramadhan%20Level%20UP.."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-sm hover:bg-red hover:text-white hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Kontribusi
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Taawun 2 - FOOD AND BEVERAGE */}
            <div className="bg-yellow border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-violet border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm -rotate-1">
                TAW_02
              </div>
              <div className="w-16 h-16 bg-white border-4 border-black shadow-hard-sm flex items-center justify-center mb-4 mx-auto">
                <BeverageIcon className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black text-center">
                FOOD AND BEVERAGE
              </h3>
              <p className="font-body text-black text-base md:text-lg leading-snug mb-4 text-center">
                Berkontribusi dalam bentuk makanan atau takjil untuk ifthar dan berbuka.
              </p>
              <a
                href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20ingin%20berkontribusi%20Food%20%26%20Beverage%20untuk%20program%20Ramadhan%20Level%20UP.."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-sm hover:bg-red hover:text-white hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Kontribusi
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Taawun 3 - MERCHANDISE */}
            <div className="bg-white border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm rotate-3">
                TAW_03
              </div>
              <div className="w-16 h-16 bg-cream border-4 border-black shadow-hard-sm flex items-center justify-center mb-4 mx-auto">
                <MerchandiseIcon className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black text-center">
                MERCHANDISE
              </h3>
              <p className="font-body text-black text-base md:text-lg leading-snug mb-4 text-center">
                Berkontribusi dalam bentuk produk atau jasa yang bermanfaat bagi peserta program.
              </p>
              <a
                href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20ingin%20berkontribusi%20Merchandise%20untuk%20program%20Ramadhan%20Level%20UP.."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-sm hover:bg-red hover:text-white hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Kontribusi
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Taawun 4 - MEDIA PARTNER */}
            <div className="bg-yellow border-4 border-black shadow-hard-md p-6 lift-effect relative group">
              <div className="absolute -top-4 left-4 bg-red border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-white uppercase text-xs -rotate-2">
                TAW_04
              </div>
              <div className="w-16 h-16 bg-white border-4 border-black shadow-hard-sm flex items-center justify-center mb-4 mx-auto">
                <MediaPartnerIcon className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-headline text-xl uppercase mb-3 text-black text-center">
                MEDIA PARTNER
              </h3>
              <p className="font-body text-black text-base md:text-lg leading-snug mb-4 text-center">
                Mempromosikan program Ramadhan Level UP! Bersama Garut Mengaji kepada khalayak luas.
              </p>
              <a
                href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20ingin%20menjadi%20Media%20Partner%20untuk%20program%20Ramadhan%20Level%20UP.."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-cream border-4 border-black shadow-hard-sm font-headline text-black uppercase text-sm hover:bg-red hover:text-white hover:translate-x-1 hover:shadow-hard-md transition-all duration-100 push-button"
              >
                Kontribusi
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
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
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-tight mb-4">
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
                <p className="font-body text-black flex-1 text-base md:text-lg">
                  {asatidz}
                </p>
                <div className="bg-yellow border-4 border-black shadow-hard-sm px-3 py-1 font-headline text-black uppercase text-sm rotate-2 group-hover:rotate-0 transition-transform">
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
            <h2 className="font-headline text-5xl md:text-7xl uppercase tracking-tight text-white">
              MULAI LEVEL UP!
              <br />
              <span className="text-red">SEKARANG</span>
            </h2>

            <p className="font-body text-2xl md:text-3xl text-cream max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk meningkatkan kualitas ibadah di bulan Ramadhan tahun ini.
            </p>

            <a
              href="https://wa.me/6285353793527?text=Bismillahirahmanirrahim..Assalamualaikum%2C%20Afwan%20Minji..%20Ana%20berminat%20daftar%20Program%20Tahsin%20Ramadhan%20bersama%20Garut%20Mengaji.."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-red border-4 border-black shadow-hard-xl font-headline text-white uppercase tracking-wider text-2xl hover:translate-x-2 hover:shadow-hard-massive transition-all duration-100 push-button"
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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-black relative" style={{ backgroundColor: '#132359' }}>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="RGM VOL.3 - Ramadhan Level UP Bersama Garut Mengaji"
                  width={250}
                  height={75}
                  className="w-auto h-16 md:h-20"
                />
              </div>
              <p className="font-body text-white text-base">
                Ramadhan Level UP! Bersama Garut Mengaji
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-headline text-xl uppercase mb-4 text-white">NAVIGASI</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#penyelenggara"
                    className="font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./penyelenggara
                  </a>
                </li>
                <li>
                  <a
                    href="#kegiatan"
                    className="font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./kegiatan
                  </a>
                </li>
                <li>
                  <a
                    href="#taawun"
                    className="font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./taawun
                  </a>
                </li>
                <li>
                  <a
                    href="#asatidz"
                    className="font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    ./asatidz
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-headline text-xl uppercase mb-4 text-white">SOCIAL MEDIA</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.youtube.com/@garutmengaji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/garutmengaji/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@garutmengaji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-headline text-white hover:bg-white hover:text-black hover:px-2 hover:shadow-hard-sm transition-all duration-100 py-1 inline-block border-b-2 border-transparent hover:border-black"
                  >
                    <TiktokIcon className="w-5 h-5" />
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-headline text-xl uppercase mb-4 text-white">LOKASI</h4>
              <p className="font-bold text-white text-sm mb-1">
                Masjid Al-Barru Stasiun Garut
              </p>
              <p className="font-body text-white text-base">
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
                <span className="font-body text-white text-sm uppercase">
                  START FOR LEVEL UP
                </span>
              </div>
              <p className="font-body text-white text-base">
                © 2026 RGM VOL.3 - Garut Mengaji. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
