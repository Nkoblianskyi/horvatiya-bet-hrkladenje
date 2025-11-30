"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BettingSite } from "@/types/betting-types"

interface HskOffersDialogProps {
  sites: BettingSite[]
}

export function HskOffersDialog({ sites }: HskOffersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem("hrk-offers-dialog-seen")
    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("hrk-offers-dialog-seen", "true")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  const topSite = sites[0]

  const renderStars = (rating: number) => {
    const stars = []
    const starValue = rating / 2
    const fullStars = Math.floor(starValue)
    const remainder = starValue - fullStars
    const hasHalfStar = remainder >= 0.25 && remainder < 0.75
    const hasFullInstead = remainder >= 0.75

    for (let i = 0; i < 5; i++) {
      if (i < fullStars || (i === fullStars && hasFullInstead)) {
        stars.push(<Star key={i} className="w-4 h-4 fill-[var(--sport-accent)] text-[var(--sport-accent)]" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-[var(--sport-silver)]" />
            <div className="absolute overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-[var(--sport-accent)] text-[var(--sport-accent)]" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-[var(--sport-silver)]" />)
      }
    }

    return stars
  }

  return (
    <div className="fixed inset-0 bg-[var(--sport-navy)]/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[var(--sport-white)] rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-[var(--sport-cloud)] p-4 relative border-b border-[var(--sport-silver)]/30">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-[var(--sport-steel)] hover:text-[var(--sport-navy)] transition-colors"
            aria-label="Zatvori"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-1">Aktualna ponuda</p>
          <h2 className="text-lg font-bold text-[var(--sport-navy)]">Preporučena Kladionica</h2>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="bg-black rounded p-4 mb-4 flex items-center justify-center">
            <div className="relative w-40 h-20">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
            </div>
          </div>

          {/* Offer */}
          <div className="text-center mb-4">
            <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-1">Bonus</p>
            <h3 className="text-2xl font-bold text-[var(--sport-navy)] mb-1">{topSite.bonus}</h3>
            {topSite.dopBonus && <p className="text-sm text-[var(--sport-steel)]">{topSite.dopBonus}</p>}
          </div>

          <div className="flex items-center justify-center gap-3 mb-5 bg-[var(--sport-cloud)] rounded py-3 px-4">
            <span className="text-2xl font-bold text-[var(--sport-navy)]">{topSite.rating.toFixed(1)}</span>
            <div className="flex gap-0.5">{renderStars(topSite.rating)}</div>
          </div>

          {/* CTA */}
          <Link
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[var(--sport-navy)] hover:bg-[var(--sport-slate)] text-[var(--sport-white)] font-medium py-3 px-4 rounded text-center transition-colors text-sm"
          >
            Pogledaj ponudu
          </Link>

          {/* Terms */}
          <p className="text-xs text-[var(--sport-steel)] text-center mt-3">{topSite.terms}</p>
        </div>
      </div>
    </div>
  )
}
