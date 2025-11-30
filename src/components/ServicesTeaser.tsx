'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PenTool, GraduationCap, Syringe, Zap, RefreshCw } from 'lucide-react';

const services = [
    {
        icon: <PenTool size={40} />,
        title: "TATOUAGE",
        description: "Projets personnalisés, réalisme, et créations uniques par nos artistes experts.",
        link: "/tatouage",
        color: "from-[#C9A961] to-[#A88B4A]"
    },
    {
        icon: <Zap size={40} />,
        title: "FLASH TATTOO",
        description: "Motifs prêts à tatouer, disponibles immédiatement. Premier arrivé, premier servi.",
        link: "/flash-tattoo",
        color: "from-[#C9A961] to-[#A88B4A]"
    },
    {
        icon: <RefreshCw size={40} />,
        title: "COVERING & REPRISE",
        description: "Recouvrement de cicatrices ou modification d'anciens tatouages.",
        link: "/covering",
        color: "from-[#C9A961] to-[#A88B4A]"
    },
    {
        icon: <Syringe size={40} />,
        title: "PIERCING",
        description: "Perçage professionnel dans les règles de l'art et de l'hygiène.",
        link: "/piercings",
        color: "from-neutral-400 to-neutral-600"
    },
    {
        icon: <GraduationCap size={40} />,
        title: "FORMATION",
        description: "Devenez tatoueur pro. Formation complète et certifiante.",
        link: "/formation",
        color: "from-[#8B0000] to-[#5A0000]"
    }
];

export default function ServicesTeaser() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Fond subtil */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black text-white mb-4">
                        NOS <span className="text-[#C9A961]">SERVICES</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className={`group ${index >= 3 ? 'lg:col-span-1 lg:translate-x-[50%]' : ''}`}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-[#111] border border-[#333] p-8 rounded-2xl overflow-hidden hover:border-[#C9A961] transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    {service.icon}
                                </div>

                                <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-3 group-hover:text-[#C9A961] transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="mt-auto">
                                    <span className="text-[#C9A961] text-xs font-bold tracking-widest border-b border-[#C9A961] pb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 inline-block">
                                        DÉCOUVRIR
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
