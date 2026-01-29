import { ReactNode } from "react"

interface DevelopmentApproachSectionProps {
    title: string
    subtitle?: string
    steps: Array<{
        icon: ReactNode
        title: string
        description: string
    }>
}

export default function DevelopmentApproachSection({ title, subtitle, steps }: DevelopmentApproachSectionProps) {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-3xl border border-white/10 bg-white/2 hover:bg-white/5 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute -top-5 left-8 w-10 h-10 bg-[#ff7c5c] rounded-xl flex items-center justify-center shadow-lg shadow-[#ff7c5c]/20 group-hover:scale-110 transition-transform">
                                <span className="text-white text-sm font-bold">{idx + 1}</span>
                            </div>
                            <div className="mt-4 mb-6 text-teal-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-light text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
