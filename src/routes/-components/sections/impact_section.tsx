interface ImpactSectionProps {
    title: string
    subtitle?: string
    stats: Array<{
        number: string
        label: string
    }>
    additionalInfo?: string[]
}

export default function ImpactSection({ title, subtitle, stats, additionalInfo }: ImpactSectionProps) {
    return (
        <section className="relative py-20 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
                    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {additionalInfo && additionalInfo.length > 0 && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex flex-wrap justify-center gap-6 text-muted-foreground">
                            {additionalInfo.map((info, idx) => (
                                <span key={idx} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    {info}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
