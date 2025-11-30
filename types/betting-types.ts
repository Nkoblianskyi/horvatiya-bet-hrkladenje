export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSitesHR: BettingSite[] = [
  {
    id: 1,
    name: "PSK",
    logo: "/psk.webp",
    bonus: "Dvaput Je Dvaput 2x100€",
    dopBonus: "",
    url: "https://www.psk.hr/",
    rating: 9.8,
    stars: 5,
    reviews: 3784,
    badges: ["PREPORUČENO"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Vrijede T&C",
    isTopRating: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.5,
    stars: 5,
    reviews: 2124,
    badges: ["POPULARNO"],
    terms: "18+ • Sigurna platforma • Licencirano • Odgovorno klađenje",
    isTrending: true,
  },
  {
    id: 3,
    name: "Germania Sport",
    logo: "/germania.svg",
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.3,
    stars: 5,
    reviews: 2441,
    badges: ["VRHUNSKI IZBOR"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isTopLine: true,
  },
  {
    id: 4,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.0,
    stars: 5,
    reviews: 2987,
    badges: ["KVALITETAN IZBOR"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",
    isTrending: true,
  },
]
