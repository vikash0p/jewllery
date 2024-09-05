"use client";
import React from "react";

const LoadingSpecialProduct = () => {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center space-y-4">
      <div className="w-full h-48 md:w-56 md:h-64 bg-gray-300 rounded-lg"></div>
      <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      <div className="flex gap-2 w-full justify-center">
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSpecialProduct;
