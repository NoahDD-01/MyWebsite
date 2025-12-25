import React from 'react';
import { FaFigma, FaReact, FaJs, FaPython, FaPhp, FaLaravel, FaHtml5, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiAdobephotoshop, SiOpenai, SiGooglecloud } from 'react-icons/si';

const MySkills = () => {
    const skills = [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
        { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
        { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
        { name: "OpenAI", icon: <SiOpenai className="text-[#412991]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> },
    ];

    return (
        <section className="max-w-full mx-auto px-10 md:px-20 bg-[#050505] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]  py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center uppercase tracking-[0.2em]">
                My Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-8 bg-[#111111] rounded-[20px] 
                       border border-white/5 transition-all duration-300
                       hover:bg-[#161616] hover:border-blue-500/30 group shadow-lg"
                    >

                        <div className="text-5xl md:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                            {skill.icon}
                        </div>

                        {/* Skill Name */}
                        <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkills;