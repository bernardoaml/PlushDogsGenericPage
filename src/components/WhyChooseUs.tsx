import React from "react";

interface WhyChooseUsProps {
  leftImage: string; // URL da imagem grande à esquerda
  rightImage: string; // URL da imagem grande à direita
  title: string; // Título principal
  description: string; // Texto do quadrado
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  leftImage,
  rightImage,
  title,
  description,
}) => {
  return (
    <div className="relative bg-[url('/back4.png')] py-16 px-8 flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-lg font-custom">
        {title}
      </h2>

      {/* Imagens e Texto */}
      <div className="relative flex items-center justify-center w-full">
        {/* Imagem à Esquerda */}
        <img
          src={leftImage}
          alt="Left Illustration"
          className="max-w-sm md:max-w-xl object-contain"
        />

        {/* Texto no Quadrado */}
        <div className=" text-gray-300 font-bold text-xl rounded-lg px-8 py-6 mx-4 max-w-xl font-custom">
          {description}
        </div>

        {/* Imagem à Direita */}
        <img
          src={rightImage}
          alt="Right Illustration"
          className="max-w-sm md:max-w-xl object-contain"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
