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
import { modelDatabase, getRelatedModels, getAllModelSlugs } from '@/lib/model-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllModelSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const model = modelDatabase[slug]
  
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
  const model = modelDatabase[slug]

  if (!model) {
    notFound()
  }

  const relatedModels = getRelatedModels(slug)

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
      {relatedModels.length > 0 && (
        <Section spacing="lg" background="gray">
          <Container>
            <Heading as="h2" size="xl" className="text-center mb-8">
              Hasonló modellek
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedModels.map((relatedModel: any) => (
                <ModelCard key={relatedModel.slug} {...relatedModel} />
              ))}
            </div>
          </Container>
        </Section>
      )}

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