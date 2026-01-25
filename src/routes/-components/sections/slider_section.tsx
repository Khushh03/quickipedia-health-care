// import { ArrowUpRight } from "lucide-react"
// import { useState } from "react"

import { cn } from "@/lib/utils"
import { ChevronsLeftRight, MoveDiagonal } from "lucide-react"
import { useState } from "react"

// // Keeping the interface for compatibility, but we'll use specific internal data for this design
// interface SliderSectionProps {
//     slides?: any[]
// }

// export default function SliderSection({ slides }: SliderSectionProps) {
//     const [activeId, setActiveId] = useState(2) // Default to the 3rd one (Stroke Care) as in the image

//     const cards = [
//         {
//             id: 0,
//             title: "Enhancing accuracy in radiology and diagnostics.",
//             color: "bg-[#00897b]", // Teal
//             textColor: "text-white",
//             description:
//                 "AI Solutions for Faster & More Accurate Diagnoses. We develop intelligent AI models that assist radiologists and clinicians in detecting abnormalities from X-ray, CT, MRI, and ultrasound images with high precision.",
//             subSections: [
//                 {
//                     title: "Key Capabilities",
//                     content: ["High-precision anomaly detection", "Automated triage integration"],
//                 },
//                 {
//                     title: "Use Cases",
//                     content: ["Mass screening programs", "Pediatric diagnostics support"],
//                 },
//             ],
//             visual: "tb",
//             iconColor: "text-white",
//         },
//         {
//             id: 1,
//             title: "Digitizing healthcare operations end-to-end.",
//             color: "bg-[#00796b]", // Darker Teal
//             textColor: "text-white",
//             description:
//                 "Smart Software for Modern Healthcare Workflows.We design secure, scalable hospital and clinical software to streamline patient management, clinical documentation, billing, and operations.",
//             subSections: [
//                 {
//                     title: "Key Capabilities",
//                     content: ["Early nodule detection", "Longitudinal tracking"],
//                 },
//                 {
//                     title: "Use Cases",
//                     content: ["Oncology workflow optimization", "Preventive health checks"],
//                 },
//             ],
//             visual: "lung",
//             iconColor: "text-white",
//         },
//         {
//             id: 2,
//             title: "Digital Health & Connected Care",
//             color: "bg-[#dcedc8]", // Light Green/Beige
//             textColor: "text-[#1a3a52]", // Dark Blue text
//             description:
//                 "Technology for Remote, Smart & Continuous Care.We build digital health platforms that connect doctors, patients, and devices for continuous monitoring, telemedicine, and preventive care.",
//             subSections: [
//                 {
//                     title: "Key Capabilities",
//                     content: ["Real-time analysis", "Stroke coordination suite"],
//                 },
//                 {
//                     title: "Use Cases",
//                     content: ["Emergency response", "Hub & Spoke networks"],
//                 },
//             ],
//             visual: "stroke",
//             button: "See How",
//             iconColor: "text-[#1a3a52]",
//         },
//     ]

//     return (
//         <section className="relative py-20 bg-[#0a1f2e] overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl font-medium text-[#4db6ac]">Transforming Healthcare Pathways with AI</h2>
//                 </div>

//                 {/* Accordion Slider */}
//                 <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
//                     {cards.map((card) => (
//                         <div
//                             key={card.id}
//                             onClick={() => setActiveId(card.id)}
//                             onMouseEnter={() => setActiveId(card.id)}
//                             className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
//                                 activeId === card.id ? "lg:flex-[3] h-full" : "lg:flex-[1] h-[150px] lg:h-full"
//                             } ${card.color}`}
//                         >
//                             <div className="relative h-full p-8 flex flex-col">
//                                 {/* Top Icon */}
//                                 <div className="absolute top-6 right-6 p-2 bg-white/20 rounded-full backdrop-blur-sm">
//                                     <ArrowUpRight className={`w-5 h-5 ${card.iconColor}`} />
//                                 </div>

//                                 {/* Content Container */}
//                                 <div className="relative z-10 flex flex-col h-full">
//                                     {/* Title - Adjust size based on active state */}
//                                     <h3
//                                         className={`relative z-30 font-medium mb-4 transition-all duration-300 ${
//                                             card.textColor
//                                         } ${activeId === card.id ? "text-3xl md:text-4xl max-w-2xl" : "text-xl md:text-2xl line-clamp-3"}`}
//                                     >
//                                         {card.title}
//                                     </h3>

//                                     {/* Description & Button - Only visible when active */}
//                                     <div
//                                         className={`relative z-30 transition-all duration-500 overflow-hidden ${
//                                             activeId === card.id ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
//                                         }`}
//                                     >
//                                         <p
//                                             className={`text-lg mb-8 max-w-xl leading-relaxed ${card.textColor === "text-white" ? "text-white/90" : "text-[#1a3a52]/80"}`}
//                                         >
//                                             {card.description}
//                                         </p>

//                                         {/* Sub-sections (Key Capabilities & Use Cases) */}
//                                         {card.subSections && (
//                                             <div className="grid grid-cols-2 gap-8 mb-8 max-w-2xl">
//                                                 {card.subSections.map((section: any, idx: number) => (
//                                                     <div key={idx}>
//                                                         <h4
//                                                             className={`text-sm font-bold uppercase tracking-wider mb-3 ${card.textColor === "text-white" ? "text-white/70" : "text-[#1a3a52]/60"}`}
//                                                         >
//                                                             {section.title}
//                                                         </h4>
//                                                         <ul className="space-y-2">
//                                                             {section.content.map((item: string, i: number) => (
//                                                                 <li
//                                                                     key={i}
//                                                                     className={`text-sm ${card.textColor === "text-white" ? "text-white/90" : "text-[#1a3a52]/80"}`}
//                                                                 >
//                                                                     • {item}
//                                                                 </li>
//                                                             ))}
//                                                         </ul>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}

