// import React from 'react';
// import { FaDownload } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-6">
//       <div className="text-center">

//         <div className="mb-8">
//           <img
//             src="/images/profile.jpg"
//             alt="Profile"
//             className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-teal-500 shadow-lg"
//           />
//         </div>

//         <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-teal-400">K Manjunath</span></h2>
//         <p className="text-lg md:text-xl mb-6">A passionate Developer crafting digital experiences.</p>
//         <div className="mt-6 flex justify-center">
//         <div className="flex flex-wrap gap-4">
//             <a
//                 href="/my-cv.pdf"
//                 download
//                 className="flex items-center justify-center gap-2 px-6 py-3 w-48 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//             >
//                 <FaDownload /> Download CV
//             </a>

//             <a
//                 href="#projects"
//                 className="flex items-center justify-center px-6 py-3 w-48 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
//             >
//                 View Projects
//             </a>
//             <a 
//                 href="#certificates">
//                 <button className="text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 w-48">
//                   View Certificates
//                 </button>
//             </a>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Award } from 'lucide-react';

// Animation variants for the main container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animates children one after another
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 text-white p-4">
      {/* Animated background - simple and subtle */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-700/50 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw', 
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 1.5,
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={itemVariants}>
          <img
            src="public/images/my-pic.jpeg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-teal-400 shadow-xl shadow-teal-500/20"
          />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">K Manjunath</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          A passionate Developer crafting modern and responsive digital experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="/my-cv.pdf"
            download
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download size={18} /> Download CV
          </a>

          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#certificates"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Certificates <Award size={18} className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
