import { useState } from 'react'
import { Menu, X, PanelsTopLeft } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl border border-white/10 bg-slate-900/60 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-3">
              <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <PanelsTopLeft className="w-6 h-6" />
              </span>
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">Detail Agency</div>
                <div className="text-xs text-blue-200/70">Web • App • Brand</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
                Get a quote
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pt-3 pb-6">
              <nav className="grid gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-center">Get a quote</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
