import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>

            <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row justify-between pb-8 space-y-8 md:space-y-0">

                        <div className="w-full md:w-2/5">
                            <div className="text-4xl font-extrabold tracking-tight text-white mb-1">PHYO</div>
                            <p className="text-gray-400 text-base mb-6">Hello</p>
                            <div className="flex space-x-4">
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-facebook-square text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-instagram text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-twitter text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-youtube text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-flipboard text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="far fa-envelope text-2xl"></i></Link>
                                <Link to="https://www.facebook.com/" className="text-white hover:text-shadow-white transition transform hover:-translate-y-5 duration-600 inline-block"><i className="fab fa-linkedin text-2xl"></i></Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-sm font-bold uppercase text-white mb-4">More TNW</h3>
                            <ul class="space-y-2">
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Media</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Events</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Programs</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Spaces</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Newsletters</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Deals</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Jobs in tech</Link></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4">
                            <h3 className="text-sm font-bold uppercase text-white mb-4">About Phyo</h3>
                            <ul className="space-y-2">
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Partner with us</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Jobs</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Terms & Conditions</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Cookie Statement</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Privacy Statement</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Editorial Policy</Link></li>
                                <li><Link to="" className="text-gray-400 hover:text-sky-400 text-sm font-bold">Masthead</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 text-center">

                        <p className="text-white font-bold text-sm mb-2">PHYO</p>
                        <p className="text-gray-500 text-xs">
                            Copyright © {currentYear} PHYO. Made with <span className="text-red-500">❤️</span> in Myanmar.
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer