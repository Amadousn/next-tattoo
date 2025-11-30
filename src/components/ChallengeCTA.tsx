'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ChallengeCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Petit délai à l'apparition pour ne pas surcharger l'arrivée sur le site
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-700 ease-out ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <Link
                href="/challenge"
                className="relative group flex items-center"
            >
                {/* Onglet Principal */}
                <div className="relative bg-gradient-to-b from-red-900 to-black border-l-2 border-t-2 border-b-2 border-red-500 p-3 rounded-l-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] overflow-hidden group-hover:w-auto transition-all duration-300">
                    
                    {/* Fond animé feu/danger */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    
                    <div className="flex flex-col items-center gap-2 writing-mode-vertical text-orientation-upright py-2">
                        {/* Icône Danger */}
                        <div className="relative">
                            <span className="absolute -inset-2 bg-red-500 rounded-full blur opacity-40 animate-ping"></span>
                            <span className="relative text-xl">⚠️</span>
                        </div>
                        
                        {/* Texte Vertical */}
                        <span className="text-white font-['Cinzel'] font-bold text-sm tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap pt-2">
                            DÉFI 800€
                        </span>
                    </div>
                </div>

                {/* Tooltip / Info-bulle au survol (apparait à gauche) */}
                <div className="absolute right-full mr-4 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    <div className="bg-black/90 border border-red-500 text-white p-4 rounded-lg shadow-xl w-64 backdrop-blur-md relative">
                        {/* Flèche */}
                        <div className="absolute top-1/2 -right-2 w-4 h-4 bg-black border-t border-r border-red-500 transform rotate-45 -translate-y-1/2"></div>
                        
                        <h4 className="font-bold text-red-500 mb-1 font-['Cinzel']">TENTE LE DIABLE</h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            Gagne ton tatouage complet bras (valeur 1500€+) ou perds 800€. 
                            <br/>
                            <span className="text-white font-bold mt-1 block">Oseras-tu cliquer ?</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
