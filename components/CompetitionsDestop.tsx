// components/CompetitionsDesktop.tsx
import React from 'react';

const CompetitionsDesktop: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 glitch" data-text="Главная страница (Desktop)">
        Главная страница (Desktop)
      </h2>
      <p className="mb-4">
        На этом сайте вы найдёте информацию о самых актуальных конкурсах и грантах для дизайнеров. 
        Мы собрали лучшие предложения и приглашаем вас принять в них участие!
      </p>
      <img
        src="/images/design/screenshot1.jpg"
        alt="Скриншот прототипа главной страницы"
        className="w-full h-auto mb-4"
      />
      <ul className="list-disc list-inside mb-4">
        <li>Актуальные конкурсы</li>
        <li>Календарь мероприятий</li>
        <li>Онлайн-подача заявки</li>
      </ul>
      <p className="mb-4">
        Ниже вы можете выбрать конкурс и перейти к форме заявки, либо ознакомиться с подробностями каждого конкурса.
      </p>
      <button className="px-6 py-2 bg-yellow-500 text-dark-900 font-semibold rounded hover:bg-yellow-600 transition duration-300 glitch" data-text="Перейти к заявке">
        Перейти к заявке
      </button>
    </div>
  );
};

export default CompetitionsDesktop;
