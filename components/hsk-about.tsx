"use client"

export function HskAbout() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[var(--sport-white)]">
      <div className="container mx-auto px-4 max-w-[900px]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--sport-navy)] mb-2">O Portalu HRKladenje</h2>
          <p className="text-[var(--sport-steel)]">Profesionalni informativni resurs za hrvatsko tržište klađenja</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-5 text-[var(--sport-slate)]">
          <p className="leading-relaxed">
            HRKladenje.com predstavlja specijalizirani portal posvećen objektivnoj analizi i procjeni servisa za
            sportsko klađenje dostupnih hrvatskim korisnicima. Naša redakcija kontinuirano prati stanje na tržištu i
            provodi detaljne evaluacije svih licenciranih operatora.
          </p>

          <p className="leading-relaxed">
            Metodologija našeg rada temelji se na praktičnom testiranju svake platforme. Analitičari prolaze kroz sve
            faze korisničkog iskustva - od procesa otvaranja računa, preko funkcionalnosti sučelja, do komunikacije s
            podrškom i brzine financijskih transakcija.
          </p>

          <div className="bg-[var(--sport-cloud)] p-5 rounded border-l-2 border-[var(--sport-navy)] my-6">
            <h3 className="text-lg font-semibold text-[var(--sport-navy)] mb-2">Uredništvo i pristup</h3>
            <p className="leading-relaxed text-sm">
              Sadržaj portala izrađuje tim s dugogodišnjim iskustvom u analizi industrije igara na sreću. Svaka
              recenzija prolazi višestruku provjeru činjenica prije objave. Ne prihvaćamo kompenzacije za povoljnije
              ocjene niti dopuštamo vanjski utjecaj na zaključke naših analiza.
            </p>
          </div>

          <p className="leading-relaxed">
            Posebnu pažnju posvećujemo sigurnosnim aspektima - provjeri licenci, kvaliteti enkripcije podataka i
            transparentnosti uvjeta poslovanja. Platforma koja ne zadovoljava temeljne kriterije sigurnosti neće dobiti
            preporuku bez obzira na druge kvalitete.
          </p>

          <p className="leading-relaxed">
            Cilj portala nije promocija klađenja kao aktivnosti, već pružanje kvalitetnih informacija onima koji se već
            odlučuju za tu vrstu zabave. Jednako tako ističemo važnost odgovornog pristupa i poznavanje vlastitih
            granica.
          </p>
        </div>
      </div>
    </section>
  )
}
