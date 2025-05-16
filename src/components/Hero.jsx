import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { 
  ArrowDownIcon, 
  EnvelopeIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from './shared/SocialIcons';
import ProfileImage from './shared/ProfileImage';
import ParticlesBackground from './shared/ParticlesBackground';
import ResumeButton from './shared/ResumeButton';
import profilePicture from '../assets/images/profile/profile-picture.png';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up a mutation observer to detect class changes on html element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900/80 dark:to-slate-800/80 pointer-events-none z-0" />
      
      {/* Particles Background */}
      <ParticlesBackground isDarkMode={isDarkMode} className="z-0 opacity-50" />
      
      {/* Decorative circles - visible only in dark mode */}
      <div className="hidden dark:block absolute top-20 right-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="hidden dark:block absolute bottom-20 left-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Content container */}
      <motion.div 
        className="container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text content */}
        <motion.div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.h2 
            className="text-sm lg:text-base font-medium text-indigo-600 dark:text-indigo-400 mb-3"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Aditya Dhikale
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 h-[2em]"
            variants={itemVariants}
          >
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer',
                  'UI/UX Enthusiast',
                  'Problem Solver',
                  'Creative Coder'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-text',
                cursorClassName: 'typewriter-cursor text-indigo-500 dark:text-indigo-400'
              }}
            />
          </motion.div>
          
          <motion.p
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8"
            variants={itemVariants}
          >
            I build exceptional digital experiences with a focus on performance, accessibility, and user-centered design.
          </motion.p>
          
          {/* Social links */}
          <motion.div 
            className="flex space-x-8 justify-center lg:justify-start mb-10"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/adityadhikale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-dhikale-674643288" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/adityadhikale03" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 inline-flex items-center"
              >
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                View My Work
              </motion.button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 dark:bg-slate-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 inline-flex items-center"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
            </Link>
            
            {/* Resume Button */}
            <ResumeButton />
          </motion.div>
        </motion.div>
        
        {/* Profile image */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          variants={itemVariants}
        >
          <ProfileImage 
            src={profilePicture}
            size="large"
            alt="Aditya Dhikale"
            animate={true}
          />
        </motion.div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer flex flex-col items-center"
        >
          <span className="text-sm text-slate-600 dark:text-slate-400 mb-2">Scroll Down</span>
          <ArrowDownIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

