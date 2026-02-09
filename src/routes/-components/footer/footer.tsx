import { Mail, Linkedin, Github, Youtube } from "lucide-react"
import { Link } from "@tanstack/react-router"

const footerSections = [
    {
        title: "Solutions",
        links: [
            { name: "AI-Powered Medical Imaging" },
            { name: "Hospital Management Systems" },
            { name: "Clinical Decision Support" },
            { name: "Patient Engagement" },
            { name: "Telehealth" },
        ],
    },
    {
        title: "Focus Areas",
        links: [{ name: "Global Health" }, { name: "Life Sciences" }, { name: "Channel Partners" }],
    },
    /* {
        title: "Resources",
        links: [
            { name: "Insights", href: "/blog/silicosis" },
            { name: "News and Press" },
            { name: "Impact" },
            { name: "Evidence" },
            { name: "Blogs", href: "/blog/silicosis" },
        ],
    }, */
    {
        title: "About",
        links: [
            { name: "About Us", href: "/about-us" },
            { name: "Our Team" },
            { name: "Testimonials" },
            { name: "Our Services", href: "/solutions" },
            { name: "Contact Us", href: "/contact-us" },
            { name: "Careers" },
        ],
    },
    {
        title: "Partnerships",
        links: [{ name: "India Health Fund" }, { name: "CaritasKlinikum Saarbrücken" }, { name: "AWS" }],
    },
]

const socialLinks = [
    { icon: Mail, label: "Email", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
]

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-100">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Footer Sections Grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={(link.href || "#") as any}
                                            className="text-sm text-slate-400 transition-colors hover:text-slate-100 decoration-transparent"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-slate-700"></div>

                {/* Bottom Section */}
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <img src="/quickipedia-logo.png" alt="Quickipedia Healthcare" className="h-10 md:h-12 w-auto" />
                        <div>
                            <p className="text-sm font-semibold text-slate-300">Quickipedia IT Innovation Pvt Ltd</p>
                            <p className="max-w-xs text-sm text-slate-400">
                                Quickipedia is a healthcare-focused technology company. Our mission is to build the
                                technical backbone of modern healthcare systems.
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-start gap-4 md:items-end">
                        <p className="text-sm font-semibold text-slate-300">Follow us</p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="rounded-lg bg-slate-800 p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-slate-700"></div>

                {/* Legal Footer */}
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex flex-wrap gap-6 text-xs text-slate-400">
                        <a href="#" className="transition-colors hover:text-slate-100">
                            Privacy Notice
                        </a>
                        <a href="#" className="transition-colors hover:text-slate-100">
                            Security and Regulatory
                        </a>
                        <a href="#" className="transition-colors hover:text-slate-100">
                            Legal
                        </a>
                    </div>
                    <p className="text-xs text-slate-500">
                        © 2026 Quickipedia IT Innovation Pvt Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
