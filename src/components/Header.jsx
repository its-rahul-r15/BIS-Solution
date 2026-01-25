import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { services } from '../data/services';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const navLinks = [
        { name: 'Home', section: 'home' },
        { name: 'About', section: 'about' },
        { name: 'Products', section: 'products' },
        { name: 'Contact', section: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
                }`}
        >

            {/* Main Navigation */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/logo.jpeg"
                            alt={companyInfo.name}
                            className="h-12 w-auto"
                        />
                        <div className="hidden md:block">
                            <span className="text-xl font-bold text-primary-700">{companyInfo.name}</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.section)}
                                className="text-gray-700 hover:text-primary-600 font-medium transition"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-gray-700 hover:text-primary-600 font-medium transition flex items-center gap-1"
                            >
                                Services
                                <FaChevronDown className="text-xs" />
                            </button>

                            {/* Dropdown Menu */}
                            {isServicesDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg py-3 z-50">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={`/services/${service.slug}`}
                                            className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary-600 transition"
                                            onClick={() => setIsServicesDropdownOpen(false)}
                                        >
                                            <div className="font-medium">{service.title}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                            className="btn-primary"
                        >
                            Get Started
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.section)}
                                    className="text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition"
                                >
                                    {link.name}
                                </button>
                            ))}

                            {/* Mobile Services Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition flex items-center justify-between"
                                >
                                    Services
                                    <FaChevronDown className={`text-xs transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesDropdownOpen && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {services.map((service) => (
                                            <Link
                                                key={service.id}
                                                to={`/services/${service.slug}`}
                                                className="block py-2 text-sm text-gray-600 hover:text-primary-600 transition"
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setIsServicesDropdownOpen(false);
                                                }}
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                                className="btn-primary mt-2"
                            >
                                Get Started
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
