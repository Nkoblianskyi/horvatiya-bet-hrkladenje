"use client"

import { TrendingUp, Clock, Award } from "lucide-react"
import Image from "next/image"

export function HskHero() {
  return (
    <section className="relative bg-[var(--sport-navy)] border-b border-[var(--sport-silver)]/30 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sports-team-celebrating-victory-stadium-fans-cheer.jpg')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[var(--sport-navy)]/75" />

      <div className="container mx-auto px-4 max-w-[1200px] py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[var(--sport-white)]/10 backdrop-blur-sm text-[var(--sport-white)] text-xs font-medium tracking-wide mb-4 rounded border border-[var(--sport-white)]/20">
            STRUČNI PORTAL ZA ANALIZU
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[var(--sport-white)]">
            Vodič kroz hrvatske kladionice 
          </h1>

          <p className="text-base md:text-lg text-[var(--sport-silver)] mb-8 leading-relaxed max-w-2xl">
            Profesionalne recenzije i detaljne analize svih licenciranih platformi. Donosimo objektivne procjene
            temeljene na stvarnom testiranju i višegodišnjem iskustvu.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-[var(--sport-silver)]">
              <TrendingUp className="w-4 h-4 text-[var(--sport-accent)]" />
              <span className="text-sm">Aktualne analize</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--sport-silver)]">
              <Image src="/flag.png" alt="Shield" width={24} height={24} />
              <span className="text-sm">Licencirani operatori</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--sport-silver)]">
              <Clock className="w-4 h-4 text-[var(--sport-accent)]" />
              <span className="text-sm">Redovna ažuriranja</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--sport-silver)]">
              <Award className="w-4 h-4 text-[var(--sport-accent)]" />
              <span className="text-sm">Nepristrane ocjene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
