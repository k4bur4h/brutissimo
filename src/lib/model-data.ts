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
  'necta-karisma': {
    title: 'Necta Karisma',
    description: 'Prémium kávéautomata friss tejjel, 16 féle ital választékkal. Ideális nagyobb irodák és gyárak számára.',
    category: 'kaveautomata',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=1200',
      alt: 'Necta Karisma kávéautomata',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', alt: 'Kávé készítés' },
      { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', alt: 'Kezelőfelület' },
      { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', alt: 'Belső mechanizmus' },
    ],
    features: [
      'Érintőképernyős kezelőfelület',
      'Friss tej rendszer',
      '16 féle ital választék',
      'Napi 200+ adag kapacitás',
      'Automatikus tisztítási program',
      'Energiatakarékos üzemmód',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '654 mm' },
          { label: 'Mélység', value: '790 mm' },
          { label: 'Súly', value: '145 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávébab tartály', value: '2 x 2,2 kg' },
          { label: 'Instant tartály', value: '6 x 2,5 l' },
          { label: 'Tej tartály', value: '9 liter' },
          { label: 'Pohár kapacitás', value: '550 db' },
          { label: 'Napi kapacitás', value: '200+ adag' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '2300W' },
          { label: 'Energiaosztály', value: 'A+' },
          { label: 'Készenléti fogyasztás', value: '35W' },
        ],
      },
      {
        group: 'Funkciók',
        items: [
          { label: 'Fizetési rendszer', value: 'MDB protokoll' },
          { label: 'Telemetria', value: 'EVA-DTS kompatibilis' },
          { label: 'Kijelző', value: '7" színes érintőképernyő' },
          { label: 'Hűtés', value: 'R290 környezetbarát' },
        ],
      },
    ],
    longDescription: `
      <p>A Necta Karisma a legmodernebb technológiát ötvözi a kiváló kávéminőséggel. Ez a professzionális automata tökéletes választás nagyobb irodák, gyárak és közintézmények számára, ahol fontos a megbízhatóság és a minőség.</p>
      
      <h3>Kiváló kávéminőség</h3>
      <p>Az automata két különálló kávébab tartállyal rendelkezik, így egyszerre két különböző kávékeveréket kínálhat. A beépített őrlő precíz őrlési finomságot biztosít, ami garantálja a tökéletes espresso elkészítését.</p>
      
      <h3>Friss tej rendszer</h3>
      <p>A hűtött friss tej rendszer minden tejhabos ital esetén krémesen habos, barista minőségű eredményt garantál. Az automatikus tisztítási program biztosítja a higiénikus működést.</p>
      
      <h3>Intelligens kezelőfelület</h3>
      <p>A 7 colos színes érintőképernyő intuitív kezelést tesz lehetővé. A felhasználók könnyedén választhatnak a 16 féle ital közül, testreszabhatják italaikat, és akár videós reklámokat is megtekinthetnek.</p>
    `,
    relatedModels: ['necta-kikko-max', 'bianchi-lei-700', 'necta-concerto'],
  },

  'sielaff-cvs-650': {
    title: 'Sielaff CVS 650',
    description: 'Nagy kapacitású snack és ital kombó automata 650 termékhellyel. Tökéletes választás forgalmas helyszínekre.',
    category: 'kombo',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?w=1200',
      alt: 'Sielaff CVS 650 kombó automata',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800', alt: 'Termék választék' },
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'Belső elrendezés' },
      { url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800', alt: 'Kezelőfelület' },
    ],
    features: [
      '650 termék kapacitás',
      'Hűtött és szobahőmérsékletű tárolás',
      'Energiahatékony LED világítás',
      'Érintésmentes fizetési opciók',
      'Liftes termék kiadás',
      'Vandálbiztos kivitel',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '1580 mm' },
          { label: 'Mélység', value: '850 mm' },
          { label: 'Súly', value: '380 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Snack helyek', value: '350 db' },
          { label: 'Ital helyek', value: '300 db' },
          { label: 'Polcok száma', value: '6 + 6' },
          { label: 'Hűtött tér', value: '0-12°C' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '650W' },
          { label: 'Energiaosztály', value: 'A++' },
          { label: 'Hűtőközeg', value: 'R290' },
        ],
      },
    ],
    longDescription: `
      <p>A Sielaff CVS 650 a legnagyobb kapacitású kombó automatánk, amely egyszerre kínál hűtött italokat és szobahőmérsékletű snackeket. Ideális választás nagy forgalmú helyszínekre, ahol fontos a választék szélessége.</p>
      
      <h3>Maximális választék</h3>
      <p>650 termékhellyel ez az automata a legnagyobb választékot kínálja. A flexibilis polcrendszer lehetővé teszi különböző méretű termékek tárolását.</p>
      
      <h3>Energiahatékony működés</h3>
      <p>Az A++ energiaosztályú automata minimális fogyasztás mellett üzemel. A LED világítás és az intelligens hűtésvezérlés jelentős költségmegtakarítást eredményez.</p>
    `,
    relatedModels: ['sielaff-fk-270', 'bianchi-vega', 'necta-snakky-max'],
  },

  'necta-snakky-max': {
    title: 'Necta Snakky Max',
    description: 'Kompakt snack automata 32 termékválasztékkal ideális irodai környezetbe. Megbízható és könnyen kezelhető.',
    category: 'snack',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1619975362235-73fd85efa4ba?w=1200',
      alt: 'Necta Snakky Max snack automata',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800', alt: 'Termék kínálat' },
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'Belső tér' },
      { url: 'https://images.unsplash.com/photo-1556742400-b5b7a512f7de?w=800', alt: 'Kezelőpanel' },
    ],
    features: [
      '32 termékválaszték',
      'Kompakt méret',
      'LED világítás',
      'Alacsony energiafogyasztás',
      'Spirálos kiadó rendszer',
      'Egyszerű feltöltés',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '855 mm' },
          { label: 'Mélység', value: '790 mm' },
          { label: 'Súly', value: '280 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Termékhelyek', value: '32' },
          { label: 'Polcok száma', value: '6' },
          { label: 'Max termék méret', value: '75x75x200 mm' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '85W' },
          { label: 'Energiaosztály', value: 'A+' },
        ],
      },
    ],
    longDescription: `
      <p>A Necta Snakky Max ideális megoldás kisebb és közepes irodák számára. Kompakt mérete ellenére 32 különböző termék tárolására képes.</p>
      
      <h3>Helytakarékos design</h3>
      <p>Az automata mindössze 855 mm széles, így szűk helyeken is elfér. A modern, elegáns design minden környezetbe illeszkedik.</p>
      
      <h3>Megbízható működés</h3>
      <p>A spirálos kiadó rendszer biztosítja a termékek sérülésmentes kiadását. Az egyszerű feltöltés és karbantartás minimális állásidőt eredményez.</p>
    `,
    relatedModels: ['sielaff-fk-270', 'sielaff-cvs-650'],
  },

  'bianchi-lei-700': {
    title: 'Bianchi Lei 700',
    description: 'Professzionális instant kávéautomata 7 választékkal. Gyors kiszolgálás, egyszerű karbantartás.',
    category: 'kaveautomata',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
      alt: 'Bianchi Lei 700 kávéautomata',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', alt: 'Kezelőfelület' },
      { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', alt: 'Kávé készítés' },
      { url: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800', alt: 'Belső szerkezet' },
    ],
    features: [
      '7 féle ital',
      'Instant rendszer',
      'Gyors kiszolgálás (15 mp)',
      'Könnyen tisztítható',
      'Kompakt méret',
      'Alacsony karbantartás igény',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1700 mm' },
          { label: 'Szélesség', value: '603 mm' },
          { label: 'Mélység', value: '543 mm' },
          { label: 'Súly', value: '75 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Instant tartályok', value: '4 x 2,5 l' },
          { label: 'Pohár adagoló', value: '400 db' },
          { label: 'Napi kapacitás', value: '150 adag' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '1700W' },
          { label: 'Vízmelegítő', value: '2,5 liter' },
        ],
      },
    ],
    longDescription: `
      <p>A Bianchi Lei 700 az instant kávéautomaták csúcskategóriáját képviseli. Gyors, megbízható és könnyen kezelhető megoldás kisebb irodák számára.</p>
      
      <h3>Villámgyors kiszolgálás</h3>
      <p>Az instant technológiának köszönhetően mindössze 15 másodperc alatt elkészül egy csésze kávé. Nincs várakozás, nincs sorban állás.</p>
      
      <h3>Egyszerű üzemeltetés</h3>
      <p>Minimális karbantartást igényel, könnyen tisztítható. Az instant porok hosszú eltarthatósága miatt ritkábban kell feltölteni.</p>
    `,
    relatedModels: ['necta-kikko-max', 'necta-karisma'],
  },

  'sandenvendo-g-drink': {
    title: 'SandenVendo G-Drink',
    description: 'Hűtött ital automata 45 választékkal. Energiahatékony működés, megbízható hűtés.',
    category: 'ital',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200',
      alt: 'SandenVendo G-Drink italautomata',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800', alt: 'Ital választék' },
      { url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800', alt: 'Hűtőrendszer' },
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'LED világítás' },
    ],
    features: [
      '45 termék kapacitás',
      'A++ energiaosztály',
      'LED világítás',
      'Digitális hőmérséklet kontroll',
      'Dupla üvegezés',
      'Környezetbarát hűtőközeg',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '720 mm' },
          { label: 'Mélység', value: '790 mm' },
          { label: 'Súly', value: '280 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Palack/doboz', value: '45 féle' },
          { label: 'Összes kapacitás', value: '450 db' },
          { label: 'Polcok száma', value: '9' },
          { label: 'Hűtési tartomány', value: '3-12°C' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '350W' },
          { label: 'Energiaosztály', value: 'A++' },
          { label: 'Hűtőközeg', value: 'R290' },
        ],
      },
    ],
    longDescription: `
      <p>A SandenVendo G-Drink a legmodernebb hűtéstechnológiát alkalmazza. Az A++ energiaosztály és a környezetbarát hűtőközeg használata minimális környezeti terhelést jelent.</p>
      
      <h3>Kiváló energiahatékonyság</h3>
      <p>A dupla üvegezés és a precíz hőmérséklet-szabályozás akár 50%-os energia megtakarítást eredményez a hagyományos automatákhoz képest.</p>
      
      <h3>Tökéletes hűtés</h3>
      <p>A digitális hőmérséklet kontroll biztosítja, hogy minden ital az ideális hőmérsékleten kerüljön kiadásra.</p>
    `,
    relatedModels: ['sandenvendo-vmax', 'sielaff-cvs-650'],
  },

  'necta-kikko-max': {
    title: 'Necta Kikko Max',
    description: 'Univerzális automata forró italokhoz, 12 választékkal. Kompakt méret, nagy teljesítmény.',
    category: 'kaveautomata',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200',
      alt: 'Necta Kikko Max',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', alt: 'Érintőképernyő' },
      { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', alt: 'Kávékészítés' },
      { url: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800', alt: 'Belső felépítés' },
    ],
    features: [
      '12 féle ital',
      'Kompakt design',
      'Érintőképernyő',
      'Dupla pohártartó',
      'Instant és szemes kávé opció',
      'Energiatakarékos mód',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1700 mm' },
          { label: 'Szélesség', value: '560 mm' },
          { label: 'Mélység', value: '560 mm' },
          { label: 'Súly', value: '85 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Instant tartályok', value: '5 x 2 l' },
          { label: 'Kávébab tartály', value: '1,2 kg' },
          { label: 'Pohár adagoló', value: '350 db' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '1900W' },
          { label: 'Energiaosztály', value: 'A' },
        ],
      },
    ],
    longDescription: `
      <p>A Necta Kikko Max a középkategóriás kávéautomaták legjobb választása. Kompakt mérete és sokoldalúsága ideálissá teszi közepes méretű irodák számára.</p>
      
      <h3>Rugalmas konfiguráció</h3>
      <p>Az automata instant és szemes kávé készítésére is alkalmas. A 12 féle ital választék minden ízlést kielégít.</p>
      
      <h3>Modern kezelőfelület</h3>
      <p>Az intuitív érintőképernyő egyszerűvé teszi az ital kiválasztását és testreszabását.</p>
    `,
    relatedModels: ['necta-karisma', 'bianchi-lei-700'],
  },

  'sielaff-fk-270': {
    title: 'Sielaff FK 270',
    description: 'Közepes méretű snack automata 270 termékhellyel. Ideális közepes forgalmú helyszínekre.',
    category: 'snack',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200',
      alt: 'Sielaff FK 270',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'Termék polcok' },
      { url: 'https://images.unsplash.com/photo-1619975362235-73fd85efa4ba?w=800', alt: 'Üveges front' },
      { url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800', alt: 'Vezérlőpanel' },
    ],
    features: [
      '270 termék kapacitás',
      'Flexibilis polcrendszer',
      'Üveges front',
      'Modern design',
      'Liftes kiadó rendszer',
      'LED megvilágítás',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '1090 mm' },
          { label: 'Mélység', value: '790 mm' },
          { label: 'Súly', value: '320 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Termékhelyek', value: '270' },
          { label: 'Polcok száma', value: '8' },
          { label: 'Állítható polcmagasság', value: 'Igen' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '120W' },
          { label: 'Energiaosztály', value: 'A+' },
        ],
      },
    ],
    longDescription: `
      <p>A Sielaff FK 270 a közepes méretű snack automaták kiváló képviselője. 270 termékhellyel ideális választás közepes forgalmú helyszínekre.</p>
      
      <h3>Flexibilis elrendezés</h3>
      <p>Az állítható polcmagasság lehetővé teszi különböző méretű termékek optimális elhelyezését.</p>
      
      <h3>Vonzó megjelenés</h3>
      <p>Az üveges front és a LED világítás vonzóvá teszi a termékeket, növelve az eladásokat.</p>
    `,
    relatedModels: ['necta-snakky-max', 'sielaff-cvs-650'],
  },

  'necta-concerto': {
    title: 'Necta Concerto',
    description: 'Prémium szemes kávé automata barista minőséggel. 20 féle ital, testreszabható receptek.',
    category: 'kaveautomata',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200',
      alt: 'Necta Concerto',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', alt: 'Touch screen' },
      { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', alt: 'Barista minőség' },
      { url: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=800', alt: 'Prémium design' },
    ],
    features: [
      'Szemes kávé',
      'Barista minőség',
      '20 féle ital',
      'Testreszabható receptek',
      '10,1" touch screen',
      'Két őrlő',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '650 mm' },
          { label: 'Mélység', value: '650 mm' },
          { label: 'Súly', value: '160 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Kávébab tartály', value: '2 x 3,5 kg' },
          { label: 'Instant tartály', value: '4 x 3 l' },
          { label: 'Tej tartály', value: '12 liter' },
          { label: 'Napi kapacitás', value: '300+ adag' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '2700W' },
          { label: 'Energiaosztály', value: 'A++' },
        ],
      },
    ],
    longDescription: `
      <p>A Necta Concerto a csúcskategóriás kávéautomaták mestermûve. Barista minőségű kávét készít szemes kávéból, miközben 20 féle ital közül választhatnak a felhasználók.</p>
      
      <h3>Barista minőség</h3>
      <p>A két különálló őrlő lehetővé teszi különböző kávékeverékek használatát. A precíz hőmérséklet és nyomás szabályozás garantálja a tökéletes kávét.</p>
      
      <h3>Intelligens technológia</h3>
      <p>A 10,1" méretű érintőképernyő nem csak a választást teszi egyszerűvé, hanem lehetővé teszi videók és promóciók megjelenítését is.</p>
    `,
    relatedModels: ['necta-karisma', 'necta-kikko-max'],
  },

  'bianchi-vega': {
    title: 'Bianchi Vega',
    description: 'Kombinált meleg ital és snack automata. Helytakarékos megoldás kis irodák számára.',
    category: 'kombo',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200',
      alt: 'Bianchi Vega',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1556742400-b5b7a512f7de?w=800', alt: 'Kombo rendszer' },
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'Kávé és snack' },
      { url: 'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?w=800', alt: 'Kompakt design' },
    ],
    features: [
      'Meleg ital + snack',
      'Helytakarékos',
      'Egyszerű kezelés',
      'Megbízható működés',
      '12 ital + 20 snack',
      'Kombinált vezérlés',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '1200 mm' },
          { label: 'Mélység', value: '790 mm' },
          { label: 'Súly', value: '320 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Ital választék', value: '12 féle' },
          { label: 'Snack helyek', value: '20' },
          { label: 'Pohár adagoló', value: '250 db' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '1850W' },
          { label: 'Energiaosztály', value: 'A' },
        ],
      },
    ],
    longDescription: `
      <p>A Bianchi Vega tökéletes megoldás kis irodák számára, ahol nincs hely két külön automatának. Egyesíti a kávéautomata és snack automata funkcióit.</p>
      
      <h3>Helytakarékos megoldás</h3>
      <p>Egyetlen automatában kaphat helyet a teljes kávé és snack kínálat. Ideális választás korlátozott helyiségekbe.</p>
      
      <h3>Költséghatékony üzemeltetés</h3>
      <p>Egy automata karbantartása és feltöltése egyszerűbb és olcsóbb, mint két külön gépé.</p>
    `,
    relatedModels: ['sielaff-cvs-650', 'necta-snakky-max'],
  },

  'sandenvendo-vmax': {
    title: 'SandenVendo VMax',
    description: 'Nagy kapacitású hűtött ital automata 720 palack/doboz kapacitással. Ipari környezetbe ajánlott.',
    category: 'ital',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200',
      alt: 'SandenVendo VMax',
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800', alt: 'Nagy kapacitás' },
      { url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800', alt: 'Ipari kivitel' },
      { url: 'https://images.unsplash.com/photo-1575224526797-5730d09d781d?w=800', alt: 'Masszív felépítés' },
    ],
    features: [
      '720 termék kapacitás',
      'Ipari kivitel',
      'Robusztus design',
      'Extrém körülményekhez',
      'Vandálbiztos',
      'Dupla hűtőrendszer',
    ],
    specifications: [
      {
        group: 'Méretek',
        items: [
          { label: 'Magasság', value: '1830 mm' },
          { label: 'Szélesség', value: '1470 mm' },
          { label: 'Mélység', value: '900 mm' },
          { label: 'Súly', value: '420 kg' },
        ],
      },
      {
        group: 'Kapacitás',
        items: [
          { label: 'Összes kapacitás', value: '720 palack/doboz' },
          { label: 'Választék', value: '12 féle' },
          { label: 'Polcok száma', value: '12' },
        ],
      },
      {
        group: 'Energia',
        items: [
          { label: 'Feszültség', value: '230V / 50Hz' },
          { label: 'Teljesítmény', value: '750W' },
          { label: 'Hűtőközeg', value: 'R290' },
        ],
      },
    ],
    longDescription: `
      <p>A SandenVendo VMax a legnagyobb kapacitású italautomatánk, kifejezetten nagy forgalmú és ipari környezetbe tervezve.</p>
      
      <h3>Extrém körülményekre tervezve</h3>
      <p>A vandálbiztos kivitel és a megerősített szerkezet alkalmassá teszi kültéri vagy ipari használatra is.</p>
      
      <h3>Maximális kapacitás</h3>
      <p>720 palack vagy doboz befogadására képes, így ritkábban igényel feltöltést még nagy forgalom esetén is.</p>
    `,
    relatedModels: ['sandenvendo-g-drink', 'sielaff-cvs-650'],
  },
}

// Segédfüggvény a kapcsolódó modellek adatainak lekérésére
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
    .filter(Boolean)
}

// Kategória nevek magyar nyelven
export function getCategoryName(slug: string) {
  const categories: Record<string, string> = {
    kaveautomata: 'Kávéautomata',
    snack: 'Snack automata',
    ital: 'Italautomata',
    kombo: 'Kombó automata',
  }
  return categories[slug] || slug
}

// Összes modell lekérése listához
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

// Dinamikus útvonalak generálásához
export function getAllModelSlugs() {
  return Object.keys(modelDatabase)
}