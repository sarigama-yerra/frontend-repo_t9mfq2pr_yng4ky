import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70">© {new Date().getFullYear()} Detail Agency. All rights reserved.</p>
          <div className="text-blue-200/60">Made with care — web, app & brand specialists.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
