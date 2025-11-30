"use client"

import { AlertTriangle, Phone, HelpCircle } from "lucide-react"

export function HskResponsible() {
  return (
    <section id="responsible" className="py-12 md:py-16 bg-[var(--sport-cloud)]">
      <div className="container mx-auto px-4 max-w-[900px]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--sport-navy)] mb-2">Odgovorno Klađenje</h2>
          <p className="text-[var(--sport-steel)]">Informacije i smjernice za siguran pristup sportskom klađenju</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-5 text-[var(--sport-slate)]">
          <p className="leading-relaxed">
            Klađenje na sportske događaje treba promatrati isključivo kao oblik zabave s unaprijed definiranim troškom -
            nikada kao metodu ostvarivanja prihoda ili rješavanje financijskih izazova. Kontroliran pristup ključan je
            za održavanje pozitivnog iskustva.
          </p>

          <div className="bg-[var(--sport-white)] p-5 rounded border border-[var(--sport-silver)]/30 my-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-[var(--sport-accent)] flex-shrink-0 mt-0.5" />
              <h3 className="text-lg font-semibold text-[var(--sport-navy)]">Znakovi problematičnog ponašanja</h3>
            </div>
            <ul className="space-y-2 text-sm text-[var(--sport-slate)]">
              <li>Prekoračenje planiranog budžeta za klađenje</li>
              <li>Učestalo razmišljanje o rezultatima i sljedećim opkladama</li>
              <li>Povećavanje uloga u pokušaju nadoknade gubitaka</li>
              <li>Zanemarivanje svakodnevnih obaveza zbog klađenja</li>
              <li>Pozajmljivanje sredstava za nastavak klađenja</li>
              <li>Prikrivanje opsega klađenja od bližnjih</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-[var(--sport-navy)] mt-8 mb-3">Praktične preporuke</h3>

          <p className="leading-relaxed">
            Prije početka klađenja definirajte maksimalni iznos koji ste spremni izgubiti bez utjecaja na svakodnevne
            financijske obveze. Taj limit trebao bi predstavljati trošak zabave, usporediv s ulazninom za sportski
            događaj ili koncert.
          </p>

          <p className="leading-relaxed">
            Licencirani operatori u Hrvatskoj nude alate za postavljanje limita depozita i samoisključenja. Aktivno
            koristite te opcije kao preventivnu mjeru, ne čekajte da problem eskalira.
          </p>

          <div className="bg-[var(--sport-white)] p-5 rounded border border-[var(--sport-silver)]/30 my-6">
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-[var(--sport-success)] flex-shrink-0 mt-0.5" />
              <h3 className="text-lg font-semibold text-[var(--sport-navy)]">Kontakti za podršku</h3>
            </div>
            <div className="space-y-2 text-sm text-[var(--sport-slate)]">
              <p>
                <span className="font-medium">Centar za liječenje ovisnosti:</span> 01 4872 555
              </p>
              <p>
                <span className="font-medium">Nacionalna linija za pomoć:</span> dostupna radnim danom
              </p>
              <p className="text-xs mt-3">Razgovor je povjerljiv. Stručna pomoć dostupna je bez osude.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[var(--sport-white)] p-5 rounded border border-[var(--sport-silver)]/30">
            <HelpCircle className="w-5 h-5 text-[var(--sport-navy)] flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              Klađenje je aktivnost rezervirana za punoljetne osobe s kapacitetom za donošenje informiranih financijskih
              odluka. U slučaju dvojbe oko vlastite kontrole, preporučujemo pauzu i konzultaciju sa stručnjakom.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
