import { useState } from 'react';
import { motion } from 'framer-motion';
// Import all icons from simple-icons
import * as SimpleIcons from 'simple-icons';
// Helper function to safely get icon path
const getIconPath = (iconName) => {
  try {
    // Convert to string and trim
    const iconNameStr = String(iconName || '').trim();
    
    // Try with 'si' prefix if not already present
    const siName = iconNameStr.startsWith('si') ? iconNameStr : `si${iconNameStr}`;
    
    // Debug output for missing icons
    if (!SimpleIcons[siName]) {
      console.warn(`Icon not found: ${siName}. Available keys:`, 
        Object.keys(SimpleIcons)
          .filter(key => key.toLowerCase().includes(iconNameStr.toLowerCase()))
          .slice(0, 5)
      );
    }
    
    // Check if icon exists and has path
    if (SimpleIcons[siName]?.path) {
      return SimpleIcons[siName].path;
    }
    
    // Special cases for certain icon names
    const alternateNames = {
      siGooglecolab: 'siColab',
      siMicrosoftoffice: 'siMicrosoftoffice365',
    };
    
    if (alternateNames[siName] && SimpleIcons[alternateNames[siName]]?.path) {
      console.log(`Using alternate icon: ${alternateNames[siName]} for ${siName}`);
      return SimpleIcons[alternateNames[siName]].path;
    }
    
    // If not found, use siCode as fallback
    return SimpleIcons.siCode?.path || 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z';
  } catch (error) {
    console.error(`Error loading icon: ${iconName}`, error);
    return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z';
  }
};

