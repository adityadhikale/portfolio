import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    color: 'from-accent-500 to-blue-600',
    skills: [
      'Python', 'TypeScript', 'JavaScript (ES6+)', 'React.js', 'Next.js',
      'Node.js', 'Flask', 'FastAPI', 'HTML5', 'CSS3',
    ],
  },
  {
    title: 'LLM & AI',
    color: 'from-purple-500 to-pink-600',
    skills: [
      'Gemini API', 'OpenAI API', 'RAG', 'GenAI Automation',
      'Machine Learning', 'Data Analytics',
    ],
  },
  {
    title: 'Data & Dashboards',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      'SQL', 'PostgreSQL', 'Azure SQL', 'Power BI', 'Tableau',
      'BigQuery', 'MongoDB', 'Firebase',
    ],
  },
  {
    title: 'Engineering & Tools',
    color: 'from-orange-500 to-red-600',
    skills: [
      'OOP', 'Design Patterns', 'Git', 'Docker', 'CI/CD',
      'AWS', 'Azure', 'Agile/Scrum',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 dot-pattern" />
      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 variants={fadeUp} className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            The tools and technologies I use to bring ideas to life.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="glass-card p-6 rounded-2xl"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
