interface DomainsSectionProps {
    title: string
    subtitle?: string
    domains: string[]
}

export default function DomainsSection({ title, subtitle, domains }: DomainsSectionProps) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
                    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {domains.map((domain, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                <span className="font-semibold text-foreground">{domain}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
