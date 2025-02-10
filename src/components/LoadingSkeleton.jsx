import React from 'react';
import PropTypes from 'prop-types';

const ArticleCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col md:flex-row p-2 md:p-4 h-full">
    {/* Image placeholder */}
    <div className="w-full md:w-[280px] bg-gray-100 flex-shrink-0 flex items-center">
      <div className="w-full h-[200px] md:h-[250px] bg-gray-200 animate-pulse" />
    </div>
    
    {/* Content placeholder */}
    <div className="p-4 flex-1 flex flex-col">
      {/* Title placeholder */}
      <div className="h-7 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
      
      {/* Metadata placeholder */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
      </div>
      
      {/* Content lines placeholder */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      </div>
      
      {/* Button placeholder */}
      <div className="mt-auto">
        <div className="h-8 bg-gray-200 rounded w-20 animate-pulse" />
      </div>
    </div>
  </div>
);

const BookCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col items-center gap-2">
    {/* Book cover placeholder */}
    <div className="w-[100px] h-[150px] bg-gray-200 rounded animate-pulse" />
    
    {/* Title placeholder */}
    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
    
    {/* Author placeholder */}
    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
    
    {/* Description placeholder */}
    <div className="space-y-1.5 w-full">
      <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
      <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
    </div>
    
    {/* Button placeholder */}
    <div className="h-6 bg-gray-200 rounded w-16 mt-1 animate-pulse" />
  </div>
);

const ArticleListSkeleton = () => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
    {[1, 2, 3, 4].map((i) => (
      <ArticleCardSkeleton key={i} />
    ))}
  </div>
);

const ArticlePageSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-8">
    <div>
      <ArticleCardSkeleton />
    </div>
    <aside className="bg-white rounded-lg border border-gray-200 p-4 h-fit">
      <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    </aside>
  </div>
);

const LoadingSkeleton = ({ type = 'list' }) => {
  return (
    <div className="max-w-[90%] mx-auto px-4">
      {type === 'list' ? <ArticleListSkeleton /> : <ArticlePageSkeleton />}
    </div>
  );
};

LoadingSkeleton.propTypes = {
  type: PropTypes.oneOf(['list', 'article'])
};

export default LoadingSkeleton;