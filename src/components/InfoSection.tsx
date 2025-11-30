'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Calendar } from 'lucide-react';

export default function InfoSection() {
    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white mb-6">
                        NOS <span className="text-[#C9A961]">STUDIOS</span>
                    </h2>
                    <p className="text-gray-400 font-['Cinzel'] max-w-2xl mx-auto">
                        Deux adresses, une même exigence d'excellence. Retrouvez-nous à Paris et aux Ulis.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Studio Paris */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#111] border border-[#333] p-10 rounded-2xl hover:border-[#C9A961] transition-colors duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MapPin size={120} />
                        </div>
                        
                        <h3 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2">PARIS</h3>
                        <div className="w-12 h-1 bg-[#C9A961] mb-8"></div>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#C9A961] mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-gray-300 font-medium">90 Avenue de la République</p>
                                    <p className="text-gray-500">75011 Paris</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-[#C9A961] mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-gray-300 font-medium">Ouvert 7J/7</p>
                                    <p className="text-gray-500">24H/24</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[#222]">
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Next+Tattoo+Paris+90+Avenue+de+la+République" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-[#222] text-white py-4 rounded-xl hover:bg-[#C9A961] hover:text-black transition-all font-bold"
                            >
                                <Navigation size={18} />
                                ITINÉRAIRE
                            </a>
                        </div>
                    </motion.div>

                    {/* Studio Les Ulis */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#111] border border-[#333] p-10 rounded-2xl hover:border-[#C9A961] transition-colors duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MapPin size={120} />
                        </div>
                        
                        <h3 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2">LES ULIS</h3>
                        <div className="w-12 h-1 bg-[#C9A961] mb-8"></div>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#C9A961] mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-gray-300 font-medium">Centre Commercial Les Boutiques</p>
                                    <p className="text-gray-500">Avenue de Bourgogne, 91940</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-[#C9A961] mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-gray-300 font-medium">Ouvert 7J/7</p>
                                    <p className="text-gray-500">24H/24</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[#222]">
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Centre+Commercial+Les+Boutiques+Les+Ulis" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-[#222] text-white py-4 rounded-xl hover:bg-[#C9A961] hover:text-black transition-all font-bold"
                            >
                                <Navigation size={18} />
                                ITINÉRAIRE
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Direct */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-[#111] border border-[#333] p-8 rounded-2xl">
                        <div className="flex items-center gap-4 px-8 border-b md:border-b-0 md:border-r border-[#333] pb-6 md:pb-0 md:pr-8">
                            <div className="w-12 h-12 bg-[#C9A961]/10 rounded-full flex items-center justify-center text-[#C9A961]">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-400 text-sm mb-1">Nous contacter sur WhatsApp</p>
                                <a href="https://wa.me/33624358280" className="text-xl font-bold text-white hover:text-[#C9A961] transition-colors">
                                    06 24 35 82 80
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 px-8">
                            <div className="w-12 h-12 bg-[#C9A961]/10 rounded-full flex items-center justify-center text-[#C9A961]">
                                <Calendar size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-400 text-sm mb-1">Réserver en ligne</p>
                                <a 
                                    href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-white hover:text-[#C9A961] transition-colors"
                                >
                                    Planity.com
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
