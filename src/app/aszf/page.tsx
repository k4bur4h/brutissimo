import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek | Brutissimo',
  description: 'A Brutissimo vending automata szolgáltatások általános szerződési feltételei.',
}

export default function TermsPage() {
  return (
    <>
      <Hero
        heading="Általános Szerződési Feltételek"
        subheading="Hatályos: 2024. január 1-től"
        image={{
          url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
          alt: 'Szerződési feltételek'
        }}
      />

      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Általános rendelkezések</h2>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Brutissimo Kft. 
              (székhely: 1234 Budapest, Példa utca 10., cégjegyzékszám: 01-09-123456, 
              adószám: 12345678-2-41, a továbbiakban: Szolgáltató) által nyújtott vending 
              automata bérleti és üzemeltetési szolgáltatásokra vonatkoznak.
            </p>

            <h2>2. Szolgáltatások</h2>
            <h3>2.1 Automata bérlés</h3>
            <p>
              A Szolgáltató vending automatákat ad bérbe üzleti partnerek részére. 
              A bérleti díj tartalmazza az automata használatát, de nem tartalmazza 
              a karbantartást és szervizelést, kivéve, ha a felek másképp állapodnak meg.
            </p>

            <h3>2.2 Teljes körű üzemeltetés</h3>
            <p>
              A teljes körű üzemeltetési szolgáltatás magában foglalja:
            </p>
            <ul>
              <li>Az automata telepítését és beüzemelését</li>
              <li>Rendszeres feltöltést és készletezést</li>
              <li>Karbantartást és szervizelést</li>
              <li>Hibaelhárítást</li>
              <li>Telemetria szolgáltatást</li>
            </ul>

            <h2>3. Szerződés létrejötte</h2>
            <p>
              A szerződés a felek által aláírt írásbeli megállapodással jön létre. 
              Az online megrendelés esetén a szerződés a Szolgáltató visszaigazolásával 
              lép hatályba.
            </p>

            <h2>4. Díjak és fizetési feltételek</h2>
            <h3>4.1 Bérleti díj</h3>
            <p>
              A bérleti díj havonta előre fizetendő, minden hónap 5. napjáig. 
              A díjak az ÁFA-t nem tartalmazzák.
            </p>

            <h3>4.2 Fizetési mód</h3>
            <p>
              A fizetés történhet banki átutalással vagy csoportos beszedési megbízással.
            </p>

            <h2>5. Felek jogai és kötelezettségei</h2>
            <h3>5.1 Szolgáltató kötelezettségei</h3>
            <ul>
              <li>Működőképes automatát biztosít</li>
              <li>Elvégzi a szerződésben vállalt szolgáltatásokat</li>
              <li>Betartja a higiéniai és élelmiszerbiztonsági előírásokat</li>
            </ul>

            <h3>5.2 Bérlő kötelezettségei</h3>
            <ul>
              <li>Biztosítja az automata elhelyezéséhez szükséges helyet</li>
              <li>Gondoskodik az elektromos csatlakozásról</li>
              <li>Megvédi az automatát a rongálástól</li>
              <li>Időben fizeti a bérleti díjat</li>
            </ul>

            <h2>6. Felelősség</h2>
            <p>
              A Szolgáltató nem felel az automata meghibásodásából eredő bevételkiesésért, 
              kivéve, ha a hibát szándékosan vagy súlyos gondatlansággal okozta.
            </p>

            <h2>7. Szerződés megszűnése</h2>
            <p>
              A határozott idejű szerződés a szerződésben meghatározott időtartam lejártával szűnik meg. 
              A határozatlan idejű szerződést bármelyik fél 30 napos felmondási idővel írásban mondhatja fel.
            </p>

            <h2>8. Adatvédelem</h2>
            <p>
              A Szolgáltató a személyes adatokat az Adatvédelmi tájékoztatóban foglaltak szerint kezeli.
            </p>

            <h2>9. Egyéb rendelkezések</h2>
            <p>
              A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadóak. 
              A felek jogvitáikat elsősorban békés úton rendezik, ennek sikertelensége esetén a 
              Szolgáltató székhelye szerinti bíróság illetékes.
            </p>

            <h2>10. ÁSZF hatálya</h2>
            <p>
              Jelen ÁSZF 2024. január 1. napjától visszavonásig érvényes. A Szolgáltató fenntartja 
              a jogot az ÁSZF egyoldalú módosítására, melyről 30 nappal korábban értesíti partnereit.
            </p>

            <p className="mt-8 text-sm text-neutral-600">
              Utolsó frissítés: 2024. január 1.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}