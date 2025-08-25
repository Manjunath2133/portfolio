// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('https://backend-portfolio-2v04.onrender.com/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });

//     const data = await res.json();
//     alert(data.message);

//     setFormData({ name: '', email: '', message: '' }); // Reset form
//   };

//   return (
//     <section id="contact" className="py-20 bg-white text-gray-800 px-6">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
//         <p className="mb-6 text-lg">
//           Feel free to reach out for collaborations, project ideas, or just to say hi! 👋
//         </p>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
//             required
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';

// --- Animation Variants ---
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

const messageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const res = await fetch('https://portfolio-ekt6.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error(data.message || 'An error occurred.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setSubmissionMessage(err.message);
    } finally {
      setIsLoading(false);
      // Make the message disappear after 5 seconds
      setTimeout(() => setSubmissionStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Info */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Have a project in mind, a question, or just want to connect? Feel free to send me a message! I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>

        {/* Right Column: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl w-full space-y-6"
          variants={itemVariants}
        >
          {/* Submission Status Message */}
          <AnimatePresence>
            {submissionStatus && (
              <motion.div
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
                  submissionStatus === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                }`}
              >
                {submissionStatus === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                <span>{submissionMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none" />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
            <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 transition-colors duration-300 p-2 pl-10 focus:outline-none resize-none"></textarea>
          </div>
          <button type="submit" disabled={isLoading} className="w-full font-semibold text-white py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
