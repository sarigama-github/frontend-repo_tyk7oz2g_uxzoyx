export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-500 shadow ring-1 ring-yellow-500/30" />
            <span className="font-extrabold tracking-tight text-gray-900">PicoYellow</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">Online marketingbureau gespecialiseerd in SEO en websites. Gevestigd in Nederland.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Diensten</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>SEO Strategie</li>
            <li>Technische SEO</li>
            <li>Content & Linkbuilding</li>
            <li>Webdesign & Development</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>info@picoyellow.nl</li>
            <li>KVK en btw op aanvraag</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} PicoYellow — Alle rechten voorbehouden.</div>
    </footer>
  )
}
