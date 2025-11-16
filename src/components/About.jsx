export default function About() {
  return (
    <section id="over" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Over PicoYellow</h2>
          <p className="mt-4 text-gray-600">Wij zijn een Nederlands online marketingbureau met een obsessie voor vindbaarheid en performance. Geen vage beloftes, maar een duidelijke strategie en maandelijkse groei.</p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
            <li>Specialisten in SEO en conversiegerichte websites</li>
            <li>Technische kennis + sterke content + autoriteit</li>
            <li>Heldere communicatie en transparante rapportages</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-extrabold text-amber-600">50+</div>
              <div className="mt-1 text-sm text-gray-600">projecten</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-600">112%</div>
              <div className="mt-1 text-sm text-gray-600">gem. groei</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-600">4.9/5</div>
              <div className="mt-1 text-sm text-gray-600">tevredenheid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
