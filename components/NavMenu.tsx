import React, { useState } from 'react';
import Link from 'next/link';

interface NavMenuProps {
  currentPractice: string;
  onSelectPractice: (practice: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ currentPractice, onSelectPractice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const practices = [
    { id: 'practice1', name: 'Практическая работа 1' },
    { id: 'practice2', name: 'Практическая работа 2' },
    { id: 'practice3', name: 'Практическая работа 3' },
    { id: 'practice4', name: 'Практическая работа 4' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-white rounded-md shadow-lg py-2">
          {practices.map((practice) => (
            <button
              key={practice.id}
              onClick={() => {
                onSelectPractice(practice.id);
                setIsOpen(false);
              }}
              className={`block px-4 py-2 text-sm w-full text-left ${
                currentPractice === practice.id ? 'bg-gray-700' : ''
              }`}
            >
              {practice.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMenu;
