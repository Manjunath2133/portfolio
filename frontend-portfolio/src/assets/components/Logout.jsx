// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const res = await fetch('https://backend-portfolio-2v04.onrender.com/logout', {
//         method: 'POST',
//         credentials: 'include',
//       });

//       const data = await res.json();
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//       alert('Logout failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center my-4">
//       <button 
//         onClick={handleLogout} 
//         className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://portfolio-ekt6.onrender.com/logout', {
        method: 'POST',
        credentials: 'include', // Important for clearing the cookie
      });

      if (res.ok) {
        // On successful logout, navigate to the login page
        navigate('/login');
      } else {
        const data = await res.json();
        // In a real app, you might show a toast notification here
        console.error('Logout failed:', data.message);
        alert('Logout failed'); // Fallback for user feedback
      }
    } catch (err) {
      console.error('Logout error:', err);
      alert('Logout failed'); // Fallback for user feedback
    } finally {
      setIsLoading(false);
    }
  };

  // This container is for demonstration. You can place the button wherever you need it.
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <motion.button
        onClick={handleLogout}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full max-w-xs font-semibold text-white py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Logging Out...</span>
          </>
        ) : (
          <>
            <LogOut size={18} />
            <span>Logout</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default Logout;
