import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const features = [
        'Fast & Reliable Service',
        'Expert Guidance',
        'Affordable Pricing',
        '1000+ Satisfied Clients',
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.webp"
                    alt="BIS Solutions Background"
                    loading="eager"
                    className="w-full h-full object-cover"
                />
                {/* Blue overlay with reduced opacity */}
                <div className="absolute inset-0 bg-blue-600/85"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-10 mt-10">
                        <FaCheckCircle className="text-base sm:text-lg" />
                        <span className="text-sm sm:text-base font-medium tracking-wide">India's Trusted Certification Partner</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight px-2">
                        {companyInfo.tagline}
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/95 mb-8 sm:mb-12 md:mb-14 max-w-4xl mx-auto leading-relaxed font-light px-2">
                        {companyInfo.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-white justify-center">
                                <FaCheckCircle className="text-white flex-shrink-0 text-sm sm:text-base" />
                                <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-10 sm:mb-14 md:mb-16 px-2">
                        <button
                            onClick={scrollToContact}
                            className="btn-primary flex items-center justify-center gap-2 group bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
                        >
                            <span>Request Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
                        >
                            Explore Services
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-white justify-center items-center px-2">
                        <div className="text-center sm:text-left">
                            <p className="text-sm sm:text-base text-blue-100 mb-1 sm:mb-2">Call Us Now</p>
                            <a
                                href={`tel:+91${companyInfo.phones[0]}`}
                                className="text-xl sm:text-2xl font-semibold hover:text-blue-100 transition"
                            >
                                +91 {companyInfo.phones[0]}
                            </a>
                        </div>
                        <div className="h-auto w-px bg-white/30 hidden sm:block"></div>
                        <div className="text-center sm:text-left">
                            <p className="text-sm sm:text-base text-blue-100 mb-1 sm:mb-2">Email Us</p>
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="text-base sm:text-xl font-semibold hover:text-blue-100 transition break-all"
                            >
                                {companyInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
