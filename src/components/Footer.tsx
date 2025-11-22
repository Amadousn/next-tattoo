'use client';

import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-[#1a1a1a] pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <div className="w-24 h-24 relative mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Image 
                            src="/logo-new.png" 
                            alt="Logo Footer" 
                            fill 
                            className="object-contain"
                        />
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black text-white font-['Playfair_Display'] tracking-tighter mb-8">
                        NEXT <span className="text-[#8B0000]">TATTOO</span>
                    </h2>

                    <div className="flex gap-8">
                        {[Instagram, Facebook, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-500 hover:text-[#C9A961] transition-colors">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 border-t border-[#1a1a1a] pt-10 text-center md:text-left">
                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Cinzel']">Légal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                        </ul>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-gray-600 text-xs font-['Cinzel']">
                            © {new Date().getFullYear()} Next Tattoo Logistic. <br/>
                            Tous droits réservés.
                        </p>
                    </div>

                    <div className="md:text-right">
                        <h4 className="text-white font-bold mb-4 font-['Cinzel']">Studio</h4>
                        <p className="text-sm text-gray-500">
                            Paris 11ème & Les Ulis<br/>
                            Ouvert 7j/7
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
