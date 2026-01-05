import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import MyProjects from '../components/MyProjects';
import MySkills from '../components/MySkills';
import { getProfileList } from '../services/ProfileService';
import { BASE_URL } from '../constants/endpoint';

const Portfolio = () => {
  const { i18n } = useTranslation();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfileList()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProfile(res.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;

  const title = profile ? (i18n.language === 'mm' ? profile.profile_title_mm : profile.profile_title_en) : "PHYO";
  const description = profile ? (i18n.language === 'mm' ? profile.profile_des_mm : profile.profile_des_en) : "";

  return (
    <div>
      <section className="relative min-h-screen bg-[#050505] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] text-white flex items-center justify-center overflow-hidden">

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl w-full px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left Side: Text */}
          <div className="flex-1 space-y-6 overflow-hidden">

            {/* I'm Name (Title) */}
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]"
            >
              {i18n.language === 'mm' ? "မောင် " : "I'm "}
              <span className="text-[#FF5F5F]">PHYO</span>,
            </motion.h1>

            {/* A Fullstack Developer (Sub-title) */}
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-semibold text-gray-400"
            >
              {i18n.language === 'mm' ?  "I'm " : "I'm "}
              <span className="text-[#FF5F5F]">{title}</span>,
            </motion.h2>

            {/* Dynamic Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light"
            >
              {description}
            </motion.p>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="relative group"
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-white/10 relative shadow-2xl shadow-[#FF5F5F]/10">
              {profile?.image ? (
                <img
                  src={`${BASE_URL}${profile.image}`}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale brightness-90 
                  group-hover:grayscale-0 group-hover:brightness-100 
                  transition-all duration-700 ease-in-out"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">No Image</div>
              )}
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

export default Portfolio;