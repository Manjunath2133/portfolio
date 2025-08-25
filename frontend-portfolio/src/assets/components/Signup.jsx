// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('https://backend-portfolio-2v04.onrender.com/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         navigate('/login');
//       } else {
//         alert(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Signup error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
//           Sign Up
//         </button>

//         <p className="text-center mt-4">
//           Already have an account?{' '}
//           <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
//             Log In
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  // A small state addition for better UX during form submission
  const [isLoading, setIsLoading] = useState(false);

  // The core logic remains unchanged
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner on button
    try {
      const res = await fetch('https://backend-portfolio-2v04.onrender.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Signup error');
    } finally {
      setIsLoading(false); // Hide spinner once done
    }
  };

  // Animation variants for the form container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeInOut",
        staggerChildren: 0.1 // Stagger the animation of children
      } 
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      
      <motion.form
        onSubmit={handleSignup}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 mb-6"
          variants={itemVariants}
        >
          Create Your Account
        </motion.h2>

        {/* Name Input */}
        <motion.div className="relative" variants={itemVariants}>
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div className="relative" variants={itemVariants}>
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none"
          />
        </motion.div>
        
        {/* Password Input */}
        <motion.div className="relative" variants={itemVariants}>
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full font-semibold text-white py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          variants={itemVariants}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            'Sign Up'
          )}
        </motion.button>

        <motion.p className="text-center text-sm text-gray-400" variants={itemVariants}>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            Log In
          </button>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default Signup;