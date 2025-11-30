import { HskHeader } from "@/components/hsk-header"
import { HskFooter } from "@/components/hsk-footer"
import { HskCookieConsent } from "@/components/hsk-cookie-consent"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--sport-cloud)]">
      <HskHeader />

      {/* Hero */}
      <section className="bg-[var(--sport-white)] border-b border-[var(--sport-silver)]/30 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          <p className="text-xs text-[var(--sport-steel)] uppercase tracking-wide mb-2">O portalu</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--sport-navy)] mb-4">HRKladenje.com</h1>
          <p className="text-lg text-[var(--sport-steel)] max-w-2xl">
            Nezavisni informativni resurs za analizu hrvatskog tržišta sportskog klađenja
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-4">Misija portala</h2>
            <div className="space-y-4 text-[var(--sport-slate)] text-sm leading-relaxed">
              <p>
                HRKladenje nastao je kao odgovor na potrebu za objektivnim i stručnim informacijama o kladioničkim
                servisima u Hrvatskoj. U prostoru zasićenom promotivnim sadržajima, cilj nam je pružiti činjenično
                utemeljene analize koje pomažu korisnicima donijeti informirane odluke.
              </p>
              <p>
                Redakcija portala sastoji se od analitičara s dugogodišnjim iskustvom u praćenju industrije igara na
                sreću. Svaka platforma koju evaluiramo prolazi kroz identičan proces testiranja - od otvaranja računa do
                testiranja brzine isplate.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { value: "120+", label: "Analiza" },
                { value: "6+", label: "Godina rada" },
                { value: "100%", label: "Nezavisnost" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, i) => (
                <div key={i} className="bg-[var(--sport-cloud)] p-4 rounded text-center">
                  <div className="text-xl font-bold text-[var(--sport-navy)] mb-1">{stat.value}</div>
                  <div className="text-xs text-[var(--sport-steel)] uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-[var(--sport-white)]">
        <div className="container mx-auto px-4 max-w-[900px]">
          <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-6">Načela rada</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Objektivnost",
                text: "Evaluacija temeljena na stvarnom testiranju bez vanjskog utjecaja na ocjene.",
              },
              {
                title: "Sigurnost",
                text: "Prioritet na provjeri licenci, enkripcije i zaštite korisničkih podataka.",
              },
              {
                title: "Transparentnost",
                text: "Otvorena metodologija i jasno komunicirana partnerstva.",
              },
              {
                title: "Aktualnost",
                text: "Redovno ažuriranje sadržaja prema promjenama na tržištu.",
              },
              {
                title: "Korisnički fokus",
                text: "Analiza iz perspektive stvarnog korisnika platforme.",
              },
              {
                title: "Odgovornost",
                text: "Promicanje informiranog i kontroliranog pristupa klađenju.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-[var(--sport-cloud)] p-4 rounded">
                <h3 className="font-semibold text-[var(--sport-navy)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--sport-slate)]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-[var(--sport-white)] rounded-lg border border-[var(--sport-silver)]/30 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-6">Proces evaluacije</h2>

            <div className="space-y-3">
              {[
                { num: "01", title: "Regulatorni status", text: "Provjera licenci i sigurnosnih certifikata" },
                { num: "02", title: "Bonusni program", text: "Analiza uvjeta promocija i realnosti otkupa" },
                { num: "03", title: "Korisničko sučelje", text: "Testiranje funkcionalnosti i mobilnog iskustva" },
                { num: "04", title: "Sportska ponuda", text: "Evaluacija tržišta, kvota i live opcija" },
                { num: "05", title: "Transakcije", text: "Provjera metoda plaćanja i brzine isplata" },
                { num: "06", title: "Podrška", text: "Testiranje komunikacijskih kanala i stručnosti" },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-[var(--sport-cloud)] p-4 rounded">
                  <span className="text-sm font-medium text-[var(--sport-accent)] bg-[var(--sport-white)] px-2 py-1 rounded">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--sport-navy)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--sport-slate)]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible */}
      <section className="py-12 md:py-16 bg-[var(--sport-white)]">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-[var(--sport-cloud)] rounded-lg p-6 md:p-8 border-l-4 border-[var(--sport-accent)]">
            <h2 className="text-xl font-semibold text-[var(--sport-navy)] mb-4">O odgovornom klađenju</h2>
            <p className="text-sm text-[var(--sport-slate)] leading-relaxed mb-4">
              Klađenje treba promatrati isključivo kao oblik zabave s kontroliranim troškom. Portal aktivno promiče
              informirani pristup i upoznavanje s rizicima.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Definirajte budžet i pridržavajte ga se",
                "Nikada ne pokušavajte nadoknaditi gubitke",
                "Kladite se samo sredstvima koja možete priuštiti",
                "Potražite pomoć ako primijetite problem",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 bg-[var(--sport-white)] p-3 rounded text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--sport-accent)] rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-[var(--sport-slate)]">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HskFooter />
      <HskCookieConsent />
    </div>
  )
}
