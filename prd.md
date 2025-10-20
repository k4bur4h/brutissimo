Project Requirements Document (PRD)

0) Meta

Project name (placeholder): Vending Showcase

Owner: Szűcs Ádám

Stack: Next.js (App Router) + Sanity (SaaS) + Vercel

Design approach: Vendomat inspired, brand-customized

Status: Draft v0.1

1) Goals

Professzionális, gyors, SEO-barát bemutatkozó oldal ~10 vending gép modellel.

Egyszerű, szerkeszthető tartalom (Sanity) + preview.

Mobil-first, reszponzív, modern UI.

Lead generálás (kapcsolati űrlap, CTA-k), mérhetőség (Analytics, konverziók).

Non-goals

E-kereskedelem (nincs kosár/checkout az MVP-ben).

Többnyelvűség az MVP-ben (később választható).

2) Célcsoport & use case-ek

Döntéshozók (B2B): üzemeltetők, facility, HR, irodavezetők.

Use case: modellek gyors áttekintése, specifikációk összevetése, kapcsolatfelvétel.

3) Oldalstruktúra (Sitemap)

Főoldal

Modellek listája

Model detail (×~10)

Szolgáltatások (üzemeltetés, szerviz, telepítés)

Rólunk

Blog / Hírek (opció)

Kapcsolat

Jogi oldalak (ÁSZF, Adatkezelés)

4) Kulcs user story-k

Mint érdeklődő, szeretném áttekinteni a modelleket kártyás listában.

Mint érdeklődő, szeretnék részletes specifikációt látni képekkel.

Mint érdeklődő, szeretném felvenni a kapcsolatot gyors űrlappal.

Mint marketing, szeretném mérni a leadeket és a fő eseményeket (CTA kattintások, űrlapküldés).

Acceptance (MVP):

10 modell felvihető Sanity-ben és megjelenik.

űrlap működik (email értesítés + köszönő oldalsáv).

PageSpeed 90+ mobilon a főoldal és 1 modell.

5) Funkcionális követelmények

Főoldal blokkok: hero, USP, kiemelt modellek, szolgáltatás teaser, partner logók, CTA, blog teaser (opció)

Model lista: kategória/szűrés (MVP-ben egyszerű kategória)

Model részletek: leírás, képgaléria, specifikáció táblázat, letölthető PDF (opció), CTA

Szolgáltatások: moduláris szekciók (ikon + cím + leírás)

Rólunk: cégbemutató, értékek, képek

Kapcsolat: űrlap + térkép (iframe) + kontakt adatok

Admin (Sanity): tartalom sémák, role-ok (Editor, Admin), draft/preview

Keresés (opció): egyszerű cím + kategória (később Algolia/Meili)

6) Nem-funkcionális követelmények

Teljesítmény: LCP < 2.5s, CLS < 0.1, mobil PSI 90+

SEO: meta, OG, strukturált adatok (BreadcrumbList, Article, Product-opció)

Hozzáférhetőség: kontraszt AA, fókuszállapotok, ARIA label-ek

Biztonság: rate limit űrlapnál, honeypot/turnstile

Megbízhatóság: 99.9% uptime target (Vercel + Sanity SLA)

7) Design rendszer (Vendomat inspired)

Színek (példa, brandre szabható):

Primary: #0F62FE (CTA/akcentus)

Neutral-900: #0A0A0A (szöveg fő)

Neutral-600: #525252 (másodlagos szöveg)

Background: #FFFFFF / #F7F7F7

Success: #12B76A, Warning: #F79009, Error: #D92D20

Tipográfia:

Headings: Inter/DM Sans/SF Pro – 600/700

Body: Inter/DM Sans – 400/500

Scale: 12, 14, 16, 18, 24, 30, 36, 48

Spacing:

4/8/12/16/24/32/48/64 px lépcsők

Komponensek:

Hero (kép/video, H1, lead, primary/secondary CTA)

FeatureCard (ikon + cím + leírás)

