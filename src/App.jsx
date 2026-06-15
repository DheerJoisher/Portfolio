import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import About from './sections/About.jsx';
import Education from './sections/Education.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-slate-100">
      <AnimatedBackground />
      <Navbar />

      <main className="relative isolate">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-7xl px-6 py-8 sm:px-8"
        >
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Education />
          <Achievements />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
