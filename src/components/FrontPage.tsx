import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

interface FrontPageProps {
  title: string; // Main title
  description: string; // Token Description
  imageUrl?: string; // Image URL (optional)
  logoUrl: string; // Logo URL
  buyLink: string; // Link for the "Buy Now" button
}

const FrontPage: React.FC<FrontPageProps> = ({ title, description, imageUrl, logoUrl, buyLink }) => {
  return (
    <div className="relative bg-[url('/back1.png')] shadow-lg overflow-hidden min-h-screen">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-br from-blue-900 to-purple-800 blur-3xl"></div>

      {/* Barra superior */}
      <div className="relative z-20 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <img
          src={logoUrl}
          alt="Logo"
          className="h-12 w-auto object-contain rounded-full"
        />

        {/* Navegação */}
        <nav className="flex space-x-8 text-white font-bold text-lg">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#tokenomics" className="hover:text-blue-500 transition">Tokenomics</a>
          <a href="#why-us" className="hover:text-blue-500 transition">Why Choose Us?</a>
        </nav>

        {/* Botão "Buy Now" e ícones sociais */}
        <div className="flex items-center space-x-4">
          {/* Botão "Buy Now" */}
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Buy Now
          </a>

          {/* Ícones sociais */}
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg font-custom">{title}</h1>
        <p className="text-lg mt-4 text-gray-300 max-w-4xl mx-auto font-custom">{description}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="mt-8 w-md mx-auto rounded-xl shadow-xl border border-gray-700"
          />
        )}
      </div>
    </div>
  );
};

export default FrontPage;
