import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './components/shared/SocialIcons';

function App() {
  // Apply dark mode based on preference or default to dark
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    
    // If there's a saved preference, use that
    if (savedMode !== null) {
      if (savedMode === 'true') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return;
    }
    
    // If no saved preference, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply system preference or default to dark mode
    if (prefersDark || prefersDark === undefined) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      // Even without system preference, default to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and tagline */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Aditya Dhikale</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Full-Stack Developer focused on creating impactful digital experiences.</p>
              {/* Social links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/adityadhikale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-dhikale-674643288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/adityadhikale03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                <span className="block">Email: adityadhikale2003@gmail.com</span>
                <span className="block">Phone: +91 7620335644</span>
                <span className="block">Location: Mumbai, India</span>
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <motion.div 
            className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>© {new Date().getFullYear()} Aditya Dhikale. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
