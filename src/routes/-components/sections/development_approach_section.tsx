import { ReactNode } from "react"

interface DevelopmentApproachSectionProps {
    title: string
    subtitle?: string
    steps: Array<{
        icon: ReactNode
        title: string
        description: string
    }>
}

export default function DevelopmentApproachSection({ title, subtitle, steps }: DevelopmentApproachSectionProps) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-muted via-background to-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
                    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative p-6 rounded-xl border border-border/50 bg-background hover:bg-primary/5 transition-all duration-300"
                        >
                            <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{idx + 1}</span>
                            </div>
                            <div className="mt-2 mb-3">{step.icon}</div>
                            <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
