import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-900 to-indigo-950 text-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">
            About the Code Cultivator
          </h2>
          <p className="mt-4 text-slate-300/90 leading-relaxed">
            From humble beginnings in the realm of logic, I set out to master the elements of web creation — shaping interfaces, taming APIs, and weaving automation spells. Today, I craft calm, elegant experiences powered by clean code and purposeful design.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90">
            {[
              'HTML • CSS • JavaScript',
              'Google Apps Script',
              'UI/UX • Interaction Design',
              'Automation & No-code orchestration',
              'Creative AI tools',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="relative rounded-2xl p-1 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-amber-300/40">
            <div className="rounded-2xl p-6 bg-slate-900/60 backdrop-blur border border-white/10">
              <h3 className="text-lg font-semibold text-slate-100">Cultivation Disciplines</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Element of Frontend Fire</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Script of Automation</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Seal of UX Harmony</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Rune of Creative AI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
