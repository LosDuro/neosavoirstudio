import React from 'react';

function App() {
  const ebooksData = [
    {
      id: 1,
      title: "Comprendre l'IA en 10 leçons",
      description:
        "Un guide simple, local et accessible pour découvrir l’intelligence artificielle. Ce livre t’accompagne dans la découverte de l’intelligence artificielle à travers 10 leçons pédagogiques, illustrées et adaptées au contexte africain. Il te donne les clés pour comprendre comment l’IA fonctionne, comment elle influence notre quotidien, et comment chacun peut commencer à l’utiliser, même sans être expert.\n\nTu y trouveras :\n✅ Des notions expliquées sans jargon\n✅ Des cas concrets africains (agriculture, santé, école…)\n✅ Des outils IA accessibles à tester toi-même\n✅ Des bonus pratiques : quiz, fiche éducative, liste de ressources gratuites\n\nUn livre pour comprendre, tester et agir. L’IA commence ici, avec toi.",
      image: "https://via.placeholder.com/400x600?text=Ebook+1", // Remplacer par ton image réelle
      link: " https://selar.com/m/dureste-ndamba1 ",
    },
    {
      id: 2,
      title: "IA et Éducation en Milieu Scolaire",
      description:
        "Un guide pédagogique pour intégrer l'intelligence artificielle dans l'enseignement au quotidien.",
      image: "https://placehold.co/400x500?text=Ebook+2",
      link: " https://selar.co/mon-ebook2 ",
    },
    {
      id: 3,
      title: "IA et Innovation Locale",
      description:
        "Découvre comment l’IA peut booster l'entrepreneuriat et l'innovation en Afrique.",
      image: "https://placehold.co/400x500?text=Ebook+3",
      link: " https://selar.co/mon-ebook3 ",
    },
  ];

  const bonusData = [
    {
      title: "Quiz : Teste tes connaissances en IA",
      description: "Un quiz interactif pour évaluer ton niveau et apprendre en t'amusant.",
      link: "#",
    },
    {
      title: "Fiche pratique : Comment utiliser ChatGPT dans l'éducation",
      description: "Un guide simple pour intégrer l'IA dans ta salle de classe.",
      link: "#",
    },
    {
      title: "Modèle : Plan de cours avec l'IA",
      description: "Un modèle de plan de cours utilisant les outils d'intelligence artificielle.",
      link: "#",
    },
    {
      title: "Guide : Introduction à l'IA pour les curieux",
      description: "Un guide accessible pour tous ceux qui veulent comprendre l'IA sans être expert.",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Jean, enseignant au Sénégal",
      text: "Ce guide m’a permis de mieux comprendre l’IA et de l’utiliser en classe avec mes élèves.",
    },
    {
      name: "Amina, étudiante au Cameroun",
      text: "J’ai appris à utiliser les outils d’IA pour mes recherches et mes exposés.",
    },
    {
      name: "Dr. Kouamé, chercheur en technologie",
      text: "Une initiative qui va dans le bon sens pour démocratiser l’intelligence artificielle en Afrique.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">NeoSavoir Studio</h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              <li><a href="#catalogue" className="hover:underline">Catalogue</a></li>
              <li><a href="#ressources" className="hover:underline">Ressources</a></li>
              <li><a href="#partenariats" className="hover:underline">Partenariats</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenue chez NeoSavoir Studio</h2>
          <p className="text-lg text-gray-600 mb-8">
            Des ressources éducatives et outils interactifs pour comprendre et utiliser l'IA dans les réalités africaines.
          </p>
          <a
            href="#catalogue"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Découvrir nos ebooks
          </a>
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">Nos Ebooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooksData.map((ebook) => (
              <div key={ebook.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={ebook.image} alt={ebook.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{ebook.title}</h4>
                  <p className="text-gray-600 mb-4">{ebook.description}</p>
                  <a
                    href={ebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Acheter sur Selar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources Bonus */}
      <section id="ressources" className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">Ressources Bonus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonusData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-600 hover:underline"
                >
                  Accéder à la ressource
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenariats */}
      <section id="partenariats" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">Partenariats & Témoignages</h3>
          <div className="mb-10">
            <h4 className="text-xl font-semibold mb-4">Collaborons ensemble !</h4>
            <p className="text-gray-700 mb-4">
              Tu es enseignant, développeur, chercheur ou passionné d'IA ? Rejoins notre communauté et contribue à l'éducation numérique en Afrique.
            </p>
            <a href="#contact" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Nous contacter
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Témoignages</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg">
                  <p className="italic mb-2">"{t.text}"</p>
                  <p className="font-semibold">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">Contact</h3>
          <div className="text-center">
            <p className="text-lg mb-4">Tu as une question ou souhaite collaborer ?</p>
            <p className="mb-4">
              📧 <strong>Email :</strong> <a href="mailto:dromelskyndamba@gmail.com" className="text-blue-600 hover:underline">dromelskyndamba@gmail.com</a>
            </p>
            <p className="mb-4">
              📱 <strong>WhatsApp :</strong> <a href="https://wa.me/242068358018 " className="text-blue-600 hover:underline">+242 06 835 80 18</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold">NeoSavoir Studio</h4>
            <p className="text-gray-400">Ressources éducatives & IA en Afrique</p>
          </div>
          <div>
            <p className="text-gray-400">© 2025 NeoSavoir Studio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;