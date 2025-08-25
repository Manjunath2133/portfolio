// import React from 'react';

// const certificates = [
//   {
//     title: 'Data Base Management System - NPTEL',
//     image: '/certificates/dbms.jpg',
//     file: '/certificates/DBMS.pdf',
//   },
//   {
//     title: 'Full Stack Web Development- Udemy',
//     image: '/certificates/fullstack.jpg',
//     file: '/certificates/Full stack.pdf',
//   },
//   // Add more as needed
// ];

// const Certificates = () => {
//   return (
//     <section id="certificates" className="py-20 px-6 bg-gray-100 text-center">
//       <h2 className="text-4xl font-bold mb-10">Certificates</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {certificates.map((cert, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
//           >
//             <img
//               src={cert.image}
//               alt={cert.title}
//               className="w-full h-40 object-contain mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//             <a
//               href={cert.file}
//               download
//               className="text-teal-600 font-medium underline"
//             >
//               Download Certificate
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificates;


import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

// --- Certificate Data ---
// NOTE: Replace the placeholder images and files with your actual paths.
const certificates = [
  {
    title: 'Data Base Management System - NPTEL',
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=DBMS+Cert',
    file: '/certificates/DBMS.pdf',
  },
  {
    title: 'Full Stack Web Development - Udemy',
    image: 'https://placehold.co/600x400/1a202c/76e8d8?text=Full+Stack+Cert',
    file: '/certificates/Full stack.pdf',
  },
  // {
  //   title: 'Advanced React Concepts - Coursera',
  //   image: 'https://placehold.co/600x400/1a202c/76e8d8?text=React+Cert',
  //   file: '/certificates/React.pdf',
  // },
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
      staggerChildren: 0.2, // Animate children one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the section is in view
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download size={18} />
                    View & Download
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-100">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
