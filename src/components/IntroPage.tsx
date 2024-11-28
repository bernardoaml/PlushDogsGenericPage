"use client";

import React, { useState } from "react";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";

interface IntroPageProps {
  onStart: () => void; // Function to render other components
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleStart = () => {
    setShowVideo(true);
    onStart(); // Note to enable other components
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {!showVideo ? (
        // Button Screen
        <div className="flex justify-center items-center min-h-screen">
          <button
            onClick={handleStart}
            className="bg-black text-white font-bold text-lg py-3 px-6 rounded-full border-2 border-gray-600 shadow-lg hover:shadow-white transition-all duration-300"
          >
            Join $Token
          </button>
        </div>
      ) : (
        // Video Screen
        <div className="relative min-h-screen flex flex-col">
          {/* Video */}
          <video
            src="/video.mp4" // Video on public folder
            autoPlay
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/*Mask*/}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

          {/*Text*/}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">$Token</h1>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-4">
            {/* Text CA */}
            <p className="text-xl text-gray-300">CA:XxXxXxXxXxXxXxXxXxXx</p>

            {/*Socials*/}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaTwitter className="drop-shadow-[0_0_5px_#fff]" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaTelegramPlane className="drop-shadow-[0_0_5px_#fff]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-red-500 transition duration-300"
              >
                <FaYoutube className="drop-shadow-[0_0_5px_#fff]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPage;
