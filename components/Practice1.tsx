// components/Practice1.tsx
import React, { useState } from 'react';
import SiteBurgerMenu from './SiteBurgerMenu';

const Practice1: React.FC = () => {
  // Состояние для «модального окна» заявки, уведомлений и т. д.
  const [showNotification, setShowNotification] = useState(false);

  const handleApplyClick = () => {
    // Здесь можно сделать скролл до формы или открыть модалку
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteBurgerMenu />

      {/* Hero section */}
      <header className="relative w-full h-96 bg-gray-400 flex items-center justify-center">
        <img
          src="/images/contest/hero.jpg"
          alt="Конкурс дизайнеров hero"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold mb-4">Конкурс «Creative Edge»</h1>
          <p className="mb-4">Выяви свой талант в самом масштабном дизайнерском событии года!</p>
          <button
            className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
            onClick={handleApplyClick}
          >
            Подать заявку
          </button>
        </div>
      </header>

      {showNotification && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md">
          Переходим к форме заявки...
        </div>
      )}

      {/* Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">О конкурсе</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <img
              src="/images/contest/about.jpg"
              alt="Иллюстрация о дизайне"
              className="w-full md:w-1/2 h-64 object-cover rounded mb-4 md:mb-0"
            />
            <div className="md:w-1/2">
              <p className="mb-4">
                «Creative Edge» — это платформа для творческих людей, где каждый может проявить 
                себя в области графического или веб-дизайна. Лучшие проекты получают гранты.
              </p>
              <p>
                Принять участие может любой желающий, заполнив заявку и загрузив портфолио. 
                Победители будут объявлены на церемонии награждения.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Спонсоры и партнёры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            <img
              src="/images/contest/sponsor1.jpg"
              alt="Логотип спонсора 1"
              className="w-full h-auto object-contain hover:opacity-80 cursor-pointer"
            />
            <img
              src="/images/contest/sponsor2.jpg"
              alt="Логотип спонсора 2"
              className="w-full h-auto object-contain hover:opacity-80 cursor-pointer"
            />
            <img
              src="/images/contest/sponsor3.jpg"
              alt="Логотип спонсора 3"
              className="w-full h-auto object-contain hover:opacity-80 cursor-pointer"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Как подать заявку</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Перейдите к разделу «Подать заявку» в меню</li>
            <li>Заполните контактные поля и добавьте ссылку на портфолио</li>
            <li>Отправьте заявку и дождитесь уведомления на e-mail</li>
          </ol>
          <div className="mt-4 flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleApplyClick}
            >
              Подать заявку
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-dark-900 rounded hover:bg-yellow-600">
              Узнать подробнее
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 Creative Edge. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Practice1;
