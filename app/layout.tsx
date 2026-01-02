import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nagivation";
import { AIChatWidget } from "@/components/ai-chat-widget";

export const metadata: Metadata = {
  title: "BOAR Agro - Export-Grade Cocoa & Oilseed Production",
  description:
    "Feeding The Future, Sustainably With Export-Grade Cocoa & Oilseed Production. From our farms in Nigeria to processors across Europe, Asia, and the UK.",
  generator: "v0.app",
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
        <Navigation />
        {children}
        <Footer />
        <AIChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
