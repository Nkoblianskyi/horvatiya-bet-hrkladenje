import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HskHeader />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12 pb-8 border-b-2 border-[var(--sport-blue)]">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Uvjeti Korištenja</h1>
              <p className="text-[var(--sport-grey)]">
                Posljednje ažuriranje:{" "}
                {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="text-sm text-[var(--sport-grey)] mt-2">hrvatskastranicekladenje.com</p>
            </header>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Prihvaćanje Uvjeta</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Dobrodošli na Hrvatskastranicekladenje.com. Pristupanjem i korištenjem ove web stranice, prihvaćate i
                  obvezujete se na sljedeće Uvjete korištenja. Ako se ne slažete s bilo kojim dijelom ovih uvjeta,
                  molimo vas da ne koristite našu web stranicu.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. O Našoj Usluzi</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Hrvatskastranicekladenje.com je informativna platforma koja pruža:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Objektivne recenzije i ocjene kladionica u Hrvatskoj</li>
                  <li>Informacije o bonusima i promocijama</li>
                  <li>Edukativni sadržaj o sportskom klađenju</li>
                  <li>Savjete o odgovornom klađenju</li>
                </ul>
                <p className="text-[var(--sport-grey)] leading-relaxed mt-4">
                  Mi NE nudimo usluge klađenja niti omogućavamo klađenje na našoj stranici. Samo pružamo informacije i
                  recenzije.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. Ograničenje Dobi</h2>
                <div className="bg-[var(--sport-red)]/10 border-l-4 border-[var(--sport-red)] p-6 rounded-r-lg">
                  <p className="text-foreground font-bold mb-2">VAŽNO: 18+</p>
                  <p className="text-[var(--sport-grey)] leading-relaxed">
                    Ova web stranica je namijenjena isključivo osobama starijim od 18 godina. Ako imate manje od 18
                    godina, ne smijete koristiti ovu stranicu. Klađenje je zabranjena aktivnost za maloljetnike prema
                    zakonima Republike Hrvatske.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Intelektualno Vlasništvo</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Sav sadržaj na ovoj web stranici, uključujući ali ne ograničavajući se na tekst, grafiku, logotipe,
                  slike, video zapise i softver, vlasništvo je Hrvatskastranicekladenje.com ili naših partnera i
                  zaštićen je hrvatskim i međunarodnim zakonima o autorskim pravima.
                </p>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Možete pregledavati i preuzimati sadržaj samo za osobnu, nekomercijalnu upotrebu. Zabranjeno je
                  reproduciranje, distribuiranje, modificiranje ili ponovno objavljivanje sadržaja bez naše prethodne
                  pisane dozvole.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Točnost Informacija</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Ulažemo sve napore kako bismo osigurali da su informacije na našoj stranici točne i ažurne. Međutim:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Ne možemo garantirati potpunu točnost svih informacija</li>
                  <li>Bonusi i promocije kladionica se mogu promijeniti bez prethodne najave</li>
                  <li>Uvijek provjerite uvjete i odredbe izravno na stranici kladionice</li>
                  <li>Ocjene i recenzije odražavaju naše mišljenje u trenutku objave</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Linkovi na Vanjske Stranice</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Naša stranica sadrži linkove na web stranice kladionica i drugih trećih strana. Ne kontroliramo i
                  nismo odgovorni za sadržaj, politiku privatnosti ili prakse tih vanjskih stranica. Korištenje vanjskih
                  stranica je na vlastitu odgovornost korisnika.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Affiliate Odnosi</h2>
                <div className="bg-[var(--sport-light-grey)] p-6 rounded-lg border-l-4 border-[var(--sport-blue)]">
                  <p className="text-[var(--sport-grey)] leading-relaxed">
                    Transparentnost: Možemo primati proviziju kada kliknete na linkove nekih kladionica koje
                    recenziramo. Ovi affiliate odnosi NE utječu na naše ocjene i mišljenja. Naše recenzije ostaju
                    neovisne i objektivne. Ova provizija nam pomaže održavati web stranicu besplatnom za sve korisnike.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Ograničenje Odgovornosti</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">U najvećoj mjeri dopuštenoj zakonom:</p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Nismo odgovorni za bilo kakve gubitke nastale korištenjem informacija s naše stranice</li>
                  <li>Ne jamčimo da će naša stranica biti uvijek dostupna ili bez grešaka</li>
                  <li>Nismo odgovorni za radnje ili ponašanje kladionica koje recenziramo</li>
                  <li>Sve odluke o klađenju donosite na vlastitu odgovornost</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Odgovorno Klađenje</h2>
                <div className="bg-[var(--sport-red)]/10 p-6 rounded-lg border-l-4 border-[var(--sport-red)]">
                  <p className="text-foreground font-bold mb-3">Važna Poruka o Odgovornom Klađenju</p>
                  <p className="text-[var(--sport-grey)] leading-relaxed mb-3">
                    Klađenje treba biti zabava, nikada obveza. Kladite se samo s novcem koji si možete priuštiti
                    izgubiti. Ako mislite da imate problem s kockanjem, potražite pomoć:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                    <li>Centar za ovisnosti: +385 1 487 2555</li>
                    <li>BeGambleAware.org</li>
                    <li>GamCare.org.uk</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Zabranjeno Ponašanje</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed mb-4">
                  Zabranjeno je koristiti našu stranicu za:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[var(--sport-grey)] ml-4">
                  <li>Bilo kakve nezakonite aktivnosti</li>
                  <li>Narušavanje rada stranice ili servera</li>
                  <li>Prikupljanje podataka drugih korisnika</li>
                  <li>Slanje spama ili neželjenih poruka</li>
                  <li>Pokušaj neovlaštenog pristupa sustavu</li>
                  <li>Širenje virusa ili štetnog koda</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Promjene Uvjeta</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Zadržavamo pravo izmjene ovih Uvjeta korištenja u bilo kojem trenutku. Promjene će biti objavljene na
                  ovoj stranici s ažuriranim datumom. Nastavkom korištenja stranice nakon objave promjena, prihvaćate
                  nove uvjete.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Primjenjivo Pravo</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  Ovi Uvjeti korištenja regulirani su i tumače se u skladu sa zakonima Republike Hrvatske. Sve sporove
                  rješavat će nadležni sudovi u Hrvatskoj.
                </p>
              </section>

              <section className="bg-[var(--sport-light-grey)] p-8 border-l-4 border-[var(--sport-blue)] rounded-r-lg">
                <h2 className="text-3xl font-bold mb-4">13. Odjava Odgovornosti</h2>
                <p className="text-[var(--sport-grey)] leading-relaxed">
                  STRANICA I SVE INFORMACIJE PRUŽAJU SE "KAKVE JESU" BEZ BILO KAKVIH JAMSTAVA, IZRIČITIH ILI
                  PODRAZUMIJEVANIH. NE JAMČIMO TOČNOST, POTPUNOST ILI KORISNOST BILO KOJIH INFORMACIJA NA STRANICI.
                </p>
              </section>

              <section className="bg-gradient-to-br from-[var(--sport-blue)] to-[#2d5aa0] p-8 rounded-xl text-white">
                <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
                <p className="text-white/90 leading-relaxed mb-4">
                  Ako imate pitanja o ovim Uvjetima korištenja, molimo kontaktirajte nas:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">
                    Email:{" "}
                    <a
                      href="mailto:legal@hrvatskastranicekladenje.com"
                      className="text-white hover:text-[var(--sport-orange)] underline transition-colors"
                    >
                      legal@hrvatskastranicekladenje.com
                    </a>
                  </p>
                  <p className="text-white/90 text-sm mt-4">Odgovorit ćemo na vaš upit u najkraćem mogućem roku.</p>
                </div>
              </section>

              <section className="text-center py-8">
                <p className="text-[var(--sport-grey)] text-sm">
                  Korištenjem Hrvatskastranicekladenje.com potvrđujete da ste pročitali, razumjeli i prihvatili ove
                  Uvjete korištenja.
                </p>
                <p className="text-foreground font-bold mt-4">
                  18+ | Igrajte Odgovorno | Kockanje Može Uzrokovati Ovisnost
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>

      <HskFooter />
    </div>
  )
}
