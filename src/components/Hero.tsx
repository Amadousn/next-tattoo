'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Effets de parallaxe
    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Variantes d'animation pour l'apparition
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
            {/* Image de fond avec Parallaxe */}
            <motion.div 
                style={{ y: yBackground }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/tattoo-background.jpg"
                    alt="Background Tattoo"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.6 }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a]"></div>
                
                {/* Texture bruit animée */}
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-noise"></div>
            </motion.div>

            {/* Particules d'ambiance (Lueurs) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8B0000] rounded-full blur-[150px] opacity-20"
                />
                <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#C9A961] rounded-full blur-[120px] opacity-10"
                />
            </div>

            {/* Contenu principal */}
            <motion.div 
                style={{ y: yText, opacity: opacityText }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center"
            >
                {/* Ornement Haut */}
                <motion.div variants={itemVariants} className="mb-8">
                    <svg className="w-32 h-auto text-[#C9A961] opacity-80" viewBox="0 0 100 20" fill="none">
                        <path d="M0 10 Q25 20 50 10 Q75 0 100 10" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="50" cy="10" r="3" fill="#8B0000" />
                    </svg>
                </motion.div>

                {/* Titre Principal */}
                <motion.h1 variants={itemVariants} className="font-playfair font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-6 text-white relative">
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                            L'ART DU
                        </span>
                    </span>
                    <br />
                    <span className="relative inline-block mt-2">
                        <span className="absolute -inset-2 bg-[#C9A961]/10 blur-xl rounded-full"></span>
                        <span className="relative z-10 bg-gradient-to-r from-[#C9A961] via-[#F5F5DC] to-[#C9A961] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,169,97,0.3)]">
                            TATOUAGE
                        </span>
                    </span>
                </motion.h1>

                {/* Ligne séparatrice */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 my-8 opacity-80">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#8B0000] shadow-[0_0_10px_#8B0000]"></div>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A961]"></div>
                </motion.div>

                {/* Sous-titre */}
                <motion.p variants={itemVariants} className="font-cinzel text-lg md:text-2xl text-neutral-300 tracking-[0.2em] mb-12 max-w-3xl mx-auto leading-relaxed">
                    STUDIO PROFESSIONNEL <span className="text-[#C9A961] font-bold mx-2">PARIS</span> & <span className="text-[#C9A961] font-bold mx-2">LES ULIS</span>
                </motion.p>

                {/* Boutons CTA */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="flex flex-col items-center gap-8 w-full">
                        {/* Boutons principaux */}
                        <div className="flex flex-col sm:flex-row gap-6 items-center w-full md:w-auto">
                            <a
                                href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto group relative px-8 py-4 bg-[#C9A961] text-black font-cinzel font-bold tracking-wider overflow-hidden transition-transform hover:scale-105 text-center"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    PRENDRE RENDEZ-VOUS
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                            
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 border border-[#5A0000] text-[#F5F5DC] font-cinzel font-bold tracking-wider hover:bg-[#5A0000]/20 transition-colors duration-300 flex items-center justify-center"
                            >
                                NOUS CONTACTER
                            </Link>
                        </div>

                        {/* Badge Avis Client */}
                        <div 
                            className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(i => (
                                    <svg key={i} className="w-5 h-5 text-[#C9A961] fill-current drop-shadow-[0_0_5px_rgba(201,169,97,0.5)]" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <span className="text-white font-bold text-lg">4.8/5</span>
                                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                <span className="text-gray-300 group-hover:text-[#C9A961] transition-colors underline underline-offset-4 decoration-[#C9A961]/30 group-hover:decoration-[#C9A961]">
                                    +300 avis clients
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    variants={itemVariants}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#C9A961] to-transparent opacity-50"
                    ></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
