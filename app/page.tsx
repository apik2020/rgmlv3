"use client";

import { useState } from "react";
import Image from "next/image";

// Pixel Art Style SVG Icons
const MosqueIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main building - pixel style */}
    <rect x="3" y="12" width="18" height="9" fill="currentColor"/>
    {/* Pixel dome */}
    <rect x="6" y="8" width="12" height="4" fill="currentColor"/>
    <rect x="8" y="6" width="8" height="2" fill="currentColor"/>
    <rect x="10" y="4" width="4" height="2" fill="currentColor"/>
    <rect x="11" y="3" width="2" height="1" fill="currentColor"/>
    {/* Minaret left */}
    <rect x="2" y="8" width="2" height="13" fill="currentColor"/>
    <rect x="1" y="6" width="4" height="2" fill="currentColor"/>
    {/* Minaret right */}
    <rect x="20" y="8" width="2" height="13" fill="currentColor"/>
    <rect x="19" y="6" width="4" height="2" fill="currentColor"/>
    {/* Windows */}
    <rect x="9" y="14" width="2" height="3" fill="white"/>
    <rect x="13" y="14" width="2" height="3" fill="white"/>
    {/* Door */}
    <rect x="10" y="16" width="4" height="5" fill="white"/>
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Book cover - pixel style */}
    <rect x="4" y="3" width="16" height="18" fill="currentColor"/>
    {/* Book spine */}
    <rect x="8" y="3" width="1" height="18" fill="white"/>
    <rect x="15" y="3" width="1" height="18" fill="white"/>
    {/* Text lines */}
    <rect x="10" y="8" width="4" height="1" fill="white"/>
    <rect x="10" y="11" width="4" height="1" fill="white"/>
    <rect x="10" y="14" width="4" height="1" fill="white"/>
    {/* Bookmark */}
    <rect x="17" y="2" width="3" height="8" fill="white"/>
  </svg>
);

const FoodIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bowl - pixel style */}
    <rect x="3" y="12" width="18" height="8" fill="currentColor"/>
    <rect x="2" y="10" width="20" height="2" fill="currentColor"/>
    {/* Steam - pixel blocks */}
    <rect x="8" y="4" width="2" height="2" fill="currentColor" opacity="0.7"/>
    <rect x="11" y="3" width="2" height="3" fill="currentColor" opacity="0.7"/>
    <rect x="14" y="4" width="2" height="2" fill="currentColor" opacity="0.7"/>
    {/* Garnish */}
    <rect x="9" y="14" width="2" height="2" fill="white"/>
    <rect x="13" y="14" width="2" height="2" fill="white"/>
  </svg>
);

const PrayingHandsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left hand - pixel style */}
    <rect x="5" y="2" width="3" height="14" fill="currentColor"/>
    <rect x="3" y="16" width="4" height="4" fill="currentColor"/>
    {/* Right hand */}
    <rect x="16" y="2" width="3" height="14" fill="currentColor"/>
    <rect x="17" y="16" width="4" height="4" fill="currentColor"/>
    {/* Prayer beads - pixel */}
    <rect x="10" y="1" width="4" height="3" fill="white" stroke="currentColor" strokeWidth="1"/>
    <rect x="11" y="5" width="2" height="2" fill="currentColor"/>
    <rect x="11" y="8" width="2" height="2" fill="currentColor"/>
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gift box - pixel style */}
    <rect x="3" y="8" width="18" height="11" fill="currentColor"/>
    {/* Ribbon vertical */}
    <rect x="11" y="8" width="2" height="11" fill="white"/>
    {/* Ribbon horizontal */}
    <rect x="3" y="13" width="18" height="2" fill="white"/>
    {/* Bow loops - pixel */}
    <rect x="6" y="4" width="6" height="4" fill="currentColor"/>
    <rect x="12" y="4" width="6" height="4" fill="currentColor"/>
    {/* Bow center */}
    <rect x="11" y="4" width="2" height="2" fill="white"/>
  </svg>
);

const HeartGiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Heart shape - pixel style */}
    <rect x="2" y="8" width="4" height="4" fill="currentColor"/>
    <rect x="1" y="12" width="5" height="4" fill="currentColor"/>
    <rect x="18" y="8" width="4" height="4" fill="currentColor"/>
    <rect x="18" y="12" width="5" height="4" fill="currentColor"/>
    <rect x="6" y="4" width="12" height="8" fill="currentColor"/>
    <rect x="8" y="2" width="8" height="2" fill="currentColor"/>
    <rect x="3" y="16" width="18" height="6" fill="currentColor"/>
    {/* Gift box overlay */}
    <rect x="7" y="10" width="10" height="7" fill="white"/>
    <rect x="11" y="10" width="2" height="7" fill="currentColor"/>
    <rect x="7" y="13" width="10" height="1" fill="currentColor"/>
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pin body - pixel style */}
    <rect x="9" y="2" width="6" height="4" fill="currentColor"/>
    <rect x="7" y="6" width="10" height="4" fill="currentColor"/>
    <rect x="5" y="10" width="14" height="6" fill="currentColor"/>
    <rect x="7" y="16" width="10" height="4" fill="currentColor"/>
    <rect x="9" y="20" width="6" height="3" fill="currentColor"/>
    {/* Inner */}
    <rect x="10" y="8" width="4" height="4" fill="white"/>
    {/* Center dot */}
    <rect x="11" y="9" width="2" height="2" fill="currentColor"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar body - pixel style */}
    <rect x="2" y="5" width="20" height="17" fill="currentColor"/>
    {/* Header */}
    <rect x="2" y="5" width="20" height="5" fill="white"/>
    {/* Rings */}
    <rect x="6" y="2" width="2" height="3" fill="white"/>
    <rect x="16" y="2" width="2" height="3" fill="white"/>
    {/* Days - pixel */}
    <rect x="6" y="12" width="2" height="2" fill="white"/>
    <rect x="11" y="12" width="2" height="2" fill="white"/>
    <rect x="16" y="12" width="2" height="2" fill="white"/>
    <rect x="6" y="16" width="2" height="2" fill="white"/>
    <rect x="11" y="16" width="2" height="2" fill="white"/>
    <rect x="16" y="16" width="2" height="2" fill="white"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pixel star */}
    <rect x="11" y="1" width="2" height="3" fill="currentColor"/>
    <rect x="9" y="4" width="6" height="2" fill="currentColor"/>
    <rect x="7" y="6" width="10" height="2" fill="currentColor"/>
    <rect x="1" y="8" width="22" height="3" fill="currentColor"/>
    <rect x="4" y="11" width="16" height="2" fill="currentColor"/>
    <rect x="7" y="13" width="10" height="2" fill="currentColor"/>
    <rect x="10" y="15" width="4" height="3" fill="currentColor"/>
    <rect x="11" y="18" width="2" height="4" fill="currentColor"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Arrow - pixel style */}
    <rect x="2" y="11" width="16" height="2" fill="currentColor"/>
    <rect x="14" y="5" width="2" height="14" fill="currentColor"/>
    <rect x="16" y="3" width="4" height="2" fill="currentColor"/>
    <rect x="16" y="19" width="4" height="2" fill="currentColor"/>
    <rect x="18" y="5" width="2" height="4" fill="currentColor"/>
    <rect x="18" y="15" width="2" height="4" fill="currentColor"/>
    <rect x="20" y="9" width="2" height="6" fill="currentColor"/>
  </svg>
);

const StarBadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge - pixel circle */}
    <rect x="2" y="2" width="20" height="20" fill="currentColor"/>
    <rect x="1" y="4" width="22" height="16" fill="currentColor"/>
    {/* Star */}
    <rect x="11" y="5" width="2" height="2" fill="white"/>
    <rect x="9" y="7" width="6" height="2" fill="white"/>
    <rect x="7" y="9" width="10" height="2" fill="white"/>
    <rect x="6" y="11" width="12" height="2" fill="white"/>
    <rect x="8" y="13" width="8" height="2" fill="white"/>
    <rect x="10" y="15" width="4" height="2" fill="white"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background - pixel style */}
    <rect x="1" y="3" width="22" height="18" fill="currentColor"/>
    {/* Play button - pixel */}
    <rect x="9" y="7" width="8" height="10" fill="white"/>
    <rect x="11" y="9" width="2" height="6" fill="currentColor"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Camera body - pixel */}
    <rect x="1" y="1" width="22" height="22" fill="currentColor"/>
    {/* Lens */}
    <rect x="8" y="8" width="8" height="8" fill="white" stroke="white" strokeWidth="2"/>
    <rect x="11" y="11" width="2" height="2" fill="currentColor"/>
    {/* Flash */}
    <rect x="17" y="5" width="2" height="2" fill="white"/>
    {/* Corners */}
    <rect x="4" y="4" width="4" height="4" fill="none" stroke="white" strokeWidth="1"/>
    <rect x="16" y="16" width="4" height="4" fill="none" stroke="white" strokeWidth="1"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Note - pixel style */}
    <rect x="10" y="1" width="4" height="20" fill="currentColor"/>
    <rect x="6" y="18" width="8" height="4" fill="currentColor"/>
    <rect x="14" y="5" width="2" height="10" fill="currentColor"/>
    <rect x="16" y="7" width="4" height="2" fill="currentColor"/>
  </svg>
);

