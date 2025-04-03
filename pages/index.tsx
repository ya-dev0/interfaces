// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full h-64 bg-black flex items-center justify-center">
        <img
          src="/accessories/moodboard.jpg"
          alt="Hero"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-80"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Grey Stone</h1>
          <p className="mb-4">Коллекция стильных аксессуаров</p>
          <button className="px-6 py-2 bg-black bg-opacity-80 rounded hover:bg-opacity-90">
            Каталог
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Добро пожаловать!</h2>
        <p className="mb-4">
          Мы предлагаем изысканные украшения и аксессуары, созданные с вниманием к деталям. 
          В нашем магазине вы найдёте серьги, кольца, браслеты и многое другое, чтобы подчеркнуть 
          вашу индивидуальность и стиль.
        </p>
      </div>
    </Layout>
  );
}
