import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-blue-600/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full" />
          </div>

          <div className="relative p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build something superb?</h2>
              <p className="mt-3 text-blue-100/85">Tell us about your goals and timeline. We’ll get back within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@detail.agency" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition">hello@detail.agency</a>
                <a href="#" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">Book a call</a>
              </div>
            </div>

            <form className="grid gap-4">
              <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
              <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email" />
              <textarea rows={4} className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Project details" />
              <button className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
