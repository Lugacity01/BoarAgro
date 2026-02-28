import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nagivation";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "BOAR Agro - From farm to global market - transparently and sustainably",
  description:
    "Rooted in Africa, sustainable by nature and traded across global markets",
  icons: {
    icon: [
      {
        url: "/boar_logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/boar_logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/boar_logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <link
        rel="preconnect"
        href="https://fonts.cdnfonts.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.cdnfonts.com/css/neue-montreal"
        rel="stylesheet"
      />
      <body className="font-sans antialiased">
        <Providers>
          <Navigation />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
