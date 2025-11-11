import type { Metadata } from "next";
import "./globals.css";
import { META_THEME_COLORS, siteConfig } from "@/lib/config";
import TopLoader from "@/components/top-loader";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: [
    "KPI",
    "Key Performance Index",
    "OKR",
    "Objective Key Results",
    "karyawan",
    "Monitoring KPI",
    "Monitoring OKR",
    "Aplikasi Untuk KPI",
  ],
  authors: [
    {
      name: "dare5.id",
      url: "https://dare5.id",
    },
  ],
  creator: "dare5.id",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "dare5.id",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body className={`antialiased`}>
        <TopLoader />
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
