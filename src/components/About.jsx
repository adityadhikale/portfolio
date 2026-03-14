import { motion } from 'framer-motion';
import { MapPinIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import profilePicture from '../assets/images/profile/profile-picture.png';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Section header */}
          <motion.h2 variants={fadeUp} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Data-driven professional bridging complex business requirements with scalable technology solutions.
          </motion.p>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Left — image + quick facts */}
            <motion.div variants={fadeUp} className="md:col-span-2 flex flex-col items-center md:items-start gap-6">
              <div className="glass-card p-2 rounded-2xl">
                <div className="w-full aspect-square max-w-[280px] rounded-xl overflow-hidden">
                  {!imgError ? (
                    <img
                      src={profilePicture}
                      alt="Aditya Dhikale"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full accent-gradient flex items-center justify-center text-white text-5xl font-display font-bold">
                      AD
                    </div>
                  )}
                </div>
              </div>

              {/* Quick facts */}
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <MapPinIcon className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <AcademicCapIcon className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>MGB @ SP Jain School of Global Management</span>
                </div>
              </div>
            </motion.div>

            {/* Right — bio */}
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-6">
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a <strong className="text-slate-900 dark:text-white">Computer Science graduate</strong> with
                  a B.Tech (Honors in Data Science) from Fr. Conceicao Rodrigues College of Engineering, currently
                  pursuing a <strong className="text-slate-900 dark:text-white">Master of Global Business</strong> in
                  Logistics & Supply Chain Management at SP Jain School of Global Management (Mumbai–Dubai).
                </p>
                <p>
                  I specialize in full stack web development using React, Next.js, Node.js, and Python, with hands-on
                  experience in AI/LLM integration, data pipeline architecture, and GenAI automation. My unique
                  cross-disciplinary background lets me bridge technology and business — from building scalable
                  applications to optimizing supply chain operations with data-driven insights.
                </p>
                <p>
                  I'm an Agile-minded collaborator with global exposure across Mumbai and Dubai, experienced in
                  cross-functional teams and proven at translating complex requirements into production-ready solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
