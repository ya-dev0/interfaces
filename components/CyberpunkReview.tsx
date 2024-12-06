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

  const reviewStyle = {
    backgroundImage: 'url(/images/cyberpunk/review/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-dark-900 text-gray-300 relative md:py-8" style={reviewStyle}>
      {/* Header */}
      <header
        className="h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/images/cyberpunk/review/header.jpg)' }}
      >
        <div className="absolute inset-0 bg-dark-900 opacity-50"></div>
        <h1 className="text-5xl font-bold text-yellow-500 text-center z-10 glitch" data-text="Киберпанк: Бегущие по краю">
          Киберпанк: Бегущие по краю
        </h1>
      </header>

      <main className="p-8">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-500 glitch" data-text="Обзор">
            Обзор
          </h2>
          <p className="text-gray-300 mb-4">
            "Киберпанк: Бегущие по краю" — аниме о мире технологий и корпораций...
          </p>
          <p className="text-gray-300">
            Здесь информация — валюта, а человеческие эмоции — товар. Герой пытается понять себя и свою роль в этом мире, полном искусственных воспоминаний и навязанных идеалов.
          </p>
        </section>

        {/* Галерея */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-500 glitch" data-text="Галерея">
            Галерея
          </h2>

          {/* Мобильная карусель */}
          <div className="relative w-full md:hidden">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark-800 bg-opacity-50 text-white px-3 py-2"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark-800 bg-opacity-50 text-white px-3 py-2"
            >
              &#10095;
            </button>
          </div>

          {/* На больших экранах изображения в ряд */}
          <div className="hidden md:flex md:space-x-4 md:justify-center mt-8">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-32 h-32 object-cover hover:opacity-90 transition"
              />
            ))}
          </div>
        </section>

        {/* Анализ стиля */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-500 glitch" data-text="Анализ стиля">
            Анализ стиля
          </h2>
          <p className="text-gray-300 mb-4">
            Контрасты света и тени, неоновые блики, импланты, меняющие природу человека — все это создает атмосферу, где границы между реальностью и симуляцией размыты.
          </p>
          <p className="text-gray-300">
            Зритель сталкивается с вопросами: что значит быть человеком, когда можно изменить тело и разум? Где кончается свобода и начинается программа?
          </p>
        </section>

        {/* Дополнительный неоновый текст */}
        <section className="mb-12 text-center">
          <p className="text-neon-pink glitch" data-text="Симуляция или жизнь?">
            Симуляция или жизнь?
          </p>
          <p className="text-gray-300 mt-4">
            Нет простых ответов, но именно поиск истины среди корпораций, хакеров и цифровых миров наполняет сериал глубоким смыслом.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <button className="px-8 py-4 bg-yellow-500 text-dark-900 font-semibold rounded hover:bg-yellow-600 transition duration-300 glitch" data-text="Смотреть трейлер">
            Смотреть трейлер
          </button>
        </section>
      </main>

      <footer className="bg-dark-800 text-gray-400 p-4">
        <p className="text-center">
          &copy; 2023 Обзор аниме "Киберпанк: Бегущие по краю"
        </p>
      </footer>
    </div>
  );
};

export default CyberpunkReview;
