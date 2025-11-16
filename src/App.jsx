import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import Process from './components/Process'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
