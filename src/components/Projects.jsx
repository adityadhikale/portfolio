import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// Import project images
import coolClimateImage from '../assets/images/projects/coolclimate.png';
import dailyDoseImage from '../assets/images/projects/dailydose.png';
import expenseManagerImage from '../assets/images/projects/expense-manager.png';
import wildCartImage from '../assets/images/projects/WildCart.png';
import wildNotesImage from '../assets/images/projects/WildNotes.png';
import wildShapesImage from '../assets/images/projects/wildshapes.png';
import wildTextImage from '../assets/images/projects/wildtext.png';
import wildTrackImage from '../assets/images/projects/wildtrack.png';
import wildSongsImage from '../assets/images/projects/wildsongs.png';
// Project data with local details
const projectsData = [
    {
    id: 3,
    name: 'Expense Manager',
    description: 'A personal finance management platform that helps users track their spending and income. It offers features like transaction tracking, categorization, budget visualization, and CSV import to simplify money management. Designed to provide a clear financial overview and promote better financial habits.',
    image: expenseManagerImage,
    tech_stack: ['React 18.2', 'Express 4.18', 'MongoDB Atlas', 'Node.js 18', 'Chart.js 4.3', 'Firebase Auth 9.17', 'Tesseract.js 4.1'],
    github_url: 'https://github.com/adityadhikale/Expense-Manager',
    demo_url: 'https://expense-manager-lite.netlify.app/',
    category: 'fullstack'
  },
      {
    id: 4,
    name: 'Wild Track',
    description: 'A sleek and responsive music streaming application that allows users to discover and enjoy a wide range of tracks. The interface emphasizes ease of use and smooth navigation, creating a comfortable listening experience for casual users and music lovers alike. Perfect for exploring songs in a simple, no-fuss environment.',
    image: wildTrackImage,
    tech_stack: ['React 18.2', 'Node.js 18', 'Express 4.18', 'MongoDB Atlas', 'Google Fit API', 'TailwindCSS 3.3', 'Python FastAPI'],
    github_url: 'https://github.com/adityadhikale/WildTrack',
    demo_url: 'https://wildtrack.netlify.app/',
    category: 'fullstack'
  },
    {
    id: 5,
    name: 'Cool Climate',
    description: 'A professionally designed service website for an air conditioning repair and maintenance business. It clearly showcases services, customer benefits, and contact details, aimed at building trust and converting visitors into clients. The layout ensures that users quickly find what they need while reinforcing the credibility of the brand.',
    image: coolClimateImage,
    tech_stack: ['React 18.2', 'TypeScript 5.0', 'TailwindCSS 3.3', 'OpenWeather API', 'Chart.js 4.3',],
    github_url: 'https://github.com/adityadhikale/coolclimate',
    demo_url: 'https://coolclimate.vercel.app/',
    category: 'frontend'
  },
  {
    id: 1,
    name: 'Wild Cart',
    description: 'A feature-rich e-commerce application that allows users to browse, search, and shop for a variety of products across categories. Includes product detail pages, shopping cart functionality, and a polished interface that mirrors a real-world online store experience. Ideal for simulating the customer journey in an online retail space.',
    image: wildCartImage,
    tech_stack: ['React 18.2', 'Redux Toolkit 1.9', 'Node.js 18', 'Express 4.18'],
    github_url: 'https://github.com/adityadhikale/WildCart',
    demo_url: 'https://adityadhikale.github.io/WildCart/',
    category: 'fullstack'
  },
  {
    id: 2,
    name: 'Wild Songs',
    description: 'A Spotify-inspired lightweight music streaming application with real-time features. Developed a custom audio visualizer using WebGL shaders, implemented collaborative playlists with Socket.io for real-time updates, and built recommendation algorithms using TensorFlow.js for personalized music discovery.',
    image: wildSongsImage,
    tech_stack: ['React 18.2', 'Node.js 18', 'Express 4.18', 'Supabase', 'Web Audio API', 'Socket.io 4.6', 'TensorFlow.js 4.2'],
    github_url: 'https://github.com/adityadhikale/WildSongs',
    demo_url: 'https://wildsongs.netlify.app/',
    category: 'fullstack'
  },
  {
    id: 6,
    name: 'Daily Dose',
    description: 'A modern news aggregator app that delivers up-to-date headlines from various sources across the web. Users can search for specific topics, filter by categories, and scroll through an endless feed of articles. The interface makes staying informed easy and engaging, all in one place.',
    image: dailyDoseImage,
    tech_stack: ['React 18.2', 'JavaScript ES2022', 'Firebase 9.19', 'NewsAPI', 'PWA', 'Workbox 6.5', 'TensorFlow.js 4.2'],
    github_url: 'https://github.com/adityadhikale/daily-dose',
    demo_url: 'https://getdailydose.netlify.app/',
    category: 'frontend'
  },
  {
    id: 7,
    name: 'Wild Notes',
    description: 'A straightforward and efficient note-taking tool designed for quick thoughts, to-do lists, or daily journaling. Users can create, edit, and delete notes with ease, keeping information organized and accessible. Great for students, developers, or anyone who likes to stay productive with minimal distractions.',
    image: wildNotesImage,
    tech_stack: ['JavaScript ES2022', 'HTML5', 'CSS3', 'IndexedDB', 'LocalStorage', 'Marked.js 4.3', 'Highlight.js 11.7'],
    github_url: 'https://github.com/adityadhikale/WildNotes',
    demo_url: 'https://adityadhikale.github.io/WildNotes/',
    category: 'frontend'
  },
  {
    id: 8,
    name: 'Wild Text',
    description: 'A comprehensive text utility tool for developers and content creators. Built an interactive regex testing playground with visual matches, implemented encoding/decoding for 12+ formats, created syntax highlighting for 30+ programming languages, and designed a split-view diff checker with real-time updates and export options.',
    image: wildTextImage,
    tech_stack: ['React 18.2', 'JavaScript ES2022', 'Bootstrap 5.3', 'RegEx', 'CodeMirror 6.0', 'DiffMatchPatch'],
    github_url: 'https://github.com/adityadhikale/WildText',
    demo_url: 'https://wildtext.netlify.app/',
    category: 'frontend'
  },
  {
    id: 9,
    name: 'Wild Shapes',
    description: 'An intuitive SVG editor for web designers and developers. Developed a custom bezier curve editor with control points, created a gradient generator with advanced color stops, built an SVG animation timeline with keyframes, and implemented export functionality with optimization for web and print use.',
    image: wildShapesImage,
    tech_stack: ['JavaScript ES2022', 'SVG.js 3.1', 'HTML5 Canvas', 'CSS3', 'Web Animations API', 'FileSaver.js 2.0'],
    github_url: 'https://github.com/adityadhikale/WildShapes',
    demo_url: 'https://wildshapes.netlify.app/',
    category: 'frontend'
  }
];

