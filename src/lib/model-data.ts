export interface ModelSpecification {
  group: string
  items: {
    label: string
    value: string
  }[]
}

export interface ModelData {
  title: string
  description: string
  coverImage: {
    url: string
    alt: string
  }
  gallery: {
    url: string
    alt: string
  }[]
  features: string[]
  specifications: ModelSpecification[]
  longDescription: string
  relatedModels: string[]
  category: string
}

export const modelDatabase: Record<string, ModelData> = {
  // NESCAFÉ kávégépek
  'nescafe-alegria-630': {
    title: 'NESCAFÉ Alegria 630',
    description: 'Kompakt és megbízható kávéautomata kisebb irodák számára. Friss tejjel és változatos italválasztékkal.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/NESCAFÉ Alegria 630 front.jpg',
      alt: 'NESCAFÉ Alegria 630 kávéautomata',
    },
    gallery: [
      { url: '/images/NESCAFÉ Alegria 630 front.jpg', alt: 'NESCAFÉ Alegria 630 előnézet' },
    ],
    features: [
      'Kompakt méret - helytakarékos',
      'Friss tej rendszer',
      '8 féle ital választék',
      'Napi 100+ adag kapacitás',
      'Egyszerű tisztítás és karbantartás',
      'NESCAFÉ minőségi kávé',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '585 mm' },
          { label: 'Szélesség', value: '330 mm' },
          { label: 'Mélység', value: '540 mm' },
          { label: 'Súly', value: '32 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '2 kg' },
          { label: 'Tej tartály', value: '4 liter' },
          { label: 'Pohár kapacitás', value: '300 db' },
          { label: 'Napi kapacitás', value: '100+ adag' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '1600W' },
          { label: 'Energiaosztály', value: 'A' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® Alegria 630 a tökéletes választás kisebb irodák és munkahelyek számára. Ez a kompakt, mégis teljes értékű kávéautomata egyesíti a NESCAFÉ® világszerte ismert minőségét a modern technológiával.</p>
      
      <h3>A NESCAFÉ® minőség garanciája</h3>
      <p>A NESCAFÉ® több mint 80 éves tapasztalatával és szakértelmével garantálja a kiváló minőségű kávéélményt. Minden csésze kávé mögött generációk tudása és a fenntartható kávétermesztés iránti elkötelezettség áll.</p>
      
      <h3>Fenntartható kávétermesztés</h3>
      <p>A NESCAFÉ® termelőföldi program keretében támogatjuk a kisbirtokos gazdákat, segítve őket abban, hogy gazdaságaik hatékonyabbá és fenntarthatóbbá váljanak. Ez biztosítja, hogy minden csésze NESCAFÉ® kávé nem csak finom, hanem felelősségtudatos választás is.</p>
      
      <h3>Egyszerű használat és karbantartás</h3>
      <p>Az Alegria 630 modellt a könnyű kezelhetőség jegyében tervezték. Az intuitív kezelőfelület és az egyszerű tisztítási folyamat minimális időt és erőfeszítést igényel a személyzettől.</p>
    `,
    relatedModels: ['nescafe-alegria-860', 'nescafe-alegria-ats650', 'nescafe-fts-30-e'],
  },

  'nescafe-alegria-860': {
    title: 'NESCAFÉ Alegria 860',
    description: 'Nagy kapacitású professzionális kávéautomata. Ideális nagyobb irodák és közösségi terek számára.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/NESCAFÉ Alegria 860.jpg',
      alt: 'NESCAFÉ Alegria 860 kávéautomata',
    },
    gallery: [
      { url: '/images/NESCAFÉ Alegria 860.jpg', alt: 'NESCAFÉ Alegria 860' },
    ],
    features: [
      'Nagy kapacitás - 200+ adag naponta',
      'Széles italválaszték',
      'Dupla kávétartály',
      'Friss tej opció',
      'Energiatakarékos üzemmód',
      'Telemetria kompatibilis',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '715 mm' },
          { label: 'Szélesség', value: '400 mm' },
          { label: 'Mélység', value: '580 mm' },
          { label: 'Súly', value: '45 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '2 x 2 kg' },
          { label: 'Tej tartály', value: '6 liter' },
          { label: 'Pohár kapacitás', value: '500 db' },
          { label: 'Napi kapacitás', value: '200+ adag' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '1800W' },
          { label: 'Energiaosztály', value: 'A+' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® Alegria 860 a professzionális kávéautomaták csúcsát képviseli. Nagy kapacitása és megbízhatósága ideális választássá teszi forgalmas irodák, gyárak és közintézmények számára.</p>
      
      <h3>Maximális teljesítmény</h3>
      <p>Naponta akár 200+ adag kávé elkészítésére képes, így még a legnagyobb forgalom esetén is biztosítja a folyamatos kávéellátást. A dupla kávétartály lehetővé teszi különböző kávékeverékek egyidejű használatát.</p>
      
      <h3>NESCAFÉ® minőség minden csészében</h3>
      <p>Minden NESCAFÉ® termék mögött évtizedek kutatása és fejlesztése áll. A precíz adagolás és a tökéletesített receptúrák garantálják a konzisztens, kiváló minőségű kávéélményt.</p>
    `,
    relatedModels: ['nescafe-alegria-630', 'nescafe-alegria-ats650', 'nescafe-alegria-12500'],
  },

  'nescafe-alegria-ats650': {
    title: 'NESCAFÉ Alegria ATS650',
    description: 'Csúcstechnológiás kávéautomata érintőképernyővel. Prémium kávéélmény modern munkakörnyezetben.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/NESCAFÉ Alegria ATS650.jpg',
      alt: 'NESCAFÉ Alegria ATS650 kávéautomata',
    },
    gallery: [
      { url: '/images/NESCAFÉ Alegria ATS650.jpg', alt: 'NESCAFÉ Alegria ATS650' },
    ],
    features: [
      '7" színes érintőképernyő',
      'Személyre szabható italok',
      'WiFi kapcsolat',
      'Mobilfizetés támogatás',
      'Automatikus tisztítás',
      'Videó reklám lehetőség',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '650 mm' },
          { label: 'Szélesség', value: '380 mm' },
          { label: 'Mélység', value: '550 mm' },
          { label: 'Súly', value: '38 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '3 kg' },
          { label: 'Tej tartály', value: '5 liter' },
          { label: 'Pohár kapacitás', value: '400 db' },
          { label: 'Napi kapacitás', value: '150+ adag' },
        ],
      },
      {
        group: 'Technológia',
        items: [
          { label: 'Kijelző', value: '7" touch screen' },
          { label: 'Kapcsolat', value: 'WiFi, Bluetooth' },
          { label: 'Fizetés', value: 'NFC, QR kód' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® Alegria ATS650 a legmodernebb technológia és a hagyományos kávékészítés művészetének találkozása. Ez az automata a digitális kor igényeire szabott megoldásokat kínál.</p>
      
      <h3>Intelligens technológia</h3>
      <p>A 7 colos érintőképernyő intuitív felhasználói élményt nyújt, miközben lehetővé teszi a teljes testreszabást és a promóciós tartalmak megjelenítését.</p>
      
      <h3>Kapcsolódás és kényelem</h3>
      <p>WiFi kapcsolat, mobil fizetési lehetőségek és telemetria támogatás teszi ezt az automatát a modern munkahelyek ideális választásává.</p>
    `,
    relatedModels: ['nescafe-alegria-630', 'nescafe-alegria-860', 'nescafe-fts-60-e'],
  },

  'nescafe-alegria-12500': {
    title: 'NESCAFÉ Alegria 12500',
    description: 'Ipari méretű kávéautomata extrém nagy kapacitással. Gyárak és nagy létszámú munkahelyek számára.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/NESCAFÉ Alegria 860.jpg',
      alt: 'NESCAFÉ Alegria 12500 kávéautomata',
    },
    gallery: [
      { url: '/images/Alegria 12500.png', alt: 'NESCAFÉ Alegria 12500' },
      { url: '/images/NESCAFÉ Alegria ATS650.png', alt: 'Nagy kapacitás' },
      { url: '/images/02_FTS-60-E-front.jpg', alt: 'Ipari kivitel' },
    ],
    features: [
      'Extrém nagy kapacitás',
      'Dupla adagoló rendszer',
      'Robusztus ipari kivitel',
      'Folyamatos üzemmód',
      'Távfelügyelet',
      'Vandálbiztos ház',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '850 mm' },
          { label: 'Szélesség', value: '500 mm' },
          { label: 'Mélység', value: '650 mm' },
          { label: 'Súly', value: '65 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '2 x 5 kg' },
          { label: 'Tej tartály', value: '10 liter' },
          { label: 'Pohár kapacitás', value: '1000 db' },
          { label: 'Napi kapacitás', value: '500+ adag' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® Alegria 12500 az ipari méretű kávéautomaták csúcsmodellje. Kifejezetten nagy létszámú munkahelyek, gyárak és termelő üzemek számára tervezték.</p>
      
      <h3>Megállíthatatlan teljesítmény</h3>
      <p>Napi 500+ adag kávé elkészítésére képes megszakítás nélkül. A dupla adagoló rendszer biztosítja a folyamatos kiszolgálást még csúcsidőben is.</p>
    `,
    relatedModels: ['nescafe-alegria-860', 'nescafe-fts-60-e', 'nescafe-alegria-ats650'],
  },

  'nescafe-fts-30-e': {
    title: 'NESCAFÉ FTS-30-E',
    description: 'Kompakt asztali kávéautomata kis csapatok számára. Egyszerű, gyors, minőségi kávé.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/FTS-30-E-FRONT.jpg',
      alt: 'NESCAFÉ FTS-30-E kávéautomata',
    },
    gallery: [
      { url: '/images/FTS-30-E-FRONT.jpg', alt: 'FTS-30-E előnézet' },
      { url: '/images/08 - FTS 30 I SHW FRONT.jpg', alt: 'FTS-30 alternatív nézet' },
    ],
    features: [
      'Asztali méret',
      'Gyors kávékészítés',
      'Egyszerű kezelés',
      '6 italválaszték',
      'Alacsony energiafogyasztás',
      'Csendes működés',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '450 mm' },
          { label: 'Szélesség', value: '280 mm' },
          { label: 'Mélység', value: '400 mm' },
          { label: 'Súly', value: '18 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '1 kg' },
          { label: 'Víztartály', value: '3 liter' },
          { label: 'Napi kapacitás', value: '50 adag' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® FTS-30-E a tökéletes megoldás kis irodák és csapatok számára. Kompakt mérete ellenére teljes értékű kávéélményt nyújt.</p>
      
      <h3>Helytakarékos design</h3>
      <p>Az asztali méret lehetővé teszi, hogy bárhol elférjen - konyhapulton, irodai sarokban vagy tárgyalóteremben.</p>
    `,
    relatedModels: ['nescafe-fts-60-e', 'nescafe-ftp-30-e', 'nescafe-alegria-630'],
  },

  'nescafe-fts-60-e': {
    title: 'NESCAFÉ FTS-60-E',
    description: 'Közepes méretű automata növekvő csapatok számára. Megbízható teljesítmény, széles választék.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/02_FTS-60-E-front.jpg',
      alt: 'NESCAFÉ FTS-60-E kávéautomata',
    },
    gallery: [
      { url: '/images/02_FTS-60-E-front.jpg', alt: 'FTS-60-E előnézet' },
    ],
    features: [
      'Közepes kapacitás',
      '10 italválaszték',
      'Friss tej opció',
      'LCD kijelző',
      'Programozható funkciók',
      'Energiatakarékos mód',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '550 mm' },
          { label: 'Szélesség', value: '350 mm' },
          { label: 'Mélység', value: '500 mm' },
          { label: 'Súly', value: '28 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '2 kg' },
          { label: 'Tej tartály', value: '4 liter' },
          { label: 'Napi kapacitás', value: '100 adag' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® FTS-60-E a növekvő vállalkozások ideális partnere. Egyesíti a kompakt méretet a professzionális teljesítménnyel.</p>
      
      <h3>Rugalmas megoldás</h3>
      <p>A széles italválaszték és a programozható funkciók lehetővé teszik, hogy minden dolgozó megtalálja a kedvenc italát.</p>
    `,
    relatedModels: ['nescafe-fts-30-e', 'nescafe-ftp-60-e', 'nescafe-alegria-630'],
  },

  'nescafe-ftp-30-e': {
    title: 'NESCAFÉ FTP-30-E',
    description: 'Prémium asztali automata friss tejjel. Barista minőség az irodában.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/05 - FTP 30 E VHO SHW FRONT.jpg',
      alt: 'NESCAFÉ FTP-30-E kávéautomata',
    },
    gallery: [
      { url: '/images/05 - FTP 30 E VHO SHW FRONT.jpg', alt: 'FTP-30-E előnézet' },
    ],
    features: [
      'Friss tej rendszer',
      'Barista minőségű kávé',
      'Cappuccino és latte',
      'Kompakt méret',
      'Automatikus öblítés',
      'Higiénikus működés',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '480 mm' },
          { label: 'Szélesség', value: '300 mm' },
          { label: 'Mélység', value: '420 mm' },
          { label: 'Súly', value: '22 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '1.5 kg' },
          { label: 'Tej tartály', value: '2 liter' },
          { label: 'Napi kapacitás', value: '60 adag' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® FTP-30-E egyesíti az asztali méret kényelmét a friss tejes kávék luxusával. Tökéletes választás minőséget értékelő kis csapatok számára.</p>
      
      <h3>Friss tej, tökéletes hab</h3>
      <p>Az integrált friss tej rendszer krémesen habos cappuccinót és lattét készít, barista minőségben.</p>
    `,
    relatedModels: ['nescafe-ftp-60-e', 'nescafe-fts-30-e', 'nescafe-alegria-630'],
  },

  'nescafe-ftp-60-e': {
    title: 'NESCAFÉ FTP-60-E',
    description: 'Nagy teljesítményű automata friss tejjel. Professzionális kávéélmény nagyobb csapatok számára.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/07 - FTP 60 E SHW_MVH FRONT.jpg',
      alt: 'NESCAFÉ FTP-60-E kávéautomata',
    },
    gallery: [
      { url: '/images/07 - FTP 60 E SHW_MVH FRONT.jpg', alt: 'FTP-60-E előnézet' },
    ],
    features: [
      'Nagy kapacitás friss tejjel',
      '12+ italválaszték',
      'Dupla tej rendszer',
      'Professzionális teljesítmény',
      'LCD vezérlés',
      'Telemetria ready',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '600 mm' },
          { label: 'Szélesség', value: '400 mm' },
          { label: 'Mélység', value: '550 mm' },
          { label: 'Súly', value: '35 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávé tartály', value: '3 kg' },
          { label: 'Tej tartály', value: '6 liter' },
          { label: 'Napi kapacitás', value: '150 adag' },
        ],
      },
    ],
    longDescription: `
      <p>A NESCAFÉ® FTP-60-E a professzionális friss tejes automaták csúcsmodellje. Nagy kapacitása és széles italválasztéka ideálissá teszi forgalmas irodák számára.</p>
      
      <h3>Maximális választék, maximális minőség</h3>
      <p>12+ különböző ital, mindegyik a NESCAFÉ® minőségi kávéjából és friss tejből készül.</p>
    `,
    relatedModels: ['nescafe-ftp-30-e', 'nescafe-fts-60-e', 'nescafe-alegria-860'],
  },

  // Más márkájú automata megtartása változatosság kedvéért
  'astoria-forma': {
    title: 'Astoria Forma',
    description: 'Professzionális félautomata kávégép HORECA szektornak. Olasz minőség és design.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/Astoria forma.jpg',
      alt: 'Astoria Forma kávégép',
    },
    gallery: [
      { url: '/images/Astoria forma.jpg', alt: 'Astoria Forma' },
    ],
    features: [
      'Félautomata működés',
      'Professzionális gőzkar',
      '2 csoportos kivitel',
      'Rozsdamentes acél ház',
      'Programozható adagolás',
      'HORECA minőség',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '500 mm' },
          { label: 'Szélesség', value: '700 mm' },
          { label: 'Mélység', value: '550 mm' },
          { label: 'Súly', value: '55 kg' },
        ],
      },
      {
        group: 'Teljesítmény',
        items: [
          { label: 'Kazán', value: '11 liter' },
          { label: 'Teljesítmény', value: '3500W' },
          { label: 'Feszültség', value: '400V 3F' },
        ],
      },
    ],
    longDescription: `
      <p>Az Astoria Forma az olasz kávékultúra és mérnöki precizitás találkozása. Professzionális HORECA környezetbe tervezett félautomata kávégép.</p>
      
      <h3>Olasz tradíció</h3>
      <p>Évtizedes tapasztalat és a legjobb olasz hagyományok egyesülnek ebben a gépben, garantálva a tökéletes espresso elkészítését.</p>
    `,
    relatedModels: ['nivona-nicr-960', 'nescafe-alegria-ats650'],
  },

  'nivona-nicr-960': {
    title: 'Nivona NICR 960',
    description: 'Prémium automata kávéfőző otthoni és kis irodai használatra. Svájci precizitás.',
    category: 'kaveautomata',
    coverImage: {
      url: '/images/nivona-nicr-960-front-view_0.png',
      alt: 'Nivona NICR 960 kávéfőző',
    },
    gallery: [
      { url: '/images/nivona-nicr-960-front-view_0.png', alt: 'Nivona NICR 960' },
    ],
    features: [
      'One-touch cappuccino',
      'Aromaprofil beállítás',
      'Színes TFT kijelző',
      'Bluetooth vezérlés',
      'Automatikus tisztítás',
      'Svájci minőség',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '340 mm' },
          { label: 'Szélesség', value: '240 mm' },
          { label: 'Mélység', value: '440 mm' },
          { label: 'Súly', value: '11 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Bab tartály', value: '250 g' },
          { label: 'Víztartály', value: '2.2 liter' },
          { label: 'Zacctartó', value: '11 adag' },
        ],
      },
    ],
    longDescription: `
      <p>A Nivona NICR 960 a svájci precizitás és a modern technológia találkozása. Tökéletes választás igényes kávékedvelők számára.</p>
      
      <h3>Személyre szabott kávéélmény</h3>
      <p>Az aromaprofil beállítási lehetőségek és a Bluetooth vezérlés lehetővé teszi, hogy mindenki a saját ízlése szerint készítse el kávéját.</p>
    `,
    relatedModels: ['astoria-forma', 'nescafe-ftp-30-e'],
  },

}

// Helper functions remain the same
export function getRelatedModels(modelSlug: string) {
  const model = modelDatabase[modelSlug]
  if (!model) return []
  
  return model.relatedModels
    .map(slug => {
      const relatedModel = modelDatabase[slug]
      if (!relatedModel) return null
      return {
        title: relatedModel.title,
        slug,
        description: relatedModel.description,
        image: relatedModel.coverImage,
        features: relatedModel.features.slice(0, 3),
        categories: [{ 
          title: getCategoryName(relatedModel.category), 
          slug: relatedModel.category 
        }],
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
}

export function getCategoryName(slug: string) {
  const categories: Record<string, string> = {
    kaveautomata: 'Kávéautomata',
    snack: 'Snack automata',
    ital: 'Italautomata',
    kombo: 'Kombó automata',
  }
  return categories[slug] || slug
}

export function getAllModels() {
  return Object.entries(modelDatabase).map(([slug, model]) => ({
    title: model.title,
    slug,
    description: model.description,
    image: model.coverImage,
    features: model.features.slice(0, 4),
    categories: [{ 
      title: getCategoryName(model.category), 
      slug: model.category 
    }],
  }))
}

export function getAllModelSlugs() {
  return Object.keys(modelDatabase)
}