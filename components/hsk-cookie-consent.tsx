"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function HskCookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("hrk-cookie-consent")
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hrk-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("hrk-cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-[var(--sport-white)] rounded-lg shadow-lg border border-[var(--sport-silver)]/30 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-[var(--sport-navy)] text-sm">Kolačići</h3>
            <button
              onClick={handleDecline}
              className="text-[var(--sport-steel)] hover:text-[var(--sport-navy)] transition-colors"
              aria-label="Zatvori"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[var(--sport-slate)] text-xs leading-relaxed mb-4">
            Koristimo kolačiće za poboljšanje korisničkog iskustva. Prihvaćanjem pristajete na korištenje u skladu s{" "}
            <Link href="/cookie-policy" className="text-[var(--sport-navy)] hover:underline font-medium">
              politikom kolačića
            </Link>
            .
          </p>

          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[var(--sport-navy)] hover:bg-[var(--sport-slate)] text-[var(--sport-white)] font-medium py-2 px-3 rounded transition-colors text-xs"
            >
              Prihvati
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-[var(--sport-cloud)] hover:bg-[var(--sport-silver)]/30 text-[var(--sport-slate)] font-medium py-2 px-3 rounded transition-colors text-xs"
            >
              Odbij
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
