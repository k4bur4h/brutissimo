import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-neutral-200 shadow-sm',
        hover && 'transition-all duration-200 hover:shadow-md hover:scale-[1.02]',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}