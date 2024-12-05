import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Composition, { FigureData } from '../components/Composition';
import Moodboard from '../components/Moodboard';
import ColorPalette from '../components/ColorPalette';
import CyberpunkStyle from '../components/CyberpunkStyle';
import CyberpunkReview from '../components/CyberpunkReview';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="min-h-screen">
      <BurgerMenu currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};

const Practice1: React.FC = () => {
  const baseFigures: Omit<FigureData, 'position'>[] = [
    { id: 1, shape: 'circle', size: 60, color: 'red' },
    { id: 2, shape: 'square', size: 50, color: 'blue' },
    { id: 3, shape: 'triangle', size: 70, color: 'green' },
    { id: 4, shape: 'rectangle', size: 80, color: 'yellow' },
    { id: 5, shape: 'hexagon', size: 90, color: 'purple' },
  ];

  const stableFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 50, y: 60 + index * 5 },
  }));

  const dynamicFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 20 + index * 15, y: 20 + index * 15 },
  }));

  const dominantFigures: FigureData[] = baseFigures.map((figure) => ({
    ...figure,
    size: figure.id === 3 ? figure.size * 1.5 : figure.size,
    color: figure.id === 3 ? 'orange' : figure.color,
    position: {
      x: figure.id === 3 ? 50 : Math.random() * 80 + 10,
      y: figure.id === 3 ? 50 : Math.random() * 80 + 10,
    },
  }));

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Практическая работа 1</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Стабильная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={stableFigures} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Динамичная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dynamicFigures} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Композиция с доминантой</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dominantFigures} />
        </div>
      </section>
    </div>
  );
};

const Practice2: React.FC = () => {
  const colorPalette = {
    primary: '#2c3e50',
    secondary: '#ecf0f1',
    accent: '#e74c3c',
  };

  const styles = {
    header: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.secondary,
    },
    button: {
      backgroundColor: colorPalette.accent,
      color: '#fff',
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colorPalette.secondary }}>
      <BurgerMenu currentTab="practice2" onTabChange={() => {}} />

      <header
        className="h-72 flex items-center justify-center"
        style={{
          ...styles.header,
          backgroundImage: 'url(/images/header-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Добро пожаловать в наш книжный магазин
        </h2>
      </header>

      <main className="p-8">
        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Наши бестселлеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 flex flex-col items-center">
              <img
                src="/images/book1.jpg"
                alt="Tell Me Your Life Story, Dad"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Tell Me Your Life Story, Dad</h4>
              <p className="text-gray-600 text-center">Автор: Questions About Me</p>
            </div>
            <div className="border p-6 flex flex-col items-center">
              <img
                src="/images/book2.jpg"
                alt="Trump: The Art of the Deal"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Trump: The Art of the Deal</h4>
              <p className="text-gray-600 text-center">Автор: Donald J. Trump</p>
            </div>
            <div className="border p-6 flex flex-col items-center">
              <img
                src="/images/book3.jpg"
                alt="Maybe You Should Talk to Someone"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Maybe You Should Talk to Someone</h4>
              <p className="text-gray-600 text-center">Автор: Lori Gottlieb</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-8 mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h3>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 mb-4">
                {/* Здесь можно добавить иконку или изображение */}
              </div>
              <p className="text-xl font-semibold text-center">Большой ассортимент книг</p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 mb-4">
                {/* Здесь можно добавить иконку или изображение */}
              </div>
              <p className="text-xl font-semibold text-center">Быстрая доставка</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4">
                {/* Здесь можно добавить иконку или изображение */}
              </div>
              <p className="text-xl font-semibold text-center">Выгодные цены</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-4 text-center">Подпишитесь на нашу рассылку</h3>
          <p className="text-center mb-6">
            Получайте самые свежие новости и специальные предложения!
          </p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="border p-2 w-full md:w-1/2 mb-4"
            />
            <button type="submit" className="px-6 py-2 rounded" style={styles.button}>
              Подписаться
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-16">
        <p className="text-center">&copy; 2023 Наш книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
};

const Practice3: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-200">
      <BurgerMenu currentTab="practice3" onTabChange={() => {}} />

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Мудборд</h2>
        <Moodboard />
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Цветовая палитра</h2>
        <ColorPalette />
      </section>

      <section>
        <header className="h-64 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-pink-800">Японские сладости</h1>
        </header>

        <main className="p-8">
          <section className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-pink-800">
              Популярные товары
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
                <img
                  src="/images/products/mochi.jpg"
                  alt="Моти"
                  className="mb-4 w-full h-48 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Моти</h4>
                <p className="text-gray-600 text-center">Традиционные рисовые пирожные</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
                  В корзину
                </button>
              </div>
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
                <img
                  src="/images/products/kitkat-matcha.jpg"
                  alt="KitKat со вкусом матча"
                  className="mb-4 w-full h-48 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">
                  KitKat со вкусом матча
                </h4>
                <p className="text-gray-600 text-center">Популярный шоколад с зеленым чаем</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
                  В корзину
                </button>
              </div>
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
                <img
                  src="/images/products/dorayaki.jpg"
                  alt="Дораяки"
                  className="mb-4 w-full h-48 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Дораяки</h4>
                <p className="text-gray-600 text-center">Панкейки с бобовой пастой</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
                  В корзину
                </button>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-pink-800">
              О нашем магазине
            </h3>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Мы предлагаем самые популярные и редкие сладости из Японии. Наша миссия — привнести
              вкус и культуру Японии в ваш дом. Наслаждайтесь изысканными десертами и ощутите
              атмосферу Страны восходящего солнца.
            </p>
          </section>
        </main>

        <footer className="bg-pink-200 text-pink-800 p-4 mt-16">
          <p className="text-center">&copy; 2023 Японские сладости. Все права защищены.</p>
        </footer>
      </section>
    </div>
  );
};

const Practice4: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-300">
      <BurgerMenu currentTab="practice4" onTabChange={() => {}} />

      <section className="p-8">
        <CyberpunkStyle />
      </section>

      <section>
        <CyberpunkReview />
      </section>
    </div>
  );
};

export default IndexPage;
