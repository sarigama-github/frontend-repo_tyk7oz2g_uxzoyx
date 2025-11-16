const cases = [
  {
    name: 'SaaS scale-up',
    result: '+134% organisch verkeer',
    details: 'Binnen 6 maanden door technische verbeteringen, nieuwe contentclusters en linkbuilding.',
  },
  {
    name: 'Lokale dienstverlener',
    result: 'Top 3 posities in 7 steden',
    details: 'Local SEO en city landing pages met sterke reviews en interne linking.',
  },
  {
    name: 'E-commerce',
    result: '+41% omzet via organisch',
    details: 'Product-SEO, categorie optimalisaties en structured data implementaties.',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Resultaten</h2>
          <p className="mt-3 text-neutral-300">Geen loze beloftes — concrete groei en duidelijke KPI’s.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm hover:border-yellow-400/60 transition">
              <div className="text-yellow-400 font-bold">{c.result}</div>
              <div className="mt-1 text-white font-semibold">{c.name}</div>
              <p className="mt-2 text-neutral-300 text-sm">{c.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
