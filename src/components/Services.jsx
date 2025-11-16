import { Search, Globe, Code, LineChart } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO & Zoekmachine optimalisatie',
    desc: 'Technische SEO, contentoptimalisatie en autoriteit opbouwen. Gericht op duurzame groei en meetbare resultaten.',
    bullets: [
      'Technische SEO-audit en fixes',
      'Contentstrategie en zoekwoordonderzoek',
      'Linkbuilding en autoriteit',
    ],
  },
  {
    icon: Code,
    title: 'Webdesign & Development',
    desc: 'Supersnelle, mobiele websites die converteren. Gebouwd met moderne technologie en SEO by design.',
    bullets: [
      'Conversiegericht design',
      'Vite + React + Tailwind (supersnel)',
      'Integraties en formulierkoppelingen',
    ],
  },
  {
    icon: Globe,
    title: 'Local SEO & Google Business',
    desc: 'Scoor lokaal met geoptimaliseerde Google Business profielen, reviews en landingspagina’s per regio.',
    bullets: [
      'Pagina’s per stad/regio',
      'Reviewstrategie en reputatie',
      'Tracking en rapportage',
    ],
  },
  {
    icon: LineChart,
    title: 'Analytics & Rapportage',
    desc: 'Helder inzicht in groei via GA4, Search Console en dashboards. Duidelijk advies, geen ruis.',
    bullets: [
      'GA4 en conversiemetingen',
      'SEO dashboards',
      'Heldere maandrapportages',
    ],
  },
]

export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Diensten</h2>
          <p className="mt-3 text-gray-600">Alles wat je nodig hebt om online te winnen — van vindbaarheid tot verbluffende websites.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white">
              <s.icon className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
