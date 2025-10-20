'use client'

import { useState } from 'react'
import { Hero } from '@/components/blocks/hero'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Kapcsolat | Brutissimo',
//   description: 'Vegye fel velünk a kapcsolatot. Kérjen ajánlatot vending automata bérlésére vagy vásárlására.',
// }

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '+36 30 123 4567',
    link: 'tel:+36301234567',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'info@brutissimo.hu',
    link: 'mailto:info@brutissimo.hu',
  },
  {
    icon: MapPin,
    title: 'Cím',
    content: '1234 Budapest, Példa utca 10.',
    link: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Nyitvatartás',
    content: 'H-P: 8:00 - 17:00',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData(prev => ({ ...prev, [name]: target.checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false,
      })
    }, 1000)
  }

  return (
    <>
      <Hero
        heading="Kapcsolat"
        subheading="Kérdése van? Ajánlatot szeretne? Vegye fel velünk a kapcsolatot!"
        image={{
          url: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1920&q=80',
          alt: 'Kapcsolatfelvétel'
        }}
      />

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Kapcsolati információk */}
            <div className="lg:col-span-1">
              <Heading as="h2" size="xl" className="mb-6">
                Elérhetőségeink
              </Heading>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Card key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-neutral-600 hover:text-primary-600 transition-colors"
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-neutral-600">{item.content}</p>
                        )}
                      </div>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-8">
                <Heading as="h3" size="md" className="mb-4">
                  Gyakori kérdések
                </Heading>
                <div className="space-y-3">
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-primary-600">
                      Milyen gyorsan tudnak kiszállni?
                    </summary>
                    <p className="mt-2 text-sm text-neutral-600 pl-4">
                      Sürgős esetben 4 órán belül, normál esetben 24-48 órán belül kiszállunk.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-primary-600">
                      Van minimális bérleti idő?
                    </summary>
                    <p className="mt-2 text-sm text-neutral-600 pl-4">
                      A minimális bérleti idő 12 hónap, de rugalmas feltételekkel.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-primary-600">
                      Milyen fizetési módok érhetők el?
                    </summary>
                    <p className="mt-2 text-sm text-neutral-600 pl-4">
                      Készpénz, kártya, érintésmentes fizetés, és mobil fizetési megoldások.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* Kapcsolati űrlap */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div id="ajanlat">
                  <Heading as="h2" size="xl" className="mb-6">
                    Kérjen ajánlatot
                  </Heading>
                </div>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg text-success">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Név *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail cím *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefonszám *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Cégnév
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Írja le, miben segíthetünk..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-neutral-600">
                      Elfogadom az{' '}
                      <a href="/adatvedelem" className="text-primary-600 hover:underline">
                        adatvédelmi tájékoztatót
                      </a>{' '}
                      és hozzájárulok személyes adataim kezeléséhez. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Küldés...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Ajánlatkérés elküldése
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Térkép */}
      <div className="w-full h-96 bg-neutral-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <p className="text-neutral-600">Google Maps integráció helye</p>
        </div>
      </div>
    </>
  )
}