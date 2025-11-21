'use client';

export default function InfoSection() {
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
                            Informations Pratiques
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
                            }}>Nous Trouver</span>
                        </h2>

                        <div className="flex items-center justify-center gap-4 mb-8 w-full">
                            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] shadow-[0_0_20px_rgba(139,0,0,0.6)]"></div>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                        </div>
                    </div>

                    {/* Badge Horaires */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-gradient-to-r from-[#C9A961] to-[#A88B4A] px-8 py-4 flex items-center gap-4">
                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <div className="text-center">
                                <div className="font-['Playfair_Display'] font-bold text-black text-2xl">OUVERT</div>
                                <div className="font-['Cinzel'] text-black text-sm tracking-wider">DU LUNDI AU DIMANCHE</div>
                            </div>
                        </div>
                    </div>

                    {/* Adresses */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
                        {/* Paris */}
                        <div className="group bg-gradient-to-br from-black/60 to-black/30 border-2 border-[#C9A961]/30 p-8 hover:border-[#C9A961] hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] transition-all duration-500">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#A88B4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-center mb-4 text-white">
                                PARIS
                            </h3>
                            <div className="text-center space-y-2 mb-6">
                                <p className="font-['Cinzel'] text-base text-[#E0E0E0]">
                                    90 Avenue de la République
                                </p>
                                <p className="font-['Cinzel'] text-base text-[#C9A961] font-bold">
                                    75011 PARIS
                                </p>
                            </div>
                            <div className="bg-black/40 border-l-4 border-[#C9A961] p-4 mb-6">
                                <p className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    <span className="text-[#C9A961] font-bold">Sur RDV:</span> Jeudi - Vendredi - Samedi
                                </p>
                            </div>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=90+Avenue+de+la+République+75011+Paris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold tracking-wider hover:scale-105 transition-transform duration-300"
                            >
                                VOIR SUR LA CARTE
                            </a>
                        </div>

                        {/* Les Ulis */}
                        <div className="group bg-gradient-to-br from-black/60 to-black/30 border-2 border-[#C9A961]/30 p-8 hover:border-[#C9A961] hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] transition-all duration-500">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#A88B4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-center mb-4 text-white">
                                LES ULIS
                            </h3>
                            <div className="text-center space-y-2 mb-6">
                                <p className="font-['Cinzel'] text-base text-[#E0E0E0]">
                                    Centre Commercial Les Boutiques
                                </p>
                                <p className="font-['Cinzel'] text-base text-[#E0E0E0]">
                                    Avenue de Bourgogne
                                </p>
                                <p className="font-['Cinzel'] text-base text-[#C9A961] font-bold">
                                    91940 LES ULIS
                                </p>
                            </div>
                            <div className="bg-black/40 border-l-4 border-[#C9A961] p-4 mb-6">
                                <p className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    <span className="text-[#C9A961] font-bold">Sur RDV:</span> Lundi - Mardi - Mercredi
                                </p>
                            </div>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Centre+Commercial+Les+Boutiques+Avenue+de+Bourgogne+91940+Les+Ulis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold tracking-wider hover:scale-105 transition-transform duration-300"
                            >
                                VOIR SUR LA CARTE
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            Nous <span className="text-[#C9A961]">Contacter</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                            {/* WhatsApp */}
                            <a 
                                href="https://wa.me/33624358280"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 border-2 border-[#25D366]/30 p-6 hover:border-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-500"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <svg className="w-12 h-12 text-[#25D366] mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <div className="font-['Cinzel'] text-sm text-[#25D366] mb-2">WhatsApp</div>
                                    <div className="font-['Cinzel'] text-base text-white font-bold">+33 6 24 35 82 80</div>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a 
                                href="https://instagram.com/next.tattoo_logistic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-[#E1306C]/20 to-[#C13584]/20 border-2 border-[#E1306C]/30 p-6 hover:border-[#E1306C] hover:shadow-[0_0_30px_rgba(225,48,108,0.3)] transition-all duration-500"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <svg className="w-12 h-12 text-[#E1306C] mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    <div className="font-['Cinzel'] text-sm text-[#E1306C] mb-2">Instagram</div>
                                    <div className="font-['Cinzel'] text-base text-white font-bold">@next.tattoo_logistic</div>
                                </div>
                            </a>

                            {/* TikTok */}
                            <a 
                                href="https://tiktok.com/@next_tattoo_logistic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-[#00f2ea]/20 to-[#ff0050]/20 border-2 border-[#00f2ea]/30 p-6 hover:border-[#00f2ea] hover:shadow-[0_0_30px_rgba(0,242,234,0.3)] transition-all duration-500"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <svg className="w-12 h-12 text-[#00f2ea] mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                    </svg>
                                    <div className="font-['Cinzel'] text-sm text-[#00f2ea] mb-2">TikTok</div>
                                    <div className="font-['Cinzel'] text-base text-white font-bold">@next_tattoo_logistic</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
