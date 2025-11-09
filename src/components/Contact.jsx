import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-indigo-950 text-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute -left-10 bottom-0 w-[140%] h-64 bg-gradient-to-t from-indigo-400/20 via-fuchsia-400/10 to-transparent blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">Reach Out — Let’s Forge Something Legendary.</h2>
        <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">Tell me about your quest. Whether it’s a swift tool, a polished interface, or an automated ritual — I’ll help you bring it to life.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="mx-auto mt-10 max-w-xl grid gap-4 text-left">
          <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 outline-none focus:border-fuchsia-400/50" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 outline-none focus:border-fuchsia-400/50" />
          <textarea required placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 outline-none focus:border-fuchsia-400/50" />
          <button className="justify-self-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-indigo-900/30">Send Message</button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-5 text-slate-300/90">
          <a href="mailto:mahatab@example.com" className="inline-flex items-center gap-2 hover:text-white transition"><Mail className="w-4 h-4"/> Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Github className="w-4 h-4"/> GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Linkedin className="w-4 h-4"/> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
