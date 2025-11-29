'use client';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-[#1a1a1a] pt-20 pb-10">
            <div className="container mx-auto px-4">
                {/* En-tête Footer */}
                <div className="flex flex-col items-center mb-16">
                    <div className="w-24 h-24 relative mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Image 
                            src="/logo-new.png" 
                            alt="Logo Footer" 
                            fill 
                            className="object-contain"
                        />
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black text-white font-['Playfair_Display'] tracking-tighter mb-4">
                        NEXT <span className="text-[#C9A961]">TATTOO</span>
                    </h2>

                    <p className="text-gray-400 text-center max-w-2xl mb-8 text-sm leading-relaxed">
                        Studio de tatouage et piercing professionnel à Paris et Les Ulis. 
                        Expertise reconnue en covering de cicatrices et reprise de tatouages.
                    </p>

                    {/* Réseaux Sociaux */}
                    <div className="flex gap-6">
                        <a 
                            href="https://www.facebook.com/NextTattooLogistique" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#C9A961] transition-colors"
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/next.tattoo__logistic" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#C9A961] transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.snapchat.com/add/Weezyprodtattoo" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#C9A961] transition-colors"
                            aria-label="Snapchat"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.197 0c-3.309 0-5.984 2.17-5.984 5.389 0 1.693.74 3.074 1.953 3.963-.137.438-.484 1.378-1.619 1.176-1.062-.194-2.457-.36-3.235 1.495-.194.458.195.923 1.366 1.362.294.111 1.071.337 1.389.434 0 .008.01.017.01.025 0 .685-.404.882-1.457 1.32-1.34.558-2.626 1.096-2.62 2.527.006 1.176 1.009 1.68 1.84 1.68.413 0 .868-.127 1.313-.26 1.146-.333 2.446-.382 3.438.346.807.591 1.828.943 3.606.943 1.699 0 2.74-.334 3.553-.927.992-.723 2.293-.672 3.438-.339.446.133.901.26 1.313.26.831 0 1.834-.504 1.84-1.68.006-1.432-1.28-1.969-2.62-2.527-1.053-.438-1.457-.635-1.457-1.32 0-.008.01-.017.01-.025.319-.097 1.096-.323 1.389-.434 1.171-.439 1.56-.904 1.366-1.362-.778-1.854-2.173-1.688-3.235-1.495-1.135.202-1.482-.738-1.619-1.176 1.213-.889 1.953-2.27 1.953-3.963C18.181 2.17 15.506 0 12.197 0z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@next_tattoo_logistic?lang=fr" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#C9A961] transition-colors"
                            aria-label="TikTok"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Informations Studios */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-[#1a1a1a] pt-12 mb-12">
                    {/* Paris */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Cinzel'] text-lg">PARIS</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>90 Avenue de la République</p>
                            <p>75011 Paris</p>
                            <p className="text-[#C9A961] font-bold mt-4">Ouvert 7J/7</p>
                            <p>24H/24</p>
                        </div>
                    </div>
                    
                    {/* Les Ulis */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Cinzel'] text-lg">LES ULIS</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>Centre Commercial Les Boutiques</p>
                            <p>Avenue de Bourgogne</p>
                            <p>91940 Les Ulis</p>
                            <p className="text-[#C9A961] font-bold mt-4">Ouvert 7J/7</p>
                            <p>24H/24</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Cinzel'] text-lg">CONTACT</h4>
                        <div className="space-y-4 text-sm">
                            <a href="tel:+33624358280" className="block text-[#C9A961] hover:text-white transition-colors font-bold">
                                +33 6 24 35 82 80
                            </a>
                            <a 
                                href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-300 font-['Cinzel'] font-bold"
                            >
                                Réserver sur Planity
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#1a1a1a] pt-8 text-center">
                    <p className="text-gray-600 text-xs font-['Cinzel']">
                        © {new Date().getFullYear()} Next Tattoo Logistic. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
