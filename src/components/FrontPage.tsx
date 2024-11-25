import React from "react";

interface FrontPageProps {
  title: string; // Main title
  description: string; // Token Description
  imageUrl?: string; // Image URL (optional)
  logoUrl: string; // Logo URL
  buyLink: string; // Link for the "Buy Now" button
}

const FrontPage: React.FC<FrontPageProps> = ({ title, description, imageUrl, logoUrl, buyLink }) => {
  return (
    <div className="relative text-center p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg overflow-hidden min-h-screen">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl"></div>

      {/* Logo no canto superior esquerdo */}
      <img
        src={logoUrl}
        alt="Logo"
        className="absolute top-4 left-4 h-12 w-auto object-contain rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">{title}</h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">{description}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="mt-8 w-3/5 mx-auto rounded-xl shadow-xl border border-gray-700"
          />
        )}
      </div>

      {/* Button */}
      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Buy Now
      </a>
    </div>
  );
};

export default FrontPage;
