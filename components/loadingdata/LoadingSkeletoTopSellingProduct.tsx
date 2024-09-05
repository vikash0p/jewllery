'use client'
import React from "react";

const LoadingSkeletonTopSellingProduct = () => {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center">
      {/* Skeleton for Image */}
      <div className="relative w-full max-w-sm md:w-56 h-32 md:h-64 bg-gray-300"></div>

      {/* Skeleton for Text */}
      <div className="py-4 space-y-2 w-full md:w-56">
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>

        {/* Skeleton for Pricing */}
        <div className="flex gap-2 md:gap-10">
          <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeletonTopSellingProduct;
