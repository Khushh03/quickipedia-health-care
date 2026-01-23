import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

// Keeping the interface for compatibility, but we'll use specific internal data for this design
interface SliderSectionProps {
    slides?: any[]
}

export default function SliderSection({ slides }: SliderSectionProps) {
    const [activeId, setActiveId] = useState(2) // Default to the 3rd one (Stroke Care) as in the image

    const cards = [
        {
            id: 0,
            title: "Advancing Public Health Access for Tuberculosis, Pediatric TB & Beyond",
            color: "bg-[#00897b]", // Teal
            textColor: "text-white",
            description: "",
            visual: "tb",
            iconColor: "text-white",
        },
        {
            id: 1,
            title: "Accelerating Early Detection & Management of Lung Cancer",
            color: "bg-[#00796b]", // Darker Teal
            textColor: "text-white",
            description: "",
            visual: "lung",
            iconColor: "text-white",
        },
        {
            id: 2,
            title: "Enabling Timely Intervention in Stroke Care",
            color: "bg-[#dcedc8]", // Light Green/Beige
            textColor: "text-[#1a3a52]", // Dark Blue text
            description:
                "An AI-powered care coordination suite to enable patient triage, ensuring seamless clinical coordination with real-time communication. It supports Hub & Spoke networks to facilitate timely stroke interventions by clinicians, anywhere.",
            visual: "stroke",
            button: "See How",
            iconColor: "text-[#1a3a52]",
        },
    ]

    return (
        <section className="relative py-20 bg-[#0a1f2e] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-medium text-[#4db6ac]">Transforming Healthcare Pathways with AI</h2>
                </div>

                {/* Accordion Slider */}
                <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => setActiveId(card.id)}
                            onMouseEnter={() => setActiveId(card.id)}
                            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
                                activeId === card.id ? "lg:flex-[3] h-full" : "lg:flex-[1] h-[150px] lg:h-full"
                            } ${card.color}`}
                        >
                            <div className="relative h-full p-8 flex flex-col">
                                {/* Top Icon */}
                                <div className="absolute top-6 right-6 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                    <ArrowUpRight className={`w-5 h-5 ${card.iconColor}`} />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Title - Adjust size based on active state */}
                                    <h3
                                        className={`font-medium mb-4 transition-all duration-300 ${
                                            card.textColor
                                        } ${activeId === card.id ? "text-3xl md:text-4xl max-w-2xl" : "text-xl md:text-2xl line-clamp-3"}`}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Description & Button - Only visible when active */}
                                    <div
                                        className={`transition-all duration-500 overflow-hidden ${
                                            activeId === card.id ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                                        }`}
                                    >
                                        {card.description && (
                                            <p
                                                className={`text-lg mb-8 max-w-xl leading-relaxed ${card.textColor === "text-white" ? "text-white/90" : "text-[#1a3a52]/80"}`}
                                            >
                                                {card.description}
                                            </p>
                                        )}

                                        {card.button && (
                                            <button className="px-6 py-2 border border-[#1a3a52] text-[#1a3a52] rounded-full hover:bg-[#1a3a52] hover:text-white transition-colors duration-300">
                                                {card.button}
                                            </button>
                                        )}
                                    </div>

                                    {/* Visual Elements placed absolutely at bottom/right */}
                                    <div className="mt-auto relative h-full w-full">
                                        {activeId === card.id && (
                                            <div className="absolute bottom-0 right-0 w-full h-[300px] pointer-events-none">
                                                {card.visual === "tb" && (
                                                    <div className="absolute bottom-0 right-0 w-64 h-80 bg-white/10 rounded-t-3xl border border-white/20 backdrop-blur-sm p-4">
                                                        <div className="w-full h-full border border-dashed border-white/30 rounded-xl relative overflow-hidden">
                                                            {/* Placeholder for X-ray */}
                                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-teal-900/40"></div>
                                                            <div className="absolute top-1/4 left-1/4 w-12 h-16 border-2 border-red-400 rounded-full"></div>
                                                            <div className="absolute top-10 right-4 bg-white/90 text-black text-xs px-2 py-0.5 rounded shadow">
                                                                ABNORMAL
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {card.visual === "lung" && (
                                                    <div className="absolute bottom-0 right-0 w-full h-64 flex items-end justify-end">
                                                        <div className="w-80 h-48 bg-emerald-800/20 backdrop-blur-md rounded-xl border border-white/20 p-4 relative">
                                                            {/* Flowchart circles */}
                                                            <div className="flex items-center justify-between mt-8 relative z-10">
                                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-800 font-bold text-xs">
                                                                    VISIT 1
                                                                </div>
                                                                <div className="h-0.5 bg-white flex-1 mx-2"></div>
                                                                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                                                    CT
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-2 left-2 text-white/80 text-xs">
                                                                Patient Timeline
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {card.visual === "stroke" && (
                                                    <div className="absolute bottom-[-20px] right-[-20px] w-[400px] h-[400px]">
                                                        {/* Brain Scan Circle */}
                                                        <div className="absolute top-0 right-10 w-48 h-48 bg-black/80 rounded-full border-4 border-white overflow-hidden shadow-2xl z-20">
                                                            {/* Stylized Brain */}
                                                            <div className="w-full h-full bg-gray-800 relative opacity-80">
                                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-gray-600 rounded-full blur-sm"></div>
                                                                {/* Stroke Area */}
                                                                <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-red-500/60 rounded-full blur-md animate-pulse"></div>
                                                                <svg
                                                                    className="absolute inset-0 w-full h-full"
                                                                    viewBox="0 0 100 100"
                                                                >
                                                                    <path
                                                                        d="M30,30 Q50,10 70,30 T90,60"
                                                                        fill="none"
                                                                        stroke="red"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/* Background Graphic */}
                                                        <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end opacity-20">
                                                            {/* Silhouette placeholder */}
                                                            <div className="w-64 h-64 bg-black rounded-tl-3xl"></div>
                                                        </div>
                                                        <div className="absolute bottom-20 right-40 bg-white/90 px-3 py-1 rounded text-xs font-bold text-red-600 z-30">
                                                            CODE STROKE
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
