import './App.css'

function App() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Location de Voitures</h1>
          <p className="text-xl md:text-2xl opacity-90">Découvrez notre flotte de véhicules premium</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenue sur notre plateforme</h2>
          <p className="text-lg text-gray-600 mb-8">Réservez votre voiture idéale en quelques clics</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Réserver maintenant
            </button>
            <button className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition duration-300">
              En savoir plus
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapide</h3>
            <p className="text-gray-600">Réservation instantanée et livraison express</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fiable</h3>
            <p className="text-gray-600">Véhicules entretenus et assurés</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Économique</h3>
            <p className="text-gray-600">Tarifs compétitifs et transparent</p>
          </div>
        </section>

        {/* Car Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Véhicules Populaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Car Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Tesla+Model+3" alt="Tesla Model 3" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tesla Model 3</h3>
                <p className="text-gray-600 mb-4">Voiture électrique haut de gamme</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">89€/jour</span>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300">
                    Réserver
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=BMW+X5" alt="BMW X5" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">BMW X5</h3>
                <p className="text-gray-600 mb-4">SUV luxueux et confortable</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">120€/jour</span>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300">
                    Réserver
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Audi+A4" alt="Audi A4" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Audi A4</h3>
                <p className="text-gray-600 mb-4">Berline élégante et performante</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">95€/jour</span>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300">
                    Réserver
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Prêt à réserver ?</h2>
          <p className="text-lg text-gray-600 mb-8">Contactez-nous pour toute question ou réservation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Votre email" className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-xs" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Nous contacter
            </button>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Location de Voitures. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default App