export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-xs font-semibold">Nederlandse online marketing partner</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Groei met SEO en razendsnelle websites
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            PicoYellow helpt ambitieuze bedrijven in Nederland met het winnen van topposities in Google en het bouwen van conversiegedreven websites.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-black transition">Vrijblijvende SEO scan</a>
            <a href="#diensten" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 transition">Onze diensten</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            • Technische SEO • Contentstrategie • Linkbuilding • Webdesign & development
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="Marketing team" className="rounded-xl object-cover h-72 w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="rounded-xl bg-amber-500 text-white px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold">Gemiddeld +112% organische groei in 6 maanden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
