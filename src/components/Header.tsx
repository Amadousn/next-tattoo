'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(201,169,97,0.2)]' 
                    : 'bg-transparent'
            }`}
        >
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl px-4 md:px-8">
                    <div className="flex items-center justify-between h-24 md:h-32">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-16 h-16 md:w-20 md:h-20">
                                <Image
                                    src="/logo-new.png"
                                    alt="Next Tattoo Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <div className="hidden sm:block">
                                <div className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white">
                                    Next <span className="text-[#C9A961]">Tattoo</span>
                                </div>
                                <div className="font-['Cinzel'] text-xs text-[#C9A961] tracking-[0.2em]">
                                    LOGISTIC
                                </div>
                            </div>
                        </Link>

                        {/* Navigation Desktop */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <button
                                onClick={() => scrollToSection('creations')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                CRÉATIONS
                            </button>
                            <button
                                onClick={() => scrollToSection('tarifs')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                TARIFS
                            </button>
                            <button
                                onClick={() => scrollToSection('covering')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                COVERING
                            </button>
                            <button
                                onClick={() => scrollToSection('piercings')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                PIERCINGS
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                CONTACT
                            </button>
                        </nav>

                        {/* CTA Button Desktop */}
                        <a
                            href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold text-sm tracking-wider hover:scale-105 hover:shadow-[0_0_20px_rgba(201,169,97,0.5)] transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            RÉSERVER
                        </a>

                        {/* Burger Menu Mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center group"
                            aria-label="Menu"
                        >
                            <span className={`w-6 h-0.5 bg-[#C9A961] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-[#C9A961] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-[#C9A961] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            <div 
                className={`lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-t border-[#C9A961]/20 transition-all duration-500 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-7xl px-4 md:px-8 py-6">
                        <nav className="flex flex-col gap-4">
                            <button
                                onClick={() => scrollToSection('creations')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                CRÉATIONS
                            </button>
                            <button
                                onClick={() => scrollToSection('tarifs')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                TARIFS
                            </button>
                            <button
                                onClick={() => scrollToSection('covering')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                COVERING
                            </button>
                            <button
                                onClick={() => scrollToSection('piercings')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                PIERCINGS
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                CONTACT
                            </button>
                            <a
                                href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-4 mt-4 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold text-sm tracking-wider hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                RÉSERVER
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
