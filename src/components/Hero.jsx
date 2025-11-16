import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] bg-yellow-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center text-black bg-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Nederlandse online marketing partner</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Groei met SEO en bliksemsnelle websites
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Bello Blue helpt ambitieuze bedrijven met topposities in Google en conversiegerichte websites. Data-gedreven, transparant en snel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
              Vrijblijvende SEO scan
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#diensten" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-neutral-900 text-white font-semibold border border-neutral-800 hover:border-neutral-700 transition">Onze diensten</a>
          </div>
          <div className="mt-6 text-sm text-neutral-400">
            • Technische SEO • Contentstrategie • Linkbuilding • Webdesign & development
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="Marketing team" className="rounded-xl object-cover h-72 w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="rounded-xl bg-yellow-400 text-black px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold">Gemiddeld +112% organische groei in 6 maanden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
