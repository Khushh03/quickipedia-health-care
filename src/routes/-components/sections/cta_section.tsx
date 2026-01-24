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
}

export default function CtaSection({ title, description, buttons }: CtaSectionProps) {
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
        <section className="relative py-20 bg-linear-to-r from-primary to-secondary overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed font-weight-400">{description}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {buttons.map((button, idx) => {
                        const className =
                            button.variant === "primary"
                                ? "px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
                                : "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"

                        if (button.href) {
                            return (
                                <Link
                                    key={idx}
                                    to={button.href as any}
                                    className={`${className} decoration-transparent`}
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
