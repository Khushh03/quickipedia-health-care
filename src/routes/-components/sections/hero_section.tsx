export default function HeroSection() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-[#0f2942] overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl font-weight-400 text-white leading-tight">
                                Innovating
                                <br />
                                Healthcare with
                                <br />
                                AI-Powered Technology
                            </h1>

                            {/* CTA Button */}
                            <div>
                                <button className="px-8 py-3 bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-medium rounded-full transition-all duration-300">
                                    Talk to Our Experts
                                </button>
                            </div>

                            {/* Statistics */}
                            <div className="flex gap-8 pt-8">
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-weight-400 text-white">40M+</div>
                                    <div className="text-sm text-gray-400">
                                        Lives impacted to
                                        <br />
                                        date
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-weight-400 text-white">105+</div>
                                    <div className="text-sm text-gray-400">
                                        Countries via
                                        <br />
                                        5200+ sites
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-weight-400 text-white">1B+</div>
                                    <div className="text-sm text-gray-400">
                                        Training
                                        <br />
                                        datasets
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-400/30 to-transparent"></div>

                        {/* Right Side - Medical Images */}
                        <div className="relative hidden md:block h-[500px] pl-12">
                            {/* Dark Overlay Background */}
                            <div className="absolute inset-0 bg-[#0a1f2e] opacity-60 rounded-lg"></div>

                            {/* Globe Video Background */}
                            <video
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full border-2 border-teal-400/30 object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/videos/healthcare-globe.mp4" type="video/mp4" />
                                {/* Fallback for browsers that don't support video */}
                                <div className="w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full"></div>
                            </video>

                            {/* Medical Image Cards - Positioned to match the design */}
                            {/* Top Left - Red scan */}
                            <div className="absolute top-8 left-4 w-40 h-32 bg-gradient-to-br from-red-900 to-red-700 rounded-xl border border-red-500/30 shadow-xl overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full border-4 border-red-300/50"></div>
                                </div>
                            </div>

                            {/* Top Right - Eye scan */}
                            <div className="absolute top-0 right-8 w-48 h-40 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-xl border border-teal-400/50 shadow-xl overflow-hidden backdrop-blur-sm">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border-4 border-teal-300/50"></div>
                                </div>
                            </div>

                            {/* Middle Left - Lung scan */}
                            <div className="absolute top-36 left-8 w-44 h-36 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl border border-blue-400/30 shadow-xl overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full border-4 border-blue-300/50"></div>
                                </div>
                            </div>

                            {/* Bottom Right - Chest X-ray */}
                            <div className="absolute bottom-24 right-4 w-40 h-36 bg-gradient-to-br from-purple-900 to-purple-700 rounded-xl border border-purple-400/30 shadow-xl overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-16 h-24 rounded-lg border-4 border-yellow-300/50"></div>
                                </div>
                            </div>

                            {/* Info Badge */}
                            <div className="absolute bottom-8 left-12 bg-[#1a3a52] text-white text-xs px-3 py-1 rounded-full border border-teal-400/30">
                                AI Healthcare Platform
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
