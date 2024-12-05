import React from 'react';
import Figure from './Figure';

interface FigureData {
  id: number;
  shape: 'circle' | 'square' | 'triangle' | 'rectangle' | 'hexagon';
  size: number;
  color: string;
  position: { x: number; y: number };
}

interface CompositionProps {
  figures: FigureData[];
}

const Composition: React.FC<CompositionProps> = ({ figures }) => {
  return (
    <div className="relative w-full h-full">
      {figures.map((figure) => (
        <div
          key={figure.id}
          className="absolute"
          style={{
            left: `${figure.position.x}%`,
            top: `${figure.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Figure shape={figure.shape} size={figure.size} color={figure.color} />
        </div>
      ))}
    </div>
  );
};

export default Composition;
