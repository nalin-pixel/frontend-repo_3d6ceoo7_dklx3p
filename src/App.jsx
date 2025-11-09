import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Floating background code talismans */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute left-10 top-24 text-indigo-200/10 text-7xl select-none">{`</>`}</div>
        <div className="absolute right-8 top-56 text-fuchsia-200/10 text-8xl select-none">{`{}`}</div>
        <div className="absolute left-1/2 bottom-24 -translate-x-1/2 text-cyan-200/10 text-9xl select-none">{`</>`}</div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/40 border-b border-white/5">
        <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-200">MK • Code Cultivator</a>
          <div className="flex items-center gap-5 text-sm text-slate-300/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950/60">
        <div className="container mx-auto px-6 py-6 text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Mahatab Khan — Crafted with calm focus.
        </div>
      </footer>
    </div>
  )
}

export default App
