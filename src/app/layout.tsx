import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://metamorfosis.draftstudio.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Directorio · Capítulo Metamorfosis BNI León",
  description:
    "Directorio de miembros del capítulo BNI Metamorfosis, León y alrededores. Escanea, conoce a los miembros y accede al directorio oficial.",
  openGraph: {
    title: "Directorio · Capítulo Metamorfosis BNI León",
    description:
      "Directorio de miembros del capítulo BNI Metamorfosis, León y alrededores.",
    url: siteUrl,
    siteName: "BNI Metamorfosis · Directorio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Directorio · Capítulo Metamorfosis BNI León",
    description:
      "Directorio de miembros del capítulo BNI Metamorfosis, León y alrededores.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport = {
  themeColor: "#0E0E12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
