import React from 'react';
import Composition, { FigureData, ShapeType } from '../components/Composition';

const IndexPage: React.FC = () => {
  // 1. Выбор пяти фигур
  const baseFigures: Omit<FigureData, 'position'>[] = [
    { id: 1, shape: 'circle', size: 60, color: 'red' },
    { id: 2, shape: 'square', size: 50, color: 'blue' },
    { id: 3, shape: 'triangle', size: 70, color: 'green' },
    { id: 4, shape: 'rectangle', size: 80, color: 'yellow' },
    { id: 5, shape: 'hexagon', size: 90, color: 'purple' },
  ];

  // 2. Стабильная композиция
  const stableFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 50, y: 60 + index * 5 },
  }));

  // 3. Динамичная композиция
  const dynamicFigures: FigureData[] = baseFigures.map((figure, index) => ({
    ...figure,
    position: { x: 20 + index * 15, y: 20 + index * 15 },
  }));

  // 4. Доминанта
  const dominantFigures: FigureData[] = baseFigures.map((figure) => ({
    ...figure,
    size: figure.id === 3 ? figure.size * 1.5 : figure.size,
    color: figure.id === 3 ? 'orange' : figure.color,
    position: {
      x: figure.id === 3 ? 50 : Math.random() * 80 + 10,
      y: figure.id === 3 ? 50 : Math.random() * 80 + 10,
    },
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Практическая работа</h1>

      {/* Стабильная композиция */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Стабильная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={stableFigures} />
        </div>
      </section>

      {/* Динамичная композиция */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Динамичная композиция</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dynamicFigures} />
        </div>
      </section>

      {/* Доминанта */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Композиция с доминантой</h2>
        <div className="border w-full h-96 mx-auto relative">
          <Composition figures={dominantFigures} />
        </div>
      </section>

      {/* 5. Размышления */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Размышления</h2>
        <p>
          После завершения обеих композиций, мы можем увидеть, как расположение, размер и цвет фигур
          влияют на общее восприятие композиции. В стабильной композиции элементы расположены таким
          образом, чтобы создать баланс и гармонию. В динамичной композиции расположение фигур
          создает ощущение движения и напряжения. В композиции с доминантой одна фигура выделяется
          среди остальных, привлекая основное внимание.
        </p>
      </section>
    </div>
  );
};

export default IndexPage;
