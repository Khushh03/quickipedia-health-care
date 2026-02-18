import { ReactNode, useState } from "react"
import { X, ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface Domain {
    title: string
    description: string
    icon: ReactNode
    details?: string[]
}

interface DomainsSectionProps {
    title: string
    subtitle?: string
    domains: Domain[]
}

export default function DomainsSection({ title, subtitle, domains }: DomainsSectionProps) {
    const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null)

    return (
        <section className="relative py-6 lg:py-12 bg-[#050d14] overflow-hidden">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-teal-400 mb-4 tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedDomain(domain)}
                            className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Inner Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 rounded-full blur-[50px] group-hover:bg-teal-500/20 transition-all duration-500" />

                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center rounded-2xl text-teal-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-teal-500/20 shadow-inner">
                                    {domain.icon}
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-teal-400 transition-colors">
                                        {domain.title}
                                    </h3>
                                    <p className="text-[15px] text-gray-400 leading-relaxed font-light">
                                        {domain.description}
                                    </p>
                                </div>

                                <div className="pt-4 flex items-center gap-2 text-[13px] font-medium text-teal-500 group-hover:text-teal-400 transition-colors">
                                    <span>Explore Domain</span>
                                    <div className="w-5 h-[1px] bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Border Gradient Overlay */}
                            <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none group-hover:border-teal-500/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pop-up Modal */}
            {selectedDomain && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-[#020d1a]/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
                        onClick={() => setSelectedDomain(null)}
                    />

                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-2xl bg-[#0a1622] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <button
                            onClick={() => setSelectedDomain(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-teal-500/10 flex items-center justify-center rounded-3xl text-teal-400 border border-teal-500/20">
                                    <div className="scale-150">{selectedDomain.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                                        {selectedDomain.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-teal-500 mt-2 rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <p className="text-lg text-gray-300 leading-relaxed font-light italic">
                                    "{selectedDomain.description}"
                                </p>

                                <div className="grid gap-4">
                                    <h4 className="text-xs font-bold text-teal-400 uppercase tracking-[0.2em] mb-2">
                                        Why Choose this Domain?
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {(
                                            selectedDomain.details || [
                                                "Advanced data integration & security",
                                                "Human-centric interface design",
                                                "Seamless cross-platform compatibility",
                                                "AI-driven automated workflows",
                                            ]
                                        ).map((detail, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-teal-500/30 transition-colors"
                                            >
                                                <ArrowRight size={14} className="text-teal-500" />
                                                <span className="text-[14px] text-gray-400 group-hover:text-gray-200 transition-colors">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to="/contact-us"
                                    onClick={() => setSelectedDomain(null)}
                                    className="block w-full py-5 bg-teal-500 text-white text-center font-semibold rounded-2xl hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/20 active:scale-[0.98] decoration-transparent"
                                >
                                    Start Exploring Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
