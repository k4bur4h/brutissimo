import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'

interface CTASectionProps {
  heading: string
  description?: string
  buttonText: string
  buttonUrl: string
  variant?: 'primary' | 'dark'
  className?: string
}

export function CTASection({
  heading,
  description,
  buttonText,
  buttonUrl,
  variant = 'primary',
  className
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <Section background={isDark ? 'dark' : 'primary'} className={className}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" size="2xl" className={isDark ? 'text-white' : 'text-neutral-900'}>
            {heading}
          </Heading>
          
          {description && (
            <p className={`mt-4 text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {description}
            </p>
          )}
          
          <div className="mt-8">
            <Button
              href={buttonUrl}
              variant={isDark ? 'secondary' : 'primary'}
              size="lg"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}