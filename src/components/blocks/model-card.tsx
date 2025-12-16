import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/utils'

interface ModelCardProps {
  title: string
  slug: string
  image?: {
    url: string
    alt?: string
  }
  description: string
  features?: string[]
  categories?: Array<{
    title: string
    slug: string
  }>
  className?: string
}

export function ModelCard({
  title,
  slug,
  image,
  description,
  features,
  categories,
  className
}: ModelCardProps) {
  return (
    <Card hover padding="none" className={cn('overflow-hidden group', className)}>
      <Link href={`/modellek/${slug}`}>
        <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
          {image ? (
            <div className="relative w-full h-full p-6">
              <Image
                src={image.url}
                alt={image.alt || title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-400">
              <span className="text-4xl">📦</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <span
                key={category.slug}
                className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
        
        <Link href={`/modellek/${slug}`}>
          <Heading as="h3" size="md" className="mb-2 hover:text-primary-600 transition-colors">
            {title}
          </Heading>
        </Link>
        
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-neutral-600 flex items-start">
                <span className="text-primary-500 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button href={`/modellek/${slug}`} variant="primary" size="sm" className="w-full">
          Részletek
        </Button>
      </div>
    </Card>
  )
}