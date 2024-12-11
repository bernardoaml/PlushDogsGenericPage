import React from "react";
import styles from "./InfiniteCarousel.module.css"; // Css File

const InfiniteCarousel: React.FC = () => {
  // Images
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/11.png",
    "/images/12.png",
    "/images/14.png",
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-8">

      {/* White Lines */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white"></div>

        {/* Carousel */}
        <div className={`${styles.carouselContainer}`}>
          <div className={`${styles.carouselTrack}`}>
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-64 p-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={src}
                    alt={`Carousel Item ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Dupe to infinite scroll */}
            {images.map((src, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 p-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={src}
                    alt={`Carousel Item Duplicate ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
