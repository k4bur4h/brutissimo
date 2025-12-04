import Link from 'next/link'

export default function NescafeStory() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 to-red-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                NESCAFÉ<sup className="text-2xl">®</sup>
              </h2>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-8 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                A NESCAFÉ® története
              </h3>
              <p className="text-gray-100">
                A NESCAFÉ® világszerte megtalálható a polcokon. Minden reggel
                bízhatsz inspiráló erejében, hogy a legtöbbet hozhasd ki a
                reggeleidből, egyedül vagy barátaiddal. Mintha a NESCAFÉ® mindig
                is ott lett volna, készen arra, hogy csodálatos, gazdag,
                világszerte ismert és kedvelt ízvilágát nyújtsa, de nem volt ez
                mindig így; a NESCAFÉ® története éppoly inspiráló, mint bármelyik
                nagyszerű csésze kávé.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <p className="text-gray-100">
                A történet <strong className="text-white">1929-ben</strong>{' '}
                kezdődik, amikor a Nestlé igazgatótanácsának elnöke különleges
                kérést kapott Brazíliából. Az ország hatalmas kávéfeleslegének
                leküzdése érdekében a Nestlének egy olyan kávéterméket kellett
                létrehoznia, amely gyorsan elkészíthető és finom.
              </p>
            </div>

            <div>
              <p className="text-gray-100">
                A kávészakértő, <strong className="text-white">Max Morgenthaler</strong>{' '}
                előtt az a küldetés lebegett, hogy egy finom csésze kávét hozzon
                létre egyszerűen víz hozzáadásával. Max és csapata keményen
                dolgozott, hogy új módot találjon egy olyan azonnal oldódó kávé
                előállítására, ami megőrzi a kávé természetes ízát.
              </p>
              <p className="text-gray-100 mt-4">
                <strong className="text-white">1938-ban</strong> megtalálták a
                megoldást, és megszületett a NESCAFÉ®. A Nestlé első három betűje
                és a &ldquo;kávézó&rdquo; (café) szó egyesítésével született meg a NESCAFÉ®,
                egy akkor még új név a kávé világában.
              </p>
            </div>

            <div className="bg-green-900/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-green-300">
                Fenntartható kávétermesztés
              </h4>
              <p className="text-gray-100 mb-4">
                Minden finom NESCAFÉ® csésze mögött kávégazdaságok állnak, akik
                életre keltik kedvenc kávéidat, de ez nem mindig könnyű. A
                NESCAFÉ® szeretné segíteni a gazdákat abban, hogy ellenállóbbá
                váljanak az éghajlatváltozás kihívásaival szemben.
              </p>
              <p className="text-gray-100 mb-4">
                Segítségképpen létrehozták a{' '}
                <strong className="text-white">
                  NESCAFÉ® termelőföldi programot
                </strong>
                , amely a kisbirtokos gazdák alkalmazkodóképességét támogatja,
                ezáltal segíti őket abban, hogy gazdaságaik hatékonyabbá,
                virágzóbbá, rugalmasabbá és fenntarthatóbbá váljanak.
              </p>
              <Link
                href="https://www.nescafe.com/hu/fenntarthatosag/a-mi-vilagunk/gazdalkodas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold transition-colors"
              >
                Tudj meg többet a fenntarthatóságról
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="text-center pt-8">
              <p className="text-xl text-gray-200 italic">
                &ldquo;A NESCAFÉ® tudás, eszközök és technológia segítségével szeretné
                segíteni a gazdákat abban, hogy rugalmasabbá tegyék a
                kávétermesztést.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
