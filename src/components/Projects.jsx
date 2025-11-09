import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Spirit Ledger',
    desc: 'Automated Google Apps Script workflows that balance energies (data) across realms (sheets).',
    link: '#',
  },
  {
    title: 'Temple of UI',
    desc: 'A component library forged with harmony and motion for serene user experiences.',
    link: '#',
  },
  {
    title: 'Beast of Data',
    desc: 'Dashboard that tames wild datasets into clear insights with interactive visualizations.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-indigo-950 to-slate-950 text-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] h-40 bg-gradient-to-b from-fuchsia-400/10 to-transparent blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">Artifacts & Relics</h2>
          <p className="mt-3 text-slate-300/90">Projects presented as spirit relics — hover to unveil their essence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl p-1 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-cyan-400/30"
            >
              <div className="relative rounded-2xl h-56 overflow-hidden bg-slate-900/70 border border-white/10">
                {/* Glow border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-300/30 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
                  </div>
                  <div className="text-amber-200/90 group-hover:translate-x-1 transition-transform">Read Scroll →</div>
                </div>

                {/* Decorative runes */}
                <div className="pointer-events-none absolute right-3 top-3 text-xs text-slate-300/60">符 文 霊</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
