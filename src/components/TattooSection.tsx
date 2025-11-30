'use client';

import { motion } from 'framer-motion';
import { PenTool, Shield, Heart, Clock, Star, Award, Users } from 'lucide-react';

export default function TattooSection() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Intro Hero - Centré et Épuré */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
                    >
                        L'ART DU <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#F5F5DC]">TATOUAGE</span>
                    </motion.h1>
                    <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed font-['Cinzel'] mb-12"
                    >
                        Bienvenue chez Next Tattoo, où chaque trait raconte une histoire. 
                        Notre studio n'est pas seulement un lieu de passage, c'est un atelier d'art 
                        où vos idées prennent vie avec précision, passion et excellence.
                    </motion.p>
                </div>

                {/* Pourquoi se faire tatouer chez nous ? - Version Design & Aérée */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-white mb-6">
                            POURQUOI <span className="text-[#C9A961]">NOUS ?</span>
                        </h2>
                        <p className="text-gray-400 font-['Cinzel'] max-w-2xl mx-auto text-sm md:text-base tracking-wide">
                            L'excellence n'est pas un détail, c'est notre standard.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Carte 1 : L'Expérience */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="bg-[#111] border border-[#333] p-8 rounded-2xl hover:border-[#C9A961] transition-all duration-500 group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-[#C9A961]/10 rounded-full flex items-center justify-center text-[#C9A961] mb-6 group-hover:bg-[#C9A961] group-hover:text-black transition-colors">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-['Cinzel']">Une Écoute Absolue</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Votre projet est unique. Nous prenons le temps nécessaire pour comprendre votre vision, vos doutes et vos envies. <span className="text-white">Ici, pas de travail à la chaîne</span>, chaque client est une priorité.
                            </p>
                        </motion.div>

                        {/* Carte 2 : L'Art */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#111] border border-[#333] p-8 rounded-2xl hover:border-[#C9A961] transition-all duration-500 group hover:-translate-y-2 relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                            <div className="w-14 h-14 bg-[#C9A961]/10 rounded-full flex items-center justify-center text-[#C9A961] mb-6 group-hover:bg-[#C9A961] group-hover:text-black transition-colors">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-['Cinzel']">L'Art sans Compromis</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nos artistes ne sont pas de simples exécutants. Ils vous conseillent sur l'emplacement, la taille et le style pour que votre tatouage <span className="text-white">sublime votre corps</span> et vieillisse parfaitement.
                            </p>
                        </motion.div>

                        {/* Carte 3 : La Sécurité */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#111] border border-[#333] p-8 rounded-2xl hover:border-[#C9A961] transition-all duration-500 group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-[#C9A961]/10 rounded-full flex items-center justify-center text-[#C9A961] mb-6 group-hover:bg-[#C9A961] group-hover:text-black transition-colors">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-['Cinzel']">Sérénité Totale</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nous ne plaisantons pas avec votre santé. Matériel stérile, encres premium, suivi cicatrisation rigoureux. Venez l'esprit tranquille, <span className="text-white">vous êtes entre des mains expertes</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Processus */}
                <div className="bg-[#111] border border-[#333] rounded-3xl p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
                            VOTRE PROJET <span className="text-[#C9A961]">ÉTAPE PAR ÉTAPE</span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#333] -z-10"></div>

                        {[
                            { step: "01", title: "Contact", desc: "Envoyez-nous votre idée via WhatsApp ou passez au shop." },
                            { step: "02", title: "Design", desc: "Nous créons une maquette unique selon vos envies." },
                            { step: "03", title: "Tatouage", desc: "Séance dans des conditions d'hygiène irréprochables." },
                            { step: "04", title: "Suivi", desc: "Conseils de soins et suivi de la cicatrisation." }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center relative bg-[#111] md:bg-transparent p-4 md:p-0 rounded-xl border border-[#333] md:border-none">
                                <div className="w-24 h-24 mx-auto bg-[#0a0a0a] border-2 border-[#C9A961] rounded-full flex items-center justify-center text-3xl font-black text-[#C9A961] mb-6 shadow-[0_0_20px_rgba(201,169,97,0.2)]">
                                    {step.step}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2 font-['Cinzel']">{step.title}</h4>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
