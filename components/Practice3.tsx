// components/Practice3.tsx
import React from 'react';

const products = [
  { id: 1, name: 'Серебряное кольцо', price: '1 200 ₽', img: '/accessories/product1.jpg' },
  { id: 2, name: 'Браслет с камнями', price: '1 900 ₽', img: '/accessories/product2.jpg' },
  { id: 3, name: 'Золотые серьги', price: '3 500 ₽', img: '/accessories/product3.jpg' },
  { id: 4, name: 'Минималистичное колье', price: '2 700 ₽', img: '/accessories/product4.jpg' },
  { id: 5, name: 'Чокер с цепочками', price: '2 300 ₽', img: '/accessories/product5.jpg' },
  { id: 6, name: 'Подвеска с жемчугом', price: '1 800 ₽', img: '/accessories/product6.jpg' },
  { id: 7, name: 'Браслет с подвесками', price: '2 100 ₽', img: '/accessories/product7.jpg' },
  { id: 8, name: 'Серьги-кольца', price: '1 500 ₽', img: '/accessories/product8.jpg' },
  { id: 9, name: 'Комплект из кольца и серёг', price: '4 000 ₽', img: '/accessories/product9.jpg' },
];

const Practice3: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F2] text-gray-800">
      {/* Шапка */}
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/accessories/brand_logo.jpg"
              alt="Grey Stone логотип"
              className="h-10"
            />
            <span className="text-xl font-bold">Grey Stone</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-base font-semibold">
            <a href="#" className="hover:text-pink-800">Главная</a>
            <a href="#" className="hover:text-pink-800">О нас</a>
            <a href="#" className="hover:text-pink-800">Контакты</a>
            <a href="#" className="hover:text-pink-800">Корзина</a>
          </nav>
          <button className="md:hidden focus:outline-none">
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block w-full h-0.5 bg-gray-700"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Hero / Баннер */}
      <div className="relative w-full h-64 bg-black flex items-center justify-center">
        <img
          src="/accessories/moodboard.jpg"
          alt="Баннер"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Стильные аксессуары</h1>
          <p className="mb-4 text-sm md:text-base">Создавайте свой уникальный образ с Grey Stone</p>
          <button className="px-6 py-2 bg-black bg-opacity-80 rounded hover:bg-opacity-90">
            Перейти к покупкам
          </button>
        </div>
      </div>

      {/* Секция с товарами */}
      <main className="flex-1 max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Новые поступления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded shadow overflow-hidden flex flex-col">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.price}</p>
                </div>
                <button className="px-4 py-2 bg-[#222222] text-white rounded hover:opacity-90 mt-2">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Подвал */}
      <footer className="bg-white text-gray-700 p-4 text-center mt-6">
        <p className="text-sm">
          © 2025 Grey Stone – Интернет-магазин аксессуаров
        </p>
      </footer>
    </div>
  );
};

export default Practice3;
