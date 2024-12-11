import React from "react";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SemiFooter: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8 text-center">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4">Join the PLUSH DOG Community</h2>
      {/* Texto descritivo */}
      <p className="text-lg max-w-2xl mx-auto mb-8">
      Be Part of the Pack: Connect, Grow, and Thrive with us!
      </p>

      {/* Imagens (opcionalmente usar placeholders por enquanto) */}
      <div className="absolute top-8 left-8">
        <img
          src="/leftgif.gif"
          alt="Left Illustration"
          className="rounded-full shadow-lg w-32 md:w-40 lg:w-48"
        />
      </div>
      <div className="absolute top-8 right-8">
        <img
          src="/rightgif.gif"
          alt="Right Illustration"
          className="rounded-full shadow-lg w-32 md:w-40 lg:w-48"
        />
      </div>

      {/* Ícones e textos */}
      <div className="flex justify-center items-center gap-12 mb-8">
        {/* Twitter */}
        <div className="flex flex-col items-center">
          <FaTwitter size={48} className="text-orange-500 mb-2 cursor-pointer" />
          <p className="font-bold">Twitter Growing!</p>
        </div>
        {/* Telegram */}
        <div className="flex flex-col items-center">
          <FaTelegramPlane size={48} className="text-orange-500 mb-2 cursor-pointer" />
          <p className="font-bold">Telegram Growing!</p>
        </div>
        {/* Instagram */}
        <div className="flex flex-col items-center">
          <FaInstagram size={48} className="text-orange-500 mb-2 cursor-pointer"/>
          <p className="font-bold">Instagram Growing!</p>
        </div>
        {/* YouTube */}
        <div className="flex flex-col items-center">
          <FaYoutube size={48} className="text-orange-500 mb-2 cursor-pointer" />
          <p className="font-bold">Youtube Growing!</p>
        </div>
        {/* TikTok */}
        <div className="flex flex-col items-center">
          <FaTiktok size={48} className="text-orange-500 mb-2 cursor-pointer" />
          <p className="font-bold">TikTok Growing!</p>
        </div>
      </div>

      {/* Texto inferior */}
      <p className="text-sm text-gray-200 max-w-3xl mx-auto">
      DISCLOSURE: By purchasing $PLUSH coin, you agree that you are not purchasing a security  or investment contract and you agree to hold the team harmless and not liable for any loses or taxes you may incur. Although PLUSH is a community driven Defi Ecosystem and not a registered digital currency, alwaus make sure that you are in compliance with local laws and regulations before you make any purchase.
      </p>
    </div>
  );
};

export default SemiFooter;
