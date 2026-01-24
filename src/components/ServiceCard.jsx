import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
    return (
        <Link to={`/services/${service.slug}`} className="card card-hover group block"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.icon}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                <p className="text-sm text-gray-500 mb-4">{service.details}</p>

                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <FaArrowRight className="text-sm" />
                </div>
            </div>

            {/* Accent Line */}
            <div className="h-1 w-0 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-500"></div>
        </Link>
    );
};

export default ServiceCard;
