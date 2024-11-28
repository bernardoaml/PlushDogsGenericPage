import React from "react";
import styles from "./InfiniteCarousel.module.css"; // Css File

const InfiniteCarousel: React.FC = () => {
  // Images
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
  ];

  return (
    <div className="relative bg-black text-white py-8">
      {/* Centered Text */}
      <h2 className="text-center text-2xl font-bold uppercase mb-8">
        The official coin for Mugiwaras
      </h2>

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
