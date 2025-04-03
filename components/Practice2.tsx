// components/Practice2.tsx
import React from 'react';

const Practice2: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        UI Kit для интернет-магазина аксессуаров <span className="text-sm text-gray-500">("Grey Stone")</span>
      </h1>

      {/* 1. Мудборд */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Мудборд</h2>
        <div className="w-full overflow-hidden rounded shadow-md">
          <img
            src="/accessories/moodboard.jpg"
            alt="Мудборд, отражающий стиль магазина аксессуаров"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Коллаж из фотографий, отражающих настроение бренда: минималистичные формы, 
          оттенки серого, серебристого и лёгкий акцент на пастельных цветах.
        </p>
      </section>

      {/* 2. Цветовая палитра */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Цветовая палитра</h2>
        <div className="flex space-x-4">
          <ColorBlock color="#222222" name="Primary (Dark Gray)" />
          <ColorBlock color="#F2F2F2" name="Background (Light Gray)" />
          <ColorBlock color="#FFBEDD" name="Accent (Pinkish)" />
          <ColorBlock color="#FFD700" name="Accent (Gold)" />
          <ColorBlock color="#D32F2F" name="Danger" />
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Основные цвета — разные оттенки серого для фона и текстов, 
          акценты: розоватый и золотой для выделения важных элементов (например, кнопок).
        </p>
      </section>

      {/* 3. Шрифты */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Шрифты</h2>
        <div className="space-y-2">
          <p className="text-xl font-bold">Заголовок H2 (Montserrat Bold, 24px)</p>
          <p className="text-base">
            Обычный текст (Montserrat Regular, 16px) – описание товаров, карточки, параграфы.
          </p>
          <p className="text-sm text-gray-600">
            Подсказки и вторичный текст (Montserrat Light, 14px).
          </p>
          <p className="text-base italic">
            Подзаголовки или цитаты (Montserrat Italic, 16px).
          </p>
        </div>
      </section>

      {/* 4. Логотип */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Логотип</h2>
        <div className="flex flex-wrap items-center space-x-8">
          <div>
            <img
              src="/accessories/brand_logo.png"
              alt="Логотип бренда (цветной)"
              className="h-16 mb-2"
            />
            <p className="text-sm text-gray-600">Цветной вариант</p>
          </div>
          <div>
            <img
              src="/accessories/brand_logo_mono.png"
              alt="Логотип бренда (моно)"
              className="h-16 mb-2 bg-gray-200 p-2 rounded"
            />
            <p className="text-sm text-gray-600">Монохром</p>
          </div>
        </div>
      </section>

      {/* 5. Фотостиль */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Фото и обработка</h2>
        <p className="mb-4">
          Для фотографий товаров используем мягкий свет и нейтральный фон (чаще светлый 
          или слегка сероватый), чтобы акцент был на самом аксессуаре. Допустимо применять 
          лёгкую цветокоррекцию, убирая яркие артефакты.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="/accessories/product1.jpg"
            alt="Пример фото аксессуара 1"
            className="w-full h-auto object-cover rounded"
          />
          <img
            src="/accessories/product2.jpg"
            alt="Пример фото аксессуара 2"
            className="w-full h-auto object-cover rounded"
          />
          <img
            src="/accessories/product3.jpg"
            alt="Пример фото аксессуара 3"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </section>

      {/* 6. Сборка элементов (мини-UI Kit) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Стили UI и компоненты</h2>
        <p className="mb-2 text-gray-600">
          Ниже — примеры основных компонентов, собранные на одном экране:
        </p>
        <div className="border p-4 rounded space-y-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded" style={{ backgroundColor: '#222222', color: '#FFF' }}>
              Тёмная кнопка
            </button>
            <button className="px-4 py-2 rounded" style={{ backgroundColor: '#FFBEDD', color: '#222' }}>
              Розовая кнопка
            </button>
            <button className="px-4 py-2 rounded border border-gray-300">
              Второстепенная
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">Поиск</label>
              <input
                type="text"
                placeholder="Искать..."
                className="border w-full p-2 rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">E-mail</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="border w-full p-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Выбор варианта</label>
            <select className="border p-2 rounded w-full">
              <option>Кольца</option>
              <option>Подвески</option>
              <option>Серьги</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice2;

/** Вспомогательный компонент для цвета */
interface ColorBlockProps {
  color: string;
  name: string;
}
const ColorBlock: React.FC<ColorBlockProps> = ({ color, name }) => (
  <div className="flex flex-col items-center text-center text-sm">
    <div
      className="w-16 h-16 rounded border border-gray-300 mb-2"
      style={{ backgroundColor: color }}
    />
    <p className="font-semibold">{name}</p>
    <p className="text-gray-500">{color}</p>
  </div>
);
