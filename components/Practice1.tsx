// components/Practice1.tsx
import React, { useState } from 'react';
import SiteBurgerMenu from './SiteBurgerMenu';

const Practice1: React.FC = () => {
  // Страница: либо 'home' (главная), либо 'form' (форма)
  const [page, setPage] = useState<'home' | 'form'>('home');

  const handleApplyClick = () => {
    setPage('form');
  };

  if (page === 'form') {
    return <ApplicationForm onBack={() => setPage('home')} />;
  }

  // Если у нас страница 'home', показываем "главную"
  return (
    <div className="min-h-screen flex flex-col">
      <SiteBurgerMenu onApplyClick={handleApplyClick} />

      <header className="relative w-full h-96 bg-gray-400 flex items-center justify-center">
        <img
          src="/images/contest/hero.jpg"
          alt="Конкурс дизайнеров hero"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold mb-4">Конкурс «Creative Edge»</h1>
          <p className="mb-4">Открой свой талант в крупнейшем дизайнерском событии года!</p>
          <button
            className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
            onClick={handleApplyClick}
          >
            Подать заявку
          </button>
        </div>
      </header>

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
                «Creative Edge» — это особая платформа для дизайнеров, где можно представить свою
                работу и получить шанс на грант. Различные номинации, профессиональное жюри
                и интересные задания сделают участие незабываемым.
              </p>
              <p>
                Участвуйте и получите возможность заявить о себе на всю страну, а может и за её пределами!
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
            <li>Нажмите «Подать заявку» (вверху или в Hero-секции)</li>
            <li>Заполните форму: ФИО, e-mail, ссылка на портфолио</li>
            <li>Отправьте заявку и дождитесь подтверждения</li>
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

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 Creative Edge. Все права защищены.</p>
      </footer>
    </div>
  );
};

/** Простая форма подачи заявки, имитирующая переход **/
const ApplicationForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between">
          <h2 className="text-2xl font-bold">Форма заявки</h2>
          <button onClick={onBack} className="hover:underline">
            Вернуться назад
          </button>
        </div>
      </header>
      <main className="flex-1 max-w-lg mx-auto p-6 w-full">
        <h3 className="text-xl font-semibold mb-4">Заполните необходимые поля</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-bold">ФИО</label>
            <input
              type="text"
              className="border w-full p-2 rounded"
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">E-mail</label>
            <input
              type="email"
              className="border w-full p-2 rounded"
              placeholder="example@mail.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Ссылка на портфолио</label>
            <input
              type="url"
              className="border w-full p-2 rounded"
              placeholder="https://portfolio.site"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold">Прикрепить файл (PDF)</label>
            <input type="file" className="border w-full p-2 rounded" />
          </div>

          <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition">
            Отправить заявку
          </button>
        </form>
      </main>
      <footer className="bg-gray-100 text-center p-4 text-sm">
        &copy; 2025 Creative Edge
      </footer>
    </div>
  );
};

export default Practice1;
