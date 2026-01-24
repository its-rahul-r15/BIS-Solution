import { FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-16 md:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                    {/* Company Info */}
                    <div>
                        <img
                            src="/logo.jpeg"
                            alt={companyInfo.name}
                            className="h-16 w-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-white mb-4">{companyInfo.name}</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Your trusted partner for certifications and registrations. Helping businesses achieve compliance and growth.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={companyInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href={companyInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={companyInfo.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Products', 'Contact'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(link.toLowerCase())}
                                        className="hover:text-primary-400 transition text-left"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>ISI Mark Certification</li>
                            <li>FSSAI Registration</li>
                            <li>CRS Approval</li>
                            <li>MSME Registration</li>
                            <li>GST Registration</li>
                            <li>CGWA NOC</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                                <div>
                                    {companyInfo.phones.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:+91${phone}`}
                                            className="block hover:text-primary-400 transition"
                                        >
                                            +91 {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="hover:text-primary-400 transition break-all"
                                >
                                    {companyInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                                <span>{companyInfo.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>
                            &copy; {currentYear} {companyInfo.name}. All rights reserved.
                        </p>
                        <p className="text-gray-400">
                            Designed with ❤️ for Business Growth
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
