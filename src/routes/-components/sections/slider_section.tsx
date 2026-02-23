import { cn } from "@/lib/utils"
import { ChevronsLeftRight } from "lucide-react"
import { useState } from "react"

interface Slide {
    id: number
    title: string
    shortLine: string
    hoverTitle: string
    hoverContent: string
    keyCapabilities: string[]
    useCases: string[]
    ctaText: string
    visualType: "imaging" | "clinical" | "digital"
    bg: string
    image: {
        active: string
        inactive: string
    }
}

interface SliderSectionProps {
    slides: Slide[]
}

export default function SliderSection({ slides }: SliderSectionProps) {
    const [activeId, setActiveId] = useState<number | null>(slides[0]?.id || 1)

    return (
        <div className="bg-background py-6 lg:py-12 border-t border-white/5 relative overflow-hidden">
            {/* Animated Background Highlights */}
            <div className="absolute top-0 right-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-light text-white text-center tracking-tight">
                    Transforming Healthcare <span className="text-teal-400">Pathways with Technology</span>
                </h2>
            </div>
            <div className="relative z-10 mt-16 p-3 flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-4">
                {slides.map((card) => {
                    const isActive = activeId === card.id
                    return (
                        <div
                            key={card.id}
                            onClick={() => setActiveId(card.id)}
                            onMouseEnter={() => setActiveId(card.id)}
                            onMouseLeave={() => setActiveId(card.id)}
                            className={cn(
                                "relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                                isActive
                                    ? "h-[500px] md:h-[480px] flex-[4] bg-linear-to-r"
                                    : "h-20 md:h-[480px] bg-[#00827f] flex-1 md:flex-[2]",
                                card.bg,
                            )}
                        >
                            {!isActive && (
                                <span className="z-10 absolute top-4 right-4 bg-white text-[#00827f] rounded-full p-2 size-10">
                                    <ChevronsLeftRight className="-rotate-45" />
                                </span>
                            )}
                            <div
                                className={cn(
                                    "relative z-10 flex h-full flex-col justify-between text-white transition-all duration-500",
                                    isActive ? "p-8 pt-12" : "p-4 md:p-8 md:pt-12",
                                )}
                            >
                                <h3 className="text-2xl font-semibold leading-tight">{card.title}</h3>
                                <div
                                    className={cn(
                                        "mt-4 max-w-md text-sm text-gray-200/80 leading-relaxed transition-all duration-300",
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                    )}
                                >
                                    {card.hoverContent}
                                </div>
                                <div
                                    className={cn(
                                        "mt-4",
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                    )}
                                >
                                    <div className="mb-4">
                                        <h4 className="text-[10px] font-bold text-teal-400 mb-1.5 uppercase tracking-widest opacity-80">
                                            Key Features
                                        </h4>
                                        <ul className="text-[12px] text-gray-200/90 space-y-1">
                                            {card.keyCapabilities.slice(0, 4).map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500 shadow-[0_0_5px_rgba(20,184,166,0.4)]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-2">
                                        <h4 className="text-[10px] font-bold text-teal-400 mb-0.5 uppercase tracking-widest opacity-80">
                                            Use Cases
                                        </h4>
                                        <p className="text-[12px] text-gray-200/90 leading-relaxed">
                                            {Array.isArray(card.useCases) ? card.useCases.join(", ") : card.useCases}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className={cn(
                                        "mt-4 w-fit rounded-full border border-teal-400/50 bg-teal-400/5 px-6 py-2 text-sm font-medium text-teal-400 transition-all duration-300 hover:bg-teal-400 hover:text-white",
                                        isActive ? "opacity-100" : "opacity-0",
                                    )}
                                >
                                    {card.ctaText || "See How"}
                                </button>
                            </div>
                            <img
                                src={isActive ? card.image.active : card.image.inactive}
                                alt={card.title}
                                className={cn(
                                    "absolute inset-0 h-full w-full object-cover transition-all duration-500",
                                    isActive ? "opacity-100 z-0" : "opacity-40 md:opacity-100",
                                    !isActive && "hidden md:block",
                                )}
                            />

                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
