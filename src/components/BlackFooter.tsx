import React from "react";
import Image from "next/image"; // Importação para usar imagens estáticas do Next.js
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const BlackFooter: React.FC = () => {
  return (
    <div className="relative bg-black text-white py-6 px-4">
      {/* Contêiner Principal */}
      <div className="flex flex-col items-center space-y-4">
        {/* Logo com Imagem */}
        <div className="w-16 h-16">
          <Image
            src="/logo-mugi.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        {/* Botão */}
        <button className="bg-black border border-gray-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-white transition-all duration-300">
          Become a $Mugi
        </button>

        {/* Ícones */}
        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaTwitter className="drop-shadow-[0_0_5px_#fff]" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaTelegramPlane className="drop-shadow-[0_0_5px_#fff]" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-red-500 transition"
          >
            <FaYoutube className="drop-shadow-[0_0_5px_#fff]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlackFooter;
