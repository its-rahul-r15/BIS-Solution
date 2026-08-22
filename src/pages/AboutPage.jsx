import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight, FaPhoneAlt, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import About from '../components/About';
import Contact from '../components/Contact';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Hero Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-primary-950 to-blue-950 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
                            <Link to="/" className="hover:text-white transition flex items-center gap-1">
                                <FaHome /> Home
                            </Link>
                            <FaChevronRight className="text-xs text-blue-400/60" />
                            <span className="text-white font-medium">About Us</span>
                        </div>

                        <span className="inline-block px-3.5 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                            BIS Solutions India
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            About Our Firm & <span className="text-gradient">Leadership</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed font-light mb-8">
                            A premier regulatory compliance and government approval consultancy firm delivering end-to-end certification, licensing, and statutory solutions across India.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#about"
                                className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-blue-600/30 flex items-center gap-2"
                            >
                                <FaUserTie /> Founder Profile
                            </a>
                            <a
                                href="https://wa.me/918419050267"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl backdrop-blur-md transition duration-300 flex items-center gap-2"
                            >
                                <FaPhoneAlt /> Consult Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main About Component */}
            <About />

            {/* Contact Section for Inquiry */}
            <Contact />
        </div>
    );
};

export default AboutPage;
