import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading, false = not auth, true = auth

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('https://portfolio-ekt6.onrender.com/verify', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        setAuth(res.ok);
      } catch (err) {
        console.error(err);
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <div>Loading...</div>; // show loader while checking
  if (!auth) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
