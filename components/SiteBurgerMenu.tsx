// components/SiteBurgerMenu.tsx
import React, { useState } from 'react';

const SiteBurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative z-20">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-gray-700">ArchLanding</div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block w-full h-0.5 bg-gray-600"></span>
            <span className="block w-full h-0.5 bg-gray-600"></span>
            <span className="block w-full h-0.5 bg-gray-600"></span>
          </div>
        </button>

        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">О проекте</li>
          <li className="hover:text-blue-600 cursor-pointer">Архитектор</li>
          <li className="hover:text-blue-600 cursor-pointer">Информация</li>
          <li className="hover:text-blue-600 cursor-pointer">Купить билет</li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow border-t border-gray-200">
          <ul className="flex flex-col text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">О проекте</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Архитектор</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Информация</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Купить билет</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SiteBurgerMenu;
