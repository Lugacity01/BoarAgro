

import type React from "react";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nagivation";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";



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
