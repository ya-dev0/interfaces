import React, { useState } from 'react';

interface BurgerMenuProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  menuColor?: string;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ currentTab, onTabChange, menuColor = '#fff' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button onClick={handleMenuClick} className="text-2xl focus:outline-none">
        {/* Иконка меню */}
        <div className="space-y-1">
          <div className="w-6 h-0.5" style={{ backgroundColor: menuColor }}></div>
          <div className="w-6 h-0.5" style={{ backgroundColor: menuColor }}></div>
          <div className="w-6 h-0.5" style={{ backgroundColor: menuColor }}></div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <button
            onClick={() => handleTabClick('practice1')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Практическая работа 1
          </button>
          <button
            onClick={() => handleTabClick('practice2')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Практическая работа 2
          </button>
          <button
            onClick={() => handleTabClick('practice3')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Практическая работа 3
          </button>
          <button
            onClick={() => handleTabClick('practice4')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Практическая работа 4
          </button>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
