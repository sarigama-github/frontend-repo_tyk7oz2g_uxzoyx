export default function Footer(){
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-yellow-400 shadow ring-1 ring-yellow-300" />
            <span className="font-extrabold tracking-tight text-white">Bello Blue</span>
          </div>
          <p className="mt-4 text-sm text-neutral-400">Online marketingbureau gespecialiseerd in SEO en websites. Gevestigd in Nederland.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Diensten</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>SEO Strategie</li>
            <li>Technische SEO</li>
            <li>Content & Linkbuilding</li>
            <li>Webdesign & Development</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>info@belloblue.nl</li>
            <li>KVK en btw op aanvraag</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Bello Blue — Alle rechten voorbehouden.</div>
    </footer>
  )
}
