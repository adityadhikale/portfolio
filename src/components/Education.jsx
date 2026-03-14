import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    degree: 'Master of Global Business',
    field: 'Logistics & Supply Chain Management',
    school: 'SP Jain School of Global Management',
    period: 'Jun 2025 – Oct 2026',
    location: 'Mumbai – Dubai',
    details: 'Dual-campus global program focusing on supply chain strategy, inventory optimization, and operational analytics.',
  },
  {
    degree: 'B.Tech in Computer Science',
    field: 'Honors in Data Science',
    school: 'Fr. Conceicao Rodrigues College of Engineering',
    period: 'Jun 2021 – May 2025',
    location: 'Mumbai',
    details: 'GPA: 8.54/10. Focused on full stack development, data science, machine learning, and algorithms.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 variants={fadeUp} className="section-title">
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            A blend of computer science foundations and global business acumen.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="glass-card p-6 rounded-2xl flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg accent-gradient shrink-0">
                    <AcademicCapIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-accent-500 dark:text-accent-400 font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {edu.school}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {edu.period} &middot; {edu.location}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
