// components/CompetitionsMobile.tsx
import React from 'react';

const CompetitionsMobile: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4 glitch" data-text="Мобильная версия">
        Мобильная версия
      </h2>
      <p className="mb-4">
        Это прототип мобильного приложения «Конкурсы, гранты для дизайнеров».
      </p>
      <img
        src="/images/design/mobile1.jpg"
        alt="Скриншот мобильного приложения"
        className="w-full h-auto mb-4"
      />
      <ul className="list-disc list-inside mb-4">
        <li>Актуальные конкурсы</li>
        <li>Подача заявки</li>
        <li>Уведомления о результатах</li>
      </ul>
      <p className="mb-4">
        Интерфейс адаптирован под смартфоны. Можно отправлять заявки, загружать портфолио, получать уведомления о новых конкурсах.
      </p>
    </div>
  );
};

export default CompetitionsMobile;
