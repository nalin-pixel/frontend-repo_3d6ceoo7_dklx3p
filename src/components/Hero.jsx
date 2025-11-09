import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Mail } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mistY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const symbolsRotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const [playing, setPlaying] = useState(false)

  const toggleAudio = () => {
    const el = document.getElementById('bg-audio')
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      el.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-900 text-slate-100">
      {/* Parallax Background Layers */}
      <motion.div style={{ y: mountainsY }} className="pointer-events-none absolute inset-0">
        <svg viewBox="0 0 1440 600" className="w-full h-full opacity-60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b2d6b" />
              <stop offset="100%" stopColor="#1b1638" />
            </linearGradient>
          </defs>
          <path d="M0,420 L120,360 L260,420 L420,300 L560,420 L720,280 L880,420 L1040,320 L1200,420 L1440,360 L1440,600 L0,600 Z" fill="url(#mountainGrad)" />
          <path d="M0,460 L140,420 L300,460 L420,380 L560,470 L740,360 L900,470 L1080,380 L1240,460 L1440,420 L1440,600 L0,600 Z" fill="#1a1640" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Floating Mist */}
      <motion.div style={{ y: mistY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-0 right-0 h-64 bg-gradient-to-b from-indigo-300/20 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-200/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Rotating Sigils */}
      <motion.div style={{ rotate: symbolsRotate }} className="pointer-events-none absolute -z-[0] w-[80vmin] h-[80vmin] rounded-full bg-gradient-to-br from-indigo-400/10 via-fuchsia-400/10 to-cyan-400/10 blur-2xl" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm tracking-wide text-slate-200">Cultivation Aesthetic • Semi-3D Aura</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">
            Mahatab Khan
          </span>
          <span className="block text-slate-200/90 text-2xl sm:text-3xl mt-3">Cultivating the Art of Code.</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-slate-300/90">
          Web developer forging elegant interfaces and automated workflows — blending modern engineering with mythical inspiration.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-indigo-900/30">
            Explore My Work
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition">
            <Mail className="w-4 h-4" /> Hire Me
          </a>
        </div>

        {/* Audio control */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-300/80">
          <button onClick={toggleAudio} className="px-3 py-1.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition">
            {playing ? 'Pause ambience' : 'Play ambience'}
          </button>
          <span className="opacity-70">soft guzheng • ambient fantasy</span>
        </div>

        <audio id="bg-audio" loop src="https://cdn.pixabay.com/audio/2021/09/28/audio_1b2bbd0c4c.mp3" />
      </div>
    </section>
  )
}
