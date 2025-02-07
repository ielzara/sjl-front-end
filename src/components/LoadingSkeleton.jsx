import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <div 
          key={i}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8 shadow-sm flex flex-row p-6"
        >
          {/* Image placeholder */}
          <div className="w-[300px] h-auto flex-shrink-0 mr-6">
            <div className="w-full h-[200px] rounded overflow-hidden bg-gray-200 animate-pulse" />
          </div>
          
          {/* Content placeholder */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Title placeholder */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
            
            {/* Metadata placeholder */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
            </div>
            
            {/* Content lines placeholder */}
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
            
            {/* Button placeholder */}
            <div className="h-9 bg-gray-200 rounded w-24 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;