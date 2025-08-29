import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer'; 
import ScrollToTop from './assets/components/ScrollToTop';
import Certificates from "./assets/components/Certificates";
import Hackathon from "./assets/components/Hackathons";
import Logout from './assets/components/Logout';
import Experience from './assets/components/Experience';
import ProtectedRoute from './assets/components/ProtectedRoute';


function App() {
  return (
    <Router>
      
      
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Homepage */}
        <Route path="/Home" element={
          <ProtectedRoute>
          <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience/>
            <Certificates />
            <Projects />
            <Hackathon />
            <Contact />
            <ScrollToTop />
            <Logout />
            <Footer />
          </>
          </ProtectedRoute>
        } />

        
      </Routes>
    </Router>
  );
}

export default App;
