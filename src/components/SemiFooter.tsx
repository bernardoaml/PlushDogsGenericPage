import React from "react";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SemiFooter: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-8 text-center">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4">Join the Generic Coin!</h2>
      {/* Texto descritivo */}
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus eu ligula fermentum viverra non ac nunc.
      </p>

      {/* Imagens (opcionalmente usar placeholders por enquanto) */}
      <div className="absolute top-8 left-8">
        <img
          src="https://media.tenor.com/gKrTnnGi5LgAAAAj/luffy-mugen.gif"
          alt="Left Illustration"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="absolute top-8 right-8">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac0b094b-c466-460a-b5f3-db588b5100e1/dg8csz5-f43d08f6-d12f-4038-b84a-84589dbadc69.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjMGIwOTRiLWM0NjYtNDYwYS1iNWYzLWRiNTg4YjUxMDBlMVwvZGc4Y3N6NS1mNDNkMDhmNi1kMTJmLTQwMzgtYjg0YS04NDU4OWRiYWRjNjkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nQBogdTh1ZFEgnMoBzTeFfVqSkwuFaMkZrgLPljA5j8"
          alt="Right Illustration"
          className="rotate-y-180 rounded-full shadow-lg"
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
      DISCLOSURE: By purchasing $TOKEN coin, you agree that you are not purchasing a security  or investment contract and you agree to hold the team harmless and not liable for any loses or taxes you may incur. Although HAMI is a community driven Defi Ecosystem and not a registered digital currency, alwaus make sure that you are in compliance with local laws and regulations before you make any purchase.
      </p>
    </div>
  );
};

export default SemiFooter;
