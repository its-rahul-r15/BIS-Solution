import { FaCertificate, FaArrowRight } from 'react-icons/fa';
import { products } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Products = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="products" className="py-24 md:py-32 bg-white border-t border-slate-100">
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
                                Quality Assurance
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#0F1B2D] mb-6">
                            BIS Certified Products & Standards
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Certified products adhering strictly to Indian Standards (IS) for quality, structural safety, and regulatory compliance.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-[#F7F5F0] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#B08D57] font-semibold text-xs uppercase tracking-wider shadow-sm">
                                            <FaCertificate className="text-xs" />
                                            {product.standard}
                                        </span>
                                        <span className="text-xs uppercase tracking-widest text-[#8A7350] font-medium">
                                            {product.category}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-2xl text-[#0F1B2D] mb-3 group-hover:text-[#B08D57] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#0F1B2D] hover:text-[#B08D57] transition-colors pt-4 border-t border-slate-200/60"
                                >
                                    <span>Inquire Standard Details</span>
                                    <FaArrowRight className="text-xs text-[#B08D57]" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Certification Compliance Card */}
                    <div className="bg-[#0F1B2D] text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] block mb-2">
                                Indian Standards Adherence
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                                100% Conformance to Bureau of Indian Standards
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                All product categories are rigorously evaluated and certified in accordance with mandatory and voluntary Bureau of Indian Standards (BIS) specifications.
                            </p>
                        </div>
                        <button
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSerSnWp4zdUKhZDqv_hK7muhKeebb7SHb2kR0oUVNJewElGjQ/viewform?usp=dialog', '_blank')}
                            className="bg-[#B08D57] hover:bg-[#997948] text-white font-semibold text-sm uppercase tracking-[0.1em] px-8 py-4 transition duration-300 flex-shrink-0 shadow-lg"
                        >
                            Inquire Products
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
