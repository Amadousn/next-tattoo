'use client';

import Image from 'next/image';

const pricingTiers = [
    { size: '5 cm', price: '30€' },
    { size: '6 cm', price: '50€' },
    { size: '8 cm', price: '70€' },
    { size: '10 cm', price: '100€' },
    { size: '12 cm', price: '120€' },
    { size: '14 cm', price: '160€' },
    { size: '16 cm', price: '180€' },
    { size: '18 cm', price: '200€' },
    { size: '20 cm', price: '250€' },
    { size: '25 cm', price: '280€' },
];

export default function PricingSection() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
            {/* Fond texturé */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="w-full flex justify-center relative z-10">
                <div className="w-full max-w-7xl px-4 md:px-8">
                    {/* En-tête */}
                    <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 w-full">
                        <span className="text-[#C9A961] font-['Cinzel'] text-xs md:text-sm tracking-[0.4em] uppercase block mb-6">
                            Nos Tarifs
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
                            }}>Tarifs</span>
                            {' '}<span className="text-white">&</span>{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>Promotions</span>
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
                                Tarifs en fonction de la taille du tatouage - Prix variables si détails supplémentaires
                            </p>
                        </div>
                    </div>

                    {/* Badge Promotion */}
                    <div className="flex justify-center mb-12">
                        <div className="relative inline-block">
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white text-xs font-bold px-3 py-1 rotate-12 shadow-lg">
                                NOUVEAU
                            </div>
                            <div className="bg-gradient-to-r from-[#C9A961] to-[#A88B4A] px-8 py-4 flex items-center gap-4">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                                </svg>
                                <span className="font-['Cinzel'] font-bold text-black text-lg tracking-wider">
                                    POSSIBILITÉ DE PAYER EN PLUSIEURS FOIS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Grille de Tarifs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
                        {pricingTiers.map((tier, index) => (
                            <div 
                                key={index}
                                className="group relative bg-gradient-to-br from-black/60 to-black/30 border-2 border-[#C9A961]/30 p-6 hover:border-[#C9A961] hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] transition-all duration-500"
                            >
                                <div className="text-center">
                                    <div className="text-[#C9A961] font-['Cinzel'] text-sm tracking-wider mb-3">
                                        {tier.size}
                                    </div>
                                    <div className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                                        {tier.price}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Note importante */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="bg-black/40 border-l-4 border-[#C9A961] p-6">
                            <div className="flex items-start gap-4">
                                <svg className="w-6 h-6 text-[#C9A961] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                                </svg>
                                <div>
                                    <h4 className="font-['Cinzel'] font-bold text-white mb-2">À partir de...</h4>
                                    <p className="text-sm text-[#E0E0E0] leading-relaxed">
                                        Les tarifs indiqués sont des prix de base. Pour tous vos projets de tatouages, vous pouvez me contacter via mes réseaux sociaux pour un devis personnalisé en fonction de la complexité et des détails de votre design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a 
                            href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold text-base md:text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,169,97,0.5)] group"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            PRENDRE RENDEZ-VOUS
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
