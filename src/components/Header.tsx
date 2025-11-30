'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

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
                            <Link
                                href="/tatouage"
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                TATOUAGE
                            </Link>
                            
                            {/* Dropdown Prestations */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider py-4">
                                    PRESTATIONS
                                    <ChevronDown size={14} />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black/95 backdrop-blur-md border border-[#333] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2 flex flex-col">
                                        <Link
                                            href="/flash-tattoo"
                                            className="font-['Cinzel'] text-xs text-gray-300 hover:text-[#C9A961] hover:bg-white/5 py-3 px-4 text-left transition-colors"
                                        >
                                            FLASH TATTOO
                                        </Link>
                                        <Link
                                            href="/covering"
                                            className="font-['Cinzel'] text-xs text-gray-300 hover:text-[#C9A961] hover:bg-white/5 py-3 px-4 text-left transition-colors"
                                        >
                                            COVERING
                                        </Link>
                                        <Link
                                            href="/piercings"
                                            className="font-['Cinzel'] text-xs text-gray-300 hover:text-[#C9A961] hover:bg-white/5 py-3 px-4 text-left transition-colors"
                                        >
                                            PIERCINGS
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/formation"
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                FORMATION
                            </Link>
                            <Link
                                href="/contact"
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider"
                            >
                                CONTACT
                            </Link>
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
                className={`lg:hidden absolute top-full left-0 right-0 bg-[#050505] border-t border-[#C9A961]/20 transition-all duration-500 overflow-hidden z-[60] ${
                    isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-7xl px-4 md:px-8 py-6">
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="/tatouage"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                TATOUAGE
                            </Link>
                            <Link
                                href="/flash-tattoo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                FLASH TATTOO
                            </Link>
                            <Link
                                href="/formation"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                FORMATION
                            </Link>
                            <Link
                                href="/covering"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                COVERING
                            </Link>
                            <Link
                                href="/piercings"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                PIERCINGS
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Cinzel'] text-sm text-white hover:text-[#C9A961] transition-colors duration-300 tracking-wider text-left py-3 border-b border-[#C9A961]/10"
                            >
                                CONTACT
                            </Link>
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
