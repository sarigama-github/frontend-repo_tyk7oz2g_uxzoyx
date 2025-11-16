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
    <div className="min-h-screen bg-white text-gray-900">
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
