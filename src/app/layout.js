import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-headings",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-tech",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Edson Gonzales | Full Stack Engineer",
  description: "Swiss Neo-Metro Portfolio layout. Modular, clean, and highly editorial design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0C0C0E] text-[#F8F9FA] min-h-screen Selection:bg-[#EBF800] Selection:text-[#0C0C0E]">
        {children}
      </body>
    </html>
  );
}
