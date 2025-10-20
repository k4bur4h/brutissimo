# Brutissimo - Professzionális Automata Megoldások

Prémium vending automata bemutató weboldal Next.js 15, TypeScript, Tailwind CSS és Sanity CMS használatával.

## 🚀 Funkciók

- **Modern, reszponzív design** - Mobile-first megközelítés Tailwind CSS-sel
- **Teljes termék katalógus** - Részletes modell oldalak specifikációkkal
- **CMS integráció** - Sanity Studio a tartalom kezeléséhez
- **SEO optimalizált** - Meta tagek, strukturált adatok, sitemap
- **Gyors betöltés** - Next.js ISR és képoptimalizáció
- **TypeScript** - Típusbiztos fejlesztés

## 📁 Projekt struktúra

```
brutissimo/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/             # Publikus oldalak
│   │   ├── studio/             # Sanity Studio
│   │   └── api/                # API végpontok
│   ├── components/
│   │   ├── ui/                 # Design rendszer komponensek
│   │   ├── blocks/             # Tartalom blokkok
│   │   └── layout/             # Layout komponensek
│   └── lib/
│       ├── sanity/             # Sanity kliens és lekérdezések
│       └── utils/              # Utility függvények
├── sanity/
│   └── schemaTypes/            # Sanity tartalom sémák
└── public/                     # Statikus fájlok
```

## 🛠 Telepítés

### Előfeltételek

- Node.js 18.17+
- npm vagy yarn
- Sanity fiók (ingyenes: [sanity.io](https://www.sanity.io))

### Lépések

1. **Repository klónozása**
```bash
git clone https://github.com/k4bur4h/brutissimo.git
cd brutissimo
```

2. **Függőségek telepítése**
```bash
npm install
```

3. **Környezeti változók beállítása**
```bash
cp .env.example .env.local
```

Töltsd ki az `.env.local` fájlt:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_for_preview
RESEND_API_KEY=your_resend_api_key
```

4. **Sanity projekt létrehozása**
```bash
cd sanity
npx sanity init --env
cd ..
```

## 🚀 Fejlesztés

### Development szerverek indítása

**Next.js alkalmazás:**
```bash
npm run dev
```
Az alkalmazás elérhető: [http://localhost:3000](http://localhost:3000)

**Sanity Studio:**
```bash
npm run sanity:dev
```
A Studio elérhető: [http://localhost:3333](http://localhost:3333)

### Build és production

```bash
# Next.js build
npm run build
npm run start

# Sanity Studio deploy
npm run sanity:deploy
```

## 📝 Tartalom kezelés

### Sanity Studio

A Sanity Studio-ban kezelhető tartalmak:
- **Modellek** - Automata modellek teljes adatokkal
- **Kategóriák** - Termék kategóriák
- **Szolgáltatások** - Szolgáltatás oldalak
- **Oldalak** - Dinamikus oldalak blokk alapú tartalommal
- **Blog** - Blog bejegyzések
- **Beállítások** - Globális weboldal beállítások

### Tartalom sémák

A sémák a `/sanity/schemaTypes/` mappában találhatók:
- `model.ts` - Automata modell séma
- `service.ts` - Szolgáltatás séma
- `page.ts` - Dinamikus oldal séma
- `siteSettings.ts` - Globális beállítások

## 🎨 Design rendszer

### Színek
- **Primary**: #0F62FE (CTA/akcentus)
- **Neutral**: Szürke skála (#0A0A0A - #FAFAFA)
- **Success**: #12B76A
- **Warning**: #F79009
- **Error**: #D92D20

### Komponensek
- `Button` - Többféle variáns (primary, secondary, outline, ghost)
- `Card` - Kártya komponens hover effekttel
- `Section` - Szekció wrapper spacing opcióval
- `Container` - Responsive container
- `Heading` - Tipográfiai komponens

## 🔧 Konfigurációk

### Next.js konfiguráció
A `next.config.ts` fájlban:
- Képoptimalizáció beállítások
- Sanity CDN engedélyezése
- TypeScript és ESLint beállítások

### Tailwind konfiguráció
A `tailwind.config.ts` fájlban:
- Egyedi színpaletta
- Tipográfiai beállítások
- Animációk és átmenetek

## 📦 Főbb függőségek

- **Next.js 15** - React framework
- **TypeScript** - Típusbiztonság
- **Tailwind CSS** - Utility-first CSS
- **Sanity** - Headless CMS
- **Lucide React** - Ikon könyvtár
- **clsx + tailwind-merge** - Osztály kezelés

## 🚢 Deploy

### Vercel (ajánlott)

1. Push a kód GitHub-ra
2. Importáld a projektet Vercel-be
3. Állítsd be a környezeti változókat
4. Deploy

### Egyéb platformok

A projekt deployolható bármely Node.js támogató platformra:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Hozzájárulás

1. Fork-old a repository-t
2. Hozz létre egy feature branch-et (`git checkout -b feature/AmazingFeature`)
3. Commit-old a változtatásokat (`git commit -m 'Add some AmazingFeature'`)
4. Push-old a branch-et (`git push origin feature/AmazingFeature`)
5. Nyiss egy Pull Request-et

## 📄 Licensz

MIT License - lásd a [LICENSE](LICENSE) fájlt a részletekért.

## 👤 Szerző

**Szűcs Ádám**
- GitHub: [@k4bur4h](https://github.com/k4bur4h)

## 🙏 Köszönet

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

Ha kérdésed van vagy segítségre van szükséged, nyiss egy [Issue-t](https://github.com/k4bur4h/brutissimo/issues)!