import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naiby Osuna · Colorista Premium · Especialista en Balayage",
  description:
    "Realiza tu pre-diagnóstico capilar gratuito con Naiby Osuna, especialista en Balayage y coloración premium. Obtén una evaluación personalizada y agenda tu cita.",
  keywords: ["balayage", "colorista", "Naiby Osuna", "diagnóstico capilar", "color de cabello", "salon premium"],
  openGraph: {
    title: "Naiby Osuna · Especialista en Balayage",
    description: "Pre-diagnóstico capilar gratuito. Consigue el Balayage de tus sueños.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
