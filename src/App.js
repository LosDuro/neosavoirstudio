import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('fr');

  const texts = {
    fr: {
      title: 'NeoSavoir Studio',
      accueil: 'Accueil',
      apropos: 'À propos',
      blog: 'Blog',
      newsletter: 'Newsletter',
      heroTitle: 'Des ressources pédagogiques pour comprendre et utiliser l’intelligence artificielle en Afrique',
      heroDesc: 'Des guides simples, locaux et accessibles pour apprendre, enseigner, entreprendre et innover avec l’IA — même sans être expert.',
      heroBtn: 'Découvrir les articles',
      aboutTitle: 'Qui est NeoSavoir Studio ?',
      aboutBio: 'Je m’appelle Dureste Ndamba, et je suis à l’origine de NeoSavoir Studio. Enseignant, formateur et passionné d’innovation, j’ai créé ce studio pour démystifier l’intelligence artificielle et la rendre accessible à tous en Afrique.',
      aboutMission1: 'J’ai vu trop d’élèves découragés, trop d’enseignants surchargés, trop d’opportunités manquées à cause du manque d’accès à la technologie. Alors, j’ai décidé d’agir.',
      aboutMission2: 'NeoSavoir Studio, ce n’est pas juste une boutique d’ebooks. C’est une école numérique ouverte à tous, où chacun peut apprendre, enseigner, entreprendre et innover — même sans diplôme ni connexion parfaite.',
      aboutMission3: 'Mes ebooks, mes guides, mes quiz, sont conçus pour :',
      aboutItem1: 'Éduquer avec des exemples africains',
      aboutItem2: 'Inspirer à utiliser l’IA dans la réalité',
      aboutItem3: 'Transformer nos communautés',
      aboutClosing: 'Ce n’est pas une révolution venue de l’extérieur. C’est une innovation de chez nous, pour nous. Et tu peux en faire partie.',
      blogTitle: 'Blog',
      blogDesc: 'Des articles pour comprendre et utiliser l’IA dans les réalités africaines',
      blogArticle1Title: 'Pourquoi l’Intelligence Artificielle est-elle importante pour l’Afrique aujourd’hui ?',
      blogArticle1Content: 'L’intelligence artificielle (IA) n’est plus un rêve de science-fiction. Elle est déjà là, et elle transforme le monde. En Afrique, elle n’est pas qu’un outil pour les riches ou les technophiles. C’est une opportunité concrète pour résoudre des défis locaux : santé, éducation, agriculture, emploi. Ce n’est pas une menace — c’est une clé d’émancipation.',
      blogArticle2Title: 'Apprendre avec l’IA : Comment intégrer l’intelligence artificielle à l’école en Afrique',
      blogArticle2Content: 'L’intelligence artificielle n’est pas une menace pour l’école. Au contraire, elle peut devenir un allié puissant pour les enseignants et les apprenants. Dès aujourd’hui, l’IA peut aider à personnaliser les apprentissages, corriger plus vite, et rendre l’éducation plus accessible — même dans les classes surchargées ou les zones à faible connexion.',
      blogCta1: 'Découvre notre guide "Comprendre l’IA en 10 leçons"',
      blogCta2: 'Télécharge le guide complet "IA dans les études et l’entrepreneuriat"',
      blogBtn: 'Accéder à l’ebook sur Chariow',
      newsletterTitle: 'Reçois nos conseils par email',
      newsletterDesc: 'Abonne-toi pour recevoir des ressources exclusives, des nouveaux articles et des outils pratiques sur l’IA en éducation.',
      newsletterNoSpam: 'Aucun spam. Désabonnement en 1 clic.',
      footer: 'Des ressources éducatives pour comprendre et utiliser l’IA en Afrique.',
      copyright: '© 2025 NeoSavoir Studio. Tous droits réservés.',
      email: 'dromelskyndamba@gmail.com',
      whatsapp: 'WhatsApp : +242 06 835 80 18',
    },
    en: {
      title: 'NeoSavoir Studio',
      accueil: 'Home',
      apropos: 'About',
      blog: 'Blog',
      newsletter: 'Newsletter',
      heroTitle: 'Educational resources to understand and use artificial intelligence in Africa',
      heroDesc: 'Simple, local, and accessible guides to learn, teach, start, and innovate with AI — even if you’re not an expert.',
      heroBtn: 'Discover the articles',
      aboutTitle: 'Who is NeoSavoir Studio?',
      aboutBio: 'My name is Dureste Ndamba, and I am the founder of NeoSavoir Studio. As a teacher, trainer, and innovation enthusiast, I created this studio to demystify artificial intelligence and make it accessible to everyone in Africa.',
      aboutMission1: 'I’ve seen too many discouraged students, overwhelmed teachers, and missed opportunities due to lack of access to technology. So, I decided to act.',
      aboutMission2: 'NeoSavoir Studio is not just an ebook store. It’s a digital school open to all, where anyone can learn, teach, start, and innovate — even without a degree or perfect internet.',
      aboutMission3: 'My ebooks, guides, and quizzes are designed to:',
      aboutItem1: 'Educate with African examples',
      aboutItem2: 'Inspire real-world AI use',
      aboutItem3: 'Transform our communities',
      aboutClosing: 'This is not a revolution from the outside. It’s an innovation from within, for us. And you can be part of it.',
      blogTitle: 'Blog',
      blogDesc: 'Articles to understand and use AI in African realities',
      blogArticle1Title: 'Why is Artificial Intelligence important for Africa today?',
      blogArticle1Content: 'Artificial Intelligence (AI) is no longer science fiction. It’s here and transforming the world. In Africa, it’s not just a tool for the wealthy or tech-savvy. It’s a concrete opportunity to solve local challenges: health, education, agriculture, employment. It’s not a threat — it’s a key to empowerment.',
      blogArticle2Title: 'Learning with AI: How to integrate artificial intelligence into African schools',
      blogArticle2Content: 'AI is not a threat to education. On the contrary, it can become a powerful ally for teachers and learners. Today, AI can personalize learning, grade faster, and make education more accessible — even in overcrowded classrooms or low-connectivity areas.',
      blogCta1: 'Discover our guide "Understanding AI in 10 Lessons"',
      blogCta2: 'Download the complete guide "AI in Education and Entrepreneurship"',
      blogBtn: 'Access the ebook on Chariow',
      newsletterTitle: 'Get our advice by email',
      newsletterDesc: 'Subscribe to receive exclusive resources, new articles, and practical tools on AI in education.',
      newsletterNoSpam: 'No spam. Unsubscribe in one click.',
      footer: 'Educational resources to understand and use AI in Africa.',
      copyright: '© 2025 NeoSavoir Studio. All rights reserved.',
      email: 'dromelskyndamba@gmail.com',
      whatsapp: 'WhatsApp: +242 06 835 80 18',
    }
  };

  const t = texts[language];

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition"
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>

      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">{t.title}</h1>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            {t.heroDesc}
          </p>

          {/* Compteur d'abonnés */}
          <div className="bg-white shadow-lg rounded-full px-8 py-4 inline-flex items-center space-x-4 mb-8 max-w-xs mx-auto border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-800 font-semibold">
              127 abonnés <span className="text-sm font-normal text-gray-500">et en progression</span>
            </span>
          </div>

          <a
            href="#blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition text-lg"
          >
            {t.heroBtn}
          </a>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">{t.aboutTitle}</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>{t.aboutBio}</p>
              <p>{t.aboutMission1}</p>
              <p>{t.aboutMission2}</p>
              <p>{t.aboutMission3}</p>
              <ul className="list-disc list-inside space-y-3">
                <li>{t.aboutItem1}</li>
                <li>{t.aboutItem2}</li>
                <li>{t.aboutItem3}</li>
              </ul>
              <p>{t.aboutClosing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">{t.blogTitle}</h3>
          <p className="text-gray-600 text-center mb-12 text-lg">
            {t.blogDesc}
          </p>

          {/* Article 1 */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-16 p-8">
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              {t.blogArticle1Title}
            </h4>
            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
              <p>{t.blogArticle1Content}</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 text-center">
              <p className="text-blue-800 font-medium">
                <strong>{t.blogCta1}</strong>
              </p>
              <a
                href="https://ucdmxeqi.mychariow.com/comprendre-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition text-base"
              >
                {t.blogBtn}
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition p-8">
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              {t.blogArticle2Title}
            </h4>
            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
              <p>{t.blogArticle2Content}</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 text-center">
              <p className="text-blue-800 font-medium">
                <strong>{t.blogCta2}</strong>
              </p>
              <a
                href="https://ucdmxeqi.mychariow.com/ia-dans-etudes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition text-base"
              >
                {t.blogBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{t.newsletterTitle}</h3>
          <p className="text-blue-100 mb-8 text-lg">
            {t.newsletterDesc}
          </p>

          {/* Formulaire Google intégré */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto" style={{ maxWidth: "640px" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSctvZmdoIGWWK4z4AqCjF4hrCJBGQJEfpDi2DW04X6eotTT1Q/viewform?embedded=true"
              width="640"
              height="248"
              frameborder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulaire d'abonnement à la newsletter"
              style={{ border: 0 }}
            >
              Chargement…
            </iframe>
          </div>

          <p className="text-blue-200 text-base mt-4">
            {t.newsletterNoSpam}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-4">NeoSavoir Studio</h4>
          <p className="text-gray-400 text-sm mb-6">
            {t.footer}
          </p>

          {/* Coordonnées dans le footer */}
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              📧 <a href={`mailto:${t.email}`} className="hover:text-white transition">
                {t.email}
              </a>
            </p>
            <p>
              📱 <a href="https://wa.me/242068358018" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                {t.whatsapp}
              </a>
            </p>
          </div>

          <p className="text-gray-500 text-xs mt-8">
            {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;