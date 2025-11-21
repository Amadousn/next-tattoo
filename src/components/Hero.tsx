'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden" style={{ background: '#0a0a0a' }}>
            {/* Image de fond tatouage avec effets subtils */}
            <div className="absolute inset-0">
                <Image
                    src="/tattoo-background.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    style={{
                        opacity: 0.55,
                        filter: 'blur(0px) grayscale(5%) brightness(0.7)',
                        mixBlendMode: 'normal'
                    }}
                    priority
                />
            </div>

            {/* Overlay sombre pour contraste élevé */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>

            {/* Texture grain subtile */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
            }}></div>

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
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50 w-32 md:w-48 lg:w-60">
                <Image
                    src="/logo-new.png"
                    alt="Next Tattoo Logistic"
                    width={240}
                    height={120}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-36 pb-24 sm:pt-32 md:pt-0 md:justify-center w-full">
                <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">

                    {/* Ornement baroque supérieur */}
                    <div className="mb-6 md:mb-8 fade-in-up flex justify-center" style={{ animationDelay: '0.1s' }}>
                        <svg className="w-20 h-8 md:w-[120px] md:h-10" viewBox="0 0 120 40" fill="none">
                            <path d="M10 20 Q30 10 60 20 Q90 30 110 20"
                                stroke="#C9A961" strokeWidth="1.5" fill="none" opacity="0.6" />
                            <circle cx="60" cy="20" r="3" fill="#8B0000" />
                            <circle cx="30" cy="15" r="2" fill="#C9A961" opacity="0.5" />
                            <circle cx="90" cy="25" r="2" fill="#C9A961" opacity="0.5" />
                        </svg>
                    </div>

                    {/* Titre principal avec typographie baroque */}
                    <h1 className="mb-8 md:mb-10 fade-in-up w-full" style={{
                        animationDelay: '0.2s',
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.2rem, 8vw, 6rem)',
                        fontWeight: 900,
                        lineHeight: 1.2,
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
                    <div className="flex items-center justify-center gap-4 md:gap-6 my-8 md:my-10 fade-in-up w-full" style={{ animationDelay: '0.3s' }}>
                        <div className="w-12 md:w-20" style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C9A961)' }}></div>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            background: 'linear-gradient(135deg, #8B0000, #A52A2A)',
                            transform: 'rotate(45deg)',
                            boxShadow: '0 0 20px rgba(139, 0, 0, 0.6)'
                        }} className="md:w-3 md:h-3"></div>
                        <div className="w-12 md:w-20" style={{ height: '2px', background: 'linear-gradient(90deg, #C9A961, transparent)' }}></div>
                    </div>

                    {/* Sous-titre avec accent rouge */}
                    <p className="mb-10 md:mb-12 px-4 fade-in-up w-full max-w-4xl mx-auto leading-relaxed" style={{
                        animationDelay: '0.4s',
                        fontFamily: "'Cinzel', serif",
                        fontSize: 'clamp(1.2rem, 4vw, 2.2rem)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        letterSpacing: '0.05em',
                        textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'
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
                    <p className="text-base md:text-lg lg:text-xl mb-12 md:mb-16 max-w-3xl mx-auto px-4 fade-in-up w-full leading-loose" style={{
                        animationDelay: '0.5s',
                        color: '#F5F5F5',
                        fontFamily: "'Cinzel', serif",
                        letterSpacing: '0.03em',
                        textShadow: '0 3px 10px rgba(0, 0, 0, 0.9)'
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
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full px-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a
                            href="https://www.planity.com/next-tatoo-logistique-75011-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium inline-flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37, #C9A961)',
                                borderColor: '#D4AF37',
                                fontFamily: "'Cinzel', serif",
                                padding: '0.875rem 1.5rem',
                                fontWeight: 600,
                                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.3)'
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
                            className="btn-premium inline-flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                            style={{
                                background: 'linear-gradient(135deg, #5A0000, #3D0000)',
                                color: 'rgba(245, 245, 220, 0.85)',
                                borderColor: '#5A0000',
                                fontFamily: "'Cinzel', serif",
                                padding: '0.8rem 1.5rem',
                                fontWeight: 500
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Nous Contacter
                        </button>
                    </div>

                    {/* Stats avec ornements */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 mt-16 md:mt-24 lg:mt-28 px-4 fade-in-up w-full max-w-5xl mx-auto" style={{ animationDelay: '0.7s' }}>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl lg:text-7xl" style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #D4AF37, #8B0000)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.75rem',
                                filter: 'brightness(1.1)'
                            }}>2</div>
                            <div className="text-xs md:text-sm" style={{
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: '#E0E0E0',
                                fontFamily: "'Cinzel', serif",
                                fontWeight: 500,
                                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
                            }}>
                                Studios à Paris
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl lg:text-7xl" style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #8B0000, #D4AF37)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.75rem',
                                filter: 'brightness(1.1)'
                            }}>7j/7</div>
                            <div className="text-xs md:text-sm" style={{
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: '#E0E0E0',
                                fontFamily: "'Cinzel', serif",
                                fontWeight: 500,
                                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
                            }}>
                                Ouvert toute la semaine
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl lg:text-7xl" style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                background: 'linear-gradient(135deg, #D4AF37, #8B0000)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.75rem',
                                filter: 'brightness(1.1)'
                            }}>100%</div>
                            <div className="text-xs md:text-sm" style={{
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: '#E0E0E0',
                                fontFamily: "'Cinzel', serif",
                                fontWeight: 500,
                                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
                            }}>
                                Hygiène & Sécurité
                            </div>
                        </div>
                    </div>

                    {/* Ornement baroque inférieur */}
                    <div className="mt-12 md:mt-16 fade-in-up flex justify-center" style={{ animationDelay: '0.8s' }}>
                        <svg className="w-20 h-8 md:w-[120px] md:h-10" viewBox="0 0 120 40" fill="none">
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
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#C9A961' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
