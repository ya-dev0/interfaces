// components/Practice1.tsx
import React from 'react';
import TopMenu from './TopMenu';

const Practice1: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Меню сверху */}
      <TopMenu />

      {/* Hero section */}
      <header className="relative w-full h-96 bg-gray-400 flex items-center justify-center">
        {/* hero image */}
        <img
          src="/images/contest/hero.jpg"
          alt="Группа дизайнеров вместе brainstorm"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold mb-4">Конкурс для дизайнеров «Creative Edge»</h1>
          <p className="mb-4">Примите участие в самом масштабном дизайнерском событии года</p>
          <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
            Подать заявку
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">О конкурсе</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <img
              src="/images/contest/about.jpg"
              alt="Абстрактная иллюстрация о дизайне"
              className="w-full md:w-1/2 h-64 object-cover rounded mb-4 md:mb-0"
            />
            <div className="md:w-1/2">
              <p className="mb-4">
                «Creative Edge» — это ежегодное дизайнерское соревнование, где молодые 
                и опытные дизайнеры могут показать своё мастерство, получить экспертную 
                оценку и побороться за ценные призы и гранты. Мы стремимся вдохновлять 
                сообщество и продвигать новые идеи в сфере графического, веб- и продуктового дизайна.
              </p>
              <p>
                Принять участие может любой желающий: от студентов профильных вузов до 
                профессиональных дизайнеров. Главное — желание творить и делиться уникальными решениями.
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
              className="w-full h-auto object-contain"
            />
            <img
              src="/images/contest/sponsor2.jpg"
              alt="Логотип спонсора 2"
              className="w-full h-auto object-contain"
            />
            <img
              src="/images/contest/sponsor3.jpg"
              alt="Логотип спонсора 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Как подать заявку</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Заполните форму на странице «Подать заявку»</li>
            <li>Прикрепите своё портфолио или ссылку на кейсы</li>
            <li>Отправьте заявку и получите подтверждение на e-mail</li>
          </ol>
          <p className="mt-4">
            Все заявки проходят предварительный отбор. Результаты будут опубликованы 
            на сайте, а также отправлены участникам на почту.
          </p>
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
