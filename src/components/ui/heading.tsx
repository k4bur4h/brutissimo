import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: ReactNode
  className?: string
}

export function Heading({ as: Component = 'h2', size = 'lg', children, className }: HeadingProps) {
  const sizes = {
    xs: 'text-sm font-semibold',
    sm: 'text-base font-semibold',
    md: 'text-lg font-semibold',
    lg: 'text-xl md:text-2xl font-bold',
    xl: 'text-2xl md:text-3xl font-bold',
    '2xl': 'text-3xl md:text-4xl font-bold',
    '3xl': 'text-4xl md:text-5xl font-bold',
    '4xl': 'text-5xl md:text-6xl font-bold',
  }

  return (
    <Component className={cn('font-display tracking-tight text-neutral-900', sizes[size], className)}>
      {children}
    </Component>
  )
}