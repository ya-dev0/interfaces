// pages/catalog.tsx
import React from 'react';
import Layout from '../components/Layout';

const products = [
  {
    id: 1,
    name: 'Серебряное кольцо',
    price: '1 200 ₽',
    img: '/accessories/product1.jpg',
    large: true, // этот товар делаем "больше" для композиции
  },
  { id: 2, name: 'Браслет с камнями', price: '1 900 ₽', img: '/accessories/product2.jpg' },
  { id: 3, name: 'Золотые серьги', price: '3 500 ₽', img: '/accessories/product3.jpg' },
  { id: 4, name: 'Минималистичное колье', price: '2 700 ₽', img: '/accessories/product4.jpg' },
  { id: 5, name: 'Чокер с цепочками', price: '2 300 ₽', img: '/accessories/product5.jpg' },
  { id: 6, name: 'Подвеска с жемчугом', price: '1 800 ₽', img: '/accessories/product6.jpg' },
  { id: 7, name: 'Браслет с подвесками', price: '2 100 ₽', img: '/accessories/product7.jpg' },
  { id: 8, name: 'Серьги-кольца', price: '1 500 ₽', img: '/accessories/product8.jpg' },
  { id: 9, name: 'Комплект (кольцо+серьги)', price: '4 000 ₽', img: '/accessories/product9.jpg' },
];

export default function Catalog() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full h-64 bg-black flex items-center justify-center">
        <img
          src="/accessories/moodboard.jpg"
          alt="Hero Catalog"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Каталог</h1>
          <p className="mb-4">Лучшие аксессуары для вашего образа</p>
        </div>
      </div>

      {/* Товары */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded shadow overflow-hidden flex flex-col 
                ${item.large ? 'sm:col-span-2' : ''} 
              `}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-full object-cover ${
                  item.large ? 'h-72' : 'h-48'
                }`}
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.price}</p>
                </div>
                <button className="px-4 py-2 bg-black text-white rounded hover:opacity-90 mt-2">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
