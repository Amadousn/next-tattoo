import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-['Playfair_Display'] text-9xl font-black text-[#C9A961] mb-4">404</h1>
      <h2 className="font-['Cinzel'] text-2xl md:text-4xl text-white mb-8">PAGE INTROUVABLE</h2>
      <p className="text-gray-400 max-w-md mb-12">
        L'encre a coulé, mais cette page reste vierge. Retournez à l'accueil pour découvrir nos créations.
      </p>
      <Link 
        href="/"
        className="px-8 py-4 bg-[#C9A961] text-black font-bold hover:bg-white transition-colors duration-300 rounded-sm"
      >
        RETOUR À L'ACCUEIL
      </Link>
    </div>
  );
}
