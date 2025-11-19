import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Analytics',
    desc: 'A self-serve analytics dashboard with real-time charts and role-based access.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fintech Mobile',
    desc: 'iOS/Android app for personal finance with bank connections and budgeting.',
    tags: ['React Native', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwTW9iaWxlfGVufDB8MHx8fDE3NjM1ODUyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'E-commerce Revamp',
    desc: 'Headless storefront with blazing speed and stellar conversion.',
    tags: ['Remix', 'Stripe', 'Headless CMS'],
    image: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwUmV2YW1wfGVufDB8MHx8fDE3NjM1MzM3MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-blue-100/80">A few projects that show our range and attention to detail.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="text-white font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-blue-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-md bg-white/10 text-xs text-blue-100/90">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
