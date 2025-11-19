import { motion } from 'framer-motion'
import { Lightbulb, Brush, Code2, Rocket } from 'lucide-react'

const steps = [
  { icon: Lightbulb, title: 'Discover', desc: 'We align on business goals, audience, and success metrics.' },
  { icon: Brush, title: 'Design', desc: 'Rapid ideation to polished UI/UX systems with Figma components.' },
  { icon: Code2, title: 'Build', desc: 'Modern engineering, clean architecture, automated testing & CI/CD.' },
  { icon: Rocket, title: 'Launch', desc: 'Zero-downtime deploys and analytics to measure impact.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our process</h2>
          <p className="mt-3 text-blue-100/80">A simple, outcome-focused approach from idea to launch.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl p-6 border border-white/10 bg-white/[0.04]">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
