import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import ContactUs from "../pages/ContactUs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navLinks = [
        { name: t("HOME"), to: "/" },
        { name: t("OUR WORK"), to: "/ourwork" },
        { name: t("WHAT WE DO"), to: "/whatido" },
        { name: t("PORTFOLIO"), to: "/portfolio" },
        { name: t("ABOUT US"), to: "/aboutus" },
    ];

    return (
        <>
            <header className="bg-[#0a1340] text-white border-b border-gray-500 sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    
                    {/* 1. Logo Section */}
                    <div className="text-4xl font-extrabold tracking-tight text-white">
                        PHYO
                    </div>

                    {/* 2. Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        <nav className="flex space-x-10">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.to} 
                                    to={link.to} 
                                    className="text-sm font-semibold hover:text-gray-200 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* 4. Language Switcher (EN | MM) */}
                        <div className="flex items-center space-x-2 text-sm font-bold ml-4 border-l border-gray-600 pl-6">
                            <button 
                                onClick={() => changeLanguage('en')}
                                className={`hover:text-[#ff5a5f] transition ${i18n.language === 'en' ? 'text-[#ff5a5f]' : 'text-white'}`}
                            >
                                EN
                            </button>
                            <span className="text-gray-500">|</span>
                            <button 
                                onClick={() => changeLanguage('mm')}
                                className={`hover:text-[#ff5a5f] transition ${i18n.language === 'mm' ? 'text-[#ff5a5f]' : 'text-white'}`}
                            >
                                MM
                            </button>
                        </div>

                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#ff5a5f] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#ff767b] transition ml-6"
                        >
                            {t("Contact Us")}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={toggleMenu} 
                            className="text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/*Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#0a1340] pb-4 border-t border-gray-700">
                        <nav className="flex flex-col space-y-4 px-6 pt-4">
                            {/* Mobile Language Switcher */}
                            <div className="flex space-x-4 border-b border-gray-700 pb-4">
                                <button onClick={() => {changeLanguage('en'); setIsMenuOpen(false);}} className={i18n.language === 'en' ? 'text-[#ff5a5f] font-bold' : ''}>ENGLISH</button>
                                <span className="text-gray-700">|</span>
                                <button onClick={() => {changeLanguage('mm'); setIsMenuOpen(false);}} className={i18n.language === 'mm' ? 'text-[#ff5a5f] font-bold' : ''}>မြန်မာ</button>
                            </div>

                            {navLinks.map((link) => (
                                <Link 
                                    key={link.to} 
                                    to={link.to} 
                                    onClick={toggleMenu}
                                    className="text-base font-medium hover:text-gray-200 transition py-1 block border-b border-gray-700 last:border-b-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            <div className="pt-4">
                                <button 
                                    onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                                    className="block w-full text-center bg-[#ff5a5f] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#ff767b] transition"
                                >
                                    {t("Contact Us")}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* --- CONTACT US POPUP (MODAL) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    
                    <div className="relative w-full max-w-xl bg-[#111111] rounded-[32px] p-8 border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <ContactUs />
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;