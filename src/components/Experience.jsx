import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    role: 'Business Development Associate (Intern)',
    company: 'EmberCore Ventures Pvt Ltd',
    period: 'Feb 2025 – May 2025',
    points: [
      'Cross-functional collaboration across sales, operations, and tech teams',
      'Achieved 17% increase in conversion rates through data-driven strategies',
      'Reduced delivery delays by 22% via process optimization and analytics',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="absolute inset-0 dot-pattern" />
      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 variants={fadeUp} className="section-title">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Professional experience bridging business development with technology.
          </motion.p>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative pl-8 border-l-2 border-accent-500/30"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full accent-gradient flex items-center justify-center">
                  <BriefcaseIcon className="w-3 h-3 text-white" />
                </div>

                <div className="glass-card p-6 rounded-2xl ml-4">
                  <span className="text-sm font-medium text-accent-500 dark:text-accent-400">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
