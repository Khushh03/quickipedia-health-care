export default function PartnersCarouselSection() {
    const partners = [
        { name: "SurgiKart", logo: "/assets/partners/surgikart.jpg", url: "https://surgikartindia.com" },
        { name: "Kamal Hospital", logo: "/assets/partners/kamal-hospital.png", url: "https://kamalhospital.com" },
        { name: "Dr. Pawan Gupta", logo: "/assets/partners/dr-pawan-gupta.png", url: "https://drpawangupta.com" },
        {
            name: "Little Flower Leprosy",
            logo: "/assets/partners/little-flower-leprosy.png",
            url: "https://littleflowerleprosy.org",
        },
        { name: "RespiKart", logo: "/assets/partners/respikart.png", url: "https://respikart.com" },
    ]

    return (
        <section className="relative py-6 lg:py-12 bg-background border-t border-white/5 overflow-hidden">
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
                            <a
                                key={`set1-${idx}`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-12 w-auto object-contain max-w-[180px]"
                                />
                            </a>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, idx) => (
                            <a
                                key={`set2-${idx}`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-12 w-auto object-contain max-w-[180px]"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