// Tech stack data organized by category
const techStackData = {
  frontend: [
    { name: 'React', icon: 'siReact', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', icon: 'siJavascript', level: 90, color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'siTypescript', level: 80, color: '#3178C6' },
    { name: 'Next.js', icon: 'siNextdotjs', level: 75, color: '#000000' }, // Verified
    { name: 'HTML5', icon: 'siHtml5', level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: 'siCss3', level: 85, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: 'siTailwindcss', level: 85, color: '#06B6D4' },
    { name: 'Bootstrap', icon: 'siBootstrap', level: 85, color: '#7952B3' },
    { name: 'SASS', icon: 'siSass', level: 80, color: '#CC6699' },
    { name: 'Redux', icon: 'siRedux', level: 50, color: '#764ABC' },
  ],
  backend: [
    { name: 'Node.js', icon: 'siNodedotjs', level: 85, color: '#339933' }, // Verified
    { name: 'Express', icon: 'siExpress', level: 80, color: '#000000' }, // Express has minimal logo
    { name: 'Python', icon: 'siPython', level: 70, color: '#3776AB' },
    { name: 'C', icon: 'siC', level: 75, color: '#A8B9CC' },
    { name: 'C++', icon: 'siCplusplus', level: 50, color: '#00599C' },
    { name: 'MongoDB', icon: 'siMongodb', level: 50, color: '#47A248' },
    { name: 'PostgreSQL', icon: 'siPostgresql', level: 40, color: '#4169E1' },
    { name: 'MySQL', icon: 'siMysql', level: 50, color: '#4479A1' },
    { name: 'Firebase', icon: 'siFirebase', level: 75, color: '#FFCA28' },
    { name: 'Supabase', icon: 'siSupabase', level: 75, color: '#3ECF8E' },
  ],
  tools: [
    { 
      name: 'Git', 
      icon: 'siGit', 
      level: 85, 
      color: '#F05032' 
    },
    { 
      name: 'GitHub', 
      icon: 'siGithub', 
      level: 85, 
      color: '#181717' 
    },
    { 
      name: 'VS Code', 
      icon: 'siVisualstudiocode', // Verified name 
      level: 90, 
      color: '#007ACC' 
    },
    { 
      name: 'Docker', 
      icon: 'siDocker', 
      level: 30, 
      color: '#2496ED' 
    },
    { 
      name: 'AWS', 
      icon: 'siAmazonaws', // Corrected from siAws to siAmazonaws
      level: 65, 
      color: '#FF9900' 
    },
    { 
      name: 'Google Cloud', 
      icon: 'siGooglecloud', 
      level: 50, 
      color: '#4285F4' 
    },
    { 
      name: 'Jira', 
      icon: 'siJira', 
      level: 55, 
      color: '#0052CC' 
    },
    { 
      name: 'Google Colab', 
      icon: 'siColab', 
      level: 70, 
      color: '#F9AB00' 
    },
    { 
      name: 'Microsoft Office', 
      icon: 'siMicrosoftoffice365', 
      level: 80, 
      color: '#D83B01' 
    },
    { 
      name: 'Postman', 
      icon: 'siPostman', 
      level: 80, 
      color: '#FF6C37' 
    },
  ],
};

// Category labels for display
const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & DevOps' },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState('frontend');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Handle category change

  return (
    <section id="tech-stack" className="container-section bg-slate-50 dark:bg-slate-900">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h2>
      
      {/* Category Tabs */}
      <div className="flex justify-center mb-8 px-4">
        <div className="inline-flex flex-col sm:flex-row bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg w-full sm:w-auto gap-1 sm:gap-0">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors mb-1 sm:mb-0 ${
                activeCategory === category.id
                  ? 'text-indigo-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="techIndicator"
                  className="absolute inset-0 bg-white dark:bg-slate-700 rounded-md shadow-sm z-0"
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Tech Grid */}
      <motion.div
        key={activeCategory} // Add key to force rerender on category change
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Change to animate instead of whileInView
        transition={{ duration: 0.5, layout: { duration: 0.3 } }}
      >
        {techStackData[activeCategory]?.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center relative"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div 
              className="w-full flex flex-col p-4 sm:p-6 
                        bg-white dark:bg-slate-800 rounded-lg shadow-md 
                        border border-slate-200 dark:border-slate-700 
                        transition-all duration-200 ease-out
                        hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600
                        relative group
                        tech-card"
              style={{
                height: '260px',
                background: hoveredTech === tech.name 
                  ? `linear-gradient(135deg, ${tech.color}08, transparent)`
                  : '',
                transform: hoveredTech === tech.name ? 'scale(1.005)' : 'scale(1)',
                transformOrigin: 'center',
                willChange: 'transform',
                zIndex: hoveredTech === tech.name ? '2' : '1'
              }}
            >
              
              {/* Icon */}
              <div className="flex-1 flex items-center justify-center py-4">
                <svg 
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-200 
                            transform group-hover:scale-105"
                  style={{ 
                    fill: hoveredTech === tech.name ? tech.color : 'currentColor',
                    color: hoveredTech === tech.name ? tech.color : 'currentColor',
                    opacity: hoveredTech === tech.name ? 1 : 0.85
                  }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={getIconPath(tech.icon)} />
                  {/* Add an overlay for debugging if needed */}
                  {process.env.NODE_ENV === 'development' && false && 
                    <text 
                      x="12" 
                      y="12" 
                      fontSize="2px" 
                      textAnchor="middle" 
                      dominantBaseline="middle" 
                      fill="#ff0000"
                    >
                      {tech.icon}
                    </text>
                  }
                </svg>
              </div>
              
              {/* Tech Name and Skill Info */}
              <div className="h-20 flex flex-col justify-end w-full text-center">
                <p className="font-medium text-slate-900 dark:text-white mb-2 line-clamp-1">{tech.name}</p>
                
                {/* Skill Level Bar */}
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                
                {/* Skill Level Text - only shown on hover */}
                <div className="h-5 mt-1"> {/* Slightly reduced height */}
                  {hoveredTech === tech.name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-xs text-slate-600 dark:text-slate-400"
                    >
                      {tech.level}% proficiency
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;

