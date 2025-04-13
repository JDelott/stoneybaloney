'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    // Add your card data here
    { id: 1, name: 'Commander Purpz', image: '/cards/card-1.jpg' },
    { id: 2, name: 'Blazer Back', image: '/cards/card-2.jpg' },
    // ... add all your cards
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <button 
        onClick={prevCard}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-r"
      >
        ←
      </button>
      <div className="flex overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`transform transition-transform duration-500 ${
              index === currentIndex ? 'scale-110 z-20' : 'scale-90'
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        ))}
      </div>
      <button 
        onClick={nextCard}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-l"
      >
        →
      </button>
    </div>
  );
} 
