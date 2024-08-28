export const LoadingSkeleton = () => (
  <div className="flex flex-wrap gap-8 justify-between max-w-7xl m-auto pt-8">
    {[1, 2, 3, 4.5, 6].map((i) => (
      <div key={i} className="text-center  animate-pulse">
        <div className="bg-gray-300 w-36 h-36 rounded-full"></div>
        <div className="bg-gray-300 w-24 h-5 mt-2 rounded m-auto"></div>
        <div className="bg-gray-300 w-36 h-6 mt-4 rounded m-auto"></div>
      </div>
    ))}
  </div>
);
