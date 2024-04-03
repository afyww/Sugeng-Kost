import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sugeng Kost | Kost Murah Tlogosari Area Strategis",
  description:
    "Kost murah lokasi strategis area kampus USM,STIE,PUPR",
};

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
