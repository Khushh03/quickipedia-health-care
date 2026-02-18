import { ChevronRight, Zap } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface CtaSectionProps {
    title: string
    description: string
    buttons: Array<{
        text: string
        variant: "primary" | "secondary"
        icon?: "zap" | "chevron"
        href?: string
    }>
    onContactClick?: () => void
}

export default function CtaSection({ title, description, buttons, onContactClick }: CtaSectionProps) {
    const getIcon = (iconName?: string) => {
        switch (iconName) {
            case "zap":
                return <Zap size={20} />
            case "chevron":
                return <ChevronRight size={20} />
            default:
                return null
        }
    }

    return (
        <section className="relative py-6 lg:py-12 bg-[#020d1a] overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute -bottom-20 left-20 w-96 h-96 bg-teal-400/5 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 uppercase tracking-tight">
                    {title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-teal-400 font-normal">{title.split(" ").slice(-1)}</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">{description}</p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {buttons.map((button, idx) => {
                        const className =
                            button.variant === "primary"
                                ? "px-10 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-500/20"
                                : "px-10 py-4 border border-white/10 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"

                        if (button.href) {
                            const isContactLink = button.href === "/contact-us"
                            return (
                                <Link
                                    key={idx}
                                    to={isContactLink ? undefined : (button.href as any)}
                                    onClick={(e) => {
                                        if (isContactLink && onContactClick) {
                                            e.preventDefault()
                                            onContactClick()
                                        }
                                    }}
                                    className={`${className} decoration-transparent cursor-pointer`}
                                >
                                    {button.icon && idx === 0 && getIcon(button.icon)}
                                    {button.text}
                                    {button.icon && idx === 1 && getIcon(button.icon)}
                                </Link>
                            )
                        }

                        return (
                            <button key={idx} className={className}>
                                {button.icon && idx === 0 && getIcon(button.icon)}
                                {button.text}
                                {button.icon && idx === 1 && getIcon(button.icon)}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
