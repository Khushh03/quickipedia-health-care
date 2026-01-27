import React from "react"
import { Menu } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Solutions", href: "/solutions" },
        { name: "About", href: "/about-us" },
        { name: "Insights", href: "/blog/silicosis" },
        { name: "Contact", href: "/contact-us" },
    ]

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-xl md:text-2xl font-normal bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                Quickipedia Healthcare
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href as any}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-200 decoration-transparent"
                                activeProps={{ className: "text-orange-500 bg-white/5" }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} className="text-slate-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-lg">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href as any}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-200 decoration-transparent"
                                activeProps={{ className: "text-orange-500 bg-white/5" }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
