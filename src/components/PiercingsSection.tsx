'use client';

const piercingCategories = [
    {
        title: 'Oreille (20€)',
        items: [
            { name: 'Lobe', price: '20€' },
            { name: 'Helix', price: '20€' },
            { name: 'Tragus', price: '20€' },
            { name: 'Anti Tragus', price: '20€' },
            { name: 'Forward Helix', price: '20€' },
            { name: 'Conch', price: '20€' },
            { name: 'Rook', price: '20€' },
            { name: 'Daith', price: '20€' },
            { name: 'Industrial', price: '20€' },
            { name: 'Snug', price: '20€' },
            { name: 'Flat', price: '20€' }
        ]
    },
    {
        title: 'Nez (30€)',
        items: [
            { name: 'Narine', price: '30€' },
            { name: 'Septum', price: '30€' },
            { name: 'Nostril', price: '30€' }
        ]
    },
    {
        title: 'Visage (40€)',
        items: [
            { name: 'Arcade', price: '40€' },
            { name: 'Bridge', price: '40€' },
            { name: 'Œil de chat', price: '40€' },
            { name: 'Surface', price: '40€' }
        ]
    },
    {
        title: 'Bouche (40€)',
        items: [
            { name: 'Langue', price: '40€' },
            { name: 'Smiley', price: '40€' },
            { name: 'Labret', price: '40€' },
            { name: 'Medusa', price: '40€' },
            { name: 'Snake Eyes', price: '40€' },
            { name: 'Venom', price: '40€' }
        ]
    },
    {
        title: 'Corps',
        items: [
            { name: 'Nombril', price: '40€' },
            { name: 'Microdermal', price: '40€' },
            { name: 'Surface', price: '40€' },
            { name: 'Téton (Sein)', price: '90€' }
        ]
    },
    {
        title: 'Génitaux (120€)',
        items: [
            { name: 'Christina', price: '120€' },
            { name: 'Vertical Hood', price: '120€' }
        ]
    }
];

export default function PiercingsSection() {
    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Fond texturé */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="w-full flex justify-center relative z-10">
                <div className="w-full max-w-7xl px-4 md:px-8">
                    {/* En-tête */}
                    <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 w-full">
                        <span className="text-[#C9A961] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase block mb-6">
                            Nos Services
                        </span>
                        
                        <h2 className="mb-8 w-full text-center" style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: '0.02em'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #C9A961 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>Piercings</span>
                        </h2>

                        <div className="flex items-center justify-center gap-4 mb-8 w-full">
                            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C9A961]"></div>
                            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] shadow-[0_0_20px_rgba(139,0,0,0.6)]"></div>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A961] to-transparent"></div>
                        </div>

                        <div className="w-full flex justify-center mb-8">
                            <div className="bg-black/40 border-2 border-[#C9A961]/50 px-6 py-3 inline-flex items-center gap-3">
                                <svg className="w-6 h-6 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                                </svg>
                                <span className="font-cinzel text-sm md:text-base text-[#C9A961] tracking-wider">
                                    SANS RENDEZ-VOUS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Grille de Catégories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                        {piercingCategories.map((category, index) => (
                            <div 
                                key={index}
                                className="group bg-gradient-to-br from-black/60 to-black/30 border-2 border-[#C9A961]/30 p-6 md:p-8 hover:border-[#C9A961] hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] transition-all duration-500"
                            >
                                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-center pb-4 border-b-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition-colors duration-500">
                                    <span className="text-white">{category.title}</span>
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center justify-between gap-3 text-[#E0E0E0] group/item">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-[#C9A961] rotate-45 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                                                <span className="font-cinzel text-sm md:text-base group-hover/item:text-[#C9A961] group-hover/item:translate-x-1 transition-all duration-300">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <span className="font-bold text-[#C9A961] text-sm">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="font-cinzel text-base md:text-lg text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
                            Passez directement au studio pour votre piercing, aucun rendez-vous nécessaire !
                        </p>
                        <a 
                            href="https://wa.me/33624358280"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-cinzel font-bold text-base md:text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] group"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            CONTACTEZ-NOUS SUR WHATSAPP
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
