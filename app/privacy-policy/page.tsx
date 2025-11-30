export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-magazine-white pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-12 pb-8 border-b-2 border-magazine-navy">
            <h1 className="text-4xl md:text-5xl font-bold text-magazine-black mb-4">Politika Privatnosti</h1>
            <p className="text-magazine-grey">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-sm text-magazine-grey mt-2">topkladionicehrvatska.com</p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">1. Uvod</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Dobrodošli na topkladionicehrvatska.com. Ova politika privatnosti objašnjava kako prikupljamo,
                koristimo, čuvamo i štitimo vaše osobne podatke prilikom korištenja naše web stranice. Ozbiljno shvaćamo
                vašu privatnost i obvezujemo se na zaštitu vaših podataka u skladu s Općom uredbom o zaštiti podataka
                (GDPR) i hrvatskim zakonodavstvom.
              </p>
              <p className="text-magazine-grey leading-relaxed">
                Korištenjem naše web stranice prihvaćate postupke opisane u ovoj politici. Ako se ne slažete s bilo
                kojim dijelom ove politike, molimo vas da ne koristite našu stranicu.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">2. Voditelj Obrade Podataka</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Voditelj obrade vaših osobnih podataka je topkladionicehrvatska.com. Za sva pitanja o zaštiti osobnih
                podataka možete nas kontaktirati:
              </p>
              <p className="text-magazine-black font-semibold">
                Email:{" "}
                <a
                  href="mailto:privatnost@topkladionicehrvatska.com"
                  className="text-magazine-navy hover:text-magazine-teal underline"
                >
                  privatnost@topkladionicehrvatska.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">3. Podaci koje Prikupljamo</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Prikupljamo različite vrste informacija ovisno o vašoj interakciji s našom stranicom:
              </p>

              <div className="space-y-4">
                <div className="bg-magazine-light-bg p-4 border-l-4 border-magazine-navy">
                  <h3 className="text-xl font-bold text-magazine-black mb-2">3.1. Dobrovoljno Dostavljeni Podaci</h3>
                  <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                    <li>Ime i prezime (kada nam pišete)</li>
                    <li>Adresa elektroničke pošte</li>
                    <li>Sadržaj vaših poruka i upita</li>
                    <li>Sve druge informacije koje odlučite dijeliti s nama</li>
                  </ul>
                </div>

                <div className="bg-magazine-light-bg p-4 border-l-4 border-magazine-teal">
                  <h3 className="text-xl font-bold text-magazine-black mb-2">3.2. Automatski Prikupljeni Podaci</h3>
                  <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                    <li>IP adresa i lokacija</li>
                    <li>Vrsta i verzija web preglednika</li>
                    <li>Operativni sustav uređaja</li>
                    <li>Stranice koje posjećujete i vrijeme provedeno na njima</li>
                    <li>Datum i vrijeme pristupa</li>
                    <li>Izvorna stranica (referrer URL)</li>
                    <li>Tehničke karakteristike uređaja</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">4. Svrha Korištenja Podataka</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">Vaše osobne podatke koristimo za:</p>
              <ul className="list-disc list-inside space-y-3 text-magazine-grey ml-4">
                <li>
                  <strong className="text-magazine-black">Pružanje usluga:</strong> Omogućavanje pristupa sadržaju i
                  informacijama o kladionicama
                </li>
                <li>
                  <strong className="text-magazine-black">Komunikacija:</strong> Odgovore na vaša pitanja i zahtjeve
                </li>
                <li>
                  <strong className="text-magazine-black">Analitika:</strong> Analizu korištenja radi poboljšanja
                  sadržaja i korisničkog iskustva
                </li>
                <li>
                  <strong className="text-magazine-black">Sigurnost:</strong> Zaštitu od zlouporabe i nezakonitih radnji
                </li>
                <li>
                  <strong className="text-magazine-black">Pravne obveze:</strong> Ispunjavanje zakonskih zahtjeva
                </li>
              </ul>
            </section>

            <section className="bg-magazine-light-bg p-6 border-l-4 border-magazine-orange">
              <h2 className="text-3xl font-bold text-magazine-black mb-4">5. Pravna Osnova Obrade</h2>
              <p className="text-magazine-grey leading-relaxed mb-3">Vaše podatke obrađujemo na temelju:</p>
              <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                <li>
                  <strong className="text-magazine-black">Pristanka:</strong> Kad ste nam dali izričit pristanak
                </li>
                <li>
                  <strong className="text-magazine-black">Legitimnog interesa:</strong> Za poboljšanje usluga i
                  sigurnost
                </li>
                <li>
                  <strong className="text-magazine-black">Zakonske obveze:</strong> Kada je potrebno ispuniti zakonske
                  zahtjeve
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">6. Dijeljenje s Trećim Stranama</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Ne prodajemo vaše osobne podatke. Možemo ih dijeliti samo sa:
              </p>
              <ul className="list-disc list-inside space-y-3 text-magazine-grey ml-4">
                <li>
                  <strong className="text-magazine-black">Pružatelji usluga:</strong> Hosting, analitika i email servisi
                </li>
                <li>
                  <strong className="text-magazine-black">Partnerske kladionice:</strong> Pri kliku na partnerske
                  linkove
                </li>
                <li>
                  <strong className="text-magazine-black">Pravne institucije:</strong> Kada je zakonski potrebno
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">7. Sigurnost Podataka</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Primjenjujemo suvremene tehničke i organizacijske mjere zaštite:
              </p>
              <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                <li>SSL/TLS enkripcija za prijenos podataka</li>
                <li>Redovite sigurnosne provjere sustava</li>
                <li>Ograničen pristup podacima samo ovlaštenom osoblju</li>
                <li>Redovite sigurnosne kopije</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">8. Čuvanje Podataka</h2>
              <p className="text-magazine-grey leading-relaxed">Podatke čuvamo samo onoliko dugo koliko je potrebno:</p>
              <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4 mt-4">
                <li>Kontakt podaci: do 2 godine nakon posljednje komunikacije</li>
                <li>Analitički podaci: do 26 mjeseci</li>
                <li>Podaci o kolačićima: prema postavkama (obično do 2 godine)</li>
              </ul>
            </section>

            <section className="bg-magazine-light-bg p-6 border-l-4 border-magazine-navy">
              <h2 className="text-3xl font-bold text-magazine-black mb-4">9. Vaša Prava</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">Prema GDPR-u, imate sljedeća prava:</p>
              <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                <li>
                  <strong className="text-magazine-black">Pravo na pristup:</strong> Zatražite kopiju vaših podataka
                </li>
                <li>
                  <strong className="text-magazine-black">Pravo na ispravak:</strong> Ispravite netočne podatke
                </li>
                <li>
                  <strong className="text-magazine-black">Pravo na brisanje:</strong> Zatražite brisanje podataka
                </li>
                <li>
                  <strong className="text-magazine-black">Pravo na ograničenje:</strong> Ograničite obradu
                </li>
                <li>
                  <strong className="text-magazine-black">Pravo na prenosivost:</strong> Prenesite podatke drugdje
                </li>
                <li>
                  <strong className="text-magazine-black">Pravo na prigovor:</strong> Prigovorite obradi
                </li>
              </ul>
              <p className="text-magazine-grey mt-4">
                Za ostvarivanje prava kontaktirajte:{" "}
                <a
                  href="mailto:privatnost@topkladionicehrvatska.com"
                  className="text-magazine-navy hover:text-magazine-teal underline font-semibold"
                >
                  privatnost@topkladionicehrvatska.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">10. Linkovi na Druge Stranice</h2>
              <p className="text-magazine-grey leading-relaxed">
                Naša stranica sadrži linkove na vanjske web stranice. Nismo odgovorni za njihove prakse privatnosti.
                Preporučujemo čitanje njihovih politika privatnosti.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">11. Maloljetnici</h2>
              <p className="text-magazine-grey leading-relaxed">
                Naša stranica nije namijenjena osobama mlađim od 18 godina. Ne prikupljamo svjesno podatke od
                maloljetnika. Ako saznamo da smo to učinili, odmah ćemo te podatke izbrisati.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">12. Promjene Politike</h2>
              <p className="text-magazine-grey leading-relaxed">
                Zadržavamo pravo izmjene ove politike. Promjene će biti objavljene na ovoj stranici s ažuriranim
                datumom. Značajnije promjene bit će posebno istaknute.
              </p>
            </section>

            <section className="bg-magazine-light-bg p-8 border-l-4 border-magazine-teal">
              <h2 className="text-3xl font-bold text-magazine-black mb-4">13. Kontakt i Pritužbe</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Za pitanja ili pritužbe vezane uz zaštitu podataka:
              </p>
              <div className="space-y-2">
                <p className="text-magazine-black">
                  <strong>Email:</strong>{" "}
                  <p
                    className="text-magazine-navy hover:text-magazine-teal underline"
                  >
                    privatnost@topkladionicehrvatska.com
                  </p>
                </p>
                <p className="text-magazine-black">
                  <strong>Web:</strong> topkladionicehrvatska.com
                </p>
              </div>
              <p className="text-magazine-grey leading-relaxed mt-4">
                Također možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP):
              </p>
              <p className="text-magazine-grey mt-2 text-sm">
                <strong>Agencija za zaštitu osobnih podataka</strong>
                <br />
                Selska cesta 136, 10000 Zagreb
                <br />
                Tel: +385 1 4609 000
                <br />
                Web: azop.hr
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
