'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Shanely Baby Gee",
        rating: 5,
        text: "Super expérience pour moi et mes sœurs, nous avons fait un tattoo en commun et l’accueil rien à dire. Je reviendrai pour mes prochains tattoos c’est sûr ! 🙌🏾😝"
    },
    {
        name: "Sylvie Frédérique",
        rating: 5,
        text: "Très bon professionnel, accueillant et particulièrement attentif à l’hygiène."
    },
    {
        name: "Matthieu Duval",
        rating: 5,
        text: "Merci beaucoup à Armel pour son accueil chaleureux et son professionnalisme."
    },
    {
        name: "Teddy Adonai",
        rating: 5,
        text: "Le meilleur des meilleurs 🔥🔥🔥🔥 Je suis fidèle depuis 10 ans."
    },
    {
        name: "Kym B",
        rating: 5,
        text: "Super moment, très professionnel, à l'écoute, il prend son temps pour que tu aies vraiment un tatouage qui te plaît. Je reviendrai prochainement."
    },
    {
        name: "Princesse Caribéenne",
        rating: 5,
        text: "J’ai découvert le salon aux Ulis, accueil incroyable, très professionnel. Je reviendrai les yeux fermés."
    },
    {
        name: "Dominique Opet",
        rating: 5,
        text: "Ravie de ma prestation. Le tatoueur m’a conseillé pour un meilleur résultat. Travail très soigné."
    },
    {
        name: "Shanna Charles",
        rating: 5,
        text: "Je recommande à 100%, un professionnalisme de qualité, gentil et serviable. Merci encore pour ce beau travail."
    },
    {
        name: "Armelle Villaume",
        rating: 5,
        text: "Ma fille a fait son 1er tatouage aujourd’hui. Tout s’est super bien passé."
    },
    {
        name: "Laure Copp01",
        rating: 5,
        text: "Parfait, toujours disponible, agréable, tatouages toujours au top. #LesUlis"
    }
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star 
                    key={i} 
                    size={14} 
                    className={`${i < rating ? "fill-[#C9A961] text-[#C9A961]" : "text-gray-600"}`} 
                />
            ))}
        </div>
    );
};

export default function ReviewsSection() {
    return (
        <section className="py-24 bg-[#050505] overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent"></div>
            
            <div className="container mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left md:w-1/2"
                    >
                        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                            L'AVIS DE <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] to-[#F5F5DC]">NOS CLIENTS</span>
                        </h2>
                        <p className="text-gray-400 font-['Cinzel'] text-lg tracking-wide">
                            La satisfaction de notre communauté est notre plus belle réussite.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 bg-[#111] border border-[#333] px-8 py-6 rounded-2xl shadow-2xl shadow-[#C9A961]/5"
                    >
                        <div className="text-right">
                            <div className="text-5xl font-black text-white leading-none mb-1">4.8<span className="text-2xl text-gray-500">/5</span></div>
                            <div className="text-xs text-[#C9A961] font-bold uppercase tracking-[0.2em]">EXCELLENT</div>
                        </div>
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                        <div>
                            <div className="flex gap-1 mb-2">
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} size={20} className="fill-[#C9A961] text-[#C9A961] drop-shadow-[0_0_8px_rgba(201,169,97,0.4)]" />
                                ))}
                            </div>
                            <div className="text-sm text-gray-400 font-medium">+300 avis vérifiés</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
                
                <motion.div 
                    className="flex gap-6 w-max py-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 50 
                    }}
                >
                    {/* We duplicate the list to ensure seamless scrolling */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div 
                            key={index}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl relative group hover:border-[#C9A961]/50 transition-colors duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-[#C9A961]/10 w-12 h-12 group-hover:text-[#C9A961]/30 transition-colors" />
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] flex items-center justify-center text-[#C9A961] font-bold text-xl font-['Cinzel'] border border-[#333] shadow-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base mb-1">{review.name}</h4>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            
                            <p className="text-gray-400 text-base leading-relaxed italic font-light">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
