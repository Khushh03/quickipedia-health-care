import { Zap } from "lucide-react"

interface AboutUsSectionProps {
    intro: {
        badge: string
        title: string
        paragraphs: string[]
        highlight: string
    }
    focus: {
        title: string
        description: string
        impacts: string[]
        decision: string
        decisionHighlight: string
        understanding: string
        understandingItems: string[]
        conclusion: string
    }
    whoWeWorkWith: {
        title: string
        description: string
        organizations: string[]
        clientNote: string
        clientHighlight: string
    }
    whatWeBuild: {
        title: string
        items: Array<{
            title: string
            description: string
        }>
    }
    philosophy: {
        title: string
        description: string
        beliefs: string[]
        principlesIntro: string
        principles: string[]
    }
    finalCta: {
        title: string
        description: string
        buttonText: string
        companyName: string
        tagline: string
    }
}

export default function AboutUsSection({
    intro,
    focus,
    whoWeWorkWith,
    whatWeBuild,
    philosophy,
    finalCta,
}: AboutUsSectionProps) {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ff7c5c]/5 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ff7c5c]/10 rounded-full border border-[#ff7c5c]/20">
                            <span className="text-sm font-semibold text-[#ff7c5c] tracking-wide uppercase">
                                {intro.badge}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
                            {intro.title}
                        </h2>
                        <div className="space-y-6">
                            {intro.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className="text-xl text-gray-400 leading-relaxed font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <p className="text-xl text-teal-400 font-light leading-relaxed border-l-2 border-teal-500/50 pl-6 italic">
                            {intro.highlight}
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {/* Our Focus */}
                        <div className="p-8 rounded-4xl border border-white/10 bg-white/3 backdrop-blur-md hover:bg-white/5 transition-all duration-500 shadow-2xl group">
                            <h3 className="text-2xl font-light text-white mb-6 tracking-tight group-hover:text-teal-400 transition-colors">
                                {focus.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">{focus.description}</p>
                            <ul className="grid grid-cols-2 gap-4 mb-8">
                                {focus.impacts.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <p className="text-gray-400 font-light">{focus.decision}</p>
                                <p className="text-[#ff7c5c] font-medium tracking-wide uppercase text-sm">
                                    {focus.decisionHighlight}
                                </p>
                                <p className="text-gray-500 text-sm font-light mt-4 italic">{focus.conclusion}</p>
                            </div>
                        </div>

                        {/* Who We Work With */}
                        <div className="p-8 rounded-4xl border border-white/10 bg-white/3 backdrop-blur-md hover:bg-white/5 transition-all duration-500 shadow-2xl group">
                            <h3 className="text-2xl font-light text-white mb-6 tracking-tight group-hover:text-[#ff7c5c] transition-colors">
                                {whoWeWorkWith.title}
                            </h3>
                            <ul className="space-y-3">
                                {whoWeWorkWith.organizations.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300 font-light">
                                        <div className="w-8 h-8 rounded-lg bg-[#ff7c5c]/10 flex items-center justify-center text-[#ff7c5c]">
                                            <span className="text-xs font-bold">✓</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Note</p>
                                <p className="text-[#ff7c5c] text-sm font-medium">{whoWeWorkWith.clientHighlight}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Build */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
                            {whatWeBuild.title}
                        </h2>
                        <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-[#ff7c5c] mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeBuild.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-4xl border border-white/10 bg-white/2 hover:bg-white/4 hover:border-teal-500/30 transition-all duration-500"
                            >
                                <div className="text-teal-400 mb-6 font-mono text-sm tracking-tighter opacity-50">
                                    0{idx + 1} // Building
                                </div>
                                <h3 className="text-xl font-light text-white mb-4 tracking-tight group-hover:text-teal-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Philosophy */}
                <div className="mt-32 relative py-20">
                    <div className="absolute inset-0 bg-teal-500/2 rounded-3xl -rotate-1" />
                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
                            {philosophy.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {philosophy.beliefs.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border border-teal-500/20 bg-teal-500/5 text-center group hover:bg-teal-500/10 transition-all duration-300"
                            >
                                <span className="text-sm font-light text-teal-300 tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-400 font-light mb-8 italic">{philosophy.principlesIntro}</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {philosophy.principles.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-light tracking-wide hover:border-[#ff7c5c]/50 transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 text-center relative py-24 px-8 overflow-hidden rounded-[3rem] border border-white/10">
                    <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 via-background to-[#ff7c5c]/10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-6xl font-light text-white mb-8 tracking-tight">
                            {finalCta.title}
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            {finalCta.description}
                        </p>
                        <button className="px-10 py-5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl shadow-2xl shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 mx-auto uppercase tracking-widest text-xs">
                            <Zap size={18} fill="currentColor" />
                            {finalCta.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
