export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Klaar om te groeien met SEO?</h2>
            <p className="mt-3 text-gray-300">Ontvang binnen 48 uur een gratis SEO check met concrete kansen voor jouw bedrijf.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li>Technische quick wins</li>
              <li>Zoekwoorden met hoogste potentie</li>
              <li>Content- en linkbuildingadvies</li>
            </ul>
          </div>
          <form className="bg-white rounded-2xl p-6 text-gray-900 space-y-4 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Naam</label>
                <input type="text" placeholder="Voor- en achternaam" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div>
                <label className="text-sm font-medium">E-mailadres</label>
                <input type="email" placeholder="jij@bedrijf.nl" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Website</label>
              <input type="url" placeholder="https://www.jouwsite.nl" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="text-sm font-medium">Waar wil je op scoren?</label>
              <textarea placeholder="Belangrijkste zoekwoorden en regio’s" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">Ontvang SEO scan</button>
            <p className="text-xs text-gray-500 text-center">We gebruiken je gegevens alleen om contact op te nemen.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
