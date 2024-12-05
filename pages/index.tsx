import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Composition, { FigureData } from '../components/Composition';
import Moodboard from '../components/Moodboard';
import ColorPalette from '../components/ColorPalette';
import CyberpunkStyle from '../components/CyberpunkStyle';
import CyberpunkReview from '../components/CyberpunkReview';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="min-h-screen">
      <BurgerMenu currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};

const Practice1: React.FC = () => {
  // Код остается без изменений

  // ...

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Практическая работа 1</h1>

      {/* Остальной код практики 1 */}
    </div>
  );
};

const Practice2: React.FC = () => {
  const colorPalette = {
    primary: '#2c3e50',
    secondary: '#ecf0f1',
    accent: '#e74c3c',
  };

  const styles = {
    header: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.secondary,
    },
    button: {
      backgroundColor: colorPalette.accent,
      color: '#fff',
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colorPalette.secondary }}>
      <BurgerMenu currentTab="practice2" onTabChange={() => {}} />

      {/* Остальной код практики 2 */}
    </div>
  );
};

const Practice3: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-200">
      <BurgerMenu currentTab="practice3" onTabChange={() => {}} />

      {/* Остальной код практики 3 */}
    </div>
  );
};

const Practice4: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-300">
      <BurgerMenu currentTab="practice4" onTabChange={() => {}} />

      {/* Остальной код практики 4 */}
    </div>
  );
};

export default IndexPage;
