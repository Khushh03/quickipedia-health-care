import { Zap } from "lucide-react"

interface AboutUsSectionProps {
    intro: {
        badge: string
        title: string
        paragraphs: string[]
        highlight: string
    }
    focus: {
        title: string
        description: string
        impacts: string[]
        decision: string
        decisionHighlight: string
        understanding: string
        understandingItems: string[]
        conclusion: string
    }
    whoWeWorkWith: {
        title: string
        description: string
        organizations: string[]
        clientNote: string
        clientHighlight: string
    }
    whatWeBuild: {
        title: string
        items: Array<{
            title: string
            description: string
        }>
    }
    philosophy: {
        title: string
        description: string
        beliefs: string[]
        principlesIntro: string
        principles: string[]
    }
    howWeWork: {
        title: string
        approach: {
            title: string
            description: string
            items: string[]
        }
        commitment: {
            title: string
            description: string
            engagementIntro: string
            items: string[]
        }
    }
    vision: {
        title: string
        description: string
        futurePoints: string[]
        longTerm: string
    }
    summary: {
        title: string
        description: string
        specializations: string[]
        closing: string
    }
    finalCta: {
        title: string
        description: string
        buttonText: string
        companyName: string
        tagline: string
    }
}

export default function AboutUsSection({
    intro,
    focus,
    whoWeWorkWith,
    whatWeBuild,
    philosophy,
    howWeWork,
    vision,
    summary,
    finalCta,
}: AboutUsSectionProps) {
    return (
        <section className="relative py-20 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">{intro.badge}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{intro.title}</h2>
                        {intro.paragraphs.map((paragraph, idx) => (
                            <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                        <p className="text-lg text-primary font-medium leading-relaxed">{intro.highlight}</p>
                    </div>

                    <div className="space-y-8">
                        {/* Our Focus */}
                        <div className="p-6 rounded-xl border border-border/50 bg-muted/30">
                            <h3 className="text-xl font-bold text-foreground mb-4">{focus.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{focus.description}</p>
                            <ul className="space-y-2">
                                {focus.impacts.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                        <span className="text-primary mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">{focus.decision}</p>
                            <p className="text-primary font-medium mt-2">{focus.decisionHighlight}</p>
                            <p className="text-muted-foreground leading-relaxed mt-2">{focus.understanding}</p>
                            <ul className="space-y-2 mt-2">
                                {focus.understandingItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                        <span className="text-primary mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">{focus.conclusion}</p>
                        </div>

                        {/* Who We Work With */}
                        <div className="p-6 rounded-xl border border-border/50 bg-muted/30">
                            <h3 className="text-xl font-bold text-foreground mb-4">{whoWeWorkWith.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">{whoWeWorkWith.description}</p>
                            <ul className="space-y-2">
                                {whoWeWorkWith.organizations.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                        <span className="text-primary mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">{whoWeWorkWith.clientNote}</p>
                            <p className="text-primary font-medium mt-2">{whoWeWorkWith.clientHighlight}</p>
                        </div>
                    </div>
                </div>

                {/* What We Build */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
                        {whatWeBuild.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whatWeBuild.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-border/50 bg-background hover:bg-primary/5 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Philosophy */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
                        {philosophy.title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {philosophy.beliefs.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-primary/30 bg-primary/10 text-center"
                            >
                                <span className="font-semibold text-primary">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{philosophy.principlesIntro}</p>
                        <div className="flex flex-wrap justify-center gap-6 mt-4">
                            {philosophy.principles.map((item, idx) => (
                                <span key={idx} className="px-4 py-2 bg-muted rounded-lg font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How We Work */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
                        {howWeWork.title}
                    </h2>
                    <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">{howWeWork.approach.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {howWeWork.approach.description}
                                </p>
                                <ul className="space-y-3">
                                    {howWeWork.approach.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    {howWeWork.commitment.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {howWeWork.commitment.description}
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {howWeWork.commitment.engagementIntro}
                                </p>
                                <ul className="space-y-3">
                                    {howWeWork.commitment.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Vision */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">{vision.title}</h2>
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12 border border-primary/30">
                        <div className="relative z-10">
                            <p className="text-xl text-foreground font-medium text-center mb-8">{vision.description}</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {vision.futurePoints.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-primary" />
                                        <span className="text-foreground font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-muted-foreground text-center mt-8 leading-relaxed">
                                {vision.longTerm}
                            </p>
                        </div>
                    </div>
                </div>

                {/* About Quickipedia Summary */}
                <div className="mt-16">
                    <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border border-border/50">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                            {summary.title}
                        </h2>
                        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8 max-w-3xl mx-auto">
                            {summary.description}
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {summary.specializations.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 bg-background rounded-lg border border-border/50 text-center"
                                >
                                    <span className="font-semibold text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-muted-foreground text-center mt-8 leading-relaxed">
                            {summary.closing}
                        </p>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{finalCta.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        {finalCta.description}
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2">
                        <Zap size={20} />
                        {finalCta.buttonText}
                    </button>
                    <div className="mt-6">
                        <p className="text-2xl font-bold text-foreground">{finalCta.companyName}</p>
                        <p className="text-primary font-medium">{finalCta.tagline}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