ModelCard (kép, rövid spec, CTA)

SpecTable (key–value, csoportokkal)

LogoWall

Testimonial (idézet + név + pozíció)

ContactForm (név, email, telefon, üzenet)

Footer (menü, kontakt, social)

8) Sanity tartalommodell

siteSettings: logo, főmenü, footer menü, telefon, email, social, default SEO

page: slug, title, blokkok (hero, richText, features[], logos[], cta, form…)

model: title, slug, coverImage, gallery[], shortDesc, longDesc, specs[] (group, items[] {label, value}), category[]

service: title, icon, content

post (opció): title, slug, excerpt, coverImage, body, publishedAt

redirect (opció): from, to, type

Preview: Next.js draft mode + Sanity webhooks → ISR revalidate

9) Oldalspecifikáció

Főoldal

Hero (H1 + subcopy + 1-2 CTA)

3–6 USP (FeatureCard)

Kiemelt modellek (3–6 kártya)

Szolgáltatás teaser (3–4 blokk)

LogoWall (opció)

CTA szekció (kapcsolat)

Model lista

Grid 3/4 oszlop, kategória filter (MVP: query param /client side)

Model részletek

Hero (coverImage, title)

SpecTable (szekciók: Méretek, Kapacitás, Energia, Extrák)

Galéria (lightbox)

CTA (Ajánlatkérés)

Kapcsolat

Form: név, email, tel, cég (opció), üzenet + checkbox adatkezelés

Submit → email + köszönő üzenet

10) Integrációk

Email/Űrlap: Resend (Free tier), SPF/DKIM beállítás

Analytics: Vercel Analytics + (opció) GA4

Tag/Pixel: GTag/Meta Pixel (cookie banner később)

11) SEO & tartalom

Dinamikus meta a Sanity-ből

OG image generátor (Next.js route)

Sitemap.xml, robots.txt

Breadcrumb JSON-LD

Model oldalak: strukturált „Product” schema (opció, ha árak nélkül is releváns)

12) Teljesítmény

Next/Image + Sanity CDN, képméretezés

ISR (revalidate 60s–10min blokktól függően)

Lazy-load képek, font-display: swap

13) Biztonság & adatvédelem

űrlap rate limit (IP), honeypot vagy Cloudflare Turnstile

HTTPS-only, HSTS

Adatkezelési tájékoztató link az űrlapnál

14) DevOps

Repo: GitHub (main/dev)

CI/CD: Vercel auto preview PR-enként

Környezetek: Preview, Production

Env vars: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (preview), RESEND_API_KEY

15) Monitoring

Sentry (front + edge functions)

UptimeRobot (public URL)

16) Roadmap (post-MVP)

Modell-összehasonlító (compare 2–3 model)

PDF letöltés generálás (model specifikáció)

Többnyelv (i18n routing)

Kereső (Algolia/Meili)

Lead scoring / CRM integráció (HubSpot/Pipedrive)

17) Kockázatok

Sanity free tier limit elérése (ritka, de figyelni kell)

Resend free kvóta kifutása → fallback SMTP

SEO: másolt szövegek kerülése (egyedi copy fontos)

18) Ütemezés (becslés)

Design rendszer + komponensek: 3–5 nap

Sanity sémák + Studio + seed tartalom: 1–2 nap

Frontend oldalak: 4–6 nap

Űrlap + email + SEO/OG: 1–2 nap

Tesztelés + finomhangolás: 2–3 nap

19) Elfogadási kritériumok

10 modell publikálva, mind teljes adatkörrel

Kapcsolati űrlap működik, email érkezik

Mobil PSI ≥ 90 a főoldal + 1 modell

Meta/OG rendben, sitemap/robots él

Reszponzív, hibamentes főbb böngészőkben

20) Mellékletek

Brand szín- és tipó-javaslat (finomítandó)

Ikonkészlet forrás (Lucide/Phosphor)

Példaspecifikáció táblázat mezőlista

