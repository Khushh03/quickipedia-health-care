import { createFileRoute } from "@tanstack/react-router"
import { CheckCircle, ShieldCheck, Zap, Activity, Globe, Users, Target, Rocket, Mail } from "lucide-react"
import Navbar from "./-components/navbar/navbar"
import Footer from "./-components/footer/footer"

export const Route = createFileRoute("/about-us")({
    component: AboutUsComponent,
})

function AboutUsComponent() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans relative">
                {/* Global Background Image */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
                    <img src="/about-hero-bg.png" alt="" className="w-full h-full object-cover" />
                </div>
                <main className="relative z-10">
                    {/* Hero Section */}
                    <section className="relative pt-32 pb-48 px-4 text-center overflow-hidden border-b border-slate-800/50">
                        {/* Background Image & Overlays */}
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img
                                src="/about-hero-bg.png"
                                alt="Medical Technology Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-slate-950/80 to-slate-950"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-teal-500)_0%,transparent_70%)] opacity-20"></div>
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold tracking-wide">
                                <ShieldCheck className="w-4 h-4" /> About Quickipedia
                            </div>
                            <h1 className="text-5xl md:text-7xl font-weight-400 tracking-tight leading-tight">
                                Building the Technology Backbone of <br />
                                <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                    Modern Healthcare
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-weight-400">
                                At Quickipedia, we build technology for environments where precision, reliability, and
                                systems thinking are not optional — they are critical.
                            </p>
                        </div>
                    </section>

                    {/* Mission Intro */}
                    <section className="py-24 px-4 bg-slate-950">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <p className="text-lg text-slate-300 leading-relaxed italic border-l-4 border-orange-500 pl-8 text-left">
                                "We are a technology company focused exclusively on Medical & Healthcare Innovation. Our
                                work sits at the intersection of software engineering, healthcare operations, and
                                scalable system design."
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed text-left">
                                From hospitals and diagnostic labs to medical device companies and healthcare platforms,
                                we design and deliver intelligent systems that simplify complexity, improve control, and
                                strengthen decision-making across healthcare operations.
                            </p>
                            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 text-center">
                                <span className="text-orange-400 font-weight-400 text-xl uppercase tracking-widest">
                                    We do not build generic IT solutions. We build healthcare-grade technology.
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Our Focus */}
                    <section className="py-24 px-4 bg-slate-900/30">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-weight-400">Our Focus</h2>
                                <p className="text-slate-400 text-lg font-weight-400">
                                    Healthcare is not just another industry. It is an ecosystem where technology
                                    directly impacts:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Patient Safety",
                                        "Operational Efficiency",
                                        "Regulatory Compliance",
                                        "Business Sustainability",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50"
                                        >
                                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                            <span className="font-weight-400 text-slate-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 bg-linear-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-r-2xl">
                                    <h3 className="text-xl font-weight-400 text-orange-400 mb-2">Long-term Decision</h3>
                                    <p className="text-2xl font-weight-400 text-white leading-tight">
                                        Quickipedia works only in the Medical & Healthcare sector.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-800/30 p-10 rounded-3xl border border-slate-700/50 space-y-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl -mr-16 -mt-16"></div>
                                <h4 className="text-xl font-weight-400 text-teal-400">Deep Domain Understanding</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Clinical Workflows",
                                        "Diagnostic Operations",
                                        "Medical Device Lifecycles",
                                        "Compliance Requirements",
                                        "Multi-branch Healthcare Management",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-slate-300 font-weight-400"
                                        >
                                            <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-slate-400 pt-4 border-t border-slate-700/50 italic">
                                    "Systems that are practical, reliable, and built for real-world healthcare use."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Who We Work With */}
                    <section className="py-24 px-4 bg-slate-950">
                        <div className="max-w-6xl mx-auto space-y-16">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-weight-400">Who We Work With</h2>
                                <p className="text-slate-400 text-lg font-weight-400">
                                    We partner with organizations across the healthcare ecosystem.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {[
                                    { title: "Hospitals & Multi-speciality Clinics", icon: <Users /> },
                                    { title: "Diagnostic & Pathology Laboratories", icon: <Activity /> },
                                    { title: "Medical Device Manufacturers & Distributors", icon: <Globe /> },
                                    { title: "Medical Equipment Rental Companies", icon: <Zap /> },
                                    { title: "Healthcare Startups & Platform Builders", icon: <Rocket /> },
                                ].map((org) => (
                                    <div
                                        key={org.title}
                                        className="p-6 bg-slate-900/50  border border-slate-800 rounded-2xl hover:border-orange-500/50 transition-all group flex flex-col items-center text-center space-y-4"
                                    >
                                        <div className="p-3 bg-slate-800 rounded-lg text-orange-500 group-hover:scale-110 transition-transform">
                                            {org.icon}
                                        </div>
                                        <h3 className="font-weight-400 text-sm leading-snug text-slate-200 font-weight-400">
                                            {org.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center p-12 bg-slate-900 rounded-3xl border border-slate-800 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-weight-400 uppercase tracking-widest">
                                    Client Philosophy
                                </div>
                                <p className="text-2xl font-weight-400 italic text-slate-300 max-w-3xl mx-auto">
                                    "Our clients are founders, directors, and operators who understand that strong
                                    healthcare outcomes depend on strong systems."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What We Build */}
                    <section className="py-24 px-4 bg-slate-900/50">
                        <div className="max-w-6xl mx-auto space-y-16">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl font-weight-400">What We Build</h2>
                                <p className="text-slate-400 text-lg font-weight-400">
                                    We design and engineer technology across five core areas.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-weight-400">
                                {[
                                    {
                                        title: "1. Healthcare Software Systems",
                                        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
                                        points: [
                                            "Hospital & Clinic Management",
                                            "Lab Information Systems",
                                            "Billing, Inventory & Compliance",
                                            "Multi-branch Operations",
                                        ],
                                    },
                                    {
                                        title: "2. Medical & Healthcare Platforms",
                                        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
                                        points: [
                                            "Healthcare Directories",
                                            "Service Discovery Systems",
                                            "Booking & Enquiry Ecosystems",
                                            "B2B and B2C Health Apps",
                                        ],
                                    },
                                    {
                                        title: "3. Automation & Intelligence",
                                        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
                                        points: [
                                            "Reduce Manual Dependency",
                                            "Automate Workflows",
                                            "Operational Analytics",
                                            "Data-driven Decisions",
                                        ],
                                    },
                                    {
                                        title: "4. Mobile & Web Applications",
                                        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=2000",
                                        points: [
                                            "Doctors & Staff",
                                            "Patients & Partners",
                                            "Field Teams & Service Engineers",
                                        ],
                                    },
                                    {
                                        title: "5. Integration & Infrastructure",
                                        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
                                        points: [
                                            "Machines with Software",
                                            "Platforms with Platforms",
                                            "Data with Decisions",
                                        ],
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-slate-950 rounded-2xl border border-slate-800 hover:shadow-2xl hover:shadow-orange-500/5 transition-all overflow-hidden group"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent"></div>
                                        </div>
                                        <div className="p-8 space-y-6">
                                            <h3 className="text-xl font-weight-400 text-orange-400">{item.title}</h3>
                                            <ul className="space-y-3">
                                                {item.points.map((p) => (
                                                    <li
                                                        key={p}
                                                        className="flex items-center gap-2 text-slate-400 text-sm font-weight-400"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Philosophy & Principles */}
                    <section className="py-24 px-4 bg-slate-950">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-weight-400">Our Philosophy</h2>
                                <p className="text-slate-400 text-lg font-weight-400">
                                    We believe that healthcare technology must be:
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "System-first, not feature-first",
                                        "Reliable, not experimental",
                                        "Scalable, not short-term",
                                        "Secure, not compromised",
                                        "Built for operators, not just developers",
                                    ].map((text) => (
                                        <div key={text} className="flex items-center gap-4 group font-weight-400    ">
                                            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-medium text-slate-200 font-weight-400">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-weight-400">Core Principles</h2>
                                <p className="text-slate-400 text-lg font-weight-400">
                                    Every system we design follows three principles:
                                </p>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        {
                                            n: "1",
                                            t: "Simplicity in workflows",
                                            d: "Streamlining medical procedures for clinical efficiency.",
                                        },
                                        {
                                            n: "2",
                                            t: "Transparency in data",
                                            d: "Ensuring accuracy and accessibility for better decision making.",
                                        },
                                        {
                                            n: "3",
                                            t: "Stability in operations",
                                            d: "Rock-solid infrastructure for 24/7 healthcare demands.",
                                        },
                                    ].map((p) => (
                                        <div
                                            key={p.n}
                                            className="flex gap-6 p-6 bg-slate-900/40 rounded-2xl border border-slate-800/80"
                                        >
                                            <div className="text-4xl font-black text-orange-500/20">{p.n}</div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-weight-400">{p.t}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed font-weight-400">
                                                    {p.d}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How We Work */}
                    <section className="py-24 px-4 bg-slate-900/30">
                        <div className="max-w-6xl mx-auto text-center space-y-16">
                            <h2 className="text-4xl font-weight-400">How We Work</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    "Deep Domain Understanding",
                                    "Structured System Architecture",
                                    "Iterative Development",
                                    "Long-term Maintenance & Support",
                                ].map((item) => (
                                    <div key={item} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
                                        <p className="font-weight-400 text-slate-200">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-12 bg-linear-to-b from-orange-500 to-orange-600 rounded-3xl shadow-2xl shadow-orange-500/20 space-y-6">
                                <p className="text-2xl font-weight-400">
                                    We work as technology partners, not just project vendors.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        "Evolve with your organization",
                                        "Scale with your growth",
                                        "Adapt to regulatory changes",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-weight-400 border border-white/20"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Vision */}
                    <section className="py-24 px-4 bg-slate-950 overflow-hidden relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-teal-500)_0%,transparent_60%)] opacity-5"></div>
                        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                            <h2 className="text-4xl font-weight-400">Our Vision</h2>
                            <p className="text-xl text-slate-300 font-weight-400">
                                We are building toward a future where:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Healthcare operations are system-driven",
                                    "Decisions are data-backed",
                                    "Technology removes friction",
                                    "Platforms enable collaboration",
                                ].map((item) => (
                                    <div key={item} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                        <p className="font-weight-400 text-slate-200">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto font-weight-400">
                                Our long-term vision is to become a foundational technology partner for the healthcare
                                ecosystem — powering the systems behind hospitals, labs, devices, and healthcare
                                platforms.
                            </p>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-32 px-4 bg-slate-950 border-t border-slate-800/50">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <h2 className="text-4xl md:text-5xl font-weight-400 tracking-tight">
                                Let’s Build Better <br />
                                <span className="bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent font-weight-400">
                                    Healthcare Systems
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-weight-400">
                                If you are building, running, or scaling a healthcare organization and believe that
                                technology should strengthen your systems — not complicate them — we would be glad to
                                collaborate.
                            </p>
                            <div className="pt-8">
                                <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 rounded-full font-weig  ht-400 text-lg transition-all shadow-2xl shadow-orange-500/20 active:scale-95 flex items-center gap-3 mx-auto">
                                    <Mail className="w-5 h-5" /> Schedule a Consultation
                                </button>
                            </div>
                            <div className="pt-16 space-y-2 opacity-50">
                                <p className="text-xl font-weight-400 tracking-widest uppercase">Quickipedia</p>
                                <p className="text-sm">Medical & Healthcare Technology Innovation</p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
