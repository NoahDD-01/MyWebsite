import React from 'react';
import { useTranslation } from 'react-i18next';
import ourportfolio1 from '../assets/images/ourporfiolio.avif';
import ourportfolio2 from '../assets/images/photo1.avif';
import ourportfolio3 from '../assets/images/photoavif.avif';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern online shopping experience with seamless payment integration.",
    image: ourportfolio1, 
    tags: ["React", "Vite", "Tailwind"]
  },
  {
    id: 2,
    title: "Service Booking App",
    category: "Mobile App",
    description: "Cross-platform mobile application for local service providers.",
    image: ourportfolio2,
    tags: ["Flutter", "Firebase"]
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    category: "Web Development",
    description: "Internal software for data visualization and business analytics.",
    image: ourportfolio3,
    tags: ["Next.js", "Chart.js"]
  }
];

const OurWork = () => {
  const { t } = useTranslation(); 
  return (
    <div className="min-h-screen bg-[#0A0F2C] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF5F5F]">Portfolio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
           {t("OUR_WORK")}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF5F5F]/50 transition-all group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FF5F5F] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-white/10 text-gray-300 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
                
                <button className="text-[#FF5F5F] font-semibold text-sm hover:underline flex items-center gap-2">
                  View Details <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;