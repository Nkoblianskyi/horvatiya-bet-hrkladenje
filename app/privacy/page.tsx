import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--sport-cloud)]">
      <HskHeader />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[800px]">
          <article>
            <header className="mb-10">
              <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-2">Pravne informacije</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--sport-navy)] mb-3">Politika Privatnosti</h1>
              <p className="text-sm text-[var(--sport-steel)]">
                Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </header>

            <div className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Uvodni dio</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  HRKladenje.com portal ozbiljno pristupa zaštiti privatnosti posjetitelja. Ovaj dokument pojašnjava
                  koje podatke prikupljamo, na koji način ih obrađujemo te koje mjere primjenjujemo za njihovu zaštitu.
                  Korištenjem portala prihvaćate prakse opisane u ovoj politici.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-4">Prikupljanje podataka</h2>

                <div className="space-y-4">
                  <div className="bg-[var(--sport-cloud)] p-4 rounded border-l-2 border-[var(--sport-navy)]">
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-2">Podaci koje aktivno pružate</h3>
                    <ul className="list-disc list-inside space-y-1 text-[var(--sport-slate)] text-sm ml-2">
                      <li>Kontakt podaci pri slanju upita (ime, email)</li>
                      <li>Sadržaj komunikacije s redakcijom</li>
                      <li>Informacije koje dobrovoljno dijelite</li>
                    </ul>
                  </div>

                  <div className="bg-[var(--sport-cloud)] p-4 rounded border-l-2 border-[var(--sport-accent)]">
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-2">Automatski prikupljeni podaci</h3>
                    <ul className="list-disc list-inside space-y-1 text-[var(--sport-slate)] text-sm ml-2">
                      <li>Tehnički podaci o uređaju i pregledniku</li>
                      <li>IP adresa i približna geografska lokacija</li>
                      <li>Statistika pregledavanja sadržaja</li>
                      <li>Izvor posjeta i referentne stranice</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Svrha obrade podataka</h2>
                <ul className="list-disc list-inside space-y-1.5 text-[var(--sport-slate)] text-sm ml-2">
                  <li>Pružanje i unapređenje sadržaja portala</li>
                  <li>Odgovaranje na korisničke upite</li>
                  <li>Analiza korištenja za poboljšanje funkcionalnosti</li>
                  <li>Zaštita od zlouporabe i neovlaštenog pristupa</li>
                  <li>Ispunjavanje zakonskih obveza</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Dijeljenje podataka</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  HRKladenje.com ne prodaje niti iznajmljuje osobne podatke trećim stranama. Podaci se mogu dijeliti
                  isključivo s pouzdanim pružateljima tehničkih usluga koji omogućuju rad portala, te u slučajevima kada
                  to zahtijeva zakon ili pravni postupak.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Sigurnost podataka</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu podataka od neovlaštenog
                  pristupa, izmjene ili gubitka. Portal koristi SSL enkripciju za siguran prijenos podataka.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-4">Prava korisnika</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: "Pristup", desc: "Uvid u pohranjene podatke" },
                    { title: "Ispravak", desc: "Korekcija netočnih podataka" },
                    { title: "Brisanje", desc: "Zahtjev za uklanjanje podataka" },
                    { title: "Prigovor", desc: "Prigovor na određenu obradu" },
                  ].map((right, i) => (
                    <div key={i} className="bg-[var(--sport-cloud)] p-3 rounded">
                      <h4 className="font-medium text-[var(--sport-navy)] text-sm mb-1">{right.title}</h4>
                      <p className="text-[var(--sport-slate)] text-xs">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-3">Dobna granica</h2>
                <p className="text-[var(--sport-slate)] leading-relaxed text-sm">
                  Sadržaj portala namijenjen je isključivo punoljetnim osobama. Ne prikupljamo svjesno podatke od osoba
                  mlađih od 18 godina.
                </p>
              </section>

              <section className="bg-[var(--sport-cloud)] p-5 rounded">
                <h2 className="text-lg font-semibold text-[var(--sport-navy)] mb-2">Kontakt za privatnost</h2>
                <p className="text-[var(--sport-slate)] text-sm mb-2">
                  Za pitanja o zaštiti podataka ili ostvarivanje prava:
                </p>
                <a
                  href="mailto:privacy@hrkladenje.com"
                  className="text-[var(--sport-navy)] font-medium text-sm hover:underline"
                >
                  privacy@hrkladenje.com
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
