export interface ProductData {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  category: string
  packageSize?: string
  sku?: string
}

export const productDatabase: Record<string, ProductData> = {
  // Kávék
  'nescafe-classic-3in1': {
    title: 'NESCAFÉ Classic 3in1',
    description: 'Klasszikus instant kávé cukorral és tejporral - tökéletes harmónia minden csészében.',
    category: 'kave',
    packageSize: '1000g',
    sku: '11336984',
    image: {
      url: '/images/11336984_NESCAFe_Classic_3in1_1000g_2025.png',
      alt: 'NESCAFÉ Classic 3in1 1000g',
    },
  },
  'nescafe-classic-vending': {
    title: 'NESCAFÉ Classic Vending',
    description: 'Speciálisan kávéautomatákhoz kifejlesztett instant kávé.',
    category: 'kave',
    packageSize: '500g',
    sku: '12492506',
    image: {
      url: '/images/12492506_NESCAFE_CLASSIC_Vending_500g.png',
      alt: 'NESCAFÉ Classic Vending 500g',
    },
  },
  'nescafe-espresso': {
    title: 'NESCAFÉ Espresso',
    description: 'Intenzív, erőteljes espresso ízvilág - a prémium kávé élvezők választása.',
    category: 'kave',
    packageSize: '1000g',
    sku: '12505166',
    image: {
      url: '/images/12505166_NESCAFE_espresso_1000g.jpg',
      alt: 'NESCAFÉ Espresso 1000g',
    },
  },
  'nescafe-superiore': {
    title: 'NESCAFÉ Superiore',
    description: 'Kiváló minőségű prémium kávé elegáns, kiegyensúlyozott ízvilággal.',
    category: 'kave',
    packageSize: '1000g',
    sku: '12505167',
    image: {
      url: '/images/12505167_NESCAFE_superiore_1000G.jpg',
      alt: 'NESCAFÉ Superiore 1000g',
    },
  },
  'nescafe-intenso': {
    title: 'NESCAFÉ Intenso',
    description: 'Gazdag, testes ízvilág azoknak, akik az erős kávét kedvelik.',
    category: 'kave',
    packageSize: '1000g',
    sku: '12505170',
    image: {
      url: '/images/12505170_NESCAFE_intenso_1000g.jpg',
      alt: 'NESCAFÉ Intenso 1000g',
    },
  },
  'nescafe-alegria-intense': {
    title: 'NESCAFÉ Alegria Intense',
    description: 'Professzionális kávéautomatákhoz készült intenzív kávékeverék.',
    category: 'kave',
    packageSize: '500g',
    sku: '12535829',
    image: {
      url: '/images/12535829_NESCAFe_Alegria_Intense_500g.jpg',
      alt: 'NESCAFÉ Alegria Intense 500g',
    },
  },

  // Tejpor és kávékrém
  'gloria-sovany-tejpor': {
    title: 'GLORIA Sovány Tejpor',
    description: 'Kiváló minőségű sovány tejpor kávéautomatákhoz - krémesen finom.',
    category: 'tejpor',
    packageSize: '10x500g',
    sku: '12025578',
    image: {
      url: '/images/12025578_GLORIA_Sovany_Tejpor_Tasak_10x500g.jpg',
      alt: 'GLORIA Sovány Tejpor 10x500g',
    },
  },
  'coffee-mate': {
    title: 'COFFEE-MATE Kávékrémező',
    description: 'Kávékrémező por - krémesebb, lágyabb kávéélményért.',
    category: 'tejpor',
    image: {
      url: '/images/12455217_COFFEE-MATE_Kavekremezo.png',
      alt: 'COFFEE-MATE Kávékrémező',
    },
  },

  // Forró csoki
  'nestle-cacao-mix-milky': {
    title: 'NESTLÉ Cacao Mix Milky',
    description: 'Krémes, tejcsokoládés instant italpor - a család kedvence.',
    category: 'csoki',
    packageSize: '10x1kg',
    sku: '12595433',
    image: {
      url: '/images/12595433_NESTLE_Cacao_Mix_Milky_10x1kg.jpg',
      alt: 'NESTLÉ Cacao Mix Milky 10x1kg',
    },
  },
  'nestle-alegria-kakaopor': {
    title: 'NESTLÉ Alegria Kakaópor',
    description: 'Professzionális kakaópor kávéautomatákhoz.',
    category: 'csoki',
    sku: '12596432',
    image: {
      url: '/images/12596432_Nestle_Alegria_kakaopor.jpg',
      alt: 'NESTLÉ Alegria Kakaópor',
    },
  },

  // Tea
  'nestea-citromos': {
    title: 'NESTEA Citromos Tea',
    description: 'Frissítő citromos tea instant por - hidegen és melegen is finom.',
    category: 'tea',
    packageSize: '1kg',
    sku: '12345007',
    image: {
      url: '/images/12345007_NESTEA_Citromos_Hideg-Meleg_tea_1kg__10.jpg',
      alt: 'NESTEA Citromos Tea 1kg',
    },
  },

  // Kiegészítők
  'nescafe-nadcukor': {
    title: 'NESCAFÉ Nádcukor Stick',
    description: 'Nádcukor stickekben - természetes édesítés kávéhoz.',
    category: 'kiegeszito',
    packageSize: '1000x4g',
    sku: '12444681',
    image: {
      url: '/images/12444681_Nescafe_Nadcukor_stick_1000x4g.jpg',
      alt: 'NESCAFÉ Nádcukor Stick 1000x4g',
    },
  },
  'nescafe-fehercukor': {
    title: 'NESCAFÉ Fehércukor Stick',
    description: 'Fehércukor stickekben - praktikus adagolás.',
    category: 'kiegeszito',
    packageSize: '4g',
    sku: '12587156',
    image: {
      url: '/images/12587156_Nescafe_Fehercukor_stick_4g.jpg',
      alt: 'NESCAFÉ Fehércukor Stick 4g',
    },
  },
  'fa-keveropacika': {
    title: 'Fa Keverőpálcika',
    description: 'Környezetbarát fa keverőpálcika kávéautomatákhoz.',
    category: 'kiegeszito',
    sku: '12533570',
    image: {
      url: '/images/12533570_Fa_Keveropalcika_Kaveautomatakhoz.png',
      alt: 'Fa Keverőpálcika',
    },
  },
  'nescafe-papirpohar': {
    title: 'NESCAFÉ Papírpohár',
    description: 'NESCAFÉ márkás papírpohár automatákhoz.',
    category: 'kiegeszito',
    image: {
      url: '/images/Nescafe_papirpohar_jobb_felbontas.png',
      alt: 'NESCAFÉ Papírpohár',
    },
  },
}

export function getProductsByCategory(category: string) {
  return Object.entries(productDatabase)
    .filter(([, product]) => product.category === category)
    .map(([slug, product]) => ({
      slug,
      ...product,
    }))
}

export function getAllProducts() {
  return Object.entries(productDatabase).map(([slug, product]) => ({
    slug,
    ...product,
  }))
}

export function getCategoryName(slug: string) {
  const categories: Record<string, string> = {
    kave: 'Kávék',
    tejpor: 'Tejpor & Krémező',
    csoki: 'Forró Csokoládé',
    tea: 'Tea',
    kiegeszito: 'Kiegészítők',
  }
  return categories[slug] || slug
}
