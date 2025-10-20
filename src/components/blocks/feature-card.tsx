import { LucideIcon, Package, Settings, Truck, Users, Wrench, HeadphonesIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  settings: Settings,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  headphones: HeadphonesIcon,
}

interface FeatureCardProps {
  icon?: string
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const Icon = icon ? iconMap[icon] || Package : Package

  return (
    <Card className={cn('text-center group', className)}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-200 group-hover:bg-primary-100 group-hover:scale-110">
        <Icon className="w-8 h-8 text-primary-600" />
      </div>
      
      <Heading as="h3" size="md" className="mb-2">
        {title}
      </Heading>
      
      <p className="text-neutral-600 text-sm">
        {description}
      </p>
    </Card>
  )
}