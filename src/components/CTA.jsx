export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Klaar om te groeien met SEO?</h2>
            <p className="mt-3 text-black/80">Ontvang binnen 48 uur een gratis SEO check met concrete kansen voor jouw bedrijf.</p>
            <ul className="mt-6 space-y-2 text-sm text-black/80 list-disc list-inside">
              <li>Technische quick wins</li>
              <li>Zoekwoorden met hoogste potentie</li>
              <li>Content- en linkbuildingadvies</li>
            </ul>
          </div>
          <form className="bg-neutral-950 rounded-2xl p-6 text-white space-y-4 shadow border border-neutral-800">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Naam</label>
                <input type="text" placeholder="Voor- en achternaam" className="mt-1 w-full border border-neutral-700 bg-neutral-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-yellow-400" required />
              </div>
              <div>
                <label className="text-sm font-medium">E-mailadres</label>
                <input type="email" placeholder="jij@bedrijf.nl" className="mt-1 w-full border border-neutral-700 bg-neutral-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-yellow-400" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Website</label>
              <input type="url" placeholder="https://www.jouwsite.nl" className="mt-1 w-full border border-neutral-700 bg-neutral-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-yellow-400" />
            </div>
            <div>
              <label className="text-sm font-medium">Waar wil je op scoren?</label>
              <textarea placeholder="Belangrijkste zoekwoorden en regio’s" className="mt-1 w-full border border-neutral-700 bg-neutral-900 rounded-md px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-black focus:border-yellow-400" />
            </div>
            <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-md">Ontvang SEO scan</button>
            <p className="text-xs text-white/60 text-center">We gebruiken je gegevens alleen om contact op te nemen.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
