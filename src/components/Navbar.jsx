import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>{e.preventDefault();scrollTo('home')}} className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-500 shadow ring-1 ring-yellow-500/30" />
          <span className="font-extrabold tracking-tight text-gray-900">PicoYellow</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <button onClick={()=>scrollTo('diensten')} className="hover:text-gray-900">Diensten</button>
          <button onClick={()=>scrollTo('cases')} className="hover:text-gray-900">Cases</button>
          <button onClick={()=>scrollTo('proces')} className="hover:text-gray-900">Proces</button>
          <button onClick={()=>scrollTo('over')} className="hover:text-gray-900">Over ons</button>
          <button onClick={()=>scrollTo('contact')} className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black transition">Vrijblijvend advies</button>
        </div>

        <button className="md:hidden p-2" aria-label="menu" onClick={()=>setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 space-y-2">
          <button onClick={()=>scrollTo('diensten')} className="block w-full text-left py-2">Diensten</button>
          <button onClick={()=>scrollTo('cases')} className="block w-full text-left py-2">Cases</button>
          <button onClick={()=>scrollTo('proces')} className="block w-full text-left py-2">Proces</button>
          <button onClick={()=>scrollTo('over')} className="block w-full text-left py-2">Over ons</button>
          <button onClick={()=>scrollTo('contact')} className="block w-full text-left py-2 bg-gray-900 text-white rounded-md">Vrijblijvend advies</button>
        </div>
      )}
    </header>
  )
}
