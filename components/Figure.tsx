import React from 'react';

interface FigureProps {
  shape: 'circle' | 'square' | 'triangle' | 'rectangle' | 'hexagon';
  size: number;
  color: string;
}

const Figure: React.FC<FigureProps> = ({ shape, size, color }) => {
  const commonStyles = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
  };

  switch (shape) {
    case 'circle':
      return <div style={{ ...commonStyles, borderRadius: '50%' }} />;
    case 'square':
      return <div style={commonStyles} />;
    case 'triangle':
      return (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }}
        />
      );
    case 'rectangle':
      return <div style={{ ...commonStyles, height: `${size / 2}px` }} />;
    case 'hexagon':
      return (
        <div
          style={{
            width: `${size}px`,
            height: `${size / 1.1547}px`,
            backgroundColor: color,
            clipPath:
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
        />
      );
    default:
      return null;
  }
};

export default Figure;
