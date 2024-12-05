import React from 'react';

interface NavTabsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="flex border-b mb-4">
      <button
        className={`py-2 px-4 focus:outline-none ${
          currentTab === 'practice1' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onTabChange('practice1')}
      >
        Практическая работа 1
      </button>
      <button
        className={`py-2 px-4 focus:outline-none ${
          currentTab === 'practice2' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onTabChange('practice2')}
      >
        Практическая работа 2
      </button>
      <button
        className={`py-2 px-4 focus:outline-none ${
          currentTab === 'practice3' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onTabChange('practice3')}
      >
        Практическая работа 3
      </button>
    </div>
  );
};

export default NavTabs;
