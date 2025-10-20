import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'

interface Logo {
  name: string
  image: string
  url?: string
}

interface LogoWallProps {
  title?: string
  logos: Logo[]
}

export function LogoWall({ title, logos }: LogoWallProps) {
  return (
    <Container>
      {title && (
        <Heading as="h2" size="xl" className="text-center mb-12">
          {title}
        </Heading>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ) : (
              <div className="opacity-60">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}