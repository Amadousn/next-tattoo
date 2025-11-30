'use client';

import { motion } from 'framer-motion';
import { CreditCard, Info } from 'lucide-react';

const pricingTiers = [
    { size: '5 cm', price: '30€' },
    { size: '6 cm', price: '50€' },
    { size: '8 cm', price: '70€' },
    { size: '10 cm', price: '100€' },
    { size: '12 cm', price: '120€' },
    { size: '14 cm', price: '160€' },
    { size: '16 cm', price: '180€' },
    { size: '18 cm', price: '200€' },
    { size: '20 cm', price: '250€' },
    { size: '25 cm', price: '280€' },
];

export default function PricingSection() {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background FX */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Titre */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-6"
                    >
                        TARIFS & <span className="text-[#C9A961]">PROJETS</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
                </div>

                {/* Badge Paiement */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center mb-16"
                >
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-[#C9A961]/30 rounded-2xl p-1 pr-6 flex items-center gap-4 shadow-2xl shadow-[#C9A961]/10">
                        <div className="bg-[#C9A961] p-3 rounded-xl text-black">
                            <CreditCard size={24} />
                        </div>
                        <div className="text-left">
                            <div className="text-[#C9A961] text-xs font-bold tracking-widest">FACILITÉS DE PAIEMENT</div>
                            <div className="text-white font-['Cinzel'] font-bold">PAIEMENT EN PLUSIEURS FOIS ACCEPTÉ</div>
                        </div>
                    </div>
                </motion.div>

                {/* Grille de Prix */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative h-40 perspective-1000"
                        >
                            <div className="absolute inset-0 bg-[#111] border border-[#333] rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-[#C9A961] group-hover:shadow-[0_0_30px_rgba(201,169,97,0.2)] flex flex-col items-center justify-center p-4">
                                <div className="text-[#888] font-['Cinzel'] text-sm mb-2 group-hover:text-[#C9A961] transition-colors">{tier.size}</div>
                                <div className="text-3xl md:text-4xl font-black text-white font-['Playfair_Display'] group-hover:scale-110 transition-transform">{tier.price}</div>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Box */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-[#111] border-l-4 border-[#C9A961] p-6 rounded-r-xl"
                >
                    <div className="flex gap-4">
                        <Info className="text-[#C9A961] flex-shrink-0" size={24} />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Les tarifs indiqués sont à titre indicatif pour des pièces simples. 
                            Chaque projet étant unique, le prix final dépendra de la complexité, 
                            des détails et du temps de réalisation.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
