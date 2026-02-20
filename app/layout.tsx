import type { Metadata } from "next";
import { Space_Grotesk, Handjet } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  adjustFontFallback: false,
  preload: false,
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export const metadata: Metadata = {
  title: "RGM VOL.3 - Ramadhan Level UP! Bersama Garut Mangaji",
  description: "Ramadhan Level UP mengajak kita menjadikan bulan suci sebagai momen istimewa untuk konsisten beribadah dan capai peningkatan diri secara menyeluruh.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.variable} ${handjet.variable}`}>
        {children}
      </body>
    </html>
  );
}
