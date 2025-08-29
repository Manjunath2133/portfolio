// import React from 'react';

// const Hackathon = () => {
//   return (
//     <section id="hackathons" className="mt-16 bg-gray-800 text-white py-12 px-6">
//       <h2 className="text-3xl font-bold mb-8">Hackathon Experiences</h2>
//       <div className="flex flex-col gap-6">
//         <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md">
//           <div>
//             <h3 className="text-xl font-semibold">EcoEquify - IBM & BNMIT (2024)</h3>
//             <p className="text-sm text-gray-400">Brief description about the hackathon, your role, and what you accomplished.</p>
//           </div>
//           <a href="/certificates/BNMIT.pdf" download className="text-teal-500 hover:text-teal-600 font-semibold">
//             Download Certificate
//           </a>
//         </div>

//         <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md">
//           <div>
//             <h3 className="text-xl font-semibold">E-HUNT - Sri Krishna Institute (2023)</h3>
//             <p className="text-sm text-gray-400">Brief description about the hackathon, your role, and what you accomplished.</p>
//           </div>
//           <a href="/certificates/E-Hunt.jpg" download className="text-teal-500 hover:text-teal-600 font-semibold">
//             Download Certificate
//           </a>
//         </div>

//         {/* Add more hackathons as needed */}
//       </div>
//     </section>
//   );
// };

// export default Hackathon;


import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

// --- Hackathon Data ---
const hackathons = [
  {
    title: 'VTU Hack-2-Intern Challenge',
    year: '2025',
    description: 'Successfully cleared the technical writing assessment conducted by VTU, demonstrating strong analytical and documentation skills.',
    certificate: '#',
  },
  {
    title: 'EcoEquify - IBM & BNMIT',
    year: '2024',
    description: 'Developed a sustainability-focused web platform, contributing to the front-end UI and API integration. Placed in the top 5 teams.',
    certificate: '/certificates/BNMIT.pdf',
  },
  {
    title: 'E-HUNT - Sri Krishna Institute',
    year: '2023',
    description: 'Participated in a competitive coding and problem-solving event, honing algorithmic thinking and rapid development skills.',
    certificate: '/certificates/E-Hunt.jpg',
  },
  
  // Add more hackathons as needed
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
      staggerChildren: 0.3,
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Hackathon = () => {
  return (
    <section id="hackathons" className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
          Hackathon Experiences
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical line in the middle */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 hidden md:block"></div>

          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
              variants={timelineItemVariants}
              transition={{ duration: 0.6 }}
            >
              {/* Spacer for desktop view */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Dot */}
              <div className="z-10 absolute left-1/2 -ml-3 hidden md:block">
                <div className="bg-teal-500 rounded-full h-6 w-6 border-4 border-gray-900"></div>
              </div>

              {/* Card Content */}
              <div className="w-full md:w-5/12">
                <motion.div 
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-6"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-100">{hackathon.title}</h3>
                    <span className="flex items-center text-sm font-medium text-teal-400 bg-teal-900/50 px-2 py-1 rounded-md">
                      <Calendar size={14} className="mr-1.5" />
                      {hackathon.year}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{hackathon.description}</p>
                  <a
                    href={hackathon.certificate}
                    download
                    className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors duration-300"
                  >
                    <Award size={18} />
                    View Certificate
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hackathon;
