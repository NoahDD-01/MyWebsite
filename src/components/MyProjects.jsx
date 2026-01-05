import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectBoxList } from '../services/ProjectBoxService';

const MyProjects = () => {
    const { i18n } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjectBoxList()
            .then((res) => {
                // Backend က data လာတဲ့အခါ project_num အတိုင်း အစီအစဉ်စီပါမယ်
                const sortedData = res.data.sort((a, b) => a.project_num - b.project_num);
                setProjects(sortedData);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Project fetch error:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-[#050505] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] py-20">
            <div className="max-w-7xl mx-auto px-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center uppercase tracking-[0.2em]">
                    {i18n.language === 'mm' ? "ကျွန်ုပ်၏ ပရောဂျက်များ" : "My Projects"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="text-white text-center col-span-full">Loading...</div>
                    ) : (
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-[#111111] p-8 rounded-2xl border border-white/5 transition-all duration-300 
                                hover:-translate-y-2 hover:bg-[#161616]
                                shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                            >
                                {/* Project Number */}
                                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-white font-bold">{project.project_num}</span>
                                </div>

                                {/* Dynamic Title */}
                                <h3 className="text-xl font-medium text-white mb-2">
                                    {i18n.language === 'mm' ? project.project_title_mm : project.project_title_en}
                                </h3>

                                {/* Dynamic Description */}
                                <p className="text-gray-500 text-sm mb-6">
                                    {i18n.language === 'mm' ? project.project_des_mm : project.project_des_en}
                                </p>

                                <a
                                    href={project.project_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-gray-300 hover:text-white underline underline-offset-4 decoration-gray-600"
                                >
                                    View Project
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;