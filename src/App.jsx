import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'false') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface-50 text-slate-900 dark:bg-surface-950 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
