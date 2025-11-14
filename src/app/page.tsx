import { Hero } from '@/components/blocks/hero'
import { FeatureCard } from '@/components/blocks/feature-card'
import { ModelCard } from '@/components/blocks/model-card'
import { CTASection } from '@/components/blocks/cta-section'
import { LogoWall } from '@/components/blocks/logo-wall'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'

// Mock data - később Sanity-ből jön
const heroData = {
  heading: 'Professzionális Vending Automata Megoldások',
  subheading: 'Modern, megbízható automata megoldások irodák, gyárak és közintézmények számára. Teljes körű üzemeltetéssel és szervizzel.',
  image: {
    url: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&q=80',
    alt: 'Modern vending automata',
  },
  cta: [
    { text: 'Modellek böngészése', url: '/modellek', style: 'primary' as const },
    { text: 'Ajánlatkérés', url: '/kapcsolat#ajanlat', style: 'secondary' as const },
  ],
}

const features = [
  {
    icon: 'package',
    title: 'Széles választék',
    description: 'Több mint 10 prémium automata modell különböző igényekre szabva.',
  },
  {
    icon: 'settings',
    title: 'Teljes körű üzemeltetés',
    description: 'Készlekezés, karbantartás, szerviz - mindent mi intézünk.',
  },
  {
    icon: 'truck',
    title: 'Gyors telepítés',
    description: 'Szakszerű telepítés és beüzemelés 48 órán belül.',
  },
  {
    icon: 'users',
    title: 'Személyre szabott megoldások',
    description: 'Egyedi igényekre szabott automata konfiguráció és termékválaszték.',
  },
  {
    icon: 'wrench',
    title: '24/7 szerviz támogatás',
    description: 'Non-stop hibaelhárítás és karbantartás az év minden napján.',
  },
  {
    icon: 'headphones',
    title: 'Dedikált ügyfélszolgálat',
    description: 'Személyes kapcsolattartó és azonnali támogatás minden ügyfélnek.',
  },
]

const featuredModels = [
  {
    title: 'NESCAFÉ Alegria 630',
    slug: 'nescafe-alegria-630',
    description: 'Kompakt és megbízható kávéautomata kisebb irodák számára.',
    image: {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=75',
      alt: 'NESCAFÉ Alegria 630 kávéautomata',
    },
    features: ['7 italtípus', 'Kompakt méret', 'Energiatakarékos'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'NESCAFÉ Alegria ATS650',
    slug: 'nescafe-alegria-ats650',
    description: 'Nagy teljesítményű automata érintőképernyővel és 12 italtípussal.',
    image: {
      url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=75',
      alt: 'NESCAFÉ Alegria ATS650 kávéautomata',
    },
    features: ['Érintőképernyő', '12 italtípus', 'Nagy kapacitású tartályok'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Astoria Forma',
    slug: 'astoria-forma',
    description: 'Professzionális kávégép kiváló minőségű eszpresszóhoz.',
    image: {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=75',
      alt: 'Astoria Forma kávégép',
    },
    features: ['Professzionális minőség', 'Gőzfúvóka', 'Rozsdamentes acél'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
]

const partners = [
  { name: 'MOL', image: null },
  { name: 'Bosch', image: null },
  { name: 'Mercedes', image: null },
  { name: 'Auchan', image: null },
  { name: 'Tesco', image: null },
  { name: 'OTP Bank', image: null },
]

const services = [
  {
    icon: '🚚',
    title: 'Telepítés és beüzemelés',
    description: 'Professzionális telepítés és azonnali üzembe helyezés szakértő csapatunkkal.',
  },
  {
    icon: '🔧',
    title: 'Szerviz és karbantartás',
    description: 'Rendszeres karbantartás és gyors hibaelhárítás a zavartalan működésért.',
  },
  {
    icon: '📦',
    title: 'Készletezés és feltöltés',
    description: 'Folyamatos készletfigyelés és időben történő feltöltés.',
  },
  {
    icon: '📊',
    title: 'Telemetria és riportok',
    description: 'Valós idejű adatok és részletes riportok az automata teljesítményéről.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero {...heroData} />

      {/* USP szekció */}
      <Section spacing="lg" background="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Miért válasszon minket?
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Több mint 10 éves tapasztalattal biztosítjuk a legjobb vending megoldásokat
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Kiemelt modellek */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Népszerű modelljeink
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Fedezze fel legnépszerűbb automata modelljeinket
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredModels.map((model) => (
              <ModelCard key={model.slug} {...model} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/modellek" variant="outline" size="lg">
              Összes modell megtekintése
            </Button>
          </div>
        </Container>
      </Section>

      {/* Szolgáltatások */}
      <Section spacing="lg" background="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Teljes körű szolgáltatások
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Komplett megoldás a telepítéstől az üzemeltetésig
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/szolgaltatasok" variant="primary">
              Szolgáltatások részletei
            </Button>
          </div>
        </Container>
      </Section>

      {/* Partner logók */}
      <Section spacing="md">
        <LogoWall title="Akik már minket választottak" logos={partners} />
      </Section>

      {/* CTA szekció */}
      <CTASection
        heading="Kérjen ajánlatot még ma!"
        description="Szakértőink segítenek megtalálni az Ön számára ideális vending megoldást"
        buttonText="Ingyenes konzultáció"
        buttonUrl="/kapcsolat#ajanlat"
        variant="dark"
      />
    </>
  )
}