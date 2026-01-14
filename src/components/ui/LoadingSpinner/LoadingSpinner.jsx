import React from "react";

const LoadingSpinner = () => {
  return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Loader Circle */}
      <div className="relative w-24 h-24 mb-6 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-r-blue-500 border-b-pink-500 border-l-yellow-500"></div>
      </div>

      {/* MegaMart Text Animation */}
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 animate-pulse">
        MegaMart
      </h1>

      <p className="mt-2 text-gray-500 animate-pulse">
        Loading your awesome products...
      </p>
    </div>
  );
};

export default LoadingSpinner;
