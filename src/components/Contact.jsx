import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add email service integration (EmailJS, etc.)
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus('');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 md:py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="section-title mb-4">
                            Get In <span className="text-gradient">Touch</span>
                        </h2>
                        <p className="section-subtitle max-w-3xl mx-auto px-4">
                            Ready to get started? Contact us today for expert consultation and certification services
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* Phone Numbers */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                                        {companyInfo.phones.map((phone, index) => (
                                            <a
                                                key={index}
                                                href={`tel:+91${phone}`}
                                                className="block text-gray-600 hover:text-primary-600 transition"
                                            >
                                                +91 {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Email Address</h4>
                                        <a
                                            href={`mailto:${companyInfo.email}`}
                                            className="text-gray-600 hover:text-primary-600 transition break-all"
                                        >
                                            {companyInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                                        <p className="text-gray-600">{companyInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.1234567890!2d81.2345678!3d26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiTiA4McKwMTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="BIS Solutions India Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                            {formStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                                    Thank you! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                            placeholder="+91 XXXXXXXXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="ISI Mark">ISI Mark Certification</option>
                                        <option value="FSSAI">FSSAI Registration</option>
                                        <option value="CRS">CRS Approval</option>
                                        <option value="FMCS">FMCS</option>
                                        <option value="MSME">MSME Registration</option>
                                        <option value="GST">GST Registration</option>
                                        <option value="CGWA">CGWA NOC</option>
                                        <option value="Pollution">Industrial Pollution Certificate</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                                    <span>Send Message</span>
                                    <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
