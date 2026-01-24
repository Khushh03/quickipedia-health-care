import { createFileRoute, Link } from "@tanstack/react-router"
import {
    Activity,
    Heart,
    Layers,
    Settings,
    Microscope,
    Stethoscope,
    ShieldCheck,
    Zap,
    Target,
    CheckCircle2,
    Mail,
    ArrowRight,
} from "lucide-react"
import Navbar from "./-components/navbar/navbar"
import Footer from "./-components/footer/footer"

export const Route = createFileRoute("/solutions")({
    component: SolutionsComponent,
})

function SolutionsComponent() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans relative antialiased">
                {/* Global Background Image */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
                    <img src="/solutions-hero-bg.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Subtle Background Glows */}
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-orange-500/5 blur-[100px] rounded-full"></div>
                </div>

                <main className="relative z-10">
                    {/* Hero Section - Healthcare Domains */}
                    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                        {/* Hero Background Image & Overlays */}
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img
                                src="/solutions-hero-bg.png"
                                alt="Medical Technology Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-slate-950/80 to-slate-950"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-teal-500)_0%,transparent_70%)] opacity-20"></div>
                        </div>
                        <div className="max-w-7xl mx-auto space-y-16">
                            <div className="text-center space-y-6 max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-normal tracking-wide animate-fade-in">
                                    <Activity className="w-4 h-4" /> Domain Expertise
                                </div>
                                <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-tight">
                                    Healthcare Domains <br />
                                    <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                        We Specialize In
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-400 font-normal leading-relaxed">
                                    Deep vertical expertise across critical medical sectors, delivering technology that
                                    understands clinical reality.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Radiology & Imaging",
                                        icon: <Layers />,
                                        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000",
                                        desc: "Advanced PACS/RIS systems, AI imaging workflows, and diagnostic viewer integrations.",
                                    },
                                    {
                                        title: "Cardiology",
                                        icon: <Heart />,
                                        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2000",
                                        desc: "ECG analysis platforms, cardiac monitoring systems, and structural heart data management.",
                                    },
                                    {
                                        title: "Pathology & Labs",
                                        icon: <Microscope />,
                                        image: "https://images.unsplash.com/photo-1579152276503-4556488a0984?auto=format&fit=crop&q=80&w=2000",
                                        desc: "LIS (Laboratory Information Systems), sample tracking, and automated reporting engines.",
                                    },
                                    {
                                        title: "Hospital Operations",
                                        icon: <Activity />,
                                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
                                        desc: "HIS/EMR integration, resource planning, and real-time operational dashboarding.",
                                    },
                                    {
                                        title: "Pharma & Clinical Research",
                                        icon: <Settings />,
                                        image: "https://images.unsplash.com/photo-1584017947472-835698b6710b?auto=format&fit=crop&q=80&w=2000",
                                        desc: "EDC (Electronic Data Capture), clinical trial management, and R&D data platforms.",
                                    },
                                    {
                                        title: "Primary & Preventive Care",
                                        icon: <Stethoscope />,
                                        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2000",
                                        desc: "Telehealth systems, population health analytics, and chronic disease management.",
                                    },
                                ].map((domain) => (
                                    <div
                                        key={domain.title}
                                        className="group h-[320px] bg-slate-950 border border-white/10 rounded-3xl hover:border-teal-500/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-end"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={domain.image}
                                                alt={domain.title}
                                                className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 p-8 space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                {domain.icon}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-normal text-white group-hover:text-teal-400 transition-colors">
                                                    {domain.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm leading-relaxed font-normal opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                                                    {domain.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Impact & Credibility Bar */}
                    <section className="py-12 bg-white/5 border-y border-white/5 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                                {[
                                    {
                                        label: "Projects Delivered",
                                        value: "100+",
                                        sub: "Across Healthcare Hubs",
                                        icon: <CheckCircle2 className="w-5 h-5" />,
                                    },
                                    {
                                        label: "Geographies",
                                        value: "Global",
                                        sub: "India, Nepal & Canada",
                                        icon: <Globe className="w-5 h-5" />,
                                    },
                                    {
                                        label: "Data Scalability",
                                        value: "Millions",
                                        sub: "Medical Records Secured",
                                        icon: <ShieldCheck className="w-5 h-5" />,
                                    },
                                    {
                                        label: "Live Deployment",
                                        value: "In-Use",
                                        sub: "AI Models in Clinics",
                                        icon: <Zap className="w-5 h-5" />,
                                    },
                                ].map((stat) => (
                                    <div key={stat.label} className="space-y-2">
                                        <div className="flex items-center justify-center gap-2 text-teal-400 mb-2">
                                            {stat.icon}
                                            <span className="text-xs font-normal uppercase tracking-widest opacity-60">
                                                {stat.label}
                                            </span>
                                        </div>
                                        <div className="text-4xl md:text-5xl font-normal text-white">{stat.value}</div>
                                        <div className="text-slate-400 text-xs font-normal">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Why Quickipedia for Healthcare */}
                    <section className="py-32 px-4 bg-slate-900/20">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-linear-to-r from-teal-500/20 to-orange-500/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160611-259c0df1f82d?auto=format&fit=crop&q=80&w=2000"
                                        alt="Engineered for Trust"
                                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                                        <p className="text-sm font-normal text-teal-400 mb-1">Our North Star</p>
                                        <p className="text-lg font-normal italic">
                                            "Technology directly impacts clinical outcomes. Every line of code is a part
                                            of a patient's journey."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-normal">Why Quickipedia for Healthcare</h2>
                                    <h3 className="text-2xl font-normal text-orange-400">
                                        Built for Healthcare. Engineered for Trust.
                                    </h3>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed font-normal">
                                    We work exclusively in medical and healthcare technology, with deep understanding of
                                    clinical workflows, regulatory requirements, patient data privacy, and
                                    interoperability standards.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        {
                                            t: "Healthcare-only focus",
                                            d: "Zero dilution of domain expertise. We speak healthcare.",
                                        },
                                        {
                                            t: "Strong clinical domain knowledge",
                                            d: "Systems built by those who understand medical logic.",
                                        },
                                        {
                                            t: "Secure & compliant systems",
                                            d: "HIPAA, GDPR, and localized medical data standards.",
                                        },
                                        {
                                            t: "Scalable long-term solutions",
                                            d: "Architecture that grows from pilot to multi-branch.",
                                        },
                                    ].map((diff) => (
                                        <div
                                            key={diff.t}
                                            className="flex gap-4 p-5 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors"
                                        >
                                            <div className="mt-1">
                                                <Target className="w-5 h-5 text-orange-500" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-normal text-white">{diff.t}</h4>
                                                <p className="text-slate-400 text-sm font-normal">{diff.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Development Approach Section */}
                    <section className="py-32 px-4 bg-slate-950">
                        <div className="max-w-7xl mx-auto space-y-20">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-normal">Development Approach</h2>
                                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-normal">
                                    A structured lifecycle designed specifically for the higher stakes of medical
                                    technology.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Connector Line */}
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden lg:block -translate-y-1/2"></div>

                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10 text-center">
                                    {[
                                        {
                                            n: "1",
                                            t: "Clinical Problem Understanding",
                                            d: "Deep dive into physician and patient workflows.",
                                        },
                                        {
                                            n: "2",
                                            t: "Solution Architecture & Validation",
                                            d: "Prototyping with clinical oversight.",
                                        },
                                        {
                                            n: "3",
                                            t: "AI Model & Software Development",
                                            d: "High-precision engineering of core engines.",
                                        },
                                        {
                                            n: "4",
                                            t: "Clinical Testing & Deployment",
                                            d: "Verification in live clinical environments.",
                                        },
                                        {
                                            n: "5",
                                            t: "Scale, Support & Optimize",
                                            d: "Long-term monitoring and system evolution.",
                                        },
                                    ].map((step) => (
                                        <div key={step.n} className="space-y-6 group">
                                            <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-xl font-normal mx-auto group-hover:border-teal-500 group-hover:bg-teal-500/10 transition-all duration-300">
                                                {step.n}
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-lg font-normal text-slate-100 px-4">{step.t}</h4>
                                                <p className="text-slate-400 text-sm font-normal leading-relaxed">
                                                    {step.d}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-24 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative p-12 md:p-20 rounded-[40px] overflow-hidden group">
                                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-400"></div>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] -mr-48 -mt-48 transition-transform group-hover:scale-125 duration-1000"></div>
                                <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-950/20 blur-[80px] -ml-36 -mb-36"></div>

                                <div className="relative z-10 text-center space-y-10">
                                    <h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight leading-tight">
                                        Ready to Build Your <br />
                                        Healthcare Vision?
                                    </h2>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-normal">
                                        Partner with a team that understands the gravity of medical tech and the
                                        precision it demands.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Link
                                            to="/contact-us"
                                            className="px-10 py-5 bg-white text-orange-600 rounded-full font-normal text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
                                        >
                                            <Mail className="w-5 h-5" /> Schedule a Consultation
                                        </Link>
                                        <Link
                                            to="/about-us"
                                            className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-normal text-lg transition-all hover:bg-white/10 flex items-center gap-3 decoration-transparent"
                                        >
                                            Learn About Us <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}

const Globe = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M2 12h20" />
    </svg>
)
