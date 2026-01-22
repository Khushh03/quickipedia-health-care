import { ChevronRight, Zap, ActivitySquare } from "lucide-react"

interface HeroSectionProps {
    title: string
    subtitle: string
    description: string
    ctas: Array<{
        text: string
        variant: "primary" | "secondary"
        icon?: "zap" | "chevron"
    }>
}

export default function HeroSection({ title, subtitle, description, ctas }: HeroSectionProps) {
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
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-6xl font-bold text-foreground leading-tight">
                                    {title.split("Quickipedia Healthcare")[0]}
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-2">
                                        Quickipedia Healthcare
                                    </span>
                                </h1>
                            </div>

                            {/* Subheading */}
                            <p className="text-xl text-muted-foreground font-medium">{subtitle}</p>

                            {/* Description */}
                            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                {ctas.map((cta, idx) => (
                                    <button
                                        key={idx}
                                        className={
                                            cta.variant === "primary"
                                                ? "px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
                                                : "px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
                                        }
                                    >
                                        {cta.icon && idx === 0 && getIcon(cta.icon)}
                                        {cta.text}
                                        {cta.icon && idx === 1 && getIcon(cta.icon)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Visual Element */}
                        <div className="relative hidden md:block">
                            <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/30 backdrop-blur-sm p-8 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
                                <div className="relative z-10 text-center space-y-4">
                                    <ActivitySquare size={80} className="text-primary mx-auto animate-pulse" />
                                    <p className="text-muted-foreground text-lg font-medium">
                                        Advanced Healthcare Technology Platform
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
