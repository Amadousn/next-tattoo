'use client';

export default function Footer() {
    return (
        <footer className="relative bg-black border-t-2 border-[#C9A961]/30">
            {/* Fond texturé */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="w-full flex justify-center relative z-10">
                <div className="w-full max-w-7xl px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* À Propos */}
                    <div>
                        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-6">
                            Next <span className="text-[#C9A961]">Tattoo</span>
                        </h3>
                        <p className="font-['Cinzel'] text-sm text-[#E0E0E0] leading-relaxed mb-6">
                            Studio de tatouage et piercing professionnel à Paris et Les Ulis. Expertise reconnue en covering de cicatrices et reprise de tatouages.
                        </p>
                        <div className="flex gap-4">
                            <a 
                                href="https://instagram.com/next.tattoo_logistic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-[#E1306C] to-[#C13584] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://tiktok.com/@next_tattoo_logistic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-[#00f2ea] to-[#ff0050] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://wa.me/33624358280"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Paris */}
                    <div>
                        <h4 className="font-['Cinzel'] text-lg font-bold text-[#C9A961] mb-6 tracking-wider">PARIS</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                <div className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    90 Avenue de la République<br/>75011 Paris
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <div className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    Sur RDV<br/>Jeudi - Vendredi - Samedi
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Les Ulis */}
                    <div>
                        <h4 className="font-['Cinzel'] text-lg font-bold text-[#C9A961] mb-6 tracking-wider">LES ULIS</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                <div className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    Centre Commercial Les Boutiques<br/>Avenue de Bourgogne<br/>91940 Les Ulis
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <div className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                                    Sur RDV<br/>Lundi - Mardi - Mercredi
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-['Cinzel'] text-lg font-bold text-[#C9A961] mb-6 tracking-wider">CONTACT</h4>
                        <div className="space-y-3">
                            <a 
                                href="tel:+33624358280"
                                className="flex items-center gap-3 group"
                            >
                                <svg className="w-5 h-5 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                                <span className="font-['Cinzel'] text-sm text-[#E0E0E0] group-hover:text-[#C9A961] transition-colors">
                                    +33 6 24 35 82 80
                                </span>
                            </a>
                            <a 
                                href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                            >
                                <svg className="w-5 h-5 text-[#C9A961] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                </svg>
                                <span className="font-['Cinzel'] text-sm text-[#E0E0E0] group-hover:text-[#C9A961] transition-colors">
                                    Réserver sur Planity
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Ligne de séparation */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent mb-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="font-['Cinzel'] text-sm text-[#E0E0E0]">
                        © {new Date().getFullYear()} <span className="text-[#C9A961] font-bold">Next Tattoo Logistic</span>. Tous droits réservés.
                    </p>
                    <p className="font-['Cinzel'] text-xs text-[#C9A961]/60 mt-2">
                        Studio professionnel de tatouage et piercing à Paris & Les Ulis
                    </p>
                </div>
                </div>
            </div>
        </footer>
    );
}
