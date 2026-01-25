import { cn } from "@/lib/utils"
import { ChevronsLeftRight } from "lucide-react"
import { useState } from "react"

const cards = [
    {
        id: 1,
        title: "Enhancing accuracy in radiology and diagnostics.",
        description:
            "AI Solutions for Faster & More Accurate Diagnoses. We develop intelligent AI models that assist radiologists and clinicians in detecting abnormalities from X-ray, CT, MRI, and ultrasound images with high precision.",
        subSections: [
            {
                title: "Key Capabilities",
                content: ["High-precision anomaly detection", "Automated triage integration"],
            },
            {
                title: "Use Cases",
                content: ["Mass screening programs", "Pediatric diagnostics support"],
            },
        ],
        bg: "from-[#1E293B] to-[#97add7]",
        image: {
            active: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Global_Health_769fbf2085.webp?w=3840&q=75",
            inactive: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Global_Health_2_b95532db8d.webp",
        },
    },
    {
        id: 2,
        title: "Digitizing healthcare operations end-to-end.",
        description:
            "Smart Software for Modern Healthcare Workflows.We design secure, scalable hospital and clinical software to streamline patient management, clinical documentation, billing, and operations.",
        subSections: [
            {
                title: "Key Capabilities",
                content: ["Early nodule detection", "Longitudinal tracking"],
            },
            {
                title: "Use Cases",
                content: ["Oncology workflow optimization", "Preventive health checks"],
            },
        ],
        bg: "from-[#1E293B] to-[#813766]",
        image: {
            active: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Lung_Cancer_a4c6fd4662.webp?w=1920&q=75",
            inactive: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Lung_Cancer_56ad8974eb.webp",
        },
    },
    {
        id: 3,
        title: "Digital Health & Connected Care",
        description:
            "Technology for Remote, Smart & Continuous Care.We build digital health platforms that connect doctors, patients, and devices for continuous monitoring, telemedicine, and preventive care.",
        subSections: [
            {
                title: "Key Capabilities",
                content: ["Real-time analysis", "Stroke coordination suite"],
            },
            {
                title: "Use Cases",
                content: ["Emergency response", "Hub & Spoke networks"],
            },
        ],
        bg: "from-[#1E293B] to-[#bcd9bd]",
        image: {
            active: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Stroke_253744226e.webp?w=3840&q=75",
            inactive: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Stroke_d115ba6272.webp?w=640&q=75",
        },
    },
]

export default function SliderSection() {
    const [activeId, setActiveId] = useState<number | null>(1)

    return (
        <div className="bg-[#0f2332] py-24">
            <div>
                <h2 className="text-2xl font-bold text-[#00827f] text-center">
                    Transforming Healthcare Pathways with AI
                </h2>
            </div>
            <div className="mt-12 flex max-w-6xl mx-auto w-full gap-4">
                {cards.map((card) => {
                    const isActive = activeId === card.id
                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setActiveId(card.id)}
                            onMouseLeave={() => setActiveId(card.id)}
                            className={cn(
                                "h-110 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                                isActive
                                    ? `flex-[4] bg-linear-to-r ${card.bg}`
                                    : "flex-[2] bg-linear-to-r from-[#00827f] to-[#00827f]",
                            )}
                        >
                            {!isActive && (
                                <span className="z-10 absolute top-4 right-4 bg-white text-[#00827f] rounded-full p-2 size-10">
                                    <ChevronsLeftRight className="-rotate-45" />
                                </span>
                            )}
                            <div className="relative z-10 flex h-full flex-col justify-between p-8 pt-12 text-white">
                                <h3 className="text-2xl font-semibold leading-tight">{card.title}</h3>
                                <div
                                    className={cn(
                                        "mt-4 max-w-md text-sm transition-all duration-300",
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                    )}
                                >
                                    {card.description}
                                </div>
                                {isActive && (
                                    <div
                                        className={cn(
                                            "mt-4",
                                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                        )}
                                    >
                                        {card.subSections.map((subSection, index) => (
                                            <div key={index} className="mb-2">
                                                <h4 className="text-sm font-semibold">{subSection.title}</h4>
                                                <ul className="text-sm">
                                                    {subSection.content.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <button
                                    className={cn(
                                        "mt-6 w-fit rounded-full border border-white/70 px-6 py-2 text-sm transition-all duration-300",
                                        isActive ? "opacity-100" : "opacity-0",
                                    )}
                                >
                                    See How
                                </button>
                            </div>
                            {isActive ? (
                                <img
                                    src={card.image.active}
                                    alt="Active"
                                    className="absolute bottom-0 right-0 h-full object-cover transition-all duration-500"
                                />
                            ) : (
                                <img
                                    src={card.image.inactive}
                                    alt="Inactive"
                                    className="absolute inset-0 h-full object-cover transition-all duration-500"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
