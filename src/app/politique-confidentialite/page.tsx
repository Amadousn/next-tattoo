import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#C9A961] mb-12 text-center">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-300 font-light">
            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">1. Gestion des données personnelles</h2>
              <p>
                Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">2. Responsable de la collecte des données</h2>
              <p>
                Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : <strong>Next Tattoo</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">3. Finalité des données collectées</h2>
              <p>
                <strong>Next Tattoo</strong> est susceptible de traiter tout ou partie des données :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur.</li>
                <li>Pour prévenir et lutter contre la fraude informatique (spamming, hacking...).</li>
                <li>Pour améliorer la navigation sur le Site : données de connexion et d’utilisation.</li>
                <li>Pour mener des enquêtes de satisfaction facultatives sur <strong>https://next-tattoo.com</strong>.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl text-white mb-4 font-['Cinzel']">4. Droit d'accès, de rectification et d'opposition</h2>
              <p>
                 Conformément à la réglementation européenne en vigueur, les Utilisateurs de <strong>https://next-tattoo.com</strong> disposent des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs.</li>
                <li>Droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD).</li>
                <li>Droit de retirer à tout moment un consentement (article 13-2c RGPD).</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
