import React from 'react';
import Moodboard from './Moodboard';
import ColorPalette from './ColorPalette';

const Practice3: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-200">
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Мудборд</h2>
        <Moodboard />
      </section>

      <div className="h-1 bg-gray-300"></div>

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Цветовая палитра</h2>
        <ColorPalette />
      </section>

      <div className="h-1 bg-gray-300"></div>

      <section>
        <header className="h-64 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-pink-800 text-center">Японские сладости</h1>
        </header>

        <main className="p-8 max-w-4xl mx-auto">
          <section className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-pink-800">
              Популярные товары
            </h3>

            {/* 1-я строка: 2 товара */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Моти */}
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg max-w-xs mx-auto">
                <img
                  src="/images/products/mochi.jpg"
                  alt="Моти"
                  className="mb-4 w-32 h-32 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Моти</h4>
                <p className="text-gray-600 text-center">Традиционные рисовые пирожные</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
              </div>

              {/* KitKat Matcha */}
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg max-w-xs mx-auto">
                <img
                  src="/images/products/kitkat-matcha.jpg"
                  alt="KitKat со вкусом матча"
                  className="mb-4 w-32 h-32 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">
                  KitKat со вкусом матча
                </h4>
                <p className="text-gray-600 text-center">Популярный шоколад с зеленым чаем</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
              </div>
            </div>

            {/* 2-я строка: 1 товар (Дораяки, бестселлер) */}
            <div className="mb-8 relative border p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
              <div className="absolute top-2 right-2 bg-yellow-300 text-black px-2 py-1 text-sm font-semibold uppercase">
                Бестселлер
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                  <img
                    src="/images/products/dorayaki.jpg"
                    alt="Дораяки"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2 text-pink-800">Дораяки</h4>
                  <p className="text-gray-600 mb-4">Панкейки с бобовой пастой</p>
                  <p className="text-gray-700 mb-4">
                    Один из самых популярных японских десертов. Нежный бисквит и сладкая бобовая паста анко.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
                </div>
              </div>
            </div>

            {/* 3-я строка: 2 товара (Тайяки, Pocky) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Тайяки */}
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg max-w-xs mx-auto">
                <img
                  src="/images/products/taiyaki.jpg"
                  alt="Тайяки"
                  className="mb-4 w-32 h-32 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Тайяки</h4>
                <p className="text-gray-600 text-center">
                  Рыбовидные пирожки с разными сладкими начинками.
                </p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
              </div>

              {/* Pocky */}
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg max-w-xs mx-auto">
                <img
                  src="/images/products/pocky.jpg"
                  alt="Pocky"
                  className="mb-4 w-32 h-32 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Pocky</h4>
                <p className="text-gray-600 text-center">
                  Хрустящие палочки в глазури, лёгкий сладкий перекус.
                </p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
              </div>
            </div>
          </section>
        </main>

        <section className="p-8 bg-white">
          <h3 className="text-2xl font-semibold mb-4 text-center text-pink-800">Наш магазин</h3>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Мы стремимся привнести вкус и дух Японии в ваш дом...
          </p>
        </section>

        <footer className="bg-pink-200 text-pink-800 p-4 mt-16">
          <p className="text-center">&copy; 2023 Японские сладости. Все права защищены.</p>
        </footer>
      </section>
    </div>
  );
};

export default Practice3;
