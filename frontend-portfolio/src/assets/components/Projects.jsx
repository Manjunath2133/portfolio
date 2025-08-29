// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Portfolio Website',
//       description: 'A personal website to showcase my work and skills.',
//       link: '#',
//     },
//     {
//       title: 'Weather App',
//       description: 'Built with React and OpenWeatherMap API to display real-time weather.',
//       link: '#',
//     },
//     {
//       title: 'Task Manager',
//       description: 'A full-stack MERN app to manage daily tasks and priorities.',
//       link: '#',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-100 text-gray-800 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-teal-500 hover:underline"
//               >
//                 View Project →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- Project Data ---
// Expanded data for a richer display. Add your project details here.
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React and Tailwind CSS to showcase my work, skills, and experiences.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=Portfolio',
    link: '#', // Replace with your live link
  },
  {
    title: 'Cold Reach',
    description: 'ColdReach is a full-stack web application designed to streamline the job application process by sending personalized cold emails with resume attachments and AI-generated cover letters. It integrates Google OAuth for secure login and leverages Groq’s LLaMA3 model to generate tailored cover letters based on the company name.',
    tags: ['React', 'API', 'CSS'],
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=Cold+Reach',
    link: 'https://github.com/Manjunath2133/ColdReach', // Replace with your live link
  },
  {
    title: 'Weather App',
    description: 'A clean, responsive weather application that provides real-time weather data using the OpenWeatherMap API.',
    tags: ['React', 'API', 'CSS'],
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=Weather+App',
    link: '#', // Replace with your live link
  },
  {
    title: 'Task Manager',
    description: 'A full-stack MERN application to help users manage daily tasks with features like create, read, update, and delete.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=Task+Manager',
    link: '#', // Replace with your live link
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 25px -5px rgba(0, 128, 128, 0.1), 0 10px 10px -5px rgba(0, 128, 128, 0.08)' 
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-400 font-semibold hover:text-teal-300 transition-colors duration-300 mt-auto"
                >
                  View Project <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

