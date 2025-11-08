import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 border-b-4 border-cyan-200 pb-8">
      <div className="mb-8 h-24 flex items-center justify-center border-2 border-dashed border-stone-400 rounded-lg bg-orange-50/50">
        <p className="text-stone-500 font-semibold text-center p-2">
            Espacio para el logotipo del colegio
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-cyan-800 tracking-wider">
        Feria Multidisciplinaria – Ciencias Naturales
      </h1>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-500 mt-4 leading-tight drop-shadow-sm">
        COMER BIEN,
        <br />
        PARA VIVIR MEJOR
      </h2>
      <p className="text-xl md:text-2xl text-stone-700 mt-2 font-bold">
        GUÍA DE ALIMENTOS SALUDABLES Y NO SALUDABLES
      </p>
      
      <div className="mt-8 text-stone-600">
        <p className="font-bold mb-2 text-lg">Participantes:</p>
        <div className="text-center text-md font-semibold space-y-1">
            <p>Adriana Isabella Bautista Barretas</p>
            <p>Alejandro Flores Chirinos</p>
            <p>Luciano Pérez Heredia</p>
            <p>Mia Belén Rodas Marett</p>
            <p>Luis Andrés Virreira Ortega</p>
        </div>
      </div>

      <p className="mt-8 text-lg text-stone-500 font-semibold">
        La Paz, 08 de noviembre 2025
      </p>
    </header>
  );
};

export default Header;
