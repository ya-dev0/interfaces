// components/TopMenu.tsx
import React, { useState } from 'react';

const TopMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleHover = (menuName: string) => {
    setIsOpen(true);
    setOpenSubmenu(menuName);
  };

  const handleLeave = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <div className="text-2xl font-bold text-gray-700">Creative Edge</div>
          {/* Меню */}
          <ul className="hidden md:flex space-x-8 text-gray-700 relative">
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => handleHover('about')}
              onMouseLeave={handleLeave}
            >
              О конкурсе
              {isOpen && openSubmenu === 'about' && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    История
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Регламент
                  </a>
                </div>
              )}
            </li>
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => handleHover('sponsors')}
              onMouseLeave={handleLeave}
            >
              Спонсоры
              {isOpen && openSubmenu === 'sponsors' && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Наши партнёры
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Стать спонсором
                  </a>
                </div>
              )}
            </li>
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => handleHover('apply')}
              onMouseLeave={handleLeave}
            >
              Подать заявку
              {isOpen && openSubmenu === 'apply' && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Форма заявки
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Правила подачи
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
