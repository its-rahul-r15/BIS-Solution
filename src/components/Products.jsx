import { FaBox, FaCertificate } from 'react-icons/fa';
import { products } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Products = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="products" className="py-20 md:py-24 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="section-title mb-4">
                            Our <span className="text-gradient">Products</span>
                        </h2>
                        <p className="section-subtitle max-w-3xl mx-auto px-4">
                            High-quality certified products meeting Indian Standards for safety, quality, and compliance
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="card card-hover p-8 text-center"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                    <FaBox className="text-4xl text-white" />
                                </div>

                                <div className="mb-4 inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    <FaCertificate />
                                    <span>{product.standard}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-sm text-primary-600 font-medium">{product.category}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certification Info */}
                    <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="max-w-3xl mx-auto text-center">
                            <FaCertificate className="text-5xl text-primary-600 mx-auto mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                All Products Meet BIS Standards
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our products are certified under relevant Indian Standards (IS), ensuring the highest quality,
                                safety, and compliance for your business needs.
                            </p>
                            <button
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                                className="btn-primary"
                            >
                                Inquire About Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
