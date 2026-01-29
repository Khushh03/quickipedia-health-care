import { Link } from "@tanstack/react-router"
// Standard button tags will be used instead of UI Button component

export default function BlogSection() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Social Feed */}
                    <div className="lg:col-span-5 h-[600px] bg-white/2 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-md">
                        <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-teal-500/30 bg-background flex items-center justify-center shadow-inner">
                                    <span className="text-teal-400 font-light text-2xl leading-none">Q</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold leading-tight text-white">
                                        Quickipedia IT Innovation
                                    </h3>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                        <span>@Quickipedia_Tech</span>
                                        <span>•</span>
                                        <span>Just now</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-muted-foreground hover:text-foreground">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-foreground">
                                    Digitizing healthcare operations end-to-end. Our HIS & EMR ecosystems are built for
                                    environments where precision, reliability, and systems thinking are critical.
                                </p>
                                <p className="text-sm leading-relaxed text-foreground">
                                    Innovating Radiology: AI-powered medical imaging solutions enhancing accuracy in
                                    diagnostics with CAD and automated abnormality detection.
                                </p>
                                <p className="text-sm leading-relaxed text-foreground">
                                    Partnering for impact in{" "}
                                    <span className="text-primary font-semibold">India, Nepal, and Canada</span>.
                                    Building the technology backbone of modern healthcare.
                                </p>

                                <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-linear-to-br from-muted/50 to-background p-1">
                                    <img
                                        src="/assets/blog/davos-graphic.png"
                                        alt="Global Health Impact"
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="p-4 space-y-1">
                                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                                            Global Healthcare Systems
                                        </h4>
                                        <p className="text-sm font-bold">
                                            Building Secure & Scalable Healthcare grade Technology
                                        </p>
                                        <div className="flex items-center gap-4 pt-2">
                                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                                    <line x1="16" x2="16" y1="2" y2="6" />
                                                    <line x1="8" x2="8" y1="2" y2="6" />
                                                    <line x1="3" x2="21" y1="10" y2="10" />
                                                </svg>
                                                HIPAA Compliant
                                            </div>
                                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                Global Operations
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual continuation hint */}
                            <div className="pt-4 border-t border-border/50 opacity-50">
                                <p className="text-xs text-muted-foreground text-center italic">
                                    Scroll for technical insights...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Featured Blog Story */}
                    <div className="lg:col-span-7 relative h-[600px] rounded-2xl overflow-hidden group shadow-xl">
                        {/* Background Image with Zoom effect */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            <img
                                src="/assets/blog/global-healthcare-bg.png"
                                alt="Quickipedia Global Impact"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 to-transparent" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 space-y-6">
                            <div className="space-y-4 max-w-lg">
                                <h4 className="text-white/80 font-medium tracking-wide uppercase text-sm border-b border-white/20 pb-2 inline-block font-sans">
                                    The Technical Backbone of Modern Healthcare
                                </h4>

                                <div className="space-y-2">
                                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                                        100+ Projects
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                                        delivered across Hospitals, Diagnostics & Healthcare Enterprises. Millions of
                                        medical records processed securely with our AI-powered intelligent systems.
                                    </p>
                                </div>
                            </div>

                            <Link to="/blog/silicosis">
                                <button className="rounded-full px-8 py-4 border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-lg group/btn flex items-center justify-center font-medium w-full sm:w-auto">
                                    Read The Full Story
                                    <svg
                                        className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: hsl(var(--muted));
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: hsl(var(--muted-foreground) / 0.5);
                }
            `,
                }}
            />
        </section>
    )
}
