import { Metadata } from 'next'
import { Hero } from '@/components/blocks/hero'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Adatvédelmi Tájékoztató | Brutissimo',
  description: 'A Brutissimo adatkezelési és adatvédelmi tájékoztatója.',
}

export default function PrivacyPage() {
  return (
    <>
      <Hero
        heading="Adatvédelmi Tájékoztató"
        subheading="Információk az Ön személyes adatainak kezeléséről"
      />

      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Adatkezelő adatai</h2>
            <p>
              <strong>Név:</strong> Brutissimo Kft.<br />
              <strong>Székhely:</strong> 1234 Budapest, Példa utca 10.<br />
              <strong>Cégjegyzékszám:</strong> 01-09-123456<br />
              <strong>Adószám:</strong> 12345678-2-41<br />
              <strong>E-mail:</strong> info@brutissimo.hu<br />
              <strong>Telefon:</strong> +36 30 123 4567
            </p>

            <h2>2. Adatkezelés jogalapja</h2>
            <p>
              Az adatkezelés jogalapja az Európai Parlament és a Tanács (EU) 2016/679 
              rendelete (GDPR) 6. cikk (1) bekezdésének:
            </p>
            <ul>
              <li>a) pontja szerinti érintetti hozzájárulás</li>
              <li>b) pontja szerinti szerződés teljesítése</li>
              <li>c) pontja szerinti jogi kötelezettség teljesítése</li>
              <li>f) pontja szerinti jogos érdek</li>
            </ul>

            <h2>3. Kezelt személyes adatok köre</h2>
            <h3>3.1 Kapcsolatfelvétel során</h3>
            <ul>
              <li>Név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Cégnév (opcionális)</li>
              <li>Üzenet tartalma</li>
            </ul>

            <h3>3.2 Szerződéskötés során</h3>
            <ul>
              <li>Név</li>
              <li>Születési név</li>
              <li>Anyja neve</li>
              <li>Születési hely és idő</li>
              <li>Lakcím</li>
              <li>Adóazonosító jel</li>
              <li>Bankszámlaszám</li>
            </ul>

            <h3>3.3 Hírlevél feliratkozás</h3>
            <ul>
              <li>Név</li>
              <li>E-mail cím</li>
            </ul>

            <h2>4. Adatkezelés célja</h2>
            <p>Az adatkezelés céljai:</p>
            <ul>
              <li>Kapcsolatfelvétel és kommunikáció</li>
              <li>Szerződés megkötése és teljesítése</li>
              <li>Számlázás és könyvelés</li>
              <li>Marketing tevékenység (hozzájárulás alapján)</li>
              <li>Jogi kötelezettségek teljesítése</li>
            </ul>

            <h2>5. Adatkezelés időtartama</h2>
            <ul>
              <li><strong>Kapcsolatfelvételi adatok:</strong> Az utolsó kapcsolatfelvételtől számított 2 év</li>
              <li><strong>Szerződéses adatok:</strong> A szerződés megszűnésétől számított 5 év</li>
              <li><strong>Számviteli bizonylatok:</strong> 8 év</li>
              <li><strong>Hírlevél:</strong> Leiratkozásig</li>
            </ul>

            <h2>6. Adatok tárolása és biztonsága</h2>
            <p>
              Az adatokat biztonságos szervereken tároljuk, amelyek az Európai Unió területén 
              találhatók. Az adatok védelme érdekében megfelelő technikai és szervezési 
              intézkedéseket alkalmazunk.
            </p>

            <h2>7. Adattovábbítás</h2>
            <p>Személyes adatait az alábbi címzettek részére továbbíthatjuk:</p>
            <ul>
              <li>Könyvelő iroda (számviteli kötelezettségek teljesítése)</li>
              <li>Szállítmányozási partner (automata kiszállítás)</li>
              <li>IT szolgáltató (rendszer karbantartás)</li>
              <li>Hatóságok (jogszabályi kötelezettség esetén)</li>
            </ul>

            <h2>8. Az Ön jogai</h2>
            <p>Ön az alábbi jogokkal rendelkezik személyes adataival kapcsolatban:</p>
            <ul>
              <li><strong>Hozzáférés joga:</strong> Tájékoztatást kérhet a kezelt adatokról</li>
              <li><strong>Helyesbítés joga:</strong> Kérheti adatai módosítását</li>
              <li><strong>Törlés joga:</strong> Kérheti adatai törlését</li>
              <li><strong>Korlátozás joga:</strong> Kérheti az adatkezelés korlátozását</li>
              <li><strong>Tiltakozás joga:</strong> Tiltakozhat az adatkezelés ellen</li>
              <li><strong>Adathordozhatóság:</strong> Kérheti adatai átadását</li>
            </ul>

            <h2>9. Cookie-k (sütik)</h2>
            <p>
              Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében. 
              A cookie-k típusai:
            </p>
            <ul>
              <li><strong>Szükséges cookie-k:</strong> A weboldal működéséhez elengedhetetlenek</li>
              <li><strong>Statisztikai cookie-k:</strong> Anonim statisztikák gyűjtése</li>
              <li><strong>Marketing cookie-k:</strong> Csak hozzájárulással</li>
            </ul>

            <h2>10. Jogorvoslat</h2>
            <p>
              Amennyiben úgy érzi, hogy személyes adatainak kezelése sérti a jogait, 
              az alábbi lehetőségei vannak:
            </p>
            <ul>
              <li>Kapcsolatfelvétel velünk: info@brutissimo.hu</li>
              <li>
                Panasz benyújtása a Nemzeti Adatvédelmi és Információszabadság Hatóságnál:<br />
                Cím: 1055 Budapest, Falk Miksa utca 9-11.<br />
                E-mail: ugyfelszolgalat@naih.hu
              </li>
              <li>Bírósági eljárás kezdeményezése</li>
            </ul>

            <h2>11. Adatvédelmi tájékoztató módosítása</h2>
            <p>
              Fenntartjuk a jogot az adatvédelmi tájékoztató módosítására. A módosításokról 
              weboldalunkon és e-mailben tájékoztatjuk ügyfeleinket.
            </p>

            <p className="mt-8 text-sm text-neutral-600">
              Utolsó frissítés: 2024. január 1.<br />
              Hatályos: 2024. január 1-től
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}