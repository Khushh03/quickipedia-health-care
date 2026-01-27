import { createFileRoute, Link } from "@tanstack/react-router"
import Navbar from "../-components/navbar/navbar"
import Footer from "../-components/footer/footer"
import {
    Share2,
    Clock,
    Calendar,
    ChevronRight,
    CheckCircle2,
    FileText,
    ArrowLeft,
    Facebook,
    Twitter,
    Linkedin,
    Mail,
} from "lucide-react"

export const Route = createFileRoute("/blog/silicosis")({
    component: SilicosisPost,
})

function SilicosisPost() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Link to="/" className="hover:text-orange-500 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 font-medium">Blog</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-orange-500/70">Silicosis</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-12 md:py-20 overflow-hidden relative">
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-orange-500/20 blur-3xl rounded-full" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-orange-400 font-medium hover:gap-3 transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Silicosis: An Urgent <br />
                                    Occupational Health Hazard
                                </h1>
                                <div className="flex items-center gap-6 text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-orange-400" />
                                        January 27, 2026
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-orange-400" />
                                        12 min read
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full scale-110 opacity-50 transition-opacity group-hover:opacity-80" />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                                    <img
                                        src="/assets/blog/featured-silicosis.png"
                                        alt="Silicosis Article"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-orange-500 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block font-bold">
                                            Clinical Insight
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold">
                                            Environmental Health & AI Diagnostics
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-16">
                            {/* Main Content (Left) */}
                            <div className="lg:col-span-8 space-y-12">
                                {/* Key Highlights */}
                                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16" />
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                                        <CheckCircle2 className="w-6 h-6 text-orange-500" />
                                        Key Highlights
                                    </h2>
                                    <ul className="grid gap-4 bg-white relative z-10">
                                        {[
                                            "Global impact: WHO estimates over 230,000 new cases diagnosed each year.",
                                            "Primary cause: Long-term exposure to respirable crystalline silica dust.",
                                            "High-risk sectors: Mining, construction, stone cutting, and ceramics.",
                                            "Silent threat: Symptoms may only appear years after initial exposure.",
                                            "Prevention first: Engineering controls and NIOSH-approved respirators are critical.",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 text-slate-600">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 shadow-sm" />
                                                <span className="text-lg leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="prose prose-lg max-w-none prose-slate text-slate-700 leading-relaxed font-normal">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction</h2>
                                    <p className="mb-8">
                                        Silicosis is a leading global lung disease caused by inhaling tiny particles of
                                        crystalline silica. A substance commonly found in sand, stone, and granite,
                                        silica dust is released during processing through drilling, cutting, or
                                        grinding. According to the World Health Organization (WHO), millions of workers
                                        are exposed to silica dust, leading to approximately 230,000 new cases of
                                        silicosis diagnosed each year.
                                    </p>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">
                                        The Danger of Silicosis
                                    </h2>
                                    <p className="mb-8">
                                        When silica dust is inhaled, it travels deep into the lungs, where it triggers
                                        inflammation and scarring. Over time, this scarring makes it increasingly
                                        difficult for the lungs to function correctly. This condition is irreversible
                                        and often progressive, meaning it can continue to worsen even after the worker
                                        is no longer exposed to the dust.
                                    </p>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                        Incurability and the Need for Early Diagnosis
                                    </h2>
                                    <p className="mb-8">
                                        Currently, there is no medical cure for silicosis. The focus of medical
                                        intervention is primarily on symptom management and preventing further exposure.
                                        This makes early diagnosis and rigorous prevention strategies the most effective
                                        tools in combating the disease.
                                    </p>

                                    <div className="my-12 p-10 bg-orange-500/5 border-l-8 border-orange-500 rounded-r-2xl shadow-sm">
                                        <p className="italic text-2xl font-medium text-slate-900 mb-0 leading-snug">
                                            "The latency period for silicosis can range from 10 to 30 years. By the time
                                            symptoms appear, the damage is often extensive. This makes screening and
                                            early identification a matter of survival."
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                        Lung Health Disease and the Radiologist Shortage
                                    </h2>
                                    <p className="mb-8 font-weight-300">
                                        In many regions where high-risk industries operate, there is a severe shortage
                                        of specialized radiologists who can accurately interpret chest X-rays for
                                        silicosis. This results in delayed diagnoses and missed opportunities for early
                                        intervention.
                                    </p>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                        AI Solutions: The Role of AI-Powered Screening Tools
                                    </h2>
                                    <p className="mb-8">
                                        Modern healthcare technology is now leveraging Artificial Intelligence to
                                        address this gap. AI-powered diagnostic tools are being deployed to assist
                                        clinicians in detecting the early radiographic signs of silicosis with high
                                        precision. These systems can process thousands of images rapidly, flagging
                                        suspicious cases for immediate review by specialists.
                                    </p>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Way Forward</h2>
                                    <p className="mb-4">
                                        Addressing the challenge of silicosis requires a multi-faceted approach
                                        combining policy, technology, and industry accountability. Key strategies
                                        include:
                                    </p>
                                    <div className="grid gap-4 mb-12">
                                        {[
                                            "Implementing strict dust control measures (water sprays, ventilation).",
                                            "Deploying AI-driven screening programs in high-risk industrial zones.",
                                            "Mandatory use of high-grade respiratory protection for all workers.",
                                            "Regular health monitoring and lung function testing.",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl border border-slate-200"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                                <span className="font-semibold text-slate-800">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-12 border-t border-slate-200 mt-20">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                            <FileText className="w-6 h-6 text-orange-500" />
                                            References
                                        </h2>
                                        <div className="text-sm space-y-4 text-slate-500">
                                            <p className="hover:text-slate-900 transition-colors cursor-pointer flex gap-2">
                                                <span className="text-orange-500">01.</span>
                                                World Health Organization (WHO) - Occupational health guidelines on
                                                silicosis.
                                            </p>
                                            <p className="hover:text-slate-900 transition-colors cursor-pointer flex gap-2">
                                                <span className="text-orange-500">02.</span>
                                                International Labour Organization (ILO) - Global program for the
                                                elimination of silicosis.
                                            </p>
                                            <p className="hover:text-slate-900 transition-colors cursor-pointer flex gap-2">
                                                <span className="text-orange-500">03.</span>
                                                NIOSH - Occupational safety and health standards for crystalline silica.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar (Right) */}
                            <div className="lg:col-span-4 space-y-10">
                                {/* Share Card */}
                                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm sticky top-32">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                                        <Share2 className="w-5 h-5 text-orange-500" />
                                        Share this story
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        <button className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all text-sm font-bold text-slate-700">
                                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                                            Share on LinkedIn
                                        </button>
                                        <button className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all text-sm font-bold text-slate-700">
                                            <Twitter className="w-5 h-5 text-[#1da1f2]" />
                                            Share on Twitter
                                        </button>
                                        <button className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all text-sm font-bold text-slate-700">
                                            <Mail className="w-5 h-5 text-slate-500" />
                                            Share via Email
                                        </button>
                                    </div>

                                    {/* Related Materials */}
                                    <div className="mt-10 pt-10 border-t border-slate-100">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                                            <FileText className="w-5 h-5 text-orange-500" />
                                            Resources
                                        </h3>
                                        <ul className="space-y-4">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-between group p-3 rounded-lg hover:bg-orange-50 transition-all"
                                                >
                                                    <span className="text-slate-600 font-medium group-hover:text-orange-600">
                                                        Download Fact Sheet (PDF)
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-between group p-3 rounded-lg hover:bg-orange-50 transition-all"
                                                >
                                                    <span className="text-slate-600 font-medium group-hover:text-orange-600">
                                                        Prevention Guidelines
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured in Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">
                            As Featured In
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="text-3xl font-black tracking-tighter text-slate-800">
                                Inc<span className="text-orange-500">42</span>
                            </div>
                            <div className="text-2xl font-bold tracking-tight text-slate-800">YourStory</div>
                            <div className="text-3xl font-black italic tracking-tighter text-slate-800 uppercase font-serif">
                                mint
                            </div>
                            <div className="text-4xl font-serif font-black tracking-tighter text-slate-800">Forbes</div>
                            <div className="text-2xl font-black tracking-tight text-slate-800">BusinessToday</div>
                            <div className="text-xl font-black tracking-[0.2em] text-slate-800 uppercase">
                                The Guardian
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
                
                body {
                    font-family: 'Outfit', sans-serif;
                }
                
                .prose h2 { 
                    font-family: 'Outfit', sans-serif;
                    letter-spacing: -0.02em;
                }
                
                .font-primary {
                    font-family: 'Outfit', sans-serif;
                }
            `,
                }}
            />
        </div>
    )
}
