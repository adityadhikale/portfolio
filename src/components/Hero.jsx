import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import profilePicture from '../assets/images/profile/profile-picture.png';

const roles = ['Full Stack Developer', 'AI Engineer', 'Supply Chain Tech'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Profile image */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-accent-500/30 ring-offset-4 ring-offset-surface-50 dark:ring-offset-surface-950">
              {!imgError ? (
                <img
                  src={profilePicture}
                  alt="Aditya Dhikale"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full accent-gradient flex items-center justify-center text-white text-3xl font-display font-bold">
                  AD
                </div>
              )}
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-4 border-surface-50 dark:border-surface-950" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base font-medium text-accent-500 dark:text-accent-400 mb-4 tracking-wide uppercase"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4"
        >
          Aditya{' '}
          <span className="gradient-text">Dhikale</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="h-10 md:h-12 mb-6 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mb-10"
        >
          Bridging Technology & Business — building scalable web apps, AI integrations,
          and data-driven solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            <button className="px-8 py-3 text-sm font-semibold text-white accent-gradient rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
              View Work
            </button>
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 text-sm font-semibold rounded-xl glass hover:bg-accent-500/10 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-6"
        >
          {[
            { href: 'https://github.com/adityadhikale', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
            { href: 'https://linkedin.com/in/adityadhikale', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 transition-colors"
              aria-label={s.label}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <Link to="about" smooth={true} offset={-70} duration={500} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDownIcon className="w-5 h-5 text-slate-400" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
