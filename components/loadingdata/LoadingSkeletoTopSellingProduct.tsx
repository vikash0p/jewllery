import React from 'react'

const LoadingSkeletoTopSellingProduct = () => {
  return (
    <div className="animate-pulse">
      <div className="relative w-56 h-64 bg-gray-300"></div>
      <div className="py-4 space-y-2">
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className='flex gap-10'>
            <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeletoTopSellingProduct
