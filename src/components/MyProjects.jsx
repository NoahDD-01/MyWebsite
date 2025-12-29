import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    const projects = [
        { id: 1, title: "Project One", desc: "Web Development", to: "https://github.com/NoahDD-01" },
        { id: 2, title: "Project Two", desc: "UI/UX Design", to: "https://standing-desks-ltd-five.vercel.app/" },
        { id: 3, title: "Project Three", desc: "Mobile App", to: "https://github.com/NoahDD-01" },
        { id: 4, title: "Project Four", desc: "E-commerce Platform", to: "https://github.com/NoahDD-01" },
        { id: 5, title: "Project Five", desc: "Social Media App", to: "https://github.com/NoahDD-01" },
        { id: 6, title: "Project Six", desc: "Portfolio Website", to: "https://phyozawhein2000.pythonanywhere.com/" },
    ];

    return (
        <div>
            <section className="bg-[#050505] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] py-10">
                <div className="max-w-7xl mx-auto px-10">
                    {/* Title  */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center uppercase tracking-[0.2em]">
                        My Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-[#111111] p-8 rounded-2xl border border-white/5 transition-all duration-300 
                               hover:-translate-y-2 hover:bg-[#161616]
                               shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                            >
                                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-white font-bold" >{project.id}</span>
                                </div>

                                <h3 className="text-xl font-medium text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    {project.desc}
                                </p>

                                <Link
                                    to={project.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 text-sm text-gray-300 hover:text-white underline underline-offset-4 decoration-gray-600"
                                >
                                    View Case Study
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyProjects;