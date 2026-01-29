import { createFileRoute } from "@tanstack/react-router"
import Navbar from "./-components/navbar/navbar"
import Footer from "./-components/footer/footer"
import HeroSection from "./-components/sections/hero_section"
import PartnersCarouselSection from "./-components/sections/partners_carousel_section"
import SliderSection from "./-components/sections/slider_section"
import DomainsSection from "./-components/sections/domains_section"
import WhyUsSection from "./-components/sections/why_us_section"
import DevelopmentApproachSection from "./-components/sections/development_approach_section"
// import ImpactSection from "./-components/sections/impact_section"
import CtaSection from "./-components/sections/cta_section"
import AboutUsSection from "./-components/sections/about_us_section"
import BlogSection from "./-components/sections/blog_section"
import {
    Target,
    Layers,
    Zap,
    CheckCircle,
    Trophy,
    Scan,
    Heart,
    FlaskConical,
    Building2,
    Pill,
    Activity,
} from "lucide-react"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

const data = {
    hero: {
        title: "Innovating Healthcare with Intelligent Technology",
        subtitle:
            "Advanced AI, Medical Software & Digital Solutions for Hospitals, Diagnostics & Healthcare Enterprises",
        description:
            "We design, build, and deploy cutting-edge healthcare technology — from AI-powered diagnostics to hospital management systems — enabling better clinical decisions, operational efficiency, and improved patient outcomes.",
        ctas: [
            { text: "Explore Our Healthcare Solutions", variant: "primary" as const, icon: "zap" as const },
            { text: "Talk to Our Experts", variant: "secondary" as const, icon: "chevron" as const },
        ],
    },
    slider: {
        slides: [
            {
                id: 0,
                title: "AI-Powered Medical Imaging",
                shortLine: "Enhancing accuracy in radiology and diagnostics.",
                hoverTitle: "AI Solutions for Faster & More Accurate Diagnoses",
                hoverContent:
                    "We develop intelligent AI models that assist radiologists and clinicians in detecting abnormalities from X-ray, CT, MRI, and ultrasound images with high precision.",
                keyCapabilities: [
                    "Automated abnormality detection",
                    "Computer-aided diagnosis (CAD)",
                    "AI triage & prioritization",
                    "Explainable AI heatmaps",
                    "PACS & RIS integration",
                ],
                useCases: "Radiology labs, Diagnostic centers, Multi-specialty hospitals",
                ctaText: "View Diagnostic AI Solutions",
                visualType: "imaging" as const,
            },
            {
                id: 1,
                title: "Hospital & Clinical Systems",
                shortLine: "Digitizing healthcare operations end-to-end.",
                hoverTitle: "Smart Software for Modern Healthcare Workflows",
                hoverContent:
                    "We design secure, scalable hospital and clinical software to streamline patient management, clinical documentation, billing, and operations.",
                keyCapabilities: [
                    "Hospital Information System (HIS)",
                    "EMR / EHR",
                    "Laboratory Information System (LIS)",
                    "Radiology Information System (RIS)",
                    "Appointment & Queue Management",
                    "Billing & Insurance Workflows",
                ],
                useCases: "HL7, DICOM, HIPAA-ready architecture",
                ctaText: "Explore Hospital Software Solutions",
                visualType: "clinical" as const,
            },
            {
                id: 2,
                title: "Digital Health & Connected Care",
                shortLine: "Extending care beyond hospital walls.",
                hoverTitle: "Technology for Remote, Smart & Continuous Care",
                hoverContent:
                    "We build digital health platforms that connect doctors, patients, and devices for continuous monitoring, telemedicine, and preventive care.",
                keyCapabilities: [
                    "Telemedicine platforms",
                    "Remote patient monitoring",
                    "Mobile health apps",
                    "Wearable & IoT integration",
                    "Patient portals",
                ],
                useCases: "Hospitals, Home healthcare, Chronic care programs, Pharma R&D",
                ctaText: "Discover Digital Health Solutions",
                visualType: "digital" as const,
            },
        ],
    },
    domains: {
        title: "Healthcare Domains We Specialize In",
        subtitle: "Deep expertise across critical healthcare specializations",
        domains: [
            {
                title: "Radiology & Imaging",
                description: "AI-powered detection and triage for X-ray, CT, MRI and Ultrasound.",
                icon: <Scan size={24} />,
            },
            {
                title: "Cardiology",
                description: "Automated ECG analysis and cardiac measurement tools.",
                icon: <Heart size={24} />,
            },
            {
                title: "Pathology & Labs",
                description: "Digital pathology workflows and intelligent lab information systems.",
                icon: <FlaskConical size={24} />,
            },
            {
                title: "Hospital Operations",
                description: "Optimizing workflows and resource management with smart software.",
                icon: <Building2 size={24} />,
            },
            {
                title: "Pharma & Research",
                description: "Data-driven research tools and clinical trial management platforms.",
                icon: <Pill size={24} />,
            },
            {
                title: "Primary Care",
                description: "Comprehensive patient management and preventive care solutions.",
                icon: <Activity size={24} />,
            },
        ],
    },
    whyUs: {
        badge: "Why Quickipedia for Healthcare",
        title: "Built for Healthcare. Engineered for Trust.",
        description:
            "We work exclusively in medical and healthcare technology, with deep understanding of clinical workflows, regulatory requirements, patient data privacy, and interoperability standards.",
        differentiators: [
            {
                icon: "users" as const,
                title: "Healthcare-only focus",
                description: "Specialized expertise in medical technology and clinical systems",
            },
            {
                icon: "target" as const,
                title: "Strong clinical domain knowledge",
                description: "Deep understanding of hospital workflows and diagnostic operations",
            },
            {
                icon: "check" as const,
                title: "Secure & compliant systems",
                description: "HIPAA-ready architecture with robust data protection measures",
            },
            {
                icon: "layers" as const,
                title: "Scalable long-term solutions",
                description: "Systems designed to grow with your organization's evolving needs",
            },
        ],
    },
    developmentApproach: {
        title: "Development Approach",
        subtitle: "A structured methodology to deliver healthcare technology that works in the real world",
        steps: [
            {
                icon: <Target size={24} />,
                title: "Clinical Problem Understanding",
                description:
                    "We deeply analyze your clinical workflows, pain points, and operational challenges to identify the root problems that need solving.",
            },
            {
                icon: <Layers size={24} />,
                title: "Solution Architecture & Validation",
                description:
                    "Design scalable, secure, and compliant system architectures with clinical validation and regulatory review.",
            },
            {
                icon: <Zap size={24} />,
                title: "AI Model & Software Development",
                description:
                    "Build intelligent AI models and robust software systems using healthcare-grade development practices.",
            },
            {
                icon: <CheckCircle size={24} />,
                title: "Clinical Testing & Deployment",
                description:
                    "Rigorous clinical testing, validation, and phased deployment with minimal disruption to operations.",
            },
            {
                icon: <Trophy size={24} />,
                title: "Scale, Support & Optimize",
                description:
                    "Continuous support, performance optimization, and scaling capabilities as your organization grows.",
            },
        ],
    },
    impact: {
        title: "Impact & Credibility",
        subtitle: "Proven results across healthcare organizations worldwide",
        stats: [
            { number: "100+", label: "Healthcare Projects Delivered" },
            { number: "3+", label: "Countries (India, Nepal, Canada)" },
            { number: "Millions", label: "Medical Records Processed Securely" },
            { number: "Live", label: "AI Models in Clinical Use" },
        ],
        additionalInfo: [
            "Clients Across India, Nepal & Canada",
            "Millions of Medical Records Processed Securely",
            "AI Models in Live Clinical Use",
        ],
    },
    cta: {
        title: "Let's Build the Future of Healthcare Together",
        description: "Partner with us to design intelligent, secure, and scalable healthcare technology solutions.",
        buttons: [
            {
                text: "Schedule a Healthcare Consultation",
                variant: "primary" as const,
                icon: "zap" as const,
                href: "/contact-us",
            },
            {
                text: "Request a Proposal",
                variant: "secondary" as const,
                icon: "chevron" as const,
                href: "/contact-us",
            },
        ],
    },
    aboutUs: {
        intro: {
            badge: "About Quickipedia",
            title: "Building the Technology Backbone of Modern Healthcare",
            paragraphs: [
                "At Quickipedia, we build technology for environments where precision, reliability, and systems thinking are not optional — they are critical.",
                "We are a technology company focused exclusively on Medical & Healthcare Innovation. Our work sits at the intersection of software engineering, healthcare operations, and scalable system design.",
                "From hospitals and diagnostic labs to medical device companies and healthcare platforms, we design and deliver intelligent systems that simplify complexity, improve control, and strengthen decision-making across healthcare operations.",
            ],
            highlight: "We do not build generic IT solutions. We build healthcare-grade technology.",
        },
        focus: {
            title: "Our Focus",
            description:
                "Healthcare is not just another industry. It is an ecosystem where technology directly impacts:",
            impacts: ["patient safety", "operational efficiency", "regulatory compliance", "business sustainability"],
            decision: "That is why we have made a clear, long-term decision:",
            decisionHighlight: "Quickipedia works only in the Medical & Healthcare sector.",
            understanding: "This focused approach allows us to deeply understand:",
            understandingItems: [
                "clinical workflows",
                "diagnostic operations",
                "medical device lifecycles",
                "compliance requirements",
                "multi-branch healthcare management",
            ],
            conclusion: "And design systems that are practical, reliable, and built for real-world healthcare use.",
        },
        whoWeWorkWith: {
            title: "Who We Work With",
            description: "We partner with organizations across the healthcare ecosystem:",
            organizations: [
                "Hospitals & Multi-speciality Clinics",
                "Diagnostic & Pathology Laboratories",
                "Medical Device Manufacturers & Distributors",
                "Medical Equipment Rental Companies",
                "Healthcare Startups & Platform Builders",
            ],
            clientNote: "Our clients are founders, directors, and operators who understand that:",
            clientHighlight: "Strong healthcare outcomes depend on strong systems.",
        },
        whatWeBuild: {
            title: "What We Build",
            items: [
                {
                    title: "1. Healthcare Software Systems",
                    description:
                        "Custom-built platforms for: hospital & clinic management, lab information systems, billing, inventory & compliance, multi-branch operations",
                },
                {
                    title: "2. Medical & Healthcare Platforms",
                    description:
                        "Scalable platforms for: healthcare directories, service discovery systems, booking & enquiry ecosystems, B2B and B2C healthcare applications",
                },
                {
                    title: "3. Automation & Intelligence",
                    description:
                        "Systems that: reduce manual dependency, automate workflows, provide operational analytics, enable data-driven decisions",
                },
                {
                    title: "4. Mobile & Web Applications",
                    description:
                        "Purpose-built applications for: doctors & staff, patients & partners, field teams & service engineers",
                },
                {
                    title: "5. Integration & Infrastructure",
                    description: "Connecting: machines with software, platforms with platforms, data with decisions",
                },
            ],
        },
        philosophy: {
            title: "Our Philosophy",
            description: "We believe that healthcare technology must be:",
            beliefs: [
                "System-first, not feature-first",
                "Reliable, not experimental",
                "Scalable, not short-term",
                "Secure, not compromised",
                "Built for operators, not just developers",
            ],
            principlesIntro: "Every system we design follows three principles:",
            principles: ["Simplicity in workflows", "Transparency in data", "Stability in operations"],
        },
        howWeWork: {
            title: "How We Work",
            approach: {
                title: "Our Approach",
                description: "Our approach combines:",
                items: [
                    "deep domain understanding",
                    "structured system architecture",
                    "iterative development",
                    "long-term maintenance & support",
                ],
            },
            commitment: {
                title: "Our Commitment",
                description: "We work as technology partners, not just project vendors.",
                engagementIntro: "Our engagements are designed to:",
                items: ["evolve with your organization", "scale with your growth", "adapt to regulatory changes"],
            },
        },
        vision: {
            title: "Our Vision",
            description: "We are building toward a future where:",
            futurePoints: [
                "healthcare operations are system-driven",
                "decisions are data-backed",
                "technology removes friction",
                "platforms enable collaboration",
            ],
            longTerm:
                "Our long-term vision is to become a foundational technology partner for the healthcare ecosystem — powering the systems behind hospitals, labs, devices, and healthcare platforms.",
        },
        summary: {
            title: "About Quickipedia",
            description: "Quickipedia is a healthcare-focused technology company specializing in:",
            specializations: [
                "Medical & Healthcare Software",
                "Healthcare Platforms & SaaS",
                "Automation & Analytics",
                "Mobile & Web Applications",
                "System Integration & Infrastructure",
            ],
            closing:
                "We serve clients across India, Nepal, and international markets. Our team brings together engineers, architects, and domain specialists who understand both technology and healthcare operations.",
        },
        finalCta: {
            title: "Let's Build Better Healthcare Systems",
            description:
                "If you are building, running, or scaling a healthcare organization and believe that technology should strengthen your systems — not complicate them — we would be glad to collaborate.",
            buttonText: "Schedule a Healthcare Consultation",
            companyName: "Quickipedia",
            tagline: "Medical & Healthcare Technology Innovation",
        },
    },
}

function RouteComponent() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <main>
                    <HeroSection {...data.hero} />
                    <PartnersCarouselSection />
                    <SliderSection {...data.slider} />
                    <DomainsSection {...data.domains} />
                    <WhyUsSection {...data.whyUs} />
                    <DevelopmentApproachSection {...data.developmentApproach} />
                    {/* <ImpactSection {...data.impact} /> */}
                    <BlogSection />
                    <CtaSection {...data.cta} />
                    <AboutUsSection {...data.aboutUs} />
                </main>
                <Footer />
            </div>
        </>
    )
}
