// SkeletonLoader.js
import React from "react";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="flex mt-2 items-center justify-between space-x-4 hover:bg-secondary/80 rounded-lg py-4 px-2">
        <div className="flex items-center space-x-4">
          {/* Simulate the icon */}
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          {/* Simulate the text area */}
          <div>
            <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div> {/* Title */}
            <div className="h-3 bg-gray-200 rounded w-32"></div> {/* Subtitle */}
          </div>
        </div>
        {/* Simulate the button */}
        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
      </div>
    ))}
  </div>
);


export default SkeletonLoader;
