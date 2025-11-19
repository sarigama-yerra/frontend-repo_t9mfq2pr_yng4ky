import { Code2, Smartphone, Palette, Rocket, Shield, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites with modern stacks, SEO-first and accessible.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Cross-platform mobile apps with native feel and rock-solid performance.',
  },
  {
    icon: Palette,
    title: 'Brand & UI/UX',
    desc: 'From strategy to Figma — we craft visual systems that scale.',
  },
  {
    icon: Rocket,
    title: 'MVP Launch',
    desc: 'Validate fast with end-to-end design, build, and deploy packages.',
  },
  {
    icon: Shield,
    title: 'Security & Audits',
    desc: 'Harden your product with best-practice security reviews and fixes.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: 'Continuous improvements, monitoring, and support packages.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-blue-100/80">Everything you need to ship world-class digital products.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] hover:from-white/10 hover:border-white/20 transition overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
              </div>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-125 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
