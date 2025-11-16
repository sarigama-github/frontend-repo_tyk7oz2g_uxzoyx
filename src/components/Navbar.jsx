import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'bg-neutral-950/80 backdrop-blur border-b border-neutral-800' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>{e.preventDefault();scrollTo('home')}} className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-yellow-400 shadow ring-1 ring-yellow-300" />
          <span className="font-extrabold tracking-tight text-white">PicoYellow</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
          <button onClick={()=>scrollTo('diensten')} className="hover:text-white">Diensten</button>
          <button onClick={()=>scrollTo('cases')} className="hover:text-white">Cases</button>
          <button onClick={()=>scrollTo('proces')} className="hover:text-white">Proces</button>
          <button onClick={()=>scrollTo('over')} className="hover:text-white">Over ons</button>
          <button onClick={()=>scrollTo('contact')} className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition">Vrijblijvend advies</button>
        </div>

        <button className="md:hidden p-2 text-white" aria-label="menu" onClick={()=>setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-900 px-4 pb-4 space-y-2 text-neutral-100">
          <button onClick={()=>scrollTo('diensten')} className="block w-full text-left py-2">Diensten</button>
          <button onClick={()=>scrollTo('cases')} className="block w-full text-left py-2">Cases</button>
          <button onClick={()=>scrollTo('proces')} className="block w-full text-left py-2">Proces</button>
          <button onClick={()=>scrollTo('over')} className="block w-full text-left py-2">Over ons</button>
          <button onClick={()=>scrollTo('contact')} className="block w-full text-left py-2 bg-yellow-400 text-black rounded-md">Vrijblijvend advies</button>
        </div>
      )}
    </header>
  )
}
