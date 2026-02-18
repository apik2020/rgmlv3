"use client";

import { useState, useEffect } from "react";

// Typewriter text component for character-by-character animation
function TypewriterText({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <>
      {displayText}
      <span className="cursor-block"></span>
    </>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedCommand, setClickedCommand] = useState<string | null>(null);

  // Handle command click interaction
  const handleCommandClick = (command: string) => {
    setClickedCommand(command);
    setTimeout(() => setClickedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] relative">
      {/* ============================================ */}
      {/* NAVBAR */}
      {/* ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="font-jetbrains text-lg md:text-xl font-bold text-[var(--color-primary)] terminal-glow tracking-wider"
              >
                &gt; RGM_VOL.3
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#penyelenggara"
                className="font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
              >
                PENYELENGGARA
              </a>
              <a
                href="#kegiatan"
                className="font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
              >
                KEGIATAN
              </a>
              <a
                href="#asatidz"
                className="font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
              >
                ASATIDZ
              </a>
              <a
                href="#cta"
                className="terminal-btn text-sm"
              >
                MULAI GRATIS
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[var(--color-primary)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)]">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#penyelenggara"
                className="block font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive py-2"
              >
                PENYELENGGARA
              </a>
              <a
                href="#kegiatan"
                className="block font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive py-2"
              >
                KEGIATAN
              </a>
              <a
                href="#asatidz"
                className="block font-jetbrains text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive py-2"
              >
                ASATIDZ
              </a>
              <a
                href="#cta"
                className="block terminal-btn text-sm text-center py-3"
              >
                MULAI GRATIS
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* System Status */}
              <div className="font-jetbrains text-xs space-x-4">
                <span className="status-ok">SYSTEM ONLINE</span>
                <span className="text-terminal-muted">RAMADHAN_MODE=ACTIVE</span>
              </div>

              {/* ASCII Art Logo - Enhanced with glitch */}
              <div className="ascii-art glitch text-[10px] md:text-xs text-[var(--color-primary)]">
{`    ____    __    __   __    __   _______   ██████╗ ███████╗
   / __ \\  / /   / /  / /   / /  |  _____\\ ██╔══██╗██╔════╝
  / /_/ / / /   / /  / /___/ /   | |____  ██╔████╔╝███████╗
 / ____/ /_/   /_/  /_____/_/    |______\\ ██╔══██╗╚════██║
/_/                                       ██████║███████║
     ██████╗ ██████╗ ███████╗         ╚══════╝╚══════╝
    ██╔════╝██╔═══██╗██╔════╝
    ██║    ██║   ██║███████╗
    ██║    ██║   ██║██╔════╝
    ╚██████╗╚██████╔╝███████╗
     ╚═════╝ ╚═════╝ ╚══════╝

     VOL.3 // RAMADHAN_LEVEL_UP`}
              </div>

              {/* Headline with typewriter effect */}
              <div className="space-y-2">
                <h1 className="font-jetbrains text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
                  <span className="text-[var(--color-primary)] terminal-glow">
                    <TypewriterText text="RAMADHAN" delay={100} />
                  </span>
                  <br />
                  <span className="text-[var(--color-foreground)]">LEVEL UP!</span>
                </h1>
                <div className="font-jetbrains text-xl md:text-2xl text-[var(--color-secondary)] terminal-glow-amber">
                  &gt; BERSAMA GARUT MANGAJI
                </div>
              </div>

              {/* Description */}
              <p className="font-jetbrains text-sm md:text-base text-[var(--color-muted-foreground)] leading-relaxed max-w-xl border-l-2 border-[var(--color-border)] pl-4 cursor-underscore">
                Ramadhan Level UP mengajak kita menjadikan bulan suci sebagai momen istimewa untuk konsisten beribadah dan capai peningkatan diri secara menyeluruh.
              </p>

              {/* Command input simulation */}
              <div
                className="font-jetbrains text-sm bg-[var(--color-muted)] border border-[var(--color-border)] p-3 cursor-pointer hover:border-[var(--color-primary)] transition-all terminal-prompt-interactive"
                onClick={() => handleCommandClick("./initiate_ramadhan.sh --level-up")}
              >
                <span className="text-[var(--color-muted-foreground)]">
                  {clickedCommand || "user@rgm:~$ ./initiate_ramadhan.sh --level-up"}
                </span>
                {clickedCommand && (
                  <span className="status-ok-inline ml-2">EXECUTING...</span>
                )}
                <span className="cursor-block ml-1"></span>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="terminal-btn-primary inline-flex items-center justify-center px-8 py-4 font-jetbrains font-bold uppercase tracking-wider text-sm group"
                >
                  INITIATE_LEVEL_UP
                  <span className="cursor-blink ml-2">█</span>
                </a>
              </div>
            </div>

            {/* Right - Terminal Window */}
            <div className="terminal-window p-4 md:p-6">
              <div className="terminal-titlebar mb-4">
                RGM_EVENT_INFO.TXT
              </div>

              <div className="space-y-6 font-jetbrains text-sm">
                {/* Date Range */}
                <div>
                  <div className="text-xs text-terminal-muted mb-2 status-ok-inline">
                    EVENT_DURATION
                  </div>
                  <div className="border border-[var(--color-border)] p-3 bg-[var(--color-muted)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[var(--color-foreground)]">START</span>
                      <span className="text-[var(--color-secondary)]">END</span>
                    </div>
                    <div className="flex items-center justify-between text-lg font-bold">
                      <div className="text-[var(--color-foreground)]">18 FEB 2026</div>
                      <div className="text-[var(--color-muted-foreground)]">—&gt;</div>
                      <div className="text-[var(--color-foreground)]">20 MAR 2026</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats with animated progress bars */}
                <div>
                  <div className="text-xs text-terminal-muted mb-2 status-ok-inline">
                    STATISTICS_LOADED
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>RAMADHAN_DAYS</span>
                        <span className="text-[var(--color-primary)]">30/30</span>
                      </div>
                      <div className="terminal-progress">
                        <div className="terminal-progress-bar" style={{width: "100%"}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>KEGIATAN_MODULES</span>
                        <span className="text-[var(--color-secondary)]">6/6</span>
                      </div>
                      <div className="terminal-progress">
                        <div className="terminal-progress-bar amber" style={{width: "100%"}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>ASATIDZ_COUNT</span>
                        <span className="text-[var(--color-primary)]">7</span>
                      </div>
                      <div className="terminal-progress">
                        <div className="terminal-progress-bar" style={{width: "100%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Command List */}
                <div>
                  <div className="text-xs text-terminal-muted mb-2 status-info-inline">
                    MODULES_ENABLED
                  </div>
                  <div className="space-y-1 text-xs">
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("taraweh_basic_quran.exe --active")}
                    >
                      taraweh_basic_quran.exe --active
                      {clickedCommand === "taraweh_basic_quran.exe --active" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("kajian_routine.exe --wed-sat")}
                    >
                      kajian_routine.exe --wed-sat
                      {clickedCommand === "kajian_routine.exe --wed-sat" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("ifthar_jamai.exe --maghrib")}
                    >
                      ifthar_jamai.exe --maghrib
                      {clickedCommand === "ifthar_jamai.exe --maghrib" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("itikaf_10h.exe --last-days")}
                    >
                      itikaf_10h.exe --last-days
                      {clickedCommand === "itikaf_10h.exe --last-days" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("bingkisan_asatidz.exe --distribute")}
                    >
                      bingkisan_asatidz.exe --distribute
                      {clickedCommand === "bingkisan_asatidz.exe --distribute" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                    <div
                      className="terminal-prompt cursor-pointer hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => handleCommandClick("tebar_thr.exe --night-mode")}
                    >
                      tebar_thr.exe --night-mode
                      {clickedCommand === "tebar_thr.exe --night-mode" && (
                        <span className="status-ok-inline ml-2">[RUNNING]</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="border border-[var(--color-border)] p-3">
                  <div className="text-xs text-terminal-muted mb-1 status-warn-inline">
                    LOCATION
                  </div>
                  <div className="text-[var(--color-foreground)]">
                    masjid_al-barru@garut:~$ ./show_location
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">
                    &gt;&gt; Stasiun Garut, Jawa Barat
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
      <section id="penyelenggara" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-jetbrains text-2xl md:text-4xl font-bold mb-4 uppercase">
              <span className="text-[var(--color-primary)] terminal-glow">&gt; PENYELENGGARAAN</span>
            </h2>
            <hr className="terminal-divider-solid w-48 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Penyelenggara */}
            <div className="terminal-card p-6">
              <div className="flex items-start mb-4">
                <div className="text-[var(--color-primary)] text-xl mr-3">▪</div>
                <div className="flex-1">
                  <div className="status-ok text-sm mb-2">PENYELENGGARA</div>
                  <p className="font-jetbrains text-sm text-[var(--color-muted-foreground)]">
                    Garut Mengaji X DKM Masjid Al-Barru Stasiun Garut
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Lokasi */}
            <div className="terminal-card terminal-card-amber p-6">
              <div className="flex items-start mb-4">
                <div className="text-[var(--color-secondary)] text-xl mr-3">▪</div>
                <div className="flex-1">
                  <div className="status-info text-sm mb-2">LOKASI</div>
                  <p className="font-jetbrains text-sm text-[var(--color-muted-foreground)]">
                    Masjid Al-Barru Stasiun Garut
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Waktu */}
            <div className="terminal-card p-6">
              <div className="flex items-start mb-4">
                <div className="text-[var(--color-primary)] text-xl mr-3">▪</div>
                <div className="flex-1">
                  <div className="status-ok text-sm mb-2">WAKTU_KEGIATAN</div>
                  <p className="font-jetbrains text-sm text-[var(--color-muted-foreground)] mb-2">
                    18 Feb - 20 Mar 2026
                  </p>
                  <p className="font-jetbrains text-xs text-[var(--color-secondary)]">
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
      <section id="kegiatan" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-jetbrains text-2xl md:text-4xl font-bold mb-4 uppercase">
              <span className="text-[var(--color-primary)] terminal-glow">&gt; KEGIATAN</span>
            </h2>
            <hr className="terminal-divider-solid w-48 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kegiatan 1 */}
            <div className="terminal-card p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-primary)] text-4xl mb-4">☪</div>
              <div className="status-ok text-sm mb-3">MODULE_01</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                FULL TARAWEH BERJAMA'AH
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Sholat Taraweh berjamaah & Belajar Basic Membaca Al-Quran.
              </p>
              <div
                className="font-jetbrains text-xs text-terminal-muted cursor-pointer hover:text-[var(--color-primary)] transition-colors terminal-prompt"
                onClick={() => handleCommandClick("$ taraweh.exe --start")}
              >
                $ taraweh.exe --start
              </div>
            </div>

            {/* Kegiatan 2 */}
            <div className="terminal-card terminal-card-amber p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-secondary)] text-4xl mb-4">📖</div>
              <div className="status-info text-sm mb-3">MODULE_02</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                KAJIAN RUTIN
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Rabu Sore & Sabtu Sore
              </p>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] border-t border-[var(--color-border)] pt-3">
                Bersama: Ustadz Iwan Darmawan, Lc. & Ustadz Usamah Suryana, BA. Hafizhahullahu Ta'ala
              </p>
            </div>

            {/* Kegiatan 3 */}
            <div className="terminal-card p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-primary)] text-4xl mb-4">🍽️</div>
              <div className="status-ok text-sm mb-3">MODULE_03</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                IFTHAR JAMA'I
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Buka Bersama dilanjutkan dengan Sholat Maghrib Berjamaah.
              </p>
              <div
                className="font-jetbrains text-xs text-terminal-muted cursor-pointer hover:text-[var(--color-primary)] transition-colors terminal-prompt"
                onClick={() => handleCommandClick("$ ifthar.exe --maghrib")}
              >
                $ ifthar.exe --maghrib
              </div>
            </div>

            {/* Kegiatan 4 */}
            <div className="terminal-card terminal-card-amber p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-secondary)] text-4xl mb-4">🤲</div>
              <div className="status-info text-sm mb-3">MODULE_04</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                ITIKAF 10 HARI AKHIR
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Itikaf selama 10 hari bersama 75 Jamaah di Masjid Al-Barru Stasiun Garut.
              </p>
              <div
                className="font-jetbrains text-xs text-terminal-muted cursor-pointer hover:text-[var(--color-primary)] transition-colors terminal-prompt"
                onClick={() => handleCommandClick("$ itikaf.exe --last-10-days")}
              >
                $ itikaf.exe --last-10-days
              </div>
            </div>

            {/* Kegiatan 5 */}
            <div className="terminal-card p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-primary)] text-4xl mb-4">🎁</div>
              <div className="status-ok text-sm mb-3">MODULE_05</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                BINGKISAN ASATIDZ
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Berbagi bingkisan untuk para Asatidz di Kota Garut.
              </p>
              <div
                className="font-jetbrains text-xs text-terminal-muted cursor-pointer hover:text-[var(--color-primary)] transition-colors terminal-prompt"
                onClick={() => handleCommandClick("$ bingkisan.exe --distribute")}
              >
                $ bingkisan.exe --distribute
              </div>
            </div>

            {/* Kegiatan 6 */}
            <div className="terminal-card terminal-card-amber p-6 hover:translate-x-1 transition-transform">
              <div className="text-[var(--color-secondary)] text-4xl mb-4">💝</div>
              <div className="status-info text-sm mb-3">MODULE_06</div>
              <h3 className="font-jetbrains text-base font-bold text-[var(--color-foreground)] uppercase mb-3">
                TEBAR THR
              </h3>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                Tebar THR (Menembus Malam) di sekitar kota Garut.
              </p>
              <div
                className="font-jetbrains text-xs text-terminal-muted cursor-pointer hover:text-[var(--color-primary)] transition-colors terminal-prompt"
                onClick={() => handleCommandClick("$ tebar_thr.exe --night-mode")}
              >
                $ tebar_thr.exe --night-mode
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ASATIDZ SECTION */}
      {/* ============================================ */}
      <section id="asatidz" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-jetbrains text-2xl md:text-4xl font-bold mb-4 uppercase">
              <span className="text-[var(--color-secondary)] terminal-glow-amber">&gt; ASATIDZ</span>
            </h2>
            <hr className="terminal-divider-solid w-48 mx-auto" />
          </div>

          <div className="space-y-3">
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
                className="terminal-card p-4 flex items-center hover:translate-x-2 transition-transform group"
              >
                <div className="w-8 h-8 bg-[var(--color-muted)] border border-[var(--color-border)] flex items-center justify-center mr-4 flex-shrink-0 text-[var(--color-primary)] font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="font-jetbrains text-sm text-[var(--color-foreground)] terminal-prompt flex-1">
                  {asatidz}
                </p>
                <span className="status-ok text-xs">SAH</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section id="cta" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)] relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Window */}
          <div className="terminal-window p-8 md:p-12">
            <div className="terminal-titlebar mb-8">
              EXECUTE_REGISTRATION.CMD
            </div>

            <div className="space-y-8">
              <div className="status-warn text-lg">LIMITED_SLOTS_AVAILABLE</div>

              <h2 className="font-jetbrains text-3xl md:text-5xl font-bold uppercase">
                <span className="text-[var(--color-primary)] terminal-glow">&gt; MULAI LEVEL UP!</span>
                <br />
                <span className="text-[var(--color-foreground)]">SEKARANG</span>
              </h2>

              <p className="font-jetbrains text-sm md:text-base text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
                Jangan lewatkan kesempatan untuk meningkatkan kualitas ibadah di bulan Ramadhan tahun ini.
              </p>

              {/* Interactive command input simulation */}
              <div
                className="font-jetbrains text-sm bg-[var(--color-muted)] border border-[var(--color-border)] p-4 mb-4 cursor-pointer hover:border-[var(--color-primary)] transition-all terminal-prompt-inline"
                onClick={() => handleCommandClick("./register.sh --free --slots-available")}
              >
                <span className="text-[var(--color-muted-foreground)]">
                  {clickedCommand || "$ ./register.sh --free --slots-available"}
                </span>
                {clickedCommand && (
                  <span className="status-ok-inline ml-2">PROCESSING...</span>
                )}
                <span className="cursor-block ml-1"></span>
              </div>

              <div className="space-y-4">
                <a
                  href="#"
                  className="terminal-btn-primary inline-flex items-center justify-center px-12 py-5 font-jetbrains font-bold uppercase tracking-wider text-lg group"
                >
                  DAFTAR GRATIS
                  <span className="cursor-blink ml-2">█</span>
                </a>
                <div className="font-jetbrains text-xs text-terminal-muted">
                  Press [ENTER] to confirm registration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div>
              <div className="ascii-art text-[8px] mb-4 text-[var(--color-primary)]">
{`  ___   __  __ _    _ ___     █████╗
 |_ _| |  \\/  | |  | |__ \\   ██╔═══╝
  | |  | |\\/| | |  | |  / /   ███████╗
  | |  | |  | | |\/| | / /    ╚════██║
 |___| |_|  |_|\\__/ /_/     ███████║

 VOL.3 // RAMADHAN`}
              </div>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)]">
                Ramadhan Level UP! Bersama Garut Mangaji
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="status-info text-sm mb-4">NAVIGATION</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#penyelenggara"
                    className="font-jetbrains text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
                    onClick={(e) => { e.preventDefault(); handleCommandClick("cd ./penyelenggara && ls -la"); }}
                  >
                    ./penyelenggara
                  </a>
                </li>
                <li>
                  <a
                    href="#kegiatan"
                    className="font-jetbrains text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
                    onClick={(e) => { e.preventDefault(); handleCommandClick("cd ./kegiatan && ls -la"); }}
                  >
                    ./kegiatan
                  </a>
                </li>
                <li>
                  <a
                    href="#asatidz"
                    className="font-jetbrains text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors terminal-prompt terminal-prompt-interactive"
                    onClick={(e) => { e.preventDefault(); handleCommandClick("cd ./asatidz && ls -la"); }}
                  >
                    ./asatidz
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="status-ok text-sm mb-4">LOCATION</div>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] mb-1">
                masjid_al_barru@garut:~$ cat location.txt
              </p>
              <p className="font-jetbrains text-xs text-[var(--color-foreground)]">
                Masjid Al-Barru Stasiun Garut
              </p>
              <p className="font-jetbrains text-xs text-[var(--color-muted-foreground)] mt-1">
                Garut, Jawa Barat
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[var(--color-border)]">
            <div className="font-jetbrains text-xs text-center">
              <span className="status-ok">BUILD_COMPLETE</span>
              <span className="text-[var(--color-muted-foreground)] ml-4">
                © 2026 RGM VOL.3 - Garut Mangaji. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Command output overlay */}
      {clickedCommand && (
        <div className="fixed bottom-4 right-4 z-50 font-jetbrains text-xs bg-[var(--color-muted)] border border-[var(--color-primary)] p-3 terminal-glow">
          <div className="text-[var(--color-muted-foreground)]">
            > EXECUTING...
          </div>
          <div className="text-[var(--color-primary)] mt-1">
            {clickedCommand}
          </div>
          <div className="status-ok-inline mt-2">
            [SUCCESS]
          </div>
        </div>
      )}
    </div>
  );
}
