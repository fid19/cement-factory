// TODO: replace `url` with your real production domain once deployed.
export const siteConfig = {
  name: "T.D. Block Factory",
  shortName: "T.D. Block Factory",
  url: "https://www.tdblockfactory.com",
  description:
    "T.D. Block Factory in Likabali, Arunachal Pradesh manufactures premium concrete blocks, paver blocks, parking tiles, and readymade walls with trusted quality and reliable supply.",
  ogImage: "/gallery/cement-block.jpg",
  locale: "en_IN",
  keywords: [
    "concrete blocks",
    "cement blocks",
    "paver blocks",
    "parking tiles",
    "readymade walls",
    "cement factory",
    "block manufacturer",
    "construction materials",
    "Likabali",
    "Arunachal Pradesh",
    "T.D. Block Factory",
  ],
  contact: {
    phone: "+918798516721",
    phoneDisplay: "+91 87985 16721",
    email: "yomnyakamdaktadur@gmail.com",
    whatsapp: "https://api.whatsapp.com/send?phone=918798516721",
  },
  address: {
    locality: "Likabali",
    region: "Arunachal Pradesh",
    country: "IN",
  },
  geo: {
    latitude: 27.6348114,
    longitude: 94.6472717,
  },
} as const

export type SiteConfig = typeof siteConfig
