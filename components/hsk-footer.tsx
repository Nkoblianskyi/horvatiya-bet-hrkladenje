"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function HskFooter() {
  return (
    <footer className="bg-[var(--sport-navy)] text-[var(--sport-white)]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Main Footer */}
        <div className="py-10 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <span className="font-bold text-lg">HR</span>
              <span className="font-bold text-lg text-[var(--sport-accent)]">Kladenje</span>
            </div>
            <p className="text-[var(--sport-silver)] text-sm leading-relaxed">
              Informativni portal za analizu hrvatskog tržišta sportskog klađenja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">Navigacija</h3>
            <ul className="space-y-2 text-[var(--sport-silver)] text-sm">
              <li>
                <Link href="/" className="hover:text-[var(--sport-white)] transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--sport-white)] transition-colors">
                  O Portalu
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">Pravne informacije</h3>
            <ul className="space-y-2 text-[var(--sport-silver)] text-sm">
              <li>
                <Link href="/cookie-policy" className="hover:text-[var(--sport-white)] transition-colors">
                  Politika kolačića
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--sport-white)] transition-colors">
                  Privatnost
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">Kontakt</h3>
            <div className="flex items-center gap-2 text-[var(--sport-silver)] text-sm">
              <Mail className="w-4 h-4" />
              <span>info@hrkladenje.com</span>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-[var(--sport-slate)] py-6">
          <p className="text-center text-[var(--sport-steel)] text-xs mb-4">Partneri za odgovorno klađenje</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain bg-background" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain bg-background" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/hupis.png" alt="HUPIS" fill className="object-contain bg-background" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain bg-background" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain bg-background" />
                </div>
              </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--sport-slate)] py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--sport-steel)]">
            <p>2025 HRKladenje.com</p>
            <p>18+ | Klađenje može uzrokovati ovisnost | Igrajte odgovorno</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
