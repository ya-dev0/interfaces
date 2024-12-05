import React from 'react';

const colors = [
  { hex: '#FFC0CB', name: 'Розовый (Sakura Pink)' },
  { hex: '#FFB347', name: 'Персиковый' },
  { hex: '#FFFACD', name: 'Лимонный крем' },
  { hex: '#90EE90', name: 'Светло-зеленый (Matcha Green)' },
  { hex: '#ADD8E6', name: 'Светло-голубой' },
];

const ColorPalette: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-8">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center mb-4">
          <div
            className="w-12 h-12 rounded-full"
            style={{ backgroundColor: color.hex }}
          ></div>
          <span className="mt-2 text-sm text-gray-600 text-center">
            {color.name}
            <br />
            {color.hex}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
