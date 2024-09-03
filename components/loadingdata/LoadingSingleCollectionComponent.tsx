import React, { FC } from 'react'

const LoadingSingleCollectionComponent:FC = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col -mx-4 md:flex-row animate-pulse">
          <div className="px-4 md:flex-1">
            <div className="h-[460px] bg-gray-300 mb-4 rounded-lg"></div>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 h-10 px-2 bg-gray-300 rounded-full"></div>
              <div className="w-1/2 h-10 px-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <div className="h-8 mb-4 bg-gray-300 rounded"></div>
            <div className="h-6 mb-4 bg-gray-300 rounded"></div>
            <div className="flex mb-4">
              <div className="w-1/3 h-6 mr-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
            </div>

            <div className="h-6 mb-4 bg-gray-300 rounded"></div>
            <div className="h-20 bg-gray-300 rounded"></div>

            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSingleCollectionComponent
