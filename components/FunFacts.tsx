import React, { useState } from 'react';

interface Fact {
  iconSrc: string;
  title: string;
  text: string;
  funnyText: string;
  bgColor: string;
  textColor: string;
  titleColor: string;
}

interface FactCardProps extends Fact {
  isActive: boolean;
  onClick: () => void;
}

const FactCard: React.FC<FactCardProps> = ({ iconSrc, title, text, funnyText, bgColor, textColor, titleColor, isActive, onClick }) => (
  <div className="relative">
    <div 
        className={`${bgColor} p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-rotate-2 hover:scale-105 transition-transform duration-300 cursor-pointer h-full`}
        onClick={onClick}
    >
      <img src={iconSrc} alt={title} className="w-24 h-24 mb-4 drop-shadow-lg" />
      <h4 className={`text-2xl font-bold ${titleColor} drop-shadow-md`}>{title}</h4>
      <p className={`${textColor} font-medium mt-2 text-lg`}>{text}</p>
    </div>
    {isActive && (
       <div className="absolute bottom-full mb-3 w-5/6 left-1/2 -translate-x-1/2 p-3 bg-white rounded-lg shadow-xl animate-pop-in z-10">
         <p className="text-stone-700 font-semibold text-center text-md">{funnyText}</p>
         <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform translate-y-full"></div>
       </div>
    )}
  </div>
);


const FunFacts: React.FC = () => {
  const [activeFact, setActiveFact] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveFact(prevActiveFact => prevActiveFact === title ? null : title);
  };
  
  const facts: Fact[] = [
    { iconSrc: "/icons/carrot.svg", title: "¡Súper Visión!", text: "Comer zanahorias te ayuda a tener una vista de lince, ¡incluso en la oscuridad!", funnyText: "¿Has visto alguna vez a un conejo con lentes? ¡Exacto!", bgColor: "bg-orange-500", textColor: "text-orange-50", titleColor: "text-white" },
    { iconSrc: "/icons/water.svg", title: "¡Cerebro a tope!", text: "Beber agüita mantiene tu cerebro despierto y listo para aprender cosas nuevas.", funnyText: "¡Mi cerebro hace 'glug glug' de felicidad!", bgColor: "bg-blue-500", textColor: "text-blue-50", titleColor: "text-white" },
    { iconSrc: "/icons/milk-box.svg", title: "¡Huesos de Acero!", text: "La leche y el yogur hacen tus huesos súper fuertes para que puedas saltar muy alto.", funnyText: "¡Mis huesos son tan fuertes que podrían ser de un superhéroe!", bgColor: "bg-slate-100", textColor: "text-slate-600", titleColor: "text-slate-800" },
    { iconSrc: "/icons/strawberry.svg", title: "¡Energía Frutal!", text: "Las frutas son como baterías recargables que te dan energía para jugar sin parar.", funnyText: "¡Soy más rápido que un rayo con sabor a fresa!", bgColor: "bg-pink-500", textColor: "text-pink-50", titleColor: "text-white" },
    { iconSrc: "/icons/rainbow-vegetables.svg", title: "¡El Arcoíris Mágico!", text: "¡Comer verduras de todos los colores te ayuda a crecer grande, sano y fuerte!", funnyText: "¡Estoy comiendo un arcoíris! ¿Crees que encuentre un tesoro?", bgColor: "bg-green-500", textColor: "text-green-50", titleColor: "text-white" },
    { iconSrc: "/icons/fish.svg", title: "¡Memoria de Elefante!", text: "El pescado ayuda a tu cerebro a recordar todo, ¡como un súper detective!", funnyText: "Recuerdo lo que comí ayer... ¡pescado!", bgColor: "bg-sky-500", textColor: "text-sky-50", titleColor: "text-white" },
    { iconSrc: "/icons/steak.svg", title: "¡Músculos Poderosos!", text: "La carne te da la fuerza necesaria para construir músculos y correr más rápido que nadie.", funnyText: "¡Grrr! ¡Siento cómo mis músculos crecen!", bgColor: "bg-red-500", textColor: "text-red-50", titleColor: "text-white" },
    { iconSrc: "/icons/beans.svg", title: "¡Saltos Mágicos!", text: "Los frijoles y lentejas te dan poder para saltar y correr. ¡Son pequeños pero matones!", funnyText: "¡Dicen que te dan gases... de súper velocidad!", bgColor: "bg-yellow-600", textColor: "text-yellow-50", titleColor: "text-white" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {facts.map((fact) => (
            <FactCard 
                key={fact.title} 
                {...fact} 
                isActive={activeFact === fact.title}
                onClick={() => handleCardClick(fact.title)}
            />
        ))}
    </div>
  );
};

export default FunFacts;
