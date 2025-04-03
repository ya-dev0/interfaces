// pages/index.tsx
import React, { useState } from 'react';
import Practice1 from '../components/Practice1';
import Practice2 from '../components/Practice2';
import Practice3 from '../components/Practice3';
import Practice4 from '../components/Practice4';

const IndexPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('practice1');

  return (
    <div className="min-h-screen">
      <nav className="flex space-x-4 bg-gray-800 p-4 text-white justify-center">
        <button onClick={() => setCurrentTab('practice1')}>Практика 1</button>
        <button onClick={() => setCurrentTab('practice2')}>Практика 2</button>
        <button onClick={() => setCurrentTab('practice3')}>Практика 3</button>
        <button onClick={() => setCurrentTab('practice4')}>Практика 4</button>
      </nav>

      {currentTab === 'practice1' && <Practice1 />}
      {currentTab === 'practice2' && <Practice2 />}
      {currentTab === 'practice3' && <Practice3 />}
      {currentTab === 'practice4' && <Practice4 />}
    </div>
  );
};

export default IndexPage;
