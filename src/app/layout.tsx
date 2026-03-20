import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GourmetJobs — Talento gastronómico en minutos",
  description:
    "Conecta restaurantes con trabajadores verificados disponibles ahora mismo. Contratación gastronómica en tiempo real.",
  keywords: [
    "empleo gastronómico",
    "trabajadores restaurante",
    "contratación rápida",
    "turnos cocina",
    "GourmetJobs",
  ],
  openGraph: {
    title: "GourmetJobs — Talento gastronómico en minutos",
    description:
      "Conecta restaurantes con trabajadores verificados disponibles ahora mismo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍽</text></svg>" />
      </head>
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
