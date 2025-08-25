// import React from 'react';

// const Skills = () => {
//   const skills = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Tailwind CSS',
//     'Node.js',
//     'Express.js',
//     'Postgres',
//     'Git & GitHub',
//     'Java & DSA',
//     'C Programming',
//     'MongoDB',
//     'WordPress',
//     'Machine Learning'
//   ];

//   return (
//     <section id="skills" className="py-20 bg-white text-gray-800 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 hover:bg-teal-100 rounded-lg p-4 shadow-md font-medium transition"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { motion } from 'framer-motion';

// --- Skills Data (Categorized for better organization) ---
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Languages & Tools',
    skills: ['Java & DSA', 'C Programming', 'Git & GitHub', 'WordPress', 'Machine Learning'],
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
          My Technical Skills
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-300 mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-5 py-3 font-medium"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05, 
                      boxShadow: '0 0 15px rgba(20, 211, 255, 0.3)',
                      color: '#2dd4bf' // teal-400
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
