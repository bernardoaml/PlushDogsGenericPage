import React from "react";

interface TokenomicsProps {
  leftImage: string; // URL da imagem grande à esquerda
  chartImage: string; // URL da imagem grande abaixo do título
}

const Tokenomics: React.FC<TokenomicsProps> = ({ leftImage, chartImage }) => {
  return (
    <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 py-16 px-8 flex items-center min-h-screen">
      {/* Imagem Grande à Esquerda */}
      <div className="flex-1 flex justify-center">
        <img
          src={leftImage}
          alt="Left Illustration"
          className="max-w-sm md:max-w-lg object-contain rounded-lg "
        />
      </div>

      {/* Conteúdo à Direita */}
      <div className="flex-1 flex flex-col items-center text-white text-center">
        {/* Título */}
        <h2 className="text-5xl font-bold mb-8 drop-shadow-lg">Tokenomics</h2>
        <h3 className="font-bold mb-8 drop-shadow-lg">All you need to know before pumping</h3>

        {/* Imagem do Gráfico */}
        <img
          src={chartImage}
          alt="Tokenomics Chart"
          className="max-w-md md:max-w-lg object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
