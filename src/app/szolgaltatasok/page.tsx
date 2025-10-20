import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { FeatureCard } from '@/components/blocks/feature-card'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card } from '@/components/ui/card'
import { CTASection } from '@/components/blocks/cta-section'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Szolgáltatások | Brutissimo',
  description: 'Teljes körű vending automata szolgáltatások: telepítés, üzemeltetés, szerviz, karbantartás. 24/7 támogatás az év minden napján.',
}

const services = [
  {
    icon: 'truck',
    title: 'Telepítés és beüzemelés',
    description: 'Professzionális telepítés és azonnali üzembe helyezés szakértő csapatunkkal.',
    features: [
      'Helyszíni felmérés',
      'Szállítás és beszerelés',
      'Elektromos bekötés',
      'Azonnali üzembe helyezés',
      'Betanítás a kezeléshez',
    ],
  },
  {
    icon: 'wrench',
    title: 'Szerviz és karbantartás',
    description: 'Rendszeres karbantartás és gyors hibaelhárítás a zavartalan működésért.',
    features: [
      '24/7 hibabejelentés',
      '4 órán belüli kiszállás',
      'Megelőző karbantartás',
      'Eredeti alkatrészek',
      'Garancia minden munkára',
    ],
  },
  {
    icon: 'package',
    title: 'Készletezés és feltöltés',
    description: 'Folyamatos készletfigyelés és időben történő feltöltés.',
    features: [
      'Automatikus készletfigyelés',
      'Rendszeres feltöltés',
      'Minőségi termékek',
      'Lejárati idő figyelés',
      'Készletoptimalizálás',
    ],
  },
  {
    icon: 'settings',
    title: 'Telemetria és monitoring',
    description: 'Valós idejű adatok és részletes riportok az automata teljesítményéről.',
    features: [
      'Valós idejű monitoring',
      'Fogyási statisztikák',
      'Hibajelentések',
      'Bevételi riportok',
      'Prediktív karbantartás',
    ],
  },
  {
    icon: 'users',
    title: 'Tanácsadás',
    description: 'Személyre szabott megoldások és szakértői tanácsadás.',
    features: [
      'Igényfelmérés',
      'Modell ajánlás',
      'Elhelyezési tanácsadás',
      'Termékválaszték optimalizálás',
      'ROI kalkuláció',
    ],
  },
  {
    icon: 'headphones',
    title: 'Ügyfélszolgálat',
    description: 'Dedikált ügyfélszolgálat és azonnali támogatás.',
    features: [
      'Személyes kapcsolattartó',
      'Többcsatornás elérhetőség',
      'Gyors válaszidő',
      'Magyar nyelvű támogatás',
      'Panaszkezelés',
    ],
  },
]

const packages = [
  {
    name: 'Alap csomag',
    description: 'Kisvállalkozások számára',
    price: 'Egyedi árajánlat',
    features: [
      '1-2 automata üzemeltetése',
      'Havi karbantartás',
      'Munkaidőben elérhető support',
      'Havi riport',
    ],
  },
  {
    name: 'Profi csomag',
    description: 'Közepes vállalatok számára',
    price: 'Egyedi árajánlat',
    features: [
      '3-10 automata üzemeltetése',
      'Kétheti karbantartás',
      '24/7 support',
      'Heti riportok',
      'Készletoptimalizálás',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise csomag',
    description: 'Nagyvállalatok számára',
    price: 'Egyedi árajánlat',
    features: [
      '10+ automata üzemeltetése',
      'Heti karbantartás',
      '24/7 dedikált support',
      'Napi riportok',
      'Teljes körű menedzsment',
      'Egyedi szerződés',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        heading="Teljes körű szolgáltatások"
        subheading="Komplett megoldás a telepítéstől az üzemeltetésig. Bízza ránk automatáit, mi gondoskodunk mindenről."
      />

      {/* Szolgáltatások részletesen */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Szolgáltatásaink részletesen
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Minden, amire szüksége lehet a sikeres automata üzemeltetéshez
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
                <div className="px-6 pb-6 -mt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Szolgáltatási csomagok */}
      <Section spacing="lg" background="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Szolgáltatási csomagok
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Válasszon előre összeállított csomagjaink közül vagy kérjen egyedi ajánlatot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`h-full ${
                  pkg.highlighted
                    ? 'ring-2 ring-primary-500 shadow-lg scale-105'
                    : ''
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-primary-500 text-white text-center py-2 -mt-6 mx-6 rounded-t-lg mb-4">
                    <span className="text-sm font-semibold">Legnépszerűbb</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-neutral-600">{pkg.description}</p>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-primary-600">{pkg.price}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Miért minket válasszon */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading as="h2" size="2xl" className="mb-6">
                Miért a Brutissimo a legjobb választás?
              </Heading>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">10+ év tapasztalat</h3>
                    <p className="text-neutral-600">
                      Több mint egy évtizedes szakmai tapasztalattal rendelkezünk a vending automaták területén.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">500+ elégedett ügyfél</h3>
                    <p className="text-neutral-600">
                      Partnereink elégedettsége és hosszú távú együttműködése bizonyítja szolgáltatásaink minőségét.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Országos lefedettség</h3>
                    <p className="text-neutral-600">
                      Magyarország egész területén elérhetőek vagyunk, gyors kiszállással és helyi szakemberekkel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Garancia minden munkára</h3>
                    <p className="text-neutral-600">
                      Minden elvégzett munkánkra és beépített alkatrészre teljes körű garanciát vállalunk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
                <p className="text-lg font-semibold mb-8">Ügyfél elégedettség</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Megbízhatóság</span>
                      <span>99%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Gyorsaság</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Szakértelem</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Kérjen személyre szabott ajánlatot!"
        description="Szakértőink segítenek megtalálni az Ön számára ideális szolgáltatási csomagot"
        buttonText="Ajánlatkérés"
        buttonUrl="/kapcsolat#ajanlat"
        variant="dark"
      />
    </>
  )
}