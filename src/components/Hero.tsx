'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden" style={{ background: '#0a0a0a' }}>
            {/* Fond avec motif baroque subtil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 0, 0, 0.15) 0%, transparent 50%)
          `
                }}></div>
            </div>

            {/* Ornements baroques en arrière-plan */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 20 Q120 40 100 60 Q80 40 100 20 M100 60 Q120 80 100 100 Q80 80 100 60"
                        stroke="url(#gold-gradient)" strokeWidth="2" fill="none" />
                    <defs>
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#C9A961', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#8B0000', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Logo en haut à gauche */}
            <div className="absolute top-6 left-6 z-50">
                <Image
                    src="/logo.png"
                    alt="Next Tattoo Logistic"
                    width={220}
                    height={110}
                    className="drop-shadow-2xl"
                    priority
                />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                <div className="max-w-6xl mx-auto text-center">

                    {/* Ornement baroque supérieur */}
                    <div className="mb-8 fade-in-up flex justify-center" style={{ animationDelay: '0.1s' }}>
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                            <path d="M10 20 Q30 10 60 20 Q90 30 110 20"
                                stroke="#C9A961" strokeWidth="1.5" fill="none" opacity="0.6" />
                            <circle cx="60" cy="20" r="3" fill="#8B0000" />
                            <circle cx="30" cy="15" r="2" fill="#C9A961" opacity="0.5" />
                            <circle cx="90" cy="25" r="2" fill="#C9A961" opacity="0.5" />
                        </svg>
                    </div>

                    {/* Titre principal avec typographie baroque */}
                    <h1 className="mb-6 fade-in-up" style={{
                        animationDelay: '0.2s',
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: '0.02em'
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 40px rgba(201, 169, 97, 0.4)',
                            display: 'inline-block'
                        }}>
                            L'Art du Tatouage
                        </span>
                    </h1>

                    {/* Ornement décoratif central avec rouge */}
                    <div className="flex items-center justify-center gap-4 my-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A961)' }}></div>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            background: 'linear-gradient(135deg, #8B0000, #A52A2A)',
                            transform: 'rotate(45deg)',
                            boxShadow: '0 0 20px rgba(139, 0, 0, 0.6)'
                        }}></div>
                        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, #C9A961, transparent)' }}></div>
                    </div>

                    {/* Sous-titre avec accent rouge */}
                    <p className="mb-8 fade-in-up" style={{
                        animationDelay: '0.4s',
                        fontFamily: "'Cinzel', serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 600,
                        color: '#F5F5DC',
                        letterSpacing: '0.05em'
                    }}>
                        Studio Professionnel à{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #C9A961, #A88B4A)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700
                        }}>
                            Paris
                        </span>
                        {' & '}
                        <span style={{
                            background: 'linear-gradient(135deg, #C9A961, #A88B4A)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700
                        }}>
                            Les Ulis
                        </span>
                    </p>

                    {/* Description avec accent bordeaux */}
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto fade-in-up" style={{
                        animationDelay: '0.5s',
                        color: 'rgba(245, 245, 220, 0.85)',
                        fontFamily: "'Cinzel', serif",
                        letterSpacing: '0.03em'
                    }}>
                        Tatouages personnalisés et piercings professionnels<br />
                        <span style={{
                            color: '#8B0000',
                            fontWeight: 600,
                            textShadow: '0 0 10px rgba(139, 0, 0, 0.5)'
                        }}>Ouvert 7j/7</span>
                        {' • '}
                        <span style={{ color: '#C9A961' }}>Paiement en plusieurs fois</span>
                    </p>

                    {/* Boutons CTA avec or et bordeaux */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a
                            href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium inline-flex items-center justify-center gap-3"
                            style={{
                                background: 'linear-gradient(135deg, #C9A961, #A88B4A)',
                                borderColor: '#C9A961',
                                fontFamily: "'Cinzel', serif"
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Prendre Rendez-vous
                        </a>

                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-premium inline-flex items-center justify-center gap-3"
                            style={{
                                background: 'linear-gradient(135deg, #8B0000, #6B0000)',
                                color: '#F5F5DC',
                                borderColor: '#8B0000',
                                fontFamily: "'Cinzel', serif"
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Nous Contacter
                        </button>
                    </div>

                    {/* Stats avec ornements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="text-center">
                            <div style={{
                                fontSize: '3rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #C9A961, #8B0000)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem'
                            }}>2</div>
                            <div style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'rgba(245, 245, 220, 0.6)',
                                fontFamily: "'Cinzel', serif"
                            }}>
                                Studios à Paris
                            </div>
                        </div>
                        <div className="text-center">
                            <div style={{
                                fontSize: '3rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #8B0000, #C9A961)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem'
                            }}>7j/7</div>
                            <div style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'rgba(245, 245, 220, 0.6)',
                                fontFamily: "'Cinzel', serif"
                            }}>
                                Ouvert toute la semaine
                            </div>
                        </div>
                        <div className="text-center">
                            <div style={{
                                fontSize: '3rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #C9A961, #8B0000)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem'
                            }}>100%</div>
                            <div style={{
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'rgba(245, 245, 220, 0.6)',
                                fontFamily: "'Cinzel', serif"
                            }}>
                                Hygiène & Sécurité
                            </div>
                        </div>
                    </div>

                    {/* Ornement baroque inférieur */}
                    <div className="mt-16 fade-in-up flex justify-center" style={{ animationDelay: '0.8s' }}>
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                            <path d="M10 20 Q30 30 60 20 Q90 10 110 20"
                                stroke="#C9A961" strokeWidth="1.5" fill="none" opacity="0.6" />
                            <circle cx="60" cy="20" r="3" fill="#8B0000" />
                            <circle cx="30" cy="25" r="2" fill="#C9A961" opacity="0.5" />
                            <circle cx="90" cy="15" r="2" fill="#C9A961" opacity="0.5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Indicateur de scroll avec or */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6" style={{ color: '#C9A961' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
