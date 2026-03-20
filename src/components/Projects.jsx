import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, SparklesIcon } from '@heroicons/react/24/outline';

import expenseManagerImg from '../assets/images/projects/expense-manager.png';
import wildTrackImg from '../assets/images/projects/wildtrack.png';
import coolClimateImg from '../assets/images/projects/coolclimate.png';
import wildCartImg from '../assets/images/projects/WildCart.png';
import wildSongsImg from '../assets/images/projects/wildsongs.png';
import dailyDoseImg from '../assets/images/projects/dailydose.png';
import wildNotesImg from '../assets/images/projects/WildNotes.png';
import wildTextImg from '../assets/images/projects/wildtext.png';
import wildShapesImg from '../assets/images/projects/wildshapes.png';
import Vidyagram from '../assets/images/projects/Vidyagram.png';
import digitalgifts from '../assets/images/projects/digitalgifts.png';

const projectsData = [
  {
    id: 1,
    name: 'VidyaGram',
    description: 'AI-powered content platform with Gemini LLM API integration, automating content generation and reducing publishing time by 40%. Scalable React frontend + REST API serving 100+ users with 200ms real-time updates.',
    image: Vidyagram,
    tech: ['Next.js', 'Supabase', 'Gemini API', 'Vercel'],
    github: 'https://github.com/adityadhikale/VidyaGram',
    demo: 'https://vidyagram.vercel.app/',
    category: 'ai',
    featured: true,
  },
  {
    id: 2,
    name: 'Inventory Optimizer',
    description: 'Python automation tool for replenishment planning, reducing manual effort in supply chain operations. Power BI dashboards translating complex supply chain data into actionable insights.',
    image: null,
    tech: ['Python', 'Azure SQL', 'OR-Tools', 'Power BI'],
    github: 'https://github.com/adityadhikale/Inventory-Optimizer',
    demo: null,
    category: 'ai',
    featured: true,
  },
  {
    id: 3,
    name: 'Auto Meme Instagram Bot',
    description: 'Fully automated AI content pipeline: Google News RSS → LLaMA AI → Imgflip meme generation → Instagram posting. Zero manual intervention required.',
    image: null,
    tech: ['Make.com', 'Groq LLaMA', 'Imgflip API', 'Meta Graph API'],
    github: null,
    demo: null,
    category: 'ai',
    featured: true,
  },
  {
    id: 4,
    name: 'Expense Manager',
    description: 'Full-stack finance management app with 99% transaction accuracy. Features transaction tracking, budget visualization, and robust unit/integration tests following OOP principles.',
    image: expenseManagerImg,
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Drizzle ORM'],
    github: 'https://github.com/adityadhikale/Expense-Manager',
    demo: 'https://expense-manager-lite.netlify.app/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 5,
    name: 'Digital Gifts',
    description: 'Digital Gifts is Full-stack web app to create & share personalized digital gifts with a multi-step builder, live preview, and animated reveal. Built with Next.js, TypeScript, Supabase & Framer Motion.',
    image: digitalgifts,
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Vercel'],
    github: 'https://github.com/adityadhikale/digital-gifts',
    demo: 'https://digitalgifts.vercel.app/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 6,
    name: 'OnTrack',
    description: 'A music streaming application with playlist management, audio player controls, and a clean UI for discovering and playing tracks.',
    image: wildTrackImg,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/adityadhikale/WildTrack',
    demo: 'https://wildtrack.netlify.app/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 7,
    name: 'Cool Climate',
    description: 'Professionally designed AC service website with modern UI. Built with React and TypeScript, featuring responsive design, service showcase, and customer conversion focus.',
    image: coolClimateImg,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/adityadhikale/coolclimate',
    demo: 'https://coolclimate.vercel.app/',
    category: 'frontend',
    featured: false,
  },
  {
    id: 8,
    name: 'Fill Cart',
    description: 'Feature-rich e-commerce application with product browsing, search, shopping cart, and checkout flow. State management via Redux Toolkit mirrors real-world retail experience.',
    image: wildCartImg,
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express'],
    github: 'https://github.com/adityadhikale/WildCart',
    demo: 'https://adityadhikale.github.io/WildCart/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 9,
    name: 'Get Songs',
    description: 'Spotify-inspired music streaming platform with real-time playback, playlist creation, and intelligent recommendations powered by TensorFlow.js.',
    image: wildSongsImg,
    tech: ['React', 'Socket.io', 'TensorFlow.js', 'Node.js'],
    github: 'https://github.com/adityadhikale/WildSongs',
    demo: 'https://wildsongs.netlify.app/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 10,
    name: 'Daily Dose',
    description: 'News aggregator PWA pulling real-time headlines from NewsAPI. Features category filtering, bookmarking, and offline access via service workers.',
    image: dailyDoseImg,
    tech: ['React', 'NewsAPI', 'PWA', 'Tailwind CSS'],
    github: 'https://github.com/adityadhikale/DailyDose',
    demo: 'https://getdailydose.netlify.app/',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 11,
    name: 'Post Notes',
    description: 'Feature-rich note-taking tool with Markdown support, IndexedDB persistence, and a clean distraction-free writing experience.',
    image: wildNotesImg,
    tech: ['React', 'IndexedDB', 'Markdown', 'Tailwind CSS'],
    github: 'https://github.com/adityadhikale/WildNotes',
    demo: 'https://adityadhikale.github.io/WildNotes/',
    category: 'frontend',
    featured: false,
  },
  {
    id: 12,
    name: 'TypeShift',
    description: 'Text utility tool with CodeMirror integration, RegEx support, and various text transformation and analysis features.',
    image: wildTextImg,
    tech: ['React', 'CodeMirror', 'RegEx', 'Tailwind CSS'],
    github: 'https://github.com/adityadhikale/WildText',
    demo: 'https://typeshift.netlify.app/',
    category: 'frontend',
    featured: false,
  },
  {
    id: 13,
    name: 'PlayWithShapes',
    description: 'Interactive SVG editor with shape creation, animations, and export capabilities. A playground for creating and manipulating vector graphics.',
    image: wildShapesImg,
    tech: ['React', 'SVG', 'Canvas API', 'Framer Motion'],
    github: 'https://github.com/adityadhikale/WildShapes',
    demo: 'https://wildshapes.netlify.app/',
    category: 'frontend',
    featured: false,
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / LLM' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2 variants={fadeUp} className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            A selection of projects showcasing AI integration, full-stack development, and automation.
          </motion.p>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <div className="inline-flex gap-2 p-1 rounded-xl glass">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${active === f.id
                      ? 'accent-gradient text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-card group overflow-hidden flex flex-col"
                >
                  {/* Project image */}
                  <div className="relative w-full h-44 bg-slate-100 dark:bg-slate-800/50 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center accent-gradient opacity-80">
                        <span className="text-3xl font-display font-bold text-white/90">
                          {project.name.split(' ').map((w) => w[0]).join('')}
                        </span>
                      </div>
                    )}

                    {/* AI badge overlay */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium accent-gradient text-white rounded-full shadow-lg">
                          <SparklesIcon className="w-3 h-3" />
                          AI Powered
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
