"use client"

import Image from "next/image"
import type { BettingSite } from "@/types/betting-types"
import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"

interface HskEditorPicksProps {
  sites: BettingSite[]
}

export function HskEditorPicks({ sites }: HskEditorPicksProps) {
  const topPicks = sites.slice(0, 3)

  const renderStars = (rating: number) => {
    const stars = []
    const maxStars = 5
    const normalizedRating = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const starValue = i + 1
      const fillPercentage = Math.max(0, Math.min(1, normalizedRating - i))
      const fillLevel = Math.round(fillPercentage * 5) / 5

      if (fillLevel >= 1) {
        stars.push(<Star key={i} className="w-3 h-3 fill-[var(--sport-accent)] text-[var(--sport-accent)]" />)
      } else if (fillLevel > 0) {
        stars.push(
          <div key={i} className="relative w-3 h-3">
            <Star className="absolute w-3 h-3 text-[var(--sport-silver)]" />
            <div className="absolute overflow-hidden" style={{ width: `${fillLevel * 100}%` }}>
              <Star className="w-3 h-3 fill-[var(--sport-accent)] text-[var(--sport-accent)]" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-3 h-3 text-[var(--sport-silver)]" />)
      }
    }
    return stars
  }

  return (
    <section className="py-12 md:py-16 bg-[var(--sport-cloud)]">
      <div className="container mx-auto px-4 max-w-[900px]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--sport-navy)] mb-2">Preporuke Redakcije</h2>
          <p className="text-[var(--sport-steel)]">Platforme koje su se posebno istaknule u aktualnoj evaluaciji</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {topPicks.map((site, index) => (
            <div
              key={site.id}
              className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 overflow-hidden h-full flex flex-col"
            >
              <div className="bg-black p-4 flex items-center justify-center">
                <div className="relative w-full h-14">
                  <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[var(--sport-steel)] uppercase tracking-wide">#{index + 1}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-[var(--sport-navy)]">{site.rating.toFixed(1)}</span>
                    <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                  </div>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-1">Bonus</p>
                  <h4 className="text-base font-semibold text-[var(--sport-navy)]">{site.bonus}</h4>
                  {site.dopBonus && <p className="text-sm text-[var(--sport-steel)]">{site.dopBonus}</p>}
                </div>

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[var(--sport-navy)] hover:bg-[var(--sport-slate)] text-[var(--sport-white)] font-medium py-2.5 px-4 rounded text-center transition-colors text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  Detalji
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-[var(--sport-cloud)] border-t border-[var(--sport-silver)]/30">
                <p className="text-xs text-[var(--sport-steel)] text-center">{site.terms}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
