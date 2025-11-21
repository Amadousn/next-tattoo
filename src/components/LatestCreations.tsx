'use client';

import Image from 'next/image';

const creations = [
    { id: 1, src: '/last-creation/creation-1.jpg', alt: 'Tatouage réaliste' },
    { id: 3, src: '/last-creation/creation-3.jpg', alt: 'Tatouage artistique' },
    { id: 5, src: '/last-creation/creation-5.jpg', alt: 'Composition florale' },
    { id: 7, src: '/last-creation/creation-7.jpg', alt: 'Tatouage portrait' },
    { id: 9, src: '/last-creation/creation-9.jpg', alt: 'Design ornemental' },
    { id: 11, src: '/last-creation/creation-11.jpg', alt: 'Pièce détaillée' },
    { id: 13, src: '/last-creation/creation-13.jpg', alt: 'Art corporel' },
    { id: 15, src: '/last-creation/creation-15.jpg', alt: 'Finesse du trait' },
    { id: 17, src: '/last-creation/creation-17.jpg', alt: 'Création unique' },
];

export default function LatestCreations() {
    // On double la liste pour l'effet infini
    const allCreations = [...creations, ...creations];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden w-full flex flex-col items-center">
            {/* Overlay sombre pour transition fluide */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 pointer-events-none z-10"></div>
            
            {/* Fond texturé subtil */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="w-full relative z-20">
                {/* En-tête de section */}
                <div className="w-full flex flex-col items-center justify-center text-center mb-12 md:mb-16 px-4">
                    <h2 className="mb-8 fade-in-up text-center w-full" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.2rem, 8vw, 5rem)',
                        fontWeight: 900,
                        lineHeight: 1.2,
                        letterSpacing: '0.02em',
                        color: '#FFFFFF'
                    }}>
                        Voir Nos <span style={{
                            background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 40px rgba(201, 169, 97, 0.2)',
                            display: 'inline-block'
                        }}>Créations</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-4 mb-10 w-full">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                        <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] shadow-[0_0_15px_rgba(139,0,0,0.5)]"></div>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                    </div>

                    {/* CTA Instagram intégré */}
                    <div className="w-full flex justify-center">
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-black border-2 border-[#C9A961] text-[#C9A961] font-['Cinzel'] font-bold tracking-[0.15em] transition-all duration-500 hover:border-[#E1306C] hover:text-white overflow-hidden"
                        >
                            {/* Fond animé au survol */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <svg className="w-6 h-6 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span className="text-sm md:text-base relative z-10 whitespace-nowrap">INSTAGRAM</span>
                            <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Marquee Infini */}
                <div className="relative w-full overflow-hidden py-8">
                    {/* Dégradés latéraux pour fondre les bords */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>

                    <div className="flex w-max animate-scroll hover:pause">
                        {allCreations.map((item, index) => (
                            <div 
                                key={`${item.id}-${index}`}
                                className="flex-none w-[300px] md:w-[400px] aspect-[4/5] mx-3 relative group/card"
                            >
                                <div className="relative w-full h-full overflow-hidden bg-black">
                                    {/* Bordure animée */}
                                    <div className="absolute inset-0 border-2 border-[#C9A961]/30 transition-all duration-700 group-hover/card:border-[#C9A961] group-hover/card:shadow-[0_0_40px_rgba(201,169,97,0.4),inset_0_0_40px_rgba(201,169,97,0.1)] z-20 pointer-events-none"></div>
                                    
                                    {/* Image */}
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover/card:scale-110 group-hover/card:brightness-75"
                                        sizes="(max-width: 768px) 300px, 400px"
                                    />
                                    
                                    {/* Overlay dégradé subtil au survol */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                                    
                                    {/* Effet de brillance au survol */}
                                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C9A961]/10 via-transparent to-transparent"></div>
                                    </div>
                                    
                                    {/* Coins décoratifs dorés */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A961] opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover/card:translate-x-0 group-hover/card:translate-y-0"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A961] opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover/card:translate-x-0 group-hover/card:translate-y-0"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A961] opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover/card:translate-x-0 group-hover/card:translate-y-0"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A961] opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover/card:translate-x-0 group-hover/card:translate-y-0"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
