import React from 'react'

const LoadingSkeletoTopSellingProduct = () => {
  return (
    <div className="animate-pulse">
      <div className="relative w-56 h-64 bg-gray-300"></div>
      <div className="py-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className='flex gap-10'>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeletoTopSellingProduct
