import React from "react";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SemiFooter: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8 text-center">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4 font-custom">Join the PLUSH DOG Community</h2>
      {/* Texto descritivo */}
      <p className="text-lg max-w-2xl mx-auto mb-8">
      Be Part of the Pack: Connect, Grow, and Thrive with us!
      </p>

      {/* Imagens (opcionalmente usar placeholders por enquanto) */}
      <div className="absolute top-8 left-8 hidden lg:flex">
        <img
          src="/leftgif.gif"
          alt="Left Illustration"
          className="rounded-full shadow-lg w-32 md:w-40 lg:w-48"
        />
      </div>
      <div className="absolute top-8 right-8 hidden lg:flex">
        <img
          src="/rightgif.gif"
          alt="Right Illustration"
          className="rounded-full shadow-lg w-32 md:w-40 lg:w-48"
        />
      </div>

      {/* Ícones e textos */}
      <div className="flex justify-center items-center gap-8 mb-8">
  {/* Twitter */}
  <div className="flex flex-col items-center">
    <a
      href="https://x.com/PlushDogSolana"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter size={36} className="text-blue-400 mb-2 cursor-pointer" />
    </a>
    <p className="font-bold text-xs">Twitter Growing!</p>
  </div>

  {/* Telegram */}
  <div className="flex flex-col items-center">
    <a
      href="https://t.me/PlushDogSol"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTelegramPlane size={36} className="text-blue-400 mb-2 cursor-pointer" />
    </a>
    <p className="font-bold text-xs">Telegram Growing!</p>
  </div>

  {/* Instagram */}
  <div className="flex flex-col items-center">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={36} className="text-blue-400 mb-2 cursor-pointer" />
    </a>
    <p className="font-bold text-xs">Coming Soon!</p>
  </div>

  {/* YouTube */}
  <div className="flex flex-col items-center">
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube size={36} className="text-sky-400 mb-2 cursor-pointer" />
    </a>
    <p className="font-bold text-xs">Coming Soon!</p>
  </div>

  {/* TikTok */}
  <div className="flex flex-col items-center">
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTiktok size={36} className="text-sky-400 mb-2 cursor-pointer" />
    </a>
    <p className="font-bold text-xs">Coming Soon!</p>
  </div>

      </div>

      {/* Texto inferior */}
      <p className="text-sm text-gray-200 max-w-3xl mx-auto">
      DISCLOSURE: By purchasing $PLUSH coin, you agree that you are not purchasing a security  or investment contract and you agree to hold the team harmless and not liable for any loses or taxes you may incur. Although PLUSH is a community driven Defi Ecosystem and not a registered digital currency, always make sure that you are in compliance with local laws and regulations before you make any purchase.
      </p>
    </div>
  );
};

export default SemiFooter;
