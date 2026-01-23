export default function PartnersCarouselSection() {
    const partners = [
        { name: "deepc", type: "text" },
        { name: "Blackford", type: "bordered" },
        { name: "SECTRA", type: "with-subtitle", subtitle: "AMPLIFIER PARTNER" },
        { name: "INCEPTO", type: "with-icon" },
        { name: "AstraZeneca", type: "with-logo" },
        { name: "SIEMENS", type: "stacked", subtitle: "Healthineers" },
        { name: "medica", type: "text" },
    ]

    return (
        <section className="relative py-12 bg-gradient-to-br from-background via-muted to-background border-t border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    {/* Left Fade Overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>

                    {/* Right Fade Overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    {/* Animated Carousel */}
                    <div className="flex animate-carousel gap-12 items-center">
                        {/* First set of logos */}
                        {partners.map((partner, idx) => (
                            <div key={`set1-${idx}`} className="flex-shrink-0">
                                {partner.type === "text" && (
                                    <div className="text-muted-foreground text-xl font-light tracking-wider px-8">
                                        {partner.name}
                                    </div>
                                )}

                                {partner.type === "bordered" && (
                                    <div className="px-6 py-2 border border-border rounded">
                                        <span className="text-muted-foreground font-semibold text-sm">
                                            {partner.name}
                                        </span>
                                    </div>
                                )}

                                {partner.type === "with-subtitle" && (
                                    <div className="flex items-center gap-2 px-6">
                                        <div className="w-6 h-6 bg-muted rounded"></div>
                                        <span className="text-muted-foreground font-bold text-sm tracking-wider">
                                            {partner.name}
                                        </span>
                                        <span className="text-muted-foreground/50 text-xs">{partner.subtitle}</span>
                                    </div>
                                )}

                                {partner.type === "with-icon" && (
                                    <div className="flex items-center gap-2 px-6">
                                        <div className="w-5 h-5 bg-destructive rounded-full"></div>
                                        <span className="text-muted-foreground font-semibold text-sm">
                                            {partner.name}
                                        </span>
                                    </div>
                                )}

                                {partner.type === "with-logo" && (
                                    <div className="flex items-center gap-1 px-6">
                                        <span className="text-muted-foreground font-bold text-sm">{partner.name}</span>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-yellow-400 rotate-45 -mr-1"></div>
                                            <div className="w-2 h-2 bg-orange-400 rotate-45"></div>
                                        </div>
                                    </div>
                                )}

                                {partner.type === "stacked" && (
                                    <div className="text-muted-foreground text-sm px-6">
                                        <div className="font-bold">{partner.name}</div>
                                        <div className="text-xs -mt-1 text-primary">{partner.subtitle}</div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, idx) => (
                            <div key={`set2-${idx}`} className="flex-shrink-0">
                                {partner.type === "text" && (
                                    <div className="text-muted-foreground text-xl font-light tracking-wider px-8">
                                        {partner.name}
                                    </div>
                                )}

                                {partner.type === "bordered" && (
                                    <div className="px-6 py-2 border border-border rounded">
                                        <span className="text-muted-foreground font-semibold text-sm">
                                            {partner.name}
                                        </span>
                                    </div>
                                )}

                                {partner.type === "with-subtitle" && (
                                    <div className="flex items-center gap-2 px-6">
                                        <div className="w-6 h-6 bg-muted rounded"></div>
                                        <span className="text-muted-foreground font-bold text-sm tracking-wider">
                                            {partner.name}
                                        </span>
                                        <span className="text-muted-foreground/50 text-xs">{partner.subtitle}</span>
                                    </div>
                                )}

                                {partner.type === "with-icon" && (
                                    <div className="flex items-center gap-2 px-6">
                                        <div className="w-5 h-5 bg-destructive rounded-full"></div>
                                        <span className="text-muted-foreground font-semibold text-sm">
                                            {partner.name}
                                        </span>
                                    </div>
                                )}

                                {partner.type === "with-logo" && (
                                    <div className="flex items-center gap-1 px-6">
                                        <span className="text-muted-foreground font-bold text-sm">{partner.name}</span>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-yellow-400 rotate-45 -mr-1"></div>
                                            <div className="w-2 h-2 bg-orange-400 rotate-45"></div>
                                        </div>
                                    </div>
                                )}

                                {partner.type === "stacked" && (
                                    <div className="text-muted-foreground text-sm px-6">
                                        <div className="font-bold">{partner.name}</div>
                                        <div className="text-xs -mt-1 text-primary">{partner.subtitle}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