// Project card component
const ProjectCard = ({ project, index }) => {
  const { name, description, github_url, demo_url, tech_stack, image } = project;
  
  // Format project name to be more readable (in case we need it)
  const formatProjectName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 50,
        damping: 10
      }}
      whileHover={{ y: -5 }}
      className="card overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
          {name}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3 h-[3.9em]">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech_stack.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-200 dark:border-slate-700">
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            <CodeBracketIcon className="w-4 h-4 mr-1" /> Code
          </a>
          
          {demo_url && (
            <a
              href={demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Skeleton loader
const SkeletonCard = ({ index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.3, 
      delay: index * 0.1,
    }}
    className="card animate-pulse"
  >
    <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-t-lg"></div>
    <div className="p-5">
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-3 w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
      </div>
      <div className="flex justify-between mt-6 pt-2 border-t border-slate-200 dark:border-slate-700">
        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
      </div>
    </div>
  </motion.div>
);

// Empty state
const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="col-span-full py-16 flex flex-col items-center justify-center text-center"
  >
    <MagnifyingGlassIcon className="w-16 h-16 text-slate-400 dark:text-slate-600 mb-4" />
    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No projects found</h3>
    <p className="text-slate-600 dark:text-slate-400 max-w-md">
      No projects match your current filter criteria. Try adjusting your filters or come back later!
    </p>
  </motion.div>
);

// Error state
const ErrorState = ({ error, onRetry }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="col-span-full py-16 flex flex-col items-center justify-center text-center"
  >
    <ExclamationCircleIcon className="w-16 h-16 text-red-500 mb-4" />
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Oops! Something went wrong</h3>
    <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6">
      {error || "We encountered an error while fetching projects. Please try again."}
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onRetry}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
    >
      Try Again
    </motion.button>
  </motion.div>
);

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
      return;
    }
    
    // Filter based on project category
    const filtered = projectsData.filter(project => project.category === activeFilter);
    
    setFilteredProjects(filtered);
  }, [activeFilter]);

  return (
    <section id="projects" className="container-section bg-white dark:bg-slate-800">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="inline-flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === filter.id
                  ? 'text-indigo-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeFilter === filter.id && (
                <motion.span
                  layoutId="filterIndicator"
                  className="absolute inset-0 bg-white dark:bg-slate-600 rounded-md shadow-sm z-0"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            // Empty state
            <EmptyState />
          ) : (
            // Projects
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
