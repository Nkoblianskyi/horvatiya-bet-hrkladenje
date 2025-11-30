"use client"

import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/types/betting-types"
import Link from "next/link"

interface HskRatingsProps {
  sites: BettingSite[]
}

export function HskRatings({ sites }: HskRatingsProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const stars = []
    const starValue = rating / 2 // 10 -> 5 stars, 9 -> 4.5 stars, 8 -> 4 stars
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
    <section id="ratings" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--sport-navy)] mb-2">Rang Lista Kladionica</h2>
          <p className="text-[var(--sport-steel)]">Evaluirane platforme prema našoj metodologiji ocjenjivanja</p>
        </div>

        <div className="space-y-4">
          {sites.map((site, index) => (
            <div
              key={site.id}
              className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 hover:border-[var(--sport-silver)] transition-all overflow-hidden"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-[60px_160px_1fr_140px_160px] items-center gap-6 p-5">
                {/* Rank */}
                <div className="text-center">
                  <span
                    className={`text-2xl font-bold ${index === 0 ? "text-[var(--sport-accent)]" : "text-[var(--sport-steel)]"}`}
                  >
                    #{index + 1}
                  </span>
                </div>

                <div className="flex items-center justify-center bg-black rounded p-4 h-20">
                  <div className="relative w-full h-14">
                    <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                  </div>
                </div>

                {/* Bonus Info */}
                <div>
                  <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-1">Bonus</p>
                  <h3 className="text-lg font-semibold text-[var(--sport-navy)]">{site.bonus}</h3>
                  {site.dopBonus && <p className="text-sm text-[var(--sport-steel)]">{site.dopBonus}</p>}
                </div>

                {/* Rating */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--sport-navy)]">{site.rating.toFixed(1)}</div>
                  <div className="flex items-center justify-center gap-0.5 mt-1">{renderStars(site.rating)}</div>
                  <p className="text-xs text-[var(--sport-steel)] mt-1">({formatNumber(site.reviews)})</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--sport-navy)] hover:bg-[var(--sport-slate)] text-[var(--sport-white)] font-medium py-2.5 px-4 rounded text-center transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    Posjeti
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:hidden p-4">
                {/* Row 1: Logo + Bonus */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Logo - 45% width */}
                  <div className="w-[45%] flex-shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-lg font-bold ${index === 0 ? "text-[var(--sport-accent)]" : "text-[var(--sport-steel)]"}`}
                      >
                        #{index + 1}
                      </span>
                    </div>
                    <div className="bg-black rounded p-3 h-20 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Bonus - centered in remaining space */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-1">Bonus</p>
                    <h3 className="text-base font-semibold text-[var(--sport-navy)] mb-1">{site.bonus}</h3>
                    {site.dopBonus && <p className="text-sm text-[var(--sport-steel)]">{site.dopBonus}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Rating + Stars + Reviews - centered in their column */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-[var(--sport-navy)]">{site.rating.toFixed(1)}</span>
                      <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                    </div>
                    <p className="text-xs text-[var(--sport-steel)] mt-1">({formatNumber(site.reviews)} recenzija)</p>
                  </div>

                  {/* Button */}
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--sport-navy)] hover:bg-[var(--sport-slate)] text-[var(--sport-white)] font-medium py-2.5 px-4 rounded text-center transition-colors text-sm flex-shrink-0"
                  >
                    Posjeti
                  </Link>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-[var(--sport-cloud)] px-5 py-2.5 border-t border-[var(--sport-silver)]/30">
                <p className="text-xs text-[var(--sport-steel)] text-center">{site.terms}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
