import React from "react";

interface TokenomicsProps {
  leftImage: string; // URL da imagem grande à esquerda
  chartImage: string; // URL da imagem grande abaixo do título
}

const Tokenomics: React.FC<TokenomicsProps> = ({ leftImage, chartImage }) => {
  return (
    <div className="relative bg-[url('/back2.gif')] py-16 px-2 lg:px-8 flex items-center min-h-screen flex-col">

    <div className="flex items-center mx-auto">

      <h2 id="tokenomics" className="text-4xl text-white font-bold drop-shadow-lg font-custom ">Tokenomics</h2>
    </div>


      <div className="py-16 px-2 md:px-8 flex items-center flex-col-reverse md:flex-row">
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
        

        {/* Imagem do Gráfico */}
        <img
          src={chartImage}
          alt="Tokenomics Chart"
          className="w-full max-w-xl md:max-w-2xl object-contain rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};

export default Tokenomics;
