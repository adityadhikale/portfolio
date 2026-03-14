import { motion } from 'framer-motion';
import { UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const leadership = [
  {
    role: 'Chairperson',
    org: 'IEEE CRCE (2024–2025)',
    desc: 'Led a team of 15+ members. Managed PRAKALP 2024, a national-level technical competition.',
  },
  {
    role: 'Member, Academic Committee',
    org: 'SP Jain School of Global Management (Jun 2025 – Oct 2026)',
    desc: 'Contributing to academic program development and student engagement initiatives.',
  },
];

const certifications = [
  'AWS Foundations & Developing',
  'Data Analytics with GenAI',
  'Deloitte Data Analytics (Forage)',
  'Machine Learning (Andrew Ng)',
  'SAP Technical Consulting (Forage)',
  'SIEMENS Project Manager',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative">
      <div className="absolute inset-0 dot-pattern" />
      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 variants={fadeUp} className="section-title">
            Leadership & <span className="gradient-text">Certifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leadership */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-6">
                <UserGroupIcon className="w-5 h-5 text-accent-500" />
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  Leadership
                </h3>
              </div>
              <div className="space-y-4">
                {leadership.map((item, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {item.role}
                    </h4>
                    <p className="text-xs text-accent-500 dark:text-accent-400 mb-2">
                      {item.org}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-6">
                <TrophyIcon className="w-5 h-5 text-accent-500" />
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="glass-card p-5 rounded-xl">
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full accent-gradient shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
