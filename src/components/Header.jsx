import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactUs from './ContactUs';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Popup အတွက် State အသစ်
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: "HOME", to: "/" },
        { name: "OUR WORK", to: "" },
        { name: "WHAT WE DO", to: "" },
        { name: "PORTFOLIO", to: "/portfolio" },
        { name: "ABOUT US", to: "" },
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
                                    key={link.name} 
                                    to={link.to} 
                                    className="text-sm font-semibold hover:text-gray-200 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Contact Us ကို Link အစား Button ပြောင်းပြီး Modal ခေါ်လိုက်ပါမယ် */}
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#ff5a5f] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#ff767b] transition ml-10"
                        >
                            Contact Us
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
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
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
                                    Contact Us
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* --- CONTACT US POPUP (MODAL) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    {/* အမည်းရောင် Backdrop (နှိပ်ရင် ပိတ်သွားအောင် လုပ်ထားပါတယ်) */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    
                    {/* Modal Content Box */}
                    <div className="relative w-full max-w-xl bg-[#111111] rounded-[32px] p-8 border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]">
                        {/* ပိတ်ရန်ခလုတ် */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Contact Form Component ကို ဒီမှာ ခေါ်သုံးပါတယ် */}
                        <ContactUs />
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;