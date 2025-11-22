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
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black text-white mb-2">
                            L'AVIS DE <span className="text-[#C9A961]">NOS CLIENTS</span>
                        </h2>
                        <p className="text-gray-400 font-['Cinzel']">
                            La satisfaction de notre communauté est notre plus belle réussite.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 bg-[#111] border border-[#333] px-6 py-4 rounded-xl"
                    >
                        <div className="text-right">
                            <div className="text-3xl font-black text-white leading-none">4.8<span className="text-lg text-gray-500">/5</span></div>
                            <div className="text-xs text-[#C9A961] font-bold uppercase tracking-wider">Excellent</div>
                        </div>
                        <div className="h-10 w-px bg-gray-700"></div>
                        <div>
                            <div className="flex gap-1 mb-1">
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} size={16} className="fill-[#C9A961] text-[#C9A961]" />
                                ))}
                            </div>
                            <div className="text-xs text-gray-400">+300 avis vérifiés</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>
                
                <motion.div 
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 40 
                    }}
                >
                    {/* We duplicate the list to ensure seamless scrolling */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div 
                            key={index}
                            className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl relative group hover:border-[#C9A961]/50 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-[#C9A961]/10 w-10 h-10 group-hover:text-[#C9A961]/30 transition-colors" />
                            
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#C9A961] font-bold text-lg font-['Cinzel'] border border-[#333]">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            <div className="text-center mt-12">
                 <a
                    href="https://g.page/r/CdkjFmXz9c0QEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#C9A961] hover:text-white transition-colors font-['Cinzel'] underline underline-offset-4"
                >
                    VOIR TOUS LES AVIS SUR GOOGLE
                </a>
            </div>
        </section>
    );
}
