// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('https://backend-portfolio-2v04.onrender.com/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       console.log("Login response:", data);
//       if (res.ok) {
//         navigate('/home');
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Login error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
//           Log In
//         </button>
//         <div className="mt-4 text-center">
//           <p>
//             If you're a new user, <a href="/signup" className="text-teal-500 hover:text-teal-700">Sign up here</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  // State for loading indicator for better UX
  const [isLoading, setIsLoading] = useState(false);

  // Core logic is unchanged
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner
    try {
      const res = await fetch('https://portfolio-ekt6.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for sending cookies
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (res.ok) {
        // You might want to store user data in context or state management here
        navigate('/home'); 
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Login error');
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };

  // Re-using the same animation variants for consistency
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeInOut",
        staggerChildren: 0.1
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      
      <motion.form
        onSubmit={handleLogin}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 mb-6"
          variants={itemVariants}
        >
          Welcome Back
        </motion.h2>

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
            'Log In'
          )}
        </motion.button>

        <motion.p className="text-center text-sm text-gray-400" variants={itemVariants}>
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            Sign Up
          </button>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default Login;