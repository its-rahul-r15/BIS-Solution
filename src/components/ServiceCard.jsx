import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
    return (
        <Link
            to={`/services/${service.slug}`}
            className="group block bg-white p-7 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl relative flex flex-col justify-between"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div>
                {/* Top Number / Category accent */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A7350]">
                        Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#B08D57]/40 group-hover:w-10 group-hover:bg-[#B08D57] transition-all duration-300"></span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl md:text-2xl font-normal text-[#0F1B2D] mb-3 group-hover:text-[#B08D57] transition-colors leading-snug">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                </p>
            </div>

            {/* Read More Link */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-[#0F1B2D] group-hover:text-[#B08D57] transition-colors">
                <span>View Details</span>
                <FaArrowRight className="text-xs text-[#B08D57] group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
};

export default ServiceCard;
