import React from "react";

interface TokenomicsProps {
  leftImage: string; // URL da imagem grande à esquerda
  chartImage: string; // URL da imagem grande abaixo do título
}

const Tokenomics: React.FC<TokenomicsProps> = ({ leftImage, chartImage }) => {
  return (
    <div className="relative bg-[url('/back2.gif')] py-16 px-8 flex items-center min-h-screen">
      {/* Imagem Grande à Esquerda */}
      <div className="flex-1 flex justify-center">
        <img
          src={leftImage}
          alt="Left Illustration"
          className="w-full max-w-xl md:max-w-3xl object-contain rounded-lg"
        />
      </div>

      {/* Conteúdo à Direita */}
      <div className="flex-1 flex flex-col items-center text-white text-center outline-8 outline-black">
        {/* Título */}
        <h2 id="tokenomics" className="text-5xl font-bold mb-8 drop-shadow-lg font-custom ">Tokenomics</h2>

        {/* Imagem do Gráfico */}
        <img
          src={chartImage}
          alt="Tokenomics Chart"
          className="w-full max-w-xl md:max-w-2xl object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
