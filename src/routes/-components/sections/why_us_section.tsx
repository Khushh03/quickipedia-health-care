import { Users, Target, CheckCircle, Layers } from "lucide-react"
import { ReactNode } from "react"

interface WhyUsSectionProps {
    badge: string
    title: string
    description: string
    differentiators: Array<{
        icon: "users" | "target" | "check" | "layers"
        title: string
        description: string
    }>
}

export default function WhyUsSection({ badge, title, description, differentiators }: WhyUsSectionProps) {
    const getIcon = (iconName: string): ReactNode => {
        switch (iconName) {
            case "users":
                return <Users size={24} className="text-primary" />
            case "target":
                return <Target size={24} className="text-primary" />
            case "check":
                return <CheckCircle size={24} className="text-primary" />
            case "layers":
                return <Layers size={24} className="text-primary" />
            default:
                return null
        }
    }

    return (
        <section className="relative py-20 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">{badge}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>

                        <div className="space-y-4 pt-4">
                            {differentiators.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        {getIcon(item.icon)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/30 overflow-hidden p-8">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-24 bg-gradient-to-br from-background to-muted rounded-lg border border-primary/30 backdrop-blur-sm"
                                        />
                                    ))}
                                </div>
                                <div className="text-center">
                                    <p className="text-primary font-medium">Healthcare-Grade Technology Platform</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Compliant, Secure, and Reliable
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
