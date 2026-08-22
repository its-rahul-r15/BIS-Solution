import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="services" className="py-24 md:py-32 bg-[#F7F5F0]">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-6xl">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    {/* Section Header */}
                    <div className="mb-16 md:mb-20 max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-[2px] bg-[#B08D57]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A7350]">
                                Comprehensive Practice Areas
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#0F1B2D] mb-6">
                            Regulatory & Compliance Services
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            End-to-end statutory registration, certification, and licensing solutions tailored for industrial and commercial establishments nationwide.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>

                    {/* Consultation Banner */}
                    <div className="mt-20 bg-[#0F1B2D] text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] block mb-3">
                                Statutory Advisory
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                                Require Specific Regulatory Advice?
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                Connect with our senior compliance consultants for personalized guidance on licenses, environmental clearances, and government approvals.
                            </p>
                        </div>
                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                            className="bg-[#B08D57] hover:bg-[#997948] text-white font-semibold text-sm uppercase tracking-[0.1em] px-8 py-4 transition duration-300 flex-shrink-0 shadow-lg"
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
