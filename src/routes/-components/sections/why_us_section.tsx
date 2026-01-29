import { Users, Target, CheckCircle, Layers, Activity } from "lucide-react"
import { ReactNode } from "react"

interface WhyUsSectionProps {
    badge: string
    title: string
    description: string
    differentiators: Array<{
        icon: "users" | "target" | "check" | "layers"
        title: string
        description: string
    }>
}

export default function WhyUsSection({ badge, title, description, differentiators }: WhyUsSectionProps) {
    const getIcon = (iconName: string): ReactNode => {
        switch (iconName) {
            case "users":
                return <Users size={24} className="text-primary" />
            case "target":
                return <Target size={24} className="text-primary" />
            case "check":
                return <CheckCircle size={24} className="text-primary" />
            case "layers":
                return <Layers size={24} className="text-primary" />
            default:
                return null
        }
    }

    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ff7c5c]/5 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ff7c5c]/10 rounded-full border border-[#ff7c5c]/20">
                            <span className="text-sm font-semibold text-[#ff7c5c] tracking-wide uppercase">
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">{description}</p>

                        <div className="space-y-6 pt-6">
                            {differentiators.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                                        {getIcon(item.icon)}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="text-xl font-light text-white tracking-tight group-hover:text-teal-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-[15px] text-gray-500 mt-1 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full h-[550px] bg-white/2 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0">
                                <img
                                    src="/assets/blog/global-healthcare-bg.png"
                                    alt="Healthcare Technology"
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-tr from-background via-transparent to-teal-500/10"></div>
                            </div>

                            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                                <div className="space-y-6">
                                    {/* Floating AI Card */}
                                    <div className="w-56 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl animate-float">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                                                <Activity size={16} className="text-teal-400" />
                                            </div>
                                            <span className="text-xs font-bold text-white uppercase tracking-widest">
                                                AI Analysis
                                            </span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-teal-400"></div>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-2">
                                            High-confidence detection verified
                                        </p>
                                    </div>

                                    {/* Floating Data Card */}
                                    <div className="w-48 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl animate-float-delayed self-end ml-auto">
                                        <div className="text-2xl font-light text-white mb-1">99.9%</div>
                                        <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">
                                            System Uptime
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center pt-8 border-t border-white/10">
                                    <p className="text-teal-400 font-light text-lg tracking-wide">
                                        Healthcare-Grade Technology Platform
                                    </p>
                                    <div className="flex items-center justify-center gap-4 mt-3">
                                        <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                                            Compliant
                                        </span>
                                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                        <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                                            Secure
                                        </span>
                                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                        <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                                            Reliable
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Outer Ring */}
                        <div className="absolute -inset-4 border border-teal-500/5 rounded-[3.5rem] -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
