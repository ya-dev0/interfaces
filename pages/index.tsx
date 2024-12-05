import React, { useState } from 'react';
import NavTabs from '../components/NavTabs';
import Composition, { FigureData } from '../components/Composition';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Практические работы по композиции в дизайне</h1>
      <NavTabs currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
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

  // 4. Разработка макета веб-страницы с учетом принципов композиции

  return (
    <div>
      {/* Шапка сайта с доминантой */}
      <header
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: 'url(/bookstore.jpg)' }}
      >
        <h2 className="text-5xl font-bold text-white">Добро пожаловать в наш книжный магазин</h2>
      </header>

      {/* Основной контент */}
      <main className="p-8">
        {/* Секция бестселлеров */}
        <section className="mb-10">
          <h3 className="text-3xl font-semibold mb-4">Наши бестселлеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Карточки с книгами */}
            <div className="border p-4">
              <img src="/book1.jpg" alt="Книга 1" className="mb-2 w-full h-48 object-cover" />
              <h4 className="text-xl font-bold">Название книги 1</h4>
              <p className="text-gray-600">Автор книги 1</p>
            </div>
            <div className="border p-4">
              <img src="/book2.jpg" alt="Книга 2" className="mb-2 w-full h-48 object-cover" />
              <h4 className="text-xl font-bold">Название книги 2</h4>
              <p className="text-gray-600">Автор книги 2</p>
            </div>
            <div className="border p-4">
              <img src="/book3.jpg" alt="Книга 3" className="mb-2 w-full h-48 object-cover" />
              <h4 className="text-xl font-bold">Название книги 3</h4>
              <p className="text-gray-600">Автор книги 3</p>
            </div>
          </div>
        </section>

        {/* Секция преимуществ */}
        <section className="bg-gray-100 p-8">
          <h3 className="text-3xl font-semibold mb-4">Почему выбирают нас</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Большой ассортимент книг</li>
            <li>Быстрая доставка</li>
            <li>Выгодные цены</li>
          </ul>
        </section>
      </main>

      {/* Размышления */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Размышления</h3>
        <p>
          В этой работе мы применили принципы композиции при создании макета веб-страницы книжного
          магазина. Были учтены следующие аспекты:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Баланс:</strong> Элементы на странице расположены так, чтобы создать симметричный и
            асимметричный баланс.
          </li>
          <li>
            <strong>Контраст:</strong> Использование контраста между фоном и текстом, различными
            размерами шрифтов.
          </li>
          <li>
            <strong>Доминанта:</strong> Главный заголовок на шапке сайта выделяется большим размером и
            цветом, привлекая внимание.
          </li>
          <li>
            <strong>Ритм:</strong> Повторение карточек книг создает визуальный ритм.
          </li>
          <li>
            <strong>Пропорция:</strong> Размеры элементов гармонично соотносятся друг с другом.
          </li>
          <li>
            <strong>Единство:</strong> Все элементы дизайна связаны общей темой и стилем, создавая
            целостность композиции.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
