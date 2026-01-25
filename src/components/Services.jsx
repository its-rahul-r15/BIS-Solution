import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="section-title mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto px-4">
              Comprehensive certification and registration services to help your business grow and comply with government regulations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our expert consultants are here to guide you through the certification process. Get personalized recommendations based on your business needs.
              </p>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                className="btn-primary"
              >
                Talk to Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
