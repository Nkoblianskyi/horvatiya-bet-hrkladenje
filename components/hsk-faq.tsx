"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function HskFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Kako provjeriti legalnost kladionice?",
      answer:
        "Svaki legalni operator u Hrvatskoj mora posjedovati dozvolu Ministarstva financija. Informacija o licenci obično se nalazi u podnožju web stranice. Dodatno, sve platforme na našoj listi prošle su provjeru regulatornog statusa i sigurnosnih certifikata.",
    },
    {
      question: "Što uključuje bonus dobrodošlice?",
      answer:
        "Bonus dobrodošlice najčešće predstavlja dodatna sredstva na prvi depozit ili besplatne oklade. Svaki bonus dolazi s uvjetima - obično je potrebno odigrati određeni iznos prije podizanja. Preporučujemo detaljno proučavanje pravila prije aktivacije bilo koje promocije.",
    },
    {
      question: "Koliko traje proces isplate?",
      answer:
        "Vrijeme isplate varira ovisno o operatoru i odabranoj metodi. Elektronički novčanici omogućuju najbrže transakcije (24-48 sati), dok bankovni prijenosi mogu trajati do 5 radnih dana. Prva isplata zahtijeva verifikaciju identiteta što dodatno produljuje proces.",
    },
    {
      question: "Je li moguće klađenje putem mobilnog uređaja?",
      answer:
        "Svi moderni operatori nude mobilno iskustvo - bilo kroz optimizirane web stranice ili dedicirane aplikacije. Funkcionalnost mobilne verzije gotovo je identična desktop sučelju, uključujući sve opcije klađenja, promocije i upravljanje računom.",
    },
    {
      question: "Što učiniti u slučaju spora s kladionicom?",
      answer:
        "Prvi korak je kontakt s korisničkom službom operatora uz detaljno obrazloženje problema. Većina sporova nastaje zbog nerazumijevanja uvjeta korištenja. Ako situacija ostane neriješena, moguće je podnijeti pritužbu regulatoru - Ministarstvu financija RH.",
    },
    {
      question: "Na koji način HRKladenje ostvaruje prihod?",
      answer:
        "Portal surađuje s kladionicama kroz partnerske programe. Međutim, poslovni odnosi ne utječu na metodologiju ocjenjivanja niti na konačne ocjene. Sve platforme evaluiramo prema identičnim kriterijima bez obzira na status partnerstva.",
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-16 bg-[var(--sport-white)]">
      <div className="container mx-auto px-4 max-w-[800px]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--sport-navy)] mb-2">Česta Pitanja</h2>
          <p className="text-[var(--sport-steel)]">Odgovori na najčešće upite naših čitatelja</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--sport-silver)]/30 rounded overflow-hidden bg-[var(--sport-white)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--sport-cloud)] transition-colors"
              >
                <span className="font-medium text-[var(--sport-navy)] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--sport-steel)] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-[var(--sport-slate)] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
