// components/PracticesDotMenu.tsx
import React, { useState } from 'react';

interface PracticesDotMenuProps {
  currentTab: string;
  onChangeTab: (tab: string) => void;
}

const PracticesDotMenu: React.FC<PracticesDotMenuProps> = ({ currentTab, onChangeTab }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <div className="fixed top-2 right-2 z-50">
      {/* Маленькая точка / бургер-кнопка для переключения практик */}
      <button
        onClick={handleToggle}
        className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none"
        title="Переключить практику"
      >
        {/* Сама «точка» */}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-1">
          {['practice1','practice2','practice3','practice4'].map((p) => (
            <button
              key={p}
              onClick={() => {
                onChangeTab(p);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm 
                ${currentTab === p ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}
              `}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PracticesDotMenu;
