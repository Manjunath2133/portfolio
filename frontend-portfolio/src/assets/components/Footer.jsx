// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-6 text-center">
//       <p className="text-sm">
//         © {new Date().getFullYear()} K Manjunath. All rights reserved.
//       </p>
//       <div className="mt-2 space-x-4">
//         <a
//           href="https://github.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-teal-400"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://linkedin.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-teal-400"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="mailto:youremail@example.com"
//           className="hover:text-teal-400"
//         >
//           Email
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// --- Social Links Data ---
// IMPORTANT: Replace these with your actual profile URLs.
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Manjunath2133',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/kmanjunath2133/',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:kmanjunath2133@gmail.com',
  },
];

// --- Animation Variants ---
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8 px-4 sm:px-6 lg:px-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <link.icon size={24} />
              </motion.div>
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} K Manjunath. All Rights Reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Designed & Built with ❤️
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
