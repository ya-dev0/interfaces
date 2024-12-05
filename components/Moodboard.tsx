import React from 'react';

const moodboardImages = [
  {
    src: '/images/moodboard/sakura.jpg',
    alt: 'Цветущая сакура',
  },
  {
    src: '/images/moodboard/mochi.jpg',
    alt: 'Моти',
  },
  {
    src: '/images/moodboard/kitkat.jpg',
    alt: 'Японский KitKat с зеленым чаем',
  },
  {
    src: '/images/moodboard/tokyo.jpg',
    alt: 'Ночной Токио',
  },
  {
    src: '/images/moodboard/dango.jpg',
    alt: 'Данго на палочке',
  },
];

const Moodboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {moodboardImages.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={image.src} alt={image.alt} className="object-cover w-full h-32" />
        </div>
      ))}
    </div>
  );
};

export default Moodboard;
