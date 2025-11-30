'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChallengeSection() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Fond d'ambiance "Danger" */}
            <div className="absolute inset-0 bg-[url('/tattoo-background.jpg')] opacity-20 bg-cover bg-fixed bg-center mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
            
            {/* Effets de lumière rouge */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-red-900/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-red-900/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 border border-red-600 text-red-500 font-['Cinzel'] text-sm tracking-[0.2em] mb-4 bg-black/50 backdrop-blur-sm">
                        OFFRE EXTRÊME LIMITÉE
                    </span>
                    <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        Le Défi <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Titan</span>
                    </h2>
                    <p className="font-['Cinzel'] text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        "La douleur est temporaire, la gloire est éternelle."
                    </p>
                </div>

                {/* Carte Principale du Challenge */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Bordure brillante */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                    
                    <div className="relative bg-neutral-900/90 border border-red-900/30 rounded-2xl p-8 md:p-12 backdrop-blur-xl overflow-hidden">
                        {/* Grille contenu */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            
                            {/* Colonne Gauche : L'offre */}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold font-['Cinzel'] text-white">
                                        BRAS COMPLET <br/>
                                        <span className="text-yellow-500">POIGNET À ÉPAULE</span>
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-transparent"></div>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Une séance marathon. Un tatouage intégral. 
                                    C'est un test d'endurance mentale et physique. 
                                    Nous mettons notre art à l'épreuve, vous mettez votre volonté à l'épreuve.
                                </p>

                                <div className="flex flex-col gap-4 bg-black/40 p-6 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center border border-red-500/30 shrink-0">
                                            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 font-['Cinzel']">DURÉE ESTIMÉE</div>
                                            <div className="text-white font-bold">1 Séance Non-Stop</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center border border-yellow-500/30 shrink-0">
                                            <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 font-['Cinzel']">VALEUR RÉELLE</div>
                                            <div className="text-white font-bold text-lg line-through decoration-red-500 decoration-2">1500€ - 2500€</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne Droite : Les règles */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent rounded-xl -rotate-2 transform scale-105"></div>
                                <div className="bg-black/80 border border-red-900/50 p-8 rounded-xl relative backdrop-blur-md">
                                    <h4 className="text-2xl font-bold text-center mb-8 font-['Cinzel'] text-white border-b border-white/10 pb-4">
                                        LES RÈGLES DU JEU
                                    </h4>
                                    
                                    <div className="space-y-6">
                                        {/* Cas Victoire */}
                                        <div className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-green-950/30 to-transparent border border-green-900/30 hover:border-green-500/50 transition-colors">
                                            <div className="text-3xl">👑</div>
                                            <div>
                                                <div className="font-bold text-green-400 text-lg mb-1">VICTOIRE</div>
                                                <p className="text-gray-400 text-sm">
                                                    Tu tiens jusqu'au bout de la séance sans abandonner.
                                                </p>
                                                <div className="mt-2 text-xl font-black text-white">
                                                    PRIX : <span className="text-green-400">0€ (GRATUIT)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* VS Divider */}
                                        <div className="flex items-center gap-4 justify-center opacity-50">
                                            <div className="h-px w-full bg-white/20"></div>
                                            <span className="font-black text-red-600 italic">VS</span>
                                            <div className="h-px w-full bg-white/20"></div>
                                        </div>

                                        {/* Cas Défaite */}
                                        <div className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-red-950/30 to-transparent border border-red-900/30 hover:border-red-500/50 transition-colors">
                                            <div className="text-3xl">💀</div>
                                            <div>
                                                <div className="font-bold text-red-500 text-lg mb-1">DÉFAITE</div>
                                                <div className="text-gray-400 text-sm">
                                                    Tu abandonnes avant la fin du tatouage.
                                                </div>
                                                <div className="mt-2 text-xl font-black text-white">
                                                    PRIX : <span className="text-red-500">800€</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <a 
                                            href="https://wa.me/33624358280?text=Je%20suis%20prêt%20à%20relever%20le%20DÉFI%20TITAN%20!%20💪"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-4 bg-red-700 hover:bg-red-600 text-white font-bold font-['Cinzel'] tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-red-500 text-center"
                                        >
                                            J'accepte le Défi
                                        </a>
                                        <p className="text-xs text-gray-500 mt-3 italic">
                                            *Signature d'une décharge obligatoire avant la séance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
