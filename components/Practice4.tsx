import React from 'react';
import CyberpunkStyle from './CyberpunkStyle';
import CyberpunkReview from './CyberpunkReview';

const Practice4: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-300">
      <section className="p-8 bg-dark-800">
        <CyberpunkStyle />
      </section>

      <div className="h-1 bg-yellow-500"></div>

      <section>
        <CyberpunkReview />
      </section>
    </div>
  );
};

export default Practice4;
