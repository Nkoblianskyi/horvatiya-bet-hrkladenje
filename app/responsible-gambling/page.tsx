import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"
import { HskCookieConsent } from "@/components/hsk-cookie-consent"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HskHeader />

      {/* Hero Section */}
      <section className="relative bg-white pt-24 md:pt-32 pb-12 md:pb-16 border-b-2 border-slate-200">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-[var(--sport-orange)] text-white font-bold text-xs uppercase tracking-wide mb-6">
              Odgovorno Klađenje
            </div>
            <h1 className="font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight text-slate-900">
              Kladite Se Odgovorno
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
              Klađenje je zabava i treba takvo ostati. Saznajte kako kontrolirati svoje navike i prepoznati znakove
              problema.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1050px]">
          {/* Introduction */}
          <div className="mb-12 bg-slate-50 p-8 border-l-4 border-[var(--sport-orange)]">
            <p className="text-lg text-slate-700 leading-relaxed">
              Online klađenje može biti uzbudljiv oblik zabave, ali važno je pristupiti mu s odgovornošću. Hrvatska
              Stranica Klađenje promovira siguran pristup klađenju i edukaciju svih korisnika o potencijalnim rizicima
              te važnosti postavljanja granica.
            </p>
          </div>

          {/* Signs of Problem */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Znakovi Problematičnog Klađenja
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Prepoznavanje ranih znakova problema s klađenjem ključno je za pravovremenu reakciju. Obratite pažnju na
                sljedeće obrasce ponašanja:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "Trošenje više vremena ili novca nego što ste planirali",
                  "Pokušaj vraćanja izgubljenog novca povećanjem uloga",
                  "Zapostavljanje obaveza, posla ili obitelji zbog klađenja",
                  "Zaduživanje ili posudba novca za klađenje",
                  "Skrivanje aktivnosti klađenja od bliskih osoba",
                  "Osjećaj krivnje, anksioznosti ili depresije vezano uz klađenje",
                  "Nemogućnost kontrole ili smanjenja aktivnosti klađenja",
                  "Korištenje klađenja kao bijega od problema",
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border-2 border-slate-200 p-4">
                    <div className="w-6 h-6 bg-[var(--sport-orange)] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm">{sign}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsible Tips */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Savjeti Za Odgovorno Klađenje
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 border-l-4 border-[var(--sport-blue)]">
                <h3 className="font-bold text-xl text-slate-900 mb-3 uppercase">Postavite Budget</h3>
                <p className="text-slate-700 leading-relaxed">
                  Prije nego što započnete s klađenjem, odredite točan iznos koji možete priuštiti izgubiti bez utjecaja
                  na vaš životni standard. Nikada ne premašujte ovaj limit i nikada ne koristite novac namijenjen za
                  osnovne životne potrebe.
                </p>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-[var(--sport-blue)]">
                <h3 className="font-bold text-xl text-slate-900 mb-3 uppercase">Koristite Vremenska Ograničenja</h3>
                <p className="text-slate-700 leading-relaxed">
                  Odredite unaprijed koliko vremena dnevno ili tjedno možete posvetiti klađenju. Koristite alarme i
                  podsjetnike kako biste se pridržavali ovog limita. Većina licenciranih platformi nudi alate za
                  postavljanje vremenskih ograničenja.
                </p>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-[var(--sport-blue)]">
                <h3 className="font-bold text-xl text-slate-900 mb-3 uppercase">Ne Pokušavajte Vratiti Gubitke</h3>
                <p className="text-slate-700 leading-relaxed">
                  Gubitak je prirodan dio klađenja. Nikada ne povećavajte uloge u pokušaju da nadoknadite izgubljeni
                  novac. Ovo često vodi ka većim gubicima i razvoju nezdravih obrazaca ponašanja.
                </p>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-[var(--sport-blue)]">
                <h3 className="font-bold text-xl text-slate-900 mb-3 uppercase">Kladite Se Trezvog Uma</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nikada se nemojte kladiti pod utjecajem alkohola ili droga, niti kada ste emocionalno uzrujani. Odluke
                  donesene u takvim stanjima često su iracionalne i mogu voditi ka financijskim gubicima.
                </p>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-[var(--sport-blue)]">
                <h3 className="font-bold text-xl text-slate-900 mb-3 uppercase">Pratite Svoje Aktivnosti</h3>
                <p className="text-slate-700 leading-relaxed">
                  Vodite evidenciju svojih aktivnosti klađenja - koliko vremena provodite, koliko novca trošite, koliko
                  gubite ili dobivate. Redovita analiza ovih podataka može vam pomoći prepoznati problematične obrasce.
                </p>
              </div>
            </div>
          </div>

          {/* Self-Exclusion */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Opcije Samo-Isključenja
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Ako osjećate da gubite kontrolu nad svojim navikama klađenja, opcije samo-isključenja mogu vam pomoći:
              </p>
              <div className="bg-amber-50 border-2 border-amber-200 p-6 mt-4">
                <h3 className="font-bold text-lg text-slate-900 mb-3 uppercase">Privremeno Isključenje</h3>
                <p className="mb-2">
                  Većina licenciranih kladionica nudi mogućnost privremenog zatvaranja računa na period od nekoliko
                  dana, tjedana ili mjeseci. Tijekom ovog perioda nećete moći pristupiti svom računu.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3 uppercase">Trajno Isključenje</h3>
                <p className="mb-2">
                  Za ozbiljnije situacije, možete zatražiti trajno isključenje iz jedne ili više kladionica. Ova odluka
                  je obično neopoziva ili zahtijeva dug proces ponovne aktivacije.
                </p>
              </div>
              <div className="bg-slate-100 border-2 border-slate-300 p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3 uppercase">Nacionalni Registar</h3>
                <p>
                  Razmislite o upisu u nacionalni registar isključenih osoba ako je dostupan u Hrvatskoj. Ovo vas
                  isključuje iz svih licenciranih operatora odjednom.
                </p>
              </div>
            </div>
          </div>

          {/* Support Resources */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Resursi Podrške U Hrvatskoj
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Ako vi ili netko koga poznajete ima problem s klađenjem, važno je potražiti stručnu pomoć. Dostupni su
                brojni resursi:
              </p>
              <div className="bg-white border-2 border-[var(--sport-blue)] p-8 mt-6">
                <h3 className="font-bold text-2xl text-[var(--sport-blue)] mb-4 text-center uppercase">
                  Potražite Pomoć
                </h3>
                <div className="space-y-4">
                  <p className="text-center font-medium">
                    Profesionalna psihološka pomoć i savjetovanje dostupni su u mnogim zdravstvenim ustanovama širom
                    Hrvatske.
                  </p>
                  <p className="text-center">
                    Grupe podrške i terapijski programi specijalizirani za problematično klađenje mogu pružiti
                    kontinuiranu podršku u procesu oporavka.
                  </p>
                  <p className="text-center text-sm italic">
                    Razgovor s povjerljivom osobom - članom obitelji, prijateljem ili stručnjakom - prvi je korak ka
                    rješenju problema.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Alati Za Kontrolu
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Sve licencirane kladionice u Hrvatskoj moraju pružiti alate koji korisnicima pomažu kontrolirati svoje
                aktivnosti:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Limiti Depozita</h4>
                  <p className="text-sm">
                    Postavite dnevne, tjedno ili mjesečne limite koliko možete uplatiti na svoj račun.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Limiti Gubitka</h4>
                  <p className="text-sm">Odredite maksimalan iznos koji možete izgubiti u određenom periodu.</p>
                </div>
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Limiti Vremena</h4>
                  <p className="text-sm">
                    Kontrolirajte koliko dugo možete biti prijavljeni na platformu tijekom dana.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Reality Check</h4>
                  <p className="text-sm">Primajte podsjetnike o tome koliko dugo ste aktivni na stranici.</p>
                </div>
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Pauza Od Igre</h4>
                  <p className="text-sm">Privremeno zatvorite pristup svom računu kada vam je potreban odmor.</p>
                </div>
                <div className="bg-slate-50 p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Povijest Aktivnosti</h4>
                  <p className="text-sm">
                    Pregledajte detaljnu povijest svih svojih transakcija i aktivnosti klađenja.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Family */}
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-6 uppercase border-b-2 border-slate-200 pb-3">
              Za Obitelj I Prijatelje
            </h2>
            <div className="bg-slate-50 p-8 border-l-4 border-[var(--sport-orange)]">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ako sumnjate da vaš član obitelji ili prijatelj ima problem s klađenjem, postoje načini kako možete
                  pomoći:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p>Razgovarajte otvoreno i bez osuđivanja o vašim zabrinutostima.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p>Potaknite ih da potraže profesionalnu pomoć i ponudite podršku u tom procesu.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p>Izbjegavajte financijsko pomaganje koje bi moglo omogućiti nastavak klađenja.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p>Edukujte se o problematičnom klađenju kako biste bolje razumjeli situaciju.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--sport-orange)] rounded-full flex-shrink-0 mt-2"></div>
                    <p>
                      Potražite podršku za sebe - pomaganje nekome s ovisničkim ponašanjem može biti emocionalno
                      zahtjevno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-[var(--sport-blue)] text-white p-8 md:p-10 text-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-4 uppercase">Zapamtite</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Klađenje je forma zabave, ne način zarade. Igrajte odgovorno, postavite limite i nemojte se bojati
              potražiti pomoć ako je potrebno. Vaše zdravlje i dobrobit važniji su od bilo kojeg dobitka.
            </p>
          </div>
        </div>
      </section>

      <HskFooter />
      <HskCookieConsent />
    </div>
  )
}
