"use client"

import { bettingSitesHR } from "@/types/betting-types"
import { HskHeader } from "@/components/hsk-header"
import { HskHero } from "@/components/hsk-hero"
import { HskRatings } from "@/components/hsk-ratings"
import { HskAbout } from "@/components/hsk-about"
import { HskResponsible } from "@/components/hsk-responsible"
import { HskMethodology } from "@/components/hsk-methodology"
import { HskEditorPicks } from "@/components/hsk-editor-picks"
import { HskFaq } from "@/components/hsk-faq"
import { HskOffersDialog } from "@/components/hsk-offers-dialog"
import { HskFooter } from "@/components/hsk-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--sport-cloud)]">
      <HskHeader />

      <main>
        <HskHero />
        <HskRatings sites={bettingSitesHR} />
        <HskAbout />
        <HskResponsible />
        <HskMethodology />
        <HskEditorPicks sites={bettingSitesHR} />
        <HskFaq />
      </main>
      <HskOffersDialog sites={bettingSitesHR} />

      <HskFooter />
    </div>
  )
}
