import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// --- Experience Data ---
const experienceData = [
  {
    title: 'Exhibitor Sector Committee Member',
    company: 'Karnataka Film Chamber of Commerce',
    date: '2024 - Present',
    responsibilities: [
      'Represent exhibitor sector interests and collaborate with senior members on policy and operational decisions.',
      'Contribute to the formulation and review of industry policies affecting film exhibitors, including ticketing and content distribution.',
      'Act as a liaison between theatre owners and distributors to facilitate smooth operational workflows.',
      'Analyze industry trends to address challenges and strategize for sector growth in regular committee meetings.',
    ],
  },
  // You can add more job experiences here in the future
  // {
  //   title: 'Another Role',
  //   company: 'Another Company',
  //   date: '2022 - 2024',
  //   responsibilities: [
  //     'Responsibility A.',
  //     'Responsibility B.',
  //   ],
  // }
];

// --- Animation Variants (reused from your Certificate component) ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3, // Animate children one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
          Work Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* This div creates the vertical timeline bar */}
          <div className="absolute left-4 sm:left-6 top-6 h-full w-0.5 bg-gray-700"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12 sm:pl-16"
                variants={cardVariants}
                transition={{ duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 top-5 -ml-1.5 h-3 w-3 rounded-full bg-teal-400 border-2 border-gray-900"></div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                    <span className="text-sm font-medium text-teal-300 mt-1 sm:mt-0 bg-gray-700/50 px-3 py-1 rounded-full">{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <Briefcase size={16} />
                    <p className="text-md font-semibold">{exp.company}</p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.responsibilities.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;