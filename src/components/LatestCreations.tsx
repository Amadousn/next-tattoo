'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const creations = [
    {
        id: 1,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.24.11_5f943eaa.jpg',
        title: 'Création 1',
        category: 'Tattoo'
    },
    {
        id: 2,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.24.31_52d2d2a3.jpg',
        title: 'Création 2',
        category: 'Tattoo'
    },
    {
        id: 3,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.10_8636f1fe.jpg',
        title: 'Création 3',
        category: 'Tattoo'
    },
    {
        id: 4,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.10_e213fa30.jpg',
        title: 'Création 4',
        category: 'Tattoo'
    },
    {
        id: 5,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.11_824a4c4c.jpg',
        title: 'Création 5',
        category: 'Tattoo'
    },
    {
        id: 6,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.11_9844ab73.jpg',
        title: 'Création 6',
        category: 'Tattoo'
    },
    {
        id: 7,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.12_3596b68b.jpg',
        title: 'Création 7',
        category: 'Tattoo'
    },
    {
        id: 8,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.17_102889d2.jpg',
        title: 'Création 8',
        category: 'Tattoo'
    },
    {
        id: 9,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.18_667a23ef.jpg',
        title: 'Création 9',
        category: 'Tattoo'
    },
    {
        id: 10,
        image: '/creations/WhatsApp Image 2025-11-22 à 21.42.19_7e970cc3.jpg',
        title: 'Création 10',
        category: 'Tattoo'
    }
];

export default function LatestCreations() {
    // On triple la liste pour l'effet infini encore plus fluide
    const allCreations = [...creations, ...creations, ...creations];

    return (
        <section className="relative py-32 bg-[#0a0a0a] overflow-hidden w-full">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="w-full relative z-20"
            >
                {/* En-tête de section amélioré */}
                <div className="text-center mb-20 px-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 border border-[#C9A961]/30 text-[#C9A961] font-['Cinzel'] text-sm tracking-[0.3em] mb-6"
                    >
                        GALERIE EXCLUSIVE
                    </motion.span>
                    
                    <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-8">
                        NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] via-[#F5F5DC] to-[#C9A961]">CRÉATIONS</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto"></div>
                </div>

                {/* Marquee Infini Ultra-Fluide */}
                <div className="relative w-full overflow-visible py-12">
                    {/* Masques latéraux */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>

                    <motion.div 
                        className="flex w-max"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ 
                            duration: 40, 
                            ease: "linear", 
                            repeat: Infinity 
                        }}
                    >
                        {allCreations.map((item, index) => (
                            <div 
                                key={`${item.id}-${index}`}
                                className="relative w-[350px] md:w-[450px] aspect-[3/4] mx-6 group perspective-1000"
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt="Tatouage Next Tattoo"
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[30%]"
                                        sizes="(max-width: 768px) 350px, 450px"
                                    />
                                    
                                    {/* Overlay Premium */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                                    
                                    {/* Cadre Doré Animé */}
                                    <div className="absolute inset-0 border border-[#C9A961]/0 group-hover:border-[#C9A961]/50 transition-all duration-500 z-20"></div>
                                    
                                    {/* Effet de Scan */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A961]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out z-30"></div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Instagram */}
                <div className="flex justify-center mt-16">
                    <a 
                        href="https://www.instagram.com/next.tattoo__logistic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative px-10 py-5 overflow-hidden border border-[#C9A961]/30 bg-[#0a0a0a] hover:border-[#C9A961] transition-colors duration-300"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#C9A961]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                        <span className="font-['Cinzel'] font-bold text-white tracking-[0.2em] flex items-center gap-3 relative z-10">
                            VOIR TOUTES NOS CRÉATIONS SUR INSTAGRAM
                            <svg className="w-5 h-5 text-[#C9A961]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
