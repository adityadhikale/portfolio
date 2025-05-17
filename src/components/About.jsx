import { motion } from 'framer-motion';

// Skills data organized by category
const skills = {
  frontend: [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Next.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'RESTful APIs', level: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Webpack', level: 70 },
    { name: 'Jest', level: 65 },
  ],
};

// Education timeline data
const education = [
  {
    period: '2021 - 2025',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Fr. Conceicao Rodrigues College of Engineering, Mumbai',
    description: 'Graduated with Data Science Honors. Focused on web development, algorithms, and data structures.',
  },
  {
    period: '2019 - 2021',
    degree: 'Higher Secondary Education',
    institution: 'Creative Public School and Junior College, Pune',
    description: 'Completed with distinction in mathematics and science.',
  },
];

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
  };

  // Custom animation for skill bars
  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 8,
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="container-section bg-slate-50 dark:bg-slate-900">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Bio Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            My Journey
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-slate-700 dark:text-slate-300"
          >
            <p>
              Hello! I'm Aditya, a passionate full-stack developer with a keen eye for creating
              elegant, responsive, and user-friendly web applications. My journey in web development
              began during my college years, where I fell in love with the art of crafting digital
              experiences.
            </p>
            <p>
              With a strong foundation in computer science principles and modern web technologies,
              I strive to write clean, efficient, and maintainable code. I'm constantly learning
              and adapting to the ever-evolving landscape of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through tech blogs and community forums.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-indigo-500 dark:border-indigo-400"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            My Skills
          </motion.h3>

          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Frontend
            </h4>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full"
                      custom={skill.level}
                      variants={skillBarVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Backend
            </h4>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full"
                      custom={skill.level}
                      variants={skillBarVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: '#EEF2FF' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

