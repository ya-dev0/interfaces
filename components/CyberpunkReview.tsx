import React, { useState } from 'react';

const images = [
  {
    src: '/images/cyberpunk/review/scene1.jpg',
    alt: 'Сцена 1 из аниме "Киберпанк: Бегущие по краю"',
  },
  {
    src: '/images/cyberpunk/review/scene2.jpg',
    alt: 'Сцена 2 из аниме "Киберпанк: Бегущие по краю"',
  },
  {
    src: '/images/cyberpunk/review/scene3.jpg',
    alt: 'Сцена 3 из аниме "Киберпанк: Бегущие по краю"',
  },
];

const CyberpunkReview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="bg-dark-900 text-gray-300 relative" style={{
      backgroundImage: 'url(/images/cyberpunk/review/scene2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <header
        className="h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/images/cyberpunk/review/header.jpg)' }}
      >
        <div className="absolute inset-0 bg-dark-900 opacity-50"></div>
        <h1 className="text-5xl font-bold text-neon-pink text-center z-10 glitch" data-text="Киберпанк: Бегущие по краю">
          Киберпанк: Бегущие по краю
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue glitch" data-text="Обзор">
            Обзор
          </h2>
          <p className="text-gray-300 mb-4">
            "Киберпанк: Бегущие по краю" — аниме-сериал, созданный по мотивам вселенной Cyberpunk 2077.
            Сюжет вращается вокруг молодого героя, который пытается выжить в мегаполисе будущего, где технологии
            тесно переплелись с преступностью. Здесь корпорации владеют всем, а человеческая жизнь
            зачастую не стоит и чипа, встроенного в мозг.
          </p>
          <p className="text-gray-300">
            Сериал выделяется насыщенной визуальной стилистикой, динамичными сценами и глубокими 
            философскими темами: что делает нас людьми? Можно ли сохранить мораль в мире, где 
            власть и информация определяют судьбы миллионов?
          </p>
        </section>

        {/* Carousel */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue glitch" data-text="Галерея">
            Галерея
          </h2>
          <div className="relative w-full md:w-2/3 mx-auto">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-64 object-cover"
            />
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-800 bg-opacity-50 text-white px-3 py-2"
            >
              &#10094;
            </button>
            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-800 bg-opacity-50 text-white px-3 py-2"
            >
              &#10095;
            </button>
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-neon-blue glitch" data-text="Анализ стиля">
            Анализ стиля
          </h2>
          <p className="text-gray-300 mb-4">
            Аниме мастерски передает атмосферу киберпанка: неоновые огни, 
            высокотехнологичные импланты, урбанистические джунгли из стекла и металла.
            Контраст между темными фонами и яркими неоновыми цветами подчеркивает
            напряжённость и хаос этого мира.
          </p>
          <p className="text-gray-300">
            Персонажи аниме отражают борьбу за индивидуальность и человечность в 
            обществе, где чувства можно контролировать, а воспоминания переписывать. 
            Именно эта идея — сохранение собственной сущности в мире, где всё можно изменить, 
            — делает "Киберпанк: Бегущие по краю" таким запоминающимся.
          </p>
        </section>

        {/* Additional text with neon style */}
        <section className="mb-12 text-center">
          <p className="text-neon-pink glitch" data-text="Виртуальная реальность или жестокая реальность?">
            Виртуальная реальность или жестокая реальность?
          </p>
          <p className="text-gray-300 mt-4">
            Этот вопрос пронизывает всё произведение. Можно ли убежать от боли и страха в цифровую утопию,
            или это всего лишь иллюзия, скрывающая мрак настоящего?
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <button className="px-8 py-4 bg-yellow-500 text-dark-900 font-semibold rounded hover:bg-yellow-600 transition duration-300 glitch" data-text="Смотреть трейлер">
            Смотреть трейлер
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-800 text-gray-400 p-4">
        <p className="text-center">
          &copy; 2023 Обзор аниме "Киберпанк: Бегущие по краю"
        </p>
      </footer>
    </div>
  );
};

export default CyberpunkReview;
