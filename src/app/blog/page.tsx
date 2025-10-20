import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/blocks/hero'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Brutissimo',
  description: 'Vending automata hírek, újdonságok, tippek és trükkök. Legyen naprakész az iparág legfrissebb trendjei kapcsán.',
}

// Mock blog posts - később Sanity-ből jön
const blogPosts = [
  {
    id: 1,
    title: 'Az AI forradalmasítja a vending automatákat',
    slug: 'ai-forradalmasitja-vending-automatakat',
    excerpt: 'Fedezze fel, hogyan változtatja meg a mesterséges intelligencia a vending automaták működését és hogyan optimalizálja a készletkezelést.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    category: 'Technológia',
    author: 'Kovács János',
    date: '2024-01-15',
    readTime: '5 perc',
  },
  {
    id: 2,
    title: 'Fenntartható megoldások a vending iparágban',
    slug: 'fenntarthato-megoldasok-vending',
    excerpt: 'Környezetbarát automaták, újrahasznosítható csomagolások és energiahatékony működés - így lesz zöldebb a vending.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    category: 'Fenntarthatóság',
    author: 'Nagy Andrea',
    date: '2024-01-10',
    readTime: '4 perc',
  },
  {
    id: 3,
    title: '5 tipp a tökéletes automata elhelyezéshez',
    slug: '5-tipp-automata-elhelyezes',
    excerpt: 'Szakértőink összegyűjtötték a legfontosabb szempontokat, amiket figyelembe kell venni egy vending automata elhelyezésekor.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    category: 'Útmutató',
    author: 'Szabó Péter',
    date: '2024-01-05',
    readTime: '3 perc',
  },
  {
    id: 4,
    title: 'Kávéautomaták összehasonlítása 2024',
    slug: 'kaveautomatak-osszehasonlitas-2024',
    excerpt: 'Részletes összehasonlítás a legnépszerűbb kávéautomata modellek között. Melyik a legjobb választás az Ön számára?',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    category: 'Termékek',
    author: 'Tóth Eszter',
    date: '2023-12-28',
    readTime: '7 perc',
  },
  {
    id: 5,
    title: 'Hogyan növeljük a vending automata bevételeket?',
    slug: 'hogyan-noveljuk-vending-beveteleket',
    excerpt: 'Bevált stratégiák és tippek a vending automaták bevételeinek maximalizálására. Termékválaszték, árazás és marketing.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    category: 'Üzlet',
    author: 'Kovács János',
    date: '2023-12-20',
    readTime: '6 perc',
  },
  {
    id: 6,
    title: 'Érintésmentes fizetés: a jövő már itt van',
    slug: 'erintesmentes-fizetes-jovo',
    excerpt: 'Az érintésmentes fizetési megoldások térnyerése a vending automatáknál. NFC, QR-kód és mobil fizetés.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
    category: 'Technológia',
    author: 'Nagy Andrea',
    date: '2023-12-15',
    readTime: '4 perc',
  },
]

const categories = [
  'Összes',
  'Technológia',
  'Fenntarthatóság',
  'Útmutató',
  'Termékek',
  'Üzlet',
]

export default function BlogPage() {
  return (
    <>
      <Hero
        heading="Blog"
        subheading="Hírek, újdonságok és hasznos tippek a vending automaták világából"
      />

      <Section spacing="lg">
        <Container>
          {/* Kategória szűrők */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog poszt grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} hover padding="none" className="overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('hu-HU')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Heading as="h3" size="md" className="mb-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </Heading>
                  </Link>
                  
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 group"
                    >
                      Tovább olvasom
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Lapozás */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-50" disabled>
              Előző
            </button>
            <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              1
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
              2
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
              3
            </button>
            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
              Következő
            </button>
          </div>
        </Container>
      </Section>

      {/* Newsletter signup */}
      <Section spacing="lg" background="gray">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading as="h2" size="2xl" className="mb-4">
              Iratkozzon fel hírlevelünkre!
            </Heading>
            <p className="text-lg text-neutral-600 mb-8">
              Értesüljön elsőként az újdonságokról és kedvezményekről
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Az Ön email címe"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Feliratkozás
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}