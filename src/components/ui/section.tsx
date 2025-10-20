import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'primary' | 'dark'
}

export function Section({ children, className, spacing = 'lg', background = 'white' }: SectionProps) {
  const spacings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  }

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
    dark: 'bg-neutral-900 text-white',
  }

  return (
    <section className={cn(spacings[spacing], backgrounds[background], className)}>
      {children}
    </section>
  )
}