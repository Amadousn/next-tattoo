'use client';

import Image from 'next/image';

const beforeAfterPairs = [
    { before: '/reprise/reprise-1.jpg', after: '/reprise/reprise-2.jpg' },
    { before: '/reprise/reprise-3.jpg', after: '/reprise/reprise-4.jpg' },
    { before: '/reprise/reprise-5.jpg', after: '/reprise/reprise-6.jpg' },
    { before: '/reprise/reprise-7.jpg', after: '/reprise/reprise-8.jpg' },
];

export default function CoveringSection() {
    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Fond texturé */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="w-full flex justify-center relative z-10">
                <div className="w-full max-w-7xl px-4 md:px-8">
                {/* En-tête */}
                <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 w-full">
                    <span className="text-[#C9A961] font-['Cinzel'] text-xs md:text-sm tracking-[0.4em] uppercase block mb-6">
                        Nos Spécialités
                    </span>
                    
                    <h2 className="mb-8 w-full text-center" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: '0.02em'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Covering</span>
                        {' '}<span className="text-white">&</span>{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Reprise</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-8 w-full">
                        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                        <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] shadow-[0_0_20px_rgba(139,0,0,0.6)]"></div>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                    </div>

                    <div className="w-full flex justify-center">
                        <p className="font-['Cinzel'] text-base md:text-lg max-w-3xl leading-relaxed text-[#E0E0E0] text-center" style={{
                            letterSpacing: '0.05em'
                        }}>
                            Transformez vos cicatrices en œuvres d'art ou donnez une nouvelle vie à vos anciens tatouages
                        </p>
                    </div>
                </div>

                {/* Services Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-6xl mx-auto">
                    {/* Covering de Cicatrice */}
                    <div className="bg-gradient-to-br from-black/40 to-black/20 border-2 border-[#C9A961]/30 p-8 hover:border-[#C9A961] transition-all duration-500">
                        <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold mb-4 text-white">
                            Covering de <span className="text-[#C9A961]">Cicatrice</span>
                        </h3>
                        <p className="font-['Cinzel'] text-sm md:text-base text-[#E0E0E0] leading-relaxed mb-6">
                            Transformez vos cicatrices en magnifiques œuvres d'art. Notre expertise en covering vous permet de retrouver confiance avec des tatouages artistiques personnalisés qui masquent parfaitement les imperfections.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Consultation gratuite et personnalisée</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Techniques adaptées à tous types de cicatrices</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Résultat naturel et durable</span>
                            </li>
                        </ul>
                    </div>

                    {/* Reprise de Tatouage */}
                    <div className="bg-gradient-to-br from-black/40 to-black/20 border-2 border-[#C9A961]/30 p-8 hover:border-[#C9A961] transition-all duration-500">
                        <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold mb-4 text-white">
                            Reprise de <span className="text-[#C9A961]">Tatouage</span>
                        </h3>
                        <p className="font-['Cinzel'] text-sm md:text-base text-[#E0E0E0] leading-relaxed mb-6">
                            Donnez une nouvelle vie à vos anciens tatouages. Cover-up complet, amélioration ou transformation, nous créons des designs qui dépassent vos attentes et effacent le passé.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Cover-up créatif et innovant</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Amélioration et retouche professionnelle</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#E0E0E0]">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Transformation complète garantie</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Titre Galerie */}
                <div className="text-center mb-12">
                    <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
                        Nos <span className="text-[#C9A961]">Réalisations</span>
                    </h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C9A961]"></div>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                    </div>
                </div>

                {/* Galerie Before/After */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                    {beforeAfterPairs.map((pair, index) => (
                        <div key={index} className="group w-full">
                            <div className="grid grid-cols-2 gap-2 relative w-full">
                                {/* Before */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                                    <div className="absolute inset-0 border-2 border-[#C9A961]/20 group-hover:border-[#C9A961]/60 transition-all duration-500 z-10"></div>
                                    <Image
                                        src={pair.before}
                                        alt="Avant transformation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>

                                {/* After */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                                    <div className="absolute inset-0 border-2 border-[#C9A961]/40 group-hover:border-[#C9A961] group-hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] transition-all duration-500 z-10"></div>
                                    <Image
                                        src={pair.after}
                                        alt="Après transformation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center w-full">
                    <a 
                        href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold text-base md:text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,169,97,0.5)] group"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        RÉSERVER UNE CONSULTATION
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}
