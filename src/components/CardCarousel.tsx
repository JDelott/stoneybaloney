'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    { id: 1, name: 'Abracadabra', image: '/abracadabra-card-copy-2.png' },
    { id: 2, name: 'Alien Bubba', image: '/alien-bubba-card-copy.png' },
    { id: 3, name: 'Blue Dream', image: '/blue-dream-copy.png' },
    { id: 4, name: 'Celebration of Life', image: '/celebration-of-life-copy.png' },
    { id: 5, name: 'Crackberry', image: '/crackberry-copy.png' },
    { id: 6, name: 'Glitter Bomb', image: '/glitter-bomb-card-copy.png' },
    { id: 7, name: 'Grease Monkey', image: '/grease-moneky-copy.png' },
    { id: 8, name: 'GSC', image: '/gsc-copy.png' },
    { id: 9, name: 'Master Kush Jake', image: '/master-kush-jake.png' },
    { id: 10, name: 'Moose and Lo', image: '/moose-and-lobsta-card-copy.png' },
    { id: 11, name: 'Mowie Wowie', image: '/mowie-wowie-copy.png' },
    { id: 12, name: 'Pineapple Express', image: '/new-pineapple-copy.png' },
    { id: 13, name: 'Purp Haze', image: '/purp-haze-copy.png' },
    { id: 14, name: 'Sour D', image: '/sour-d-copy.png' },
    { id: 15, name: 'Super Glue', image: '/super-glue-card-copy.png' },
    { id: 16, name: 'Tropical Taffy', image: '/tropical-taffy-copy-2.png' },
    { id: 17, name: 'UK Cheese', image: '/uk-cheese-card-copy.png' },
    { id: 18, name: 'Wedding Cake', image: '/wedding-cake-copy.png' }
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

  // Adjust visible cards based on screen size
  const getVisibleCards = () => {
    const visibleIndices = [];
    // Show fewer cards on mobile
    const range = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 
      : typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 
      : 2;
    
    for (let i = -range; i <= range; i++) {
      let index = currentIndex + i;
      if (index < 0) index = cards.length + index;
      if (index >= cards.length) index = index - cards.length;
      visibleIndices.push(index);
    }
    return visibleIndices;
  };

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center px-4 sm:px-8 md:px-12">
      {/* Navigation Buttons */}
      <button 
        onClick={prevCard}
        className="absolute left-0 sm:left-4 z-30 bg-[#FF00FF]/20 hover:bg-[#FF00FF]/40 
                   p-2 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous card"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="relative h-full flex items-center justify-center perspective-1000">
        {getVisibleCards().map((index, i) => {
          const card = cards[index];
          const position = i - (getVisibleCards().length - 1) / 2;
          const cardWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 200 
            : typeof window !== 'undefined' && window.innerWidth < 1024 ? 260 
            : 300;
          
          return (
            <div
              key={`${card.id}-${index}`}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `
                  translateX(${position * (cardWidth * 0.8)}px) 
                  scale(${1 - Math.abs(position) * 0.2})
                  rotateY(${position * 5}deg)
                `,
                zIndex: 10 - Math.abs(position),
                opacity: 1 - Math.abs(position) * 0.3,
              }}
            >
              <div className="relative group">
                <div className="relative w-[200px] h-[280px] sm:w-[260px] sm:h-[364px] md:w-[300px] md:h-[420px] 
                              rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority={Math.abs(position) <= 1}
                  />
                  <div 
                    className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                    style={{
                      opacity: position !== 0 ? 0.5 : 0,
                    }}
                  />
                </div>
                {position === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                                from-black/80 to-transparent p-2 sm:p-4 rounded-b-xl
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm sm:text-xl font-bold text-center">{card.name}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <button 
        onClick={nextCard}
        className="absolute right-0 sm:right-4 z-30 bg-[#FF00FF]/20 hover:bg-[#FF00FF]/40 
                   p-2 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next card"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Card Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 overflow-x-auto px-4">
        <div className="flex gap-1 flex-wrap justify-center max-w-full">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'bg-[#FF00FF] w-3 sm:w-4' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              role="button"
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
