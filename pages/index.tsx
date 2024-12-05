import React, { useState } from 'react';
import NavTabs from '../components/NavTabs';
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Практические работы по композиции в дизайне
      </h1>
      <NavTabs currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};


const Practice1: React.FC = () => {
  // Практическая работа 1: Изучение стабильных и динамичных композиций, доминанты

  // 1. Выбор пяти фигур
  const baseFigures: Omit<FigureData, 'position'>[] = [
    { id: 1, shape: 'circle', size: 60, color: 'red' },
    { id: 2, shape: 'square', size: 50, color: 'blue' },
    { id: 3, shape: 'triangle', size: 70, color: 'green' },
    { id: 4, shape: 'rectangle', size: 80, color: 'yellow' },
    { id: 5, shape: 'hexagon', size: 90, color: 'purple' },
  ];

  // 2. Стабильная композиция
  const stableFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 50, y: 60 + index * 5 },
  }));

  // 3. Динамичная композиция
  const dynamicFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 20 + index * 15, y: 20 + index * 15 },
  }));

  // 4. Доминанта
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
    <div>
      {/* Стабильная композиция */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Стабильная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={stableFigures} />
        </div>
      </section>

      {/* Динамичная композиция */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Динамичная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dynamicFigures} />
        </div>
      </section>

      {/* Доминанта */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Композиция с доминантой</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dominantFigures} />
        </div>
      </section>

      {/* Размышления */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Размышления</h2>
        <p>
          После завершения композиций, мы можем увидеть, как расположение, размер и цвет фигур влияют на
          общее восприятие композиции. В стабильной композиции элементы расположены так, чтобы создать
          баланс и гармонию. В динамичной композиции расположение фигур создает ощущение движения и
          напряжения. В композиции с доминантой одна фигура выделяется среди остальных, привлекая
          основное внимание.
        </p>
      </section>
    </div>
  );
};

const Practice2: React.FC = () => {
  // Практическая работа 2: Применение композиционных принципов в дизайне веб-страницы

  // 1. Определение темы веб-страницы
  const theme = 'Сайт книжного магазина';

  // 3. Выбор цветовой палитры
  const colorPalette = {
    primary: '#2c3e50', // темно-синий
    secondary: '#ecf0f1', // светло-серый
    accent: '#e74c3c', // красный
  };

  // Стили для использования цветовой палитры
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
    <div>
      {/* Шапка сайта с доминантой */}
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

      {/* Основной контент */}
      <main className="p-8">
        {/* Секция бестселлеров */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Наши бестселлеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Карточки с книгами */}
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

        {/* Секция преимуществ */}
        <section className="bg-gray-100 p-8 mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h3>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <svg
                className="w-16 h-16 mb-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Иконка ассортимента */}
                <path d="M2 2h16v16H2V2zm2 2v12h12V4H4z" />
              </svg>
              <p className="text-xl font-semibold text-center">Большой ассортимент книг</p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <svg
                className="w-16 h-16 mb-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Иконка доставки */}
                <path d="M3 3h14v14H3V3zm2 2v10h10V5H5z" />
              </svg>
              <p className="text-xl font-semibold text-center">Быстрая доставка</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 mb-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Иконка цены */}
                <path d="M5 5h10v10H5V5zm2 2v6h6V7H7z" />
              </svg>
              <p className="text-xl font-semibold text-center">Выгодные цены</p>
            </div>
          </div>
        </section>

        {/* Секция подписки */}
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

      {/* Подвал */}
      <footer className="bg-gray-800 text-white p-4 mt-16">
        <p className="text-center">&copy; 2023 Наш книжный магазин. Все права защищены.</p>
      </footer>

      {/* Размышления */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Размышления</h3>
        <p>
          В этой работе мы адаптировали карточки под конкретные книги и улучшили композицию страницы.
          Были использованы различные принципы композиции:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Баланс:</strong> Элементы расположены симметрично и гармонично по всей странице.
          </li>
          <li>
            <strong>Контраст:</strong> Использование ярких цветов для выделения важных элементов, таких как
            кнопки и заголовки.
          </li>
          <li>
            <strong>Доминанта:</strong> Главный заголовок и изображения книг привлекают внимание посетителей.
          </li>
          <li>
            <strong>Ритм:</strong> Повторение стилей карточек и секций создают визуальный ритм.
          </li>
          <li>
            <strong>Пропорция:</strong> Размеры элементов соотносятся друг с другом, создавая гармонию.
          </li>
          <li>
            <strong>Единство:</strong> Общая цветовая палитра и стиль связывают все элементы дизайна вместе.
          </li>
        </ul>
      </section>
    </div>
  );
};

const Practice3: React.FC = () => {
  // Практическая работа 3: Развитие навыков в цветоведении и композиции

  // ... код для Practice3, как был предоставлен ранее ...
  
  // Код для Practice3 уже был предоставлен, и его можно оставить без изменений.
  
  return (
    // Код для Practice3 из предыдущего ответа
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

const Practice4: React.FC = () => {
  // Практическая работа 4: Создание объекта дизайна в заданной стилистике (Киберпанк)

  return (
    <div className="bg-dark-900 text-gray-300">
      {/* Исследование стиля */}
      <section className="p-8">
        <CyberpunkStyle />
      </section>

      {/* Макет сайта-обзора */}
      <section>
        <CyberpunkReview />
      </section>
    </div>
  );
};

export default IndexPage;
