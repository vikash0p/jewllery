"use client";

const ListViewCardSkeleton = () => {
  return (
    <div className="px-10">
      {Array.from({ length:12  }).map((_, index) => (
        <div
          key={index}
          className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 px-12  animate-pulse mb-4"
        >
          <div className="flex-shrink-0 w-48 h-48 bg-gray-300 rounded-lg"></div>
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <div className="mb-2">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/6"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewCardSkeleton;