const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bill - pixel style */}
    <rect x="2" y="5" width="20" height="14" fill="currentColor"/>
    {/* Center */}
    <rect x="9" y="9" width="6" height="6" fill="white"/>
    <rect x="11" y="11" width="2" height="2" fill="currentColor"/>
    {/* Corner decorations */}
    <rect x="5" y="8" width="2" height="2" fill="white"/>
    <rect x="17" y="8" width="2" height="2" fill="white"/>
    <rect x="5" y="14" width="2" height="2" fill="white"/>
    <rect x="17" y="14" width="2" height="2" fill="white"/>
  </svg>
);

const BeverageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cup - pixel style */}
    <rect x="5" y="7" width="14" height="13" fill="currentColor"/>
    {/* Liquid */}
    <rect x="5" y="11" width="14" height="2" fill="white"/>
    <rect x="5" y="15" width="14" height="2" fill="white"/>
    {/* Straw */}
    <rect x="17" y="6" width="3" height="2" fill="white"/>
    {/* Bubbles */}
    <rect x="9" y="18" width="2" height="2" fill="white"/>
    <rect x="13" y="17" width="1" height="1" fill="white"/>
  </svg>
);

const MerchandiseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bag - pixel style */}
    <rect x="3" y="7" width="18" height="14" fill="currentColor"/>
    {/* Handle */}
    <rect x="8" y="4" width="8" height="3" fill="currentColor"/>
    <rect x="7" y="7" width="2" height="2" fill="currentColor"/>
    <rect x="15" y="7" width="2" height="2" fill="currentColor"/>
    {/* Label */}
    <rect x="9" y="11" width="6" height="6" fill="white"/>
    <rect x="11" y="13" width="2" height="2" fill="currentColor"/>
  </svg>
);

const MediaPartnerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Screen - pixel style */}
    <rect x="1" y="3" width="22" height="16" fill="currentColor"/>
    {/* Content */}
    <rect x="5" y="9" width="4" height="4" fill="white"/>
    {/* Mountains */}
    <rect x="1" y="17" width="6" height="3" fill="white"/>
    <rect x="7" y="14" width="4" height="6" fill="white"/>
    <rect x="11" y="17" width="6" height="3" fill="white"/>
    <rect x="15" y="13" width="4" height="7" fill="white"/>
    <rect x="19" y="16" width="4" height="4" fill="white"/>
    {/* Signal */}
    <rect x="18" y="7" width="2" height="2" fill="white"/>
    <rect x="18" y="10" width="3" height="2" fill="white"/>
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
                style={{ backgroundColor: '#E65D1B' }}
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
                style={{ backgroundColor: '#E65D1B' }}
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
                <h1 className="font-headline text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none uppercase tracking-tight">
                  <span className="text-black block -rotate-1 inline-block">RAMADHAN</span>
                  <span className="block -rotate-1 inline-block ml-4">
                    <span style={{ color: '#132359' }} className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">LEVEL UP</span>
                    <span className="inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{
                      color: '#E65D1B',
                      border: '3px dashed #E65D1B',
                      padding: '2px 8px',
                      borderRadius: '0',
                      transform: 'rotate(-8deg)',
                      boxShadow: '2px 2px 0 #132359',
                      marginLeft: '8px',
                      background: 'rgba(196, 92, 38, 0.1)'
                    }}>Vol.3</span>
                  </span>
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

            {/* Right - Hero Illustration Card */}
            <div className="relative">
              {/* Floating Elements - Top */}
              <div className="absolute -top-8 -right-4 bg-red border-4 border-black shadow-hard-xl p-3 font-headline text-white uppercase text-xs rotate-6 animate-bounce-subtle hidden md:block z-10">
                GRATIS!
              </div>
              <div className="absolute -top-4 -left-8 bg-yellow border-4 border-black shadow-hard-xl p-3 font-headline text-black uppercase text-xs -rotate-3 animate-bounce-subtle hidden lg:block z-10" style={{ animationDelay: '0.5s' }}>
                TERBATAS
              </div>

              {/* Main Illustration Card */}
              <div className="bg-white border-4 border-black shadow-hard-xl p-6 md:p-8 lift-effect relative">
                {/* Badge */}
                <div className="absolute -top-4 -left-4 bg-violet border-4 border-black shadow-hard-md px-4 py-2 font-headline text-black uppercase text-sm rotate-2">
                  PROGRAM VIP
                </div>

                <div className="space-y-5 mt-4">
                  {/* Hero Image Placeholder - Mosque/Illustration */}
                  <div className="bg-cream border-4 border-black p-6 shadow-hard-sm relative overflow-hidden">
                    {/* Decorative Background Pattern - Pixel */}
                    <div className="absolute inset-0 opacity-15">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          repeating-linear-gradient(0deg, transparent, transparent 7px, #000 7px, #000 8px),
                          repeating-linear-gradient(90deg, transparent, transparent 7px, #000 7px, #000 8px)
                        `,
                        backgroundSize: '16px 16px'
                      }}></div>
                    </div>

                    {/* Pixel Art Mosque - Large */}
                    <div className="relative flex justify-center mb-4">
                      <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Base/Ground - Pixel blocks */}
                        <rect x="10" y="150" width="180" height="10" fill="currentColor"/>

                        {/* Main Building - Pixel style */}
                        <rect x="40" y="90" width="120" height="60" fill="currentColor"/>

                        {/* Pixel Dome - Stepped blocks */}
                        <rect x="60" y="75" width="80" height="15" fill="currentColor"/>
                        <rect x="70" y="65" width="60" height="10" fill="currentColor"/>
                        <rect x="80" y="55" width="40" height="10" fill="currentColor"/>
                        <rect x="90" y="48" width="20" height="7" fill="currentColor"/>
                        {/* Pixel Crescent on top */}
                        <rect x="96" y="38" width="8" height="10" fill="currentColor"/>
                        <rect x="93" y="35" width="4" height="4" fill="white"/>

                        {/* Left Minaret - Pixel blocks */}
                        <rect x="20" y="60" width="20" height="90" fill="currentColor"/>
                        {/* Left Minaret Dome - Pixel */}
                        <rect x="18" y="50" width="24" height="10" fill="currentColor"/>
                        <rect x="22" y="45" width="16" height="5" fill="currentColor"/>
                        {/* Left Minaret Crescent - Pixel */}
                        <rect x="26" y="38" width="8" height="7" fill="currentColor"/>
                        <rect x="24" y="36" width="3" height="3" fill="white"/>

                        {/* Right Minaret - Pixel blocks */}
                        <rect x="160" y="60" width="20" height="90" fill="currentColor"/>
                        {/* Right Minaret Dome - Pixel */}
                        <rect x="158" y="50" width="24" height="10" fill="currentColor"/>
                        <rect x="162" y="45" width="16" height="5" fill="currentColor"/>
                        {/* Right Minaret Crescent - Pixel */}
                        <rect x="166" y="38" width="8" height="7" fill="currentColor"/>
                        <rect x="164" y="36" width="3" height="3" fill="white"/>

                        {/* Main Door - Pixel arch */}
                        <rect x="80" y="110" width="40" height="40" fill="white"/>
                        <rect x="85" y="110" width="30" height="15" fill="white"/>
                        <rect x="90" y="105" width="20" height="5" fill="white"/>
                        {/* Door opening */}
                        <rect x="93" y="125" width="14" height="25" fill="currentColor"/>

                        {/* Left Window - Pixel */}
                        <rect x="50" y="100" width="20" height="20" fill="white"/>
                        <rect x="56" y="106" width="8" height="8" fill="currentColor"/>

                        {/* Right Window - Pixel */}
                        <rect x="130" y="100" width="20" height="20" fill="white"/>
                        <rect x="136" y="106" width="8" height="8" fill="currentColor"/>

                        {/* Decorative Details - Pixel pattern */}
                        <rect x="45" y="85" width="110" height="5" fill="white"/>
                        <rect x="50" y="87" width="100" height="2" fill="currentColor"/>
                      </svg>
                    </div>

                    {/* Program Title */}
                    <div className="text-center">
                      <h3 className="font-headline text-2xl md:text-3xl uppercase text-black mb-2">
                        RAMADHAN LEVEL UP
                      </h3>
                      <p className="font-body text-red text-lg md:text-xl font-semibold">
                        Vol.3 Bersama Garut Mengaji
                      </p>
                    </div>
                  </div>

                  {/* Countdown/Urgency Banner */}
                  <div className="bg-red border-4 border-black p-4 shadow-hard-sm relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <StarIcon className="w-5 h-5 text-white animate-pulse-slow" />
                    </div>
                    <div className="text-center">
                      <p className="font-headline text-white uppercase text-xs mb-1">PENDAFTARAN DIBUKA</p>
                      <p className="font-headline text-white text-xl md:text-2xl font-bold">
                        QUOTA TERBATAS 75 JAMAAH
                      </p>
                    </div>
                  </div>

                  {/* Social Proof - Participants */}
                  <div className="bg-yellow border-4 border-black p-4 shadow-hard-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-headline text-black uppercase text-xs">SUDAH JOIN</p>
                        <p className="font-headline text-black text-2xl md:text-3xl font-bold">
                          24<span className="text-base">/75</span>
                        </p>
                      </div>
                      {/* Avatar Stack */}
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 bg-cream border-3 border-black flex items-center justify-center text-black font-headline text-sm">1</div>
                        <div className="w-10 h-10 bg-red border-3 border-black flex items-center justify-center text-white font-headline text-sm">2</div>
                        <div className="w-10 h-10 bg-violet border-3 border-black flex items-center justify-center text-black font-headline text-sm">3</div>
                        <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center text-white font-headline text-xs">+21</div>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-3 bg-white border-3 border-black h-4 overflow-hidden">
                      <div className="bg-red h-full" style={{ width: '32%' }}></div>
                    </div>
                    <p className="font-body text-black text-xs mt-2 text-center">
                      Tinggal <span className="font-headline text-red font-bold">51 slot lagi!</span>
                    </p>
                  </div>

                  {/* Quick Benefits */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-cream border-4 border-black p-3 shadow-hard-sm text-center">
                      <BookIcon className="w-8 h-8 mx-auto mb-2 text-black" />
                      <p className="font-headline text-black text-xs uppercase">Kelas Tahsin</p>
                    </div>
                    <div className="bg-violet border-4 border-black p-3 shadow-hard-sm text-center">
                      <FoodIcon className="w-8 h-8 mx-auto mb-2 text-black" />
                      <p className="font-headline text-black text-xs uppercase">Gratis Ifthar</p>
                    </div>
                  </div>

                  {/* Location Mini */}
                  <div className="bg-cream border-4 border-black p-3 shadow-hard-sm">
                    <div className="flex items-center">
                      <LocationIcon className="w-6 h-6 mr-3 flex-shrink-0 text-black" />
                      <div>
                        <p className="font-headline text-black text-xs uppercase">Lokasi</p>
                        <p className="font-body text-black text-sm">Masjid Al-Barru Stasiun</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black shadow-hard-xl p-3 font-headline text-black uppercase text-xs -rotate-2 animate-bounce-subtle hidden md:flex items-center gap-2 z-10" style={{ animationDelay: '1s' }}>
                <span>TA'AWUN JUGA</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Handshake/Salam Icon */}
                  <path d="M12 3L3 9V15H8V10H16V15H21V9L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 15V21H16V15" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="6" r="2" fill="white"/>
                  {/* Peace symbol */}
                  <path d="M10 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
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
      <section id="cta" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-black relative" style={{ backgroundColor: '#135E37' }}>
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

            <p className="font-body text-2xl md:text-3xl max-w-2xl mx-auto" style={{ color: '#FDF6E3' }}>
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

            <p className="font-bold text-sm" style={{ color: '#FDF6E3' }}>
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
