// components/Practice1.tsx
import React from 'react';
import SiteBurgerMenu from './SiteBurgerMenu';

const Practice1: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Верхнее бургер-меню */}
      <SiteBurgerMenu />

      {/* Hero-секция: большое изображение сооружения */}
      <header className="relative w-full h-96 bg-gray-300 flex items-center justify-center">
        <img
          src="/images/building/hero.jpg"
          alt="Главный вид архитектурного сооружения"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold mb-4">
            Сиднейский оперный театр
          </h1>
          <p className="mb-4">
            Легендарная достопримечательность Австралии, шедевр современной архитектуры
          </p>
          <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
            Купить билет
          </button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-6 space-y-12 text-gray-800">
        {/* Краткое текстовое описание (1-2 абзаца) */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">О здании</h2>
          <p className="mb-4 leading-relaxed">
            Сиднейский оперный театр — одно из самых узнаваемых строений XX века, 
            расположенное в гавани Сиднея, Австралия. Здание является главным символом города 
            и одним из важнейших культурных объектов страны.
          </p>
          <p className="leading-relaxed">
            Его проектирование началось в 1957 году, а официальное открытие состоялось в 1973 году. 
            Уникальные парусообразные оболочки здания создают неповторимый силуэт, 
            ставший архитектурной иконой.
          </p>
        </section>

        {/* Информация об архитекторе */}
        <section className="flex flex-col md:flex-row items-start md:space-x-6">
          <img
            src="/images/building/architect.jpg"
            alt="Портрет архитектора"
            className="w-full md:w-1/3 h-48 object-cover rounded mb-4 md:mb-0"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Автор проекта</h2>
            <p className="leading-relaxed mb-2">
              Архитектор Йørn Утзон (Jørn Utzon) родился в Дании и получил признание во всем мире 
              за смелый подход к формам и конструкциям. Его концепция парусных оболочек 
              вдохновлена природными формами и техникой сборки лодок.
            </p>
            <p className="leading-relaxed">
              Несмотря на то что сам Утзон покинул проект до завершения строительства, 
              его вклад в мировую архитектуру неоценим, и Оперный театр стал одним из самых 
              узнаваемых зданий, внесённых в список Всемирного наследия ЮНЕСКО.
            </p>
          </div>
        </section>

        {/* Дополнительная информация (высота, площадь, дата постройки и т.д.) */}
        <section className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-semibold mb-2">Характеристики</h2>
          <ul className="list-disc list-inside">
            <li>Дата постройки: 1959 — 1973 гг.</li>
            <li>Высота: около 67 метров</li>
            <li>Площадь: ~ 2,2 гектара</li>
            <li>Вместимость: более 5700 человек (в сумме во всех залах)</li>
          </ul>
        </section>

        {/* Ещё одно изображение */}
        <section>
          <img
            src="/images/building/structure.jpg"
            alt="Дополнительный вид здания"
            className="w-full h-auto object-cover rounded"
          />
        </section>

        {/* Призыв к действию */}
        <section className="text-center">
          <p className="mb-4 text-lg">
            Приобретите билеты заранее и погрузитесь в мир музыки, театра и невероятных эмоций.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Посмотреть расписание
          </button>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p className="mb-2">&copy; 2025 Architecture Landing</p>
        <p className="text-sm">Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Practice1;
