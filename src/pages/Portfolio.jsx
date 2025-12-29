import React from 'react'
import { motion } from "framer-motion";
import MyProjects from '../components/MyProjects';
import profileImg from '../assets/images/image1.jpg';
import MySkills from '../components/MySkills';

const Portfolio = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-[#050505] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] text-white flex items-center justify-center overflow-hidden">

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl w-full px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left Side: Text */}
          <div className="flex-1 space-y-6 overflow-hidden">

            {/* I'm PHYO */}
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]"
            >
              I'm <span className="text-white">PHYO</span>,
            </motion.h1>

            {/* A Fullstack Developer */}
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="text-2xl md:text-4xl font-semibold text-gray-400"
            >
              A Fullstack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light"
            >
              I am a passionate Fullstack Developer dedicated to building functional,
              scalable, and user-centric web applications. I bring technical expertise
              and creative problem-solving to every project.
            </motion.p>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="relative group"
          >
            <div className="w-[400px] h-[400px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border border-white/10 relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover grayscale brightness-90 
                group-hover:grayscale-0 group-hover:brightness-100 
                transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </section>
      <MyProjects />
      <MySkills />

    </div>


  );

};

export default Portfolio