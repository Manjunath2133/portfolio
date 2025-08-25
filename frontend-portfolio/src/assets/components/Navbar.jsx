// import React from 'react';


// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">K Manjunath</h1>
//         <ul className="flex space-x-4">
//           <li><a href="#home" className="hover:text-teal-400">Home</a></li>
//           <li><a href="#about" className="hover:text-teal-400">About</a></li>
//           <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
//           <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Effect to handle scroll-based active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  // Animation for the mobile menu container
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const NavLink = ({ href, title, id }) => (
    <li>
      <a
        href={href}
        onClick={() => setIsOpen(false)}
        className={`relative font-medium transition-colors duration-300 ${
          activeLink === id ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'
        }`}
      >
        {title}
        {activeLink === id && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
            layoutId="underline" // Magic animation for the underline
          />
        )}
      </a>
    </li>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
            K Manjunath
          </h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink key={link.id} href={`#${link.id}`} title={link.title} id={link.id} />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-gray-900 h-screen md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`font-semibold transition-colors duration-300 ${
                      activeLink === link.id ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
