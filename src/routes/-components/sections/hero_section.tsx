import { ChevronRight, Zap, ActivitySquare } from "lucide-react"
import { useState } from "react"

// function RouteComponent() {
//   return <div>Hello "/components--/sections/hero_section"!</div>
// }

export default function HeroSection() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)

    const slides = [
        {
            id: 0,
            title: "AI-Powered Medical Imaging",
            shortLine: "Enhancing accuracy in radiology and diagnostics.",
            hoverTitle: "AI Solutions for Faster & More Accurate Diagnoses",
            hoverContent:
                "We develop intelligent AI models that assist radiologists and clinicians in detecting abnormalities from X-ray, CT, MRI, and ultrasound images with high precision.",
        },
    ]

    const currentSlide = slides[activeSlide]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-6xl font-bold text-white leading-tight">
                                    Innovating Healthcare with
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2">
                                        Modern Technology
                                    </span>
                                </h1>
                            </div>

                            {/* Subheading */}
                            <p className="text-xl text-gray-300 font-medium">
                                Advanced AI, Medical Software & Digital Solutions for Hospitals, Diagnostics &
                                Healthcare Enterprises
                            </p>

                            {/* Description */}
                            <p className="text-lg text-gray-400 leading-relaxed">
                                We design, build, and deploy cutting-edge healthcare technology — from AI-powered
                                diagnostics to hospital management systems — enabling better clinical decisions,
                                operational efficiency, and improved patient outcomes.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start">
                                    <Zap size={20} />
                                    Explore Our Healthcare Solutions
                                </button>
                                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start">
                                    Talk to Our Experts
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Visual Element */}
                        <div className="relative hidden md:block">
                            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-400/30 backdrop-blur-sm p-8 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                                <div className="relative z-10 text-center space-y-4">
                                    <ActivitySquare size={80} className="text-cyan-400 mx-auto animate-pulse" />
                                    <p className="text-gray-300 text-lg font-medium">
                                        Advanced Healthcare Technology Platform
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider Section - AI-Powered Medical Imaging */}
            <section className="relative py-20 bg-slate-900 border-t border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Slider Content */}
                        <div className="space-y-8">
                            <div className="inline-block">
                                <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">
                                    Slider Section - Slide 1
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-white">{currentSlide.title}</h2>
                                <p className="text-xl text-gray-400">{currentSlide.shortLine}</p>
                            </div>

                            {/* Hover Content Box */}
                            <div
                                onMouseEnter={() => setHoveredSlide(activeSlide)}
                                onMouseLeave={() => setHoveredSlide(null)}
                                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                    hoveredSlide === activeSlide
                                        ? "border-cyan-400 bg-cyan-400/10"
                                        : "border-slate-700 bg-slate-800/50"
                                }`}
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">{currentSlide.hoverTitle}</h3>
                                <p className="text-gray-300 leading-relaxed">{currentSlide.hoverContent}</p>
                            </div>

                            <div className="flex gap-3">
                                <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right - Visual Representation */}
                        <div className="relative">
                            <div className="relative w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-400/30 overflow-hidden p-8 flex items-center justify-center">
                                {/* Medical imaging visualization */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
                                <div className="relative z-10 space-y-6 w-full">
                                    <div className="flex gap-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="h-32 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-lg border border-cyan-400/50 backdrop-blur-sm"
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center text-cyan-400 text-sm font-medium">
                                        Medical Imaging Analysis
                                    </div>
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
                                    activeSlide === index ? "bg-cyan-400 w-8" : "bg-slate-600 hover:bg-slate-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
