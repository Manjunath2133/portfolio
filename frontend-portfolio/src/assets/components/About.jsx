// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-100 text-gray-800 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
//         <p className="text-lg leading-relaxed">
//           I’m <span className="font-semibold">K Manjunath</span>, a developer passionate about building modern, user-friendly web apps.
//           I love combining design with code to craft clean and efficient solutions. I'm always learning, experimenting, and pushing the limits of what I can build.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Layers } from 'lucide-react';

// Animation for the component to fade in as it's scrolled into view
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is visible
      >
        {/* Left Column: Animated SVG Graphic */}
        <motion.div className="relative h-80 flex items-center justify-center" variants={itemVariants}>
          {/* Floating Icons */}
          <motion.div 
            className="absolute text-teal-500/50"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Code size={80} />
          </motion.div>
           <motion.div 
            className="absolute text-cyan-500/50"
            animate={{ y: [0, 10, 0], x: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Layers size={60} />
          </motion.div>
           <motion.div 
            className="absolute text-indigo-500/50"
            animate={{ y: [0, 5, 0], x: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <PenTool size={70} />
          </motion.div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed space-y-4">
            <span>
              I’m <span className="font-semibold text-white">K Manjunath</span>, a developer passionate about building modern, user-friendly web applications that leave a lasting impression.
            </span>
            <span>
              My expertise lies in combining <span className="text-teal-400 font-medium">elegant design</span> with <span className="text-teal-400 font-medium">clean, efficient code</span> to craft seamless digital solutions. I'm a lifelong learner, constantly exploring new technologies and pushing the boundaries of what I can create.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
