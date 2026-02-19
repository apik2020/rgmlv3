import type { Metadata } from "next";
import { Space_Grotesk, Handjet } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "optional",
  adjustFontFallback: false,
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
  adjustFontFallback: false,
  preload: true,
});

export const metadata: Metadata = {
  title: "RGM VOL.3 - Ramadhan Level UP! Bersama Garut Mangaji",
  description: "Ramadhan Level UP mengajak kita menjadikan bulan suci sebagai momen istimewa untuk konsisten beribadah dan capai peningkatan diri secara menyeluruh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${handjet.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
