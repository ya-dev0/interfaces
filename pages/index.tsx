// pages/index.tsx
import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Practice1 from '../components/Practice1';
import Practice2 from '../components/Practice2';
import Practice3 from '../components/Practice3';
import Practice4 from '../components/Practice4'; // Переписанная практика 4

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="min-h-screen">
      <BurgerMenu onTabChange={handleTabChange} />
      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};

export default IndexPage;
