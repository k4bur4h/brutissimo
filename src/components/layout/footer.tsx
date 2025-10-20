import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Főoldal', href: '/' },
    { name: 'Modellek', href: '/modellek' },
    { name: 'Szolgáltatások', href: '/szolgaltatasok' },
    { name: 'Rólunk', href: '/rolunk' },
  ],
  support: [
    { name: 'Kapcsolat', href: '/kapcsolat' },
    { name: 'ÁSZF', href: '/aszf' },
    { name: 'Adatvédelem', href: '/adatvedelem' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎰</span>
                <span className="font-display font-bold text-xl">
                  Brutissimo
                </span>
              </div>
              <p className="text-neutral-400 text-sm">
                Professzionális vending automata megoldások irodák, gyárak és közintézmények számára.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold mb-4">Gyors linkek</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Támogatás</h3>
              <ul className="space-y-2">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Kapcsolat</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-0.5 text-neutral-400" />
                  <span className="text-neutral-400 text-sm">+36 30 123 4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-0.5 text-neutral-400" />
                  <a
                    href="mailto:info@vendingshowcase.hu"
                    className="text-neutral-400 hover:text-white text-sm transition-colors"
                  >
                    info@brutissimo.hu
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-neutral-400" />
                  <span className="text-neutral-400 text-sm">
                    1234 Budapest, Példa utca 10.
                  </span>
                </li>
              </ul>

              {/* Social links */}
              <div className="flex space-x-4 mt-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800">
            <p className="text-center text-neutral-400 text-sm">
              © {new Date().getFullYear()} Brutissimo. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}