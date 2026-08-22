import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();
    const founder = companyInfo.founder;

    const stats = [
        { value: '500+', label: 'Clients served across India' },
        { value: '2021', label: 'Founded' },
        { value: '18+', label: 'Compliance services' },
        { value: 'Pan-India', label: 'Execution' },
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-[#F7F5F0]">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-6xl">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    {/* Section header */}
                    <div className="mb-20 md:mb-24 max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-10 h-[2px] bg-[#B08D57]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A7350]">About the firm</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#0F1B2D] mb-6">
                            BIS Solutions India
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {companyInfo.description}
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 mb-24 md:mb-28">
                        <div className="bg-[#0F1B2D] text-white p-10 md:p-12">
                            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-4">Mission</span>
                            <p className="font-serif text-xl md:text-2xl leading-snug text-slate-100">
                                {companyInfo.mission}
                            </p>
                        </div>
                        <div className="bg-[#16233A] text-white p-10 md:p-12">
                            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-4">Vision</span>
                            <p className="font-serif text-xl md:text-2xl leading-snug text-slate-100">
                                {companyInfo.vision}
                            </p>
                        </div>
                    </div>

                    {/* Founder */}
                    <div className="mb-24 md:mb-28">
                        <div className="flex items-center gap-3 mb-10">
                            <span className="w-10 h-[2px] bg-[#B08D57]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A7350]">Leadership</span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            {/* Photo + credentials */}
                            <div className="lg:col-span-4">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-[460px] object-cover object-top"
                                />

                                <div className="mt-6">
                                    <h4 className="font-serif text-2xl text-[#0F1B2D]">{founder.name}</h4>
                                    <p className="text-[#8A7350] font-medium mt-1">{founder.designation}</p>
                                    {founder.linkedin && (
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#0F1B2D] hover:text-[#B08D57] transition-colors"
                                        >
                                            <FaLinkedin className="text-lg" />
                                            Connect on LinkedIn
                                        </a>
                                    )}
                                </div>

                                <dl className="mt-10 space-y-6">
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">Education</dt>
                                        <dd className="text-sm text-slate-700 leading-relaxed">{founder.qualification}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">Experience</dt>
                                        <dd className="text-sm text-slate-700 leading-relaxed">{founder.experience}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">Reach</dt>
                                        <dd className="text-sm text-slate-700 leading-relaxed">{founder.panIndiaExperience}</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Detail column */}
                            <div className="lg:col-span-8 space-y-12">
                                <div>
                                    <h3 className="font-serif text-2xl text-[#0F1B2D] mb-4">
                                        Delivering end-to-end regulatory excellence
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-base">
                                        {founder.keyAchievements}
                                    </p>
                                </div>

                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4 block">
                                        Core areas of expertise
                                    </span>
                                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {founder.expertise.map((exp, idx) => (
                                            <li key={idx} className="text-slate-700 font-medium text-sm flex items-baseline gap-2">
                                                <span className="text-[#B08D57]">—</span>
                                                {exp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3 block">
                                        Sectors served
                                    </span>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {founder.industryExperience}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <FaQuoteLeft className="text-2xl text-[#D9CFC0] mb-3" />
                                    <p className="font-serif text-lg text-[#0F1B2D] italic leading-relaxed mb-6">
                                        {founder.philosophy}
                                    </p>
                                    <p className="text-sm text-slate-500 uppercase tracking-[0.1em] font-semibold mb-2">
                                        Vision for BIS Solutions India
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {founder.visionForCompany}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-[#0F1B2D] px-10 py-14 md:px-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                            {stats.map((item, idx) => (
                                <div key={idx}>
                                    <div className="font-serif text-3xl md:text-4xl text-white mb-1">{item.value}</div>
                                    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.1em]">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;