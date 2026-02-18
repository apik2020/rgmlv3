import type { Metadata } from "next";
import { JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
      <body className={`${jetbrainsMono.variable} ${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
