import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('fr');

  const texts = {
    fr: {
      title: 'NeoSavoir Studio',
      accueil: 'Accueil',
      apropos: 'À propos',
      blog: 'Blog',
      entreprendre: 'Entreprendre',
      temoignages: 'Témoignages',
      ressources: 'Ressources',
      newsletter: 'Newsletter',
      contact: 'Contact',
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
      temoignagesTitle: 'Ce qu’ils disent',
      ressourcesTitle: 'Ressources gratuites',
      contactTitle: 'Restons en contact',
      contactDesc: 'Tu as une question, une idée de collaboration, ou tu veux simplement échanger ?',
      email: 'dromelskyndamba@gmail.com',
      whatsapp: 'WhatsApp : +242 06 835 80 18',
      footer: 'Des ressources éducatives pour comprendre et utiliser l’IA en Afrique.',
      copyright: '© 2025 NeoSavoir Studio. Tous droits réservés.',
    },
    en: {
      title: 'NeoSavoir Studio',
      accueil: 'Home',
      apropos: 'About',
      blog: 'Blog',
      entreprendre: 'Entrepreneurship',
      temoignages: 'Testimonials',
      ressources: 'Resources',
      newsletter: 'Newsletter',
      contact: 'Contact',
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
      temoignagesTitle: 'What they say',
      ressourcesTitle: 'Free Resources',
      contactTitle: 'Let’s stay in touch',
      contactDesc: 'Do you have a question, a collaboration idea, or just want to exchange?',
      email: 'dromelskyndamba@gmail.com',
      whatsapp: 'WhatsApp: +242 06 835 80 18',
      footer: 'Educational resources to understand and use AI in Africa.',
      copyright: '© 2025 NeoSavoir Studio. All rights reserved.',
    }
  };

  const t = texts[language];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Language Toggle */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition"
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/242068358018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Contactez-moi sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 5.45-4.437 9.884-9.885 9.884a11.821 11.821 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.443-8.45z" />
        </svg>
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">{t.title}</h1>
          <nav>
            <ul className="flex space-x-6 text-sm md:text-base">
              <li><a href="#accueil" className="hover:text-blue-600 transition">{t.accueil}</a></li>
              <li><a href="#apropos" className="hover:text-blue-600 transition">{t.apropos}</a></li>
              <li><a href="#entreprendre" className="hover:text-blue-600 transition">{t.entreprendre}</a></li>
              <li><a href="#blog" className="hover:text-blue-600 transition">{t.blog}</a></li>
              <li><a href="#temoignages" className="hover:text-blue-600 transition">{t.temoignages}</a></li>
              <li><a href="#ressources" className="hover:text-blue-600 transition">{t.ressources}</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition">{t.contact}</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed mx-auto max-w-2xl">
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
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {t.heroBtn}
          </a>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">{t.aboutTitle}</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://github.com/LosDuro/neosavoirstudio-image/raw/main/PHOTO-2025-04-01-16-01-02%201.jpg"
              alt="Portrait de Dureste Ndamba, éducateur africain"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-200"
            />
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{t.aboutBio}</p>
              <p>{t.aboutMission1}</p>
              <p>{t.aboutMission2}</p>
              <p>{t.aboutMission3}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>{t.aboutItem1}</li>
                <li>{t.aboutItem2}</li>
                <li>{t.aboutItem3}</li>
              </ul>
              <p>{t.aboutClosing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entreprendre avec l'IA */}
      <section id="entreprendre" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Entreprendre avec l’IA : Transformer des idées en impact</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Jeune entrepreneur africain utilisant l'IA pour son business"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                L’intelligence artificielle n’est pas réservée aux grandes entreprises ou aux ingénieurs.  
                Elle est aussi un <strong>levier puissant pour les entrepreneurs africains</strong> qui veulent créer, innover et résoudre des problèmes locaux.
              </p>

              <h4 className="font-semibold text-lg mt-6 mb-3">L’IA, c’est un associé silencieux</h4>
              <p>
                Tu n’as pas besoin d’un développeur pour lancer une entreprise avec l’IA.  
                Aujourd’hui, tu peux utiliser l’IA pour :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Créer un business plan</strong> en 10 minutes</li>
                <li><strong>Générer un logo et une identité visuelle</strong> avec Canva + IA</li>
                <li><strong>Rédiger des messages marketing</strong> pour ton public cible</li>
                <li><strong>Analyser les besoins du marché</strong> en Afrique</li>
                <li><strong>Traduire ton offre</strong> en wolof, peul, swahili, etc.</li>
              </ul>

              <h4 className="font-semibold text-lg mt-6 mb-3">Des exemples africains qui inspirent</h4>
              <p>
                Au Nigeria, une jeune entrepreneure utilise ChatGPT pour automatiser les réponses à ses clients.  
                Au Sénégal, un développeur a lancé un chatbot éducatif pour les élèves en zone rurale.  
                En Côte d’Ivoire, une startup utilise l’IA pour prédire les prix du cacao.
              </p>

              <h4 className="font-semibold text-lg mt-6 mb-3">Comment bien commencer ?</h4>
              <p>
                Tu n’as pas besoin de tout savoir. Commence petit :
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Identifie un problème local</li>
                <li>Utilise l’IA pour générer des idées de solution</li>
                <li>Teste avec 5 clients</li>
                <li>Itère, améliore, partage</li>
              </ol>
              <p>
                L’IA n’est pas là pour remplacer ton génie.  
                Elle est là pour <strong>amplifier ton impact</strong>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 text-center max-w-2xl mx-auto">
              <p className="text-blue-800">
                <strong>📘 Télécharge le guide complet</strong><br />
                "IA dans les études et l’entrepreneuriat" – conçu pour les jeunes innovateurs africains.
              </p>
              <a
                href="https://ucdmxeqi.mychariow.com/ia-dans-etudes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition text-sm"
              >
                Accéder à l’ebook sur Chariow
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">{t.blogTitle}</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t.blogDesc}
          </p>

          {/* Article 1 */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-16">
            <img
              src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Main tenant un cerveau numérique - IA et avenir de l'Afrique"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {t.blogArticle1Title}
              </h4>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{t.blogArticle1Content}</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 text-center max-w-2xl mx-auto">
                <p className="text-blue-800">
                  <strong>{t.blogCta1}</strong>
                </p>
                <a
                  href="https://ucdmxeqi.mychariow.com/comprendre-ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition text-sm"
                >
                  {t.blogBtn}
                </a>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://github.com/LosDuro/neosavoirstudio-image/raw/main/3.png"
              alt="Jeunes apprenants utilisant ordinateurs et téléphones"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {t.blogArticle2Title}
              </h4>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{t.blogArticle2Content}</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 text-center max-w-2xl mx-auto">
                <p className="text-blue-800">
                  <strong>{t.blogCta2}</strong>
                </p>
                <a
                  href="https://ucdmxeqi.mychariow.com/ia-dans-etudes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition text-sm"
                >
                  {t.blogBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">{t.temoignagesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-4">"Ce guide m’a permis d’intégrer l’IA dans ma classe avec mes élèves du Sénégal. Enfin un contenu qui parle de nos réalités !"</p>
              <p className="font-semibold">— Jean, enseignant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-4">"J’ai appris à utiliser ChatGPT pour mes recherches. Grâce à NeoSavoir, je me sens plus autonome dans mes études."</p>
              <p className="font-semibold">— Amina, étudiante (Cameroun)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-4">"Une initiative qui va dans le bon sens pour démocratiser l’IA en Afrique. Continuez !"</p>
              <p className="font-semibold">— Dr. Kouamé, chercheur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section id="ressources" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">{t.ressourcesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold mb-2">📚 Guide gratuit : 5 outils d’IA pour enseignants</h4>
              <p className="text-gray-600 mb-4">Découvre les outils que j’utilise chaque jour en classe.</p>
              <a
                href="https://losduro.github.io/neosavoirstudio-image/5-outils-ia-enseignants.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Télécharger le PDF
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold mb-2">Fiche : Utiliser ChatGPT en classe</h4>
              <p className="text-gray-600">Un guide simple pour les enseignants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold mb-2">Modèle : Plan de cours avec l’IA</h4>
              <p className="text-gray-600">Un exemple utilisable dès demain.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold mb-2">Guide : Introduction à l’IA pour les curieux</h4>
              <p className="text-gray-600">Pour aller plus loin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Reçois nos conseils par email</h3>
          <p className="text-blue-100 mb-8">
            Abonne-toi pour recevoir des ressources exclusives, des nouveaux articles et des outils pratiques sur l’IA en éducation.
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

          <p className="text-blue-200 text-sm mt-4">
            Aucun spam. Désabonnement en 1 clic.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{t.contactTitle}</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            {t.contactDesc}
          </p>
          <div className="space-y-4 max-w-sm mx-auto">
            <p>
              📧 <a href="mailto:dromelskyndamba@gmail.com" className="text-blue-600 hover:underline">
                {t.email}
              </a>
            </p>
            <p>
              📱 <a href="https://wa.me/242068358018" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {t.whatsapp}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-xl font-bold mb-2">NeoSavoir Studio</h4>
          <p className="text-gray-400 text-sm">
            {t.footer}
          </p>
          <p className="text-gray-500 text-xs mt-4">
            {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;