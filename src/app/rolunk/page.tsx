import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card } from '@/components/ui/card'
import { CTASection } from '@/components/blocks/cta-section'
import { Award, Users, Target, Heart, Globe, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rólunk | Brutissimo',
  description: 'Ismerje meg a Brutissimo csapatát. Több mint 10 éve szolgáljuk ki partnereink vending automata igényeit professzionális megoldásokkal.',
}

const values = [
  {
    icon: Award,
    title: 'Minőség',
    description: 'Csak a legmagasabb minőségű automatákat és szolgáltatásokat kínáljuk.',
  },
  {
    icon: Users,
    title: 'Ügyfélközpontúság',
    description: 'Partnereink sikere a mi sikerünk. Mindig az Ön érdekeit helyezzük előtérbe.',
  },
  {
    icon: Target,
    title: 'Megbízhatóság',
    description: '24/7 elérhetőség és garantált kiszállási idő minden partnerünk számára.',
  },
  {
    icon: Heart,
    title: 'Szenvedély',
    description: 'Szenvedéllyel dolgozunk azért, hogy a legjobb megoldásokat nyújthassuk.',
  },
  {
    icon: Globe,
    title: 'Fenntarthatóság',
    description: 'Környezetbarát automaták és újrahasznosítható csomagolások használata.',
  },
  {
    icon: TrendingUp,
    title: 'Innováció',
    description: 'Folyamatosan keressük az új technológiákat és megoldásokat.',
  },
]

const timeline = [
  {
    year: '2014',
    title: 'Alapítás',
    description: 'A Brutissimo megalapítása 3 automatával és nagy tervekkel.',
  },
  {
    year: '2016',
    title: 'Első nagy szerződés',
    description: '50+ automata telepítése multinacionális partnernél.',
  },
  {
    year: '2018',
    title: 'Országos lefedettség',
    description: 'Szolgáltatásaink elérhetővé váltak Magyarország egész területén.',
  },
  {
    year: '2020',
    title: 'Digitális transzformáció',
    description: 'Telemetria és távfelügyeleti rendszer bevezetése.',
  },
  {
    year: '2022',
    title: '500. partner',
    description: 'Elértük az 500. elégedett partnerünket.',
  },
  {
    year: '2024',
    title: 'Új generáció',
    description: 'AI-alapú készletoptimalizálás és prediktív karbantartás.',
  },
]

const team = [
  {
    name: 'Kovács János',
    position: 'Ügyvezető igazgató',
    description: '15 év tapasztalat a vending iparágban',
  },
  {
    name: 'Nagy Andrea',
    position: 'Értékesítési vezető',
    description: 'Szakértő a B2B kapcsolatépítésben',
  },
  {
    name: 'Szabó Péter',
    position: 'Szerviz vezető',
    description: 'Műszaki szakember 200+ automata ismeretével',
  },
  {
    name: 'Tóth Eszter',
    position: 'Ügyfélszolgálati vezető',
    description: 'Az ügyfél elégedettség bajnoka',
  },
]

const stats = [
  { number: '10+', label: 'Év tapasztalat' },
  { number: '500+', label: 'Elégedett partner' },
  { number: '1000+', label: 'Üzemeltetett automata' },
  { number: '98%', label: 'Ügyfél elégedettség' },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        heading="Rólunk"
        subheading="Megbízható partner a vending automaták világában több mint 10 éve"
      />

      {/* Bemutatkozás */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" size="2xl" className="mb-6">
              A Brutissimo története
            </Heading>
            <p className="text-lg text-neutral-600 mb-6">
              A Brutissimo 2014-ben alakult azzal a céllal, hogy forradalmasítsa a vending automata piacot Magyarországon. 
              Kezdetben mindössze 3 automatával és rengeteg lelkesedéssel indultunk, ma pedig már több mint 1000 automata 
              üzemeltetését végezzük országszerte.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Küldetésünk egyszerű: biztosítani, hogy partnereink mindig a legmodernebb, legmegbízhatóbb automata megoldásokhoz 
              jussanak hozzá, teljes körű támogatással és karbantartással. Hiszünk abban, hogy a technológia és a személyes 
              szolgáltatás kombinációja teremti meg a tökéletes ügyfélélményt.
            </p>
            <p className="text-lg text-neutral-600">
              Büszkék vagyunk arra, hogy partnereink 98%-a elégedett szolgáltatásainkkal, és hogy folyamatosan bővülő 
              ügyfélkörünk bizalmát élvezzük. A Brutissimo nem csak egy szolgáltató – mi a vending automaták szakértői vagyunk, 
              akik szenvedéllyel dolgoznak az Ön sikeréért.
            </p>
          </div>
        </Container>
      </Section>

      {/* Számok */}
      <Section spacing="md" background="gray">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Értékeink */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Értékeink
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Ezek az értékek vezetnek minket minden nap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Idővonal */}
      <Section spacing="lg" background="gray">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Mérföldköveink
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Büszkék vagyunk az elmúlt évek eredményeire
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 mt-1.5"></div>
                  <div className="ml-20">
                    <div className="text-sm text-primary-600 font-semibold mb-1">{item.year}</div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Csapat */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl">
              Csapatunk
            </Heading>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Szakértő csapatunk garantálja a sikeres együttműködést
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-200"></div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary-600 mb-2">{member.position}</p>
                <p className="text-sm text-neutral-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Csatlakozzon elégedett partnereinkhez!"
        description="Fedezze fel, mit tudunk nyújtani az Ön vállalkozása számára"
        buttonText="Kapcsolatfelvétel"
        buttonUrl="/kapcsolat"
      />
    </>
  )
}