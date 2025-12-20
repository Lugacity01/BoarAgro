import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/nagivation"

const inter = Inter({ subsets: ["latin"] })

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${inter.className}  font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
