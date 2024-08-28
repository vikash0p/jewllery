import React from 'react';

const LoadingProductCollection = () => {
  return (
    <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col space-y-4 p-4 border rounded-lg shadow-lg"
        >
          {/* Image Placeholder */}
          <div className="bg-gray-300 h-48 rounded-md"></div>

          {/* Name Placeholder */}
          <div className="space-y-2">
            <div className="bg-gray-300 h-6 rounded-md"></div>
            <div className="bg-gray-300 h-10 rounded-md "></div>
          </div>

          {/* Price and Stock Placeholder */}
          <div className="flex items-center justify-between">
            <div className="bg-gray-300 h-6 w-1/3 rounded-md"></div>
            <div className="bg-gray-300 h-6 w-1/3 rounded-md"></div>
            <div className="bg-gray-300 h-6 w-1/4 rounded-md"></div>
          </div>

          {/* Rating Placeholder */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <div
                key={starIndex}
                className="bg-gray-300 h-5 w-5 rounded-full mr-1"
              ></div>
            ))}
            <div className="bg-gray-300 h-6 w-32 rounded-md ml-4"></div>
          </div>

          {/* Cart Button Placeholder */}
          <div className="bg-gray-300 h-10 w-full rounded-md mt-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingProductCollection;
