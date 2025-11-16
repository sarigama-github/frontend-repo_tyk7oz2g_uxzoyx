const steps = [
  {
    title: 'Kick-off & Analyse',
    desc: 'We duiken in je business, doelgroep en huidige data. We brengen kansen in kaart en stellen KPI’s vast.'
  },
  {
    title: 'Techniek & Content',
    desc: 'Fixes voor performance en indexatie. Contentplan met zoekwoordclusters en pagina-architectuur.'
  },
  {
    title: 'Livegang & Linkbuilding',
    desc: 'Nieuwe pagina’s live, interne linking en outreach voor autoriteit. We meten alles.'
  },
  {
    title: 'Optimaliseren & Schalen',
    desc: 'Maandelijkse sprints: A/B testen, content uitbreiden en uitbreiden naar nieuwe segmenten.'
  }
]

export default function Process() {
  return (
    <section id="proces" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Aanpak</h2>
          <p className="mt-3 text-neutral-300">Transparant, data-gedreven en gericht op lange termijn groei.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-2 gap-6 list-none">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-neutral-800 p-6 bg-neutral-900">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-extrabold shadow">
                {i + 1}
              </div>
              <h3 className="mt-2 font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
