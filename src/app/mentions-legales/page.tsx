import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales | Next Tattoo',
  description: 'Mentions légales, politique de confidentialité et conditions d\'utilisation du site Next Tattoo.',
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#C9A961] mb-12 text-center">Mentions Légales</h1>
          
          <div className="space-y-8 text-gray-300 font-light">
            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">1. Édition du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>https://nexttattoo.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Propriétaire du site :</strong> Next Tattoo Logistic.</li>
                <li><strong>Identification de l'entreprise :</strong> Next Tattoo Logistic - Siège social : 90 Avenue de la République, 75011 Paris.</li>
                <li><strong>Hébergeur :</strong> Netlify - 44 Montgomery Street, Suite 300, San Francisco, California 94104.</li>
                <li><strong>Contact :</strong> Via le formulaire de contact du site ou par téléphone.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">2. Propriété intellectuelle</h2>
              <p>
                <strong>Next Tattoo</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>Next Tattoo</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">3. Limitations de responsabilité</h2>
              <p>
                <strong>Next Tattoo</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <strong>https://nexttattoo.fr</strong>.
              </p>
              <p className="mt-2">
                <strong>Next Tattoo</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <strong>https://nexttattoo.fr</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
