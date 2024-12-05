// components/CyberpunkReview.tsx
import React from 'react';

const CyberpunkReview: React.FC = () => {
  return (
    <div className="bg-dark-900 text-gray-300">
      {/* Header */}
      <header className="h-64 flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/cyberpunk/review/header.jpg)' }}>
        <div className="absolute inset-0 bg-dark-900 opacity-50"></div>
        <h1 className="text-5xl font-bold text-neon-pink text-center z-10 glitch">
          Киберпанк: Бегущие по краю
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Обзор</h2>
          <p className="text-gray-300">
            "Киберпанк: Бегущие по краю" — аниме-сериал, основанный на вселенной игры Cyberpunk 2077...
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Кадры из аниме */}
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Анализ стиля в аниме</h2>
          <p className="text-gray-300">
            Аниме мастерски передает атмосферу киберпанка...
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <button className="px-8 py-4 bg-yellow-500 text-dark-900 font-semibold rounded hover:bg-yellow-600 transition duration-300 glitch">
            Смотреть трейлер
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-800 text-gray-400 p-4">
        <p className="text-center">&copy; 2023 Обзор аниме "Киберпанк: Бегущие по краю"</p>
      </footer>
    </div>
  );
};

export default CyberpunkReview;
