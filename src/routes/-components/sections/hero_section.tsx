import { cn } from "@/lib/utils"

interface HeroSectionProps {
    title: string
    subtitle: string
    description: string
    ctas: {
        text: string
        variant: "primary" | "secondary"
        icon: "zap" | "chevron"
    }[]
}

export default function HeroSection({ title, subtitle, description, ctas }: HeroSectionProps) {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] bg-[#020d1a] overflow-hidden flex items-center">
                {/* Background Patterns */}
                <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>
                <div className="absolute inset-0 z-0 bg-linear-to-tr from-[#020d1a] via-transparent to-teal-500/5"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-7xl font-light text-white leading-tight">
                                {title.split(" ").slice(0, 1)}
                                <span className="lg:block"> {title.split(" ").slice(1, 4).join(" ")} </span>
                                <span className="text-teal-400 font-normal">{title.split(" ").slice(4).join(" ")}</span>
                            </h1>
                            <p className="text-teal-400/80 font-medium tracking-wide uppercase text-sm">{subtitle}</p>
                            <p className="text-lg text-gray-400 max-w-xl">{description}</p>
                            <div className="flex flex-wrap gap-4">
                                {ctas.map((cta, index) => (
                                    <button
                                        key={index}
                                        className={cn(
                                            "w-full sm:w-fit sm:min-w-[280px] px-8 py-4 font-medium rounded-xl transition-all duration-300",
                                            cta.variant === "primary"
                                                ? "bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20"
                                                : "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm",
                                        )}
                                    >
                                        {cta.text}
                                    </button>
                                ))}
                            </div>
                            {/* Statistics */}
                            <div className="flex flex-nowrap items-center justify-between p-10  border-t border-white/10 mt-12 overflow-x-hidden">
                                <div className="space-y-1 shrink-0">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">40M+</div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-teal-500/70 font-bold">
                                        Lives Impacted
                                    </div>
                                </div>
                                <div className="space-y-1 shrink-0">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">105+</div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-teal-500/70 font-bold">
                                        Countries
                                    </div>
                                </div>
                                <div className="space-y-1 shrink-0">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">1B+</div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-teal-500/70 font-bold">
                                        Data Points
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Visual Composition (The "Photo" replica) */}
                        <div className="relative block h-[450px] sm:h-[600px] lg:h-[700px] mt-0 sm:mt-12 lg:-mt-20">
                            <div className="relative h-full w-full scale-[0.7] sm:scale-75 lg:scale-100 origin-center transition-transform duration-700 -translate-y-10 sm:translate-y-0 lg:-translate-y-12">
                                {/* 1. Phone Mockup (Left side) */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[280px] h-[560px] bg-[#0a111a] rounded-[3rem] border-4 border-white/10 shadow-2xl overflow-hidden z-20">
                                    {/* Screen Content */}
                                    <div className="p-4 space-y-4">
                                        {/* Brain Scan Card */}
                                        <div className="w-full aspect-4/3 bg-linear-to-br from-red-500/20 to-gray-900 rounded-2xl border border-red-500/30 overflow-hidden relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Brain Shape (CSS) */}
                                                <div className="w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
                                                <div className="w-16 h-20 rounded-full border-2 border-white/20"></div>
                                                <div className="absolute w-8 h-8 rounded-full border border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                                            </div>
                                            <div className="absolute bottom-2 left-2 text-[8px] text-white/40 font-mono">
                                                ID: 29384 <br /> MOD: MRI <br /> AXIAL VIEW
                                            </div>
                                        </div>

                                        {/* Alert Bubble */}
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                            </div>
                                            <div className="text-[10px] text-white/80 leading-tight">
                                                Code Stroke emergency <br /> activated
                                            </div>
                                        </div>
                                    </div>
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#020d1a] rounded-b-2xl"></div>
                                </div>

                                {/* 2. Glowing Globe (Main Background visual) */}
                                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full border border-teal-500/20 bg-teal-500/5 shadow-[0_0_100px_rgba(20,184,166,0.1)] overflow-hidden z-10">
                                    {/* Globe Video Background */}
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/videos/futuristic-healthcare.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#14b8a620_0%,transparent_70%)] animate-pulse"></div>

                                    {/* Inner Health Professional Circle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-white/5 border border-white/20 backdrop-blur-[2px] overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                            {/* Abstract representation of hands/person */}
                                            <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                                            <div className="w-20 h-24 rounded-full border border-white/30 rotate-12"></div>
                                            <div className="w-20 h-24 rounded-full border border-white/30 -rotate-12 translate-x-4"></div>
                                        </div>
                                    </div>
                                    {/* Globe dots/grid */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] bg-size-[15px_15px]"></div>
                                </div>

                                {/* 3. Lung Scan (Overlap center-bottom) */}
                                <div className="absolute bottom-[10%] left-[20%] w-[240px] h-[240px] rounded-full bg-[#0a111a] border-2 border-white/20 shadow-2xl z-30 overflow-hidden flex items-center justify-center">
                                    <div className="w-[80%] h-[80%] rounded-full border border-teal-500/40 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32 flex justify-between">
                                            <div className="w-10 h-full rounded-[40%] bg-teal-500/10 border border-teal-500/30"></div>
                                            <div className="w-10 h-full rounded-[40%] bg-teal-500/10 border border-teal-500/30"></div>
                                        </div>
                                        {/* Action Box */}
                                        <div className="absolute -bottom-2 -right-4 bg-[#142233] border border-white/20 p-2 rounded-lg text-[9px] text-white/70 max-w-[120px] shadow-xl">
                                            <div className="flex items-center gap-1 mb-1">
                                                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-bold">
                                                    q
                                                </div>
                                                <span className="font-bold text-white">Action</span>
                                            </div>
                                            Brock Score 4.4. Follow-up CT in 6 Months.
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Chest X-ray analysis (Bottom Right) */}
                                <div className="absolute bottom-[5%] right-0 w-[280px] h-[220px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl z-40 p-1">
                                    <div className="w-full h-[85%] bg-black/40 rounded-xl overflow-hidden relative">
                                        {/* Xray Representation */}
                                        <div className="absolute inset-0 p-4 opacity-70">
                                            <div className="w-full h-full border-x-2 border-white/20 rounded-[40%] relative">
                                                {/* AI Heatmap */}
                                                <div className="absolute top-1/4 right-1/4 w-4 h-12 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 blur-sm rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-2 left-2 flex gap-2">
                                            <div className="px-2 py-0.5 bg-red-500/20 text-red-500 text-[8px] rounded-full border border-red-500/40 flex items-center gap-1">
                                                <div className="w-1 h-1 rounded-full bg-red-500"></div>
                                                Tuberculosis | 0.94
                                            </div>
                                            <div className="px-2 py-0.5 bg-white/10 text-white text-[8px] rounded-full border border-white/20 flex items-center gap-1">
                                                <div className="w-1 h-1 rounded-full bg-white"></div>
                                                Sputum collection
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connecting Decorator Lines (The circular rings in the background) */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] border border-white/5 rounded-full scale-150"></div>
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/5 rounded-full scale-150"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
