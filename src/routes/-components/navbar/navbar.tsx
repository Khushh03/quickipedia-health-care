import React from "react"
import { Menu, Globe, ChevronDown } from "lucide-react"
import { Link } from "@tanstack/react-router"
import ContactModal from "./contact-modal"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const navLinks = [
        { name: "Home", href: "/", hasChevron: true },
        { name: "About Us", href: "/about-us" },
        { name: "Our Services", href: "/solutions" },
        { name: "Contact Us", href: "/contact-us" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-[#050d14] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 md:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl md:text-2xl font-light text-[#ff7c5c] tracking-tight">
                                Quickipedia
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href as any}
                                className="px-3 py-2 text-[13px] font-medium text-slate-200 hover:text-[#ff7c5c] transition-colors flex items-center gap-1 decoration-transparent"
                            >
                                {link.name}
                                {link.hasChevron && <ChevronDown size={14} className="mt-0.5" />}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-5 py-2 text-[13px] border border-white/20 rounded-full text-[#ff7c5c] hover:bg-white/5 transition-all"
                        >
                            Reach out to us
                        </button>

                        {/* <div className="flex items-center gap-2 text-slate-200 cursor-pointer group">
                            <Globe size={18} className="text-slate-200" />
                            <span className="text-[13px] font-medium">Global</span>
                            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </div> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-3 py-1.5 text-xs border border-white/20 rounded-full text-[#ff7c5c]"
                        >
                            Reach out
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-1 text-slate-300"
                            aria-label="Toggle menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#050d14]">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href as any}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-slate-200 hover:text-[#ff7c5c] transition-all decoration-transparent"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-4 py-3 border-t border-white/5 mt-2">
                            <div className="flex items-center gap-2 text-slate-200">
                                <Globe size={18} />
                                <span className="text-sm font-medium">Global</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    )
}
