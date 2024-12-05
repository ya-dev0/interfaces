import React from 'react';

const CyberpunkStyle: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center text-neon-pink">Исследование стиля "Киберпанк"</h2>
      <p className="text-gray-300 mb-6">
        Киберпанк — это жанр научной фантастики, который фокусируется на сочетании "низкой жизни" и "высокой технологии". Визуальный стиль киберпанка характеризуется яркими неоновыми цветами, темными тонами, футуристическими элементами и урбанистическими пейзажами.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-neon-blue">Стилеобразующие элементы:</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>**Цвета**: Неоновые оттенки розового, синего, фиолетового на темном фоне.</li>
        <li>**Шрифты**: Футуристические, техно-шрифты, часто с острыми углами.</li>
        <li>**Графические элементы**: Глитч-эффекты, сетки, неоновые линии, кибернетические узоры.</li>
        <li>**Композиция**: Урбанистические сцены, высокотехнологичные объекты, сочетание человека и машины.</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <img src="/images/cyberpunk/style-analysis/city.jpg" alt="Киберпанк город" className="w-full h-48 object-cover" />
        <img src="/images/cyberpunk/style-analysis/neon-signs.jpg" alt="Неоновые вывески" className="w-full h-48 object-cover" />
        <img src="/images/cyberpunk/style-analysis/tech.jpg" alt="Футуристическая технология" className="w-full h-48 object-cover" />
      </div>
    </div>
  );
};

export default CyberpunkStyle;
