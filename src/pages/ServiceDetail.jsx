import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaFileAlt, FaCogs } from 'react-icons/fa';
import { services } from '../data/services';
import { companyInfo } from '../data/companyInfo';
import { useEffect } from 'react';

const ServiceDetail = () => {
    const { serviceSlug } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.slug === serviceSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceSlug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">Service Not Found</h1>
                    <Link to="/" className="btn-primary">Go Back Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition"
                    >
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </button>

                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">{service.title}</h1>
                    <p className="text-xl text-blue-50 max-w-3xl mb-8">{service.fullDescription || service.description}</p>

                    <button 
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                        className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
                    >
                        Get Started Now
                    </button>
                </div>
            </section>

            {/* Introduction */}
            {service.introduction && (
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Introduction</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            {service.introduction.split('\n').map((para, index) => (
                                <p key={index} className="mb-4">{para}</p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Key Benefits</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <FaCheckCircle className="text-2xl text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Documents Required */}
            {service.documents && service.documents.length > 0 && (
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <FaFileAlt className="text-3xl text-blue-600" />
                            <h2 className="text-3xl font-semibold text-gray-900">Documents Required</h2>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8">
                            <ul className="space-y-3">
                                {service.documents.map((doc, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* Process */}
            {service.process && service.process.length > 0 && (
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
                        <div className="flex items-center gap-3 mb-12">
                            <FaCogs className="text-3xl text-blue-600" />
                            <h2 className="text-3xl font-semibold text-gray-900">Process</h2>
                        </div>
                        <div className="space-y-6">
                            {service.process.map((step, index) => (
                                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-50 mb-8">Contact our experts today for a free consultation</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:+91${companyInfo.phones[0]}`}
                            className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
                        >
                            Call Now: +91 {companyInfo.phones[0]}
                        </a>
                        <Link
                            to="/#contact"
                            className="btn-secondary border-white text-white hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
