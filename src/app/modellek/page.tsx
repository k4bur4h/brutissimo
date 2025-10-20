import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ModelCard } from '@/components/blocks/model-card'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Automata modellek | Brutissimo',
  description: 'Fedezze fel prémium vending automata kínálatunkat. Kávéautomaták, snack automaták, kombó automaták és egyéb megoldások.',
}

// Mock data - később Sanity-ből jön
const allModels = [
  {
    title: 'Necta Karisma',
    slug: 'necta-karisma',
    description: 'Prémium kávéautomata friss tejjel, 16 féle ital választékkal. Ideális nagyobb irodák és gyárak számára.',
    image: {
      url: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=800',
      alt: 'Necta Karisma kávéautomata',
    },
    features: ['Érintőképernyős kezelőfelület', 'Friss tej rendszer', '16 féle ital', 'Napi 200+ adag kapacitás'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Sielaff CVS 650',
    slug: 'sielaff-cvs-650',
    description: 'Nagy kapacitású snack és ital kombó automata 650 termékhellyel. Tökéletes választás forgalmas helyszínekre.',
    image: {
      url: 'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?w=800',
      alt: 'Sielaff CVS 650 kombó automata',
    },
    features: ['650 termék kapacitás', 'Hűtött italok', 'Energiahatékony', 'Érintésmentes fizetés'],
    categories: [{ title: 'Kombó automata', slug: 'kombo' }],
  },
  {
    title: 'Necta Snakky Max',
    slug: 'necta-snakky-max',
    description: 'Kompakt snack automata 32 termékválasztékkal ideális irodai környezetbe. Megbízható és könnyen kezelhető.',
    image: {
      url: 'https://images.unsplash.com/photo-1619975362235-73fd85efa4ba?w=800',
      alt: 'Necta Snakky Max snack automata',
    },
    features: ['32 termékválaszték', 'Kompakt méret', 'LED világítás', 'Alacsony energiafogyasztás'],
    categories: [{ title: 'Snack automata', slug: 'snack' }],
  },
  {
    title: 'Bianchi Lei 700',
    slug: 'bianchi-lei-700',
    description: 'Professzionális instant kávéautomata 7 választékkal. Gyors kiszolgálás, egyszerű karbantartás.',
    image: {
      url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
      alt: 'Bianchi Lei 700 kávéautomata',
    },
    features: ['7 féle ital', 'Instant rendszer', 'Gyors kiszolgálás', 'Könnyen tisztítható'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'SandenVendo G-Drink',
    slug: 'sandenvendo-g-drink',
    description: 'Hűtött ital automata 45 választékkal. Energiahatékony működés, megbízható hűtés.',
    image: {
      url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800',
      alt: 'SandenVendo G-Drink italautomata',
    },
    features: ['45 termék kapacitás', 'A++ energiaosztály', 'LED világítás', 'Digitális hőmérséklet kontroll'],
    categories: [{ title: 'Italautomata', slug: 'ital' }],
  },
  {
    title: 'Necta Kikko Max',
    slug: 'necta-kikko-max',
    description: 'Univerzális automata forró italokhoz, 12 választékkal. Kompakt méret, nagy teljesítmény.',
    image: {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
      alt: 'Necta Kikko Max',
    },
    features: ['12 féle ital', 'Kompakt design', 'Érintőképernyő', 'Dupla pohártartó'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Sielaff FK 270',
    slug: 'sielaff-fk-270',
    description: 'Közepes méretű snack automata 270 termékhellyel. Ideális közepes forgalmú helyszínekre.',
    image: {
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
      alt: 'Sielaff FK 270',
    },
    features: ['270 termék kapacitás', 'Flexibilis polcrendszer', 'Üveges front', 'Modern design'],
    categories: [{ title: 'Snack automata', slug: 'snack' }],
  },
  {
    title: 'Necta Concerto',
    slug: 'necta-concerto',
    description: 'Prémium szemes kávé automata barista minőséggel. 20 féle ital, testreszabható receptek.',
    image: {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      alt: 'Necta Concerto',
    },
    features: ['Szemes kávé', 'Barista minőség', '20 féle ital', 'Testreszabható receptek'],
    categories: [{ title: 'Kávéautomata', slug: 'kaveautomata' }],
  },
  {
    title: 'Bianchi Vega',
    slug: 'bianchi-vega',
    description: 'Kombinált meleg ital és snack automata. Helytakarékos megoldás kis irodák számára.',
    image: {
      url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
      alt: 'Bianchi Vega',
    },
    features: ['Meleg ital + snack', 'Helytakarékos', 'Egyszerű kezelés', 'Megbízható működés'],
    categories: [{ title: 'Kombó automata', slug: 'kombo' }],
  },
  {
    title: 'SandenVendo VMax',
    slug: 'sandenvendo-vmax',
    description: 'Nagy kapacitású hűtött ital automata 720 palack/doboz kapacitással. Ipari környezetbe ajánlott.',
    image: {
      url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
      alt: 'SandenVendo VMax',
    },
    features: ['720 termék kapacitás', 'Ipari kivitel', 'Robusztus design', 'Extrém körülményekhez'],
    categories: [{ title: 'Italautomata', slug: 'ital' }],
  },
]

const categories = [
  { name: 'Összes', slug: 'all' },
  { name: 'Kávéautomata', slug: 'kaveautomata' },
  { name: 'Snack automata', slug: 'snack' },
  { name: 'Italautomata', slug: 'ital' },
  { name: 'Kombó automata', slug: 'kombo' },
]

export default function ModelsPage() {
  return (
    <>
      <Hero
        heading="Automata modellek"
        subheading="Válasszon prémium vending automata kínálatunkból. Minden igényre találunk megoldást."
        image={{
          url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1920&q=80',
          alt: 'Vending automata kollekció'
        }}
      />

      <Section spacing="lg">
        <Container>
          {/* Kategória szűrő */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="px-4 py-2 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Modellek grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allModels.map((model) => (
              <ModelCard key={model.slug} {...model} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}