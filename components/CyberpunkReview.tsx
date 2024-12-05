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
            "Киберпанк: Бегущие по краю" — аниме-сериал, основанный на вселенной игры Cyberpunk 2077. Сериал рассказывает историю о мире высоких технологий и низкой морали, где главный герой пытается выжить в мрачном мегаполисе будущего.
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/cyberpunk/review/scene1.jpg" alt="Сцена 1" className="w-full h-48 object-cover hover:opacity-75 transition duration-300" />
            <img src="/images/cyberpunk/review/scene2.jpg" alt="Сцена 2" className="w-full h-48 object-cover hover:opacity-75 transition duration-300" />
            <img src="/images/cyberpunk/review/scene3.jpg" alt="Сцена 3" className="w-full h-48 object-cover hover:opacity-75 transition duration-300" />
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Анализ стиля в аниме</h2>
          <p className="text-gray-300">
            Аниме мастерски передает атмосферу киберпанка через визуальные элементы: неоновые огни, технологические устройства, урбанистические пейзажи. Широко используются контрасты между темными фонами и яркими цветами, создавая впечатляющий визуальный эффект.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <button className="px-8 py-4 bg-neon-pink text-dark-900 font-semibold rounded hover:bg-neon-pink-hover transition duration-300 glitch">
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
