import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-headings",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portafolio de Desarrollador — Creativo & Minimalista",
  description: "Portafolio interactivo de desarrollo web inspirado en estética pastel y diseño lúdico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

