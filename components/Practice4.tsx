// components/Practice4.tsx
import React, { useState } from 'react';
import CompetitionsDesktop from './CompetitionsDesktop';
import ApplicationForm from './ApplicationForm';
import CompetitionsMobile from './CompetitionsMobile';

const Practice4: React.FC = () => {
  const [page, setPage] = useState<'desktopHome'|'desktopForm'|'mobile'>('desktopHome');

  const handleSwitchPage = (p: 'desktopHome'|'desktopForm'|'mobile') => {
    setPage(p);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Конкурсы, гранты для дизайнеров
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleSwitchPage('desktopHome')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Главная (Desktop)
        </button>
        <button
          onClick={() => handleSwitchPage('desktopForm')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Форма (Desktop)
        </button>
        <button
          onClick={() => handleSwitchPage('mobile')}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Мобильная версия
        </button>
      </div>

      {page === 'desktopHome' && <CompetitionsDesktop />}
      {page === 'desktopForm' && (
        <ApplicationForm onClose={() => handleSwitchPage('desktopHome')} />
      )}
      {page === 'mobile' && <CompetitionsMobile />}
    </div>
  );
};

export default Practice4;
