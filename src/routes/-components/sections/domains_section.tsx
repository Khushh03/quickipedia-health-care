import { ReactNode } from "react"

interface Domain {
    title: string
    description: string
    icon: ReactNode
}

interface DomainsSectionProps {
    title: string
    subtitle?: string
    domains: Domain[]
}

export default function DomainsSection({ title, subtitle, domains }: DomainsSectionProps) {
    return (
        <section className="relative py-24 bg-[#050d14] overflow-hidden">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-orange-500 mb-4 tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
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

                                <div className="pt-4 flex items-center gap-2 text-[13px] font-medium text-orange-500 group-hover:text-teal-400 transition-colors cursor-pointer">
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
        </section>
    )
}
