// components/Practice2.tsx
import React from 'react';

const Practice2: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800 space-y-10">
      <h1 className="text-3xl font-bold">UI Kit: Интернет-магазин аксессуаров</h1>

      {/* 1. Мудборд */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Мудборд</h2>
        <img
          src="/accessories/moodboard.jpg"
          alt="Мудборд"
          className="w-full h-auto object-cover rounded shadow"
        />
      </section>

      {/* 2. Цветовая палитра */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Цветовая палитра</h2>
        <div className="flex space-x-4">
          <ColorBlock color="#222222" name="Primary" />
          <ColorBlock color="#F2F2F2" name="Background" />
          <ColorBlock color="#FFBEDD" name="Accent" />
          <ColorBlock color="#FFD700" name="Gold" />
          <ColorBlock color="#D32F2F" name="Danger" />
        </div>
      </section>

      {/* 3. Шрифты */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Шрифты</h2>
        <div className="space-y-2">
          <p className="text-4xl font-bold">Заголовок H1</p>
          <p className="text-2xl font-semibold">Заголовок H2</p>
          <p className="text-xl font-semibold">Заголовок H3</p>
          <p className="text-base">Текст обычный</p>
          <p className="text-sm text-gray-600">Текст подсказка</p>
        </div>
      </section>

      {/* 4. Логотип */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Логотипы (JPG)</h2>
        <div className="flex flex-wrap items-center space-x-8">
          <div>
            <img
              src="/accessories/brand_logo.jpg"
              alt="Логотип обычный"
              className="h-16"
            />
          </div>
          <div>
            <img
              src="/accessories/brand_logo_invert.jpg"
              alt="Логотип инверсированный"
              className="h-16 bg-gray-700 p-2 rounded"
            />
          </div>
        </div>
      </section>

      {/* 5. Фото */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Фото</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="/accessories/product1.jpg"
            alt="Фото 1"
            className="w-full h-auto object-cover rounded"
          />
          <img
            src="/accessories/product2.jpg"
            alt="Фото 2"
            className="w-full h-auto object-cover rounded"
          />
          <img
            src="/accessories/product3.jpg"
            alt="Фото 3"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </section>

      {/* 6. Элементы UI */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Элементы UI</h2>
        <div className="border p-4 rounded space-y-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded bg-black text-white">Primary</button>
            <button className="px-4 py-2 rounded bg-pink-300 text-black">Accent</button>
            <button className="px-4 py-2 rounded border border-gray-300">Secondary</button>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Текстовое поле"
              className="border p-2 rounded flex-1"
            />
            <select className="border p-2 rounded flex-1">
              <option>Выбор 1</option>
              <option>Выбор 2</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice2;

interface ColorBlockProps {
  color: string;
  name: string;
}
const ColorBlock: React.FC<ColorBlockProps> = ({ color, name }) => (
  <div className="flex flex-col items-center text-center text-sm">
    <div
      className="w-16 h-16 rounded border border-gray-300 mb-1"
      style={{ backgroundColor: color }}
    />
    <p className="font-semibold">{name}</p>
    <p className="text-gray-500">{color}</p>
  </div>
);
