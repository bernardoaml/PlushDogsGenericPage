"use client"
import React, { useState } from "react";
import FrontPage from "@/components/FrontPage";
import SemiFooter from "@/components/SemiFooter";
import Tokenomics from "@/components/Tokenomics";
import WhyChooseUs from "@/components/WhyChooseUs";
import Ticker from "@/components/TickerScroll/Ticker";
import IntroPage from "@/components/IntroPage";
import InfiniteCarousel from "@/components/Carousel/InfiniteCarousel";
import BlackFooter from "@/components/BlackFooter";

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false); // Estado para controlar os componentes
  const tokenData = {
      title: "PLUSH DOG $PLUSH",
      description: "Is a fun and innovative meme token that brings the energy and spirit of cryptocurrency to the world of dog lovers. With a focus on building a strong and engaged community, PLUSH aims to be more than just a currency it’s a true \"family\" in the crypto universe. Join the PLUSH DOG journey and be part of a movement that’s about more than just numbers it’s about fun, friendship, and a love for dogs. Get ready!!",
      imageUrl: "/plushgif.gif", // Substituir pelo URL real da imagem
      logoUrl: "/plushtalk1.png", // Substituir pela URL real do logo
      buyLink: "https://pump.fun/coin/HX8oHiKr9QRCc1v1t5E2Z5SQyCRS4QsDEK4Qai82pump", // Substituir pelo link real
  };

  return (<div>
    <FrontPage {...tokenData} />
    <Ticker/>
    <Tokenomics
      leftImage="/plushmoustache.png" // Substitua pelo caminho real da imagem

      chartImage="/progres.png"
      />
      <Ticker/>
      <WhyChooseUs
      leftImage="/plushtalk1.png" // Caminho para a imagem à esquerda
      rightImage="/plushtalk2.png" // Caminho para a imagem à direita
      title="Why Choose PLUSH DOG?"
      description="Experience trust and transparency with $PLUSH: LP Burnt, Contract Renounced, and 0% Fees.
      We prioritize the safety and growth of our community. With a burnt liquidity pool (LP), we ensure that there’s no risk of rug pulls, creating a secure environment for investors. By renouncing the contract, we eliminate any possibility of future manipulation, giving you full control over your investment. Plus, with 0% transaction fees, you can enjoy seamless transactions without any hidden costs. ㅤㅤㅤJoin us!"
      />
      <Ticker/>
      <InfiniteCarousel/>
      <SemiFooter/>
    </div>
  );
};

export default App;








{/* <FrontPage {...tokenData} />
<Ticker/>
<Tokenomics
leftImage="/luffy-full-body.png" // Substitua pelo caminho real da imagem

chartImage="/progres.png"
/>
<Ticker/>
<WhyChooseUs
leftImage="/zoro-left.webp" // Caminho para a imagem à esquerda
rightImage="/zoro-right.webp" // Caminho para a imagem à direita
title="Why Choose Generic Coin?"
description="Experience trust and transparency with Generic Coin: LP Burned, Contract Renounced, and 0% Fees! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis quo nihil quia labore dicta enim fuga possimus aut nulla accusamus culpa non dignissimos, neque, voluptatem earum reiciendis magni dolore!"
/>
<Ticker/>
<SemiFooter/> */}




// <div className="min-h-screen bg-gray-100">
//   <IntroPage onStart={() => setShowContent(true)} />
//   {/* Render components after click */}
//   {showContent && (
//     <>
//       <InfiniteCarousel />
//       <BlackFooter />
//     </>
//   )}
// </div>