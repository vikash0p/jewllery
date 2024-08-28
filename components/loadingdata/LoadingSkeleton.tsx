export const LoadingSkeleton = () => (
  <div className="flex flex-wrap justify-between gap-8 pt-8 m-auto max-w-7xl">
    {[1, 2, 3, 4.5, 6].map((i) => (
      <div key={i} className="text-center animate-pulse">
        <div className="bg-gray-300 rounded-full w-36 h-36"></div>
        <div className="w-24 h-5 m-auto mt-2 bg-gray-300 rounded"></div>
        <div className="h-6 m-auto mt-4 bg-gray-300 rounded w-36"></div>
      </div>
    ))}
  </div>
);
