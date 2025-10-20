import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ModelCard } from '@/components/blocks/model-card'
import { CTASection } from '@/components/blocks/cta-section'
import { ChevronLeft, Download, Check } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Mock data - később Sanity-ből jön
const modelData = {
  'necta-karisma': {
    title: 'Necta Karisma',
    description: 'Prémium kávéautomata friss tejjel, 16 féle ital választékkal. Ideális nagyobb irodák és gyárak számára.',
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
    relatedModels: [
      'necta-kikko-max',
      'bianchi-lei-700',
      'necta-concerto',
    ],
  },
}

// Mock related models data
const relatedModelsData = [
  {
    title: 'Necta Kikko Max',
    slug: 'necta-kikko-max',
    description: 'Univerzális automata forró italokhoz, 12 választékkal.',
    image: {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
      alt: 'Necta Kikko Max',
    },
    features: ['12 féle ital', 'Kompakt design', 'Érintőképernyő'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Bianchi Lei 700',
    slug: 'bianchi-lei-700',
    description: 'Professzionális instant kávéautomata 7 választékkal.',
    image: {
      url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
      alt: 'Bianchi Lei 700 kávéautomata',
    },
    features: ['7 féle ital', 'Instant rendszer', 'Gyors kiszolgálás'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Necta Concerto',
    slug: 'necta-concerto',
    description: 'Prémium szemes kávé automata barista minőséggel.',
    image: {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      alt: 'Necta Concerto',
    },
    features: ['Szemes kávé', 'Barista minőség', '20 féle ital'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const model = modelData[slug as keyof typeof modelData]
  
  if (!model) {
    return {
      title: 'Modell nem található',
    }
  }

  return {
    title: `${model.title} | Brutissimo`,
    description: model.description,
  }
}

export default async function ModelDetailPage({ params }: PageProps) {
  const { slug } = await params
  const model = modelData[slug as keyof typeof modelData]

  if (!model) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <Section spacing="sm">
        <Container>
          <Button href="/modellek" variant="ghost" className="mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Vissza a modellekhez
          </Button>
        </Container>
      </Section>

      {/* Main content */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-xl">
                <Image
                  src={model.coverImage.url}
                  alt={model.coverImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {model.gallery.map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform cursor-pointer"
                      sizes="(max-width: 1024px) 33vw, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <Heading as="h1" size="3xl" className="mb-4">
                {model.title}
              </Heading>
              <p className="text-lg text-neutral-600 mb-6">
                {model.description}
              </p>

              {/* Features */}
              <Card className="mb-6">
                <h3 className="font-semibold text-lg mb-4">Főbb jellemzők</h3>
                <ul className="space-y-2">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kapcsolat#ajanlat" size="lg" className="flex-1">
                  Ajánlatkérés
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Prospektus letöltése
                </Button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 prose prose-lg max-w-none">
            <Heading as="h2" size="xl" className="mb-6">
              Részletes leírás
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: model.longDescription }} />
          </div>

          {/* Specifications */}
          <div className="mt-12">
            <Heading as="h2" size="xl" className="mb-6">
              Műszaki specifikációk
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {model.specifications.map((spec, index) => (
                <Card key={index}>
                  <h3 className="font-semibold text-lg mb-4 text-primary-600">{spec.group}</h3>
                  <dl className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between py-1 border-b border-neutral-100 last:border-b-0">
                        <dt className="text-neutral-600">{item.label}</dt>
                        <dd className="font-medium">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related models */}
      <Section spacing="lg" background="gray">
        <Container>
          <Heading as="h2" size="xl" className="text-center mb-8">
            Hasonló modellek
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedModelsData.map((relatedModel) => (
              <ModelCard key={relatedModel.slug} {...relatedModel} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Érdekel ez a modell?"
        description="Kérjen személyre szabott ajánlatot szakértőinktől"
        buttonText="Ajánlatkérés"
        buttonUrl="/kapcsolat#ajanlat"
      />
    </>
  )
}