'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Star } from 'lucide-react';
import Image from 'next/image';

const flashCategories = [
    {
        title: "Mini Flash",
        price: "30€ - 50€",
        description: "Petits motifs délicats et minimalistes",
        designs: [
            "Papillons minimalistes",
            "Symboles (cœur, infini, lune)",
            "Petites fleurs",
            "Textes courts",
            "Étoiles & planètes"
        ],
        icon: <Star className="w-6 h-6" />,
        gradient: "from-[#C9A961] to-[#A88B4A]"
    },
    {
        title: "Flash Medium",
        price: "50€ - 80€",
        description: "Designs détaillés et expressifs",
        designs: [
            "Papillons détaillés",
            "Fleurs complexes (roses, marguerites)",
            "Œil mystique",
            "Silhouettes animaux",
            "Phrases inspirantes"
        ],
        icon: <Sparkles className="w-6 h-6" />,
        gradient: "from-[#8B0000] to-[#5A0000]"
    },
    {
        title: "Flash Premium",
        price: "80€ - 120€",
        description: "Compositions artistiques élaborées",
        designs: [
            "Compositions florales",
            "Portraits stylisés",
            "Mandalas",
            "Scènes complètes",
            "Designs personnalisés"
        ],
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-[#C9A961] to-[#8B0000]"
    }
];

export default function FlashTattooSection() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A961]/30 rounded-full text-[#C9A961] mb-8"
                    >
                        <Zap size={16} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">Tatouages Express</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-6"
                    >
                        FLASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] via-[#F5F5DC] to-[#C9A961]">TATTOO</span>
                    </motion.h2>
                    
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-['Cinzel']">
                        Designs prêts à tatouer immédiatement. Minimalistes, élégants et abordables.
                    </p>
                </div>

                {/* Flash Categories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {flashCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-2xl p-8 h-full hover:border-[#C9A961]/50 transition-all duration-500">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300`}>
                                    {category.icon}
                                </div>

                                {/* Title & Price */}
                                <h3 className="text-2xl font-bold text-white mb-2 font-['Cinzel']">
                                    {category.title}
                                </h3>
                                <div className="text-3xl font-black text-[#C9A961] mb-4 font-['Playfair_Display']">
                                    {category.price}
                                </div>
                                
                                <p className="text-gray-500 text-sm mb-6 italic">
                                    {category.description}
                                </p>

                                {/* Design List */}
                                <ul className="space-y-3">
                                    {category.designs.map((design, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <div className="w-1.5 h-1.5 bg-[#C9A961] rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{design}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Examples Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0a0a] border border-[#333] rounded-2xl p-8 md:p-12 mb-16"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-4 font-['Playfair_Display']">
                        Exemples de <span className="text-[#C9A961]">Designs Flash</span>
                    </h3>
                    <p className="text-center text-gray-400 mb-10 text-sm">
                        Motifs minimalistes inspirés des tendances actuelles
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { icon: "🦋", name: "Papillons", desc: "Délicats & élégants" },
                            { icon: "🌸", name: "Fleurs", desc: "Roses, marguerites" },
                            { icon: "👁️", name: "Œil mystique", desc: "Symbolique" },
                            { icon: "🌙", name: "Lune & étoiles", desc: "Célestes" },
                            { icon: "♾️", name: "Symboles", desc: "Infini, cœur" },
                            { icon: "🐱", name: "Animaux", desc: "Minimalistes" },
                            { icon: "🌿", name: "Végétaux", desc: "Branches, feuilles" },
                            { icon: "✨", name: "Étoiles", desc: "Constellations" },
                            { icon: "🪐", name: "Planètes", desc: "Cosmos" },
                            { icon: "💫", name: "Comètes", desc: "Dynamiques" },
                            { icon: "🔥", name: "Flammes", desc: "Stylisées" },
                            { icon: "✝️", name: "Croix", desc: "Spirituelles" }
                        ].map((design, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative bg-[#111] border border-[#222] rounded-xl p-6 text-center hover:border-[#C9A961] transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {design.icon}
                                </div>
                                <h4 className="text-white font-['Cinzel'] text-sm font-bold mb-1">
                                    {design.name}
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    {design.desc}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#C9A961]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-[#111] border border-[#C9A961]/20 rounded-xl">
                        <p className="text-center text-gray-400 text-sm leading-relaxed">
                            <span className="text-[#C9A961] font-bold">Catalogue complet disponible en studio</span><br/>
                            Plus de 200 designs flash prêts à tatouer immédiatement. Possibilité de personnalisation sur demande.
                        </p>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 mb-6 font-['Cinzel']">
                            Envie d'un tatouage rapide et stylé ? Découvrez notre sélection complète en studio.
                        </p>
                        <a
                            href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A961] to-[#A88B4A] text-black font-['Cinzel'] font-bold tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(201,169,97,0.3)]"
                        >
                            <Zap size={20} />
                            RÉSERVER UN FLASH TATTOO
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
