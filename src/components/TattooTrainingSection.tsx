'use client';

import { motion } from 'framer-motion';
import { Palette, PenTool, Award, CheckCircle } from 'lucide-react';

export default function TattooTrainingSection() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background FX */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Titre */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        STAGE DE <span className="text-[#C9A961]">TATOUAGE</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Perfectionnez votre art avec une formation d'excellence. Maîtrisez la calligraphie, le tribal, le réalisme et les techniques avancées de couleur.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Colonne Gauche - Détails */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-['Playfair_Display'] text-white font-bold mb-8">
                            Programme <span className="text-[#C9A961]">Intensif</span>
                        </h3>
                        
                        <div className="space-y-6">
                            {[
                                { icon: PenTool, title: "Styles Variés", desc: "Perfectionnement en calligraphie, tribal, et tatouage réaliste." },
                                { icon: Palette, title: "Couleur & Dégradé", desc: "Apprentissage minutieux des techniques de coloration et de dégradés fluides." },
                                { icon: Award, title: "Excellence Technique", desc: "Travail de précision et hygiène irréprochable." },
                                { icon: CheckCircle, title: "Suivi Personnalisé", desc: "Accompagnement sur mesure pour développer votre propre style." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start bg-[#111] p-6 rounded-xl border border-[#333] hover:border-[#C9A961] transition-colors group">
                                    <div className="bg-[#C9A961]/10 p-3 rounded-lg group-hover:bg-[#C9A961] transition-colors">
                                        <item.icon className="text-[#C9A961] group-hover:text-black" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Colonne Droite - Tarifs */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 justify-center"
                    >
                        {[
                            { duration: "1 SEMAINE", price: "1200€", features: ["Initiation & Perfectionnement", "Bases techniques solides", "Pratique supervisée"] },
                            { duration: "2 SEMAINES", price: "1800€", features: ["Formation Complète", "Techniques avancées (Couleur/Réalisme)", "Projet final & Certification"], recommended: true }
                        ].map((plan, idx) => (
                            <div 
                                key={idx} 
                                className={`relative p-8 rounded-2xl border ${plan.recommended ? 'border-[#C9A961] bg-[#C9A961]/5' : 'border-[#333] bg-[#111]'} transition-transform hover:scale-105 duration-300`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C9A961] text-black font-bold px-4 py-1 rounded-full text-sm">
                                        RECOMMANDÉ
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h4 className="text-[#C9A961] font-bold tracking-widest mb-2">{plan.duration}</h4>
                                    <div className="text-5xl font-black text-white font-['Playfair_Display']">{plan.price}</div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-[#C9A961]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-[#C9A961] text-black hover:bg-white' : 'bg-[#222] text-white hover:bg-[#C9A961] hover:text-black'}`}>
                                    RÉSERVER MAINTENANT
                                </button>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