//                                         {card.button && (
//                                             <button className="px-6 py-2 border border-[#1a3a52] text-[#1a3a52] rounded-full hover:bg-[#1a3a52] hover:text-white transition-colors duration-300">
//                                                 {card.button}
//                                             </button>
//                                         )}
//                                     </div>

//                                     {/* Visual Elements placed absolutely at bottom/right */}
//                                     <div className="mt-auto relative h-full w-full">
//                                         {activeId === card.id && (
//                                             <div className="absolute bottom-0 right-0 w-full h-[300px] pointer-events-none">
//                                                 {card.visual === "tb" && (
//                                                     <div className="absolute bottom-0 right-0 w-64 h-80 bg-white/10 rounded-t-3xl border border-white/20 backdrop-blur-sm p-4">
//                                                         <div className="w-full h-full border border-dashed border-white/30 rounded-xl relative overflow-hidden">
//                                                             {/* Placeholder for X-ray */}
//                                                             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-teal-900/40"></div>
//                                                             <div className="absolute top-1/4 left-1/4 w-12 h-16 border-2 border-red-400 rounded-full"></div>
//                                                             <div className="absolute top-10 right-4 bg-white/90 text-black text-xs px-2 py-0.5 rounded shadow">
//                                                                 ABNORMAL
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )}

//                                                 {card.visual === "lung" && (
//                                                     <div className="absolute bottom-0 right-0 w-full h-64 flex items-end justify-end">
//                                                         <div className="w-80 h-48 bg-emerald-800/20 backdrop-blur-md rounded-xl border border-white/20 p-4 relative">
//                                                             {/* Flowchart circles */}
//                                                             <div className="flex items-center justify-between mt-8 relative z-10">
//                                                                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-800 font-bold text-xs">
//                                                                     VISIT 1
//                                                                 </div>
//                                                                 <div className="h-0.5 bg-white flex-1 mx-2"></div>
//                                                                 <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
//                                                                     CT
//                                                                 </div>
//                                                             </div>
//                                                             <div className="absolute top-2 left-2 text-white/80 text-xs">
//                                                                 Patient Timeline
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )}

//                                                 {card.visual === "stroke" && (
//                                                     <div className="absolute bottom-[-40px] right-[-40px] w-[400px] h-[400px] pointer-events-none">
//                                                         {/* Brain Scan Circle */}
//                                                         <div className="absolute bottom-20 right-20 w-48 h-48 bg-black/80 rounded-full border-4 border-white overflow-hidden shadow-2xl z-0">
//                                                             {/* Stylized Brain */}
//                                                             <div className="w-full h-full bg-gray-800 relative opacity-80">
//                                                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-gray-600 rounded-full blur-sm"></div>
//                                                                 {/* Stroke Area */}
//                                                                 <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-red-500/60 rounded-full blur-md animate-pulse"></div>
//                                                                 <svg
//                                                                     className="absolute inset-0 w-full h-full"
//                                                                     viewBox="0 0 100 100"
//                                                                 >
//                                                                     <path
//                                                                         d="M30,30 Q50,10 70,30 T90,60"
//                                                                         fill="none"
//                                                                         stroke="red"
//                                                                         strokeWidth="2"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         {/* Background Graphic */}
//                                                         <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end opacity-20">
//                                                             {/* Silhouette placeholder */}
//                                                             <div className="w-64 h-64 bg-black rounded-tl-3xl"></div>
//                                                         </div>
//                                                         <div className="absolute bottom-32 right-52 bg-white/90 px-3 py-1 rounded text-xs font-bold text-red-600 z-30 shadow-lg">
//                                                             CODE STROKE
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

const cards = [
    {
        id: 1,
        title: "Advancing Public Health Access for Tuberculosis, Pediatric TB & Beyond",
        description:
            "WHO-evaluated AI solutions to support clinicians in making quick and accurate diagnosis and treatment decisions.",
        bg: "from-[#1E293B] to-[#97add7]",
        image: {
            active: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Global_Health_769fbf2085.webp?w=3840&q=75",
            inactive: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Global_Health_2_b95532db8d.webp",
        },
    },
    {
        id: 2,
        title: "Accelerating Early Detection & Management of Lung Cancer",
        description: "The end-to-end lung cancer care continuum detects nodules early and manages disease progression.",
        bg: "from-[#1E293B] to-[#813766]",
        image: {
            active: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Lung_Cancer_a4c6fd4662.webp?w=1920&q=75",
            inactive: "https://qure-website-images.s3.ap-south-1.amazonaws.com/Lung_Cancer_56ad8974eb.webp",
        },
    },
    {
        id: 3,
        title: "Enabling Timely Intervention in Stroke Care",
        description: "AI-powered care coordination suite enabling real-time triage and seamless stroke intervention.",
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
                                "min-h-110 relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                                isActive
                                    ? `flex-[4] bg-linear-to-r ${card.bg}`
                                    : "flex-[2] bg-linear-to-r from-[#00827f] to-[#00827f]",
                            )}
                        >
                            {!isActive && (
                                <span className="absolute top-4 right-4 bg-white text-[#00827f] rounded-full p-2 size-10">
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
