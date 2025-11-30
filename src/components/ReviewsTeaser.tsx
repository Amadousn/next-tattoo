'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

const reviews = [
    {
        name: "Sophie Martin",
        date: "Il y a 2 jours",
        text: "Une expérience incroyable chez Next Tattoo. L'équipe est super pro, l'hygiène irréprochable et mon tatouage est juste magnifique. Merci !",
        rating: 5
    },
    {
        name: "Thomas Dubois",
        date: "Il y a 1 semaine",
        text: "Formation au top ! J'ai appris énormément en peu de temps. Les formateurs sont passionnés et pédagogues. Je recommande à 100%.",
        rating: 5
    }
];

export default function ReviewsTeaser() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-['Playfair_Display'] text-4xl font-black text-white mb-2">
                            ILS NOUS FONT <span className="text-[#C9A961]">CONFIANCE</span>
                        </h2>
                        <div className="flex items-center gap-2">
                            <div className="flex text-[#C9A961]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-gray-400 text-sm">4.9/5 sur Google Avis</span>
                        </div>
                    </div>
                    
                    <Link 
                        href="/avis" 
                        className="px-6 py-3 border border-[#333] text-white hover:border-[#C9A961] hover:text-[#C9A961] transition-colors font-['Cinzel'] text-sm tracking-wider"
                    >
                        VOIR TOUS LES AVIS
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111] p-8 rounded-xl border border-[#222] relative group hover:border-[#C9A961]/30 transition-colors"
                        >
                            <Quote className="absolute top-6 right-6 text-[#C9A961]/10 w-12 h-12 group-hover:text-[#C9A961]/20 transition-colors" />
                            
                            <div className="flex items-center gap-1 text-[#C9A961] mb-4">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            
                            <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                            
                            <div className="flex items-center gap-3 border-t border-[#222] pt-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B0000] flex items-center justify-center text-white font-bold text-xs">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{review.name}</p>
                                    <p className="text-gray-500 text-xs">{review.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
