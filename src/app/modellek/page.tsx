import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { ModelCard } from '@/components/blocks/model-card'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { getAllModels } from '@/lib/model-data'

export const metadata: Metadata = {
  title: 'Automata modellek | Brutissimo',
  description: 'Fedezze fel prémium vending automata kínálatunkat. Kávéautomaták, snack automaták, kombó automaták és egyéb megoldások.',
}

const categories = [
  { name: 'Összes', slug: 'all' },
  { name: 'Kávéautomata', slug: 'kaveautomata' },
  { name: 'Snack automata', slug: 'snack' },
  { name: 'Italautomata', slug: 'ital' },
  { name: 'Kombó automata', slug: 'kombo' },
]

export default function ModelsPage() {
  const allModels = getAllModels()
  
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