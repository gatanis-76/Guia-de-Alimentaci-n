import React, { useState } from 'react';

interface PyramidLevelProps {
  color: string;
  width: string;
  text: string;
  items: string;
  iconSrcs: string[];
  onIconClick: (src: string) => void;
}

const PyramidLevel: React.FC<PyramidLevelProps> = ({ color, width, text, items, iconSrcs, onIconClick }) => (
  <div className={`relative ${width} h-28 md:h-36 ${color} mx-auto flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 group rounded-md shadow-md`}>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-md"></div>
    <div className="flex justify-center items-center gap-x-4 md:gap-x-8">
        {iconSrcs.map(src => (
            <img 
                key={src} 
                src={src} 
                alt={text} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg cursor-pointer transform hover:scale-125 transition-transform" 
                onClick={() => onIconClick(src)}
            />
        ))}
    </div>
    <span className="font-bold text-white text-md md:text-xl drop-shadow-lg mt-2">{text}</span>
    <div className="absolute -bottom-2 translate-y-full w-full p-2 bg-white bg-opacity-95 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <p className="text-sm md:text-md text-stone-700 font-bold">{items}</p>
    </div>
  </div>
);

const FoodPyramid: React.FC = () => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);

  const handleIconClick = (src: string) => {
    setZoomedIcon(src);
  };

  const handleCloseZoom = () => {
    setZoomedIcon(null);
  };

  return (
    <>
      <div className="my-8 flex flex-col space-y-1">
        <PyramidLevel 
          color="bg-red-500" 
          width="w-1/3" 
          text="Comer poco"
          iconSrcs={['/icons/pyramid-1.png', '/icons/pyramid-2.png']}
          items="Grasas, Azúcares, Procesados"
          onIconClick={handleIconClick}
        />
        <PyramidLevel 
          color="bg-yellow-500" 
          width="w-2/3" 
          text="Comer moderado"
          iconSrcs={['/icons/pyramid-3.png', '/icons/pyramid-4.png', '/icons/pyramid-5.png']}
          items="Lácteos, Carnes, Huevos"
          onIconClick={handleIconClick}
        />
        <PyramidLevel 
          color="bg-green-500" 
          width="w-full" 
          text="Comer mucho"
          iconSrcs={['/icons/pyramid-6.png', '/icons/pyramid-7.png', '/icons/pyramid-8.png']}
          items="Frutas, Verduras, Cereales, Legumbres"
          onIconClick={handleIconClick}
        />
      </div>

      {zoomedIcon && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={handleCloseZoom}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
             <img src={zoomedIcon} alt="Icono ampliado" className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg" />
             <button
                onClick={handleCloseZoom}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg transform hover:scale-110 transition-transform"
                aria-label="Cerrar"
             >
                &times;
             </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodPyramid;
