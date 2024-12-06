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
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
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
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
              </div>
              <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
                <img
                  src="/images/products/dorayaki.jpg"
                  alt="Дораяки"
                  className="mb-4 w-full h-48 object-contain"
                />
                <h4 className="text-xl font-bold text-center text-pink-800">Дораяки</h4>
                <p className="text-gray-600 text-center">Панкейки с бобовой пастой</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">В корзину</button>
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

export default Practice3;
