import { createFileRoute } from "@tanstack/react-router"
import { CheckSquare, Mail } from "lucide-react"
import Footer from "./-components/footer/footer"
import Navbar from "./-components/navbar/navbar"
import countryRegionData from "country-region-data/data.json"
import { PhoneInput } from "@/components/ui/phone-input"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export const Route = createFileRoute("/contact-us")({
    component: RouteComponent,
})

function RouteComponent() {
    const [value, setValue] = useState<string | undefined>()

    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <main>
                    <div className="min-h-screen bg-slate-950 text-white font-sans">
                        {/* Header Section */}
                        <div className="pt-20 pb-40 px-4 text-center bg-slate-900/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-b from-slate-900 to-slate-950"></div>
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <div className="flex justify-center mb-6">
                                    <div className="p-3 bg-teal-500/20 rounded-lg border border-teal-500/30">
                                        <CheckSquare className="w-8 h-8 text-teal-500" />
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                                    We are open to conversation
                                </h1>
                                <p className="text-slate-400">Get in touch with us.</p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-20 pb-20">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-slate-900 border border-slate-200">
                                <h2 className="text-2xl font-bold text-center mb-10">How can we help you?</h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                First Name*
                                            </label>
                                            <Input
                                                type="text"
                                                className="h-11 border-input/20"
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                Last Name*
                                            </label>
                                            <Input
                                                type="text"
                                                className="h-11 border-input/20"
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                Job Title*
                                            </label>
                                            <Input
                                                type="text"
                                                className="h-11 border-input/20"
                                                placeholder="Enter your job title"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                Company Name*
                                            </label>
                                            <Input
                                                type="text"
                                                className="h-11 border-input/20"
                                                placeholder="Enter company name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                Work Email Address*
                                            </label>
                                            <Input
                                                type="email"
                                                className="h-11 border-input/20"
                                                placeholder="Enter work email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-600 block">
                                                Mobile Number*
                                            </label>
                                            <div className="flex gap-2">
                                                <PhoneInput
                                                    defaultCountry="IN"
                                                    className="h-11 border-input/20"
                                                    placeholder="Enter phone number"
                                                    value={value}
                                                    onChange={setValue}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 block">
                                            Country / Region*
                                        </label>
                                    </div>
                                    <NativeSelect className="h-11 border-input/20">
                                        <NativeSelectOption value="">Please Select</NativeSelectOption>
                                        {countryRegionData.map(({ countryName, countryShortCode }) => (
                                            <NativeSelectOption key={countryShortCode} value={countryShortCode}>
                                                {countryName}
                                            </NativeSelectOption>
                                        ))}
                                    </NativeSelect>

                                    <div className="space-y-4">
                                        <label className="text-sm font-medium text-slate-600 block">
                                            What are you looking for?*
                                        </label>
                                        <div className="space-y-3">
                                            {[
                                                "I'm looking for a tool for our clinical team",
                                                "I am a physician or clinical worker looking for information for myself",
                                                "Neither of these",
                                            ].map((option) => (
                                                <label key={option} className="flex items-center gap-3 cursor-pointer">
                                                    <Input
                                                        type="radio"
                                                        name="lookingFor"
                                                        className="w-4 h-4 text-orange-500 border-slate-300 focus:ring-orange-500"
                                                    />
                                                    <span className="text-sm text-slate-600">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-600 block">
                                            How did you hear about us?*
                                        </label>
                                        <NativeSelect className="h-11 border-input/20">
                                            <NativeSelectOption value="">Please Select</NativeSelectOption>
                                            <NativeSelectOption value="social">Social Media</NativeSelectOption>
                                            <NativeSelectOption value="ad">Advertisement</NativeSelectOption>
                                            <NativeSelectOption value="referral">Referral</NativeSelectOption>
                                        </NativeSelect>
                                    </div>

                                    <div className="space-y-4 py-4">
                                        <div className="flex items-start gap-3">
                                            <Input
                                                type="checkbox"
                                                className="mt-1 w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                                            />
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                Quickipedia is committed to protecting and respecting your privacy. I
                                                confirm that I have read and understood the{" "}
                                                <a href="#" className="text-orange-500 underline">
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a href="#" className="text-orange-500 underline">
                                                    Terms of Website Use
                                                </a>
                                                .
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Input
                                                type="checkbox"
                                                className="mt-1 w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                                            />
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                I agree to receive other communications from Quickipedia.
                                            </p>
                                        </div>
                                    </div>

                                    <button className="w-full md:w-32 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Locations Section */}
                        <div className="bg-slate-900 py-20 px-4">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach us</h2>
                                    <p className="text-slate-400">
                                        Our team is across several locations to assist you.
                                    </p>
                                    <a
                                        href="mailto:partnerships@aureal.ai"
                                        className="text-orange-400 hover:text-orange-300 flex items-center justify-center gap-2 mt-4"
                                    >
                                        <Mail className="w-4 h-4" /> partnerships@quickipedia.com
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                    <div className="space-y-10">
                                        {[
                                            {
                                                city: "Delhi",
                                                addr: "1st Floor, 101, Chaudhary Market, Mayur Vihar-1, East Delhi, Delhi - 110091",
                                            },
                                            {
                                                city: "Bihar",
                                                addr: "Little Flower Khadi Village, Raxaul, East Champarat, Bihar - 845305",
                                            },
                                            {
                                                city: "Gujarat",
                                                addr: "Gangadhara, Surat, Gujarat - 394310",
                                            },
                                        ].map((loc) => (
                                            <div key={loc.city} className="space-y-2">
                                                <h3 className="text-xl font-bold text-orange-400">{loc.city}</h3>
                                                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                                                    {loc.addr}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-orange-400 text-sm hover:underline block mt-2"
                                                >
                                                    Get Directions →
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-linear-to-r from-orange-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                                            alt="Our Team Working"
                                            className="relative rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ring-1 ring-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured In / Logos Section */}
                        <div className="bg-slate-50 py-16 px-6 overflow-hidden border-t border-slate-200">
                            <div className="max-w-7xl mx-auto flex items-center gap-12">
                                <span className="text-2xl font-bold text-slate-800 shrink-0 whitespace-nowrap">
                                    Featured in
                                </span>

                                <div className="relative flex-1 overflow-hidden">
                                    {/* Left Fade Overlay */}
                                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                                    {/* Right Fade Overlay */}
                                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                                    {/* Animated Carousel */}
                                    <div className="flex animate-carousel gap-16 items-center">
                                        {[
                                            { name: "THE INDEPENDENT", font: "serif", weight: "bold" },
                                            { name: "Inc42", font: "sans", weight: "extrabold", color: "text-red-600" },
                                            { name: "The New York Times", font: "serif", weight: "black" },
                                            {
                                                name: "livemint",
                                                font: "sans",
                                                weight: "bold",
                                                color: "text-orange-500",
                                            },
                                            { name: "Forbes", font: "serif", weight: "black" },
                                            {
                                                name: "Business Today",
                                                font: "sans",
                                                weight: "bold",
                                                color: "text-cyan-600",
                                            },
                                        ]
                                            .concat([
                                                { name: "THE INDEPENDENT", font: "serif", weight: "bold" },
                                                {
                                                    name: "Inc42",
                                                    font: "sans",
                                                    weight: "extrabold",
                                                    color: "text-red-600",
                                                },
                                                { name: "The New York Times", font: "serif", weight: "black" },
                                                {
                                                    name: "livemint",
                                                    font: "sans",
                                                    weight: "bold",
                                                    color: "text-orange-500",
                                                },
                                                { name: "Forbes", font: "serif", weight: "black" },
                                                {
                                                    name: "Business Today",
                                                    font: "sans",
                                                    weight: "bold",
                                                    color: "text-cyan-600",
                                                },
                                            ])
                                            .map((logo, idx) => (
                                                <div
                                                    key={idx}
                                                    className="shrink-0 opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
                                                >
                                                    <span
                                                        className={`
                                                    ${logo.font === "serif" ? "font-serif" : "font-sans"}
                                                    ${logo.weight === "extrabold" ? "font-extrabold" : logo.weight === "black" ? "font-black" : "font-bold"}
                                                    ${logo.color || "text-slate-900"}
                                                    text-xl md:text-2xl tracking-tight whitespace-nowrap
                                                `}
                                                    >
                                                        {logo.name}
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
