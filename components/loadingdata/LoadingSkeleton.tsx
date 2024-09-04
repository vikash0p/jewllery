export const LoadingSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 pt-8 text-center ">
    {[1, 2, 3, 4.5, 6].map((i) => (
      <div key={i} className="text-center animate-pulse flex items-center flex-col">
        <div className="bg-gray-300 rounded-full w-36 h-36"></div>
        <div className="w-24 h-5 m-auto mt-2 bg-gray-300 rounded"></div>
        <div className="h-6 m-auto mt-4 bg-gray-300 rounded w-36"></div>
      </div>
    ))}
  </div>
);
