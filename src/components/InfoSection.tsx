'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function InfoSection() {
    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    
                    {/* Infos Contact */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="font-['Playfair_Display'] text-5xl font-black text-white mb-6">
                                PRENDRE <span className="text-[#C9A961]">CONTACT</span>
                            </h2>
                            <p className="text-gray-400 font-['Cinzel']">
                                Prêt à démarrer votre projet ? Passez nous voir au studio ou contactez-nous.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#111] flex items-center justify-center text-[#C9A961] rounded-lg border border-[#333] group-hover:border-[#C9A961] transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Paris 11ème</h4>
                                    <p className="text-gray-500 text-sm">148 Rue du Chemin Vert, 75011 Paris</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#111] flex items-center justify-center text-[#C9A961] rounded-lg border border-[#333] group-hover:border-[#C9A961] transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Les Ulis</h4>
                                    <p className="text-gray-500 text-sm">Centre Commercial Ulis 2</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#111] flex items-center justify-center text-[#C9A961] rounded-lg border border-[#333] group-hover:border-[#C9A961] transition-colors">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Horaires d'ouverture</h4>
                                    <p className="text-gray-500 text-sm">Lundi - Dimanche : 10h00 - 20h00</p>
                                    <p className="text-[#C9A961] text-xs font-bold mt-1">OUVERT 7J/7</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <a href="tel:0143556060" className="text-2xl font-black text-white hover:text-[#C9A961] transition-colors font-['Cinzel']">
                                01 43 55 60 60
                            </a>
                        </div>
                    </motion.div>

                    {/* Map / Formulaire */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="relative h-[500px] bg-[#111] rounded-2xl overflow-hidden border border-[#333]"
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.595999630662!2d2.380678776423471!3d48.86600200018149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dfb863a76b3%3A0x3f392274e8331576!2sNext%20Tattoo%20Paris!5e0!3m2!1sfr!2sfr!4v1708611111111!5m2!1sfr!2sfr" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.8)' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                            <div className="bg-[#C9A961] text-black text-xs font-bold px-4 py-2 rounded-full w-fit">
                                STUDIO PRINCIPAL
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
