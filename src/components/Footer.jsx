import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: "fab fa-facebook-f", link: "https://facebook.com" },
        { icon: "fab fa-instagram", link: "https://instagram.com" },
        { icon: "fab fa-twitter", link: "https://twitter.com" },
        { icon: "fab fa-linkedin-in", link: "https://linkedin.com" },
        { icon: "far fa-envelope", link: "mailto:info@phyo.com" }
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="text-4xl font-extrabold tracking-tight text-white">
                            PHYO<span className="text-sky-500">.</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Crafting digital experiences with precision and passion. Stay connected with us for the latest updates in tech and innovation.
                        </p>
                        <div className="flex space-x-5">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.link} 
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 hover:text-white transition-all duration-300"
                                >
                                    <i className={`${social.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section 1 */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h3>
                        <ul className="space-y-4 text-sm">
                            {['Media', 'Events', 'Programs', 'Jobs in tech'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="hover:text-sky-400 transition-colors duration-200 block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Section 2 */}
                    <div className="md:col-span-4">
                        <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h3>
                        <ul className="space-y-4 text-sm">
                            {['Terms & Conditions', 'Privacy Statement', 'Cookie Statement', 'Editorial Policy'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="hover:text-sky-400 transition-colors duration-200 block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-medium uppercase tracking-wider">
                    <p>© {currentYear} PHYO. All Rights Reserved.</p>
                    <p className="flex items-center">
                        Made with <span className="text-rose-500 mx-1.5 text-base">♥</span> in Myanmar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;