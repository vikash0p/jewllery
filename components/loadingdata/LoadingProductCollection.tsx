import React from 'react';

const LoadingProductCollection = () => {
  return (
    <div className="container grid grid-cols-1 gap-5 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col p-4 space-y-4 border rounded-lg shadow-lg animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="h-48 bg-gray-300 rounded-md"></div>

          {/* Name Placeholder */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md "></div>
          </div>

          {/* Price and Stock Placeholder */}
          <div className="flex items-center justify-between">
            <div className="w-1/3 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-1/3 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-1/4 h-6 bg-gray-300 rounded-md"></div>
          </div>

          {/* Rating Placeholder */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <div
                key={starIndex}
                className="w-5 h-5 mr-1 bg-gray-300 rounded-full"
              ></div>
            ))}
            <div className="w-32 h-6 ml-4 bg-gray-300 rounded-md"></div>
          </div>

          {/* Cart Button Placeholder */}
          <div className="w-full h-10 mt-auto bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingProductCollection;
