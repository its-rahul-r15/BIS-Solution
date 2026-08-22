import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { services } from '../data/services';
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
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus('');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F7F5F0]">
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
                                Direct Contact
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#0F1B2D] mb-6">
                            Consultation & Advisory Inquiries
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Connect directly with our regulatory management desk for comprehensive compliance guidance and quotes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-6">
                                {/* Phone Numbers */}
                                <div className="flex items-start gap-4 p-6 bg-white shadow-sm">
                                    <div className="w-12 h-12 bg-[#0F1B2D] text-[#B08D57] flex items-center justify-center flex-shrink-0">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block mb-1">Direct Lines</span>
                                        {companyInfo.phones.map((phone, index) => (
                                            <a
                                                key={index}
                                                href={`tel:+91${phone}`}
                                                className="block font-serif text-lg text-[#0F1B2D] hover:text-[#B08D57] transition"
                                            >
                                                +91 {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 bg-white shadow-sm">
                                    <div className="w-12 h-12 bg-[#0F1B2D] text-[#B08D57] flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block mb-1">Official Desk</span>
                                        <a
                                            href={`mailto:${companyInfo.email}`}
                                            className="font-medium text-slate-800 hover:text-[#B08D57] transition break-all text-sm"
                                        >
                                            {companyInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4 p-6 bg-white shadow-sm">
                                    <div className="w-12 h-12 bg-[#0F1B2D] text-[#B08D57] flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block mb-1">Registered Office</span>
                                        <p className="text-slate-700 text-sm leading-relaxed">{companyInfo.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7 bg-[#0F1B2D] text-white p-8 md:p-12 shadow-2xl">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Request Consultation</h3>
                            <p className="text-slate-400 text-sm mb-8">
                                Fill out the inquiry details below. Our technical desk will reach out within 24 hours.
                            </p>

                            {formStatus === 'success' && (
                                <div className="mb-6 p-4 bg-[#B08D57]/20 border border-[#B08D57] text-[#B08D57] text-sm font-semibold">
                                    Thank you! Your consultation request has been received.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#16233A] text-white border border-white/10 focus:border-[#B08D57] outline-none transition text-sm"
                                        placeholder="e.g. Rajesh Sharma"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#16233A] text-white border border-white/10 focus:border-[#B08D57] outline-none transition text-sm"
                                            placeholder="name@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 mb-2">
                                            Contact Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#16233A] text-white border border-white/10 focus:border-[#B08D57] outline-none transition text-sm"
                                            placeholder="+91 XXXXXXXXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 mb-2">
                                        Service Required
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#16233A] text-white border border-white/10 focus:border-[#B08D57] outline-none transition text-sm"
                                    >
                                        <option value="">Select a service category</option>
                                        {services.map((srv) => (
                                            <option key={srv.id} value={srv.title} className="bg-[#0F1B2D] text-white">
                                                {srv.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300 mb-2">
                                        Project / Requirement Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-[#16233A] text-white border border-white/10 focus:border-[#B08D57] outline-none transition text-sm resize-none"
                                        placeholder="Specify project capacity, industry category, or timeline requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#B08D57] hover:bg-[#997948] text-white font-semibold text-xs uppercase tracking-[0.15em] transition duration-300 flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <span>Submit Consultation Request</span>
                                    <FaPaperPlane className="text-xs" />
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
