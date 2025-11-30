"use client"

export function HskMethodology() {
  const criteria = [
    {
      title: "Licenciranje i regulacija",
      weight: "25%",
      description:
        "Provjera valjanosti dozvola Ministarstva financija RH, SSL certifikata, politika zaštite podataka i transparentnosti vlasničke strukture.",
    },
    {
      title: "Ponuda i koeficijenti",
      weight: "20%",
      description:
        "Analiza širine sportskog programa, dubine tržišta za popularna natjecanja i konkurentnosti kvota u usporedbi s tržišnim prosjekom.",
    },
    {
      title: "Bonusni program",
      weight: "20%",
      description:
        "Evaluacija realnosti uvjeta za otkup bonusa, zahtjeva za promet, vremenskih ograničenja i dostupnosti promocija za postojeće korisnike.",
    },
    {
      title: "Korisnička podrška",
      weight: "15%",
      description:
        "Testiranje svih komunikacijskih kanala u različitim vremenskim terminima s fokusom na brzinu odgovora i stručnost operatera.",
    },
    {
      title: "Transakcije",
      weight: "15%",
      description:
        "Provjera dostupnih metoda plaćanja, brzine obrade isplata, postojanja skrivenih naknada i složenosti verifikacijskih procedura.",
    },
    {
      title: "Korisničko sučelje",
      weight: "5%",
      description:
        "Ocjena dizajna platforme, navigacije, brzine učitavanja i kvalitete mobilnog iskustva na različitim uređajima.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">Naša Metodologija Ocjenjivanja</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transparentnost je temelj našeg rada. Evo kako dolazimo do ocjena koje objavljujemo.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Svaka kladionica koju analiziramo prolazi kroz rigorozan proces provjere koji traje minimalno dva tjedna.
              To nije površna analiza web stranice - to je dubinsko testiranje svake funkcionalnosti i usluge koju
              platforma nudi.
            </p>

            <h3 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Proces Evaluacije</h3>

            <div className="space-y-3">
              {criteria.map((item, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded border border-slate-300/30">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-slate-700">{item.title}</h4>
                    <span className="text-sm font-medium text-blue-600 bg-white px-2 py-0.5 rounded">
                      {item.weight}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-slate-700 mt-10 mb-4">Kontinuirano Praćenje</h3>

            <p className="leading-relaxed">
              Naš posao ne završava objavom recenzije. Kontinuirano pratimo sve kladionice na našoj listi i ažuriramo
              ocjene kada primjetimo značajne promjene - bilo pozitivne ili negativne. Ako kladionica poboljša uslugu,
              povećati ćemo ocjenu. Ako kvaliteta padne, smanjiti ćemo je.
            </p>

            <p className="leading-relaxed">
              Korisnici nam također pomažu kroz povratne informacije. Ako primamo konzistentne pritužbe ili pohvale za
              određenu platformu, provodimo dodatnu provjeru i po potrebi korigiramo našu ocjenu.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6 my-8">
              <p className="font-semibold text-slate-700 mb-2">Naša Garancija</p>
              <p className="leading-relaxed">
                Svaka ocjena koju vidite na našoj stranici odražava stvarno stanje u trenutku objave ili posljednjeg
                ažuriranja. Ne objavljujemo recenzije na osnovu tuđih podataka niti prihvaćamo materijale od samih
                kladionica bez neovisne provjere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
