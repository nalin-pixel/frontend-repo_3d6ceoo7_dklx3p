import { motion } from 'framer-motion'
import { Flame, Code, Wand2, Layout } from 'lucide-react'

const skills = [
  { icon: <Code className="w-5 h-5" />, title: 'Element of Frontend Fire', desc: 'HTML, CSS, JavaScript, React' },
  { icon: <Wand2 className="w-5 h-5" />, title: 'Script of Automation', desc: 'Google Apps Script, workflow rituals' },
  { icon: <Layout className="w-5 h-5" />, title: 'Seal of UX Harmony', desc: 'Information architecture, interaction design' },
  { icon: <Flame className="w-5 h-5" />, title: 'Rune of Creative AI', desc: 'Promptcraft, image/text generation' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-b from-slate-950 to-indigo-950 text-slate-100">
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">Skills & Tools</h2>
          <p className="mt-3 text-slate-300/90">Disciplines honed through years of practice and a calm mind.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600/30 to-fuchsia-600/30 text-indigo-100 border border-white/10">
                  {s.icon}
                </div>
                <div>
                  <div className="font-semibold text-slate-100">{s.title}</div>
                  <div className="text-sm text-slate-300/90">{s.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
