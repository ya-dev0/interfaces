// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        <img
          src="/accessories/brand_logo_invert.jpg"
          alt="Инвертированный логотип"
          className="h-10"
        />
        <p className="text-sm text-gray-300">
          © 2025 Интернет-магазин аксессуаров. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
