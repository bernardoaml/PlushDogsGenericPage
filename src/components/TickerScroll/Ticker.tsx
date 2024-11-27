import React from "react";
import styles from "./Ticker.module.css"; // Importando o CSS corretamente

const Ticker: React.FC = () => {
  return (
    <div className="relative bg-red-600 py-4 overflow-hidden">
      {/* Faixa contendo o texto duplicado */}
      <div className={`${styles.tickerTrack}`}>
        <div className={`${styles.tickerContent}`}>
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={`1-${index}`} className="text-white font-bold text-xl mx-8">
              $Token        
            </span>
          ))}
          {/* Duplicando o conteúdo para criar a continuidade */}
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={`2-${index}`} className="text-white font-bold text-xl mx-8">
              $Token
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
