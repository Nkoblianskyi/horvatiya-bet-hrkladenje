import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { HskCookieConsent } from "@/components/hsk-cookie-consent"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "HRKladenje.com - Stručni Portal za Analizu Kladionica 2025",
  description:
    "Nezavisne recenzije i profesionalne analize hrvatskih kladionica. Detaljne procjene servisa, usporedbe kvota i vodiči za siguran odabir platforme za klađenje.",
  keywords: [
  "sportsko klađenje Hrvatska",
  "kladionice Hrvatska",
  "online klađenje Hrvatska",
  "najbolje kladionice",
  "nogometno klađenje Hrvatska",
  "tenis klađenje",
  "košarka klađenje",
  "bonusi za klađenje",
  "klađenje uživo",
  "legalne kladionice Hrvatska",
  "betting sites Croatia",
  "online sportsko klađenje",
  "Formula 1 klađenje",
  "MMA klađenje",
  "hokej klađenje",
  "pikado klađenje",
  "bilijar klađenje",
  "top kladionice Hrvatska",
  "rang lista kladionica",
  "sigurno klađenje Hrvatska",
  "odgovorno klađenje",
  "najbolje kladionice Hrvatska",
  "sportsko klađenje savjeti",
  "klađenje aplikacije Hrvatska",
  "mobilno klađenje",
  "eSports klađenje",
  "virtualni sportovi klađenje",
  "klađenje na nogometne lige",
  "klađenje na teniske turnire",
  "klađenje na košarkaške utakmice",
  "ekskluzivni bonusi za nove korisnike",
  "promocije kladionica",
  "isplate dobitaka klađenje",
  "korisnička podrška kladionica",
  "zakonski okvir klađenja Hrvatska",
  "porezi na dobitke od klađenja",
  "kladionica",
  "sportska kladionica",
  "online kladionica",
  "klađenje uživo",
  "online klađenje",
  "kladionica uzivo",
  "online casino Hrvatska",
  "najbolji online casino",
  "casino bonusi",
  "casino igre Hrvatska",
  "casino Croatia",
  "online casino games",
  "casino bonuses"
],
  authors: [{ name: "HRKladenje" }],
  openGraph: {
    title: "HRKladenje.com - Stručne Analize Kladionica",
    description:
      "Profesionalni portal za analizu i ocjenjivanje kladionica u Hrvatskoj. Nepristrane recenzije i detaljne usporedbe.",
    url: "https://hrkladenje.com",
    siteName: "HRKladenje.com",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        {children}
        <HskCookieConsent />
      </body>
    </html>
  )
}
