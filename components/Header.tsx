// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип (без названия) */}
        <Link href="/">
          <img
            src="/accessories/brand_logo.jpg"
            alt="Логотип"
            className="h-8 cursor-pointer"
          />
        </Link>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <Link href="/">
            <span className="hover:text-pink-800 cursor-pointer">Главная</span>
          </Link>
          <Link href="/catalog">
            <span className="hover:text-pink-800 cursor-pointer">Каталог</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-pink-800 cursor-pointer">О нас</span>
          </Link>
          <Link href="/contacts">
            <span className="hover:text-pink-800 cursor-pointer">Контакты</span>
          </Link>
        </nav>

        {/* Бургер для мобильного */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block w-full h-0.5 bg-gray-700"></span>
            <span className="block w-full h-0.5 bg-gray-700"></span>
            <span className="block w-full h-0.5 bg-gray-700"></span>
          </div>
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-50">
              <Link href="/">
                <span onClick={() => setOpen(false)}>Главная</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-50">
              <Link href="/catalog">
                <span onClick={() => setOpen(false)}>Каталог</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-50">
              <Link href="/about">
                <span onClick={() => setOpen(false)}>О нас</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-50">
              <Link href="/contacts">
                <span onClick={() => setOpen(false)}>Контакты</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
