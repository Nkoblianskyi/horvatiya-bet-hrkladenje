import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--sport-cloud)]">
      <HskHeader />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[800px]">
          <article>
            <header className="mb-10">
              <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-2">Pravne informacije</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--sport-navy)] mb-3">Politika Kolačića</h1>
              <p className="text-sm text-[var(--sport-steel)]">
                Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </header>

            <div className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Definicija kolačića</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  Kolačići predstavljaju male tekstualne datoteke koje web preglednici pohranjuju na korisničke uređaje
                  prilikom posjeta web stranicama. Služe za pamćenje postavki, preferencija i podataka o interakciji
                  korisnika sa sadržajem hrkladenje.com portala.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Namjena kolačića na portalu</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm mb-3">
                  HRKladenje.com koristi kolačiće u sljedeće svrhe:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-[var(--sport-slate)] text-sm ml-2">
                  <li>Osiguranje tehničke funkcionalnosti stranice</li>
                  <li>Pohrana korisničkih preferencija između posjeta</li>
                  <li>Prikupljanje anonimiziranih statističkih podataka</li>
                  <li>Analiza obrazaca korištenja za unapređenje sadržaja</li>
                  <li>Prilagodba prikaza sadržaja interesima korisnika</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-4">Kategorije kolačića</h2>

                <div className="space-y-4">
                  <div className="bg-[var(--sport-cloud)] p-4 rounded border-l-2 border-[var(--sport-navy)]">
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-2">Neophodni kolačići</h3>
                    <p className="text-[var(--sport-slate)] text-sm leading-relaxed">
                      Omogućuju temeljno funkcioniranje portala - navigaciju, pristup sadržaju i sigurnosne funkcije.
                      Bez ovih kolačića stranica ne može ispravno funkcionirati.
                    </p>
                  </div>

                  <div className="bg-[var(--sport-cloud)] p-4 rounded border-l-2 border-[var(--sport-accent)]">
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-2">Analitički kolačići</h3>
                    <p className="text-[var(--sport-slate)] text-sm leading-relaxed">
                      Prikupljaju agregirane i anonimizirane podatke o načinu korištenja stranice. Pomažu nam razumjeti
                      koji sadržaji su najrelevantniji te identificirati potencijalna poboljšanja.
                    </p>
                  </div>

                  <div className="bg-[var(--sport-cloud)] p-4 rounded border-l-2 border-[var(--sport-success)]">
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-2">Funkcionalni kolačići</h3>
                    <p className="text-[var(--sport-slate)] text-sm leading-relaxed">
                      Pamte korisničke izbore i postavke za personalizirano iskustvo. Uključuju jezične preferencije i
                      prethodno pregledane sadržaje.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Upravljanje kolačićima</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  Postavke kolačića moguće je prilagoditi putem opcija web preglednika. Napominjemo da onemogućavanje
                  pojedinih kategorija kolačića može utjecati na funkcionalnost i korisničko iskustvo na portalu.
                  Detaljne upute za upravljanje kolačićima dostupne su u dokumentaciji svakog preglednika.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Kolačići vanjskih servisa</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  Pojedini sadržaji na portalu mogu uključivati elemente vanjskih servisa koji postavljaju vlastite
                  kolačiće. HRKladenje.com nema kontrolu nad tim kolačićima te preporučujemo konzultiranje politika
                  privatnosti dotičnih servisa.
                </p>
              </section>

              <section className="bg-[var(--sport-cloud)] p-5 rounded">
                <h2 className="text-lg font-semibold text-[var(--sport-navy)] mb-2">Kontakt</h2>
                <p className="text-[var(--sport-slate)] text-sm mb-2">Za pitanja vezana uz kolačiće i privatnost:</p>
                <a
                  href="mailto:info@hrkladenje.com"
                  className="text-[var(--sport-navy)] font-medium text-sm hover:underline"
                >
                  info@hrkladenje.com
                </a>
              </section>
            </div>
          </article>
        </div>
      </main>

      <HskFooter />
    </div>
  )
}
