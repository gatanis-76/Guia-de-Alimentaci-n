import React, { useState } from 'react';
import type { FoodItem } from '../types';

interface FoodTableProps {
  items: FoodItem[];
  isHealthy: boolean;
}

interface FoodCardProps {
  item: FoodItem;
  isHealthy: boolean;
  isActive: boolean;
  onClick: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, isHealthy, isActive, onClick }) => {
  const cardColor = isHealthy ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300';
  const titleColor = isHealthy ? 'text-green-800' : 'text-red-800';

  return (
    <div className="relative h-full">
      <div 
        className={`flex flex-col items-center p-4 border-2 ${cardColor} rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-full cursor-pointer`}
        onClick={onClick}
      >
        <img src={item.iconSrc} alt={item.name} className="w-24 h-24 object-contain mb-3" />
        <h4 className={`text-xl font-bold ${titleColor} text-center`}>{item.name}</h4>
        <p className="text-sm text-stone-600 mt-2 text-center font-semibold">Ej: {item.examples}</p>
        <p className="text-md text-stone-800 mt-3 text-center flex-grow">{item.description}</p>
      </div>
      {isActive && item.clickMessage && (
        <div className="absolute bottom-full mb-3 w-5/6 left-1/2 -translate-x-1/2 p-3 bg-white rounded-lg shadow-xl animate-pop-in z-10">
          <p className="text-stone-700 font-semibold text-center text-md">{item.clickMessage}</p>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform translate-y-full"></div>
        </div>
      )}
    </div>
  );
};

const FoodTable: React.FC<FoodTableProps> = ({ items, isHealthy }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (itemName: string) => {
    setActiveCard(prev => prev === itemName ? null : itemName);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {items.map((item) => (
        <FoodCard 
          key={item.name} 
          item={item} 
          isHealthy={isHealthy}
          isActive={activeCard === item.name}
          onClick={() => handleCardClick(item.name)}
        />
      ))}
    </div>
  );
};

export default FoodTable;
