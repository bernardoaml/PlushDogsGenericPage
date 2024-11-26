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
    <div className="relative bg-gradient-to-r from-orange-300 to-orange-500 py-16 px-8 flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
        {title}
      </h2>

      {/* Imagens e Texto */}
      <div className="relative flex items-center justify-center w-full">
        {/* Imagem à Esquerda */}
        <img
          src={leftImage}
          alt="Left Illustration"
          className="max-w-sm md:max-w-md object-contain"
        />

        {/* Texto no Quadrado */}
        <div className=" text-orange-700 font-bold text-3xl rounded-lg px-8 py-6 mx-4 max-w-xl">
          {description}
        </div>

        {/* Imagem à Direita */}
        <img
          src={rightImage}
          alt="Right Illustration"
          className="max-w-sm md:max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
