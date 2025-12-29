import React from 'react';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-40">

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Design Your <span className="text-[#FF5F5F]">Future</span> With Phyo
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10"
        >
          Creative agency specializing in UI/UX design and professional web development. 
          We build experiences that matter.
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="https://t.me/Pz_1000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5F5F] hover:bg-[#ff4545] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#FF5F5F]/20"
          >
            Start a Project
          </Link>

          <Link
            to="/portfolio"
            className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            My Portfolio
          </Link>
        </motion.div>

      </section>

      {/* Services Section with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>

    </div>
  );
};

export default Home;
