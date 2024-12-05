import React, { useState } from 'react';
import NavTabs from '../components/NavTabs';
import Composition, { FigureData } from '../components/Composition';
import Moodboard from '../components/Moodboard';
import ColorPalette from '../components/ColorPalette';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Практические работы по композиции в дизайне
      </h1>
      <NavTabs currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
    </div>
  );
};

// ... Practice1 и Practice2 остаются без изменений ...

const Practice3: React.FC = () => {
  // Практическая работа 3: Развитие навыков в цветоведении и композиции

  // 1. Тема проекта: Онлайн-магазин по продаже сладостей из Японии

  // 2. Мудборд и 3. Цветовая палитра
  // Используем компоненты Moodboard и ColorPalette

  // 4. Применение цветовой палитры в дизайне интерфейса
  // 5. Создание макета

  return (
    <div>
      {/* Мудборд */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Мудборд</h2>
        <Moodboard />
      </section>

      {/* Цветовая палитра */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Цветовая палитра</h2>
        <ColorPalette />
      </section>

      {/* Макет сайта */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Макет сайта</h2>

        {/* Шапка сайта */}
        <header className="h-64 flex items-center justify-center bg-pink-200">
          <h1 className="text-5xl font-bold text-pink-800">Японские сладости</h1>
        </header>

        {/* Основной контент */}
        <main className="p-8">
          {/* Секция с продуктами */}
          <section className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-pink-800">
              Популярные товары
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Карточки с продуктами */}
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

          {/* Секция о компании */}
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

        {/* Подвал */}
        <footer className="bg-pink-200 text-pink-800 p-4 mt-16">
          <p className="text-center">&copy; 2023 Японские сладости. Все права защищены.</p>
        </footer>
      </section>

      {/* Размышления */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Размышления</h3>
        <p>
          В этой работе мы создали мудборд и цветовую палитру, которые помогли нам определить стиль
          и настроение нашего онлайн-магазина японских сладостей. Мы использовали мягкие и приятные
          цвета, такие как розовый и светло-зеленый, чтобы передать нежность и изысканность
          японских десертов. Макет сайта отражает принципы гармонии и баланса, а также обеспечивает
          удобство для пользователей.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Баланс:</strong> Элементы размещены симметрично, создавая ощущение стабильности.
          </li>
          <li>
            <strong>Контраст:</strong> Использование более ярких оттенков розового для кнопок и заголовков
            выделяет важные элементы.
          </li>
          <li>
            <strong>Доминанта:</strong> Крупные изображения продуктов привлекают внимание посетителей.
          </li>
          <li>
            <strong>Ритм:</strong> Повторение стилей карточек продуктов создает визуальный ритм.
          </li>
          <li>
            <strong>Пропорция:</strong> Размеры элементов соотносятся друг с другом для гармоничного вида.
          </li>
          <li>
            <strong>Единство:</strong> Общая цветовая палитра и тема связывают все элементы дизайна вместе.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
