import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface SliderSectionProps {
    slides: Array<{
        id: number
        title: string
        shortLine: string
        hoverTitle: string
        hoverContent: string
        keyCapabilities: string[]
        useCases: string
        ctaText: string
        visualType: "imaging" | "clinical" | "digital"
    }>
}

export default function SliderSection({ slides }: SliderSectionProps) {
    const [activeSlide, setActiveSlide] = useState(0)
    const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)

    const currentSlide = slides[activeSlide]

    return (
        <section className="relative py-20 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Slider Content */}
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                                Slider Section - Slide {activeSlide + 1}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{currentSlide.title}</h2>
                            <p className="text-xl text-muted-foreground">{currentSlide.shortLine}</p>
                        </div>

                        {/* Hover Content Box */}
                        <div
                            onMouseEnter={() => setHoveredSlide(activeSlide)}
                            onMouseLeave={() => setHoveredSlide(null)}
                            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                hoveredSlide === activeSlide
                                    ? "border-primary bg-primary/10"
                                    : "border-muted bg-muted/50"
                            }`}
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-3">{currentSlide.hoverTitle}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{currentSlide.hoverContent}</p>

                            {/* Key Capabilities */}
                            <div className="mt-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Key Capabilities:</h4>
                                <ul className="space-y-1">
                                    {currentSlide.keyCapabilities.map((capability, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Use Cases */}
                            <div className="mt-4">
                                <h4 className="text-sm font-semibold text-primary mb-2">Use Cases:</h4>
                                <p className="text-sm text-muted-foreground">{currentSlide.useCases}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                                {currentSlide.ctaText}
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right - Visual Representation */}
                    <div className="relative">
                        <div className="relative w-full h-80 bg-gradient-to-br from-muted to-background rounded-2xl border border-primary/30 overflow-hidden p-8 flex items-center justify-center">
                            {/* Dynamic visualization based on slide type */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            <div className="relative z-10 space-y-6 w-full">
                                {currentSlide.visualType === "imaging" && (
                                    <>
                                        <div className="flex gap-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-32 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-lg border border-primary/50 backdrop-blur-sm"
                                                />
                                            ))}
                                        </div>
                                        <div className="text-center text-primary text-sm font-medium">
                                            Medical Imaging Analysis
                                        </div>
                                    </>
                                )}
                                {currentSlide.visualType === "clinical" && (
                                    <>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[...Array(6)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-20 bg-gradient-to-br from-secondary/40 to-accent/40 rounded-lg border border-secondary/50 backdrop-blur-sm"
                                                />
                                            ))}
                                        </div>
                                        <div className="text-center text-secondary text-sm font-medium">
                                            Clinical Systems Dashboard
                                        </div>
                                    </>
                                )}
                                {currentSlide.visualType === "digital" && (
                                    <>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="h-24 w-16 bg-gradient-to-br from-accent/50 to-primary/40 rounded-lg border border-accent/50 backdrop-blur-sm" />
                                            <div className="h-24 w-16 bg-gradient-to-br from-primary/50 to-secondary/40 rounded-lg border border-primary/50 backdrop-blur-sm" />
                                            <div className="h-24 w-16 bg-gradient-to-br from-secondary/50 to-accent/40 rounded-lg border border-secondary/50 backdrop-blur-sm" />
                                        </div>
                                        <div className="text-center text-accent text-sm font-medium">
                                            Connected Care Platform
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSlide === index ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
