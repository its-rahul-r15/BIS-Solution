import { FaArrowRight, FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const features = [
        'Pan-India Execution',
        'Expert Consultation',
        'Transparent Process',
        '500+ Satisfied Clients',
    ];

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0F1B2D] text-white overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.webp"
                    alt="BIS Solutions Background"
                    loading="eager"
                    className="w-full h-full object-cover opacity-15 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B2D]/90 via-[#0F1B2D] to-[#0F1B2D]"></div>
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#B08D57]/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-6xl relative z-10">
                <div className="max-w-4xl">
                    {/* Category / Badge */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[2px] bg-[#B08D57]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                            India's Premier Regulatory & Compliance Consultancy
                        </span>
                    </div>

                    {/* Main Serif Heading */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-8 text-white">
                        {companyInfo.tagline}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl">
                        {companyInfo.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-3xl">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                <span className="text-[#B08D57] font-bold">—</span>
                                <span className="text-sm font-medium text-slate-200">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                            className="inline-flex items-center justify-center gap-3 bg-[#B08D57] hover:bg-[#997948] text-white font-semibold text-base px-8 py-4 transition duration-300 shadow-lg shadow-[#B08D57]/20 group"
                        >
                            <span>Request Consultation</span>
                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToServices}
                            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white text-white hover:bg-white/5 font-semibold text-base px-8 py-4 transition duration-300"
                        >
                            Explore Services
                        </button>
                    </div>

                    {/* Quick Contact Specs */}
                    <div className="pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 max-w-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#16233A] flex items-center justify-center text-[#B08D57] flex-shrink-0">
                                <FaPhoneAlt className="text-lg" />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-widest text-slate-400">Direct Consultation</span>
                                <a href={`tel:+91${companyInfo.phones[0]}`} className="text-lg font-serif text-white hover:text-[#B08D57] transition">
                                    +91 {companyInfo.phones[0]}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#16233A] flex items-center justify-center text-[#B08D57] flex-shrink-0">
                                <FaEnvelope className="text-lg" />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-widest text-slate-400">Email Inquiry</span>
                                <a href={`mailto:${companyInfo.email}`} className="text-sm font-medium text-slate-200 hover:text-[#B08D57] transition truncate block max-w-[220px]">
                                    {companyInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
