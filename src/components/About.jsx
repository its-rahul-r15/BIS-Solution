import { FaAward, FaHandshake, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    const features = [
        {
            icon: <FaAward className="text-4xl text-primary-600" />,
            title: 'Expert Consulting',
            description: 'Professional guidance from experienced certification consultants',
        },
        {
            icon: <FaHandshake className="text-4xl text-primary-600" />,
            title: 'Trusted Partner',
            description: 'Building long-term relationships with 1000+ satisfied clients',
        },
        {
            icon: <FaCheckCircle className="text-4xl text-primary-600" />,
            title: 'Guaranteed Results',
            description: 'High success rate in certification and registration processes',
        },
        {
            icon: <FaChartLine className="text-4xl text-primary-600" />,
            description: 'Helping businesses expand through proper compliance and certifications',
        },
    ];

    return (
        <section id="about" className="py-20 md:py-24 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="section-title mb-4">
                            About <span className="text-gradient">BIS Solutions India</span>
                        </h2>
                        <p className="section-subtitle max-w-3xl mx-auto px-4">
                            {companyInfo.description}
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="card p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaCheckCircle className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {companyInfo.mission}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaChartLine className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {companyInfo.vision}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="bg-blue-600 rounded-xl p-10 md:p-14 text-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-semibold mb-2">1000+</div>
                                <div className="text-sm md:text-base text-blue-100">Happy Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-semibold mb-2">8+</div>
                                <div className="text-sm md:text-base text-blue-100">Services Offered</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-semibold mb-2">100%</div>
                                <div className="text-sm md:text-base text-blue-100">Success Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-semibold mb-2">24/7</div>
                                <div className="text-sm md:text-base text-blue-100">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
