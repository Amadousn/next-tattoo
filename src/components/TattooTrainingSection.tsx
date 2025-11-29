'use client';

import { motion } from 'framer-motion';
import { Palette, PenTool, Award, CheckCircle, Star } from 'lucide-react';

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
                                { icon: PenTool, title: "Styles Variés", desc: "Maîtrisez la calligraphie, le tribal, et le réalisme pour répondre à toutes les demandes." },
                                { icon: Palette, title: "Couleur & Dégradé", desc: "Apprenez à créer des pièces vibrantes qui cicatrisent parfaitement." },
                                { icon: Award, title: "Excellence Technique", desc: "Développez la précision qui fera votre réputation." },
                                { icon: CheckCircle, title: "Suivi Personnalisé", desc: "Mentorat individuel pour affiner votre identité artistique." }
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
                            { duration: "2 SEMAINES", price: "1800€", features: ["Formation Complète", "Techniques avancées (Couleur/Réalisme)", "Projet final & Certification"], recommended: true, urgency: "⚠️ 4 places maximum par session" }
                        ].map((plan, idx) => (
                            <div 
                                key={idx} 
                                className={`relative p-8 rounded-2xl border ${plan.recommended ? 'border-[#C9A961] bg-[#C9A961]/5' : 'border-[#333] bg-[#111]'} transition-transform hover:scale-105 duration-300`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C9A961] text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg shadow-[#C9A961]/20">
                                        RECOMMANDÉ
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h4 className="text-[#C9A961] font-bold tracking-widest mb-2">{plan.duration}</h4>
                                    <div className="text-5xl font-black text-white font-['Playfair_Display']">{plan.price}</div>
                                    {plan.urgency && (
                                        <div className="mt-4 text-red-400 font-bold text-sm animate-pulse">
                                            {plan.urgency}
                                        </div>
                                    )}
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-[#C9A961]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                    href="https://wa.me/33624358280?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20la%20formation%20tatouage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-[#C9A961] text-black hover:bg-white' : 'bg-[#222] text-white hover:bg-[#C9A961] hover:text-black'}`}
                                >
                                    RÉSERVER MA PLACE
                                </a>
                            </div>
                        ))}
                        
                        <div className="text-center mt-4">
                            <a 
                                href="https://wa.me/33624358280?text=Bonjour,%20j'aimerais%20avoir%20plus%20d'informations%20sur%20le%20programme%20de%20formation"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm underline underline-offset-4"
                            >
                                Une question sur le programme ? Contactez-nous pour en savoir +
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Section Vidéos - Social Proof (Carrousel Horizontal) */}
                <div className="mt-24 border-t border-[#222] pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-white mb-3">
                            Immersion au <span className="text-[#C9A961]">Studio</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Glissez pour voir les réalisations des élèves en formation
                        </p>
                    </motion.div>

                    {/* Container Scroll Horizontal */}
                    <div className="relative -mx-4 px-4">
                        <div className="flex overflow-x-auto gap-4 pb-8 px-4 snap-x snap-mandatory scrollbar-hide md:justify-center">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex-none w-48 md:w-56 aspect-[9/16] bg-[#111] rounded-xl overflow-hidden border border-[#333] group hover:border-[#C9A961] transition-all snap-center shadow-lg shadow-black/50"
                                >
                                    <video 
                                        src={`/trust/video${num}.mp4`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        controls
                                        preload="metadata"
                                        playsInline
                                    >
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Avis Stage */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-white mb-10 text-center">
                        Ce qu'ils en <span className="text-[#C9A961]">Pensent</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Thomas L.", role: "Ancien Élève", text: "J'ai appris plus en 2 semaines ici qu'en 1 an d'autodidacte. La technique pour le réalisme est incroyable.", date: "Octobre 2025" },
                            { name: "Sarah M.", role: "Tatoueuse Junior", text: "Le suivi est top. On pratique direct sur du concret. Grâce à la formation, j'ai pu ouvrir mon shop.", date: "Novembre 2025" },
                            { name: "Karim B.", role: "En Reconversion", text: "Ambiance pro et bienveillante. On ne te lâche pas tant que le trait n'est pas parfait. Merci à l'équipe !", date: "Septembre 2025" }
                        ].map((review, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#111] p-6 rounded-xl border border-[#222] relative"
                            >
                                <div className="flex gap-1 text-[#C9A961] mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed italic">"{review.text}"</p>
                                <div className="flex items-center gap-3 border-t border-[#222] pt-4">
                                    <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white font-bold text-xs">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{review.name}</div>
                                        <div className="text-[#C9A961] text-xs">{review.role}</div>
                                    </div>
                                    <div className="ml-auto text-xs text-gray-600">{review.date}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
