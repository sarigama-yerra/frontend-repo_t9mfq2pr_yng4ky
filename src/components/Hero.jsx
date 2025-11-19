import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-28 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 border border-white/15 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            We craft modern digital products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Detail agency for web & app experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-blue-100/85 max-w-xl">
            From idea to polished product — we design, build and ship high-quality websites, mobile apps, and delightful brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">
              Start a project
            </a>
            <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">
              See our work
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-72 bg-gradient-to-t from-blue-500/10 via-indigo-500/10 to-transparent blur-[64px] pointer-events-none" />
    </section>
  )
}
