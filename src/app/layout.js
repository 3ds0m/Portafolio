import { Fraunces, Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
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
  description: "Portafolio profesional interactivo de Edson Gonzales, desarrollador full stack. Diseño suizo modular Metro y Tactile Paper.",
  authors: [{ name: 'Edson Gonzales', url: 'mailto:edson7mayo@gmail.com' }],
  keywords: ['Edson Gonzales', 'Full Stack Developer', 'Desarrollador Web', 'Madrid', 'Next.js', 'React', 'C#', '.NET', 'Portfolio', 'WebRTC', 'PyTorch'],
  creator: 'Edson Gonzales',
  publisher: 'Edson Gonzales',
  openGraph: {
    title: 'Edson Gonzales | Full Stack Engineer',
    description: 'Portafolio profesional interactivo de Edson Gonzales, desarrollador full stack.',
    url: 'https://github.com/3ds0m/Portafolio',
    siteName: 'Portafolio de Edson Gonzales',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
