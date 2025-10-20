import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'

interface HeroProps {
  heading: string
  subheading?: string
  image?: {
    url: string
    alt: string
  }
  cta?: Array<{
    text: string
    url: string
    style?: 'primary' | 'secondary'
  }>
}

export function Hero({ heading, subheading, image, cta }: HeroProps) {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
      )}
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h1" size="4xl" className={image ? 'text-white' : ''}>
            {heading}
          </Heading>
          
          {subheading && (
            <p className={`mt-6 text-lg md:text-xl ${image ? 'text-white/90' : 'text-neutral-600'}`}>
              {subheading}
            </p>
          )}
          
          {cta && cta.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {cta.map((button, index) => (
                <Button
                  key={index}
                  href={button.url}
                  variant={button.style || 'primary'}
                  size="lg"
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}