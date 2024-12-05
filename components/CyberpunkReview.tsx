import React from 'react';

const CyberpunkReview: React.FC = () => {
  return (
    <div className="bg-dark-900 text-gray-300">
      {/* Шапка сайта */}
      <header className="h-64 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/cyberpunk/review/header.jpg)' }}>
        <h1 className="text-5xl font-bold text-neon-pink text-center">Киберпанк: Бегущие по краю</h1>
      </header>

      {/* Основной контент */}
      <main className="p-8">
        {/* Описание аниме */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Обзор</h2>
          <p className="text-gray-300">
            "Киберпанк: Бегущие по краю" — это аниме-сериал, основанный на вселенной игры Cyberpunk 2077. Сериал рассказывает историю о мире высоких технологий и низкой морали, где главный герой пытается выжить в мрачном мегаполисе будущего.
          </p>
        </section>

        {/* Галерея изображений */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/cyberpunk/review/scene1.jpg" alt="Сцена 1" className="w-full h-48 object-cover" />
            <img src="/images/cyberpunk/review/scene2.jpg" alt="Сцена 2" className="w-full h-48 object-cover" />
            <img src="/images/cyberpunk/review/scene3.jpg" alt="Сцена 3" className="w-full h-48 object-cover" />
          </div>
        </section>

        {/* Анализ стиля в аниме */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Анализ стиля в аниме</h2>
          <p className="text-gray-300">
            Аниме мастерски передает атмосферу киберпанка через визуальные элементы: неоновые огни, технологические устройства, урбанистические пейзажи. Широко используются контрасты между темными фонами и яркими цветами, что создает впечатляющий визуальный эффект.
          </p>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-dark-800 text-gray-400 p-4">
        <p className="text-center">&copy; 2023 Обзор аниме "Киберпанк: Бегущие по краю"</p>
      </footer>
    </div>
  );
};

export default CyberpunkReview;
