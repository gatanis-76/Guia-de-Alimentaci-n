import React from 'react';

interface DocumentDownloaderProps {
  iconSrc: string;
  title: string;
  description: string;
  pdfPath: string;
}

const DocumentDownloader: React.FC<DocumentDownloaderProps> = ({ iconSrc, title, description, pdfPath }) => {
  return (
    <div className="bg-white/70 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-6 border-2 border-orange-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
      <img src={iconSrc} alt={title} className="w-24 h-24 object-contain flex-shrink-0" />
      <div className="text-center sm:text-left">
        <h4 className="text-2xl font-bold text-cyan-800">{title}</h4>
        <p className="text-stone-600 mt-2">{description}</p>
      </div>
      <a
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 sm:ml-auto px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 transform hover:-translate-y-1 whitespace-nowrap"
      >
        Ver y Descargar
      </a>
    </div>
  );
};

export default DocumentDownloader;
