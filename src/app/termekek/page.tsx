import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { getAllProducts, getCategoryName } from '@/lib/product-data'

export const metadata = {
  title: 'NESCAFÉ Termékek | Brutissimo',
  description: 'Fedezze fel prémium NESCAFÉ kávéautomata termékkínálatunkat - kávék, tejpor, forró csokoládé és kiegészítők.',
}

export default function TermekekPage() {
  const products = getAllProducts()

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, typeof products>)

  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" background="dark" className="bg-gradient-to-br from-red-900 to-red-950">
        <Container>
          <div className="text-center text-white py-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg mb-6">
              <Heading as="h1" size="3xl" className="text-white">
                NESCAFÉ<sup className="text-2xl">®</sup> Termékek
              </Heading>
            </div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Prémium minőségű kávék, italporok és kiegészítők professzionális kávéautomatákhoz
            </p>
          </div>
        </Container>
      </Section>

      {/* Products by Category */}
      {Object.entries(productsByCategory).map(([categorySlug, categoryProducts]) => (
        <Section key={categorySlug} spacing="lg" background={categorySlug === 'kave' ? 'white' : 'gray'}>
          <Container>
            <div className="mb-8">
              <Heading as="h2" size="2xl" className="text-center mb-2">
                {getCategoryName(categorySlug)}
              </Heading>
              <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <div
                  key={product.slug}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={product.image.url}
                      alt={product.image.alt}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 min-h-[3.5rem]">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    {product.packageSize && (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span>{product.packageSize}</span>
                      </div>
                    )}
                    {product.sku && (
                      <div className="text-xs text-gray-400 font-mono">
                        Cikkszám: {product.sku}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* CTA Section */}
      <Section spacing="lg" background="dark" className="bg-gradient-to-br from-gray-900 to-gray-800">
        <Container>
          <div className="text-center text-white py-8">
            <Heading as="h2" size="2xl" className="text-white mb-4">
              Érdekli termékkínálatunk?
            </Heading>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Vegye fel velünk a kapcsolatot, és szakértőink segítenek összeállítani az Ön számára ideális termékpalettát!
            </p>
            <a
              href="/kapcsolat"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Kapcsolatfelvétel
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
