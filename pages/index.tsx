// pages/index.tsx
import React, { useState } from 'react';
import Practice1 from '../components/Practice1';
import Practice2 from '../components/Practice2';
import Practice3 from '../components/Practice3';
import Practice4 from '../components/Practice4';
import PracticesDotMenu from '../components/PracticesDotMenu';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('practice1');

  return (
    <div className="min-h-screen relative">
      <PracticesDotMenu currentTab={currentTab} onChangeTab={(tab) => setCurrentTab(tab)} />
      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};

export default IndexPage;
